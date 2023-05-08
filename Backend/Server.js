import app from "./app";
import {listen} from "express/lib/application";

listen(5555,(req,res)=>{
    console.log("Server Run Successful:`http://localhost:$5555`")
})