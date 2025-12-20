
import { GoogleGenAI, Type } from "@google/genai";
import { SymptomResult } from "../types";

// Always use the direct process.env.API_KEY as per coding guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const checkSymptoms = async (query: string): Promise<SymptomResult> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide an Ayurvedic perspective on the following symptoms: "${query}". Return the result in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            potentialAilment: { type: Type.STRING },
            description: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            disclaimer: { type: Type.STRING }
          },
          required: ["potentialAilment", "description", "recommendations", "disclaimer"]
        },
        systemInstruction: "You are an expert Ayurvedic doctor with deep knowledge of Vata, Pitta, and Kapha imbalances. Provide gentle, informative advice but always include a medical disclaimer."
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    return JSON.parse(text) as SymptomResult;
  } catch (error) {
    console.error("Error in symptom checking:", error);
    return {
      potentialAilment: "Consultation Recommended",
      description: "Based on the provided symptoms, a personalized pulse diagnosis (Nadi Pariksha) is recommended to identify the root cause.",
      recommendations: ["Stay hydrated", "Avoid heavy, processed foods", "Maintain a regular sleep schedule"],
      disclaimer: "This is an AI-generated suggestion. Please consult Dr. Ravi Shinde or a medical professional for an official diagnosis."
    };
  }
};
