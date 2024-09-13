import express from "express";
import dotenv from 'dotenv';
import router from "./routes/grades.mjs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//create a router with a consistent base path
app.use('/api', router);

//app.use('/all', router);

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});