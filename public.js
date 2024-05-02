let btnSendNewReview = document.getElementById("btnSendNewReview");
btnSendNewReview.addEventListener("click", function () {
    let texto = document.getElementById("novaReview").value;
    let textoConvertido = converteParaHTML(texto);

    // Criar um novo documento HTML
    let novoDocumento = document.implementation.createHTMLDocument("Novo Documento");

    // Adicionar o texto convertido ao corpo do novo documento
    novoDocumento.body.innerHTML = textoConvertido;

    // Abrir o novo documento em uma nova janela
    let novaJanela = window.open();
    novaJanela.document.write(novoDocumento.documentElement.outerHTML);
});

function converteParaHTML(texto) {
    let linhas = texto.split('\n')
    let textoConvertido = '';
    linhas.forEach(linha => {
        if (linha !== '') {
            textoConvertido += `<p>${linha}</p>\n`;
        } else {
            textoConvertido += '<p></p>\n';
        }
    });
    return textoConvertido;
}
