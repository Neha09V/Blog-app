import mongoose from "mongoose" ;
 export const ConnectDB =async() =>{
    await mongoose.connect('mongodb+srv://blogapp:<app@123>@cluster0.ifdid.mongodb.net/')
    console/log("DB Connected") ;
}