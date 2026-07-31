let adms = []
let usuarios = []

function mudarTela() {

    const telas = document.querySelectorAll(".tela")
    telas.forEach(function (tela) {
        tela.classList.remove("ativa")
    })

}

function telaInicial() {

    window.location = "http://127.0.0.1:5500/Loja-Picha-us/principal/index.html"

}

function telaLogin() {

    mudarTela()
    document.getElementById("section-login").classList.add("ativa")

}

function telaEditar() {

    mudarTela()
    document.getElementById("section-editar").classList.add("ativa")

}

function telaCadastro() {

    mudarTela()
    document.getElementById("section-cadastro").classList.add("ativa")

}

function telaExcluir() {

    mudarTela()
    document.getElementById("section-excluir").classList.add("ativa")

}

function telaCadastroAdm() {

    let senha = prompt("Qual a senha?")

    if (senha == "adm123") {

        mudarTela()
        document.getElementById("section-cadastroAdm").classList.add("ativa")

    }

}

function cadastrarAdm() {

    let confirmarSenha = document.getElementById("input-confirmarSenhaAdm").value

    let novoAdm = {

        id: Date.now(),
        nomeAdm: document.getElementById("input-nomeAdm").value,
        emailAdm: document.getElementById("input-emailAdm").value,
        senhaAdm: document.getElementById("input-senhaAdm").value

    }

    if (novoAdm.senhaAdm == confirmarSenha) {

        if (novoAdm.nomeAdm != "" && novoAdm.emailAdm != "" && novoAdm.senhaAdm != "") {

            document.getElementById("aviso-cadastroAdm").innerHTML = ""
            adms.push(novoAdm)
            telaLogin()

        }

        else {

            document.getElementById("aviso-cadastroAdm").innerHTML = "Preencha seus dados"

        }

    }

    else {

        document.getElementById("aviso-cadastroAdm").innerHTML = "Senha errada"

    }

    salvar()
    limparFormulario()
    console.log(adms)
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

    }

    if (novoUsuario.senha == confirmarSenha) {

        if (novoUsuario.nomeDoUsuario != "" && novoUsuario.sobrenomeDoUsuario != ""
            && novoUsuario.email != "" && novoUsuario.senha != "" &&
            novoUsuario.dataDeNascimento != "") {

            document.getElementById("aviso-cadastro").innerHTML = ""
            usuarios.push(novoUsuario)
            telaLogin()

        }

        else {

            document.getElementById("aviso-cadastro").innerHTML = "Preencha seus dados"

        }

    }

    else {

        document.getElementById("aviso-cadastro").innerHTML = "Senha errada"

    }

    salvar()
    limparFormulario()
    console.log(usuarios)
}

function entrarNoSite() {

    carregarDados()

    let loginEmail = document.getElementById("input-login-email").value
    let loginsenha = document.getElementById("input-login-senha").value

    for (i = 0; i < usuarios.length; i++) {

        if (loginEmail == usuarios[i].email && loginsenha == usuarios[i].senha) {

            window.location = "http://127.0.0.1:5500/Loja-Picha-us/principal/index.html"

        }

        else {

            document.getElementById("aviso-login").innerHTML = "Preencha seus dados"

        }
    }
    for (i = 0; i < adms.length; i++) {

        if (loginEmail == adms[i].emailAdm && loginsenha == adms[i].senhaAdm) {

            window.location = "http://127.0.0.1:5500/Loja-Picha-us/Estoque/index.html"

        }

        else {

            document.getElementById("aviso-login").innerHTML = "Preencha seus dados"

        }
    }

    salvar()
    limparFormulario()
}

function excluirConta() {

    carregarDados()

    document.getElementById("aviso-excluir").innerHTML = ""

    let nome = document.getElementById("input-nome-excluir").value
    let email = document.getElementById("input-login-email-excluir").value
    let senha = document.getElementById("input-login-senha-excluir").value


    for (i = 0; i < usuarios.length; i++) {

        if (nome == usuarios[i].nomeDoUsuario && email == usuarios[i].email && usuarios[i].senha) {

            usuarios.splice(i, 1)
  
        }

        else {

            document.getElementById("aviso-excluir").innerHTML = "Preencha seus dados"

        }
    }   


    for (i = 0; i < adms.length; i++) {

        if (nome == adms[i].nomeAdm && email == adms[i].emailAdm && senha == adms[i].senhaAdm) {

            adms.splice(i, 1)

        }

        else {

            document.getElementById("aviso-excluir").innerHTML = "Preencha seus dados"

        }

    }
    console.log(usuarios)
    console.log(adms)
    salvar()
    limparFormulario()
}

function salvar() {

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    localStorage.setItem("adms", JSON.stringify(adms))

}

function carregarDados() {

    usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    adms = JSON.parse(localStorage.getItem("adms")) || []
}

