require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

exports.errorchecker = async (req,res)=>{
    try {
        console.log("Request Body:", req.body);
        const {errormessage} = req.body; 
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("API key not provided in environment variables.");
        }

        const ai = new GoogleGenerativeAI(apiKey);
        const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        Analyze the following string as if it is a piece of error written in the ${errormessage} :
        \`\`\`
      
        \`\`\`
        
        but instead provides meaningful, human-readable output.
        Respond in the following structured format:
        **why this error :** Briefly summarize the error and why this error .).
        **Fixed it :** fixed the error 
        **Summary :** provide the summary of the error :
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


}