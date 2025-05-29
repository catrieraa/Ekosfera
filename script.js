function simulateImpact() {
  const result = document.getElementById("simulation-result");
  result.textContent = "Polusi menyebabkan terganggunya rantai makanan dan penurunan populasi spesies tertentu dalam ekosistem.";
  result.style.fontWeight = "bold";
  result.style.marginTop = "20px";
}

function checkAnswer(choice) {
  const result = document.getElementById("quiz-result");
  if (choice === 'b') {
    result.textContent = "Benar! Polusi air menyebabkan hilangnya keanekaragaman hayati.";
    result.style.color = "green";
  } else {
    result.textContent = "Jawaban kurang tepat. Coba lagi!";
    result.style.color = "red";
  }
  result.style.fontWeight = "bold";
  result.style.marginTop = "15px";
}
