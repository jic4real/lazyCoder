//Function to check and replace numbers in an array with a string
function numCheck(number) {  
    //declaring the array  
    let numArr = [];
    //for-loop to loop through the argument    
    for(let i = 1; i <= number; i++) {
        //conditional statements to get matching numbers
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0){            
            numArr.push("yu-gi-oh");
        } 
        else if (i % 3 == 0 && i % 5 == 0) {
            numArr.push("gi-oh");
        } 
        else if (i % 2 == 0 && i % 3 == 0) {
            numArr.push("yu-gi");
        } 
        else if (i % 2 == 0 && i % 5 == 0) {
            numArr.push("yu-oh");
        } 
        else if (i % 2 == 0) {            
            numArr.push("yu");
        } 
        else if (i % 3 == 0) {           
            numArr.push("gi");
        } 
        else if (i % 5 == 0) {
            numArr.push("oh");
        } 
        else {
            numArr.push(i);        
        }    
    }    
    return numArr;    
}

console.log(numCheck(100)); 
console.log(numCheck(10));