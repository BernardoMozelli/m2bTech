//Valida todos os campos do formulario e exibe mensagens personalizadas utilizando o sweetalert
function validaEmptFields() {
  document.getElementById('contato-formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    var nameField = document.getElementById("nome").value;
    var emailField = document.getElementById("email").value;
    var phoneField = document.getElementById("telefone").value;
    var mensagem = document.getElementById("mensagem").value;

    var nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Permite letras e espaços
    var phoneRegex = /^[0-9]+$/; // Permite apenas números (ajuste conforme necessário)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para e-mail

    if (!nameRegex.test(nameField)) {
      Swal.fire({
        title: 'Erro!',
        text: 'Por favor, insira apenas letras no campo Nome.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else if (!phoneRegex.test(phoneField)) {
      Swal.fire({
        title: 'Erro!',
        text: 'Por favor, insira apenas números no campo Telefone.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else if (!emailRegex.test(emailField)) {
      Swal.fire({
        title: 'Erro!',
        text: 'Por favor, insira um e-mail válido.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Formulário enviado com sucesso!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        document.getElementById('myForm').submit(); // Submete o formulário se válido
      });
    }
  });

}

//-------------------------------------------------------------------------------------------------------------

// Formata o campo telefone
function formatarTelefone() {
  const telefoneInput = document.getElementById('telefone');

  telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value;

    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Aplica a formatação
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{5})$/, '($1) $2');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})/, '($1)');
    }

    // Atualiza o valor do input
    e.target.value = value;
  });
}

// Chama a função quando o DOM está pronto
document.addEventListener('DOMContentLoaded', formatarTelefone);
//-------------------------------------------------------------------------------------------------------------

//Valida o campo e-mail
function validaEmail() {
  document.getElementById('emailForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário até a validação
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    const emailValue = emailInput.value;

    // Expressão regular para verificar formato do e-mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Verifica se o e-mail é válido
    if (!emailPattern.test(emailValue)) {
      emailError.style.display = 'inline';
    } else {
      emailError.style.display = 'none';

      // Exibe mensagem de sucesso usando SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'E-mail enviado com sucesso!',
        text: 'Seu e-mail foi validado e enviado.',
      });

      // Aqui você pode prosseguir com o envio do formulário, se necessário
      // this.submit(); // Descomente para enviar o formulário
    }
  });
}

// Chame a função validaEmail ao carregar a página
window.onload = validaEmail;


