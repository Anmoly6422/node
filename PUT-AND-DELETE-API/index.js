import express from 'express';
const app = express();
app.use(express.json()); 
const PORT = 3000;  
let users=[
    {id:1,name:"John",age:30},
    {id:2,name:"Jane",age:25},
    {id:3,name:"Doe",age:35}    
]
app.get('/users',(req,res)=>{
    res.json(users);
})

app.post('/users',(req,res)=>{  
    const newUser = {id:Date.now(),...req.body};
    users.push(newUser);
    res.status(201).json(newUser);
})
app.put('/users/:id',(req,res)=>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);   
    if(userIndex === -1){
        return res.status(404).json({message:"User not found"});

    }
    users[userIndex] = {id:userId,...req.body};  
    res.json(users[userIndex]);
})
app.delete('/users/:id',(req,res)=>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if(userIndex === -1){
        return res.status(404).json({message:"User not found"});
    }
    users.splice(userIndex, 1);
    res.json({message:"User deleted successfully"});
})
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})