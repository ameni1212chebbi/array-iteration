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
    //Q7
    function subtractReverse(array) { var result=array[array.length-1]
        for( var i=array.length-2;i>=0;i--){
        result=result-array[i]}
        return result}
        undefined
        subtractReverse([1, 2, 3])
        0
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
        //Q9
        function average(array) {
            var result=0
            var average=0
            for(i=0;i<array.length;i++){
            result=result+array[i]
            }
            return average=result/array.length
            }
            undefined
            average([1, 2, 3])
            2
            average([0, 1, 2])
            1
            //Q10
            function square(array) {
                for(i=0;i<array.length;i++){
                array[i]=array[i]*array[i]
                }
                return array
                }
                undefined
                square([1, 2, 3])
                (3) [1, 4, 9]
                //Q11
                function isArray(array){
                    if (toString.call(array) === "[object Array]")
                    return true;
                    return false;
                    }
                    undefined
                    isArray([1, 2, 3])
                    true
                    isArray("hi")
                    false
                    //Q12
                    function min(array){
                        var m = array[0]
                        for (var i=1;i<array.length;i++){
                        if (array[i]<array[i+1]){
                        m = array[i]
                        } 
                        if (array[i]>array[i+1]){
                            m = array[i+1]
                            } 
                        }
                     return m 
                    }
                    //Q13
                    function max(array){
                        var m = array[0]
                        for (var i=1;i<array.length;i++){
                        if (array[i]<array[i+1]){
                        m = array[i]
                        } 
                        if (array[i]>array[i+1]){
                            m = array[i+1]
                            } 
                        }
                     return m 
                    }
                     //Q14
                     function shortestString(array){
                        var shortest=array[0].length;  
                        for (var i=1; i<array.length;i++){
                           if (array[i].length<shortest) {
                               shortest=array[i].length}}
                     return shortest; 
                     }
                     //Q15
                     function longestString(array){
                        var longest=array[0].length;  
                        for (var i=1; i<array.length;i++){
                           if (array[i].length>longest) {
                               longest=array[i].length}}
                     return longest; 
                     }
                     //Q16
                     function minMax(array){
                        var result=[];
                        result[0]=Math.min(...array);
                       result[1]=Math.max(...array);
                      return result
                    }
                    //Q17
                    function shortestStringOne(array){
                        var shortest=array[0].length;  
                        var string=array[0];
                        for (var i=1; i<array.length;i++){
                           if (array[i].length<shortest) {
                               shortest=array[i].length
                               string=array[i]}}
                     return string; 
                     }
                     undefined
                     shortestStringOne(["hi", "cat","hello"])
                     "hi"
                     function longestStringTwo(array){
                        var longest=array[0].length;
                        var string=array[0];  
                        for (var i=1; i<array.length;i++){
                           if (array[i].length>longest) {
                               longest=array[i].length
                               string=array[i]}}
                     return string; 
                     }
                     undefined
                     longestStringTwo(["hi", "cat","hello"])
                     "hello"
                     function shortestLongest(array){
                         var result=[];
                         result[0]=shortestStringOne(array);
                         result[1]=longestStringTwo(array);
                         return result;}
                     undefined
                     shortestLongest(["hi", "cat", "hello"])
                     (2) ["hi", "hello"]
                     

