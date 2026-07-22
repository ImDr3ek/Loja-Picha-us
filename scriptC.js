let total = 0;
const produtos = [
    { id: 0, nome: "Notebook", preco: 4500.00, estoque: 35, rating: 4.8 },
    { id: 1, nome: "Mouse", preco: 150.00, estoque: 120, rating: 4.5 },
    { id: 2, nome: "Teclado", preco: 320.00, estoque: 80, rating: 4.6 },
    { id: 3, nome: "Monitor", preco: 3900.00, estoque: 25, rating: 4.9 },
    { id: 4, nome: "Impressora", preco: 600.00, estoque: 15, rating: 4.2 },
    { id: 5, nome: "Webcam", preco: 300.00, estoque: 40, rating: 4.3 },
    { id: 6, nome: "Headset", preco: 250.00, estoque: 65, rating: 4.7 },
    { id: 7, nome: "Caixa de Som", preco: 550.00, estoque: 30, rating: 4.4 },
    { id: 8, nome: "HD Externo", preco: 300.00, estoque: 55, rating: 4.8 },
    { id: 9, nome: "SSD 1TB", preco: 400.00, estoque: 90, rating: 4.9 },
    { id: 10, nome: "Pendrive 64GB", preco: 40.00, estoque: 200, rating: 4.5 },
    { id: 11, nome: "Roteador Wi-Fi", preco: 250.00, estoque: 45, rating: 4.6 },
    { id: 12, nome: "Smartphone", preco: 2000.00, estoque: 110, rating: 4.7 },
    { id: 13, nome: "Tablet", preco: 1500.00, estoque: 60, rating: 4.5 },
    { id: 14, nome: "Smartwatch", preco: 800.00, estoque: 85, rating: 4.6 },
    { id: 15, nome: "Carregador USB", preco: 65.00, estoque: 300, rating: 4.8 },
    { id: 16, nome: "Cabo HDMI", preco: 50.00, estoque: 150, rating: 4.7 },
    { id: 17, nome: "Cabo USB-C", preco: 35.00, estoque: 250, rating: 4.9 },
    { id: 18, nome: "Fonte de Alimentação", preco: 550.00, estoque: 25, rating: 4.8 },
    { id: 19, nome: "Placa de Vídeo", preco: 2500.00, estoque: 12, rating: 4.9 },
    { id: 20, nome: "Processador", preco: 1200.00, estoque: 30, rating: 4.9 },
    { id: 21, nome: "Memória RAM 16GB", preco: 1300.00, estoque: 75, rating: 4.8 },
    { id: 22, nome: "Placa-Mãe", preco: 800.00, estoque: 22, rating: 4.7 },
    { id: 23, nome: "Gabinete Gamer", preco: 400.00, estoque: 18, rating: 4.6 },
    { id: 24, nome: "Cooler para CPU", preco: 250.00, estoque: 50, rating: 4.7 },
    { id: 25, nome: "Microfone", preco: 300.00, estoque: 35, rating: 4.5 },
    { id: 26, nome: "Câmera Digital", preco: 3000.00, estoque: 8, rating: 4.8 },
    { id: 27, nome: "Projetor", preco: 1200.00, estoque: 14, rating: 4.4 },
    { id: 28, nome: "TV 50 Polegadas", preco: 2500.00, estoque: 40, rating: 4.8 },
    { id: 29, nome: "Controle Sem Fio", preco: 350.00, estoque: 95, rating: 4.7 },
    { id: 30, nome: "Console de Videogame", preco: 3500.00, estoque: 25, rating: 4.9 },
    { id: 31, nome: "Joystick", preco: 200.00, estoque: 70, rating: 4.6 },
    { id: 32, nome: "Cadeira Gamer", preco: 1000.00, estoque: 30, rating: 4.7 },
    { id: 33, nome: "Mesa para Escritório", preco: 500.00, estoque: 20, rating: 4.5 },
    { id: 34, nome: "Luminária LED", preco: 180.00, estoque: 110, rating: 4.6 },
    { id: 35, nome: "Ventilador", preco: 150.00, estoque: 150, rating: 4.3 },
    { id: 36, nome: "Ar-Condicionado", preco: 2000.00, estoque: 20, rating: 4.8 },
    { id: 37, nome: "Cafeteira Elétrica", preco: 120.00, estoque: 80, rating: 4.7 },
    { id: 38, nome: "Liquidificador", preco: 130.00, estoque: 100, rating: 4.5 },
    { id: 39, nome: "Air Fryer", preco: 350.00, estoque: 65, rating: 4.9 },
    { id: 40, nome: "Forno Elétrico", preco: 400.00, estoque: 40, rating: 4.6 },
    { id: 41, nome: "Geladeira", preco: 3000.00, estoque: 15, rating: 4.8 },
    { id: 42, nome: "Máquina de Lavar", preco: 2000.00, estoque: 25, rating: 4.7 },
    { id: 43, nome: "Aspirador de Pó", preco: 300.00, estoque: 50, rating: 4.6 },
    { id: 44, nome: "Ferro de Passar", preco: 90.00, estoque: 90, rating: 4.4 },
    { id: 45, nome: "Batedeira", preco: 150.00, estoque: 60, rating: 4.5 },
    { id: 46, nome: "Panela Elétrica", preco: 180.00, estoque: 85, rating: 4.8 },
    { id: 47, nome: "Purificador de Água", preco: 600.00, estoque: 35, rating: 4.7 },
    { id: 48, nome: "Fogão 4 Bocas", preco: 800.00, estoque: 40, rating: 4.6 },
    { id: 49, nome: "Filtro de Linha", preco: 40.00, estoque: 200, rating: 4.8 }
];

function ativarProdutos() {
    document.getElementById('lista-precos').innerHTML = ''
    for (let i = 0; i < produtos.length; i++) {
        document.getElementById('lista-precos').innerHTML += '<button  onclick= "agregarNoCarrinho(' + 
        produtos[i].id + ')" class="produtos" id="p' + produtos[i].id + 
        '"> ' + produtos[i].nome + '</button>'
    }
    console.log(produtos)

}


function agregarNoCarrinho(id) {

    let valor = produtos[id].preco;
    console.log("valor " + valor);
    total = total + valor;
    console.log("Valor total:" + total);
        document.getElementById('totalVendido').innerHTML = 'Total de vendas: R$' + total.toFixed(2);
    document.getElementById('listaVendas').innerHTML += 'produto:' + produtos[id].nome + " " + "R$" + produtos[id].preco +
    '<br>'
    document.getElementById('listaVendas').value = ''
    
}

function removerProdutos(){
    let i = produtos.indexOf(prompt('Qual produto quer remover'))

}