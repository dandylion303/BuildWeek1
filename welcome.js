// PRENDO ELEMENTI HTML

const checkbox =
  document.getElementById("promise");

const button =
  document.getElementById("proceed");



// EVENTO CLICK BOTTONE

button.addEventListener("click", () => {

  // CONTROLLO CHECKBOX

  if (checkbox.checked) {

    // VADO ALLA PAGINA QUIZ

    window.location.href =
      "./quiz.html";

  } else {

    // ALERT ERRORE

    alert(
      "You must accept the promise before proceeding"
    );

  }

});