function isKeyPressed(event) {
    var x = document.getElementById("gfg");
    if (event.altKey) {
        x.innerHTML = "ALT Key Pressed";
    } else {
        x.innerHTML = "ALT Key Not Pressed";
    }
}