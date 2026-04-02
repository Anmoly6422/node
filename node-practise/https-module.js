const https=require('https');
const fs=require('fs');
const options ={

  key: fs.readFileSync('C:/Users/anmol/OneDrive/Desktop/node/key.pem'),
cert: fs.readFileSync('C:/Users/anmol/OneDrive/Desktop/node/cert.pem'),
};
const server=https.createServer(options,(req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    res.end("<h1>Hello this is Https server</h1>");
})
server.listen(3000,()=>{
    console.log("Https server running at https://localhost:3000/");

})