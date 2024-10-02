import sys
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Obtendo os argumentos passados do PHP
nome = sys.argv[1]
email = sys.argv[2]
telefone = sys.argv[3]
mensagem = sys.argv[4]

# Configurações do servidor SMTP
smtp_server = 'smtp.gmail.com'
smtp_port = 465
username = 'bernardommedeiros13@gmail.com'
password = 'uzio vmza cfey icwl'

# Criação da mensagem
msg = MIMEMultipart()
msg['From'] = username
msg['To'] = 'contato@m2btecnologia.com.br'
msg['Subject'] = f'Cliente {nome}'

# Corpo do e-mail em HTML
html_body = f'<h1>Novo Cliente {nome}</h1><p> e-mail: {email:}</p> telefone: {telefone:} <p>{mensagem}</p>'
msg.attach(MIMEText(html_body, 'html'))

# Corpo do e-mail em texto simples (opcional)
text_body = f'Cliente: {nome}\nEmail: {email}\nTelefone: {telefone}\nMensagem: {mensagem}'
msg.attach(MIMEText(text_body, 'plain'))

try:
    # Conexão com o servidor SMTP
    with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
        server.login(username, password)  # Autenticação
        server.send_message(msg)  # Envio do e-mail
        print('E-mail enviado com sucesso')
except Exception as e:
    print(f'E-mail não pôde ser enviado. Erro: {e}')
