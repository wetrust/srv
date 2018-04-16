var RUTPACIENTE = "";
var FechaExm = "";
var StudyDate = ""
$(document).ready(function() {
    
    $.get( serverURL + "configuracion/patologiaobstetrica", function( data ) {
        $("#tipo\\.examen\\.previo").empty();
        $("#patologiaObstetricaUno").empty();
        $.each(data, function (key, des) {
            $("#patologiaObstetricaUno").append('<option value="'+ des.patologia_id + '">'+ des.patologia_name  +'</option>');
            $("#tipo\\.examen\\.previo").append('<option value="'+ des.patologia_id + '">'+ des.patologia_name  +'</option>');
        });
      });

      $("#tipo\\.examen\\.previo").on("change", function(){
        $("#patologiaObstetricaUno").val($(this).val());
      });

    $.get( serverURL + "configuracion/lugarcontrol", function( data ) {
        $("#lugar\\.control\\.prenatal").empty();
        $.each(data, function (key, des) {
            $("#lugar\\.control\\.prenatal").append('<option value="'+ des.lcp_id + '">'+ des.lcp_name  +'</option>');
        });
    });

    $.get( serverURL + "configuracion/getemails", function( data ) {
        $("#configuracion\\.email").empty();
        $.each(data, function (key, des) {
            $("#configuracion\\.email").append('<option value="'+ des.email_id + '">'+ des.email_text  +'</option>');
        });
    });

    $.get( serverURL + "configuracion/profesional", function( data ) {
        $("#profesional\\.ecografista").empty();
        $.each(data, function (key, des) {
            $("#profesional\\.ecografista").append('<option value="'+ des.profesional_id + '">'+ des.profesional_name  +'</option>');
        });
    });

    $.get( serverURL + "configuracion/motivoexamen", function( data ) {
        $("#motivo\\.examen").empty();
        $.each(data, function (key, des) {
            $("#motivo\\.examen").append('<option value="'+ des.motivo_id + '">'+ des.motivo_name  +'</option>');
        });
    });

$('#guardartipoexamen').on("click", function(){

		var valores = {
            rut: $("#id-paciente").val(),
            exmtxt: $("#tipo\\.examen\\.previo option:selected").html(),
			exm: $("#tipo\\.examen\\.previo").val()
		}

		$.post(serverURL + "pacientes/savexmprev", valores).done(function (data) {
            alert("Guardado");
            loadTablePatients();
        });
    });
$("#paciente\\.correo").on("change", function(){
	$("#paciente\\.correo\\.copia").val($(this).val());
});
$("#paciente\\.correo\\.copia").on("focusout", function(){
	$("#paciente\\.correo").val($(this).val());
});
    
    $('#guardarfur').on("click", function(){

		var valores = {
			rut: $("#id-paciente").val(),
			fur: $("#fum-dos").val()
		}

		$.post(serverURL + "pacientes/savefur", valores).done(function (data) {
            alert("FUM guardada");
        });
	});
});
