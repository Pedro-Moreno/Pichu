function alterarQuantidade(valor) {
    let spanQuantidade = document.getElementById("quantidade");
    let quantidade = parseInt(spanQuantidade.innerText);
    
    if (quantidade + valor > 0) {
        spanQuantidade.innerText = quantidade + valor;
    }
}