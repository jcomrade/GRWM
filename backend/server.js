const express = require('express');
const app = express();
const port = 5172;
const cors = require('cors')
const fs = require('fs')
// Middleware to parse JSON bodies
app.use(express.json());
const { GoogleGenerativeAI } = require("@google/generative-ai");
const apiKey = "AIzaSyC6egIav4oRdJZXVplknUkRSjFRJ0XU4KM";
const genAI = new GoogleGenerativeAI(apiKey);

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "PATCH"]
  }))

// Function to convert the image buffer to the required format for the generative model
function fileToGenerativePart(path, mimeType) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync("../../Downloads/"+ path)).toString("base64"),
        mimeType
      },
    };
  }

async function run(imageBuffer) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Find the eye color, hair color, and skin color of the image.\nUsing these colors of the physical attributes of the person, can you tell me which season the person best belong. \nAlso, Give me a fashion recommendation that matches the season that the person belong.\nhere are the season selection: 'Autumn', 'Spring', 'Summer', and 'Winter'\nYour response must be in this format: \n<The Season I belong> \n<The Reason why I belong to this season>\n<The fashion (clothes, color of clothes, hair color, accessories [gold or silver], make-up [suggest make-up colors such as foundation, concealer, contour, eye shadow, lipsticks, eyebrow pencil]) recommendation for this season. Make it more detailed and comprehensive>\n<Recommended stores that offer the aforementioned recommendations>";

    const imageParts = [
        fileToGenerativePart(imageBuffer, "image/jpeg"),
    ];

    const result = await model.generateContent([prompt, imageParts]);
    const response = await result.response;
    const text = await response.text();
    return text;
}

app.post('/generate', async (req, res) => {
    const {path} = req.body
    console.log(path)
    try {
        const text = await run(path);
        console.log(text)
        res.send(text);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
