const http = require('http');

const userData=[
    {
        id:1,
        name:'Anmol Yadav',
        email:'yadavanmol540@gmail.com',
        age:21
    },{
         id:2,
        name:'Rahul ',
        email:'rahul@gmail.com',
        age:25
    }
]

const server=http.createServer((req, res)=>{
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(userData));
    res.end();

}).listen(3000)
