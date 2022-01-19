const sayHello = () => {
    return ('Hello, trybers!');
}

const printGreeting = (callback) => {
    console.log(callback());
}

printGreeting(sayHello);

// ------------------------------