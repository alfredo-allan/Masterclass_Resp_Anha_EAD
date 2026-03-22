📋 BRIEFING TÉCNICO - PADRÃO DO PROJETO
🎨 CDNs e Dependências
html

<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />

<!-- Font Awesome 6 (Ícones) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

<!-- Anime.js (Animações) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

🎨 Arquivos CSS do Projeto
html

<!-- CSS Custom do Projeto -->
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" href="css/header.css" />

📦 Estrutura Base da Página
html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TÍTULO DA PÁGINA</title>

    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Font Awesome 6 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Anime.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/header.css">
</head>
<body>
    <!-- Header Fixo com Navegação -->
    <header class="header fixed-top">
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <i class="fas fa-ICONE me-2"></i>
                    <span class="brand-text">NOME DO PROJETO</span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <!-- Links de navegação -->
                        <li class="nav-item">
                            <a class="nav-link" href="#secao1">
                                <i class="fas fa-ICONE me-1"></i>
                                <span>Seção 1</span>
                            </a>
                        </li>
                        <!-- Adicione mais links conforme necessário -->
                    </ul>
                </div>
            </div>

            <!-- Barra de Progresso -->
            <div class="progress-container">
                <div class="progress-bar-custom"></div>
                <div class="progress-glow"></div>
            </div>
        </nav>
    </header>

    <main class="main-content">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="container">
                <div class="row align-items-center min-vh-100">
                    <div class="col-lg-8 mx-auto text-center">
                        <h1 class="display-3 fw-bold mb-4">
                            <span class="gradient-text">TÍTULO PRINCIPAL:</span> SUBTÍTULO
                        </h1>
                        <p class="lead text-gray mb-5">DESCRIÇÃO DO PROJETO</p>
                        <div class="hero-buttons">
                            <a href="#secao1" class="btn btn-primary btn-lg me-3">
                                <i class="fas fa-rocket me-2"></i>Botão Principal
                            </a>
                            <a href="#secao2" class="btn btn-outline-light btn-lg">
                                <i class="fas fa-code-compare me-2"></i>Botão Secundário
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Conteúdo principal -->

    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="mb-0">© 2024 NOME DO PROJETO</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <span>🧙🏼Desenvolvido por SEU NOME</span>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
    <script src="js/header.js"></script>
</body>
</html>

🎨 Componentes e Classes Padrão
1. Hero Section (Introdução)
html

<section class="hero-section">
    <div class="container">
        <div class="row align-items-center min-vh-100">
            <div class="col-lg-8 mx-auto text-center">
                <h1 class="display-3 fw-bold mb-4">
                    <span class="gradient-text">Destaque:</span> Texto
                </h1>
                <p class="lead text-gray mb-5">Descrição principal</p>
                <div class="hero-buttons">
                    <a href="#" class="btn btn-primary btn-lg me-3">
                        <i class="fas fa-ICONE me-2"></i>Ação
                    </a>
                    <a href="#" class="btn btn-outline-light btn-lg">
                        <i class="fas fa-ICONE me-2"></i>Ação Secundária
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

2. Seção Padrão
html

<section id="nome-da-secao" class="section-padding">
    <div class="container">
        <h2 class="section-title">
            <i class="fas fa-ICONE me-3"></i>
            Título da Seção
        </h2>
        <div class="row g-4">
            <!-- Conteúdo em cards -->
        </div>
    </div>
</section>

3. Seção com Fundo Escuro
html

<section id="nome-da-secao" class="section-padding bg-darker">
    <div class="container">
        <h2 class="section-title">
            <i class="fas fa-ICONE me-3"></i>
            Título da Seção
        </h2>
        <div class="row g-4">
            <!-- Conteúdo -->
        </div>
    </div>
</section>

4. Cards Padrão
html

<div class="col-md-6 col-lg-4">
    <div class="card h-100">
        <div class="card-body">
            <i class="fas fa-ICONE fa-3x text-primary mb-3"></i>
            <h3>Título do Card</h3>
            <p class="text-gray">Descrição do conteúdo</p>
            <span class="badge bg-primary">Tag</span>
        </div>
    </div>
</div>

5. Cards com Ícone Destacado (Case)
html

<div class="col-md-6">
    <div class="card h-100 case-card">
        <div class="card-body">
            <div class="case-icon">
                <i class="fas fa-ICONE"></i>
            </div>
            <h3>Título</h3>
            <p class="problem">Problema descrito</p>
            <div class="solution">
                <i class="fas fa-check-circle text-success"></i>
                <strong>Solução:</strong> Descrição da solução
            </div>
        </div>
    </div>
</div>

6. Cards de Estudo (Questões)
html

