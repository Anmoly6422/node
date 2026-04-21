import express from'express';
import path from 'path';
const app=express();
const port=3000;
const filepath=path.resolve();
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('<h1>About Page</h1><p>This is the about page.</p>');
});
app.use((req,res)=>{
    res.status(404).sendFile(filepath+'/index.html');
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);


});