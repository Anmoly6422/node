import express from 'express';
import path from 'path';

const app= express();
const port=3000;
app.get('/',(req,res)=>{
    console.log(path.resolve('index.html'));
    const  filepath= path.resolve('index.html');
    res.sendFile(filepath);
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})