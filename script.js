const btntema = document.getElementById('btn-tema');

if (btntema) {
    const body = document.body;
    const icone = btntema.querySelector('i');

    btntema.addEventListener('click', () => {
        const modoEscuroAtivo = body.classList.toggle('dark-mode');
        icone.classList.toggle('fa-moon');
        icone.classList.toggle('fa-sun');
        btntema.setAttribute('aria-label', modoEscuroAtivo ? 'Desativar modo escuro' : 'Ativar modo escuro');
    });
}
