// console.log('js tutorial');

/* mark greed */
/* function greedCombination(marks){
if( marks < 0 || marks>100){
    console.log("You have type a wrong input");
}
else if(marks>=90){
    console.log("Greed STAR");
}
else if(marks>=80){
    console.log("Greed AA");
}
else if(marks>=70){
    console.log("Greed A+");
}
else if(marks>=60){
    console.log("Greed A");
}
else if(marks>=50){
    console.log("Greed B+");
}
else if(marks>=40){
    console.log("Greed B");
}
else if(marks>=30){
    console.log("Greed C");
}
else if(marks>=25){
    console.log("Greed D");
}
else{
    console.log("You are Field");
}
}

greedCombination(65) */










/*  task
    1 
    12
    123
    1234
    */
   /*  let line = 5;
    for (let a = 1; a <= line; a++) {
        let line = "";
        for (let b = 1; b<= a; b++) {
            // line += "*";
            line = line+ " &"
        }
        console.log(line);
    } */

    // for (var i = 1; i <= 10; i++) {
    //     var line = '* ';
    //     for (var n = 1; n < i; n++) {
    //         line += "* " ;
    
    //     }
    //     console.log(line);
    // }
/* task 2 
 *****
 *****
 *****
 */

    let lineNumber = 10;
for (let c = 0; c < lineNumber; c++) {
    let lineData = "";
    for (let d = 0; d < lineNumber; d++) {
        lineData += "# "
    }
    console.log(lineData);
}
