
function logar()
{
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    
    if (login === "admin" && senha === "admin")
    {
        window.location.href = "publicaReviews.html";
        alert('Sucesso');
    }
    else
    {
        alert('Senha Incorreta! Tente Novamente.')
    }


}

let btnSend = document.getElementById("btnSend");
btnSend.addEventListener("click", logar);