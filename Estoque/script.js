//Variáveis
let inputNome = document.getElementById("input-nome"), inputMarca = document.getElementById("input-marca")
let inputValor = document.getElementById("input-valor"), inputEstoque = document.getElementById("input-estoque")
let inputAvaliacao = document.getElementById("input-avaliacao"), inputId = document.getElementById("input-id")

let estoque = []



//Funções principais (CRUD)
function AdicionarProduto(){

    //Produto a ser adicionado
    let novoProduto = {
        nome: inputNome.value,
        marca: inputMarca.value,
        valor: Number(inputValor.value),
        estoque: Number(inputEstoque.value),
        avaliacao: Number(inputAvaliacao.value),
        id: Date.now()
    }
    
    //adicionar ao array, resetar os inputs e mostrar na página
    estoque.push(novoProduto)
    resetarInputs()
    mostrarEstoque()
    consoleLog()
}
function removerProduto(){
    //Produto a ser removido
    let produto = Number(inputId.value)

    //Vasculhar array pelo id escolhido
    for(let i = 0; i < estoque.length; i++){
        if(produto == estoque[i].id){
            //Remover produto se produto encontrado
            estoque.splice(i, 1)
        }
    }

    //Atualizar lista e resetar os inputs
    mostrarEstoque()
    resetarInputs()
    consoleLog()
}   
function procurarProduto(){
    //Produto a ser encontrado
    let produto = inputNome.value

    //Vasculhar array pelo produto
    for(let i = 0; i < estoque.length; i++){
        if(produto == estoque[i].nome){
            //Adicionar valores restantes
            inputMarca.value = estoque[i].marca
            inputValor.value = estoque[i].valor
            inputEstoque.value = estoque[i].estoque
            inputAvaliacao.value = estoque[i].avaliacao
            inputId.value = estoque[i].id
        }
    }
}
function atualizarProduto(){
    //Produto a ser atualizado
    let produto = Number(inputId.value)

    //Vasculhar array pelo produto
    for(let i = 0; i < estoque.length; i++){
        if(produto == estoque[i].id){
            //Atualizar valores
            estoque[i].nome = inputNome.value
            estoque[i].marca = inputMarca.value
            estoque[i].valor = inputValor.value
            estoque[i].estoque = inputEstoque.value
            estoque[i].avaliacao = inputAvaliacao.value
        }
    }

    
    resetarInputs()
    mostrarEstoque()
}
function alterarEstoque(){
    //Quantia a ser alterada e produto a ser alterado
    let quantia = document.getElementById("input-alterarEstoque")
    let produto = inputId.value
    
    //Vasculhar array pelo produto
    for(let i = 0; i < estoque.length; i++){
        if(produto == inputId.value){
            //Alterar valor do estoque
            estoque[i].estoque += Number(quantia.value)
        }
    }

    mostrarEstoque()
}

//Funções user friendly
function resetarInputs(){
    inputNome.value = ""
    inputMarca.value = ""
    inputValor.value = ""
    inputEstoque.value = ""
    inputAvaliacao.value = ""

    inputNome.focus()
}
function mostrarEstoque(){
    //Lista
    let listaDeProdutos = document.getElementById("lista-produtos")

    //Resetar lista
    listaDeProdutos.innerHTML = ''

    //Loop para mostrar itens na página
    for(let i = 0; i < estoque.length; i++) {
        listaDeProdutos.innerHTML += `
        <div class = "card-produto">
            <h3>${i} - ${estoque[i].nome}</h3>
            <p>marca: ${estoque[i].marca}</p>
            <p>Valor: ${estoque[i].valor}</p>
            <p>Estoque: ${estoque[i].estoque}</p>
            <p>Avaliacao: ${estoque[i].avaliacao}</p>
            <p>ID: ${estoque[i].id}</p>
        </div>
        `
    }
}
function consoleLog(){
    console.log(estoque)
}


//Local storage
function salvarDados(){
    localStorage.setItem('estoque', JSON.stringify(estoque))
}
function carregarDados(){
    estoque = JSON.parse(localStorage.getItem('estoque')) || []
}