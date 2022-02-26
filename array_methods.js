// var arr = [1,2,3,4,5,6,7,8];
// console.log(arr);
// var arr2 = new Array(5);
// console.log(arr2[2]);
// arr[2]='hello'

// arr.push('world');
// arr.pop()
// arr.unshift('hello')
// arr.shift()

// arr.splice(3,0,"delete","all")
// console.log(arr);
// console.log(arr.slice(2,4));

// console.log(Array.isArray([]));
// console.log(typeof([]));


// var arr = [1,2,3,4,5,6,7,8];

// console.log(arr instanceof Array);
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// console.log(arr1.concat(arr2).concat(arr3));
// console.log(arr1.concat(arr2,arr3,"hello"));
// var arr = [1,2,3,4,5,6,7,8];
// const arr2 = ["Emil", "Tobias", "Linus"];
// console.log(arr2.indexOf('Emil'));

// var arr3 = [1,2,3,4,5,6,7,8,9,];
// console.log(arr3.findIndex(function(a){
//     return a>6;
// }));
//  console.log(arr3.findIndex((q)=>{
//     return q>5;
//  }));

// var arrFriend = [
//     {
//         name: 'Hamid',
//         age: 25
//     },
//     {
//         name: 'Meher',
//         age: 26,
//     },
//     {
//         name: 'Amanulha',
//         age: 30,
//     },
//     {
//         name: 'Amanulha',
//         age: 30,
//     }

// ]
// console.log(arrFriend.findIndex((f)=>{
//     return f.age===30
// }));
// console.log(arrFriend.find((g)=>{
//     return g.age==26
// }));
// console.log(arrFriend.filter((k)=>{
// return k.age>26;
// }));
// var num = [2,4,6,8];

// num.forEach((r,s,t)=>{
//     console.log(r,s,t);  
// })


// console.log(num.map((e)=>{
//     return e + 1;
    
// }));



// var num = [2,4,6,8];

// var result = num.some((e)=>{
//     return e %2 ===1;
// })
// console.log(result);


// var result = num.every((e)=>{
//     return e %2 ===1;
// })
// console.log(result);
// const fruits = ["Banana", "Orange", "Apple", "Mango","butter"];
// console.log(fruits);






// fruits.copyWithin(2,0,1)
// console.log(fruits);
// var sot = ["a","d","e","c","b",-555];
// sot.sort()
// console.log(sot);
// console.log("A".charCodeAt("A"));
// console.log("a".charCodeAt("a"));
// sot.reverse()
// console.log(sot);
// var num2 = [1,154,25,36,45];
// num2.sort((a,b)=>a-b)
// console.log(num2);


// var arrays = [2,4,6,8,10];
// arrays[2]
// console.log(arrays[2]);

// arrays[2]=5;/* push */
// console.log(arrays);

// arrays.pop();
var s =10;
for(var a =1; a<=s; a++){
    var c = ''
    for(var b =1;b<=a;b++){
        c = c + "*"


    }
    console.log(c);
}