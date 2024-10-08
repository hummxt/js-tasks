const direction = prompt("Istiqamet daxil edin(up/down/right/left):")

switch (direction) {
    case "up":
        alert("Yuxari.");
        break;
    case "down":
        alert("Asagi.");
        break;
    case "right":
        alert("Sag.");
        break;
    case "left":
        alert("Sol.");
        break;
    default:
        alert("Yanlis istiqamet.");
        break;
}