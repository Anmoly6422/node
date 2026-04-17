import http from 'http';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { stringify } from 'querystring';
import { json } from 'stream/consumers';
//  console.log(uuidv4());
const port = 3002;
let urls={};
function saveurl() {
    fs.writeFileSync('urls.json', JSON.stringify(urls, null, 2));

}
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/shorten') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const { originalUrl } = JSON.parse(body);
                if (!originalUrl) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ error: 'original URL is required' }));
                }
                const shortId=uuidv4().slice(0,6);
                urls[shortId]=originalUrl;
                saveurl();
                res.writeHead(201,{"Content-Type":"application/json"});
                res.end(JSON.stringify({ shortUrl:`http://localhost:${port}/${shortId}`}));

            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON > stringify({ error: 'Internal Server Error' }));
            }
        })
    }
    else if(req.method==="GET"){
        const shortId=req.url.slice(1);
        if(urls[shortId]){
            res.writeHead(302,{location:urls[shortId]});
            res.end();
        }
        else{
            res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({error:"URL not found"}));
        }
    }
    else{
        res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({error:"Not Found"}));

    }
});
server.listen(port,()=>{
    console.log(`server is running one http://localhost:${port}`);
});