<div class="card mb-5 study-card">
    <div class="card-body">
        <div class="row">
            <div class="col-md-3 col-lg-2 text-center mb-3 mb-md-0">
                <div class="question-number">01</div>
                <span class="badge bg-primary mt-2">TAG</span>
            </div>
            <div class="col-md-9 col-lg-10">
                <h3 class="mb-3">Título da Questão</h3>
                <div class="question-text mb-4">
                    <i class="fas fa-quote-left me-2 text-primary"></i>
                    Enunciado da questão
                </div>
                <div class="answer-box correct">
                    <i class="fas fa-check-circle me-2"></i>
                    <strong>Resposta Correta: alternativa)</strong>
                </div>
                <div class="explanation-box mt-4">
                    <h4><i class="fas fa-lightbulb me-2"></i>Explicação</h4>
                    <p>Conteúdo explicativo</p>
                    <div class="concept-tip mt-3">
                        <i class="fas fa-graduation-cap"></i>
                        <strong>Dica:</strong> Texto da dica
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

7. Timeline (Roteiro)
html

<div class="timeline">
    <div class="timeline-item">
        <div class="time-badge">Tempo</div>
        <h4>Título</h4>
        <p>Descrição</p>
    </div>
</div>

8. Cards Comparativos
html

<div class="col-md-6">
    <div class="card h-100 comparison-card">
        <div class="card-header text-center">
            <i class="fas fa-ICONE fa-2x mb-2"></i>
            <h3>Título</h3>
        </div>
        <div class="card-body">
            <ul class="feature-list">
                <li><i class="fas fa-check-circle text-success"></i> Característica 1</li>
                <li><i class="fas fa-check-circle text-success"></i> Característica 2</li>
            </ul>
            <div class="example-box">
                <!-- Exemplo visual -->
            </div>
        </div>
    </div>
</div>

9. FAQ Cards
html

<div class="col-md-6">
    <div class="faq-card">
        <h4><i class="fas fa-ICONE text-primary me-2"></i>Pergunta</h4>
        <p>Resposta da pergunta</p>
    </div>
</div>

🎨 Cores e Variáveis CSS
css

/* Cores principais do tema */
--accent-primary: #6c5ce7   /* Roxo principal */
--accent-secondary: #a29bfe  /* Roxo claro */
--bg-primary: #0f0f0f        /* Fundo principal */
--bg-secondary: #1a1a1a      /* Fundo secundário */
--bg-darker: #0a0a0a         /* Fundo mais escuro */
--text-primary: #ffffff      /* Texto principal */
--text-secondary: #e0e0e0    /* Texto secundário */
--text-gray: #a0a0a0         /* Texto cinza */
--border-color: #2a2a2a      /* Cor das bordas */

🎨 Classes Utilitárias
Classe	Uso
.gradient-text	Texto com gradiente roxo
.text-gray	Texto na cor cinza
.section-padding	Padding padrão das seções (100px)
.bg-darker	Fundo mais escuro
.section-title	Estilo de título de seção
.card	Card padrão com hover
.case-card	Card para casos de uso
.study-card	Card para material de estudo
.faq-card	Card para perguntas frequentes
.timeline	Container de linha do tempo
.concept-tip	Dica/conceito destacado
.btn-primary	Botão primário gradiente
.btn-outline-light	Botão outline claro
🎨 Ícones Comuns por Categoria
Tecnologia

    <i class="fas fa-code"></i> - Código

    <i class="fab fa-android"></i> - Android

    <i class="fab fa-apple"></i> - Apple/iOS

    <i class="fab fa-java"></i> - Java

    <i class="fab fa-js"></i> - JavaScript

    <i class="fab fa-flutter"></i> - Flutter

    <i class="fab fa-react"></i> - React

    <i class="fab fa-css3-alt"></i> - CSS3

Conceitos

    <i class="fas fa-brain"></i> - Conceito/Estudo

    <i class="fas fa-lightbulb"></i> - Ideia/Dica

    <i class="fas fa-graduation-cap"></i> - Aprendizado

    <i class="fas fa-question-circle"></i> - Pergunta

    <i class="fas fa-chart-line"></i> - Evolução

    <i class="fas fa-code-branch"></i> - Comparativo

Ações

    <i class="fas fa-rocket"></i> - Iniciar/Começar

    <i class="fas fa-briefcase"></i> - Casos de Uso

    <i class="fas fa-road"></i> - Roteiro

    <i class="fas fa-history"></i> - Histórico

    <i class="fas fa-mobile-alt"></i> - Mobile

📋 Checklist para Nova Página

    Incluir todas as CDNs (Bootstrap, Font Awesome, Anime.js)

    Linkar css/style.css e css/header.css

    Linkar js/script.js e js/header.js

    Usar a estrutura do header com navbar, brand-text, progress-container

    Manter a classe .hero-section com gradiente

    Usar .section-title com ícone

    Cards com .card e .card-body

    Seções alternadas com .bg-darker

    Footer com a mesma estrutura

    IDs nas seções para navegação suave

    Ícones do Font Awesome 6
