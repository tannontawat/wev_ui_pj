$(function(){
    var q_product=0;
    var q_cus=0;
    var q_supplier=0;
    var q_order=0;
    $.get('./../data/products.json',function(data){
        $.each(data,function(key,value){
            q_product=q_product+1;
        });
        $('#q_product').append(q_product+' products');
    });
    
    $.get('./../data/customers.json',function(data){
        $.each(data,function(key,value){
            q_cus+=1;
        });
        $('#q_cus').append(q_cus+' customers');
    });
    
    $.get('./../data/suppliers.json',function(data){
        $.each(data,function(key,value){
            q_supplier+=1;
        });
        $('#q_supplier').append(q_supplier+' suppliers');
    });
    
    $.get('./../data/orders.json',function(data){
        $.each(data,function(key,value){
            q_order+=1;
        });
        $('#q_order').append(q_order+' orders');
    });  
});