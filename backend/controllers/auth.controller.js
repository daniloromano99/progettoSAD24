import User from '../models/user.model.js';


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

        //IMMAGINI PROFILO DEFAULT usando l'api al seguente link:
        const profileImage_uomo = `https://avatar.iran.liara.run/public/boy?username=${username}` //immagine profilo uomo
        const profileImage_donna = `https://avatar.iran.liara.run/public/girl?username=${username}` //immagine profilo donna
        
        // SE NON ENTRO IN QUEGLI IF CREO QUINDI L'UTENTE
        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profileImage: gender === "male" ? profileImage_uomo : profileImage_donna 
        })

    await newUser.save(); //salvataggio asincrono

    //è andato a buon fine quindi resituisce status 201 e aggiunge i dati al db
    res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profileImage: newUser.profileImage
    })

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

