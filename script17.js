//.  DAy 17
// 1- what is a function
/*
ans - kuch bhi code likho or usko kabhi bhi use kar pao or 
        chala pao.
    Block of code which you can 
    reuse and run at any time 


*/
// function great(){
//     var a = String('hello world');
//     console.log(a);
// }

// great();



// 2-why we need function
/*
    ans - to use further to avoid repetition of code
    to make code more reusable
*/


// 3- how to create a function
/*
    ans - function function_name(){
        //code
        example
                (function abcd(){
                console.log('hello sarvesh');
                })
    }
*/

//
//   4 - How to call a function?
//   Ans - function abcd(){
//        console.log('hello sarvesh');
//        }
//.        abcd();


// 5 - How to pass arguments to a function?
/*
    ans - function mahan(arg1,arg2){
        //code
        example
                function abcd(num1,num2){
                console.log(a+b);
                }
    }
*/
// function abcd(a,b,c,d){
//     console.log(a+b+c+d);
//     }
//     abcd(1,2,3,4);

// 7 - how many types of function?
/*. Ans -
        1- function statement
        example-functionabcd(){
        
        }

        2-function expression
        example- var abcd=function(){
                write your code
                }
        
        3-function anonymous
        example- function(){
                write your code
                }
        4-fat arrow function
        example- var abcd=()=>{ 
                write your code
                }
        5- Fat arrow with one parameter
        example- var abcd = a =>{
                console.log(a);
                }
                abcd(12);

        6- fat arrow with implicit return
        example- var abcd = () =>"sarvesh land liya muh me"
                var ans = abcd();
        
        7- rest parameter{(...) ko rest parameter bolte hai}
        example-function abcd(a,b,c,...d){
        console.log(a,b,c,d);
        }
        abcd(1,2,3,4,5,6,7,8,9,10);

        //Hoisting
        
        // console.log(a)
        // var a = 10


*/
// function outer(){
//     let count = 0 ;
//     return function inner(){
//         count++;
//         console.log(count);
//     };
// }
// const counter = outer();
// counter();
// counter();
