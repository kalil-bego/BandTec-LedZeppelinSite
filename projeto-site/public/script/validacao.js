let erro = false;

function cadastrar() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    let altura = '150px';
    let verificar = fetch("/", {
        method: "POST",
        body: formulario
    });

    ver.innerHTML = '';

    let cadastro = {
        email: c_email.value.trim(),
        usuario: c_login.value.trim(),
        senha: c_senha.value.trim()
    }

    if (erro === false) {
        ver.style.animation = 'error .2s';
        erro = true;
    } else if (erro === true) {
        ver.style.animation = 'error-repeat .2s';
        erro = false;
    }

    if (cadastro.email == "" && cadastro.usuario == "" && cadastro.senha == "") {
        div_aviso.style.height = altura;
        ver.innerHTML += `Preencha o formulário de cadastro <br>`;
        verificar;
        return false;
    } else if (cadastro.email == "") {
        div_aviso.style.height = altura;
        ver.innerHTML += `Preencha o campo de Email <br>`;
        verificar;
        return false;
    } else if (cadastro.email.indexOf('@') <= 0 || cadastro.email.indexOf('.') <= 0 || cadastro.email.length <= 8) {
        div_aviso.style.height = altura;
        ver.innerHTML += `Insira um email válido <br>`;
        verificar;
        return false;
    } else if (cadastro.usuario == "") {
        div_aviso.style.height = altura;
        ver.innerHTML += `Preencha o campo de Usuário <br>`;
        verificar;
        return false;
    } else if (cadastro.usuario.length < 5) {
        div_aviso.style.height = altura;
        ver.innerHTML += `O Usuário deve conter pelo menos 5 caracteres <br>`;
        verificar;
        return false;
    } else if (cadastro.senha == "") {
        div_aviso.style.height = altura;
        ver.innerHTML += `Preencha o campo da Senha <br>`;
        verificar;
        return false;
    } else if (cadastro.senha.length < 5) {
        div_aviso.style.height = altura;
        ver.innerHTML += `A Senha deve conter pelo menos 5 caracteres <br>`;
        verificar;
        return false;
    } else {
        div_aviso.style.height = '';

        fetch("/usuarios/cadastrar", {
            method: "POST",
            body: formulario
        }).then(function(response) {

            if (response.ok) {

                preencher();
                entrar();

            } else {

                console.log('Erro de cadastro!');
                response.text().then(function(resposta) {
                    div_erro.innerHTML = resposta;
                });
            }
        });
        return false;
    }
}