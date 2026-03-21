document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar')
  const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)')
  const dropdownLinks = document.querySelectorAll('.dropdown-item')

  // Detectar scroll e adicionar classe
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }
  })

  // Destacar link ativo baseado na seção visível
  function highlightActiveLink() {
    const sections = document.querySelectorAll('section[id]')
    let currentSection = ''

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionBottom = sectionTop + section.offsetHeight

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSection = section.getAttribute('id')
      }
    })

    // Remove active de todos os links
    document.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach((link) => {
      link.classList.remove('active')
      const href = link.getAttribute('href')
      if (href && href === `#${currentSection}`) {
        link.classList.add('active')
      }
    })
  }

  // Scroll suave melhorado para links de âncora
  function setupEnhancedSmoothScroll() {
    const allAnchors = document.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item')

    allAnchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href')

        // Verifica se é âncora interna
        if (href && href.startsWith('#')) {
          e.preventDefault()
          const targetElement = document.querySelector(href)

          if (targetElement) {
            const headerOffset = 80
            const elementPosition = targetElement.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })

            // Fecha o menu mobile se estiver aberto
            const navbarCollapse = document.querySelector('.navbar-collapse')
            if (navbarCollapse.classList.contains('show')) {
              const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse)
              if (bsCollapse) bsCollapse.hide()
            }

            // Atualiza URL sem scroll abrupto
            history.pushState(null, null, href)
          }
        }
        // Se for link externo, deixa o comportamento padrão
      })
    })
  }

  // Progresso de leitura
  function setupReadingProgress() {
    const progressBar = document.querySelector('.reading-progress .progress-bar')
    if (!progressBar) return

    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
      progressBar.style.width = `${scrollPercent}%`
    })
  }

  // Animação do toggler para ícone de fechar
  const toggler = document.querySelector('.navbar-toggler')
  const navbarCollapse = document.querySelector('.navbar-collapse')

  if (toggler && navbarCollapse) {
    navbarCollapse.addEventListener('show.bs.collapse', () => {
      toggler.classList.add('active')
      toggler.innerHTML = '<span class="close-icon">✕</span>'
    })

    navbarCollapse.addEventListener('hide.bs.collapse', () => {
      toggler.classList.remove('active')
      toggler.innerHTML = '<span class="navbar-toggler-icon"></span>'
    })
  }

  // Inicializa funções
  setupEnhancedSmoothScroll()
  setupReadingProgress()

  // Atualiza link ativo no scroll (com throttle para performance)
  let ticking = false
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        highlightActiveLink()
        ticking = false
      })
      ticking = true
    }
  })

  // Executa uma vez para definir o link ativo inicial
  setTimeout(highlightActiveLink, 100)
})
