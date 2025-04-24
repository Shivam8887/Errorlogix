import React, { useState } from 'react';
import { CodeError } from "./Code";
import { Error } from "./Error";
export const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState("code"); // Define state

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="border border-t-0 bg-white w-full h-screen p-4">
          {/* Toggle Button */}
          <div className="flex justify-center mb-4">
            <button
              className={`py-2 px-4 mr-2 rounded-md ${
                activeComponent === "code"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setActiveComponent("code")}
            >
              Show Code Error
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeComponent === "error"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setActiveComponent("error")}
            >
              Show Error Analysis
            </button>
          </div>

          {/* Conditional Rendering */}
          {activeComponent === "code" ? <CodeError /> : <Error />}
        </div>
      </div>
    </div>
  );
};