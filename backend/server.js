import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); //per fare il parsing la richieste che arrivano con il payload JSON (da req.body nel controller)
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

/*app.get("/", (req,res) => {
    //root route localhost:5000
    res.send("<h2> SCOSSA? VA BENE <\h2>");
});

*/

app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`);
});