const http=require('http');
const { json } = require('stream/consumers');

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write('<h1>hello,world! one more try</h1>');
//     res.end('this is the server trail page');
// });
// const server=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write('<h1>welcome to the home page</h1>');
//         res.end();
//     }
//     else if(req.url=='/about'){
//  res.writeHead(200,{'content-type':'text/html'});
//         res.write('<h1>HII about us</h1><p> this is  the about page</p>');
//         res.end();        
//     }
//     else{
//          res.writeHead(404,{'content-type':'text/html'});
//         res.write('<h1>404 Not Found</h1><p>the  page does not exits');
//         res.end();
//     }
   
// });
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.write(JSON.stringify({name:"Anmol",age:"21",city:"delhi"}));
        res.end();
    }
    else{
         res.writeHead(404,{'content-type':'text/html'});
        res.write('<h1>404 Not Found</h1><p>the  page does not exits');
        res.end();
    }
   
});
server.listen(3000,()=>{
    console.log('server is listening on port http://localhost:3000/');
});