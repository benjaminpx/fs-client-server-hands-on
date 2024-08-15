// server/index.js
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());

const DATA = Array.from({ length: 100 }).map((_, i) => ({
    label: `Item ${i}`,
    id: `id-${i}`,
    isDefault: Math.random() > 0.5,
}));

app.get('/api', (req, res) => {
    const { page, pageSize } = req.query;
    res.json({ data: DATA, total: DATA.length });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
