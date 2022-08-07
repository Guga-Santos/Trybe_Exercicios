"use strict";
var _a, _b;
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var Months;
(function (Months) {
    Months["JANEIRO"] = "Janeiro";
    Months["FEVEREIRO"] = "Fevereiro";
    Months["MARCO"] = "Mar\u00E7o";
    Months["ABRIL"] = "Abril";
    Months["MAIO"] = "Maio";
    Months["JUNHO"] = "Junho";
    Months["JULHO"] = "Julho";
    Months["AGOSTO"] = "Agosto";
    Months["SETEMBRO"] = "Setembro";
    Months["OUTUBRO"] = "Outubro";
    Months["NOVEMBRO"] = "Novembro";
    Months["DEZEMBRO"] = "Dezembro";
})(Months || (Months = {}));
var Seasons;
(function (Seasons) {
    Seasons["VERAO"] = "Ver\u00E3o";
    Seasons["OUTONO"] = "Outono";
    Seasons["INVERNO"] = "Inverno";
    Seasons["PRIMAVERA"] = "Primavera";
})(Seasons || (Seasons = {}));
var monthsNames = Object.values(Months);
var choiceMonth = readline_sync_1["default"].keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
var seasonsSouth = (_a = {},
    _a[Seasons.OUTONO] = [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
    _a[Seasons.INVERNO] = [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
    _a[Seasons.PRIMAVERA] = [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
    _a[Seasons.VERAO] = [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
    _a);
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
var seasonsNorth = (_b = {},
    _b[Seasons.PRIMAVERA] = seasonsSouth[Seasons.OUTONO],
    _b[Seasons.VERAO] = seasonsSouth[Seasons.INVERNO],
    _b[Seasons.OUTONO] = seasonsSouth[Seasons.PRIMAVERA],
    _b[Seasons.INVERNO] = seasonsSouth[Seasons.VERAO],
    _b);
var hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
var choiceHemisphere = readline_sync_1["default"].keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
var month = Object.values(Months)[choiceMonth];
var hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log("M\u00EAs: \n".concat(month));
console.log("Hemisf\u00E9rio: \n".concat(hemisphere));
console.log("Esta\u00E7\u00F5es:");
var chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map(function (entry) {
    var seasons = entry[0];
    var months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
