// 1. LEGGO I DATI DALL'URL
const params = new URLSearchParams(window.location.search);
const score = params.get("score");
const total = params.get("total");

// 2. MOSTRO I DATI NELLA PAGINA
document.getElementById("score").innerText = score;
document.getElementById("total").innerText = total;
// 3 MOSTRO STELLINE ALLA FINE DEL DOCUMENTO


