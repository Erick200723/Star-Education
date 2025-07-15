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

// Lógica para expandir as atividades
document.querySelectorAll('.expandir-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const atividade = btn.closest('.atividade');
        const conteudoAtividade = atividade.querySelector('.atividade-conteudo');

        conteudoAtividade.classList.toggle('aberto');
        btn.textContent = conteudoAtividade.classList.contains('aberto') ? '-' : '+';
    });
});

document.getElementById("terms").addEventListener("click", function(){
    const label = document.getElementById("terms-label");
    var checkbox = false;

    if(checkbox){
        label.innerHTML = "Atividade Pendente";
        label.classList.remove("success");
    }else{
        label.innerHTML = "Atividade Concluída";
        label.classList.add("success");
        document.getElementById("terms").disabled = true;
    }
})