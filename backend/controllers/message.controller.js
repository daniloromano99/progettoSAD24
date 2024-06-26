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
        
       //funzionalità socketio andranno qui

        //se newMessage è stato creato allora faccio il push del messaggio selezionato dal relativo id nella conversazione
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //await newMessage.save();
        //await conversation.save();
        //al posto di salvare come sopra esiste un modo per salvare in parallelo: 
        await Promise.all([conversation.save(),message.save()]);

//è andato tutto a buon fine quindi resituisce status 201 e aggiunge i dati al db
        res.status(201).json(newMessage);
        
    } catch (error) {
     console.log("errore in sendMessage controller", error.message);
     res.status(500).json({error: "Internal server error"});
    
   }
};