function testar() {

    adms = [
        {
            nomeAdm: "Ana Silva",
            emailAdm: "ana.silva@email.com",
            senhaAdm: "senhaSegura123"
        },
        {
            nomeAdm: "Carlos Souza",
            emailAdm: "carlos.souza@email.com",
            senhaAdm: "senhaForte456!"
        },
        {
            nomeAdm: "Mariana Costa",
            emailAdm: "mariana.costa@email.com",
            senhaAdm: "abc123Senha*"
        },
        {
            nomeAdm: "João Pedro",
            emailAdm: "joao.pedro@email.com",
            senhaAdm: "suporte2026#"
        },
        {
            nomeAdm: "Beatriz Lima",
            emailAdm: "beatriz.lima@email.com",
            senhaAdm: "senhaAdmin789"
        }
    ]

    usuarios = [
        {
            nomeDoUsuario: "Lucas",
            sobrenomeDoUsuario: "Mendes",
            email: "lucas.mendes@email.com",
            senha: "userPass123",
            dataDeNascimento: "1995-04-12"
        },
        {
            nomeDoUsuario: "Juliana",
            sobrenomeDoUsuario: "Rocha",
            email: "juliana.rocha@email.com",
            senha: "senhaUsuario456",
            dataDeNascimento: "1998-09-25"
        },
        {
            nomeDoUsuario: "Gabriel",
            sobrenomeDoUsuario: "Martins",
            email: "gabriel.martins@email.com",
            senha: "abcUser789*",
            dataDeNascimento: "1990-12-03"
        },
        {
            nomeDoUsuario: "Camila",
            sobrenomeDoUsuario: "Duarte",
            email: "camila.duarte@email.com",
            senha: "cliente2026#",
            dataDeNascimento: "2001-07-15"
        },
        {
            nomeDoUsuario: "Rafael",
            sobrenomeDoUsuario: "Lindemman",
            email: "rafael.lindemman@email.com",
            senha: "minhaSenha321",
            dataDeNascimento: "1988-02-20"
        }
    ];

    salvar()
    limparFormulario()
    console.log(adms)
    console.log(usuarios)
}

function limparFormulario() {

    document.getElementById("input-nome-excluir").value = ""
    document.getElementById("input-login-email-excluir").value = ""
    document.getElementById("input-login-senha-excluir").value = ""
    document.getElementById("input-login-email").value = ""
    document.getElementById("input-login-senha").value = ""
    document.getElementById("input-confirmarSenha").value = ""
    document.getElementById("input-nome").value = ""
    document.getElementById("input-sobrenome").value = ""
    document.getElementById("input-email").value = ""
    document.getElementById("input-senha").value = ""
    document.getElementById("input-nascimento").value = ""
    document.getElementById("input-nomeAdm").value = ""
    document.getElementById("input-emailAdm").value = ""
    document.getElementById("input-senhaAdm").value = ""

}

function puxarDados() {

    carregarDados()

    let buscar = document.getElementById("input-nome-editar").value

    for (i = 0; i < usuarios.length; i++) {

        if (buscar == usuarios[i].nomeDoUsuario) {
            document.getElementById("input-nome-editar").value = usuarios[i].nomeDoUsuario
            document.getElementById("input-sobrenome-editar").value = usuarios[i].sobrenomeDoUsuario
            document.getElementById("input-email-editar").value = usuarios[i].email
            document.getElementById("input-senha-editar").value = usuarios[i].senha
        }

    }
    for (i = 0; i < adms.length; i++) {

        if (buscar == adms[i].nomeAdm) {
            document.getElementById("input-nome-editar").value = adms[i].nomeAdm
            document.getElementById("input-email-editar").value = adms[i].emailAdm
            document.getElementById("input-senha-editar").value = adms[i].senhaAdm
        }

    }
    console.log(usuarios)
    console.log(adms)

}

function editar() {



    let alterar = document.getElementById("input-nome-editar").value
    let alterar2 = document.getElementById("input-sobrenome-editar").value
    let alterar3 = document.getElementById("input-email-editar").value
    let alterar4 = document.getElementById("input-senha-editar").value

    for (i = 0; i < usuarios.length; i++) {

        if (alterar == usuarios[i].nomeDoUsuario) {
            usuarios[i].nomeDoUsuario = alterar
            usuarios[i].sobrenomeDoUsuario = alterar2
            usuarios[i].email = alterar3
            usuarios[i].senha = alterar4
        }

    }
    for (i = 0; i < adms.length; i++) {

        if (alterar == adms[i].nomeAdm) {
            adms[i].nomeAdm = alterar
            adms[i].emailAdm = alterar3
            adms[i].senhaAdm = alterar4
        }

    }
    salvar()
    carregarDados()
    console.log(usuarios)
    console.log(adms)
}