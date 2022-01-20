//  - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (emailCreate) => {
    const employees = {
      id1: emailCreate('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: emailCreate('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: emailCreate('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const emailCreate = (nome) => {
    const eMail = `${nome.toLowerCase().replace(' ', '')}@trybe.com`;
    return {nome, eMail};
  };

  console.log(newEmployees(emailCreate))

//   -------------------------------------------------------
// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (numero, sorte, mensagem) => {
    console.log(mensagem)
};

const deuBom = () => 'Parabéns, você ganhou!';

const deuRuim = () => 'Ixi, tenta de novo, campeão!';

const sorte = () => parseInt(Math.random() * 5)

sorteio(4, sorte(), deuruim())
