const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

console.log("api_key", API_KEY)

const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function generateContent(messages){
    try{
        const response = await fetch(API_URL, {
            method:"POST",
            headers:{
                Authorization:`Bearer ${API_KEY}`,
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                 model: "llama-3.3-70b-versatile",
                    messages,
                 temperature: 0.7,
            })
        });

       if (!response.ok) {
    const error = await response.json();
    console.error("Groq Error:", error);
    throw new Error(error.error?.message || "Failed to generate AI response");
}
        const data = await response.json();
        return data.choices[0].message.content
    }
    catch(error){
        console.error(error);
        throw error;
    }
}