const nav = document.getElementById('main');
const topOfNav = nav.offsetTop;
//var el01 = document.getElementById('element01');
//var middleOfScreen = el01.offsetTop

function masterParalex() {
    parallex();
    scrollEl();

}

function parallex() {
    var ypos = window.pageYOffset;




    var bg1 = document.getElementById('bg1');
    var bg2 = document.getElementById('bg2');
    var slogan = document.getElementById('slogan');


    bg1.style.top = ypos * .5 + 'px';
    bg2.style.top = ypos * .3 + 'px';
    slogan.style.top = ypos * .72 + 'px';


    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');


    }
    // if(window.scrollY >= middleOfScreen){
    //     el01.style.left = ypos* .5 + 'px';
    // }
    else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');

    }
}
function scrollEl() {
    var obj = document.getElementById('element01');
    var rect = obj.getBoundingClientRect();
    if (rect.top <= 400) {
        obj.style.left = '140%';
    }
    else if (rect.top > 400) {
        obj.style.left = '-41%';
    }
}
window.addEventListener('scroll', masterParalex);


        // function scrollel01(){

        // }
        // el01.addEventListener
