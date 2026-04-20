import express from'express';
import path from 'path';
const app=express();
const port=3000;
const filepath=path.resolve();
app.get('/',(req,res)=>{
    console.log(filepath);
    res.sendFile(filepath+'/home.html');
});
app.get('/about',(req,res)=>{
    res.send('<h1>About Page</h1><p>This is the about page.</p>');
});
app.use((req,res)=>{
    res.status(404).sendFile(filepath+'/404.html');
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);


});