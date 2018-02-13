var RUTPACIENTE = "";
$(document).ready(function() {
    $("#id-paciente").on("change", function() {
        RUTPACIENTE = $(this).val();

        $.get(serverURL + "dicom/getimages/" + $(this).val()).done(function(data) {
            $("#fotosDicom").html(" ");
            if (data.DCM = true) {
                $.each(data.JPGFiles, function(i, item) {
                    $("#fotosDicom").append("<div class='col-3'><img class='rounded' alt='200x200' style='width: 200px; height: 200px;' src='" + serverURL + "data/" + RUTPACIENTE + "/" + item + "'><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' name='fotosElegidas'>Seleccionar</label></div></div>");
                });
                $("#fotosDicom").append("<button class='btn btn-primary' id='imprimirFotos'>Imprimir</button>");
                $("#imprimirFotos").on("click", function() {
                    $("input[name='fotosElegidas']").each(function() {
                        if (this.checked == true) {
                          
                        };
                    });
                });
            }
        }).fail(function() {
            $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
        });
    });
});
