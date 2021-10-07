$(document).ready(handleReady);

function handleReady() {
    console.log("jquery is loaded!")
}

function getGuesses() {
    $.ajax({
        type: 'GET',
        url: '/playerName'
    }).then(function(response) {
        console.log('successful response', response);
        //add render function later
    }).catch(function(response) {
        alert('Im broken!!!!! :(');
    })

}

function postNewGuesses() {
    $.ajax({
        type: 'POST',
    })
}