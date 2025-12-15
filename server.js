const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require('cors');
const app = require("./app");

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001'], // Add all frontend ports
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);


const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

connectDB();

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(` App running on port ${port}...`);
});
