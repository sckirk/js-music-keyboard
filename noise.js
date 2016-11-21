$(document).ready( function() {
    $('body').click(function(event) {
        $('#cAudio')[0].play();
    });

    $('.instrument').on('click', 'button', function(event) {
        var note = $(this).html();
        console.log(note);
        $('#cAudio')[0].play();
  });

});
