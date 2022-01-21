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

// 1 - Transforme (mapeie) o array de objetos cities em um array de strings com o seguinte formato:
//  "S{nomeDaCidade} - ${siglaDoEstado}"

const citiesMap = (array) => array.map((objeto) => `${objeto.name} - ${objeto.state}`);

console.log(citiesMap(cities));