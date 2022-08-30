let botao = document.querySelector ('button');
let cabecalho = document.querySelector ('h2');
function defineNomeUsuario(){
    let meuNome = prompt ('Por favor, digite seu nome.');
    localStorage.setItem ('nome', meuNome);
    cabecalho.textContent = 'Bem vindo, ' + meuNome;
}
if(!localStorage.getItem('nome')){
    defineNomeUsuario();
}else{
    let nomeGuardado = localStorage.getItem('nome');
    cabecalho.textContent = 'Bem vindo, ' + nomeGuardado;
}
botao.onclick = function() {
    defineNomeUsuario();
}
function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      cabecalho.innerHTML = 'Bem vindo, ' + meuNome;
    }
  }