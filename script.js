alert ("Interface feita em HTML/CSS por Rafael Teixeira e Eliseu Santos como trabalho para a disciplina 1IHM...");

alert("O projeto ainda não conta com script para verificação de disponibilidade, mas ao clicar 'Verificar' alterna-se entre disponível e indisponível...")

let disp = document.getElementById("disp");
let indisp = document.getElementById("indisp");

function myClick (){
    if (indisp.style.display == "inline"){
        indisp.style.display = "none";
        disp.style.display = "inline";
    } else {
        indisp.style.display = "inline";
        disp.style.display = "none";
    }
}

function translate (){
    alert("Essa botão deve traduzir a página.")
}