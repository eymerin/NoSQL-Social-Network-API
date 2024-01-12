// Import mongoose library
const mongoose = require('mongoose');

// Connects to database using mongodb URI from environment variables or uses default if one is not set
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/NoSQL-Social-Network',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Exports connection to the database
module.exports = mongoose.connection