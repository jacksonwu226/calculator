let left_num 
let right_num
let operator

function add(a,b){
  return +a + +b
}
function subtract(a,b){
  return +a - +b;
}
function multiply(a,b){
  
  return +a * +b;
}
function divide(a,b){
  return b===0 ? 'ERROR' : +a/+b;
}

function operate(op, a, b){
  let res
  switch(op){
    case '+':
      res = add(a,b)
      break;
    case '-':
      res = subtract(a,b)
      break;
    case '*':
      res = multiply(a,b)
      break;
    case '/':
      res = divide(a,b)
      break;
  }
  return res;
}