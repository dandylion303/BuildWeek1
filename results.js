// 1. LEGGO I DATI DALL'URL
const params = new URLSearchParams(window.location.search);
const score = params.get("score");
const total = params.get("total");

// 2. MOSTRO I DATI NELLA PAGINA
document.getElementById("score").innerText = score;
document.getElementById("total").innerText = total;
// 3 MOSTRO STELLINE ALLA FINE DEL DOCUMENTO

for (let i = 0; i < total; i++) {
    const star = document.createElement("img")
    star.setAttribute("src", "./assets/star.svg")
    if (i < score) {
        star.setAttribute("class", "correctAnswers")

    } else {
        star.setAttribute("class", "incorrectAnswers")
    }

    stellina.appendChild(star)
}

const evaluation = document.createElement("p")
const main = document.getElementById("mainResults")
evaluation.setAttribute("class","counter")

if (score >= 6) {
    evaluation.innerText = ("Exam Passed")
    evaluation.setAttribute("style","color: green")
} else {
    evaluation.innerText = ("Exam Failed")
    evaluation.setAttribute("style","color: red")
}

main.appendChild(evaluation)
