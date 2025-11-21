const { GoogleGenAI } =require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});

const AiService = async(url)=> {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        systemInstruction: "You are an expert music analyzer. You will analyze the audio file name and return the title, mood and artistof the song in JSON format Only.",
        contents: ` you search on the web this title and search artist and mood of the song: one of: neutral, sad, happy, cheerful, angry, surprised, disgusted  :  Output only valid JSON format . No extra text${url}`,
        prompt: `Analyze the audio file on web and return JSON:{ "title": "", "mood": "" }URL: ${url}`
        
    });
    return response;
}

module.exports = AiService;