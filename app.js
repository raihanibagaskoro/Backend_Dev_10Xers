const express = require('express')
const app = express()
const router = require('./router/index.js')

const PORT = 3333

app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})