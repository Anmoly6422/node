// function abc(){
//     console.log("abc function called");
// }
// abc();
const EventEmitter=require('events');
 const event =new EventEmitter();
// event.on('greet',(name,age)=>{
//     console.log(`hello ${name},you are ${age} years old`);
// })
// event.emit('greet',"Anmol Yadav",21);
// event.emit('greet',"Anmol Yadav",21);
// event.once('onlyonce',()=>{
//     console.log("this event will only be triggred once");
// });
// event.emit('onlyonce');
// event.emit('onlyonce');
const callbackevent=(name,age)=>{
    console.log(`hello${name},is this your age ${age}`);
}
event.on('removeListener',callbackevent)
event.removeListener('removeListener',callbackevent)
event.emit('removeListener',"Anmol",21)