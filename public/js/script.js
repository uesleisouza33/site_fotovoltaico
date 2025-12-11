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

document.getElementById("consumo").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calcularPlacas();
  }
});

document
  .getElementById("geracaoPorPlaca")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      calcularPlacas();
    }
  });

function openLightbox(e) {
  const btn = e.currentTarget;
  const type = btn.getAttribute("data-type");
  const src = btn.getAttribute("data-src");
  const box = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");
  content.innerHTML = "";
  if (type === 'image') {
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  img.className = 'max-h-[90vh] w-auto mx-auto rounded';
  content.appendChild(img);
  } else if (type === "video") {
    const v = document.createElement("video");
    v.src = src;
    v.controls = true;
    v.autoplay = true;
    v.muted = true;
    v.className = "max-h-[90vh] w-auto mx-auto rounded";
    content.appendChild(v);
  }
  box.classList.remove("hidden");
  box.style.display = "flex";
}
function closeLightbox() {
  const box = document.getElementById("lightbox");
  const content = document.getElementById("lightbox-content");
  content.innerHTML = "";
  box.classList.add("hidden");
  box.style.display = "none";
}
