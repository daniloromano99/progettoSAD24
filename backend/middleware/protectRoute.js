import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import User from "../models/user.model.js";

const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Non sei autorizzato - No token provided" });       
        }
    const decoded = jwt.verify(token, process.env.JWT_SECRET); //verifichiamo il token
    //vediamo se non è verificato
    if(!decoded){
        return res.status(401).json({error: "Non sei autorizzato - Token non valido"});
    }

    const user = await User.findById(decoded.userId).select("-password"); //come abbiamo visto in utils -> generateToken la funzione sign richiede l'userId. Quindi glielo diamo escludendo la password ("-password")
    if(!user){
            return res.status(401).json({error: "Utente non trovato"});
        }
    //se passiamo tutti questi check allora:
    req.user = user; //user è l'utente che abbiamo nel DB
    
    next(); //se vai su message.routes.js a "router.post" vedrai che dopo protectRoute c'è un'altra funzione ovvero sendMessage. next() fa proprio questo. Dopo protectRoute passa a sendMessage.
    
    }catch (error) {
        console.log("errore in protectRoute controller", error.message);
        res.status(500).json({error: "Internal server error"});
    }

};

export default protectRoute;
