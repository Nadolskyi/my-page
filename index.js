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
        dataType: "json",
        success: function(){
            $('#thanks').html('Success!Thank you for contacting us!');
        }
    });
}