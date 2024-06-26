import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"

export const sendMessage = async (req,res) => {
   try {
    const {message} = req.body; //abbiamo il messaggio dallo User come input e otteniamo receiverId e senderId
    const {id:receiverId} = req.params; //è come se fosse req.params.id JS permette questa forma abbreviata
    const senderId = req.user._id;
    
    let conversation = await Conversation.findOne({
        participants: { $all : [senderId, receiverId]},
    })
        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                })
        }
        //creiamo il messaggio
        const newMessage = new Message({
            senderId,
            receiverId,
            message,        
        });
        
      

        //se newMessage è stato creato allora faccio il push del messaggio selezionato dal relativo id nella conversazione
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

         //funzionalità socketio andranno qui

        //await newMessage.save();
        //await conversation.save();
        //al posto di salvare come sopra esiste un modo per salvare in parallelo: 
        await Promise.all([conversation.save(),newMessage.save()]); //Il metodo Promise.all è utilizzato per eseguire più operazioni asincrone in parallelo e attendere che tutte siano completate

//è andato tutto a buon fine quindi resituisce status 201 e aggiunge i dati al db
        res.status(201).json(newMessage);
        
    } catch (error) {
     console.log("errore in sendMessage controller", error.message);
     res.status(500).json({error: "Internal server error"});
    
   }
};

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params; //utente con la quale stiamo chattando voglio gettarmi un messaggio della conversazione tra me e lui
		const senderId = req.user._id;

        //vedo se esiste già una conversazione
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] }, //i partecipanti sono il sender e lo user con cui vogliamo chattare
		}).populate("messages"); // funzione data da mongoose che ci ritorna i contenuti dei messaggio

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Errore in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};