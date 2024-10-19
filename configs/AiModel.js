const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
export const chatSession = model.startChat({
    generationConfig,
    history: [
    {
        role: "user",
        parts: [
        {text: "Write a script to generate 30 seconds video on topic: interesting historical story along with AI image prompt in Realistic format for each scene and give me results in JSON format with imagePrompt and ContentText as field."},
        ],
    },
    {
        role: "model",
        parts: [
        {text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling marketplace in ancient Rome, with merchants selling their wares and people going about their daily lives. The scene should be vibrant and full of detail, with a focus on the architecture and the people's clothing.\",\n    \"ContentText\": \"Welcome to ancient Rome, a city that once ruled the world. Imagine a bustling marketplace, filled with the sounds of haggling merchants and the chatter of everyday life. The air is thick with the scent of spices and the aroma of freshly baked bread.\"\n  },\n  {\n    \"imagePrompt\": \"A portrait of a Roman emperor, strong and imposing, with a stern expression on his face. He should be wearing the traditional Roman toga, with laurel wreath on his head.\",\n    \"ContentText\": \"At the heart of this empire stood powerful emperors, like Caesar Augustus, a man who brought peace and prosperity to Rome.\"\n  },\n  {\n    \"imagePrompt\": \"A dramatic scene of Roman soldiers marching through a battlefield, their shields and swords gleaming in the sunlight. The scene should be filled with action and chaos, with smoke and dust swirling in the air.\",\n    \"ContentText\": \"But even the mightiest empires face challenges. Rome's legions fought countless battles, defending their borders and expanding their dominion.\"\n  },\n  {\n    \"imagePrompt\": \"A close-up shot of a Roman coin, with the emperor's image on one side and a symbol of the Roman Empire on the other. The coin should be worn and tarnished, showing the passage of time.\",\n    \"ContentText\": \"These coins, symbols of Roman power, tell tales of wealth, trade, and the daily lives of the people.\"\n  },\n  {\n    \"imagePrompt\": \"A majestic view of the Colosseum in Rome, with the sun setting in the background. The Colosseum should be grand and imposing, with a sense of history and grandeur.\",\n    \"ContentText\": \"Rome's legacy lives on in its architectural marvels like the Colosseum, a testament to the ingenuity and grandeur of this ancient civilization.\"\n  },\n  {\n    \"imagePrompt\": \"A panoramic view of the ruins of Pompeii, a city frozen in time by the eruption of Mount Vesuvius. The scene should be both beautiful and haunting, showing the power of nature and the fragility of civilization.\",\n    \"ContentText\": \"But the sands of time do not stand still. Pompeii, a thriving city, was tragically buried by volcanic ash, preserving a snapshot of Roman life for us to see.\"\n  },\n  {\n    \"imagePrompt\": \"A final shot of a modern-day Rome, with its ancient monuments standing proudly amidst the bustling city life. The scene should convey the enduring legacy of the Roman Empire and its influence on the world.\",\n    \"ContentText\": \"Though Rome fell centuries ago, its influence echoes through the ages, shaping the world we know today. From our legal systems to our language, Rome's legacy endures.\"\n  }\n]\n```\n\n**Explanation:**\n\n* **imagePrompt:**  Each JSON object contains an `imagePrompt` field, which provides a detailed description for an AI image generator to create realistic visuals for each scene. The prompts are tailored to the specific historical context.\n* **ContentText:** The `ContentText` field contains the corresponding narration for each scene, creating a cohesive storyline.\n\n**Note:**\n\nThis JSON data can be used to generate a 30-second video by:\n\n1. **Generating Images:** Use an AI image generator (like Midjourney, DALL-E 2, Stable Diffusion) to create images based on the provided `imagePrompt`s.\n2. **Video Editing:** Combine the generated images with the corresponding `ContentText` narration in a video editing software (like Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve).\n\nThis approach allows you to easily create a visually engaging and informative historical video.\n"},
        ],
    },
    ],
});