document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('forms_control');
    const senha = document.getElementById('password');
    const email = document.getElementById('email');

    const storedData = JSON.parse(localStorage.getItem('formData'));
    const emailCadastrado = storedData.email || '';
    const senhaCadastrada = storedData.senha || '';


    function validarLogin(event) {
        event.preventDefault(); 
        
        document.getElementById("status_message").innerHTML = '';

        if (!email.value.trim()) {
            mostrarErro('Por favor, preencha o campo Email');
            email.focus();
            return;
        }

        if (!senha.value.trim()) {
            mostrarErro('Por favor, preencha o campo Senha');
            senha.focus();
            return;
        }

        if (email.value !== emailCadastrado || senha.value !== senhaCadastrada) {
            mostrarErro('Email ou senha incorretos. Por favor, tente novamente.');
            senha.value = '';
            senha.focus();
            return;
        }else{
            loginSucesso();
        }
    }

    function loginSucesso() {
        mostrarSucesso('Login realizado com sucesso! Redirecionando...');
        
        setTimeout(() => {
            window.location.href = 'home.html';
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

    form.addEventListener('submit', validarLogin);
});