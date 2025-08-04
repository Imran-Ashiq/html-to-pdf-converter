# 📄 HTML to PDF Converter

A professional, feature-rich web application that converts HTML documents to high-quality PDF files with advanced customization options including cropping, scaling, and comprehensive formatting controls.

![HTML to PDF Converter](https://img.shields.io/badge/HTML%20to%20PDF-Converter-blue?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-v22.13.0-green?style=flat-square)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey?style=flat-square)
![Puppeteer](https://img.shields.io/badge/Puppeteer-Latest-orange?style=flat-square)

## ✨ Features

- **🎨 Modern UI** - Clean, professional interface with Font Awesome icons
- **📝 Multiple Input Methods** - HTML editor, file upload, or URL loading
- **📏 Advanced Cropping** - Precise margin control for perfect PDF output
- **📄 Page Customization** - Multiple page formats (A4, A3, A5, Letter, Legal, Tabloid)
- **🔄 Orientation Control** - Portrait and landscape options
- **🔍 Scale Adjustment** - Zoom from 10% to 200%
- **🎯 Page Ranges** - Convert specific pages or ranges
- **🖼️ Background Options** - Control background printing and transparency
- **⚡ Real-time Preview** - See your changes before conversion
- **📱 Responsive Design** - Works on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/html-to-pdf-converter.git
   cd html-to-pdf-converter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📋 Usage

### HTML Editor
1. Enter your HTML content in the built-in editor
2. Customize PDF options (page size, margins, orientation)
3. Click "Convert to PDF" to generate your document

### File Upload
1. Click on the "Upload File" tab
2. Select an HTML file from your computer
3. Configure your PDF settings
4. Generate the PDF

### URL Conversion
1. Switch to the "From URL" tab
2. Enter any website URL
3. Click "Load URL" to fetch the content
4. Customize and convert to PDF

## ⚙️ Configuration Options

| Option | Description | Default |
|--------|-------------|---------|
| **Page Format** | A4, A3, A5, Letter, Legal, Tabloid, Custom | A4 |
| **Orientation** | Portrait or Landscape | Portrait |
| **Scale** | Zoom level (10% - 200%) | 100% |
| **Margins** | Top, Bottom, Left, Right margins | 0px |
| **Background** | Print background graphics | Enabled |
| **Page Ranges** | Specific pages to convert | All pages |

## 🛠️ API Endpoints

### POST `/convert`
Converts HTML content to PDF

**Request Body:**
```json
{
  "html": "<html>...</html>",
  "options": {
    "format": "A4",
    "orientation": "portrait",
    "scale": 1,
    "margin": {
      "top": "0px",
      "bottom": "0px",
      "left": "0px",
      "right": "0px"
    },
    "printBackground": true,
    "preferCSSPageSize": false
  }
}
```

**Response:** PDF file download

## 🏗️ Project Structure

```
html-to-pdf-converter/
├── public/
│   ├── index.html          # Main HTML interface
│   ├── styles.css          # Stylesheet with modern design
│   └── scripts.js          # Frontend JavaScript
├── server.js               # Express server with Puppeteer
├── package.json            # Project dependencies
└── README.md              # Project documentation
```

## 🔧 Development

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or start production server
npm start
```

### Environment Variables
Create a `.env` file in the root directory:
```env
PORT=3000
NODE_ENV=development
```

## 📦 Dependencies

### Production Dependencies
- **Express** - Web framework
- **Puppeteer** - Headless Chrome PDF generation
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

### Frontend Dependencies
- **Font Awesome 6.4.0** - Professional icons
- **Inter Font** - Modern typography

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Bug Reports

If you encounter any bugs or issues, please [open an issue](https://github.com/yourusername/html-to-pdf-converter/issues) with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 🌟 Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

## 📞 Contact

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

**Made with ❤️ and Node.js**
