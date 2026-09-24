console.log("hi there");
// variable que lee el scroll
let ultimoScrollY = window.scrollY;
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  const scrolActual = window.scrollY;
  if (scrolActual > ultimoScrollY && scrolActual > 80) {
    nav.classList.add("nav-hidden");
  } else {
    nav.classList.remove("nav-hidden");
  }
  ultimoScrollY = scrolActual;
});

// helpers (todo el contenido se inserta con textContent, sin innerHTML)
const el = (tag, cls, texto) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (texto) n.textContent = texto;
  return n;
};
const listaTags = (items) => {
  const ul = el("ul", "tags");
  items.forEach((t) => ul.append(el("li", null, t)));
  return ul;
};

// inicio: tarjetas generadas desde proyectos.js
const contenedor = document.querySelector(".contenedor-proyectos");
if (contenedor) {
  PROYECTOS.forEach((p) => {
    const url = `proyecto.html?id=${encodeURIComponent(p.id)}`;
    const card = el("article", "proyecto");
    const portada = el("a", "galeria");
    portada.href = url;
    const img = el("img", "galeria-principal");
    img.src = p.portada;
    img.alt = p.portadaAlt || p.titulo;
    img.loading = "lazy";
    portada.append(img);
    const info = el("div", "proyecto-info");
    const btn = el("a", "btn btn-proyecto", "Ver proyecto");
    btn.href = url;
    info.append(el("h3", "titulo-proyecto", p.titulo), el("p", "descripcion-proyecto", p.resumen), listaTags(p.stack), btn);
    card.append(portada, info);
    contenedor.append(card);
  });
}

// pagina de proyecto: proyecto.html?id=jamm
const detalle = document.getElementById("detalle");
if (detalle) {
  const id = new URLSearchParams(location.search).get("id");
  const p = PROYECTOS.find((x) => x.id === id);
  const volver = el("a", "volver", "← Volver a proyectos");
  volver.href = "index.html#misproyectos";
  detalle.append(volver);
  if (!p) {
    detalle.append(el("h2", null, "Proyecto no encontrado"));
  } else {
    document.title = `${p.titulo} | Abel Herrera`;
    detalle.append(el("h2", null, p.titulo), el("p", null, p.resumen), listaTags(p.stack));
    [["Mi rol", p.rol], ["El problema", p.problema], ["El proceso", p.proceso], ["El resultado", p.resultado]].forEach(([t, txt]) => {
      if (!txt) return;
      const bloque = el("div", "detalle-bloque");
      bloque.append(el("h3", null, t), el("p", null, txt));
      detalle.append(bloque);
    });
    if (p.galeria && p.galeria.length) {
      const galeria = el("div", "galeria galeria-detalle");
      const principal = el("img", "galeria-principal");
      principal.src = p.galeria[0].src;
      principal.alt = p.galeria[0].alt;
      const minis = el("div", "galeria-miniaturas");
      p.galeria.forEach((g, i) => {
        const b = el("button", i === 0 ? "miniatura activa" : "miniatura");
        b.setAttribute("aria-label", g.alt);
        const mi = el("img");
        mi.src = g.src;
        mi.alt = "";
        b.append(mi);
        b.addEventListener("click", () => {
          principal.src = g.src;
          principal.alt = g.alt;
          minis.querySelectorAll(".miniatura").forEach((x) => x.classList.remove("activa"));
          b.classList.add("activa");
        });
        minis.append(b);
      });
      galeria.append(principal, minis);
      detalle.append(galeria);
    }
    (p.links || []).forEach((l) => {
      const a = el("a", "btn btn-proyecto", l.texto);
      a.href = l.url;
      a.target = "_blank";
      a.rel = "noopener";
      detalle.append(a);
    });
  }
}
