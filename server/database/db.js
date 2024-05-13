import mongoose from "mongoose"


export const Connection = async (u,p) => {
    const URL = 'mongodb+srv://22071a3259:uH9TghRsOrNfoIFT@cluster0.kqxofmr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    try{
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log('DB connected');
    }catch(error){
        console.log('Error', error);

    }
    
}

export default Connection;