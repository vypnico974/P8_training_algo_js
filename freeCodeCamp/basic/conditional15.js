/**Introducing Else Statements
When a condition for an if statement is true, the block of code following it is executed. 
What about when that condition is false? Normally nothing would happen. With an else statement, 
an alternate block of code can be executed.
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
Combine the if statements into a single if/else statement.*/
function testLogicalOr(val) {
  // Only change code below this line
  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}
testLogicalOr(15);

