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

//  1 - Transforme (Mapeie) o array de objetos e retorne o seguite resultado:
//  "A cidade de ${nomeDaCidade} fica no estado de ${nomeDoEstado}"
const cityAndState = (array1, array2) => array1.map((objeto1) => `A cidade de ${objeto1.name} fica no estado de ${array2.find((objeto2) => objeto2.short === objeto1.state).name}`);

console.log(cityAndState(cities, states));