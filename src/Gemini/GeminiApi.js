import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
  apiKey: "Add your API key here",
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
  


