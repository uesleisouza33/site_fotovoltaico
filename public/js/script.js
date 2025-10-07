function calcularPlacas() {
  const consumo = parseFloat(document.getElementById("consumo").value);
  const geracaoPorPlaca = parseFloat(
    document.getElementById("geracaoPorPlaca").value
  );

  if (consumo > 0 && geracaoPorPlaca > 0) {
    const placas = Math.ceil(consumo / geracaoPorPlaca);
    document.getElementById(
      "resultado"
    ).innerText = `Você precisaria de aproximadamente ${placas} placas.`;
  } else {
    document.getElementById("resultado").innerText = "Digite valores válidos.";
  }
}

document.querySelectorAll("[data-page-id]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const pageId = event.target.dataset.pageId;

    document.querySelectorAll("main section").forEach((sec) => {
      sec.classList.add("hidden");
      sec.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);

    if (targetPage) {
      targetPage.classList.remove("hidden");
      targetPage.classList.add("active");
    }
  });
});
