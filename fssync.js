const fs=require('fs');

fs.writeFileSync('data1.txt','hello using synchronous file making','utf8')
console.log('file written successfully');
const data=fs.readFileSync('data1.txt','utf8');
console.log('file content:',data);
fs.appendFileSync('data1.txt','\n this is an append text..');
console.log('file appended successfully');
fs.unlinkSync('test.txt');
console.log('file deleted succesfully!');
//create a folder
fs.mkdirSync('newfolder');
console.log('folder is created');
fs.rmdirSync('newfolder');
console.log('foler removed successfully!');
if(fs.existsSync('data.txt')){
    console.log('file exists,proceeding with opreations...');
}
else{
    console.log('file not found!!!');
}