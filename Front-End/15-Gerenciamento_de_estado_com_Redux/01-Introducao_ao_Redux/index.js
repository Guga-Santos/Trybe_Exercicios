// const Redux = require('redux')

// const fazerLogin = (email) => ({
//     type: 'LOGIN',
//     email
// })






// const INICIAL_STATE = {
//     login: false,
//     email: "",
// };

// const reducer = (state = INICIAL_STATE, action ) => {
//     if(action.type === 'LOGIN') {
//         return {
//             ...state,
//             login: !state.login,
//             email: action.email
//         }
//     }
// }

// const store = Redux.createStore(reducer);

// store.dispatch(fazerLogin("guga.santos.guga@gmail.com"));

// console.log(store.getState())

// _________________________________________________________________


const Redux = require('redux');

const changeStates = (name, age, email, password) => ({
    type: "FORMS",
    name,
    age,
    email,
    password,

})

const INICIAL_STATE = {
    name: "",
    age: 0,
    email: "",
    password: "",
}

const reducer = (state = INICIAL_STATE, action) => {
    if(action.type === "FORMS") {
        return {
            ...state,
            name: action.name,
            age: action.age,
            email: action.email,
            password: action.password,
        }
    } else {

        return state;
    }
}


const store = Redux.createStore(reducer);

store.dispatch(changeStates("Gustavo", 38, "guga@hotmail.com", "galinhapintadinha"))

console.log(store.getState())