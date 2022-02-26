// function myFunction(){
//     console.log('my first function');
// }
// myFunction()
//  function fullName(fName,lName){
//      console.log(fName + ' '+ lName);
//  }
//  fullName('Md','Saheb')

// function multiply(){
//     var arr = arguments;
//     var sum = 1;
// for(var i = 0; i<arr.length;i++){
//     sum *= arr[i]
// }
// console.log(sum);
// }
// multiply(5,5,5,5)
// function add(a, b) {
//     var result = a + b;

//     function sqr() {
//         var sum = result * result;
//         return sum
//     }/* nested function */
//     return sqr()
// }
// console.log(add(2, 5));

// call back function
/* function add(a,b,cb){
    var c = a+b;
    var d = a-b;
    var result = cb(c,d);

return result
}
console.log(add(5,2,function(c,d){
return c + d
}))

console.log(add(5,2,function(c,d){
return c - d
}))

console.log(add(5,2,function(c,d){
return c * d
})) */




/* function callBack(a,b,cb){
var x = a + b;
var y = a - b;
var result = cb(x,y);
return result

}
console.log(callBack(5,3, function(m,n){
return m + n
}));
console.log(callBack(5,3, function(m,n){
return m - n
}));
console.log(callBack(5,3, function(m,n){
return m * n
})); */


// var arr = [2,4,6,8,2];
// arr.forEach(function(e,i,arr){
// console.log(e,i,arr)
// })



/* function ourForEach(array,cb){
    for(let i = 0; i<array.length;i++){
        cb(array[i],i,array)
        // console.log(array[i]);
    }

}
let sum = 0;
ourForEach(arr, function(val,i,arr){
   sum = sum+val 
});
console.log(sum); */



// function myFind(arr){
//     for(var e of arr){
//         var condition = e > 6
//        if(condition){
//            return e
//        }
//     }
// }
// var arr = [2,4,6,8,2];
// console.log(myFind(arr));


/* function myFind(arr,cb){
    for(var e of arr){
        var condition = cb(e)
       if(condition){
           return e
       }
    }
}
var arr = [2,4,6,8,2];
console.log(myFind(arr,function(e){
return e>6
})); */

// function filter(arr){
//     let newArray = [];
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i] % 2===0){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// }
// var arr = [1,3,6,8,9];
// console.log(filter(arr));






// function filter(arr,cb){
//     let newArray = [];
//     for(let i = 0; i<arr.length;i++){
//         if(cb(arr[i])){
//             newArray.push(arr[i])
//         }
//     }
//     return newArray;
// }
// var arr = [1,3,6,8,9];
// console.log(filter(arr,function(val){
// return val % 2 ===1;
// }));
// console.log(filter(arr,function(val){
// return val % 2 ===0;
// }));



/* function fil(array,cb){
    var newArray = []
   for(let i = 0; i<array.length;i++){
       
       if(cb(array[i])){
           newArray.push(array[i])
       }
   }
   return newArray;

}
let arr = [1,2,3,4,5,]
console.log(fil(arr,(val)=>{
return val % 2===1
})); */


// var ages = [10, 18, 52, 15];

// var adults = ages.some(function (ages) {
//   return ages == 18;
// });
// console.log(adults);



/* function myAges(ages) {
    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log(true);
        }
        else{
        console.log(false);
        }
    }
}
var ages = [10, 12, 19, 15]
console.log(myAges(ages)); */

/* array.reduce */
// var arr = [2,4,6,8,10];
// var arr2 = arr.reduce((pre,current)=>{
// return pre+current;
// },5)

// console.log(arr2);


/* array.reduceRight */
// const num = [200, 70, 45];
// var reduceRight = num.reduceRight((pre,crr)=>{
// return pre+crr
// })

// console.log(reduceRight);


/* array.reduceRight function implement */
// function myReduceR(num,cb){
// for(var i = 0; i <num.length;i++){
//     if(cb(num[i])){
//         console.log(num[i]);
//     }
// }
// }
// const num = [200, 70, 45];
// console.log(myReduceR(num,(e,i,num)=>{
//     return num;

// }));


// for (let a = 1; a <= 5; a++) {
//     let n = "";
//     for (let b = 1; b <= a; b++) {

//        n = n+a;
//     }
//     console.log(n);

// }

/* recursiv funtion  */
//  function recursivFunc(n){
//     if(n===0){
//         return
//     }
//     console.log(n);
    
//     recursivFunc(n-1)
//  }
//  recursivFunc(100)
