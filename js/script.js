document.getElementById("icon-search").addEventListener("click" , mostrar_buscador)
document.getElementById("cover-ctn-search").addEventListener("click" , ocultar_buscador)

//declarando variable

bars_search =  document.getElementById("ctn-bars-search")
cover_ctn_search = document.getElementById("cover-ctn-search")
inputSearch = document.getElementById("inputSearch")
box_search = document-getElementById("box-search")

//function para mostrar el buscador

function mostrar_buscador(){
  bars_search.style.top= "80px";
  cover_ctn_search.style.display = "block";
  inputSearch.focus();


}

function ocultar_buscador(){
    bars_search.style.top= "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();






function buscador_interno {

    filter = inputSearch.value.toUpperCase();


}