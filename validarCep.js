const inputCep = document.querySelector('[data-cep]');

const validarCep = () => {
  const cep = inputCep.value.replace(/\D/g, '');

  fetch( `https://viacep.com.br/ws/${cep}/json`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      "content-type": "application/json;charset=utf-8"
    }
  } )
  .then(response => response.json())
  .then(data => {
    if(data.erro){
      alert('Cep invalido!');
      return;
    }
    preencherCampos(data);
    return ;
  })

  
}

const preencherCampos = (data) => {
  const logradouro = document.querySelector('[data-logradouro]');
  const cidade = document.querySelector('[data-cidade]');
  const estado = document.querySelector('[data-estado]');
  const bairro = document.querySelector('[data-bairro]');


  logradouro.value = data.logradouro;
  bairro.value = data.bairro;
  cidade.value = data.localidade;
  estado.value = data.uf;
}

inputCep.addEventListener('blur', validarCep);