$(document).ready(function(){
    loadTablePatients();
    loadEmails();
});



function loadEmails(){
    $.get( serverURL + "configuracion/getemails", function( data ) {
        $("#paciente\\.correo\\.config").empty();
        $.each(data, function (key, des) {
            let strSelect = "<option value='" + des.email_text +"'>" + des.email_text + "</option>";
            $("#paciente\\.correo\\.config").append(strSelect);
        });
    });
}