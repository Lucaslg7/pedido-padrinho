function sim() {
    let btn = document.getElementById("sim")
    
}

function desvia() {
    var btn = document.getElementById("nao");
    btn.style.position = 'absolute';
    btn.style.bottom = numeroAleatorio(10, 90);
    btn.style.left = numeroAleatorio(10, 90);
}

function numeroAleatorio(min, max) {
    return (Math.random() * (max - min) + min) + '%'
}
