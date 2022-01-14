function sum() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);
    try { 
        if (isNaN(value1) || isNaN(value2)) {
        throw new Error('Apenas números, engraçadinho!')
    } else if (value1 == '' || value2 == '') {
        throw new Error('Por favor, preencha os dois campos!')
    }
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
      } catch (error) {
          document.getElementById('result').innerHTML = `${error.message}`
          document.getElementById('value1').value = '';
          document.getElementById('value2').value = '';
        //   throw error.message;
      }
  }
  
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }