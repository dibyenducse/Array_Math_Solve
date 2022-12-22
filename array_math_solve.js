//----------------------------------Problem-1-------------------------------------


//Reverse an Array
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


//----------------------------------Problem-2-------------------------------------


//Fix the Bug: Simple Array Manipulation
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

//----------------------------------Problem-3-------------------------------------


//Return the Last Element in an Array
/*Create a function that accepts an array and returns the last item in the array.
 */
function getLastItem(arr) {
	
        let lastIndex = arr[arr.length-1];
    
    return lastIndex;

}
console.log(getLastItem([1,2,3,1,4,8]))

//----------------------------------Problem-4-------------------------------------

//Return the Last Element in an Array
/*Create a function that accepts an array and returns the last item in the array.*/

function getLastItem(arr) {
	let last = arr.length-1;
    return arr[last];
}
console.log(getLastItem([1,2,1,3]))


//----------------------------------Problem-5-------------------------------------

//Convert an Array to a String
/*Create a function that takes an array of numbers or letters and returns a string.*/

function arrayToString(arr) {
    let txt = "";
	for (const x of arr) {
        txt += x;
      }
      return txt;
}

console.log(arrayToString([1,2,3,4,5,6]))


//----------------------------------Problem-6-------------------------------------


//Concatenating Two Integer Arrays
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


//----------------------------------Problem-7-------------------------------------

//Return Types
/*Create a function that takes an array and 
returns the types of values (data types) in a new array.*/

function arrayValuesTypes(arr) {
    
    let newArr = [];

	for(let i=0; i<arr.length; i++){
        if(typeof arr[i] === "number"){ //sagor k ask- why put number in double 
            newArr.push("number");
        }
        else if(typeof arr[i] == "string"){
            newArr.push("string");

        }else if(typeof arr[i] == "true" ||typeof arr[i] == false ){
			return newArr.push("Boolean")
		}
		else if(typeof arr[i]==="[]" || typeof arr[i]=== "null"){
			return newArr.push("object")
		}
        else newArr.push("Undefind");
    }
    return newArr;
}

console.log(arrayValuesTypes([1,2,"fb","5","true",[],null]))

//alternative

function arrayValuesTypes(arr) {
    
  function myFunction(item){
        return typeof item;
       }
      return arr.map(myFunction);
}
console.log(arrayValuesTypes([1,8,7,"kk","afa","afsaf",[],null]))


//----------------------------------Problem-8-------------------------------------

console.log("Array Indexing--Problem-8")
/*Given an index and an array, return the value of the array with the given index.*/

function valueAt(arr,indx){
    let aaa = "Doesn't exist"
       for(let i=0; i<=arr.length; i++){
        let value = arr.indexOf(arr[i])
        if( indx === value ){
        return arr[i];
        } 
    } 
    return aaa;
} 

console.log(valueAt([1,2,3,4,5],11))

//alternative

function valueAt(arr,indx){
    let value = arr[indx];
    return value;
}
console.log(valueAt([1,2,3,4,55],8/2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 10/2));


//----------------------------------Problem-9-------------------------------------

//Find the Index (Part#1)
/*Create a function that finds the index of a given item.*/


function search(arr, item) {
    
    for(i=0; i<=arr.length; i++){
       
        if(item === arr[i]){       
            return  arr.indexOf("item");
        } return "doesn't find";
    }
	
}
console.log("Problem-9:"+search([1, 5, 3], 7))


//another method

function search(arr, item) {
    
    return arr.indexOf(item);
}
console.log("Problem-9(Altr):"+search([11, 15, 13], 13))

//----------------------------------Problem-10-------------------------------------
//Find the Index (Part #2)
/*Create a function that searches for the index of a given item in an array. 
If the item is present, it should return the index, otherwise, it should return -1.*/

function search(arr, item) {
    
    return arr.indexOf(item);
}
console.log("Problem-10:"+search([1, 5, 3], 5))


//----------------------------------Problem-11-------------------------------------

//Check if an Array Contains a Given Number
/*Write a function to check if an array contains a particular number.*/
function iCheck(arr, el) {
   
	for(var i=0; i < arr.length; i++){
        if(arr[i] === el){
            return true;
        } 
    }
    return false;
}
console.log(iCheck([1, 2, 3, 4, 5], 3))
console.log(iCheck([1, 1, 2, 1, 1], 2))


//alternative

function check(arr, el){
    return arr.includes(el)
}
console.log(check([1, 1, 2, 1, 1], 2))


//----------------------------------Problem-12-------------------------------------

//Array of Strings to Array of Numbers
/*Create a function that takes as a parameter an array 
of "stringified" numbers and returns an array of numbers. */
function toNumberArray(arr) {
    let newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.push(arr[i]);
        
    }
    return newArr;
}

