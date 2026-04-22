import express from 'express';
const app=express();
const port=3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello Home Page From Express!!');
})
app.get('/about',(req,res)=>{
    res.send('This is the about page!!!');

})

app.get('/search',(req,res)=>{
    const {item}=req.query;
    res.send(`you searched for:${item}`);

})
app.post('/users',(req,res)=>{
    const{name,email}=req.body;
    res.send(`user ${name} with email ${email} created succesfully`)
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})