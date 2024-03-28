const logo__titulo = document.createElement("H1");
logo__titulo.className = 'logo__titulo';

const logo__titulo_span = document.createElement("SPAN");
logo__titulo_span.className = "logo__titulo-span";

const logoContainer = document.querySelector(".logo__contenido");
logoContainer.appendChild(logo__titulo);

//Footer nav
const footer__Version = document.createElement("P");
footer__Version.className = 'footer__Version';

const footerContainer = document.querySelector(".footer-nav-lateral");
footerContainer.appendChild(footer__Version);

function cambiarTextoSegunTamañoPantalla() {
    const isMobile = window.innerWidth < 768;
    logo__titulo.innerText = isMobile ? 'I' : 'Intra';
    logo__titulo_span.innerText = isMobile ? 'N' : 'net';
    logo__titulo.appendChild(logo__titulo_span);
    footer__Version.innerText = isMobile ? 'V.01' : 'Versión 1.00.01';
    
}
cambiarTextoSegunTamañoPantalla();
window.addEventListener('resize', cambiarTextoSegunTamañoPantalla);






