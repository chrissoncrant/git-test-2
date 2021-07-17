const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
    const choice = select.value;

    if (choice === "January" || choice === "March" || choice === "May" || choice === "July" || choice === "August" || choice === "October" || choice === "December") {
        days = 31;
    } else if (choice === "February") {
        days = 28;
    } else {days = 30;};

    createCalendar(days, choice);
}

function createCalendar(days, choice) {
    list.innerHTML = '';
    h1.textContent = choice;
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    };
}










