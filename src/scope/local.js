const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};
helloWorld();
// No podemos acceder a hello porque es local
// console.log(hello);

var scope = 'i am global';
const functionScope = () => {
  var scope = 'i am just a local';
  const func = () => {
    return scope;
  };
  // Ambito lexico pilla la mas cercana a nivel local
  console.log(func()); // i am just a local
};
functionScope();
