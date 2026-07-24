let adms = []
let usuarios = []

function mudarTela() {
    const telas = document.querySelectorAll(".tela")
    telas.forEach(function (tela) {
        tela.classList.remove("ativa")
    })
}

function telaLogin() {
    mudarTela()
    document.getElementById("section-login").classList.add("ativa")
}

function cadastrarUsuarios() {
    let confirmarSenha = document.getElementById("input-confirmarSenha").value
    let novoUsuario = {
        id: Date.now(),
        nomeDoUsuario: document.getElementById("input-nome").value,
        sobrenomeDoUsuario: document.getElementById("input-sobrenome").value,
        email: document.getElementById("input-email").value,
        senha: document.getElementById("input-senha").value,
        dataDeNascimento: document.getElementById("input-nascimento").value,
        aceitouOsTermos: document.getElementById("termos").checked
    }
    if (novoUsuario.senha == confirmarSenha) {
        if (novoUsuario.nomeDoUsuario != "" && novoUsuario.sobrenomeDoUsuario != "" && novoUsuario.email != "" && novoUsuario.senha != "" && novoUsuario.dataDeNascimento != "" && novoUsuario.aceitouOsTermos == true) {
            document.getElementById("aviso-cadastro").innerHTML = ""
            usuarios.push(novoUsuario)
        }
        else {
            document.getElementById("aviso-cadastro").innerHTML = "Teste"
        }
    }
    else {
        document.getElementById("aviso-cadastro").innerHTML = "Senha errada"
    }
    telaLogin()

    console.log(usuarios)
    console.log(novoUsuario.aceitouOsTermos)
}

function entrarNoSite() {
    let loginEmail = document.getElementById("input-login-email").value
    let loginsenha = document.getElementById("input-login-senha").value

    for (i = 0; i < usuarios.length; i++) {
        if (loginEmail == usuarios[i].email && loginsenha == usuarios[i].senha) {
            window.location = "http://127.0.0.1:5500/Loja-Picha-us/clientes/indexC.html"
        }
        else {
            document.getElementById("aviso-login").innerHTML = "Teste"
        }
    }
}




