# AdobePdfWebApp
An interactive web app that enhances PDF reading with a clickable outline sidebar and smart content highlights—powered by the Adobe PDF Embed API.
# Smart PDF Assistant

Smart PDF Assistant is an interactive web app that makes PDF reading smarter and more efficient. It uses the Adobe PDF Embed API to display a PDF along with dynamic features such as a clickable outline sidebar and context-aware highlights. The outline and highlights are powered by NLP outputs generated in Round 1 of the challenge.

---

## 🚀Features

- ✅ View PDFs directly in the browser  
- 🧭 Clickable outline sidebar (from `outline.json`) for easy navigation  
- 🌟 Important sections highlighted with metadata like persona and job-to-be-done (from `sections.json`)  
- 💅 Clean, responsive UI built with HTML, CSS, and JavaScript  
- 📦 Modular file structure for easy customization

---

## 📁 Project Structure
adobe_pdf_webapp/
├── index.html # Main HTML layout
├── script.js # Logic to load PDF, outline, and highlights
├── style.css # App styling
├── assets/
│ └── sample.pdf # PDF used in demo
├── data/
│ ├── outline.json # Headings extracted in Round 1A
│ └── sections.json # Important sections from Round 1B
├── README.md # Project documentation

---

## 🛠️ How to Run

1. Clone the repository  
2. Open the folder in VS Code  
3. Install the Live Server extension (if not already installed)  
4. Right-click `index.html` → "Open with Live Server"

> 🗝️ Don’t forget to replace `"YOUR_CLIENT_ID"` in `script.js` with your actual Adobe Embed API client ID.  
> Get it here: https://developer.adobe.com/document-services/apis/pdf-embed/


---

## 📚 Data Sources

- `outline.json` – Generated in Round 1A using PDF structural analysis  
- `sections.json` – Generated in Round 1B using semantic understanding and job-to-be-done extraction

---

## 🔒 License

This project is created for educational and demonstration purposes.

---
