$(document).ready(function() {
    // Toggle do menu mobile
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-xmark');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    function updateActiveSection() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        // Sombra do header
        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        const windowBottom = $(window).scrollTop() + $(window).height();
        const docHeight = $(document).height();

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            // Se scroll estiver dentro da seção
            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }

            // Se chegamos ao final da página, ativa a última seção
            if (windowBottom >= docHeight) {
                activeSectionIndex = sections.length - 1;
                return false;
            }
        });

        // Atualiza nav items
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    }

    // Atualiza ao rolar
    $(window).on('scroll', updateActiveSection);

    // Atualiza ao carregar a página
    updateActiveSection();

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        durantion: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        durantion: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('#testimonials_chef', {
        origin: 'left',
        durantion: 1000,
        distance: '20%'
    })

    
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        durantion: 1000,
        distance: '20%'
    })
});