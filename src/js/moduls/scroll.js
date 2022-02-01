const body = document.querySelector('html'),
    skills = document.querySelectorAll('.skills'),
    aboutTitle = document.querySelectorAll('.about__title'),
    aboutText = document.querySelectorAll('.about__text .text'),
    skillsTitle = document.querySelectorAll('.skills__title'),
    skillsText = document.querySelectorAll('.skills__text'),
    skillsItem = document.querySelectorAll('.skills__item'),
    portTitle = document.querySelectorAll('.portfolio__title'),
    portImg = document.querySelectorAll('.portfolio__item img'),
    portText = document.querySelectorAll('.portfolio__item a');
    

window.addEventListener('scroll', () => {
    watchEleme(aboutTitle);
    watchEleme(aboutText);
    watchEleme(skillsTitle);
    watchEleme(skillsText);
    watchEleme(skillsItem);
    watchEleme(portTitle);
    watchEleme(portImg);
    watchEleme(portText);
})



function watchEleme(eleme) {
    eleme.forEach(item => {
        item.style = 'opacity:  0; transition: 0.7s;'
        if(body.scrollTop >= item.offsetTop - body.clientHeight + 200 && !(body.scrollTop >= item.offsetTop + item.scrollHeight)) {
            window.removeEventListener('scroll', () => watchEleme(skills))
            item.style = 'transform: translateX(1px); transform: rotateY(0deg);'
            item.style.opacity = 1;
        }
    })
}
