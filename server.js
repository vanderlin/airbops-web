const express      = require('express');
const app          = express()
const port         = process.env.PORT || 5000
const path         = require('path')

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
})

app.listen(port, () => {
    console.log(`Server hosted at http://localhost:${port}`);
})
