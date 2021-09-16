
//komponenty odkrywane
var startPage = document.getElementById('startPage');
var kamerowanie = document.getElementById('kamerowanie');
var book = document.getElementById('book');
var wizualizacje = document.getElementById('wizualizacje');
var animacje = document.getElementById('animacje');
var animacjeProgramowane = document.getElementById('animacjeProgramowane');
var inne = document.getElementById('inne');
var tools = document.getElementById('tools');
var clips = document.getElementById('clips');

//buttony wywołujące

var btnKamerowanie = document.querySelector('.kamerowanie');

var btnBook = document.querySelector('.book');
var btnLogo = document.getElementById('logoG');
var btnWizualizacje = document.querySelector('.wizualizacje');
var btnAnimacje = document.querySelector('.animacje');
var btnAnimacjeProgramowane = document.getElementById('btnAnimacjeProgramowane');
var btnInne = document.getElementById('btnInne');
var btnCofnij = document.getElementById('btnCofnij');
var btnTools = document.getElementById('btnTools');
var btnClips = document.getElementById('btnClips');

//buttony w menu nawigacyjnym

var btnHome = document.getElementById('home');
var btnMeKamerowanie = document.getElementById('meKamerowanie');
var btnMeWizualizacje = document.getElementById('meWizualizacje');
var btnMeBook = document.getElementById('meBook');
var btnMeAnimacje = document.getElementById('meAnimacje');
var btnMeEvents = document.getElementById('meEvents');
var btnMeKontakt = document.getElementById('meContact');



var arrAll = [startPage, kamerowanie, tools, clips, book, wizualizacje, animacje, animacjeProgramowane, inne];

var arrShow = [];

arrShow[0] = [startPage];
arrShow[1] = [kamerowanie];
arrShow[2] = [animacje];
arrShow[3] = [book];
arrShow[5] = [wizualizacje];
arrShow[6] = [animacje, animacjeProgramowane];
arrShow[7] = [animacje, inne];
arrShow[8] = [kamerowanie, tools];
arrShow[9] = [kamerowanie, clips];


function showComp(par, btn) {
    for (i = 0; i < arrAll.length; i++) {
        arrAll[i].style.display = 'none'
    }
    for (i = 0; i < arrShow.length; i++) {
        if (i == par) {
            for (j = 0; j < arrShow[i].length; j++) {
                arrShow[i][j].style.display = 'block';

                // if(btn != btnWizualizacje){
                //     btnWizualizacje.removeAttribute("disabled");
                // }
                if(btn != btnAnimacjeProgramowane){
                    btnAnimacjeProgramowane.removeAttribute("disabled");
                }
                if (btn != btnInne) {
                    btnInne.removeAttribute("disabled");
                }
                if (btn != btnTools) {
                    btnTools.removeAttribute("disabled");
                }
                if (btn != btnClips) {
                    btnClips.removeAttribute("disabled");
                }
                

            }
        }
    }
};

btnKamerowanie.onclick = function(){
    showComp(1, btnKamerowanie);
}
btnLogo.onclick = function(){
    showComp(0, btnLogo);

}

btnBook.onclick = function () {
    showComp(3, btnBook);
}

btnWizualizacje.onclick = function () {
    showComp(5, btnWizualizacje);
    //btnWizualizacje.setAttribute('disabled', true);

}
btnAnimacje.onclick = function () {
    showComp(2, btnAnimacje);
}
btnAnimacjeProgramowane.onclick = function(){
    showComp(6, btnAnimacjeProgramowane);
    btnAnimacjeProgramowane.setAttribute('disabled', true);
}
btnInne.onclick = function () {
    showComp(7, btnInne);
    btnInne.setAttribute('disabled', true);
}

btnHome.onclick = function(){
    showComp(0,btnHome);

}
btnMeKamerowanie.onclick = function(){
    showComp(1, btnMeKamerowanie);

}
btnMeWizualizacje.onclick = function(){
    showComp(5, btnMeWizualizacje);

}
btnMeAnimacje.onclick = function(){
    showComp(2, btnMeAnimacje);
}
btnMeBook.onclick = function(){
    showComp(3, btnMeBook);
}



btnTools.onclick = function () {
    showComp(8);
}
btnClips.onclick = function () {
    showComp(9);
}



function openNav() {
    console.log('otwiera');
    document.getElementById("myNav").style.height = "100%";


}
function closeNav() {


    document.getElementById("myNav").style.height = "0%";


}



document.querySelector('.bar').addEventListener('click', openNav);
document.getElementById("myNav").addEventListener('click', closeNav);