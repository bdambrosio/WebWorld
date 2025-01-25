const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    fs.appendFileSync('subscribers.txt', email + '\n');
    res.json({ success: true });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
}); 