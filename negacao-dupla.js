// Valores Falsy 
console.log(!!0);       // false
console.log(!!"");      // false
console.log(!!null);    // false

// Valores Trutyhy
console.log(!!1);       // true 
console.log(!!"texto"); // true
console.log(!![]);      // true  (Arrays vazios são objetos, logo são truthy)
console.log(!!{});      // true  (Objetos vazios são truthy)