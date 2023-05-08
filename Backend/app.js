const express=require('express');

const app=new express();

const bodyparser=require('body-parser');

const helmet=require('helmet');
const mongosanitize=require('express-mongo-sanitize');
const cors=require('cors');
const hpp=require('hpp');
const xss=require('xss')

const mongoose =require('mongoose');

app.use(cors());
app.use(helmet());
app.use(mongosanitize());
app.use(hpp());
app.use(xss());

app.use(bodyparser.json());

const rateLimit=require('express-rate-limit')
const limiter =rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
})
app.use(limiter);

let URL="mongodb+srv://<username>:<password>@cluster5.bjizf2i.mongodb.net/CRUD?retryWrites=true&w=majority";
let OPTION ={user:'ibrahim_640',pass:'ibrahim201', autoIndex: true};
mongoose.connect(URL,OPTION,(error)=>{
    console.log("Connection Successful")
    console.log(error)
});

app.use(express.static('client/build'));
app.get("*", function(req){
    req.sendFile(path.resolve(__dirname,'doctor','build','index.html'))
})

app.use("/api/v1",router);

//.......................Add React font end Routing..................
module.exports=app;