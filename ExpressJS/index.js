const express=require('express');
const app =express();
const PORT=3001;

app.get('/',(req,res)=>{
    res.send('hello world! EXpressJS tutorial');

});
app.get('/about',(req,res)=>{
    res.send('ABOUT PAGE');

})
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);


});