console.log(toNumberArray(["10","20","30"]))

//alternative

function toNumberArray(arr){
    return arr.map(Number);
}
console.log(toNumberArray(["1","2","3"]));

//----------------------------------Problem-13-------------------------------------

//Less Than, Greater Than
/*Create a function that takes two numbers num1, num2, and an array arr and 
returns an array containing all the numbers in arr greater than num1 and less than num2.*/

function arrBetween(num1, num2, arr) {
    let newArray =[];
       arr.filter(check)
       function check(num){
           if(num>num1 && num<num2){
               newArray.push(num);
           }
       }
       return newArray;
   }
   console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]))
   console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]))
   console.log(arrBetween(7, 32, [1, 2, 3, 78]))

   //----------------------------------Problem-14-------------------------------------
   //Similar Bread
   /*Given two arrays, which represent two sandwiches, return whether both 
   sandwiches use the same type of bread.The bread will always be found 
   at the start and end of the array.*/

   function hasSameBread(arr1,arr2){
     if(arr1[0]==arr2[0] && arr1[2]==arr2[2]){
       return true;
     }else return false;
   }

   console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
  ))

//----------------------------------Problem-15-------------------------------------
//Multiply Every Array Item by Two
/*Create a function that takes an array with numbers 
and return an array with the elements multiplied by two*/

function getMultipliedArr(arr) {
	function myFunction(num){
        return num*2;
    }
    return arr.map(myFunction);
}

console.log(getMultipliedArr([1,8,9]))

//----------------------------------Problem-16-------------------------------------
//Recreating the String.length Property

/*Create a function which returns the length of a string, 
WITHOUT using String.length property.*/

function length(s) {
	let myArr = s.split("");
    let arrLen = myArr.length;
    return arrLen;
}

console.log(length("Hello World"))

//----------------------------------Problem-17-------------------------------------
//Array of Word Lengths
/*Create a function that takes an array of words 
and transforms it into an array of each word's length.*/


function wordLengths(arr) {
      let strngLenth = arr.map(myFunction)
      function myFunction(strn){
        return strn.length;
      }
      return strngLenth;

	
}

console.log(wordLengths(["hello","world"]))


//----------------------------------Problem-18-------------------------------------


//Find the Index
/*Create a function that takes an array and 
a string as arguments and returns the index of the string.*/

function findIndex(arr, str) {
	let index = arr.indexOf(str);
    return index;
}
console.log("Problem-18:"+findIndex(["hi", "edabit", "fgh", "abc"], "fgh"))

//----------------------------------Problem-19-------------------------------------
//Rotate the Array by One
/*Given an array, reverse all the values*/
function revrsByOne(arr) {
	newArr = arr.reverse();
    return newArr;
}	

console.log("Problem-19:"+revrsByOne([1,2,3,4,5,6]))

//----------------------------------Problem-20-------------------------------------

//Rotate the Array by One
/*Given an array, rotate the values clockwise 
by one (the last value is sent to the first position).*/

function rotateByOne(arr){

  let lastOne = arr.pop();
   arr.unshift(lastOne)
   return arr;
}
console.log("Problem-20:"+rotateByOne([1,2,3,4,5,6]))

//----------------------------------Problem-21-------------------------------------
//Invert an Array

/*Create a function that takes an array of numbers arr and returns an inverted array.*/

function invertArray(arr){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != 0) {
			arr[i] = -arr[i];
		}
	}
	return arr;
}

console.log(invertArray([1, 2, 3, 4, 5]))

//----------------------------------Problem-22-------------------------------------
//Spaces Between Each Character
/*Create a function that takes a string and returns a 
string with spaces in between all of the characters.*/

function spaceMeOut(str) {
    for(let i=0; i<str.length; i++){
        let myArr = str.split("")
       return myArr.join("+");
    }
	
}
console.log(spaceMeOut("space"))


//----------------------------------Problem-23-------------------------------------

//Sum of Array elements?
/*Given an array of integers, determine whether the sum of its elements.*/

function totalSum(arr) {
	let sum = arr.reduce(getSum, 0)
    function getSum(total, num){
        return total+num;
    }
    return sum;
}
console.log(totalSum([1,2,3,4,5,6]))


//----------------------------------Problem-24-------------------------------------

//Even or Odd?
/*Given an array of integers, determine whether the sum of its elements is even or odd.
The return value should be a string ("odd" or "even").
If the input array is empty, consider it as an array with a zero ([0]). */

function evenOrOdd(arr) {
	let sum = arr.reduce(getSum, 0)
    if(sum%0 == 0){
        return "even";
    } return "odd";
    function getSum(total, num){
        return total+num;
    }
}
console.log(evenOrOdd([1,2,3,4,5,6]))