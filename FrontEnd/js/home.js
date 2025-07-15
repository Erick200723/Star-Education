const sidebar = document.getElementById("minhaSidebar");
const toggleButton = document.getElementById("toggleButton");   
const conteudo = document.getElementById("conteudoPrincipal");

function toggleSidebar() {
    sidebar.classList.toggle('active');
    conteudo.classList.toggle('shifted');

    if (sidebar.classList.contains('active')) {
        toggleButton.classList.remove('bi-person-fill');
        toggleButton.classList.add('bi-x-circle-fill');
    }else{
        toggleButton.classList.remove('bi-x-circle-fill');
        toggleButton.classList.add('bi-person-fill');
    }
}