const express = require('express')
const app = express()
const router = require('./router/index.js')
require('dotenv').config()

const PORT = 3333

app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// // Only start the server if this module is the main module
// if (require.main === module) {
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   }
  
//   module.exports = app; // Export the Express application instance

