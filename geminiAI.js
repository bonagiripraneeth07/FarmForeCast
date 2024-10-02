const API_KEY = "AIzaSyBSEa_R2AdP_T_wMwZlHaBcauOKL5IeAhk";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;
export let generateAI = async (input) => {
    let responsebyAI;
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ "text": `  ${input}` }]
                }]
            })
        })
        const data = await response.json();
        //console.log(data.candidates[0].content.parts[0].text);
        responsebyAI = data.candidates[0].content.parts[0].text;
        //console.log(responsebyAI + "from 19");

        return responsebyAI;
    }
    catch (error) {
        console.log(error);
    }
}