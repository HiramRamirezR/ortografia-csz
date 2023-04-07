const palabras = [
  { completo: 'casa', mascara: 'ca-a' },
  { completo: 'pescado', mascara: 'pe-cado' },
  { completo: 'zapato', mascara: '-apato' },
  { completo: 'silla', mascara: '-illa' },
  { completo: 'cazuela', mascara: 'ca-uela' },
  { completo: 'zorro', mascara: '-orro' },
  { completo: 'mesa', mascara: 'me-a' },
  { completo: 'arroz', mascara: 'arro-' },
  { completo: 'aceituna', mascara: 'a-eituna' },
  { completo: 'corazón', mascara: 'cora-ón' },
  { completo: 'pez', mascara: 'pe-' },
  { completo: 'cocina', mascara: 'co-ina' },
  { completo: 'zapatilla', mascara: '-apatilla' },
  { completo: 'sabor', mascara: '-abor' },
  { completo: 'zona', mascara: '-ona' },
  { completo: 'sábado', mascara: '-ábado' },
  { completo: 'crecer', mascara: 'cre-er' },
  { completo: 'cocer', mascara: 'co-er' },
  { completo: 'zumbar', mascara: '-umbar' },
  { completo: 'saltar', mascara: '-altar' },
  { completo: 'salud', mascara: '-alud' },
  { completo: 'zafiro', mascara: '-afiro' },
  { completo: 'sabana', mascara: '-abana' },
  { completo: 'cebra', mascara: '-ebra' },
  { completo: 'cereza', mascara: '-ereza' },
  { completo: 'cerebro', mascara: '-erebro' },
  { completo: 'zanahoria', mascara: '-anahoria' },
  { completo: 'zancudo', mascara: '-ancudo' },
  { completo: 'zancada', mascara: '-ancada' },
  { completo: 'cielo', mascara: '-ielo' },
  { completo: 'cien', mascara: '-ien' },
  { completo: 'serpiente', mascara: '-erpiente' },
  { completo: 'catus', mascara: 'catu-' },
  { completo: 'sociedad', mascara: 'so-iedad' },
];

let palabraActual;
let palabraEnmascarada;
let letraACompletar;
let aciertos = 0;
const aciertosMaximos = 20;

function seleccionarPalabra() {
  const index = Math.floor(Math.random() * palabras.length);
  palabraActual = palabras[index].completo;
  palabraEnmascarada = palabras[index].mascara;
}

function mostrarPalabra() {
  const palabraContainer = document.getElementById('palabra');
  let contenido = '';
  for (let i = 0; i < palabraEnmascarada.length; i++) {
    const letra = palabraEnmascarada[i];
    if (letra === '-') {
      contenido += '<span class="letra-vacia"></span>';
      letraACompletar = palabraActual[i].toUpperCase();
    } else {
      contenido += letra;
    }
  }
  palabraContainer.innerHTML = contenido;
}


document.querySelectorAll('.letra').forEach((letra) => {
  letra.addEventListener('click', () => {
    if (letra.textContent === letraACompletar) {
      aciertos++;
      document.getElementById('aciertos').textContent = `Aciertos: ${aciertos}`;
      reiniciarJuego();
    } else {
      document.querySelectorAll('.letra-vacia').forEach((letraVacia) => {
        letraVacia.textContent = palabraActual[letraVacia.dataset.indice];
        letraVacia.classList.add('incorrecta');
      });
      setTimeout(() => {
        document.querySelectorAll('.letra-vacia').forEach((letraVacia) => {
          letraVacia.classList.remove('incorrecta');
        });
        reiniciarJuego();
      }, 1500);
    }
  });
});

function reiniciarJuego() {
  if (aciertos >= aciertosMaximos) {
    mostrarFelicitacion();
  } else {
    seleccionarPalabra();
    mostrarPalabra();
  }
}

function mostrarFelicitacion() {
  const contenedorJuego = document.getElementById('juego');
  contenedorJuego.innerHTML = `
    <div class="mensaje-felicitacion">
      <h2>¡Felicidades, ganaste!</h2>
      <button class="boton-reiniciar" onclick="location.reload()">Jugar de nuevo</button>
    </div>
  `;
}

seleccionarPalabra();
mostrarPalabra();
