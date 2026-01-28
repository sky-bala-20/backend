const mongoose = require('mongoose')

require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Connected to Database')
    }catch(error) {
        console.log(`Error: ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB 