$ (function(){
	$('#btn-send').click(sendForm);
})
function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "//formspree.io/nadolskyy@i.ua",
        method: "POST",
        data: {
            name:$('#name').val(),
            email:$('#email').val(),
            message:$('#message').val()
        },
        dataType: 'json',
        success: function(){
            $('#contact-form')[0].reset();
        }
    });
}
$('#btn-send').click(function(){
    alert('Success!Thank you for contacting me!');
});


$('#link1').hover(function() {
    $('#volonteer').show(500);
}, function (){
    $('body').click(function() {
      $('#volonteer').hide(500);  
    });
});
    
 $('#link2').hover(function() {
    $('#travel').show(500);
}, function (){
    $('body').click(function() {
      $('#travel').hide(500);  
    });
});

 $('#link3').hover(function() {
    $('#craz').show(500);
}, function (){
    $('body').click(function() {
      $('#craz').hide(500);  
    });
});
