import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview"
    });

    const result = await model.generateContent(userMessage);
    const response = result.response.text();

    res.json({
      reply: response
    });

  } catch (error) {
    console.error("ERROR:", error);

    res.json({
      reply: "I'm here for you 💚 (offline mode)"
    });
  }
});

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});