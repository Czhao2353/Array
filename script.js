const age = prompt();
let array1 = ['3', '16', '18', '21', '42', '47', age]
let array2 = array1.unshift('67', '88');
const adults = array1.map(item => 
  {return item >= 18})
const children = array1.map(item => 
  {return item <= 18})

console.log(array1);
console.log('With elders: ' , array2);
console.log('Adult: ', adults);
console.log('Children: ' , children);
array1.splice(1,3,5,19,33);
console.log('revised array1:',array1);


let array3 = ['Kathy','Brian','Isabella','David','Elena','Fiona']

let array4=array3.slice(1,3)
console.log('after slice array3:',array3);
console.log('after slice array4:',array4);

poppedOut=array3.pop();
pop=array3.shift();
console.log(poppedOut,array3);
console.log(pop,array3);
console.log(array3.push('Chloe'));
