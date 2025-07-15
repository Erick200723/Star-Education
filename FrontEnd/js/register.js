document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('forms_control');
    const senha = document.getElementById('password');
    const confirmarSenha = document.getElementById('confirm_password');
    const email = document.getElementById('email');
    const nome = document.getElementById('nome');
    const sobrenome = document.getElementById('Sobrenome');
    const terms = document.getElementById('terms');

    function validarFormulario(event) {
        event.preventDefault();
        let valido = true;

        // Resetar mensagens
        document.getElementById("status_message").innerHTML = '';

        if (!nome.value.trim()) {
            mostrarErro('Por favor, preencha o campo Nome');
            nome.focus();
            valido = false;
            return;
        }

        if (!sobrenome.value.trim()) {
            mostrarErro('Por favor, preencha o campo Sobrenome');
            sobrenome.focus();
            valido = false;
            return;
        }

        if (!email.value.trim()) {
            mostrarErro('Por favor, preencha o campo Email');
            email.focus();
            valido = false;
            return;
        }

        if (!senha.value) {
            mostrarErro('Por favor, crie uma senha');
            senha.focus();
            valido = false;
            return;
        }

        if (!confirmarSenha.value) {
            mostrarErro('Por favor, confirme sua senha');
            confirmarSenha.focus();
            valido = false;
            return;
        }

        if (!terms.checked) {
            mostrarErro('Você deve aceitar os termos de serviço');
            terms.focus();
            valido = false;
            return;
        }

        if (senha.value !== confirmarSenha.value) {
            mostrarErro('As senhas não coincidem. Por favor, tente novamente.');
            senha.value = '';
            confirmarSenha.value = '';
            senha.focus();
            valido = false;
            return;
        }
        if (valido) {
            enviarFormulario();
        }
    }

    function enviarFormulario() {
        const formData = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            senha: senha.value,
            nivel: document.querySelector('input[name="nivel"]:checked').value
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        mostrarSucesso('Cadastro realizado com sucesso! Redirecionando...');

        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
    }

    function mostrarErro(mensagem) {
        document.getElementById("status_message").innerHTML = `
            <div class="alert alert-danger" role="alert">
               ❌ ${mensagem}
            </div>`;
    }

    function mostrarSucesso(mensagem) {
        document.getElementById("status_message").innerHTML = `
            <div class="alert alert-success" role="alert">
               ✅ ${mensagem}
            </div>`;
    }

    form.addEventListener('submit', validarFormulario);
});