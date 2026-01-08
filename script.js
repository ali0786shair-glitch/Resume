let menu = document.querySelector(".menu-btn");
let nav = document.querySelector(".nav-links");

menu.onclick = () => {
  nav.classList.toggle("active");
}

/* Scroll effect */
window.addEventListener("scroll",()=>{
  let navbar = document.querySelector(".navbar");
  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.8)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.05)";
  }
});
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200; // speed of counting

    if(count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
document.querySelectorAll(".vip-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
        alert("VIP Access Activated 🚀\nRomeo Graphics will contact you soon!");
    });
});