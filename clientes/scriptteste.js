function esconderTodo(){
  const tela = document.querySelectorAll(".tela");
  tela.forEach(function(tela){
    tela.classList.remove("ativa")});
 
}

function voltarAoInicio(){
esconderTodo();
document.getElementById("principal").classList.add("ativa")

}

function abrirFavoritos(){
    esconderTodo();
    document.getElementById("favoritos").classList.add("ativa")
    
}
function abrirCarrinho(){
    esconderTodo();
    document.getElementById("carrinho").classList.add("ativa")
    
}

