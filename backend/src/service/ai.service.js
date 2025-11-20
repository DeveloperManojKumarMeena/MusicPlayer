const { GoogleGenAI } =require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});

const AiService = async(url)=> {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: ` I will give you an ImageKit file URL. The file is an audio song. Your task: analyze the audio and return a JSON with: title: detected song title mood: one of these: neutral, sad, happy, cheerful, angry, surprised, disgusted.Output only valid JSON. URL: ${url}`
    });
    console.log(response.text);
}

module.exports = AiService;