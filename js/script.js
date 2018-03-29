//création de flocons pour ciel
function initFlocons(num, fraction, vit) {
    
    var divFlocon = '<div class="flocon-div">';
    var numFlocon = 0;

    while (numFlocon < 25 * fraction) {
        var left = Math.floor(Math.random() * 100);
        var vitesse = Math.floor(Math.random() * vit);
        divFlocon += '<div class="flocon rellax" style="margin-left:' + left + '%" data-rellax-speed="' + vitesse + '">';
        divFlocon += '</div>';
        divFlocon += '</div>';
        numFlocon ++;
    }

    document.getElementById("Espace-Flocon-" + num).innerHTML = divFlocon;
};

initFlocons(1, 1, -5);
initFlocons(2, 2, -5);
initFlocons(3, 3, -4);
initFlocons(4, 3, -3);