const goUpBtn = document.querySelector(".go-up");

window.addEventListener("scroll", () => 
{
    goUpBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

function scrollToTop() 
{
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// script for year in footer
  document.getElementById("year").textContent = new Date().getFullYear();