const express = require('express');
const puppeteer = require('puppeteer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// PDF Generation Options Interface
const pdfOptions = {
    // Page Size Options
    format: 'A4', // 'A3', 'A4', 'A5', 'Letter', 'Legal', 'Tabloid', etc.
    width: null,  // Custom width: '800px', '21cm', '8.5in'
    height: null, // Custom height: '600px', '29.7cm', '11in'
    
    // Margins (Cropping Simulation)
    margin: {
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px'
    },
    
    // Display Options
    landscape: false,
    scale: 1.0, // 0.1 to 2.0
    printBackground: true,
    
    // Advanced Options
    displayHeaderFooter: false,
    headerTemplate: '',
    footerTemplate: '',
    pageRanges: '', // '1-5, 8, 11-13'
    preferCSSPageSize: false,
    omitBackground: false
};

// HTML to PDF Conversion Endpoint
app.post('/convert', upload.single('htmlFile'), async (req, res) => {
    try {
        let htmlContent = req.body.htmlContent;
        let htmlFilePath = null;
        
        // Handle file upload
        if (req.file) {
            htmlFilePath = req.file.path;
            htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
        }
        
        // Parse PDF options from request
        const options = { ...pdfOptions, ...req.body.options };
        
        // Convert margin strings to proper format
        if (options.margin) {
            Object.keys(options.margin).forEach(key => {
                if (typeof options.margin[key] === 'string') {
                    // Ensure margin values have units
                    if (!options.margin[key].match(/[a-zA-Z]+$/)) {
                        options.margin[key] += 'px';
                    }
                }
            });
        }
        
        // Launch browser and generate PDF
        const browser = await puppeteer.launch({ 
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Set HTML content
        await page.setContent(htmlContent, { 
            waitUntil: 'networkidle0',
            timeout: 30000 
        });
        
        // Generate PDF with custom options
        const pdfBuffer = await page.pdf(options);
        
        await browser.close();
        
        // Clean up uploaded file
        if (htmlFilePath && fs.existsSync(htmlFilePath)) {
            fs.unlinkSync(htmlFilePath);
        }
        
        // Send PDF as response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="converted.pdf"');
        res.send(pdfBuffer);
        
    } catch (error) {
        console.error('PDF Generation Error:', error);
        res.status(500).json({ error: 'Failed to generate PDF', details: error.message });
    }
});

// Get available page formats
app.get('/page-formats', (req, res) => {
    const formats = [
        { value: 'A4', label: 'A4 (210 × 297 mm)' },
        { value: 'A3', label: 'A3 (297 × 420 mm)' },
        { value: 'A5', label: 'A5 (148 × 210 mm)' },
        { value: 'Letter', label: 'Letter (8.5 × 11 inches)' },
        { value: 'Legal', label: 'Legal (8.5 × 14 inches)' },
        { value: 'Tabloid', label: 'Tabloid (11 × 17 inches)' }
    ];
    res.json(formats);
});

app.listen(PORT, () => {
    console.log(`🚀 HTML to PDF Converter running on http://localhost:${PORT}`);
});