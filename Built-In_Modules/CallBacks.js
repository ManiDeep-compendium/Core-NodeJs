function displayUserdetails(user) {
  console.log(`User Name: ${user.name}`);
  console.log(`User Age: ${user.age}`);
}


function getUserDetails(diplayUser) {
  setTimeout(()=>{
    const user = {
      name: "Manideep",
      age: 26
    }
    diplayUser(user);
  },3000)
}


getUserDetails(displayUserdetails);



/* Types Of Callbacks 
1. Asynchronous Callbacks.
2. Synchronous Callbacks.


Synchronous
------------

Synchronous: A callback which is executes immediately is called a synchronous callback.
EX: filter,sort,map,  and etc..


Asynchronous
------------
A callback is often used to continue or resume code execution after an asynchronous operation has completed

callbacks are used to delay the execution of a function until a particular time or event has to occurred 

*/

