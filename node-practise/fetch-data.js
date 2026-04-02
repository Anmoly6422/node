// const https=require('https');
// const { chunk } = require('lodash');
// https.get("https://jsonplaceholder.typicode.com/",(res)=>{
//     let data=" ";
//     res.on('data',(chunk)=>{
//         data+=chunk;
//     })
//     res.on('end',()=>{
//         console.log("API response",JSON.parse(data));

//     }).on('error',(err)=>{
//         console.log("Error:",err.message);
//     })
// })
// import fetch from 'node-fetch';
// async function fetchdata() {
//        try{
//         const response =await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data =await response.json();
//         console.log("API response:",data);
//        }
//        catch(error){
//         console.error("error fatching data:",error);
//        }
// }
// fetchdata();
const axios=require('axios');
 async function fetchdata() {
       try{
        const response =await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        console.log("API response:",response.data);
       }
       catch(error){
        console.error("error fatching data:",error);
       }
 }