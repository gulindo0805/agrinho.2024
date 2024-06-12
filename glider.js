// Função para iniciar o carrossel do cabeçalho
function iniciarCarrosselCabecalho() {
    new Glider(document.querySelector('.cabecalho-carrossel'), {
        slidesToShow: 1,
        dots: '.cabecalho-dots',
        draggable: true,
        scrollLock: true,
        rewind: true,
        arrows: {
            prev: '.cabecalho-glider-prev',
            next: '.cabecalho-glider-next'
        },
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: '.cabecalho-dots',
                    arrows: {
                        prev: '.cabecalho-glider-prev',
                        next: '.cabecalho-glider-next'
                    }
                }
            }
        ]
    });
}

// Iniciar o carrossel do cabeçalho
window.addEventListener('load', function() {
    iniciarCarrosselCabecalho();
});
// Script para fazer o carrossel trocar de imagem a cada 5 segundos
const carrosselItems = document.querySelectorAll('.carrossel-item');
let index = 0;

setInterval(() => {
    carrosselItems[index].style.display = 'none';
    index = (index + 1) % carrosselItems.length;
    carrosselItems[index].style.display = 'block';
}, 5000);
