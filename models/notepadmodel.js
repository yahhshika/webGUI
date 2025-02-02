const mongoose = require("mongoose");


main().then(()=>{
    console.log("successful connection with windowsgui");
    
}).catch(err=>{
    console.log(err);
    
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/windowsgui');
}

const schema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    fileDesc: {
        type:String
    },
    createdAt:{
        type: Date
    },
  

})

const Note = new mongoose.model('Note', schema);

module.exports = Note;