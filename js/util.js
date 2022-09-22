'use strict'

//starts a timer from the moment of first click
function currTime() {
    var diff = Date.now() - gDate
    var inSeconds = (diff / 1000).toFixed(2)

    gGame.secsPassed = inSeconds

    var elTimer = document.querySelector('.timer span')
    elTimer.innerText = ' ' + inSeconds
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function randomColor() {

    var hue = Math.floor(Math.random() * 360);
    var pastel = 'hsl(' + hue + ', 100%, 50%)';
    return pastel
}

function notAvailableFeature() {
    var elDiv = document.querySelector('.development')
    elDiv.classList.remove('hidden')

    setTimeout(() => {
        var elDiv = document.querySelector('.development')
        elDiv.classList.add('hidden')
    }, 2500);
}