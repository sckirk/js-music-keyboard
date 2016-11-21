$(document).ready( function() {
    $('.instrument').on('click', 'button', function(event) {
        var note = $(this).html();
        console.log(note);
        var audioObject = '#' + note + 'Audio';
        console.log(audioObject);
        $(audioObject)[0].play();
    });

    $('body').keydown(function(event) {
        var note = '';
        if (event.key == 'a') {
            note = 'a';
        } else if (event.key == 'b') {
            note = 'b';
        } else if (event.key == 'c') {
            note = 'c';
        } else if (event.key == 'd') {
            note = 'd';
        } else if (event.key == 'e') {
            note = 'e';
        } else if (event.key == 'f') {
            note = 'f';
        } else if (event.key == 'g') {
            note = 'g';
        }
        var audioObject = '#' + note + 'Audio';
        console.log(audioObject);
        $(audioObject)[0].play();
    });

});





// var changeColor = function() {
//     var box = $('#color-box');
//     box.removeClass();
//     box.addClass(nextColor());
// };
//
// $(document).ready(function() {
//     $('body').keydown(function(event) {
//         // 32 is space; 13 is enter
//         if (event.which == 32 || event.which == 13) {
//             changeColor();
//         }
//     });
// });
