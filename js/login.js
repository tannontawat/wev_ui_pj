$(function(){ 
    $('#InputEmail').focus();
    $('#login').click(function(){
        login();
    });
    function chpage(){
        window.location.href='dashboard.html';
    }
    function login(){
        var email=$('#InputEmail').val();
        var password=$('#InputPassword').val();
        if(email=='admin@nw.com'){
            if(password=='12345**'&&password!=''){
                chpage();
            }
            else{
                $('#alert').empty();
                var text='Incorrect Username or Password!!<br>Please try again.'
                $('#alert').append(text);
            }
        }
        else{
            $('#alert').empty();
            var text='Incorrect Username or Password!!<br>Please try again.'
            $('#alert').append(text);
        }
    }
});