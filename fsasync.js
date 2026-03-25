const fs=require('fs');
// fs.writeFile('example.txt',"hello world this is async trial",(err)=>{
//     if(err){
//         console.log("error writing file:",err);
//     }
//     console.log("file writen succesfully");
// })
// fs.readFile('example.txt','utf8',(err,data)=>{
//     if(err){
//         console.log("error reading file:",err);
//     }
//     console.log("file content:",data);
// })
// fs.appendFile('example.txt','\nAppended text!',(err)=>{
//     if(err){
//         console.log("error appending to file",err)
//     }
//     console.log("text appended successfully!");
// })
// fs.unlink('test.txt',(err)=>{
//     if(err){
//         console.error("error deleting file:",err);
//     }
//     console.log("file deleted succesfully");
// })
fs.rename('example.txt','renamed.txt',(err)=>{
    if(err){
        console.log("error renaming file:",err);
    }
    console.log("file renamed succesully");
})