const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
// const Gui = require("./models/model1.js");
const Note = require('./models/notepadmodel.js');

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));


main().then(()=>{
    console.log("successfully connected to db");
}).catch(err=>{
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/windowsgui');
}


const port = 8080;

app.listen(port,()=>{
    console.log("listening");
    
})

app.get("/", async(req,res)=>{
    let files = await Note.find();
    // console.log(files);
    
    res.render("home.ejs",{files})
    
    // res.render()
})
app.post("/files",async(req,res)=>{
    let {filename, fileDesc} = req.body;
    console.log(filename, fileDesc);
    
    let note1 = await new Note({
        filename: `${filename}`,
        fileDesc: `${fileDesc}`,
        createdAt: new Date()

    })
    note1.save().then(res=>{console.log(res)
    }).catch(err=>{console.log(err);
    })
    res.redirect("http://localhost:8080/");

})