import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: "AIzaSyCQkxWsP5Y6D0eEEYNLWEPwq33AH9Jszoc",
});

export async function API(prompt,extractedText) {
    const fullPrompt = `${prompt}\n\nTEXT:\n${extractedText}`;
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: fullPrompt,
  });
  console.log(response.text);
  return response.text;
  
}   
  


