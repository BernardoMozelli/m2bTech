<?php
//Autor: Bernardo Mozelli de Medeiros
//M2b Tech
//Todos os direitos reservados.
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <title>M2b Tech</title>
    <link rel="icon" type="image/png" href="./images/logo_icone.ico" />

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

    <!-- font awesome cdn link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>

    <header>
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#quem-somos">Quem somos</a>
            <a href="#solucoes">Soluções</a>
            <a href="#contato">Contato</a>
        </nav>
    </header>

    <section class="home" id="home">

        <div class="img-titulo">
            <img src="./images/logomarca-bgDark.png" alt="">
            <br>
        </div>

        <div class="anima-text">
            <h2>Aqui, sua visão se torna realidade!!!</h2>
        </div>
        <br><br><br><br>

        <div class="typewriter">
            <h3 id="typewriter-text"></h3>
            <br><br><br>
        </div>

        <div class="texto-home">
            <h4>Clique no botão abaixo e confira as nossas soluções.</h4>
            <br>
            <a href="#solucoes" class="btn">Vamos lá</a>
        </div>

        <div class="swiper-container image-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="./images/shot-01.jpg" alt=""></div>
                <div class="swiper-slide"><img src="./images/shot-02.jpg" alt=""></div>
                <div class="swiper-slide"><img src="./images/shot-03.jpg" alt=""></div>
                <div class="swiper-slide"><img src="./images/shot-04.jpg" alt=""></div>
                <div class="swiper-slide"><img src="./images/shot-05.jpg" alt=""></div>
            </div>
        </div>
    </section>

    <section class="quem-somos" id="quem-somos">
        <h1 class="heading">Quem Somos</h1>

        <div class="row">
            <div id="particle-canvas"></div>

            <div class="content">
                <div class="texto-quemsomos">
                    <h3>Um pouco sobre nós</h3>
                    <p>Somos uma empresa especializada em transformar ideias em soluções digitais completas. Com uma equipe dedicada e talentosa, oferecemos uma ampla gama de serviços que vão desde o desenvolvimento de softwares sob medida até a elaboração de materiais para a divulgação do seu produto ou serviço, com design criativo e moderno, marketing digital estratégico e serviço de hospedagem para todos os tamanhos e necessidades.</p>
                    <p>Nosso compromisso é entregar resultados que superem as expectativas dos nossos clientes, combinando tecnologia de ponta com inovação e criatividade.</p>
                    <p>Seja para construir um site, desenvolver um aplicativo, criar uma identidade visual impactante ou otimizar a presença digital da sua marca, estamos prontos para ajudar você a alcançar seus objetivos.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="features" id="solucoes">
        <h1 class="heading">O que oferecemos</h1>

        <div class="box-container">
            <!-- Outras seções aqui -->
        </div>
    </section>

    <section class="contact" id="contato">
        <h1 class="heading">Fale conosco</h1>

        <form action="" method="POST">
            <div class="inputBox" id="nome">
                <input type="text" name="nome" required>
                <label>Nome</label>
            </div>
            <div class="inputBox" id="email">
                <input type="email" name="email" required>
                <label>E-mail</label>
            </div>
            <div class="inputBox" id="telefone">
                <input type="number" name="telefone" required>
                <label>Telefone</label>
            </div>
            <div class="inputBox" id="mensagem">
                <textarea name="mensagem" cols="30" rows="10" required></textarea>
                <label>Mensagem</label>
            </div>
            <input type="submit" class="btn" value="Enviar mensagem">
        </form>
    </section>

    <section class="footer">
        <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-instagram"></a>
            <br>
        </div>
        <br>
        <h2 class="credit">Desenvolvido por M2b Tecnologia</h2>
        <br>
        <h2 class="credit">Todos os direitos reservados</h2>
        <br>
        <h3 class="credit">Copyright 2024</h3>
    </section>

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="./js/script.js"></script>
    <script src="./js/efect-text.js"></script>
    <script src="./js/particle.js"></script>
</body>

</html>
