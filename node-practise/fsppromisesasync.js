// const { write } = require('fs');
const fs=require('fs').promises;
// async function writefileExample(){
//     try{
        // await fs.writeFile("demo.txt","hello world");
        // console.log("file written successfully");
//     }
//     catch(err){
//         console.error("error writing file",err);

//     }
// }
//writefileExample();
// async function ReadfileExample(){
    // try{
        // const data=await fs.readFile("demo.txt","utf8");
        // console.log("file content:",data);
    // }
    // catch(err){
    //     console.error("error writing file",err);

    // }
// }
// ReadfileExample();
async function crudFile() {
    try{

        await fs.writeFile("demo.txt","hello world");
        console.log("file written successfully");
         let data=await fs.readFile("demo.txt","utf8");
        console.log("file content:",data);
        await fs.appendFile("demo.txt","\nappended txt");
        console.log("file appended successfully");
        // await fs.unlink("demo.txt");
        // console.log("file deleted successfully");
        
    }
    catch(err){
        console.error("error file",err);

    }
    
}
crudFile();