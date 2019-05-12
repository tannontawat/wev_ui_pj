$(function(){ 
    $('#InputEmail').focus();
    $('#login').click(function(){
        login();
        $('#alert').clear();
    });
    function chpage(check){
        window.location.href='dashboard.html';
    }
    function login(){
        var email=$('#InputEmail').val();
        var password=$('#InputPassword').val();
        if(!(email.localeCompare('admin@nw.com'))){
            if(!(password.localeCompare('12345**'))){
                chpage();
            }
            else{
                console.log('false');
                text='Username or password is not correct!!<br>Please try again.'
                $('#alert').append(text);
            }
        }
        else{
            console.log('false');
            text='Username or password is not correct!!<br>Please try again.'
            $('#alert').append(text);
        }
    }
    
});