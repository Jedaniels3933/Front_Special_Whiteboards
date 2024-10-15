// Week2 Day 2 {First Whiteboard Problem}


//longestString
//Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
//You can assume that no two strings will have the same length in the array.


const LongestString = (arr) => {  //function that takes in an array of strings as a parameter
    let longest = ""; // variable for longest one I set to empty
    for (let i = 0; i < arr.length; i++) {  //use for to loop it 
        if (arr[i].length > longest.length) { // as its looping if the length of each string is greater than the length of the longest string 
            longest = arr[i]; // set the longest string to the current string

        }
    }
    return longest;
}

