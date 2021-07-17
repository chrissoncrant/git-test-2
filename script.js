const select = document.querySelector('select');
const container = document.querySelector('.container');
console.log(container);
const white = "#F5F5F5";
const black = "#212121";
const purple = "#4E11A8";
const green = "#D0F5B5";
const yellow = "#F5E50A";
const blue = "#530AF5";
const aqua = "#00F0B8";
const brown = "#A37D08";

select.onchange = function() {
    const choice = select.value;

    switch (choice) {
        case "White":
            update(white, black);
            break;
        case "Black":
            update(black, white);
            break;
        case "Purple":
            update(purple, green);
            break;
        case "Yellow":
            update(yellow, blue);
            break;
        case "Psychedelic":
            update(aqua, brown)
            break;
    };
}

function update(bgColor, textColor) {
    container.style.backgroundColor = bgColor;
    container.style.color = textColor;
}

let userName = prompt("Who's there?");

switch (userName) {
    case "Admin":
    let pass = prompt("Password?", "");
    if (pass === "password") {
        alert("Welcome!");
        break;
    } else if (pass === "" || pass === null) {
        alert("Canceled.");
        break;
    } else {
        alert("Wrong!");
        break;
    }   
    default:
        alert("I don't know you")
        break;
}