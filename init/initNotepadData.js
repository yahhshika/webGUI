const mongoose = require("mongoose");
const Note = require("../models/notepadmodel.js");

main().then(()=>{
    console.log("successful connection with windowsgui");
    
}).catch(err=>{
    console.log(err);
    
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/windowsgui');
}

Note.insertMany([
    {
        filename: 'file1',
        fileDesc: "This is a new file, created for checking purposes",
        createdAt: new Date()

    }
]).then(res=>{
    console.log(res);
    
}).catch(err=>{
    console.log(err);
    
})


