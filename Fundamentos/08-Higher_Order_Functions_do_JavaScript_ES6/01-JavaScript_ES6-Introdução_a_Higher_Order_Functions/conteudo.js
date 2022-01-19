const sayHello = () => {
    return ('Hello, trybers!');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);

// ------------------------------

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   repeat(5, console.log);

// ----------------------------------

// const repeat = (number, action) => {
//     for (let count = 0; count <= number; count += 1) {
//       action(count);
//     }
//   };
  
//   const isEven = (number) => {
//       if (number % 2 === 0) {
//           console.log(number, 'is even');
//       }
//   };

//   const isOdd = (number) => {
//       if((number % 2) > 0 ) {
//           console.log(number, 'is odd');
//       }
//   };

//   repeat(10, isEven);
//   repeat(10, isOdd);

// -------------------------------------------

const alarm = () => {
    return 'Acordando!!';
};

const comer = () => {
    return 'Bora tomar café!!';
};

const dormir = () => {
    return 'Partiu dormir!!';
};

const doingThings = (msg) => {
    console.log(msg);
};

doingThings(dormir())
