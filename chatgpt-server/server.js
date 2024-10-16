let dotenv = require('dotenv');
dotenv.config()
const cors = require('cors')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const OpenAI = require("openai");
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY,});


app.use(cors());

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  

  try {
    const response = await openai.chat.completions.create(
      {
        messages: [{ role: "system", content: userMessage }],
        model: "gpt-4o-mini-2024-07-18",
      },
    );

    const botMessage = response.choices[0].message.content;
    res.json({ message: botMessage });
  } catch (error) {
    console.error('Error communicating with ChatGPT:', error);
    res.status(500).json({ error: 'Error communicating with ChatGPT' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

