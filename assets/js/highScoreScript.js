let backBtnEl = document.querySelector('#back');
backBtnEl.addEventListener('click', handleBackBtn);

function handleBackBtn() {
    location.href = 'index.html'
}

document.querySelector('#clear').addEventListener('click', function() {
    localStorage.clear();
    document.querySelector('ul').innerHTML = '';
});