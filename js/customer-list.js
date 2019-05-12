$(function(){
    var table=$('#dataTable').DataTable({
        ajax:{
            url:'./../data/customers.json',
            dataSrc:''
        },
        columns:[
            {'data':'customerID'},
            {'data':'companyName'},
            {'data':'contactName'},
            {'data':'contactTitle'}
        ]
    });
    $('#dataTable tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        var value=data.customerID;
        document.cookie=value;
        window.location.href='cusdetail.html';
    } );
});

