$(document).ready( function() {
    $('.instrument').on('click', 'button', function(event) {
        var note = $(this).html();
        console.log(note);
        var audioObject = '#' + note + 'Audio';
        console.log(audioObject);
        $(audioObject)[0].play();
  });

});
