$(document).ready(function(){

    $("#buscar\\.paciente\\.fechaprevia").on("click", function(){
        let fecha = $('input[name="fecha\\.examen\\.previo"]').val();
        
        $('#fee-tres').val(fecha).datepicker().trigger("change");
        FechaExm = fecha.split("/");

        $.get(serverURL + "configuracion/obtenerexamenes/" + RUTPACIENTE + "/" + FechaExm[2] + FechaExm[1] + FechaExm[0]).done(function(data) {
            if (data.exist == true ){
                StudyDate =  data.StudyDate;
                $.get(serverURL + "dicom/getimages/" + RUTPACIENTE + "/" + StudyDate).done(function(data) {
                    $("#fotosDicom").html(" ");
                    if (data.DCM = true) {
                        $.each(data.JPGFiles, function(i, item) {
                            $("#fotosDicom").append("<div class='col-12 col-lg-6 col-xl-4'><img alt='200x200' class='zoom' style='width: 250px; height: 250px;' src='" + serverURL + "data/" + item + "'><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' name='fotosElegidas'>Seleccionar</label></div></div>");
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
        window.location.href = "#tipoExamen";
        $("#ecografia\\.uno").removeClass("border-primary");
        $("#ecografia\\.dos").removeClass("border-primary");
        $("#ecografia\\.doppler").removeClass("border-primary");
        $("#ecografia\\.imagenes").addClass("border-primary");
    });

    $("#buscar\\.paciente\\.id, #id-paciente").on("change", function() {
        RUTPACIENTE = $(this).val();
        FechaExm = $("#fee-dos").val();

        
        
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

            if ($("#paciente\\.correo").val() == "" && $("#paciente\\.correo\\.lista").is(':checked') == false){
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

            var correo = ""

            if ($("#paciente\\.correo\\.lista").is(':checked') == true){
                correo = $( '#paciente\\.correo\\.config option:selected').text();
                if ($("#paciente\\.correo\\.copia").val() !== ""){
                    correo = correo + ";" + $("#paciente\\.correo\\.copia").val();
                }
            }
            else{
                correo = $("#paciente\\.correo\\.copia").val()
            }

            var valores = {
                user_id: $("#id-paciente").val(),
                img_id: "[" + fotosArreglo.toString() + "]",
                studyDate: StudyDate,
                user_email: correo
            }
            alert("Enviando correo, espere un momento");
            $.post(serverURL + "imagenes/send", valores).done(function (data) {
                alert("Correo Enviado");
            });
        });

        $("#eliminarFotos").on("click", function() {
            var contadorIMG = 0;
            $("input[name='fotosElegidas']").each(function() {
                if (this.checked == true) {
                    $(this).parent().parent().parent().addClass("d-none");
                    contadorIMG = contadorIMG + 1
                    this.checked = false;
                }; 
            });

            if (contadorIMG <1){
                alert("Debe seleccionar al menos una imágen");
                return true;
            }
        });

        getExmPrimTrim();
    });
});

$(document).ready(function(){
    $("#eco\\.prim\\.modificar").on("click", function(){
        $("#eco\\.prim\\.nuevo").addClass("d-none");
        $("#eco\\.prim\\.modificar").addClass("d-none");
        $("#eco\\.prim\\.guardar").removeClass("d-none");
        $("#eco\\.prim\\.cancelar").removeClass("d-none");
        $("#eco\\.prim\\.eliminar").addClass("d-none");
        $("#lcn").attr("readonly", false);
        $("#saco").attr("readonly", false);
        $("#graficoLcn").addClass("d-none");
        $("#graficoSaco").addClass("d-none");
        $("#fum-cuatro").attr("readonly", true);
        $("#semanasEcoPrim").attr("readonly", true);
        $("#diasEcoPrim").attr("readonly", true);
        $("#modalPreInfEcoPrimTrim").addClass("d-none");
    });
    $("#eco\\.prim\\.guardar").on("click", function(){
        $("#eco\\.prim\\.nuevo").removeClass("d-none");
        $("#eco\\.prim\\.guardar").addClass("d-none");
        $("#eco\\.prim\\.cancelar").addClass("d-none");
        $("#lcn").attr("readonly", true);
        $("#saco").attr("readonly", true);
        $("#graficoLcn").removeClass("d-none");
        $("#graficoSaco").removeClass("d-none");
        $("#fum-cuatro").attr("readonly", false);
        $("#semanasEcoPrim").attr("readonly", false);
        $("#diasEcoPrim").attr("readonly", false);
        $("#modalPreInfEcoPrimTrim").removeClass("d-none");

        let examen = {
            examen: 1,
            embrion: $("#lcn").val(),
            saco: $("#saco").val()
        }
        
        let data = {
            id: $("#id-paciente").val(),
            tipo: 1,
            data: JSON.stringify(examen)
        }

        $.post(serverURL + "examen/set/", data).done(function(response) {
            if ( Object.keys(response).length > 0 ){
                $("#table\\.ecografia\\.primtrim").empty();
                $.each(response.data, function(i,val){
                    let fila = "<tr><th scope='row'>"+ val.n_examen +"</th><td>" + val.embrion +"</td><td>"+ val.prom_saco+"</td>";
                    $("#table\\.ecografia\\.primtrim").append(fila);
                });
            }
        });
    });
    $("#eco\\.prim\\.cancelar").on("click", function(){
        $("#eco\\.prim\\.nuevo").removeClass("d-none");
        $("#eco\\.prim\\.guardar").addClass("d-none");
        $("#eco\\.prim\\.cancelar").addClass("d-none");
        $("#lcn").attr("readonly", true);
        $("#saco").attr("readonly", true);
        $("#graficoLcn").removeClass("d-none");
        $("#graficoSaco").removeClass("d-none");
        $("#fum-cuatro").attr("readonly", false);
        $("#semanasEcoPrim").attr("readonly", false);
        $("#diasEcoPrim").attr("readonly", false);
        $("#modalPreInfEcoPrimTrim").removeClass("d-none");
    });
    $("#eco\\.prim\\.eliminar").on("click", function(){
        alert("bla");
    });
});


//funciones para buscar

function getExmPrimTrim(){
    let data = {
        id: $("#id-paciente").val(),
        tipo: 1,
    }

    $.post(serverURL + "examen/get/", data).done(function(response) {
        if (Object.keys(response).length > 0 ){
            $("#table\\.ecografia\\.primtrim").empty();
            $.each(response.data, function(i,val){
                let fila = "<tr><th scope='row'>"+ val.n_examen +"</th><td>" + val.embrion +"</td><td>"+ val.prom_saco+"</td>";
                $("#table\\.ecografia\\.primtrim").append(fila);
            });
        }
    });
}

function delExmPrimTrim(){
    let data = {
        id: $("#id-paciente").val(),
        tipo: 1,
        examen:1
    }

    $.post(serverURL + "examen/get/", data).done(function(response) {
        if (Object.keys(response).length > 0 ){
            $("#table\\.ecografia\\.primtrim").empty();
            $.each(response.data, function(i,val){
                let fila = "<tr><th scope='row'>"+ val.n_examen +"</th><td>" + val.embrion +"</td><td>"+ val.prom_saco+"</td>";
                $("#table\\.ecografia\\.primtrim").append(fila);
            });
        }
    });
}