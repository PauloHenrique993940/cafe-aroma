function mostrarCategoria(id) {
// Oculta todas as categorias
    document.querySelectorAll('.categoria-conteudo').forEach(div => {
        div.style.display = 'none';
});

// Remove destaque dos botões
document.querySelectorAll('.botoes-categorias button').forEach(btn => {
    btn.classList.remove('ativo');
});

// Mostra categoria clicada e ativa o botão
document.getElementById(id).style.display = 'block';
const index = ['cafes', 'geladas', 'salgados', 'doces'].indexOf(id);
document.querySelectorAll('.botoes-categorias button')[index].classList.add('ativo');
