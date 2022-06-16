let backBtnEl = document.querySelector('#back');
backBtnEl.addEventListener('click', handleBackBtn);
let ulEl = document.querySelector('ul');

function handleBackBtn() {
    location.href = 'index.html'
}

document.querySelector('#clear').addEventListener('click', function() {
    localStorage.clear();
    ulEl.innerHTML = '';
});

let records = JSON.parse(localStorage.getItem("record"));
let recordArray = [];

for (let name in records) {
    recordArray.push([name, records[name]]);
}

recordArray.sort(function(a, b) {
    return a[1] - b[1];
});

for (let record of recordArray) {
    let liEl = document.createElement('li');
    liEl.textContent = record[0] + ": " + record[1];
    ulEl.appendChild(liEl);
}