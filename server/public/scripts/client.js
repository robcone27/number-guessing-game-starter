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
        url: '/playerName',
        data: {
            number: $('#juliaInput').val(),
            number: $('#jacobInput').val(),
            number: $('#robInput').val(),
            number: $('#emilyInput').val()
        }
    }).then(function(response) {
        console.log('Great Success!!!', response);
        // getGuesses()
        number: $('#juliaInput').val(),
            number: $('#jacobInput').val(),
            number: $('#robInput').val(),
            number: $('#emilyInput').val()
    }).catch(function(response) {
        alert('You Broke It!!!', response)
    })
}