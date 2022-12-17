//Reverse an Array--Problem-1
/*Write a function to reverse an array.*/

function rvrs(arr) {
    let newArray=arr.reverse()
	return newArray;
}
console.log(rvrs([1,2,3,4]))
/*
function rrreverse(arr) {
    let arr2=[];
	arr[0] = arr2[3];
    arr[1] = arr2[2];
    arr[2] = arr2[1];
    arr[3] = arr2[0];

    return arr2;
}
console.log(rrreverse([1,2,3,4]))

*/
//Fix the Bug: Simple Array Manipulation--Problem-2
/*Help fix all the bugs in the function incrementItems! 
It is intended to add 1 to every element in the array!*/


function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++){
		arr[i] = arr[i] + 1
    }
	return arr;
}
console.log(incrementItems([0, 1, 2, 3]))

//using by map 
function inc(arr){
    let newArr =arr.map(myfunction)

    function myfunction(value){
        return value*2;
    }
     return newArr;
}

console.log(inc([1,2,3]))


//Return the Last Element in an Array--Problem-3
/*Create a function that accepts an array and returns the last item in the array.
 */
function getLastItem(arr) {
	
        let lastIndex = arr[arr.length-1];
    
    return lastIndex;

}
console.log(getLastItem([1,2,3,1,4,8]))



//Return the Last Element in an Array--Problem-4
/*Create a function that accepts an array and returns the last item in the array.*/

function getLastItem(arr) {
	let last = arr.length-1;
    return arr[last];
}
console.log(getLastItem([1,2,1,3]))

//Convert an Array to a String--Problem-5
/*Create a function that takes an array of numbers or letters and returns a string.*/

function arrayToString(arr) {
    let txt = "";
	for (const x of arr) {
        txt += x;
      }
      return txt;
}

console.log(arrayToString([1,2,3,4,5,6]))

//Concatenating Two Integer Arrays--Problem-6
/*Create a function to concatenate two integer arrays.*/

function concatz(arr1, arr2) {
	const newArray = arr1.concat(arr2);
    return newArray;
}
console.log(concatz([3,2,3],[4,5,6]))

//alternative

function concat(arr1,arr2){
    let newArr = []
    for(var i=0; i< arr1.length; i++){
        newArr.push(arr2[i]);
    }
    for(var k=0; k<arr2.length; k++){
        newArr.push(arr1[k])
    }
    return newArr;
}

console.log(concat([7,8,9],[4,5,6]))


//Find the Index--Problem-6
/*Create a function that takes an array and 
a string as arguments and returns the index of the string.*/

function findIndex(arr, str) {
	let index = arr.indexOf(str);
    return index;
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))

//Return Types--Problem-7
/*Create a function that takes an array and 
returns the types of values (data types) in a new array.*/

function arrayValuesTypes(arr) {
    
    let newArr = [];

	for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "number"){ //sagor k ask- why put number in double 
            newArr.push("number");
        }
        else if(typeof arr[i] === "string"){
            newArr.push("string");
        }
        else newArr.push("Undefind");
    }
    return newArr;
}

console.log(arrayValuesTypes([1,2,"fb","5"]))

//Array Indexing--Problem-8
/*Given an index and an array, return the value of the array with the given index.*/

/*function valueAt(arr,indx){
       for(let i=0; i<arr.length; i++){
         let value = arr.indexOf(arr[i])
        if( indx == value ){
        return arr[i];
        }
        else return "nothing";
       } 
}
console.log(valueAt([1,2,3,4,5],8/4))*/

function valueAt(arr,indx){
    let value = arr[indx];
    return value;
}
console.log(valueAt([1,2,3,4,5],8/2))
console.log(valueAt([1, 2, 3, 4, 5, 6], 10/2))

//Find the Index (Part 1)--Problem-9
/*Create a function that finds the index of a given item.*/
function search(arr, item) {
    
    for(i=0; i<=arr.length; i++){
       
        if(item === arr[i]){
        
            return arr.indexOf("item");

        }
        else return "doesn't find";
    }
	
}
console.log(search([1, 5, 3], 3))


//another method

/*function search(arr, item) {
    
    return arr.indexOf(item);
}
console.log(search([1, 5, 3], 3))
*/

//Find the Index (Part #2)--Problem-9
/*Create a function that searches for the index of a given item in an array. 
If the item is present, it should return the index, otherwise, it should return -1.*/

function search(arr, item) {
    
    return arr.indexOf(item);
}
console.log(search([1, 5, 3], 5))