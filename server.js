const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'homebridgeui')));

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});
app.get('/test', (req, res) => {
    res.send('Test route');
});
