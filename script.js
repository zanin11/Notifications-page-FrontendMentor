let button = document.querySelector("#todas-lidas");
button.addEventListener("click", e=>{
    console.log("clicou!");
    let publi1 = document.querySelector("#publicacao-1");
    let publi2 = document.querySelector("#publicacao-2");
    let publi3 = document.querySelector("#publicacao-3");
    publi1.style.backgroundColor = "#FFF";
    publi2.style.backgroundColor = "#FFF";
    publi3.style.backgroundColor = "#FFF";
    let n = document.querySelector("#numero-notificacoes");
    n.innerHTML = '0';
    document.querySelector("#bola-vermelha1").style.display = 'none';
    document.querySelector("#bola-vermelha2").style.display = 'none';
    document.querySelector("#bola-vermelha3").style.display = 'none';
});