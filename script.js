let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

function alterarQuantidade(valor) {
    let spanQuantidade = document.getElementById("quantidade");
    let quantidade = parseInt(spanQuantidade.innerText);
    
    if (quantidade + valor > 0) {
        spanQuantidade.innerText = quantidade + valor;
    }
}

function mostrarAlerta(){
    alert("Você é fanatico por futebol? Então é muito bem vindo aqui!");
    
}