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

function activatePaciente(element){
	$.each( $(element).parent().children(), function( i, val ) {
		$( val ).removeClass( 'table-active');
	});
    $(element).addClass('table-active');
    $("#id-paciente").val($(element).children("th").data("id")).trigger("change");
    $("#nombre-paciente").val("cargando...");
    $("#apellido-paciente").val("cargando...");
}

function loadTablePatients(){
	$.get( serverURL + "dicom/getlastpatients", function( data ) {
        $("#table\\.body\\.pacientes").empty();
        $.each(data, function (key, des) {
            var date =  epochToDate(des.AccessTime);
            date =  dateToStr(date);
            if (des.PatientNam !== null){
                var nombre = des.PatientNam.split("^");
            }
            else{
                var nombre = ["NN", "NN"];
            }

            if (des.user_exmtxt !== null){
                var ecmtxt = des.user_exmtxt;
            }
            else{
                var ecmtxt = "";
            }
            
            var strTable = "<tr><th scope='row' data-id='" + des.PatientID + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + nombre[1] + " "+ nombre[0] +"</td><td>" + date + "</td><td>" + ecmtxt + "</td></tr>";
            $("#table\\.body\\.pacientes").append(strTable);
        });
        $("#table\\.body\\.pacientes tr").on('click',function(){
            activatePaciente(this);
        });
    });
}

function loadEmails(){
    $.get( serverURL + "configuracion/getemails", function( data ) {
        $("#configuracion\\.email").empty();
        $("#paciente\\.correo\\.config").empty();
        $.each(data, function (key, des) {
            let strSelect = "<option value='" + des.email_text +"'>" + des.email_text + "</option>";
            $("#configuracion\\.email").append(strSelect);
            $("#paciente\\.correo\\.config").append(strSelect);
        });
    });
}