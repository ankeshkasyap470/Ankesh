                                //Day 18
                          
                          // Rest parameter(...)

/* ... hota hai or uske baad jo bhi rahta hai wo array ke form me print ho jata hai*/

// function abcd(a,b,c,...chacha){
//     console.log(a , b , c , chacha);
// }
// abcd(1,2,3,4,5,6,7,8,9,0);

                               //Hoisting
/*
agar hum pahle output bol de or baad me variable ka value dete hai to ye undefined show karta hai 

console.log(a);
var a = 18;

to ye pahle var a
            a = 18;
    to ye undefined print karta hai
*/

                         //IIFE (immediately invoke function expression)

// (function sam(){
//     console.log("hello sarvesh");
// })();

// var ans = (function abcd() {
//     a = 12;

//     return{
//         set: function(val){
//             a = val;
//         },
//         get: function(){
//             console.log(a);
//         },
//     };
// })();

// ans.set("32");
// ans.get();

// var shery = (function sherylibrary(){
//     return{
//         imageEffect: function(){
//             console.log("image effect");
//         },
//         mousefollower: function(){
//             console.log("mouse follower ");
//         },
//     };
// })();

// shery.mousefollower();

                            /* HOFS (higher order function )*/

    /* ek aisa function jo yaa to return kare function nahi to accept kare function in paramater , ya fir dono */

    // function abcd(){
    //     return function(){
    //         console.log("hey world  ")
    //     }
    // }
    // abcd()();


                             /* cb function( call back function) */
            
            //kisi function mein jo function pass hota hai call karte wakt usay cb function kahte hai

// function abcd(val){

// }

// abcd(function(){

// });

                              /* first class function */
                        
        /* first class function ek darja hai jo ki js mein
        function ko mila hai ,
        is darje mein kaha jaata hai ki function ko aap value
        ki tarah use kar sakte ho */

                                /* pure function */

    /*ak function jo bina side effect ko ho
 */

    // function add(a,b){
    //     return a + b ;
    // }
    // console.log(add(2,3));


                               /* Impure function */
    // var total = 0;
    // function add(a){
    //     total +=a;

    // }
    // add(5);
    // console.log(total);


     