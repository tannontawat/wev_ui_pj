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
        if(!(email.localeCompare('admin@nw.com'))){
            if(!(password.localeCompare('12345**')&&password.localeCompare(''))){
                chpage();
            }
        }
    }
});