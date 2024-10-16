
const crossArray= (arr1, arr2) => {
    let result =  [];
for (let index = 0; index < arr1.length; index++) { 
    result.push(arr1[index] ,arr2[index])}
return result 

}


let array1 = [5, 7, 14, 5];
let array2 = [6, 2, 22, 1];

console.log(crossArray(array1,array2));


const crossArray = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i], arr2[i]);
    }
    return result;
} ///  AI answer 


