//création de flocons pour ciel
function initFlocons1 () {
    
    var div1Flocon = '<div class="flocon-div">';
    var numFlocon = 0;

    while (numFlocon < 25) {
        var left = Math.floor(Math.random() * 100);
        var vitesse = Math.floor(Math.random() * -5);
        div1Flocon += '<div class="flocon rellax" style="margin-left:' + left + '%" data-rellax-speed="' + vitesse + '">';
        div1Flocon += '</div>';
        div1Flocon += '</div>';
        numFlocon ++;
    }

    document.getElementById("Espace-Flocon-1").innerHTML = div1Flocon;
};


//création de flocons pour ciel
function initFlocons2 () {
    
    var div2Flocon = '<div class="flocon-div">';
    var numFlocon = 0;

    while (numFlocon < 25) {
        var left = Math.floor(Math.random() * 100);
        var vitesse = Math.floor(Math.random() * -5);
        div2Flocon += '<div class="flocon rellax" style="margin-left:' + left + '%" data-rellax-speed="' + vitesse + '">';
        div2Flocon += '</div>';
        div2Flocon += '</div>';
        numFlocon ++;
    }

    document.getElementById("Espace-Flocon-2").innerHTML = div2Flocon;
};

function initFlocons3 () {
    
    var div3Flocon = '<div class="flocon-div">';
    var numFlocon = 0;

    while (numFlocon < 75) {
        var left = Math.floor(Math.random() * 100);
        var vitesse = Math.floor(Math.random() * -3);
        div3Flocon += '<div class="flocon rellax" style="margin-left:' + left + '%" data-rellax-speed="' + vitesse + '">';
        div3Flocon += '</div>';
        div3Flocon += '</div>';
        numFlocon ++;
    }

    document.getElementById("Espace-Flocon-3").innerHTML = div3Flocon;
};

function initFlocons4 () {
    
    var div4Flocon = '<div class="flocon-div">';
    var numFlocon = 0;

    while (numFlocon < 75) {
        var left = Math.floor(Math.random() * 100);
        var vitesse = Math.floor(Math.random() * -3);
        div4Flocon += '<div class="flocon rellax" style="margin-left:' + left + '%" data-rellax-speed="' + vitesse + '">';
        div4Flocon += '</div>';
        div4Flocon += '</div>';
        numFlocon ++;
    }

    document.getElementById("Espace-Flocon-4").innerHTML = div4Flocon;
};

initFlocons1();
initFlocons2();
initFlocons3();
initFlocons4();