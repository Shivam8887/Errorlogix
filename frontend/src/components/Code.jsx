import React, { useState } from "react";
import axios from "axios";
import { marked } from "marked";
import { codeapi } from "../API/api";
export const CodeError = () => {
    const [codedata, setCodedata] = useState({
        code: "",
        language: "Python", // Default language set to Python
    });
    const [response, setResponse] = useState(""); // Store as a Markdown string
    const [loading, setLoading] = useState(false); // Loading state

    const languages = [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "Go",
        "Rust",
        "Ruby",
        "PHP",
        "Swift",
        "Kotlin",
    ];

    const handleInputChange = (key, value) => {
        setCodedata((prev) => ({
            ...prev,
            [key]: value, // Dynamically update code or language
        }));
    };

    const checkCode = async () => {
        try {
            setLoading(true);

            if (!codedata.code.trim()) {
                alert("Please enter some code before submitting.");
                return;
            }

            console.log("Code Submitted:", codedata.code);
            const res = await axios.post(codeapi, codedata);

            let responseData = res.data.response;

            if (Array.isArray(responseData)) {
                responseData = responseData.join("\n"); // Convert array to string
            }

            setResponse(responseData || "**No response received.**");
        } catch (err) {
            setResponse(
                `**Error:** ${err.response?.data?.message || "Unable to process your code."}`
            );
        } finally {
            setLoading(false);
        }
    };

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-14 h-screen" >
      {/* Left Section - Code Input */}
      <div className="flex flex-col space-y-6 p-4 border rounded-lg bg-white shadow-md overflow-y-auto mb-6">
        <h3 className="text-2xl font-bold text-gray-700">Code Input</h3>
        <select
          className="border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring focus:border-blue-300 text-xl"
          onChange={(e) => handleInputChange("language", e.target.value)}
          value={codedata.language}
        >
          {languages.map((lang, index) => (
            <option key={index} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <textarea
          className="w-full h-screen border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring focus:border-blue-300 text-2xl"
          value={codedata.code}
          onChange={(e) => handleInputChange("code", e.target.value)}
          placeholder="Enter your code here..."
        ></textarea>
        <button
          className={`bg-blue-500 text-xl text-white py-2 px-4 rounded-md hover:bg-blue-600 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={checkCode}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Code"}
        </button>
      </div>
    
      {/* Right Section - Output Display */}
      <div className="p-4 border rounded-lg bg-gray-100 shadow-md overflow-y-auto mb-6">
        <h3 className="font-bold text-gray-700 text-2xl">Response</h3>
        <div
          className="prose max-w-none text-gray-800 text-2xl"
          dangerouslySetInnerHTML={{ __html: marked(response) }}
        />
      </div>
    </div>)
}    
