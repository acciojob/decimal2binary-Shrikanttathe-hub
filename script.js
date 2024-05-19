// function decimalToBinary(num1) { 

//     if (num1 === 0) return "0"; 

  

//     let arr = []; 

//     for (; num1 > 0; num1 = Math.floor(num1 / 2)) { 

//         arr.unshift(num1 % 2); 

//     } 

//     return arr.join(""); 
// } 

// function decimalToBinary(num1){
// 	return (num1 >>> 0).toString(2);
// }

function decimalTobinary (num1){
	let binary = "";
	while(num1 > 0) {
		binary = num1 % 2 + binary;
		num1 = num1 / 2;
	}
}

  
let givenNumber = 10; 
let result = decimalToBinary(givenNumber); 

console.log(result);