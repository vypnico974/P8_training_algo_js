function convertToRoman(number) {
  const decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  let negative = false;
  
  if (number === 0) {
    return null;
  } 
  if (number < 0) {
     number = -number;
    negative = true;
  }
  
  let result = '';
  
  for (let i=0; i < decimal.length; i++){
//     while (number%decimal[i] < number ){
//       result += roman[i]
//       number -= decimal[i] ;     
//     }
    
   while (number >= decimal[i] ){
     result += roman[i]
     number -= decimal[i] ;   
   }
     
  }  
  if (negative === false) {
    console.log(negative)
    return result; 
  }  return ("-"+result);   
}
decimalToRoman(0); // === "null"
decimalToRoman(4); // === "IV"
decimalToRoman(-4); // === "-IV"
decimalToRoman(37); // === "XXXVII"
decimalToRoman(143); // === "CXLIII"
decimalToRoman(1234); // === "MCCXXXIV"