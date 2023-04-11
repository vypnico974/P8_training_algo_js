/**https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/javascript */

/**
Write a function that takes a string of parentheses, and determines
 if the order of the parentheses is valid. The function should return true 
 if the string is valid, and false if it's invalid.
 */

function validParentheses(str) {
    const Parentheses = [];
    for (let i = 0; i < str.length; i++) {
      const caractere = str[i];
      if (caractere === '(') {
        Parentheses.push(caractere);
      } else if (caractere === ')') {
        if (Parentheses.length === 0) {
          return false;
        }
        Parentheses.pop();
      }
    }
    if (Parentheses.length > 0) {
      return false;
    } else {
      return true;
    }  
  }
  
  console.log(validParentheses("()" )) // true
  console.log(validParentheses(")(()))" )) // false  
  console.log(validParentheses("()()(" )) // true



  /*** solution 2 */
  function validParentheses(str) {
    // Throw out all bad cases immediately
    // If the str is not an even length, return false 
    if ( str.length % 2 !== 0 ) { return false }
    // If the first el is a closed parentheses, return false 
    if ( str[0] === ")" ) { return false }
    // If the last el is an open parentheses, return false 
    if (str[str.length - 1] === '(' ) { return false }
    
    //Initializing the stack
    let stack = [];
    //Initilizing loop to iterate through str
    for (let i = 0; i < str.length; i++) {
      //If the el is an open parens, move it to the stack
      if (str[i] === '(') {
        stack.push(str[i]);
        //If the el is a closed parens and the last el in the stack isn't an open parens, false
      } else if (str[i] === ')' && stack[stack.length - 1] !== '(') {
        return false;
        //If the el is a closed parens and the last el in the stack is an open parens, pop last el from stack
      } else if (str[i] === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      }
    }
    //If loop finishes and stack isn't empty, false
    if (stack.length !== 0) {
      return false;
    } else {
      //If loop finishes and stack is empty, true
      return true;
    }
  }