const fs=require('fs').promises;
// const fs=require('fs/promises');
// fs.writeFile('promisefile.txt',"hello this file is used for fs promise")
// .then(()=>{
//     console.log("file written/created succesfully");
// })
// .catch((err)=>{
//     console.error("error writing",err);
// });
// fs.readFile('promisefile.txt',"utf8")
// .then((data)=>{
//     console.log("file read successfully:",data);
// })
// .catch((err)=>{
//     console.error("error reading file:",err);
// })
fs.appendFile("promisefile.txt","\nthis is an appended text.")
.then(()=>{
    console.log("file appended succesfully");
})
.catch((err)=>{
    console.error("error appending file:",err);
})