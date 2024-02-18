const box = document.querySelectorAll('.box')
const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');

function sliderRight() {
    if (box[0].classList.contains('transform')) {
        box[0].classList.remove('transform')
        box[1].classList.add('transform')
    }
    else if (box[1].classList.contains('transform')) {
        box[1].classList.remove('transform')
        box[2].classList.add('transform')
    }
    else if (box[2].classList.contains('transform')) {
        box[2].classList.remove('transform')
        box[0].classList.add('transform')
    }


}

function sliderLeft() {
    if (box[2].classList.contains('transform')) {
        box[2].classList.remove('transform')
        box[1].classList.add('transform')
    }
    else if (box[1].classList.contains('transform')) {
        box[1].classList.remove('transform')
        box[0].classList.add('transform')
    }
    else if (box[0].classList.contains('transform')) {
        box[0].classList.remove('transform')
        box[2].classList.add('transform')
    }


}

// Change Theme 
var targetRoot = document.querySelector(':root');
const circle = document.querySelector('.circle')
const circle2 = document.querySelector('.circle2')
const circle3 = document.querySelector('#circle3')

function changeDark() {
    targetRoot.style.setProperty('--background', '#4c5257')
    targetRoot.style.setProperty('--bg2', 'rgb(218 218 218)')
    console.log('Raju')
    // Circle Change  

    circle.classList.add('grayscal-brightness')
    circle2.classList.add('grayscal-brightness')
    circle2.classList.add('grayscal-brightness')

}

function changeLight() {
    targetRoot.style.setProperty('--background', '#008bfe')
    targetRoot.style.setProperty('--bg2', 'rgb(248, 253, 253)')

    circle.classList.remove('grayscal-brightness')
    circle2.classList.remove('grayscal-brightness')
    circle2.classList.remove('grayscal-brightness')

}


// Scroll  Trigger

const tl = gsap.timeline() ;
gsap.registerPlugin(ScrollTrigger);

gsap.from("header" , {
    opacity : 0 ,
    duration : 2 ,
    top : -10
})

gsap.from(".circle" , {
    opacity : 0 ,
    duration : 1.5 ,
    delay : 2
})

gsap.from("#man-img" , {
    opacity : 0 ,
    duration : 2 ,
    y : 40
})
gsap.from(".name-col" , {
    opacity : 0 ,
    duration : 2 ,
    x: -40
})


gsap.from(".about" , {
    opacity : 0 ,
    duration : 1.5 ,
    scrollTrigger : {
        trigger: ".about",
    }
})
gsap.from(".heading h1" , {
    opacity : 0 ,
    duration : 1.5 ,
    x : 50 ,
    scrollTrigger : {
        trigger: ".about",
    }
})
gsap.from(".heading h2" , {
    opacity : 0 ,
    duration : 1.5 ,
    x : -50 ,
    scrollTrigger : {
        trigger: ".heading h2",
    }
})

gsap.from(".website-img img" , {
    opacity : 0 ,
    duration : 1.5 ,
    x : -80,
    scrollTrigger : {
        trigger: ".website-img img",
    }
})
gsap.from(".website-img-content" , {
    opacity : 0 ,
    duration : 1.5 ,
    x : 80 ,
    scrollTrigger : {
        trigger: ".website-img-content",
    }
})
gsap.from(".about2-heading h1" , {
    opacity : 0 ,
    duration : 1 ,
    x : 80 ,
    scrollTrigger : {
        trigger: ".about2-heading h1",
    }
})
gsap.from(".about2-heading h2" , {
    opacity : 0 ,
    duration : 1 ,
    y : 20 ,
    scrollTrigger : {
        trigger: ".about2-heading h2",
    }
})
gsap.from(".projects-list:nth-child(3)" , {
    opacity : 0 ,
    duration : 1 ,
    x: 60 ,
    scrollTrigger : {
        trigger: ".projects-list:nth-child(3)",
    }
})
gsap.from(".projects-list:nth-child(2)" , {
    opacity : 0 ,
    duration : 1 ,
    x: -60 ,
    scrollTrigger : {
        trigger: ".projects-list:nth-child(2)",
    }
})
gsap.from(".recent-projects-heading" , {
    opacity : 0 ,
    duration : 1 ,
    y: -60 ,
    scrollTrigger : {
        trigger: ".recent-projects-heading",
    }
})

gsap.from("#contact-container h1" , {
    opacity : 0 ,
    duration : 1 ,
    y : -20,
    scrollTrigger : {
        trigger: "#contact-container h1",
    }
})
gsap.from(".social-img img" , {
    opacity : 0 ,
    duration : 1 ,
    x : -60,
    scrollTrigger : {
        trigger: ".social-img img",
    }
})
gsap.to("#contact-container i" , {
    duration : 1 ,
    y : 10,
    scrollTrigger : {
        trigger: "#contact-container i",
    
    }
})

gsap.from(".icons a:nth-child(1) ", {
    opacity :  0 ,
    duration : 1 ,
    x : 100,
    scrollTrigger : {
        trigger: ".icons  a:nth-child(1)",
    
    }
})
gsap.from(".icons a:nth-child(2) ", {
    opacity :  0 ,
    duration : 1 ,
    x : -100,
    scrollTrigger : {
        trigger: ".icons  a:nth-child(2)",
    
    }
})
gsap.from(".icons a:nth-child(3) ", {
    opacity :  0 ,
    duration : 1 ,
    x : 100,
    scrollTrigger : {
        trigger: ".icons  a:nth-child(3)",
    
    }
})
gsap.from(".icons a:nth-child(4) ", {
    opacity :  0 ,
    duration : 1 ,
    x : -100,
    scrollTrigger : {
        trigger: ".icons  a:nth-child(4)",
    
    }
})

gsap.from(".box:nth-child(1)", {
    opacity :  0 ,
    duration : 1.5 ,
    x : -100,
    scrollTrigger : {
        trigger: ".box:nth-child(1) ",
    
    }
})
gsap.from(".box:nth-child(2)", {
    opacity :  0 ,
    duration : 1 ,
    scrollTrigger : {
        trigger: ".box:nth-child(2) ",
    
    }
})

gsap.from(".box:nth-child(3)", {
    opacity :  0 ,
    duration : 1.5 ,
    x : 100,
    scrollTrigger : {
        trigger: ".box:nth-child(3) ",
    
    }
})
gsap.from(".about2-man-img", {
    opacity :  0 ,
    duration : 1.5 ,
    x: 50,
    scrollTrigger : {
        trigger: ".about2-man-img",
    
    }
})










