
function msg_alerError() {
    Swal.fire({
        icon: 'error',
        title: 'Erro ao Enviar Formulário',
        Text: 'Ocorreu um erro ao armazenar as informações: " . $stmt->error . "',
        customClass: {
            popup: 'swal-custom',          /* Classe para customizar o tamanho da janela */
            title: 'swal-custom-title',    /* Classe para customizar o tamanho do título */
        }
    });

}

function msg_alertSucess() {
    Swal.fire({
        title: 'Formulário Enviado com Sucesso',
        text: 'Nossa equipe está analisando suas informações e entrará em contato em breve.',
        icon: 'success',
        customClass: {
            popup: 'swal-custom',          /* Classe para customizar o tamanho da janela */
            title: 'swal-custom-title',    /* Classe para customizar o tamanho do título */
        }
    }).then(function () {
        window.location.href = 'index.html';
    });

}

function msg_alerErrorvalid() {
    Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Os dados fornecidos são inválidos.',
        customClass: {
            popup: 'swal-custom',          /* Classe para customizar o tamanho da janela */
            title: 'swal-custom-title',    /* Classe para customizar o tamanho do título */
        }
    });
}