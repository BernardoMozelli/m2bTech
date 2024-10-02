<?php

// Caminho para o arquivo Python
$pythonScript = 'mail.py';

// Executa o script Python
$output = [];
$return_var = 0;

exec("python3 $pythonScript", $output, $return_var);

// Exibe a saída do script Python
foreach ($output as $line) {
    echo $line . "<br>";
}

// Verifica se o script foi executado com sucesso
if ($return_var === 0) {
    echo 'O script Python foi executado com sucesso.';
} else {
    echo 'Ocorreu um erro ao executar o script Python.';
}

?>