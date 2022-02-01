const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};
fruits();

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  // No se puede redeclarar por ser let
  //let y = 2;
  console.log(x);
  console.log(y);
};
anotherFunction();
