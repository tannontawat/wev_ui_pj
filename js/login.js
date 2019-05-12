$(function(){ 
    $('#InputEmail').focus();
    $('#login').click(function(){
        $('#loginForm').submit(function (event) {
            var form = $('#loginForm')[0];
            if (form.checkValidity() === false) {
              event.preventDefault();
          }
          $(this).addClass('was-validated');
        });
        login();
    }
    );

    function chpage(){
        window.location.href='dashboard.html';
    }

    function login(){
    //     var email=$('#InputEmail').val();
    //     var password=$('#InputPassword').val();
    //     if (email=='admin@nw.com' && password=='12345**'){
    //         console.log('pass');
    //         $('#alert').remove();
    //         chpage();
    //     }
    //     else{
    //         text='Username or password is not correct!!<br>Please try again.'
    //         $('#alert').append(text);
    //     }
    chpage();
    }
});