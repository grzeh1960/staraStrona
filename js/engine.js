var el1 = document.getElementById('gearYellow');
        var el2 = document.getElementById('gearGrey');
        var tlk = document.getElementById('tlk');
        var korbowod = document.getElementById('korbowod');
        var wahacz = document.getElementById('wahacz');
        var wajha = document.getElementById('wajha');
        var spDown = document.getElementById('spDown');
        var spEl1 = document.getElementById('spEl1');
        var spEl2 = document.getElementById('spEl2');
        var spEl3 = document.getElementById('spEl3');
        var wybuh = document.getElementById('wybuh');

        var engineStartBtn = document.getElementById('engineStartBtn');
        var engineStopBtn = document.getElementById('engineStopBtn');

        engineStartBtn.onclick = function(){
            el1.classList.add('animate1');
            el2.classList.add('animate2');
            tlk.classList.add('animate3Tlok');
            korbowod.classList.add('animate4Korbowod');
            wahacz.classList.add('animate5Wahacz');
            wajha.classList.add('animate6Wajha');
            spDown.classList.add('animate7SpDown');
            spEl1.classList.add('animate7SpEl1');
            spEl2.classList.add('animate7SpEl2');
            spEl3.classList.add('animate7SpEl3');
            wybuh.classList.add('animate8Wybuh')

        }
        engineStopBtn.onclick = function(){
            el1.classList.remove('animate1');
            el2.classList.remove('animate2');
            tlk.classList.remove('animate3Tlok');
            korbowod.classList.remove('animate4Korbowod');
            wahacz.classList.remove('animate5Wahacz');
            wajha.classList.remove('animate6Wajha');
            spDown.classList.remove('animate7SpDown');
            spEl1.classList.remove('animate7SpEl1');
            spEl2.classList.remove('animate7SpEl2');
            spEl3.classList.remove('animate7SpEl3');
            wybuh.classList.remove('animate8Wybuh')


        }