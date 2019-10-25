if (true) {
    var x = 3;
  }
  console.log(x); // 3
  
  if (true) {
    const y = 3;
  }
  //console.log(y); // Uncaught ReferenceError: y is not defined
  
  const y = 4;
  console.log(y);
 

//   const z; //Missing initializer in const declaration
//   z =3

let z;
z=3;
console.log(z);