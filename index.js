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