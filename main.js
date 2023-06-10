const reportAcudits = [];
let acudit;

const seguentAcudit = async () => {
  try {
    const respuesta = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await respuesta.json();
    acudit = data.joke;
    console.log(data.joke);
    document.getElementById("renderJoke").innerHTML = acudit;
  } catch (error) {
    document.getElementById(
      "renderJoke"
    ).innerHTML = `Hem tingut el seguent error: ${error} obtenint l'acudit`;
    console.log(`Hem tingut el seguent error: ${error} obtenint l'acudit`);
  }

  return acudit;
};

const renderBtn = () => {
  const btnJoke = document.querySelector(".btnJoke");
  const valoracio = document.querySelector(".valoracio");

  btnJoke.addEventListener("click", () => {
    valoracio.style.display = "block";
  });
};

renderBtn();

const execValoracio = (clickVal) => {
  let check = reportAcudits[reportAcudits.length - 1];

  let lastValoracio = {
    acuditCurrent: acudit,
    valoracio: clickVal,
    data: new Date().toISOString(),
  };

  if (
    check === undefined ||
    check.acuditCurrent !== lastValoracio.acuditCurrent
  ) {
    reportAcudits.push(lastValoracio);
    console.table(reportAcudits);
  } else {
    reportAcudits[reportAcudits.length - 1].valoracio = clickVal;
    reportAcudits[reportAcudits.length - 1].data = new Date().toISOString();
    console.table(reportAcudits);
  }
};
