var para;

 function aoCarregarPagina() {
     para = document.querySelector('p');
     para.addEventListener('click', atualizarNome);
 } 

 function atualizarNome() {
    var nome = prompt('Qual o novo nome?');
    para.textContent = '🎮 Jogador 1: ' + nome
 }
