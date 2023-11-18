function desvia() {
    var btn = document.getElementById("nao");
    btn.style.position = 'absolute';
    btn.style.bottom = numeroAleatorio(10, 90);
    btn.style.left = numeroAleatorio(10, 90);
}

function numeroAleatorio(min, max) {
    return (Math.random() * (max - min) + min) + '%'
}


function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent scrolling when the popup is open
    document.getElementById("overlay").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling when the popup is closed
    document.getElementById("overlay").style.display = "none";
}

