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
  { completo: 'cactus', mascara: 'cactu-' },
  { completo: 'sociedad', mascara: 'so-iedad' },
  { completo: 'sociable', mascara: 'so-iable' },
  { completo: 'socio', mascara: 'so-io' },
  { completo: 'sol', mascara: '-ol' },
  { completo: 'solar', mascara: '-olar' },
  { completo: 'solitario', mascara: '-olitario' },
  { completo: 'sabiduría', mascara: '-abiduría' },
  { completo: 'sabio', mascara: '-abio' },
  { completo: 'sincero', mascara: '-incero' },
  { completo: 'sincronizar', mascara: '-incronizar' },
  { completo: 'súper', mascara: '-úper' },
  { completo: 'superficie', mascara: '-uperficie' },
  { completo: 'superior', mascara: '-uperior' },
  { completo: 'supermercado', mascara: '-upermercado' },
  { completo: 'superstición', mascara: '-uperstición' },
  { completo: 'sentido', mascara: '-entido' },
  { completo: 'sentimiento', mascara: '-entimiento' },
  { completo: 'sentir', mascara: '-entir' },
  { completo: 'sensación', mascara: '-ensación' },
  { completo: 'sensato', mascara: '-ensato' },
  { completo: 'sensibilidad', mascara: 'sen-ibilidad' },
  { completo: 'seguridad', mascara: '-eguridad' },
  { completo: 'seguro', mascara: '-eguro' },
  { completo: 'seguidor', mascara: '-eguidor' },
  { completo: 'segundo', mascara: '-egundo' },
  { completo: 'seguir', mascara: '-eguir' },
  { completo: 'semana', mascara: '-emana' },
  { completo: 'sembrar', mascara: '-embrar' },
  { completo: 'semilla', mascara: '-emilla' },
  { completo: 'semestre', mascara: '-emestre' },
  { completo: 'semifinal', mascara: '-emifinal' },
  { completo: 'sorpresa', mascara: '-orpresa' },
  { completo: 'sorprendido', mascara: '-orprendido' },
  { completo: 'sorprender', mascara: '-orprender' },
  { completo: 'sorprendente', mascara: '-orprendente' },
  { completo: 'sistema', mascara: '-istema' },
  { completo: 'sublime', mascara: '-ublime' },
  { completo: 'submarino', mascara: '-ubmarino' },
  { completo: 'zanja', mascara: '-anja' },
  { completo: 'zoológico', mascara: '-oológico' },
  { completo: 'zurdo', mascara: '-urdo' },
  { completo: 'acelerar', mascara: 'a-elerar' },
  { completo: 'aceleración', mascara: 'a-eleración' },
  { completo: 'acelerado', mascara: 'a-elerado' },
  { completo: 'acelerador', mascara: 'a-elerador' },
  { completo: 'acento', mascara: 'a-ento' },
  { completo: 'adopción', mascara: 'adop-ión' },
  { completo: 'agencia', mascara: 'agen-ia' },
  { completo: 'alucinante', mascara: 'alu-inante' },
  { completo: 'amnesia', mascara: 'amne-ia' },

];

let palabraActual;
let palabraEnmascarada;
let letraACompletar;
let aciertos = 0;
const aciertosMaximos = 20;
const pikachu = document.querySelector('.pikachuImg');

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
      document.querySelectorAll('.letra-vacia').forEach((letraVacia) => {
        letraVacia.classList.add('correcta');
        document.querySelectorAll('.letra').forEach((letra) => {
          if (letra.innerHTML == letraACompletar) {
            pikachu.src = "https://i.pinimg.com/originals/17/28/b8/1728b808f09c23a4b7501f4e5da22c97.gif"
            setTimeout(() => {
              pikachu.src = ""
              letra.style.backgroundColor = 'white';
              reiniciarJuego();
            }, 1500);
          }
        })
      });
    } else {
      aciertos > 0 ? aciertos-- : aciertos = 0;
      document.getElementById('aciertos').textContent = `Aciertos: ${aciertos}`;
      document.querySelectorAll('.letra-vacia').forEach((letraVacia) => {
        letraVacia.classList.add('incorrecta');
        document.querySelectorAll('.letra').forEach((letra) => {
          if (letra.innerHTML == letraACompletar) {
            pikachu.src = "https://i.pinimg.com/originals/04/5c/dd/045cdda420dc87a78730bbf5ec306d06.gif"
            letra.style.backgroundColor = '#37c022';
            setTimeout(() => {
              pikachu.src = ""
              letra.style.backgroundColor = 'white';
            }, 2000);
          }
        })
      });
      setTimeout(() => {
        document.querySelectorAll('.letra-vacia').forEach((letraVacia) => {
          letraVacia.classList.remove('incorrecta');
        });
        reiniciarJuego();
      }, 2000);
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
