const fs=require('fs');
//async
// fs.readFile('text.txt','utf8',(err,data)=>{
//     if(err){
//         console.error("error reading file:",err);
        
//     }
//     console.log("file content:",data);

// })
//sync
// const data=fs.readFileSync('text.txt','utf8');
// console.log('file content:',data);
//write file
fs.writeFile('data.txt','hello created new file',(err)=>{
    if(err){
        console.error('error writing file:',err);
    }
    console.log('file written succesful')
});
//append data
fs.appendFile('data.txt','\n trying to append',(err)=>{
    if(err){
        console.error('error appending to  file:',err);
    }
    console.log('file written succesful')
})