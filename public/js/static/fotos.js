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
            exmtxt: $("#tipo\\.examen\\.previo").html(),
			exm: $("#tipo\\.examen\\.previo").val()
		}

		$.post(serverURL + "pacientes/savexmprev", valores).done(function (data) {
            alert("Guardado");
        });
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
	
    $("#id-paciente").on("change", function() {
        RUTPACIENTE = $("#id-paciente").val();
        FechaExm = $("#fee-dos").val();

        $.get(serverURL + "pacientes/getfur/" + RUTPACIENTE).done(function(data) {
	    if (data !== null){
                if (Object.keys(data).length > 0 ){
                    $("input[name='fum']").val(data.fur_date);
		    $("#fum-dos").trigger("change");
                }
	    }
            else{
                var dateTime = new Date();
                var day = ("0" + dateTime.getDate()).slice(-2);
	        var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
                $("input[name='fum']").val((day)+"/"+(month)+"/"+dateTime.getFullYear());
            }
        });
        
        $.get(serverURL + "configuracion/obtenernombre/" + RUTPACIENTE).done(function(data) {
            if (data.length > 0 ){
                var nombre = data[0].PatientNam.split("^");
                $("#nombre-paciente").val(nombre[1]);
                $("#apellido-paciente").val(nombre[0]);

                var dateTime = epochToDate(data[0].AccessTime)
                var day = ("0" + dateTime.getDate()).slice(-2);
	            var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
                $("#fecha\\.examen\\.previo").val((day)+"/"+(month)+"/"+dateTime.getFullYear());



                FechaExm = FechaExm.split("/");

                $.get(serverURL + "configuracion/obtenerexamenes/" + RUTPACIENTE + "/" + FechaExm[2] + FechaExm[1] + FechaExm[0]).done(function(data) {
                    if (data.exist == true ){
                        StudyDate =  data.StudyDate;
                        $.get(serverURL + "dicom/getimages/" + RUTPACIENTE + "/" + StudyDate).done(function(data) {
                            $("#fotosDicom").html(" ");
                            if (data.DCM = true) {
                                $.each(data.JPGFiles, function(i, item) {
                                    $("#fotosDicom").append("<div class='col-3'><img alt='200x200' style='width: 250px; height: 250px;' src='" + serverURL + "data/" + item + "'><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' name='fotosElegidas'>Seleccionar</label></div></div>");
                                });
                                $("#fotosDicom").append("<button class='btn btn-primary' id='imprimirFotos'>Ver Informe / Impresión</button>");
                                $("#imprimirFotos").on("click", function() {
                                    var fotosArreglo = [];
                                    var contadorIMG = 0;
                                    $("input[name='fotosElegidas']").each(function() {
                                        if (this.checked == true) {
                                            fotosArreglo.push(contadorIMG);
                                        };
                                        contadorIMG = contadorIMG + 1
                                    });
                
                                    window.open(serverURL + "imagenes/view/" + RUTPACIENTE + "/" + fotosArreglo.toString() + "/" + StudyDate);
                                });
                            }
                        }).fail(function() {
                            $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
                        });
                    }
                    else{
                        $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
                    }
                });

            }
        });
    });
});
