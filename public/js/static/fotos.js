var RUTPACIENTE = "";
$(document).ready(function() {
    $("#id-paciente").on("change", function() {
        RUTPACIENTE = $(this).val();

        $.get(serverURL + "configuracion/obtenernombre/" + $(this).val()).done(function(data) {
            var nombre = data[0].PatientNam.split("^");
            $("#nombre-paciente").val(nombre[1]);
            $("#apellido-paciente").val(nombre[1]);
        });

        $.get(serverURL + "dicom/getimages/" + $(this).val()).done(function(data) {
            $("#fotosDicom").html(" ");
            if (data.DCM = true) {
                $.each(data.JPGFiles, function(i, item) {
                    $("#fotosDicom").append("<div class='col-3'><img alt='200x200' style='width: 250px; height: 250px;' src='" + serverURL + "data/" + RUTPACIENTE + "/" + item + "'><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' name='fotosElegidas'>Seleccionar</label></div></div>");
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

                    window.open(serverURL + "imagenes/view/" + RUTPACIENTE + "/" + fotosArreglo.toString());
                });
            }
        }).fail(function() {
            $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
        });
    });
});
