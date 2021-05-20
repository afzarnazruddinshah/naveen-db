// Write a function that takes in an array of integers as input and returns an array of integers as output. 

//Note: negative numbers are integers as well
// The output array must be

// [sum/firstelement, sum/second element , sum/third element... ]

// where sum is the sum of all elements of the input array.

//case1 
//i/p: [1,2,3,4]
//o/p: [10, 5, 3, 2];

//case 2:
//i/p: [5,10,0,-15]
//i/p: []
const sumFn = (inputArr) => { 
    let sum = 0;
    let outputArr = []; 
    inputArr.forEach( item => { sum = sum + item }); // sum = 0 // [0, 0, 0, 0];
    inputArr.forEach( item => {
        
        if(item === 0){
            outputArr.push(0);//option1
            //throwing error - best option
        }
        else{
            outputArr.push(Number(sum/item));
        }
        outputArr.push(Number(sum/item));
    });
    return outputArr;
}

// 
