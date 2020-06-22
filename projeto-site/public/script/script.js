function johnB() {
    nomes.innerHTML = 'John Bonham';
    JohnB.style.display = 'block';
    Robert.style.display = 'none';
    Jimmy.style.display = 'none';
    JohnP.style.display = 'none';
    avisoIntegrantes.style.display = 'none';
    johnBonham.style.opacity = '1';
    robertP.style.opacity = '';
    jimmyP.style.opacity = '';
    johnPaul.style.opacity = '';
}

function robert() {
    nomes.innerHTML = 'Robert Plant';
    JohnB.style.display = 'none';
    Robert.style.display = 'block';
    Jimmy.style.display = 'none';
    JohnP.style.display = 'none';
    avisoIntegrantes.style.display = 'none';
    johnBonham.style.opacity = '';
    robertP.style.opacity = '1';
    jimmyP.style.opacity = '';
    johnPaul.style.opacity = '';
}

function jimmy() {
    nomes.innerHTML = 'Jimmy Page';
    JohnB.style.display = 'none';
    Robert.style.display = 'none';
    Jimmy.style.display = 'block';
    JohnP.style.display = 'none';
    avisoIntegrantes.style.display = 'none';
    johnBonham.style.opacity = '';
    robertP.style.opacity = '';
    jimmyP.style.opacity = '1';
    johnPaul.style.opacity = '';
}

function johnP() {
    nomes.innerHTML = 'John Paul Jones';
    JohnB.style.display = 'none';
    Robert.style.display = 'none';
    Jimmy.style.display = 'none';
    avisoIntegrantes.style.display = 'none';
    JohnP.style.display = 'block';
    johnBonham.style.opacity = '';
    robertP.style.opacity = '';
    jimmyP.style.opacity = '';
    johnPaul.style.opacity = '1';
}

var contagem = 0;

function angelAnimate() {
    btnGame.src = 'img/btn-game-subir.png';
    angel.style.display = 'block';

    contagem = Number(cliques.innerHTML);
    contagem++;
    cliques.innerHTML = contagem;

    if (contagem == 2) {
        angel.style.marginTop = '660px';
        angel.style.marginLeft = '160px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 3) {
        angel.style.marginTop = '613px';
        angel.style.marginLeft = '230px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 4) {
        angel.style.marginTop = '565px';
        angel.style.marginLeft = '280px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 5) {
        angel.style.marginTop = '520px';
        angel.style.marginLeft = '300px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 6) {
        angel.style.marginTop = '475px';
        angel.style.marginLeft = '320px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 7) {
        angel.style.marginTop = '430px';
        angel.style.marginLeft = '320px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 8) {
        angel.style.marginTop = '390px';
        angel.style.marginLeft = '300px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 9) {
        angel.style.marginTop = '353px';
        angel.style.marginLeft = '260px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 10) {
        angel.style.marginTop = '320px';
        angel.style.marginLeft = '220px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 11) {
        angel.style.marginTop = '285px';
        angel.style.marginLeft = '160px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 12) {
        angel.style.marginTop = '255px';
        angel.style.marginLeft = '80px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 13) {
        angel.style.marginTop = '225px';
        angel.style.marginLeft = '10px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 14) {
        angel.style.marginTop = '200px';
        angel.style.marginLeft = '-80px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 15) {
        angel.style.marginTop = '170px';
        angel.style.marginLeft = '-170px';
        angel.style.transition = 'all .5s';
    } else if (contagem == 16) {
        angel.style.marginTop = '0';
        angel.style.opacity = '0';
        angel.style.transition = 'all .5s';
        aviso.style.display = 'flex';
        acabou.style.display = 'block';
    }
}

function deNovo() {
    cliques.innerHTML = '-1';
    aviso.style.display = 'none';
    acabou.style.display = 'none';

    btnGame.src = 'img/start-button.png';
    angel.style.display = 'none';
    angel.style.opacity = '1';
    angel.style.transition = '';
    angel.style.marginTop = '';
    angel.style.marginLeft = '';

    contagem = Number(cliques.innerHTML);
    contagem++;
    cliques.innerHTML = contagem;

}

function opacidadePlaylist1() {
    spotify.style.opacity = '1';
    button.style.opacity = '1';
    spotify.style.transition = 'all .5s';
    button.style.transition = 'all .5s';
}

function opacidadePlaylist0() {
    spotify.style.opacity = '';
    button.style.opacity = '';
    spotify.style.transition = 'all .5s';
    button.style.transition = 'all .5s';
}

let evento = false;

function verPlaylist() {
    if (evento === false) {
        playlist.style.height = '50%';
        button.style.bottom = '49.9%';
        arrow.style.transform = 'rotate(180deg)';
        playlist.style.transition = 'all .5s';
        button.style.transition = 'all .5s';
        arrow.style.transition = 'all .5s';
        evento = true;
    } else if (evento === true) {
        playlist.style.height = '';
        button.style.bottom = '';
        arrow.style.transform = '';
        playlist.style.transition = 'all .5s';
        button.style.transition = 'all .5s';
        arrow.style.transition = 'all .5s';
        evento = false;
    }
}

/* Header */

window.onscroll = function() { topo() };

function topo() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").className = "test";
    } else {
        document.getElementById("header").className = "";
    }
}

function inputLogin() {
    if (evento === false) {
        click.style.backgroundColor = '#9c120d';
        boxLogin.style.height = '164px';
        boxLogin.style.transition = 'all .3s';
        evento = true;
    } else if (evento === true) {
        click.style.backgroundColor = '';
        boxLogin.style.height = '';
        boxLogin.style.transition = 'all .1s';
        invalid.style.opacity = '';
        evento = false;
    }
}

function reset() {
    invalid.style.opacity = '';
}

function modal() {
    if (evento === false) {
        modalCadastro.style.display = 'block';
        mostrar.style.display = 'block';
        evento = true;
    } else if (evento === true) {
        mostrar.style.display = '';
        modalCadastro.style.display = '';
        div_aviso.style.height = '';
        ver.innerHTML = '';
        c_email.value = '';
        c_login.value = '';
        c_senha.value = '';
        evento = false;
    }
}