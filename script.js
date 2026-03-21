// script.js - Configurações do Anime.js e Lógica de Scroll/Foco

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function () {
  // Animações de fade-in escalonado para os cards
  animateCards()

  // Animações de texto
  animateText()

  // Configuração do scroll suave com highlight
  setupSmoothScroll()

  // Observador de interseção para animações ao scroll
  setupScrollObserver()
})

// Função para animar cards com stagger
function animateCards() {
  // Seleciona todos os cards
  const cards = document.querySelectorAll('.card')

  // Animação de entrada com anime.js
  anime({
    targets: cards,
    opacity: [0, 1],
    translateY: [50, 0],
    scale: [0.95, 1],
    duration: 800,
    delay: anime.stagger(100, { start: 200 }),
    easing: 'easeOutElastic(1, .8)'
  })

  // Adiciona efeito hover suave nos cards
  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      anime({
        targets: card,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(108, 92, 231, 0.3)',
        duration: 300,
        easing: 'easeOutQuad'
      })
    })

    card.addEventListener('mouseleave', () => {
      anime({
        targets: card,
        scale: 1,
        boxShadow: 'none',
        duration: 300,
        easing: 'easeOutQuad'
      })
    })
  })
}

// Função para animar textos
function animateText() {
  // Anima títulos das seções
  anime({
    targets: '.section-title',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000,
    delay: 500,
    easing: 'easeOutQuad'
  })

  // Anima items do timeline
  anime({
    targets: '.timeline-item',
    opacity: [0, 1],
    translateX: [-30, 0],
    duration: 800,
    delay: anime.stagger(200),
    easing: 'easeOutQuad'
  })

  // Anima badges
  anime({
    targets: '.badge',
    scale: [0, 1],
    rotate: ['-180deg', '0deg'],
    duration: 600,
    delay: anime.stagger(100, { start: 1000 }),
    easing: 'easeOutElastic(1, .5)'
  })
}

// Função para configurar scroll suave
function setupSmoothScroll() {
  // Seleciona todos os links de navegação
  const navLinks = document.querySelectorAll('.nav-link')

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      // Obtém o valor do href
      const href = this.getAttribute('href')

      // Verifica se é um link externo (não começa com #)
      // Se for link externo, permite o comportamento padrão
      if (!href || href === '#' || href.startsWith('http') || href.startsWith('/') || href.startsWith('.') || !href.startsWith('#')) {
        // Se for link externo ou link para outra página, não previne o comportamento padrão
        // Isso permite a navegação normal para outras páginas
        return
      }

      // Previne o comportamento padrão apenas para âncoras internas
      e.preventDefault()

      // Obtém o ID da seção alvo
      const targetId = href
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        // Calcula a posição considerando o header fixo
        const headerOffset = 80
        const elementPosition = targetSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        // Scroll suave
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        // Aplica highlight na seção alvo
        highlightSection(targetSection)

        // Fecha o menu mobile se estiver aberto
        const navbarCollapse = document.querySelector('.navbar-collapse')
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          bootstrap.Collapse.getInstance(navbarCollapse).hide()
        }
      }
    })
  })
}

// Função para aplicar highlight na seção
function highlightSection(section) {
  // Remove highlight de todas as seções
  document.querySelectorAll('section').forEach((s) => {
    s.style.animation = 'none'
    s.offsetHeight // Força reflow
  })

  // Aplica animação de highlight na seção alvo
  section.style.animation = 'highlight 1.5s ease'

  // Remove a animação após completar
  setTimeout(() => {
    section.style.animation = ''
  }, 1500)
}

// Função para observar elementos e animar ao scroll
function setupScrollObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Anima elementos quando entram na viewport
          const elements = entry.target.querySelectorAll('.card, .faq-card, .timeline-item')

          anime({
            targets: elements,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutQuad'
          })

          // Para de observar após animar
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2,
      rootMargin: '0px'
    }
  )

  // Observa cada seção
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
}

// Adiciona efeito de scroll no header
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header')
  if (window.scrollY > 50) {
    header.style.backgroundColor = 'rgba(15, 15, 15, 0.98)'
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)'
  } else {
    header.style.backgroundColor = 'rgba(15, 15, 15, 0.95)'
    header.style.boxShadow = 'none'
  }
})

// Animações para os exemplos práticos
function animateExamples() {
  const flexExample = document.querySelector('.flex-example')
  const gridExample = document.querySelector('.grid-example')

  if (flexExample) {
    anime({
      targets: '.flex-example div',
      scale: [1, 1.2, 1],
      duration: 2000,
      loop: true,
      delay: anime.stagger(300),
      easing: 'easeInOutQuad'
    })
  }

  if (gridExample) {
    anime({
      targets: '.grid-example div',
      backgroundColor: [
        { value: '#a29bfe', duration: 1000 },
        { value: '#6c5ce7', duration: 1000 }
      ],
      duration: 2000,
      loop: true,
      delay: anime.stagger(200),
      easing: 'easeInOutQuad'
    })
  }
}

// Inicia animações dos exemplos após carregar
window.addEventListener('load', function () {
  animateExamples()

  // Adiciona classe fade-in para elementos que serão observados
  document.querySelectorAll('.card, .faq-card, .timeline-item').forEach((el) => {
    el.classList.add('fade-in')
  })
})

// Função para criar partículas de fundo (opcional - efeito visual)
function createParticles() {
  const hero = document.querySelector('.hero-section')
  if (!hero) return

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(108, 92, 231, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
        `
    hero.appendChild(particle)

    anime({
      targets: particle,
      translateX: anime.random(-100, 100),
      translateY: anime.random(-100, 100),
      scale: [0, 2, 0],
      opacity: [0.5, 0],
      duration: anime.random(3000, 6000),
      loop: true,
      delay: anime.random(0, 2000),
      easing: 'easeInOutQuad'
    })
  }
}

// Descomente a linha abaixo se quiser ativar as partículas
// createParticles();
