const menu = document.querySelector(".menu-nav .lista");
const btn = document.getElementById("hamburguer");

if (menu && btn) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
    
}


