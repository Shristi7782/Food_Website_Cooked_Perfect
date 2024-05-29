const mongoose=require('mongoose');

// ------------------------- MENU -------------------------------

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }, 
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:String,
        required:true,
    }
});

const Keventer=new mongoose.model('Keventer',menuSchema);
const Starter=new mongoose.model('Starter',menuSchema);
const Main_course=new mongoose.model('Main_course',menuSchema);
const Dessert=new mongoose.model('Dessert',menuSchema);


module.exports={Keventer,Starter,Main_course,Dessert};

// -------------------------XX MENU XX-------------------------------