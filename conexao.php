<?php

// Defina as variáveis de conexão com o banco de dados
$servidor = "127.0.0.1";
$user = "m2btec92_m2b";
$pass = "Gb_250317";
$dbname = "m2btec92_m2btech_form";

// Cria a conexão com o banco de dados
$conex = new mysqli($servidor, $user, $pass, $dbname);

// Inclui o arquivo JavaScript para alertas
echo '<script src="./js/msg_alert.js"></script>';

// Verifica a conexão
if ($conex->connect_error) {
    include("index.html");
    echo "<script>
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Ocorreu um erro ao tentar realizar a conexão com o banco: " . $conex->connect_error . "',
        });
    </script>";
    exit(); // Interrompe a execução do script em caso de erro na conexão
}

// Sanitiza as entradas do formulário para evitar SQL Injection
$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_STRING);
$mensagem = filter_input(INPUT_POST, 'mensagem', FILTER_SANITIZE_STRING);

if ($nome && $email && $telefone && $mensagem) {
    // Verifica se o e-mail já existe na base de dados
    $stmt = $conex->prepare("SELECT id FROM formulario WHERE email = ?");
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        // E-mail existe, então atualiza o registro
        $stmt->bind_result($id);
        $stmt->fetch();
        $stmt->close();

        $stmt = $conex->prepare("UPDATE formulario SET nome = ?, telefone = ?, mensagem = ? WHERE email = ?");
        $stmt->bind_param('ssss', $nome, $telefone, $mensagem, $email);

        if ($stmt->execute()) {
            include("index.html");
            echo "<script>
                msg_alertSucess();
            </script>";
        } else {
            include("index.html");
            echo "<script>
                msg_alertError('Erro ao atualizar as informações: " . $stmt->error . "');
            </script>";
        }
    } else {
        // E-mail não existe, então insere um novo registro
        $stmt->close();
        $stmt = $conex->prepare("INSERT INTO formulario (nome, email, telefone, mensagem) VALUES (?, ?, ?, ?)");
        $stmt->bind_param('ssss', $nome, $email, $telefone, $mensagem);

        if ($stmt->execute()) {
            include("index.html");
            echo "<script>
                msg_alertSucess();
            </script>";
        } else {
            include("index.html");
            echo "<script>
                msg_alertError('Erro ao armazenar as informações: " . $stmt->error . "');
            </script>";
        }
    }
    $stmt->close();
} else {
    echo "<script>
        msg_alerErrorvalid();
    </script>";
}

// Fecha a conexão com o banco de dados
$conex->close();

?>
