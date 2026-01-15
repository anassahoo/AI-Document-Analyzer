📑 AI Document Summarizer








A lightweight, AI‑powered web app to generate clean summaries from your PDF documents in just a few clicks. Upload, extract, and summarize research papers, reports, assignments, and more—right in your browser.

🎯 Highlights

In‑browser PDF processing with PDF.js

AI summarization using your choice of Gemini or OpenAI API

Secure key management via environment variables (.env)

Modern UI built with React, Vite, and Tailwind CSS

Quick setup for developers to run locally

🚀 Getting Started

Follow these steps to run the project locally:

Clone the repository

git clone https://github.com/your-username/ai-document-summarizer.git
cd ai-document-summarizer


Install dependencies

npm install


Add your API key

Create a .env file in the project root and include:

VITE_AI_API_KEY=your_api_key_here


Run the dev server

npm run dev


Open your browser to the URL provided in the terminal (usually http://localhost:5173). You can now upload a PDF and get an instant summary.

🧠 How It Works

This app handles everything in the browser. When you select a PDF:

The file is read into an ArrayBuffer.

The document is parsed page by page via pdfjs-dist.

Extracted text is concatenated into a single string.

A prompt containing this text is sent to the AI API.

The API returns a concise summary, which is displayed on the page.

Feel free to tweak the prompt in /src/utils/summarize.js to tailor the summarization style.

🛠 Tech Stack
Layer	Details
Frontend	React + Vite
PDF	pdfjs‑dist

Styling	Tailwind CSS
AI	Gemini or OpenAI API
Config	Environment variables (.env)
📂 Folder Structure
src/
├── components/
│   └── MainContent.jsx
├── utils/
│   └── summarize.js
├── App.jsx
└── main.jsx

package.json
.gitignore
.env.example
README.md

👀 Example Use Cases

Summarizing research papers for quick understanding

Generating concise notes from assignments or reports

Extracting key highlights from lengthy documents

🧭 Roadmap

 Drag & drop PDF upload

 Multiple document support

 Adjustable summary length

 Export summaries as PDF/TXT

 Server-side processing for added security

🤝 Contributing

Contributions are welcome! Feel free to fork the repository, open issues, or submit pull requests. If you're new to open source, a contribution guide will be added soon.

🧑‍💻 Author

Muhammad Anas — Full‑Stack AI Engineer & SaaS Builder passionate about building tools that turn information into insight.

📜 License

This project is released under the MIT License. See the LICENSE file for details.
