import mongoose from "mongoose"

const connectToMongoDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("CONNESSO A MONGODB");
    } catch (error) {
        console.log("ERRORE CONNESSIONE MONGODB", error.message)
    }
};

export default connectToMongoDB;