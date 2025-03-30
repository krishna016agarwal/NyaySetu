import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

// Use the correct API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "YOUR_GOOGLE_GEMINI_API_KEY");

app.post('/ask', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Correct model reference
    const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });

    // Correct request format
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }]
    });

    const reply = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from model.";

    res.json({ reply });
  } catch (error) {
    console.error("Google Gemini API Error:", error);
    res.status(500).json({ error: "Failed to fetch response from Google Gemini." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
