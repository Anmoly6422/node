const http=require('http');
let age=24;
const server =http.createServer((req,res)=>{
     res.writeHead(200,{'content-type':'text/html'});
     res.write(`
        <html>
            <head><title>Home Page</title></head>
            <body>
                <h1>My Age Is ${age} old</h1>
                <h2>Date:${new Date().toLocaleString()}</h2>
                <p>This is the trail for request and response on server</p>
            </body>
            </html>`);
        res.end();
        //process.exit();
}) 
server.listen(3000,()=>{
    console.log("server is listening on http://localhost:3000/");
})