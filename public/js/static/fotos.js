var RUTPACIENTE = "";
var FechaExm = "";
var StudyDate = ""
$(document).ready(function() {

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

    $.get( serverURL + "configuracion/profesionalreferente", function( data ) {
        $("#profReferente").empty();
        $.each(data, function (key, des) {
            $("#profReferente").append('<option value="'+ des.profesional_id + '">'+ des.profesional_name  +'</option>');
        });
    });
});
