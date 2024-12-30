const axios = require('axios');
const process = require('process');

// Replace with your account token and the channel ID
const USER_TOKEN = process.env.USER_TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;
const MESSAGE = '# Hello from my account!';

// Discord API endpoint for sending messages
const API_URL = `https://discord.com/api/v10/channels/${CHANNEL_ID}/messages`;

axios.post(
    API_URL,
    { content: MESSAGE }, // The message payload
    {
        headers: {
            'Authorization': USER_TOKEN,
            'Content-Type': 'application/json',
        },
    }
).then(() => {
    console.log('Message sent successfully!');
}).catch((error) => {
    console.error('Error sending message:', error.response ? error.response.data : error.message);
});
