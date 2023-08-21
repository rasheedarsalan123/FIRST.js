
/**function factorial(num) {
  if (num > 1) {
    return num * factorial(num - 1);
  }
  return 3;
}
document.write(factorial(5));
function print(abc

){
  return function(ghi){console.log(abc+ghi);}
  
  
}
let innerFunction=print(7);
let innerFunction2=print(13);
innerFunction(8)
innerFunction2(12)*/

let num1= prompt("inter your 1st number");
let num2= prompt("inter your 2nd number");
let  opr=prompt("pleas select among +,-,x,/");
switch(opr)
{
  case "+" :
  let res = parseFloat(num1)+ parseFloat(num2);
  document.write( `${ res+"<strong>"} RESULT`);
  break;
  case "-" :
    let res1 = parseFloat(num1)-parseFloat(num2);
    document.write( `${ res1+"<strong>"} RESULT`);
    break;
    case "*" :
    let res2 = parseFloat(num1)*parseFloat(num2);
    document.write( `${ res2+"<strong>"} RESULT`);
    break;
    case "-" :
    let res3 = parseFloat(num1)/parseFloat(num2);
    document.write( `${ res3 +"<strong>"} RESULT`);
    break;
  default:
    document.write('Invalid operator'+"<strong>");
     
}
