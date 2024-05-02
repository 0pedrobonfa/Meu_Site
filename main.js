

document.getElementById("botaoReviews").addEventListener("click",function(){
    window.location.href = "paginaReview.html";
})

document.getElementById("btnSend").addEventListener("click",function ()
{
    var login = document.getElementById('login');
    var senha = document.getElementById('senha');
    
    if (login == "admin" && senha == "admin")
    {
        alert('Sucesso');
    }
    else
    {
        alert('Fracasso');
    }


});


