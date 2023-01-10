const slider = document.querySelector('.Slider');
const slide = document.querySelectorAll('.slide');
const scrollAnimation = document.querySelector('.scroll');

const app = {
    position: 0,
    pages: slide.length-1,
    lastY: 0,
    scrolled: false
}

window.addEventListener('wheel', function(event)
{
    app.scrolled = true;

    if (event.deltaY < 0){
        if(app.position > 0) {
            app.position -= 100;
        }
        else {
            app.position = app.pages * 100;
        }
    }
    else if (event.deltaY > 0) {
        if(app.position < app.pages * 100) {
            app.position += 100;
        }
        else {
            app.position = 0;
        }
    }

    slider.style.top = `-${app.position}vh`;
    scrollAnimation.style.height = 0;
});


setTimeout(() => {
    if(!app.scrolled) {
        scrollAnimation.style.height = 100 + 'vh'
    }
}, 5000)