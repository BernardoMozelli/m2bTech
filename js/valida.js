document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    var nameField = document.getElementById("nome").value;
    var phoneField = document.getElementById("telefone").value;
    var emailField = document.getElementById("email").value;
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