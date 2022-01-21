const states = [
    { short: 'AM', name: "Amazonas"},
    { short: 'PA', name: "Pará"},
    { short: 'TO', name: "Tocantins"},
    { short: 'MG', name: "Minas Gerais"},
    { short: 'BA', name: "Bahia"},
    { short: 'PR', name: "Paraná"},
    { short: 'SP', name: "São Paulo"},
    { short: 'RN', name: "Rio Grande do Norte"},
    { short: 'CE', name: "Ceará"}
];

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
];

const regions = [
    { short: 'N', name: 'Norte' },
    { short: 'NE', name: 'Nordeste' },
    { short: 'CW', name: 'Centroeste' },
    { short: 'SE', name: 'Sudeste' },
    { short: 'S', name: 'Sul' },
];

//  1 - Transforme (Mapeie) o array de objetos e retorne o seguite resultado:
//  "A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}"
const cityAndState = (array1, array2) => array1.map((objeto1) => `A cidade de ${objeto1.name} fica no estado de ${array2.find((objeto2) => objeto2.short === objeto1.state).name}`);

// console.log(cityAndState(cities, states));

//  2 - Transforme (Mapeie) o array de objetos em um array de objetos com o seguinte formato:
//  { state: "Amazonas", city: "Manaus", region: "Norte" }

// const objectArray = cities.map((objeto1) => {
//     const estados = states.find((objeto2) => objeto2.short === objeto1.state);
//     const regiao = regions.find((objeto3) => objeto3.short === objeto1.region);
//     return {
//         state: estados.name,
//         city: objeto1.name,
//         region: regiao.name,
//     }
// });

const objectArray = (array1, array2, array3) => array1.map((objeto1) => {
    return {
        state: `${array2.find((objeto2) => objeto2.short === objeto1.state).name}`,
        city: objeto1.name,
        region: `${array3.find((objeto3) => objeto3.short === objeto1.region).name}`,
    }
});

console.log(objectArray(cities,states,regions))

