//22/05//2021
//aminefaidi-amenichebbi

//Q1

function arrayFor(array) {
    var i = 0;
    for(i=0; i<array.length; i++){
    console.log(array[i]);
    }
    
    }

//Q2
function arrayWhile(array) {
    var i =0;
    while (i<array.length){
    i++;
    console.log(array[i])
    }
    }
//Q3
function sum(array) {
    var result = 0;
    var i = 0;
    while(i < array.length){
    result =result+array[i];
    i++;
    }
    return result;
    }
//Q4
//skipped 

//Q5 
 //for-loop
function sumStartAt(array, index){
    var i = index;
    var result = 0;
    for (i=index; i < array.length; i++){
        result=result+array[i];
    }
    return result;
    }
//while-loop
function sumStartAt(array, index){
    var i = index;
    var result = 0;
    while (i<array.length){
    result = result + array[i]; i++;
    }
    return result;
    }

//Q6
function sumUntil(array, index) {
    var i = index;
    var result = 0;
    for (i=index;i>=0;i--){
    result = result + array[i]}
    return result;}
    //Q8
    function product(array) {
        var i=0
        result=1
        for(i=0;i<array.length;i++){
        result=result*array[i]
        }
        return result 
        }
        undefined
        product([1, 2, 3])
        6

