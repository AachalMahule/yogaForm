import mongoose from "mongoose";

//Defining Schema

const yogaSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    mobile_no:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    male:{
        type:String,        
    },
    female:{
        type:String,        
    },
    age:{
        type:String,
        required:true,
        
    },
    morning_session1:{
        type:String,
        
    },
    morning_session2:{
        type:String,
    },
    afternoon_session:{
        type:String,
    },
    evening_session:{
        type:String,
    },
    fee:{
        type:String,
        required:true,
    }
})

// compiling schema

const yogamodel  = mongoose.model('yoga',yogaSchema);

export default  yogamodel