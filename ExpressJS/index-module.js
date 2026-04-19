import express from 'express';
import {add} from './math.js';
const app=express();
const port=3001;
app.get('/',(req,res)=>{
    res.send(`Hello world  expressjs uding modules!! ${add(2,3)}` );
    //console.log(add(2,3));
})
app.get('/about',(req,res)=>{
    res.send("This Is about.....");
})
app.get('/profile',(req,res)=>{
    res.send("<h1>My profile page in this local host.....</h1>");
})
app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})