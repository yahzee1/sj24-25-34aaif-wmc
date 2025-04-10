const express = require('express');
const app = express();

app.use(require('cors')());

app.get('/api/data', (req, res) => {
    res.json({ message: "Hallo, das ist dein JSON-Objekt!" });
});

app.listen(3000, () => console.log('Server läuft auf http://localhost:3000'));
