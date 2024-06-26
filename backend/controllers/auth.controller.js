import bcrypt from "bcryptjs";
import User from '../models/user.model.js';
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const signup = async (req, res) => {
    try {
        const {fullName,username,password,confirmPassword,gender} = req.body;

        if(password !== confirmPassword)
            {
                return res.status(400).json({error:"Password errata"})
            }
        
        const user = await User.findOne({username}); //chiamata asincrona(await) che serve a fare il check per vedere se esiste già l'username indicato nel DB   
        if(user) {
            return res.status(400).json({error:"Username già esistente"})
        }        


        //HASH PASSWORD
        const salt = await bcrypt.genSalt(10); //il salt è una stringa casuale utilizzata per aggiungere ulteriore casualità all'hashing delle password con un fattore di costo di 10.
        const hashedPassword = await bcrypt.hash(password, salt); //prende la password originale e il sale generato nel passaggio precedente e produce un hash della password. L'hash risultante è una stringa che rappresenta la password in una forma crittografata e sicura.
        


        //IMMAGINI PROFILO DEFAULT usando l'api al seguente link: // https://avatar-placeholder.iran.liara.run/
        const profilePic_uomo = `https://avatar.iran.liara.run/public/boy?username=${username}`;  //per i maschi
        const profilePic_donna = `https://avatar.iran.liara.run/public/girl?username=${username}`;  //per le femmine

        
        // SE NON ENTRO IN QUEGLI IF CREO QUINDI L'UTENTE
        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,//ricordati che può essere o maschio o femmina
            profilePic: gender === "maschio" ? profilePic_uomo : profilePic_donna,  //se il genere è maschio allora la foto è quella del maschio, altrimenti quella della donna
        });
        
        if(newUser)
        {    
            //andremo a generare qui il token JWT
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save(); //salvataggio asincrono

            //è andato a buon fine quindi resituisce status 201 e aggiunge i dati al db
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({error:"Errore durante la creazione dell'utente"});
        }

    } catch(error) {
        console.log("Errore nella registrazione", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const login = (req, res) => {
    console.log("loginUser");
}

export const logout = (req, res) => {
    console.log("logoutUser");
}

