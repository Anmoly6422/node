// function greet(name,callback){
//     console.log("hello"+name);
//     callback();
// }
// function callme(){
//     console.log("i am a callback function");
   
// }
// greet("Anmol",callme);
// const fs=require('fs');
// fs.readFile('data.txt',"utf-8",function(err,data){
//     if(err) return console.error(err);
//     console.log(data);
// });
const fs=require('fs').promises;
async function readFile() {
    try{
        const data=await  fs.readFile('input.txt','utf-8');
        const data1 = await fs.readFile('input2.txt','utf-8');
        console.log("file1",data);
        console.log("file2",data1);
    }catch(err)
    {
        console.error(err);
    }
}
readFile();