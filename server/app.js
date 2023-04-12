const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;
  const data = {
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.',
      }
    ]
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        ...data,
        messages: [
          ...data.messages,
          ...messages,
        ]
      })
    });

    response.body.on('data', data => {
      const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
      for (const line of lines) {
        const message = line.replace(/^data: /, '');
        if (message === '[DONE]') {
          return res.end();
        }
        const { choices } = JSON.parse(message);
        const { content } = choices[0].delta || {};

        if (content) {
          res.write(content);
        }

      }
    })
  } catch (error) {
    console.log(error, 'error');
  }
});

app.post('/api/title', async (req, res) => {
  try {
    const { title } = req.body;
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-002',
        prompt: `Write a 3 words title for the following prompt: ${title}`,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
      })
    })

    const data = await response.json();
    console.log(data, 'data');
    res.status(200).json({ title: data?.choices?.[0]?.text });
  } catch (error) {
    console.log(error, 'error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})