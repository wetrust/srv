$(document).ready(function(){
    loadTablePatients();
    loadEmails();
});

function epochToDate(epoch){
    var date = new Date(epoch*1000);
    return date;
}

function dateToStr(datetime){
    var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var estring = datetime.getDate() + "-" + months[datetime.getMonth()] + "-" + datetime.getFullYear() + " " + datetime.getHours() + ":" + datetime.getMinutes();
    return estring;
}



function loadEmails(){
    $.get( serverURL + "configuracion/getemails", function( data ) {
        $("#paciente\\.correo\\.config").empty();
        $.each(data, function (key, des) {
            let strSelect = "<option value='" + des.email_text +"'>" + des.email_text + "</option>";
            $("#paciente\\.correo\\.config").append(strSelect);
        });
    });
}