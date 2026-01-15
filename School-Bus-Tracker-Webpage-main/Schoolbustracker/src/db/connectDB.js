const mongoose = require("mongoose");
require('dotenv').config();

// Prefer using process.env.MONGO_URI. Fall back to the existing hard-coded string
// but do NOT commit real secrets. Replace with your own env in production.
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://tracker:tracker123@cluster0.xp7ut.mongodb.net/schoolbus?retryWrites=true&w=majority&appName=Cluster0";

const connect = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected : ", conn.connection.name);
    } catch (err) {
        console.log("Unable to connect database due to Error : ", err);
        throw err;
    }
}

module.exports = connect;

// Notes:
// - To run locally, create a `.env` file with `MONGO_URI` and `JWT_TOKEN`.
// - Example fallback local URI: "mongodb://localhost:27017/schoolbus".