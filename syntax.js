// ----->What is a call back ??

// function which are passed as an argument to another function 

// function decalaration 
// function definitionm --->

function foo(cb){  //parameter  // function 

    cb("hello world");

}




// There are two ways in which  you can use call backs

// A callback is a function that is passed as an argument to another function call --
// synchronous way 
// asynchronous way

const arr=[1,2,3,4];
const exp=function (data){

    console.log(data);
    
    }

foo(exp) ; // function call

// asynchronous 
setTimeout(function(){
    console.log("hello there")

},1000)


arr.forEach(function(ele){

    console.log(ele);

})

// synchronous and asynchronous ?

// event loop ,event quque