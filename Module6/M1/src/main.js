'use strict';

const endpointKnoppen = document.getElementsByClassName("endpoint-knop");
const statusInfo = document.getElementById("status-info");
const responseDetails = document.getElementById("response-details");

const statusCategorieen = {
  200: "status-success",
  301: "status-redirect",
  404: "status-client-error",
  500: "status-server-error"
};

const infoWeergeven = (tekst, container, klasse = null) => {
  const p = document.createElement("p");
  p.textContent = tekst;
  if (klasse) p.className = klasse;
  container.appendChild(p);
}

const haalStatusInfoOp = statuscode => {
  fetch(`https://httpstat.us/${statuscode}`)
  .then(response => {
    statusInfo.innerHTML = "";
    infoWeergeven(`${response.status} ${response.statusText}`, statusInfo);
    if (response.ok) infoWeergeven("Aanvraag succesvol!", statusInfo);
    infoWeergeven(`${statuscode[0]}00s`, statusInfo, statusCategorieen[statuscode]);

    responseDetails.innerHTML = "";
    infoWeergeven("Headers:", responseDetails);
    for (let header of response.headers) {
      infoWeergeven(`${header}`, responseDetails);
    }
    infoWeergeven(`Type: ${response.type}`, responseDetails);
    
  })
  .catch(error => {
    statusInfo.innerHTML = "";
    infoWeergeven(error, statusInfo, "status-server-error");
  });
}

for (let knop of endpointKnoppen) {
  knop.addEventListener("click", () => haalStatusInfoOp(knop.dataset.code));
}