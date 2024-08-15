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
    let { page, pageSize } = req.query;
    page = Number(page);
    pageSize = Number(pageSize);

    res.json({ data: DATA.slice(page * pageSize, page * pageSize + pageSize), total: DATA.length });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
