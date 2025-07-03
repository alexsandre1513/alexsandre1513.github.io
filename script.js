
const frases = [
  "Como essas flores… você enfeita minha vida, Pacoquinha.",
  "Você é o meu sorriso preferido.",
  "É com você que tudo faz sentido.",
  "Você é o motivo de todos os meus sonhos.",
  "Se eu pudesse te dar uma coisa na vida… te daria a capacidade de se ver pelos meus olhos.",
  "Só assim você entenderia o quanto é amada.",
];
let idx = 0;
const el = document.getElementById("text");

function digita(text, cb) {
  el.textContent = "";
  let i=0;
  const iv = setInterval(() => {
    el.textContent += text[i++];
    if(i === text.length) { clearInterval(iv); setTimeout(cb, 1500); }
  }, 100);
}

function proxima() {
  if(idx < frases.length) {
    digita(frases[idx++], proxima);
  }
}

window.onload = () => {
  animaFlores(20, "🌷");
  animaFlores(30, "❤️");
  proxima();
};

document.getElementById("replay").onclick = () => {
  const m = document.getElementById("musica");
  m.currentTime = 0;
  m.play();
};

document.getElementById("surpresa").onclick = () => {
  alert("Promete ser minha pra sempre, Pacoquinha? 💞");
};

function animaFlores(qty, icon) {
  const ov = document.getElementById("overlay");
  for(let i=0;i<qty;i++){
    const s = document.createElement("div");
    s.className = icon==="🌷"?"tulipa":"coracao";
    s.textContent = icon;
    s.style.left = Math.random()*100+"%";
    s.style.animationDuration = (5+Math.random()*5)+"s";
    s.style.fontSize = (20+Math.random()*30)+"px";
    ov.appendChild(s);
  }
}
