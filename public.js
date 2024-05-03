
let btnSendNewReview = document.getElementById("btnSendNewReview");
btnSendNewReview.addEventListener("click", function () {

   let texto = document.getElementById("novaReview").value;
   converteParaHTML(texto);

    function converteParaHTML(texto) {
        let linhas = texto.split('\n')
         let textoConvertido = '';       linhas.forEach(linha => {
             if (linha !== '') {
                 textoConvertido +=`<p>${linha}</p>\n`;
           } else {
               textoConvertido += '<p></p>\n';
           }
       });
       document.getElementById('resultado').innerHTML = textoConvertido;
   }

 });

 //o de baixo n funciona por conta de esperar o de cima ir primeiro
document.getElementById('tituloReview04').innerHTML = "Sonic 2" 
