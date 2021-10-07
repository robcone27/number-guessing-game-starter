$(document).ready(handleReady);

function handleReady() {
    console.log("jquery is loaded!")
    getGuesses();
    $(`#submitButton`).on(`click`, getGuesses);
}

function getGuesses() {
    $.ajax({
        type: 'GET',
        url: '/playerName'
    }).then(function(response) {
        console.log('successful response', response);
        // renderToDOM();
    }).catch(function(response) {
        alert('Im broken!!!!! :(');
    })
}

function postNewGuesses() {
    $.ajax({
        type: 'POST',
        url: '/playerName',
        data: {
            juliaNumber: $(`#juliaInput`).val(),
            // jacobNumber: $(`#jacobInput`).val(),
            // robNumber: $(`#robInput`).val(),
            // emilyNumber: $(`#emilyInput`).val()
        }
    }).then(function(response) {
        console.log('Great Success!!!');
        getGuesses();
        $('#juliaInput').val(``);
        $('#jacobInput').val(``);
        $('#robInput').val(``);
        $('#emilyInput').val(``);
    }).catch(function(response) {
        alert('You Broke It!!!', response)
    })
}

// function renderToDOM(guesses) {
//     //   $(`#juliaContainer`).empty();
//     //   $(`#jacobContainer`).empty();
//     //   $(`#robContainer`).empty();
//     //   $(`#emilyContainer`).empty();
//     for (let guess of guesses) {
//         $(`.juliaContainer`).append(`<p>
//      Hello!
//   </p>
//   `)
//     } //end 
//   // LOOP????


// $(`#juliaContainer`).appened(
//   <p>
//     ${playerName.number}
//   </p>
// );



// }; //end render loop