function changeBackgroundColor() {
     const body2 = document.querySelector(".body2");
     const form = document.querySelector(".form");
     const r = Math.floor(Math.random() * 256);
     const g = Math.floor(Math.random() * 256);
     const b = Math.floor(Math.random() * 256);
     // form.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
     form.style.boxShadow = `0px 0px 200px 20px rgb(${r}, ${g}, ${b})`;
}

setInterval(changeBackgroundColor, 1000);
