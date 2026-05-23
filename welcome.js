// PRENDO ELEMENTI HTML

const checkbox =
  document.getElementById("promise");

const button =
  document.getElementById("proceed");

const overlayAlert = document.getElementById("overlayAlert")
const overlayText = document.getElementById("overlayText")


// EVENTO CLICK BOTTONE

button.addEventListener("click", () => {

  // CONTROLLO CHECKBOX

  if (checkbox.checked) {

    // VADO ALLA PAGINA QUIZ

    window.location.href =
      "./quiz.html";

  } else {

    // ALERT ERRORE
     document.getElementById("overlayAlert").style.display = "block";

    // USCITA AL CLICK 
    overlayAlert.addEventListener('click', (e) => {
      if (e.target === overlayAlert) {
        overlayAlert.style.display = 'none';
      }
    })
    overlayText.addEventListener('click', (e) => {
      if (e.target === overlayText) {
        overlayAlert.style.display = 'none';
      }
    })
  }

});

