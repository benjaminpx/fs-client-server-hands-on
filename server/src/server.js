// server/index.js
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());

const DATA = Array.from({ length: 100 }).map((_, i) => ({
    label: `Item ${i}`,
    id: `id-${i}`,
}));

app.get('/api', async (req, res) => {
    // return current items with offset
    res.json({ data: DATA, total: DATA.length });
});

app.post('/api/:id', (req, res) => {
    // return updates item
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
