const sidebar = document.getElementById("minhaSidebar");
const toggleButton = document.getElementById("toggleButton");   
const conteudo = document.getElementById("conteudoPrincipal");

function toggleSidebar() {
    sidebar.classList.toggle('active');
    conteudo.classList.toggle('shifted');

    if (sidebar.classList.contains('active')) {
        toggleButton.classList.remove('bi-person-fill');
        toggleButton.classList.add('bi-x-circle-fill');
    } else {
        toggleButton.classList.remove('bi-x-circle-fill');
        toggleButton.classList.add('bi-person-fill');
    }
}

document.querySelector('.novo-comentario').addEventListener('submit', function(e) {
    e.preventDefault();
    const texto = this.querySelector('textarea').value;
    if (texto.trim()) {
        const novoComentario = document.createElement('div');
        novoComentario.className = 'comentario mb-2 p-2 bg-white rounded';
        novoComentario.innerHTML = `<strong>Usuário:</strong> ${texto}`;
        document.querySelector('.comentarios-list').appendChild(novoComentario);
        this.querySelector('textarea').value = '';
    }
});