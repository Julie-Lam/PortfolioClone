// --- Smooth Scroll Fn --- //
$('.bannerText a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault(); 
        
        const hash = this.hash; 
        
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800)
    }
})

// --- Show/Close Hero Menu --- //
const deleteBtn = document.querySelector('#deleteBtn'); 
const heroMenu = document.querySelector('.hero-menu');
const menu = document.querySelector('.menu');



deleteBtn.addEventListener('click', () => {
    heroMenu.classList.toggle('close')
    console.log('clicked close')
    console.log(heroMenu)
})

menu.addEventListener('click', () => {
    heroMenu.classList.toggle('close')
})
