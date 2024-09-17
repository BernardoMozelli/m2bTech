// JavaScript para o widget WhatsApp

function showIt2() {
    document.getElementById("msg1").style.visibility = "visible";
}
setTimeout(showIt2, 5000);

function hiddenIt() {
    document.getElementById("msg1").style.visibility = "hidden";
}
setTimeout(hiddenIt, 15000);

function showIt3() {
    document.getElementById("msg1").style.visibility = "visible";
}
setTimeout(showIt3, 25000);

document.getElementById("msg1").onclick = function() {
    document.getElementById('msg1').style.visibility = "hidden";
};

function alertW() {
    document.getElementById("alertWapp").style.visibility = "visible";
}
setTimeout(alertW, 15000);