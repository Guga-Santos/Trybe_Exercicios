const sayHello = () => {
    return ('Hello, trybers!');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);

// ------------------------------

const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(5, console.log);

// ----------------------------------