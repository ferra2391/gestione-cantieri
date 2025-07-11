const URL_WEB_APP = "https://script.google.com/macros/s/AKfycbybSXuBklZxyoyvo-FvV-UZ280WBygR8wMRTAO97dl8h6_g8-_VjDtBa2uPrVOf2nmI6Q/exec";

function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "mario" && pass === "1234") {
    document.getElementById("form").style.display = "block";
  } else {
    alert("Credenziali errate");
  }
}

function invia() {
  const operaio = document.getElementById("operaio").value;
  const cantiere = document.getElementById("cantiere").value;
  const lavorazione = document.getElementById("lavorazione").value;

  if (!operaio || !cantiere || !lavorazione) {
    alert("Compila tutti i campi.");
    return;
  }

  const dati = {
    operaio,
    user: "mario",
    cantiere,
    lavorazione
  };

  fetch(URL_WEB_APP, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(dati),
    headers: {
      "Content-Type": "application/json",
    },
  });
}