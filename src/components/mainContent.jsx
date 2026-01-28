import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdDocument } from "react-icons/io";
import * as pdfjsLib from "pdfjs-dist";
import { API } from "../Gemini/GeminiApi";
import ReactMarkdown from "react-markdown";
// Configure PDF.js worker for Vite
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const MainContent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const fileRef = useRef(null);

  const API_KEY = "YOUR_GEMINI_API_KEY_HERE"; // Add your API key here

  const handlefilepicker = () => {
    fileRef.current.click();
  };

  const handleSelectedFiles = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
      let fullText = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(" ");
        fullText += pageText + "\n\n";
      }

      setExtractedText(fullText);
      console.log(fullText);
    } catch (error) {
      console.error("PDF extraction failed", error);
      setError("Failed to extract PDF text");
    }
  };

  const generateSummary = async () => {
    if (!extractedText) {
      setError("Please upload a PDF first");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await API(
        `You are an expert content summarizer.

Summarize the following text clearly and concisely.

Rules:
- First give main heading about document which should be bold and bigger font
- Use simple, easy-to-understand language
- Keep only the most important points
- Do NOT add your own opinions
- Do NOT repeat information
- If the text is long, break the summary into bullet points
- If the text is short, return a short paragraph
- Preserve key facts, numbers, and conclusions

Provide a well-structured summary.`,
        extractedText
      );
      setData(res);
      setLoading(false);
    } catch (error) {
      console.error("Summary generation failed", error);
      setError("Failed to generate summary. Please check your API key.");
      setLoading(false);
    }
  };
  const handleDownload = () => {
    const blob = new Blob([data], { type: "text/plain" });
    const link = URL.createObjectURL(blob);
    const a = document.createElement("a")
    a.href = link
    a.download = "summary.txt"
    a.click()
  }
  return (
    <div className="w-full flex flex-col gap-8 items-center  dark:bg-slate-950 min-h-screen py-10 overflow-y-scroll transition-colors">
      <div className="w-full max-w-4xl px-4">
        <div className=" dark:bg-slate-900 shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-colors">
          <h1 className="text-[#1e293b] dark:text-white text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">
              <IoMdDocument />
            </span>
            Upload your Document
          </h1>
          <div
            onClick={handlefilepicker}
            className="cursor-pointer bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-700 border-dashed rounded-xl p-10 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-600 transition-colors"
          >
            <div className="text-purple-500 text-6xl flex justify-center mb-4">
              <FaCloudUploadAlt />
            </div>
            <h1 className="text-[#1e293b] dark:text-white text-xl font-semibold text-center mb-2">
              Drag and Drop your file here
            </h1>
            <h1 className="text-[#1e293b]/80 dark:text-gray-400 text-center">
              Or{" "}
              <Link className="text-[#1e293b] dark:text-purple-400 font-semibold hover:underline cursor-pointer">
                click
              </Link>{" "}
              to{" "}
              <Link className="text-[#1e293b] dark:text-purple-400 font-semibold hover:underline cursor-pointer">
                browse
              </Link>
            </h1>
          </div>
          <input
            type="file"
            accept="application/pdf"
            ref={fileRef}
            onChange={handleSelectedFiles}
            className="hidden"
          />
          <p className="text-[#1e293b] dark:text-gray-400 mt-4 text-sm">Submit format: PDF</p>
          {extractedText && (
            <p className="text-green-600 mt-2 text-sm">
              ✓ PDF uploaded successfully
            </p>
          )}
          {error && <p className="text-orange-600 mt-2 text-sm">{error}</p>}
          <div className="flex justify-center">
            <button
            disabled={!extractedText}
              onClick={generateSummary}
              
              className="cursor-pointer bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold px-8 py-3 rounded-lg mt-6 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              "✨ Summarize Document"
            </button>
          </div>
        </div>
      </div>
      {/* summary Result */}
      <div className="w-full max-w-4xl px-4 mb-3">
        <div className="bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-colors">
          <h1 className="text-[#1e293b] dark:text-white text-3xl font-bold mb-6">Summary Result</h1>
          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 min-h-[200px] border border-gray-200 dark:border-gray-700 transition-colors">
            {loading && (
              <p className="text-[#1e293b] dark:text-white text-center">Generating summary...</p>
            )}
            {data && !loading && (
              <p className="text-[#1e293b] dark:text-gray-200 whitespace-pre-wrap"> <ReactMarkdown>{data}</ReactMarkdown></p>
            )}
            {!data && !loading && (
              <p className="text-[#1e293b]/60 dark:text-gray-500 text-center">
                Summary will appear here...
              </p>
            )}
          </div>
          <div className="flex justify-end mb-5">
            <button
              disabled={!data}
              onClick={() => navigator.clipboard.writeText(data)}
              className="bg-white cursor-pointer hover:bg-gray-50 text-[#1e293b] border-2 border-[#1e293b] font-semibold px-6 py-2 rounded-lg mt-4 mr-3 shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Copy
            </button>
            <button
            disabled={!data}
              onClick={handleDownload}
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold cursor-pointer px-6 py-2 rounded-lg mt-4 shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default MainContent;
