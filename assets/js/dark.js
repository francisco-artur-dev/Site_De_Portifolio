const btn = document.getElementById('dark-mode');
const imagem = document.querySelector(".imag");

if (btn) {
  const modoSalvo = localStorage.getItem("modo");

  if (modoSalvo === "escuro") { 
    document.body.classList.add("dark");
    if (imagem) imagem.src = "assets/img/escuro.jpg";
    btn.value = "Modo Claro";
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const escuroAtivo = document.body.classList.contains("dark");
    localStorage.setItem("modo", escuroAtivo ? "escuro" : "claro");

    if (imagem) { 
      imagem.src = escuroAtivo
        ? "assets/img/escuro.jpg"
        : "assets/img/devs.jpg";
    }

    btn.value = escuroAtivo ? "Modo Claro" : "Modo Noturno";
  });
}






