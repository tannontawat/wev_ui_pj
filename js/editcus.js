function back(){
    window.location.href='cusdetail.html'
    // document.cookie=null;
}
$(function(){
    var c=document.cookie;
    $.get('./../data/customers.json',function(data){
        for(var i in data){
           var cus=data[i];
            if(!(cus.customerID.localeCompare(c))){
                $('#cus_id').val(cus.customerID);
                $('#com_name').val(cus.companyName);
                $('#contact_name').val(cus.contactName);
                $('#position').val(cus.contactTitle);
                $('#street').val(cus.address.street);
                $('#city').val(cus.address.city);
                $('#region').val(cus.address.region);
                $('#post_code').val(cus.address.postalCode);
                $('#country').val(cus.address.country);
                $('#phone').val(cus.address.phone);
            }
        }
    });
});