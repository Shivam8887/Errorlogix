require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.codechecker = async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const {code,language} = req.body; 

        console.log("Code received:", code);
        console.log("Language are ",language)

        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("API key not provided in environment variables.");
        }

        const ai = new GoogleGenerativeAI(apiKey);
        const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        Analyze the following string as if it is a piece of code written in the ${language} programming language:
        \`\`\`
        ${code}
        \`\`\`
        Assume the provided string contains code in ${language} and analyze it accordingly.
        Ensure that the response does not contain '[object Object]' but instead provides meaningful, human-readable output.
        Respond in the following structured format:
        **Result:** Briefly summarize the code's status (e.g., no errors, errors found, or improvement suggestions).
        **Improvement:** List possible improvements point-by-point with detailed explanations where applicable.
        **Corrected Code:** Provide the corrected or optimized code snippet in this format:
        \`\`\`${language}
        // Place the corrected or enhanced code snippet here
        \`\`\`
    `;




        const response = await model.generateContent(prompt);
        const text = await response.response.text();

        // console.log("AI Response:", text);
        // console.log('respone type',typeof text)
        return res.status(200).json({ response: text });
    } catch (err) {
        console.error("Error in analyzing code:", err);
        return res.status(500).json({ message: "Error in analyzing code", error: err.message });
    }
};
