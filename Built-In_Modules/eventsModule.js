const Eventemitter = require("node:events");


const emitter =  new Eventemitter();
console.log('execution thread before on');

//event listener one
emitter.on("custom-event",()=>{
  console.log(`custom-event got triggered & executed`);
})
console.log('execution Thread after on');

//event listener two
/* A event can have multiple listeners */
emitter.on("custom-event",(first,second)=>{
  console.log(first);
  console.log(second);
  console.log(`custom-event got triggered & executed for second listener`);
});

emitter.emit("custom-event",'FirstArgument','secondArgument');
console.log('execution Thread after second on')




