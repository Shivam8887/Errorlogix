import React, { useState } from 'react';
import axios from 'axios';
import { errorapi } from '../API/api';
import { marked } from 'marked';

export const Error = () => {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [errormessage, setErrorMessage] = useState('');

    const checkError = async () => {
        setLoading(true); // Start loading
        try {
            const res = await axios.post(errorapi, { errormessage });
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
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-14 h-full">
            {/* Left Section - Input */}
            <div className="flex flex-col space-y-6 p-4 border rounded-lg bg-white shadow-md overflow-y-auto">
                <h3 className=" text-2xl font-bold text-gray-700">Paste your Error Here</h3>

                <textarea
                    className=" text-2xl w-full h-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring focus:border-blue-300"
                    onChange={(e) => setErrorMessage(e.target.value)}
                    placeholder="Enter your Error here..."
                    value={errormessage}
                ></textarea>

                <button
                    className={ `bg-blue-500 text-xl text-white py-2 px-4 rounded-md  mb-5 hover:bg-blue-600 transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={checkError}
                    disabled={loading}
                >
                    {loading ? "Checking..." : "Check Error"}
                </button>
            </div>


            <div className="p-4 border rounded-lg bg-gray-100 shadow-md overflow-y-auto">
                <h3 className=" font-bold text-gray-700 text-2xl">Learn from Error</h3>
                <div
                    className="prose max-w-none text-gray-800 text-2xl"
                    dangerouslySetInnerHTML={{ __html: marked(response) }}
                />
            </div>
        </div>
    );
};
