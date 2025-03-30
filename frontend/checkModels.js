import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

async function checkModel(modelName) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "YOUR_GOOGLE_GEMINI_API_KEY");

    // Fetch details about a specific model
    const model = await genAI.getGenerativeModel({ model: modelName });

   
  } catch (error) {
    console.error(`Error fetching model "${modelName}":`, error);
  }
}

// Check for gemini-pro model
checkModel("gemini-pro");
