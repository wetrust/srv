$(document).ready(function(){
    $("#buscar\\.pacientes\\.last\\.view").on("change", function(){
        let check = $(this).is(':checked');

        if (check == true){
            $("#buscar\\.pacientes\\.last\\.view\\.text").html("Si");
            $("#buscar\\.pacientes\\.last\\.view\\.container").removeClass("d-none");
        }
        else{
            $("#buscar\\.pacientes\\.last\\.view\\.text").html("No");
            $("#buscar\\.pacientes\\.last\\.view\\.container").addClass("d-none");
        }
    });

    $("#id-paciente").on("change", function() {
        RUTPACIENTE = $("#id-paciente").val();
        FechaExm = $("#fee-dos").val();
        $("#buscar\\.pacientes\\.last\\.view").prop('checked', false).trigger("change");

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
                                    $("#fotosDicom").append("<div class='col-3'><img alt='200x200' class='zoom' style='width: 250px; height: 250px;' src='" + serverURL + "data/" + item + "'><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' name='fotosElegidas'>Seleccionar</label></div></div>");
                                });
                                $("#fotosDicom").append("<button class='btn btn-primary' id='imprimirFotos'>Ver Informe / Impresión</button>");
                                $("#fotosDicom").append("<button class='btn btn-primary' id='emailFotos'>Enviar fotos por E-Mail</button>");
				$("#imprimirFotos").on("click", function() {
                                    var fotosArreglo = [];
                                    var contadorIMG = 0;
                                    var iIMG = 0;
                                    $("input[name='fotosElegidas']").each(function() {
                                        if (this.checked == true) {
                                            fotosArreglo.push(iIMG);
					    contadorIMG = contadorIMG + 1
                                        }; 
                                        iIMG = iIMG + 1
                                    });
				    if (contadorIMG <1){
                                        alert("Debe seleccionar al menos una imágen");
                                        return true;
                                    }
				    if (contadorIMG == 3 | contadorIMG == 5){
                                        alert("Solo múltiplos de 2");
                                        return true;
                                    }
                                    window.open(serverURL + "pdf/img/" + RUTPACIENTE + "/" + fotosArreglo.toString() + "/" + StudyDate);
                                });
                                $("#emailFotos").on("click", function() {

                                    if ($("#paciente\\.correo").val() == ""){
                                        alert("Debe ingresar un correo para el paciente en la página principal");
                                        return true;
                                    }

                                    var fotosArreglo = [];
                                    var contadorIMG = 0;
                                    $("input[name='fotosElegidas']").each(function() {
                                        if (this.checked == true) {
                                            fotosArreglo.push(contadorIMG);
                                        };
                                        contadorIMG = contadorIMG + 1
                                    });
                
                                    var valores = {
                                        user_id: $("#id-paciente").val(),
                                        img_id: "[" + fotosArreglo.toString() + "]",
                                        studyDate: StudyDate,
                                        user_email: $("#paciente\\.correo").val()
                                    }
                                    alert("Enviando correo, espere un momento");
                                    $.post(serverURL + "imagenes/send", valores).done(function (data) {
                                        alert("Correo Enviado");
                                    });
                                });
                                $('.zoom').on("click", function(){
                                    var img = this.outerHTML;
                                    $("#modalZoom").html(" ");
                                    $("#modalZoom").append(img);
                                    $("#modalZoom img").removeClass("zoom").css("width","auto").css("height","auto");
                                    $("#modalZoom").modal("show");
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
})