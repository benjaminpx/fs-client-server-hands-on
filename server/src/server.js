// server/index.js
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api', (req, res) => {
    res.json(
        Array.from({ length: 10_000 }).map((_, i) => ({
            label: `Item ${i}`,
            id: `id-${i}`,
            isDefault: i % 2 === 0,
        })),
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
