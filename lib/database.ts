// import mongoose from 'mongoose';

// const MONGO_URI = process.env.MONGO_URI;

// let isConnected = false; // track connection state

// export const connectdb = async () => {
//     if (isConnected) {
//         console.log('Database is already connected.');
//         return;
//     }

//     try {
//         // Establish a connection without deprecated options
//         await mongoose.connect(MONGO_URI as string, {
//             connectTimeoutMS: 10000,  // Set a timeout to avoid long waits
//             socketTimeoutMS: 45000,   // Set a socket timeout
//         });

//         isConnected = true;
//         console.log('Connected to database.');
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//         throw error; // Re-throw the error to be handled by the calling function
//     }
// };


import mongoose from "mongoose";
const connectdb = async()=>{
    try {
         await mongoose.connect(process.env.MONGO_URI as string,{
            dbName:"CarRental"
         })
         console.log("mongodb is successfyully connected");
    } catch (error) {
        console.log("mongodbv not connected successfully");
    }
}
export default connectdb;