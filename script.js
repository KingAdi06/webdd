

function yesnoCheck() {
    if (document.getElementById('yes').checked) {
        document.getElementById('name-input-container').style.visibility = 'visible';
    } else {
        document.getElementById('name-input-container').style.visibility = 'hidden';
    }
}