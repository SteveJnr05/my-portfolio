import express from "express";
import dotenv from "dotenv"
import cors from "cors";
import connectDB from "./config/db.js";
import projectsRouter from "./routes/projects.js";
import contactsRouter from "./routes/contact.js";
import errorHandler from "./middleware/errorHandler.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//connect to DB
connectDB(process.env.MONGO_URI);

//middleware
app.use(cors());
app.use(express.json({limit: "5mb"}));

//API route
app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactsRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send("API is working");
})

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`));
