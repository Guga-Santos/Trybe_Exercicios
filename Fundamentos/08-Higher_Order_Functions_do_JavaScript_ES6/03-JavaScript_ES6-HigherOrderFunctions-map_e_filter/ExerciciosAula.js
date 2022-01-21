const cities = [
    { state: 'AM', name: 'Manaus', region: 'N'},
    { state: 'PA', name: 'Belém', region: 'N'},
    { state: 'TO', name: 'Porto Nacional', region: 'N'},
    { state: 'MG', name: 'Nepomuceno', region: 'SE'},
    { state: 'BA', name: 'Cachoeira', region: 'NE'},
    { state: 'PR', name: 'Curtitiba', region: 'S'},
    { state: 'SP', name: 'Hortolândia', region: 'SE'},
    { state: 'RN', name: 'Touros', region: 'NE'},
    { state: 'CE', name: 'Jericoacoara', region: 'NE'},
    { state: 'TO', name: 'Três Pedras', region: 'N'},
    { state: 'MG', name: 'João Pinheiro', region: 'SE'}
];

//  1 -Encontre todas as cidades da região Nordeste (NE)


// const cidadesNordeste = (array) => {
//     return array.filter((objeto) => objeto.region === 'NE');
// };

// console.table(cidadesNordeste(cities))

//  2 - Encontre todas as cidades do estado de Tocantins (TO)

// const cidadesTO = (array) => array.filter((objeto) => objeto.state === 'TO');

// console.table(cidadesTO(cities))

//   3 - Encontre todas as cidades que comecem com a letra C

const cidadesC = (array) => array.filter((objeto) => objeto.name[0] === 'C');

console.table(cidadesC(cities));