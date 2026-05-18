import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const ai = new GoogleGenAI({ 
    apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  console.log("Gemini API initialized. GEMINI_API_KEY present:", !!process.env.GEMINI_API_KEY);
  console.log("Gemini API initialized. GOOGLE_API_KEY present:", !!process.env.GOOGLE_API_KEY);

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Gemini Chat API
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
      console.log("Checking API Key in request handler. GEMINI_API_KEY:", !!process.env.GEMINI_API_KEY, "GOOGLE_API_KEY:", !!process.env.GOOGLE_API_KEY);

      if (!apiKey) {
        console.error("No Gemini API key found in environment variables");
        return res.status(500).json({ 
          error: "Hệ thống chưa tìm thấy Gemini API Key. Vui lòng mở menu 'Settings' (biểu tượng bánh răng) -> 'Secrets' và đảm bảo đã chọn hoặc nhập API Key. Sau đó hãy tải lại trang." 
        });
      }

      // Convert history to Content format
      const contents = [
        ...(history || []).map((h: any) => ({
          role: h.role,
          parts: h.parts
        })),
        { role: "user", parts: [{ text: message }] }
      ];

      console.log("Full request to Gemini (using gemini-flash-latest):", JSON.stringify({
        model: "gemini-flash-latest",
        contents,
      }, null, 2));

      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents,
        config: {
          systemInstruction: "Bạn là một bác sĩ tư vấn sức khỏe chuyên về cai nghiện thuốc lá cho giới trẻ. Hãy trả lời một cách chuyên nghiệp, thông cảm, khích lệ và sử dụng ngôn ngữ gần gũi với thanh thiếu niên. Bạn tên là Bác sĩ Xanh. Hãy tư vấn dựa trên các kiến thức y khoa về tác hại của thuốc lá và các phương pháp cai nghiện hiệu quả.",
        },
      });

      if (!response || !response.text) {
        console.error("Gemini returned empty response:", response);
        throw new Error("Không nhận được phản hồi từ AI.");
      }

      console.log("Gemini Response Text:", response.text);
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // In Express v4, use app.get('*', ...)
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
