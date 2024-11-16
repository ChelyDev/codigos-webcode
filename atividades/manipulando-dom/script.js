var corEscolhida = prompt('Digite a cor do fundo (nome ou código hexadecimal, ex: black, white, #FF5733):');

function mudarBG(cor) { 
    document.body.style.background = cor

    var titulo = document.querySelector('h1');
            
    if (cor === 'black' || cor === '#000000') {
        titulo.style.color = 'white';
    } else if (cor === 'white' || cor === '#FFFFFF') {
        titulo.style.color = 'black';
    } else {
        titulo.style.color = '';
    }
}

mudarBG(corEscolhida);