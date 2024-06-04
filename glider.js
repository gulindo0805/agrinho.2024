// Função para iniciar o carrossel
function iniciarCarrossel(carrosselId) {
    new Glider(document.querySelector(`#${carrosselId}`), {
        slidesToShow: 1,
        dots: '.dots',
        draggable: true,
        scrollLock: true,
        rewind: true,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: '.dots',
                    arrows: {
                        prev: '.glider-prev',
                        next: '.glider-next'
                    }
                }
            }
        ]
    });
}

// Iniciar os carrosséis quando a página carregar
window.addEventListener('load', function() {
    iniciarCarrossel('carrosselCabecalho');
    iniciarCarrossel('carrosselCampo');
    iniciarCarrossel('carrosselCidade');
});
