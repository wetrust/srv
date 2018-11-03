$(document).ready(function(){
    cargarTabla();
    cargarActividad();
    cargarLugar();
    cargarTiempo();
    cargarParticipante();
 
    $("#boton\\.usuarios").on("click", function(){
        $("#dialog\\.title").html("Listado de usuarios");
        $("#dialog\\.delete").remove();
        $("#dialog\\.view").modal("show");
        $("#dialog\\.body").html('<div class="row"><div class="col"><div class="table-responsive"><table class="table table-striped"><thead class="thead-dark"><tr><th scope="col">#</th><th scope="col">Nombre</th><th scope="col">Correo</th></tr></thead><tbody id="tabla.usuarios"></tbody></table></div></div></div>');
    
        var data = {
            accion: "usuarios"
        }

        $.post("https://servidor.crecimientofetal.cl/apuntes/api", data).done(function(response){
            if (Object.keys(data).length > 0) {
                $.each(response, function(i, item) {
                    let fila = '<tr><th scope="row">' + item["user_id"] + '</th><td>' + item["user_name"] + '<td class="columna-user">' + item["user_email"] + '<button type="button" data-id="' + item["user_id"] + '" class="btn btn-outline-warning px-3 eliminar-user float-right d-none"><i class="fas fa-trash"></i></button></td></tr>';
                    $("#tabla\\.usuarios").append(fila);
                });

                $(".columna-user").on("mouseenter",function(){
                    $(this).children("button").removeClass("d-none");
                }).on("mouseleave", function(){
                    $(this).children("button").addClass("d-none");
                });
        
                $(".eliminar-user").on("click", function(){
                    let usuario_id = $(this).data("id");
                    $("#dialog\\.delete").remove();
                    $("#dialog\\.title").html('Eliminar Usuario')
                    $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el usuario?</p>')
                    $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" data-id="' + usuario_id + '">Eliminar</button>');
        
                    $("#dialog\\.delete").on("click", function(){
                        let usuario_id = $(this).data("id");
                        var solicitud = {
                            accion: "eliminarUsuario",
                            id: usuario_id
                        };
                        $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                            $("#dialog\\.body").empty();
                            $("#boton\\.usuarios").trigger("click");
                        });
                    });
                    $("#dialog\\.view").modal("show");
                });
            }
        });
    });

    $("#formulario\\.actividad").on("change", function(){
        if ($("#boton\\.guardar").hasClass("d-none") == false){
            $("#formulario\\.nombre").focus();
        }
    });
    
    $("#boton\\.lista").on("click", function(){
        cargarTabla();
    });
    $("#boton\\.listd").on("click", function(){
        cargarTabla(1);
    });

    $('#formulario\\.fecha').datepicker().on('changeDate', function(ev) {
        $(this).datepicker('hide');
    });

    $('#formulario\\.fcancelacion').datepicker().on('changeDate', function(ev) {
        $(this).datepicker('hide');
    });

    $("#boton\\.calculos").on("click", function(){
        var dateTime = new Date();
        var day = ("0" + dateTime.getDate()).slice(-2);
        var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);

        $("#dialog\\.title").html("Tabla resumen según fechas y/o eventos");
        $("#dialog\\.delete").remove();
        $("#dialog\\.view").modal("show");
        $("#dialog\\.body").html('<div class="row"> <div class="col"> <div class="form-group"><label for="calculos.fecha.uno">Fecha inicial</label><input type="text" class="form-control" id="calculos.fecha.uno" data-date-format="dd/mm/yyyy"></div></div><div class="col"> <div class="form-group"><label for="calculos.fecha.uno">Fecha final</label><input type="text" class="form-control" id="calculos.fecha.dos" data-date-format="dd/mm/yyyy"></div></div></div><div class="row"> <div class="col"> <div class="table-responsive"> <table class="table table-striped"> <thead class="thead-dark"> <tr> <th scope="col">#</th> <th scope="col">Nombre</th><th scope="col">Tipo de evento</th> <th scope="col">Fecha</th> <th scope="col">Primer participante</th><th scope="col">Valor cancelado</th> </tr></thead> <tbody id="tabla.calculos"></tbody> </table> </div></div></div><div class="row"><div class="col-4"> <div class="form-group"><label for="calculos.formulario.actividad"><strong>Tipo de evento</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="calculos.formulario.actividad"></select></div></div> <div class="col-4"> <div class="form-group"><label for="calculos.formulario.lugar"><strong>Lugar del evento</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="calculos.formulario.lugar"></select></div></div><div class="col-4"> <div class="form-group"><label for="calculos.formulario.cancelacion"><strong>Cierre del evento</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="calculos.formulario.cancelacion"><option value="99">Todos</option><option value="0">Pendiente</option><option value="1">Realizado</option><option value="2">Cancelado</option><option value="3">Suspendido</option></select></div></div></div>');

        cargarActividad();
        cargarLugar();
        $("#calculos\\.fecha\\.uno").val(day + "/" + month + "/" + dateTime.getFullYear());
        $("#calculos\\.fecha\\.uno").datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
        $("#calculos\\.fecha\\.dos").val(day + "/" + month + "/" + dateTime.getFullYear());
        $("#calculos\\.fecha\\.dos").datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());

        $('#calculos\\.fecha\\.uno').datepicker().on('changeDate', function(ev) {
            $(this).trigger("change");$(this).datepicker('hide');
        });

        $('#calculos\\.fecha\\.dos').datepicker().on('changeDate', function(ev) {
            $(this).trigger("change");$(this).datepicker('hide');
        });

        $("#calculos\\.fecha\\.uno").on("change", function(){updateCalculos();});
        $("#calculos\\.fecha\\.dos").on("change", function(){updateCalculos();});
        $("#calculos\\.formulario\\.lugar").on("change", function(){updateCalculos();});
        $("#calculos\\.formulario\\.actividad").on("change", function(){updateCalculos();});
        $("#calculos\\.formulario\\.cancelacion").on("change", function(){updateCalculos();});
        updateCalculos();
    });

    $("#boton\\.aplicar").on("click", function(){
        if ($("#boton\\.guardar").hasClass("d-none") == false){
            if ($("#formulario\\.actividad").val() == 0){
                $("#formulario\\.comentarios").val("- DIAGNOSTICO :\n\n- OPERACIÓN     :\n\n- PREVISIÓN       :\n\nEQUIPO QUIRÚRGICO.\n\n- Obstetra       :\n\n- Matrona       :\n\n- Pediatra       :\n\n- Anestesista :\n\n- Ayudante     :\n\n- Arsenalera   :"); 
            }
            else if ($("#formulario\\.actividad").val() == 1){
                $("#formulario\\.comentarios").val("- DIAGNOSTICO :\n\n- OPERACIÓN     :\n\n- PREVISIÓN       :\n\nEQUIPO QUIRÚRGICO.\n\n- Obstetra       :\n\n- Matrona       :\n\n- Pediatra       :\n\n- Anestesista :");
            }
            else if ($("#formulario\\.actividad").val() == 2){
                $("#formulario\\.comentarios").val("- DIAGNOSTICO :\n\n- OPERACIÓN     :\n\n- PREVISIÓN       :\n\nEQUIPO QUIRÚRGICO.\n\n- Cirujano            :\n\n- Ayudante           :\n\n- Anestesista       :\n\n- Arsenalera          :");
            }
            else if ($("#formulario\\.actividad").val() == 3){
                $("#formulario\\.comentarios").val("- CIRUJANO DR      :\n\n- DIAGNOSTICO     :\n\n- OPERACIÓN         :\n\n- PREVISIÓN           :");
            }
            else if ($("#formulario\\.actividad").val() == 4){
                $("#formulario\\.comentarios").val("-- FUR :\n-- EGE:\n\nECOGRAFIA 1° TRIMESTRE\n-- SACO :\n-- EMBRIÓN :\n-- ANEXOS :\n-- DOUGLAS :\n\nECOGRAFIA 2° - 3° TRIMESTRE\n-- DESCRIPCIÓN GENERAL:\n-- PLACENTA :\n-- LIQUIDO AMNIÓTICO :\n-- ASPECTO MORFOLÓGICO:\n\nBIOMETRIA FETAL\n-- DBP :\n-- DOF :\n-- CC :\n-- CA :\n-- LF :\n-- LH :\n\nDOPPLER MATERNO / FETAL\n-- UT. DERECHA\n-- UT. IZQUIERDA\n-- PROMEDIO UT.\n-- UMBILICAL\n-- C. MEDIA\n-- CUOCIENTE CP\n\nCONCLUSIÓN ECOGRAFICA:");
            }
            else if ($("#formulario\\.actividad").val() == 5){
                $("#formulario\\.comentarios").val("--TEMARIO\n\n--PARTICIPANTES\n\n--CONCLUSIONES");
            }
            else{
                $("#formulario\\.comentarios").val("");
            }
        }
    });

    $("#boton\\.home").on("click", function(){

        var dateTime = new Date();
        var day = ("0" + dateTime.getDate()).slice(-2);
        var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);

        $("#formulario\\.id").val("");
        $("#formulario\\.fecha").val(day + "/" + month + "/" + dateTime.getFullYear());
        $('#formulario\\.fecha').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
        $('#formulario\\.nombre').val("");
        $("#formulario\\.hora").val("");
        $("#formulario\\.minutos").val("");
        $("#formulario\\.participante").val("");
        $("#formulario\\.actividad").val("");
        $("#formulario\\.lugar").val("");
        $("#formulario\\.cancelacion").val("");
        $("#formulario\\.fcancelacion").val(day + "/" + month + "/" + dateTime.getFullYear());
        $('#formulario\\.fcancelacion').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
        $("#formulario\\.valor").val("0");
        $("#formulario\\.comentarios").val("");
        $("#formulario\\.palabras").val("");
        $("#boton\\.editar").addClass("d-none");
    });

    $("#caja\\.busqueda").on("keydown", function( event ) {
        if ( event.which == 13 ) {
            var data ={
                accion: "busqueda",
                texto: $(this).val()
            }
    
            $.post("https://servidor.crecimientofetal.cl/apuntes/api", data).done(function(response){
                $("#contenedor\\.tarjetas").empty();
                $("#boton\\.editar").addClass("d-none");
                $.each(response, function(i, item) {
                    let fila = '<div class="card"><div class="card-body p-3"><div class="row apunte" data-id="' + item["apunte_id"] + '"><div class="col text-truncate"><p class="my-2">' + item["apunte_nombre"] +'</p></div><div class="col-4 d-none"><button type="button" data-id="' + item["apunte_id"] + '" class="btn btn-outline-warning px-3 eliminar"><i class="fas fa-trash"></i></button></div></div></div></div>';
                    $("#contenedor\\.tarjetas").append(fila);
                });
        
                $(".apunte").on("mouseenter", function(){
                    $(this).children(".col-4").removeClass("d-none");
                    $(this).parent().parent().addClass("bg-secondary").addClass("text-white");
                }).on("mouseleave", function(){
                    $(this).children(".col-4").addClass("d-none");
                    $(this).parent().parent().parent().children().each(function(i){
                        $(this).removeClass("bg-secondary").removeClass("text-white");;
                    });
                }).on("click",function(){
        
                    if ($("#formulario\\.actividad").is(':disabled') == false){
                        $("#dialog\\.delete").remove();
                        $("#dialog\\.title").html('Guardar cambios')
                        $("#dialog\\.body").html('<p class="text-center">¿Quiere guardar los cambios efectuados antes de salir?</p>')
                        $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" >Guardar</button>');
                        $("#dialog\\.view").modal("show");
        
                        $("#dialog\\.delete").on("click", function(){
                            guardarAutomatico();
                            $("#dialog\\.view").modal("hide");
                            $('#formulario\\.nombre').attr("disabled", true);
                            $("#formulario\\.fecha").attr("disabled", true);
                            $("#formulario\\.hora").attr("disabled", true);
                            $("#formulario\\.minutos").attr("disabled", true);
                            $("#formulario\\.participante").attr("disabled", true);
                            $("#formulario\\.actividad").attr("disabled", true);
                            $("#formulario\\.lugar").attr("disabled", true);
                            $("#formulario\\.cancelacion").attr("disabled", true);
                            $('#formulario\\.fcancelacion').attr("disabled", true);
                            $("#formulario\\.valor").attr("disabled", true);
                            $("#formulario\\.comentarios").attr("disabled", true);
                            $("#formulario\\.palabras").attr("disabled", true);
                        });
                    }
                    else{
                        $("#boton\\.editar").removeClass("d-none");
                        let apunte_id = $(this).data("id");
        
                        var solicitud = {
                            accion: "apunte",
                            id: apunte_id
                        };
        
                        $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                            $("#formulario\\.id").val(data.apunte_id);
                            $("#formulario\\.fecha").val(data.apunte_date);
                            $('#formulario\\.fecha').datepicker('setValue', data.apunte_date);
                            $('#formulario\\.nombre').val(data.apunte_nombre);
                            $("#formulario\\.hora").val(data.apunte_hour);
                            $("#formulario\\.minutos").val(data.apunte_minute);
                            $("#formulario\\.participante").val(data.apunte_participante);
                            $("#formulario\\.actividad").val(data.apunte_activity);
                            $("#formulario\\.lugar").val(data.apunte_location);
                            $("#formulario\\.cancelacion").val(data.apunte_cancellation);
                            $("#formulario\\.fcancelacion").val(data.apunte_fcancellation);
                            $('#formulario\\.fcancelacion').datepicker('setValue', data.apunte_fcancellation);
                            $("#formulario\\.valor").val(data.apunte_cost);
                            $("#formulario\\.comentarios").val(data.apunte_text);
                            $("#formulario\\.palabras").val(data.apunte_keywords);
                        });
                    }
                });
        
                $(".eliminar").on("click",function(){
                    let apunte_id = $(this).data("id");
                    $("#dialog\\.delete").remove();
                    $("#dialog\\.title").html('Eliminar Evento')
                    $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el evento seleccionado?</p>')
                    $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" data-id="' + apunte_id + '">Eliminar</button>');
        
                    $("#dialog\\.delete").on("click", function(){
                        let apunte_id = $(this).data("id");
                        var solicitud = {
                            accion: "eliminar",
                            id: apunte_id
                        };
        
                        $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                            cargarTabla();
                            $("#dialog\\.delete").remove();
                            $("#dialog\\.view").modal("hide");
        
                            var dateTime = new Date();
                            var day = ("0" + dateTime.getDate()).slice(-2);
                            var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
        
                            $("#formulario\\.id").val("").attr("disabled", true);
                            $("#formulario\\.fecha").val(day + "/" + month + "/" + dateTime.getFullYear()).attr("disabled", true);
                            $('#formulario\\.fecha').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
                            $("#formulario\\.hora").val("").attr("disabled", true);
                            $("#formulario\\.minutos").val("").attr("disabled", true);
                            $('#formulario\\.nombre').val("").attr("disabled", true);
                            $("#formulario\\.participante").val("").attr("disabled", true);
                            $("#formulario\\.actividad").val("").attr("disabled", true);
                            $("#formulario\\.lugar").val("").attr("disabled", true);
                            $("#formulario\\.cancelacion").val("").attr("disabled", true);
                            $("#formulario\\.fcancelacion").val(day + "/" + month + "/" + dateTime.getFullYear()).attr("disabled", true);
                            $('#formulario\\.fcancelacion').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
                            $("#formulario\\.valor").val("0").attr("disabled", true);
                            $("#formulario\\.comentarios").val("").attr("disabled", true);
                            $("#formulario\\.palabras").val("").attr("disabled", true);
                        });
                    });
                    $("#dialog\\.view").modal("show");
                });
            });
        }
    });
       

    $("#boton\\.imprimir").on("click", function(){
        let texto = $("#formulario\\.comentarios").val();
        //let tipo = $("#formulario\\.actividad").val();

        if (texto.length > 0){
            let informe = "";

            //if (tipo == 5){
            //    informe = '<html lang="es"><head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"> <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"> <title>Notas de apuntes</title></head><body> <h1 class="text-center mt-5 mb-4 pt-5">Informe de apuntes, eventos, reuniones</h1> <hr style="border-width:4px;"> <div class="row"> <div class="col"> <h4><strong>Tipo del evento</strong> :TIPOEV</h4></div><div class="col"> <h4><strong>Nombre</strong> :NOMBRE</h4></div></div><div class="row"> <div class="col"> <h4><strong>Fecha</strong> :FECHA</h4></div><div class="col"> <h4><strong>Hora</strong> :HORA, <strong>Minutos</strong> :MINUTOS</h4></div></div><div class="row"> <div class="col"> <h4><strong>Primer participantes</strong> :PARTICIPANTE</h4></div></div><div class="row"> <div class="col"> <h4><strong>Otros participantes</strong> :PALABRAS</h4></div></div><div class="row"> <div class="col"> <h4><strong>Lugar del evento</strong> :LUGAR</h4></div></div><div class="row"> <div class="col"> <h4><strong>Cierre del evento</strong> :CANCELACION</h4></div></div><hr style="border-width:4px;"><div class="row"> <div class="col"> <h3><strong>Comentarios generales relativos al evento selecionado</strong></h3><hr style="border-width:4px;"><h5>:COMENTARIOS</h5></div></div><script>:SCRIPT</script></body></html>';
            //}
            //else{
                informe = '<html lang="es"><head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"> <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"> <title>Notas de apuntes</title></head><body> <h1 class="text-center mt-5 mb-4 pt-5">Informe de apuntes, eventos, reuniones</h1> <hr style="border-width:4px;"> <div class="row"> <div class="col"> <h4><strong>Tipo del evento</strong> :TIPOEV</h4></div><div class="col"> <h4><strong>Nombre</strong> :NOMBRE</h4></div></div><div class="row"> <div class="col"> <h4><strong>Fecha</strong> :FECHA</h4></div><div class="col"> <h4><strong>Hora</strong> :HORA, <strong>Minutos</strong> :MINUTOS</h4></div></div><div class="row"> <div class="col"> <h4><strong>Primer participantes</strong> :PARTICIPANTE</h4></div></div><div class="row"> <div class="col"> <h4><strong>Otros participantes</strong> :PALABRAS</h4></div></div><div class="row"> <div class="col"> <h4><strong>Lugar del evento</strong> :LUGAR</h4></div></div><div class="row"> <div class="col"> <h4><strong>Cierre del evento</strong> :CANCELACION</h4></div></div><div class="row"> <div class="col"> <h4><strong>Fecha de cancelación</strong> :FCANCELACION</h4></div></div><div class="row"> <div class="col"> <h4><strong>Valor cancelado</strong> :VALOR</h4></div></div><hr style="border-width:4px;"><div class="row"> <div class="col"> <h3><strong>Comentarios generales relativos al evento selecionado</strong></h3><hr style="border-width:4px;"><h5>:COMENTARIOS</h5></div></div><script>:SCRIPT</script></body></html>';
            //}
            let tipoev = $("#formulario\\.actividad option:selected").text()
            let nombre = $("#formulario\\.nombre").val();
            let fecha  = $("#formulario\\.fecha").val();
            let hora  = $("#formulario\\.hora").val();
            let minutos = $("#formulario\\.minutos").val();
            let participante = $("#formulario\\.participante option:selected").text()
            let palabras  = $("#formulario\\.palabras").val();
            let lugar  = $("#formulario\\.lugar option:selected").text()
            let cancelacion  = $("#formulario\\.cancelacion option:selected").text()
            let fcancelacion = "";
            let valor = "";
            
            //if (tipo !== 5){
                fcancelacion  = $("#formulario\\.fcancelacion").val();
                valor = $("#formulario\\.valor").val();
            //}

            let comentarios = $("#formulario\\.comentarios").val().replace(/\r\n|\r|\n/g,"<br />");
            let escript = 'document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});';
            informe = informe.replace(":TIPOEV", tipoev);
            informe = informe.replace(":NOMBRE", nombre);
            informe = informe.replace(":FECHA", fecha);
            informe = informe.replace(":HORA", hora);
            informe = informe.replace(":MINUTOS", minutos);
            informe = informe.replace(":PARTICIPANTE", participante);
            informe = informe.replace(":PALABRAS", palabras);
            informe = informe.replace(":LUGAR", lugar);
            informe = informe.replace(":CANCELACION", cancelacion);
            //if (tipo !== 5){
                informe = informe.replace(":FCANCELACION", fcancelacion);
                informe = informe.replace(":VALOR", valor);
            //}
            informe = informe.replace(":COMENTARIOS", comentarios);
            informe = informe.replace(":SCRIPT", escript);

            var ventimp = window.open(" ", "popimpr");
            ventimp.document.write(informe);
            ventimp.document.close();
        }
        else{
            $("#dialog\\.delete").remove();
            $("#dialog\\.title").html('Advertencia')
            $("#dialog\\.body").html('<p class="text-center">Debe seleccionar un evento incluyendo comentarios relativos al evento.</p>');
            $("#dialog\\.view").modal("show");
        }
    });

    $("#boton\\.buscar").on("click", function(){
        if ($("#div\\.busqueda").hasClass("d-none")){
            $("#div\\.busqueda").removeClass("d-none");
        }
        else{
            $("#div\\.busqueda").addClass("d-none");
        }
    });

    $("#boton\\.configuracion").on("click", function(){
        $("#dialog\\.title").html("Configuración");
        $("#dialog\\.delete").remove();
        $("#dialog\\.view").modal("show");
        $("#dialog\\.body").html('<ul class="nav nav-tabs" id="myTab" role="tablist"> <li class="nav-item"> <a class="nav-link active show" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Tipo de evento</a> </li><li class="nav-item"> <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Lugar de evento</a> </li><li class="nav-item"> <a class="nav-link" id="profile-tab" data-toggle="tab" href="#participante" role="tab" aria-controls="participante" aria-selected="false">Primer participante</a> </li></ul><div class="tab-content" id="myTabContent"> <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <div class="btn-group" role="group" aria-label="Menú"> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.lugar.nuevo" title="Nueva lugar"><i class="fas fa-pen"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.lugar.guardar" title="Nueva lugar"><i class="fas fa-save"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.lugar.cancelar" title="Nueva lugar"><i class="fas fa-ban"></i></button> </div><div class="row d-none" id="div.lugar"> <div class="form-group col"> <label for="lugar.texto">Nombre del Lugar</label> <input type="text" class="form-control" id="lugar.texto"> </div></div><table class="table table-hover"> <thead class="table-success"> <tr> <th scope="col">#</th> <th scope="col">Nombre del Lugar</th> </tr></thead> <tbody id="tabla.lugar"> </tbody> </table> </div><div class="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab"> <div class="row"> <div class="col-4"> <div class="btn-group" role="group" aria-label="Menú"> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.actividad.nuevo" title="Nueva actividad"><i class="fas fa-pen"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.actividad.guardar" title="Nueva actividad"><i class="fas fa-save"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.actividad.cancelar" title="Nueva actividad"><i class="fas fa-ban"></i></button> </div></div><div class="col-8 pt-2"> <div class="form-row align-items-center"> <div class="col-auto"> <label>¿Activar configuración predeterminados?</label> </div><div class="col-auto"> <div class="form-check"> <input class="form-check-input" type="checkbox" id="actividad.preset"> <label class="form-check-label" for="actividad.preset">No</label> </div></div></div></div></div><div id="div.actividad" class="row border border-primary my-3 mx-0 d-none"> <div class="form-group col"> <label for="actividad.texto">1.- Nombre del tipo de evento</label> <input type="text" class="form-control" id="actividad.texto"> </div><div class="form-group col"> <label for="actividad.predefinido">2.- ¿Incluye texto predefinido?</label><div class="form-check"> <input class="form-check-input" type="checkbox" id="actividad.predefinido"><label for="actividad.predefinido">No</label></div></div><div class="form-group col-12 d-none" id="div.actividad.text"> <label for="actividad.text.default">3.- Comentarios relativos al evento; operación, reunión, etc. Predeterminado</label><textarea id="actividad.text.default" class="form-control border" rows="10"></textarea> </div></div><table class="table table-hover"> <thead class="table-success"> <tr><th scope="col">Nombre del tipo de evento</th> <th scope="col">Texto Predefinido</th> </tr></thead> <tbody id="tabla.actividad"> </tbody> </table> </div><div class="tab-pane fade" id="participante" role="tabpanel" aria-labelledby="participante-tab"> <div class="btn-group" role="group" aria-label="Menú"> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.participante.nuevo" title="Nuevo participante"><i class="fas fa-pen"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.participante.guardar" title="Nueva lugar"><i class="fas fa-save"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.participante.cancelar" title="Nueva lugar"><i class="fas fa-ban"></i></button> </div><div class="row d-none" id="div.participante"> <div class="form-group col"> <label for="participante.texto">Nombre del participante</label> <input type="text" class="form-control" id="participante.texto"> </div></div><table class="table table-hover"> <thead class="table-success"> <tr> <th scope="col">#</th> <th scope="col">Nombre del participante</th> </tr></thead> <tbody id="tabla.participante"> </tbody> </table> </div></div>');
        cargarActividad();
        cargarLugar();
        cargarParticipante();

        //verificar si cargo preset
        var formulario = {
            accion: "predeterminados"
        };

        $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
            if (Object.keys(data).length > 0) {
                $('#actividad\\.preset').prop("checked", parseInt(data.user_actividad) === 1 ? true : false);
                $('#actividad\\.preset').parent().children("label").text(parseInt(data.user_actividad) === 1 ? "Si" : "No");
                $('#actividad\\.preset').on("click", function(){
                    $("#dialog\\.delete").remove();
                    $("#dialog\\.title").html('Configuración predeterminada para Tipo de evento');
                    if(this.checked == false) {
                        $("#dialog\\.body").html('<div class="row"> <div class="col-8"> <p class="text-center">¿Está seguro de eliminar la configuración predeterminada para tipo de evento?</p></div><div class="col-4"><button type="button" class="btn btn-primary" id="dialog.cancel">NO</button><button type="button" class="btn btn-danger" id="dialog.delete" data-id="0">SI</button> </div></div>');
                    }
                    else{
                        $("#dialog\\.body").html('<div class="row"> <div class="col-8"> <p class="text-center">¿Desea añadir configuración predeterminada para tipo de evento?</p></div><div class="col-4"><button type="button" class="btn btn-primary" id="dialog.cancel">NO</button><button type="button" class="btn btn-danger" id="dialog.delete" data-id="1">SI</button> </div></div>');
                    }
                    
                    $("#dialog\\.footer").children("button").addClass("d-none");
                    $("#dialog\\.delete").on("click", function(){
                        let que = $(this).data("id");
                        var formulario = {};

                        if (que == 1){

                            formulario = {
                                accion: "nuevoActividad",
                                actividad_text: "Reuniones",
                                actividad_preset: 1,
                                actividad_apuntes: "--TEMARIO<br /><br />--PARTICIPANTES<br /><br />--CONCLUSIONES"
                            }
                            $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                                
                                formulario = {
                                    accion: "nuevoActividad",
                                    actividad_text: "Exm. Ecografico",
                                    actividad_preset: 1,
                                    actividad_apuntes: "-- FUR :<br />-- EGE:<br /><br />ECOGRAFIA 1° TRIMESTRE<br />-- SACO :<br />-- EMBRIÓN :<br />-- ANEXOS :<br />-- DOUGLAS :<br /><br />ECOGRAFIA 2° - 3° TRIMESTRE<br />-- DESCRIPCIÓN GENERAL:<br />-- PLACENTA :<br />-- LIQUIDO AMNIÓTICO :<br />-- ASPECTO MORFOLÓGICO:<br /><br />BIOMETRIA FETAL<br />-- DBP :<br />-- DOF :<br />-- CC :<br />-- CA :<br />-- LF :<br />-- LH :<br /><br />DOPPLER MATERNO / FETAL<br />-- UT. DERECHA<br />-- UT. IZQUIERDA<br />-- PROMEDIO UT.<br />-- UMBILICAL<br />-- C. MEDIA<br />-- CUOCIENTE CP<br /><br />CONCLUSIÓN ECOGRAFICA:"
                                }
                            
                                $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                                    
                                    formulario = {
                                        accion: "nuevoActividad",
                                        actividad_text: "Parto cesárea",
                                        actividad_preset: 1,
                                        actividad_apuntes: "- DIAGNOSTICO :<br /><br />- OPERACIÓN     :<br /><br />- PREVISIÓN       :<br /><br />EQUIPO QUIRÚRGICO.<br /><br />- Obstetra       :<br /><br />- Matrona       :<br /><br />- Pediatra       :<br /><br />- Anestesista :<br /><br />- Ayudante     :<br /><br />- Arsenalera   :"
                                    }

                                    $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                                        
                                        formulario = {
                                            accion: "nuevoActividad",
                                            actividad_text: "Parto vaginal",
                                            actividad_preset: 1,
                                            actividad_apuntes: "- DIAGNOSTICO :<br /><br />- OPERACIÓN     :<br /><br />- PREVISIÓN       :<br /><br />EQUIPO QUIRÚRGICO.<br /><br />- Obstetra       :<br /><br />- Matrona       :<br /><br />- Pediatra       :<br /><br />- Anestesista :"
                                        }
                                    
                                        $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                                            
                                            formulario = {
                                                accion: "nuevoActividad",
                                                actividad_text: "Otra operación",
                                                actividad_preset: 1,
                                                actividad_apuntes: "- DIAGNOSTICO :<br /><br />- OPERACIÓN     :<br /><br />- PREVISIÓN       :<br /><br />EQUIPO QUIRÚRGICO.<br /><br />- Cirujano            :<br /><br />- Ayudante           :<br /><br />- Anestesista       :<br /><br />- Arsenalera          :"
                                            }
                                        
                                            $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                                                
                                                formulario = {
                                                    accion: "nuevoActividad",
                                                    actividad_text: "Ayudantía op.",
                                                    actividad_preset: 1,
                                                    actividad_apuntes: "- CIRUJANO DR      :<br /><br />- DIAGNOSTICO     :<br /><br />- OPERACIÓN         :<br /><br />- PREVISIÓN           :"
                                                }
                                            
                                                $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                                                    
                                                    formulario = {
                                                        accion: "predeterminadosChange"
                                                    };
                                            
                                                    $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                                                        if (Object.keys(data).length > 0) {
                                                            if (data.resultado == false){
                                                                alert("Hubo un error al procesar");
                                                            }
                                                            $("#boton\\.configuracion").trigger("click");
                                                            $("#dialog\\.footer").children("button").removeClass("d-none");
                                                        }
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        }
                        else{

                            $("#formulario\\.actividad").each(function(i,data){
                                alert(i);
                                alert(data);
                            });
                            formulario = {
                                accion: "predeterminadosChange"
                            };
                    
                            $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                                if (Object.keys(data).length > 0) {
                                    if (data.resultado == false){
                                        alert("Hubo un error al procesar");
                                    }
                                    $("#boton\\.configuracion").trigger("click");
                                    $("#dialog\\.footer").children("button").removeClass("d-none");
                                }
                            });
                        }
                    });
                    $("#dialog\\.cancel").on("click", function(){
                        $("#boton\\.configuracion").trigger("click");
                        $("#dialog\\.footer").children("button").removeClass("d-none");
                    });
                    $("#dialog\\.view").modal("show");
                });
            }
        });

        $("#boton\\.actividad\\.nuevo").on("click", function(){
            $("#div\\.actividad").removeClass("d-none");
            $("#boton\\.actividad\\.nuevo").addClass("d-none");
            $("#boton\\.actividad\\.guardar").removeClass("d-none");
            $("#boton\\.actividad\\.cancelar").removeClass("d-none");
        });

        $("#actividad\\.predefinido").on("click", function(){
            if(this.checked) {
                $(this).parent().children("label").text("Si");
                $("#div\\.actividad\\.text").removeClass("d-none");
            }else{
                $(this).parent().children("label").text("No");
                $("#div\\.actividad\\.text").addClass("d-none");
                $("#actividad\\.text\\.default").val("");
            }
        });
        $("#boton\\.actividad\\.guardar").on("click", function(){
            $("#div\\.actividad").addClass("d-none");
            $("#boton\\.actividad\\.nuevo").removeClass("d-none");
            $("#boton\\.actividad\\.guardar").addClass("d-none");
            $("#boton\\.actividad\\.cancelar").addClass("d-none");

            let predefinido = $("#actividad\\.predefinido").is(":checked") == true ? 1 : 0;
            var formulario = {
                accion: "nuevoActividad",
                actividad_text: $("#actividad\\.texto").val(),
                actividad_preset: predefinido,
                actividad_apuntes: $("#actividad\\.text\\.default").val().replace(/\r\n|\r|\n/g,"<br />")
            };

            $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                cargarActividad();
                $("#actividad\\.predefinido").prop("checked", false).parent().children("label").text("No");
                $("#actividad\\.texto").val("");
                $("#actividad\\.text\\.default").val("");
                $("#div\\.actividad\\.text").addClass("d-none");
            });
        });

        $("#boton\\.actividad\\.cancelar").on("click", function(){
            $("#div\\.actividad").addClass("d-none");
            $("#boton\\.actividad\\.nuevo").removeClass("d-none");
            $("#boton\\.actividad\\.guardar").addClass("d-none");
            $("#boton\\.actividad\\.cancelar").addClass("d-none");
            $("#actividad\\.texto").val("");
        });

        $("#boton\\.lugar\\.nuevo").on("click", function(){
            $("#div\\.lugar").removeClass("d-none");
            $("#boton\\.lugar\\.nuevo").addClass("d-none");
            $("#boton\\.lugar\\.guardar").removeClass("d-none");
            $("#boton\\.lugar\\.cancelar").removeClass("d-none");
        });
        
        $("#boton\\.lugar\\.guardar").on("click", function(){
            $("#div\\.lugar").addClass("d-none");
            $("#boton\\.lugar\\.nuevo").removeClass("d-none");
            $("#boton\\.lugar\\.guardar").addClass("d-none");
            $("#boton\\.lugar\\.cancelar").addClass("d-none");

            var formulario = {
                accion: "nuevoLugar",
                lugar_text: $("#lugar\\.texto").val(),
            };

            $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                cargarLugar();
                $("#lugar\\.texto").val("");
            });
        });

        $("#boton\\.lugar\\.cancelar").on("click", function(){
            $("#div\\.lugar").addClass("d-none");
            $("#boton\\.lugar\\.nuevo").removeClass("d-none");
            $("#boton\\.lugar\\.guardar").addClass("d-none");
            $("#boton\\.lugar\\.cancelar").addClass("d-none");
            $("#lugar\\.texto").val("");
        });

        $("#boton\\.participante\\.nuevo").on("click", function(){
            $("#div\\.participante").removeClass("d-none");
            $("#boton\\.participante\\.nuevo").addClass("d-none");
            $("#boton\\.participante\\.guardar").removeClass("d-none");
            $("#boton\\.participante\\.cancelar").removeClass("d-none");
        });
        
        $("#boton\\.participante\\.guardar").on("click", function(){
            $("#div\\.participante").addClass("d-none");
            $("#boton\\.participante\\.nuevo").removeClass("d-none");
            $("#boton\\.participante\\.guardar").addClass("d-none");
            $("#boton\\.participante\\.cancelar").addClass("d-none");

            var formulario = {
                accion: "nuevoParticipante",
                participante_text: $("#participante\\.texto").val(),
            };

            $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                cargarParticipante();
                $("#participante\\.texto").val("");
            });
        });

        $("#boton\\.participante\\.cancelar").on("click", function(){
            $("#div\\.participante").addClass("d-none");
            $("#boton\\.participante\\.nuevo").removeClass("d-none");
            $("#boton\\.participante\\.guardar").addClass("d-none");
            $("#boton\\.participante\\.cancelar").addClass("d-none");
            $("#participante\\.texto").val("");
        });
    });

    $("#opcion\\.financiera").on("click", function(){
        if ($(this).is(':checked')){
            $("#div\\.financiero").removeClass("d-none");
        }
        else{
            $("#div\\.financiero").addClass("d-none");
        } 
    });

    $("#boton\\.nuevo").on("click", function(){

        var dateTime = new Date();
        var day = ("0" + dateTime.getDate()).slice(-2);
        var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);

        $("#formulario\\.id").val("9999").attr("disabled", false);
        $("#formulario\\.fecha").val(day + "/" + month + "/" + dateTime.getFullYear()).attr("disabled", false);
        $('#formulario\\.fecha').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
        $("#formulario\\.hora").val("").attr("disabled", false);
        $("#formulario\\.minutos").val("").attr("disabled", false);
        $('#formulario\\.nombre').val("").attr("disabled", false);
        $("#formulario\\.participante").val("").attr("disabled", false);
        $("#formulario\\.actividad").val(5).attr("disabled", false);
        $("#formulario\\.lugar").val("").attr("disabled", false);
        $("#formulario\\.cancelacion").val("").attr("disabled", false);
        $("#formulario\\.fcancelacion").val(day + "/" + month + "/" + dateTime.getFullYear()).attr("disabled", false);
        $('#formulario\\.fcancelacion').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
        $("#formulario\\.valor").val("0").attr("disabled", false);
        $("#formulario\\.comentarios").val("").attr("disabled", false);
        $("#formulario\\.palabras").val("").attr("disabled", false);
        $("#boton\\.nuevo").addClass("d-none");
        $("#boton\\.guardar").removeClass("d-none");
        $("#boton\\.cancelar").removeClass("d-none");

        $("#boton\\.home").attr("disabled", true);
        $("#boton\\.configuracion").attr("disabled", true);
        $("#boton\\.buscar").attr("disabled", true);
        $("#boton\\.imprimir").attr("disabled", true);
        $("#boton\\.salir").attr("disabled", true);
        $("#boton\\.lista").attr("disabled", true);
        $("#boton\\.listd").attr("disabled", true);
        $("#boton\\.calculos").attr("disabled", true);
        $("#boton\\.usuarios").attr("disabled", true);
        $("#contenedor\\.tarjetas").empty();
    });

    $("#boton\\.editar").on("click", function(){
        $("#boton\\.nuevo").addClass("d-none");
        $(this).addClass("d-none");
        $("#boton\\.guardar").removeClass("d-none");
        $("#boton\\.cancelar").removeClass("d-none");

        $("#formulario\\.fecha").attr("disabled", false);
        $("#formulario\\.hora").attr("disabled", false);
        $("#formulario\\.minutos").attr("disabled", false);
        $('#formulario\\.nombre').attr("disabled", false);
        $("#formulario\\.participante").attr("disabled", false);
        $("#formulario\\.actividad").attr("disabled", false);
        $("#formulario\\.lugar").attr("disabled", false);
        $("#formulario\\.cancelacion").attr("disabled", false);
        $('#formulario\\.fcancelacion').attr("disabled", false);
        $("#formulario\\.valor").attr("disabled", false);
        $("#formulario\\.comentarios").attr("disabled", false);
        $("#formulario\\.palabras").attr("disabled", false);

        $("#boton\\.home").attr("disabled", true);
        $("#boton\\.configuracion").attr("disabled", true);
        $("#boton\\.buscar").attr("disabled", true);
        $("#boton\\.imprimir").attr("disabled", true);
        $("#boton\\.salir").attr("disabled", true);
        $("#boton\\.lista").attr("disabled", true);
        $("#boton\\.listd").attr("disabled", true);
        $("#boton\\.calculos").attr("disabled", true);
        $("#boton\\.usuarios").attr("disabled", true);
        $("#contenedor\\.tarjetas").empty();
    });

    $("#boton\\.guardar").on("click", function(){

        if ($("#formulario\\.valor").val() == ""){
            $("#formulario\\.valor").val("0");
        }

        guardarAutomatico();
        $("#boton\\.nuevo").removeClass("d-none");
        $("#boton\\.guardar").addClass("d-none");
        $("#boton\\.cancelar").addClass("d-none");

        cargarTabla();
        $("#formulario\\.fecha").attr("disabled", true);
        $("#formulario\\.hora").attr("disabled", true);
        $("#formulario\\.minutos").attr("disabled", true);
        $('#formulario\\.nombre').attr("disabled", true);
        $("#formulario\\.participante").attr("disabled", true);
        $("#formulario\\.actividad").attr("disabled", true);
        $("#formulario\\.lugar").attr("disabled", true);
        $("#formulario\\.cancelacion").attr("disabled", true);
        $('#formulario\\.fcancelacion').attr("disabled", true);
        $("#formulario\\.valor").attr("disabled", true);
        $("#formulario\\.comentarios").attr("disabled", true);
        $("#formulario\\.palabras").attr("disabled", true);

        $("#boton\\.home").attr("disabled", false);
        $("#boton\\.configuracion").attr("disabled", false);
        $("#boton\\.buscar").attr("disabled", false);
        $("#boton\\.imprimir").attr("disabled", false);
        $("#boton\\.salir").attr("disabled", false);
        $("#boton\\.lista").attr("disabled", false);
        $("#boton\\.listd").attr("disabled", false);
        $("#boton\\.calculos").attr("disabled", false);
        $("#boton\\.usuarios").attr("disabled", false);
    });

    $("#boton\\.cancelar").on("click", function(){

        cargarTabla();
        $("#formulario\\.fecha").attr("disabled", true);
        $("#formulario\\.hora").val("").attr("disabled", true);
        $("#formulario\\.minutos").val("").attr("disabled", true);
        $("#formulario\\.participante").val("").attr("disabled", true);
        $("#formulario\\.nombre").val("").attr("disabled", true);
        $("#formulario\\.actividad").val("").attr("disabled", true);
        $("#formulario\\.lugar").val("").attr("disabled", true);
        $("#formulario\\.cancelacion").val("").attr("disabled", true);
        $("#formulario\\.fcancelacion").attr("disabled", true);
        $("#formulario\\.valor").val("").attr("disabled", true);
        $("#formulario\\.comentarios").val("").attr("disabled", true);
        $("#formulario\\.palabras").val("").attr("disabled", true);
        $("#boton\\.nuevo").removeClass("d-none");
        $("#boton\\.guardar").addClass("d-none");
        $("#boton\\.cancelar").addClass("d-none");
        $("#boton\\.home").trigger("click");

        $("#boton\\.home").attr("disabled", false);
        $("#boton\\.configuracion").attr("disabled", false);
        $("#boton\\.buscar").attr("disabled", false);
        $("#boton\\.imprimir").attr("disabled", false);
        $("#boton\\.salir").attr("disabled", false);
        $("#boton\\.lista").attr("disabled", false);
        $("#boton\\.listd").attr("disabled", false);
        $("#boton\\.calculos").attr("disabled", false);
        $("#boton\\.usuarios").attr("disabled", false);
    });

    $("#boton\\.salir").on("click", function(){
        window.location.href = "https://servidor.crecimientofetal.cl/login/logoutapuntes";
    });
});

function guardarAutomatico(){
    id = $("#formulario\\.id").val();
    var formulario = "";

    if (id == 9999){

        formulario = {
            accion: "nuevo",
            fecha: $("#formulario\\.fecha").val(),
            hora: $("#formulario\\.hora").val(),
            minutos: $("#formulario\\.minutos").val(),
            nombre: $('#formulario\\.nombre').val(),
            participante: $("#formulario\\.participante").val(),
            actividad: $("#formulario\\.actividad").val(),
            lugar: $("#formulario\\.lugar").val(),
            location_name: $("#formulario\\.lugar option:selected").text(),
            cancelacion: $("#formulario\\.cancelacion").val(),
            fcancelacion: $("#formulario\\.fcancelacion").val(),
            valor: $("#formulario\\.valor").val(),
            comentarios: $("#formulario\\.comentarios").val(),
            palabras: $("#formulario\\.palabras").val()
        };
    }
    else{

        formulario = {
            accion: "guardar",
            id: $("#formulario\\.id").val(),
            fecha: $("#formulario\\.fecha").val(),
            hora: $("#formulario\\.hora").val(),
            minutos: $("#formulario\\.minutos").val(),
            nombre: $('#formulario\\.nombre').val(),
            participante: $("#formulario\\.participante").val(),
            actividad: $("#formulario\\.actividad").val(),
            lugar: $("#formulario\\.lugar").val(),
            location_name: $("#formulario\\.lugar option:selected").text(),
            cancelacion: $("#formulario\\.cancelacion").val(),
            fcancelacion: $("#formulario\\.fcancelacion").val(),
            valor: $("#formulario\\.valor").val(),
            comentarios: $("#formulario\\.comentarios").val(),
            palabras: $("#formulario\\.palabras").val()
        };
    }

    if (formulario.nombre == ""){
        formulario.nombre = "NN";
    }

    $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
        $("#formulario\\.id").val(data.apunte_id);
        $("#formulario\\.fecha").val(data.apunte_date);
        $('#formulario\\.fecha').datepicker('setValue', data.apunte_date);
        $("#formulario\\.hora").val(data.apunte_hour);
        $("#formulario\\.minutos").val(data.apunte_minute);
        $('#formulario\\.nombre').val(data.apunte_nombre);
        $("#formulario\\.participante").val(data.apunte_participante);
        $("#formulario\\.actividad").val(data.apunte_activity);
        $("#formulario\\.lugar").val(data.apunte_location);
        $("#formulario\\.cancelacion").val(data.apunte_cancellation);
        $("#formulario\\.fcancelacion").val(data.apunte_fcancellation),
        $('#formulario\\.fcancelacion').datepicker('setValue', data.apunte_fcancellation);
        $("#formulario\\.valor").val(data.apunte_cost);
        $("#formulario\\.comentarios").val(data.apunte_text);
        $("#formulario\\.palabras").val(data.apunte_keywords);
        cargarTabla();
    });
}

function cargarTabla(order = 0){
    var solicitud = {};
    if (order == 0){
        solicitud = {
            accion: "tabla"
        };
    }
    else{
        solicitud = {
            accion: "tablad"
        };
    }
    

    $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
        $("#contenedor\\.tarjetas").empty();
        $("#boton\\.editar").addClass("d-none");
        $.each(data, function(i, item) {
            let fila = '<div class="card"><div class="card-body p-3"><div class="row apunte" data-id="' + item["apunte_id"] + '"><div class="col text-truncate"><p class="my-2">' + item["apunte_nombre"] +'</p></div><div class="col-4 d-none"><button type="button" data-id="' + item["apunte_id"] + '" class="btn btn-outline-warning px-3 eliminar"><i class="fas fa-trash"></i></button></div></div></div></div>';
            $("#contenedor\\.tarjetas").append(fila);
        });

        $(".apunte").on("mouseenter", function(){
            $(this).children(".col-4").removeClass("d-none");
            $(this).parent().parent().addClass("bg-secondary").addClass("text-white");
        }).on("mouseleave", function(){
            $(this).children(".col-4").addClass("d-none");
            $(this).parent().parent().parent().children().each(function(i){
                $(this).removeClass("bg-secondary").removeClass("text-white");;
            });
        }).on("click",function(){

            if ($("#formulario\\.actividad").is(':disabled') == false){
                $("#dialog\\.delete").remove();
                $("#dialog\\.title").html('Guardar cambios')
                $("#dialog\\.body").html('<p class="text-center">¿Quiere guardar los cambios efectuados antes de salir?</p>')
                $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" >Guardar</button>');
                $("#dialog\\.view").modal("show");

                $("#dialog\\.delete").on("click", function(){
                    guardarAutomatico();
                    $("#dialog\\.view").modal("hide");
                    $("#formulario\\.fecha").attr("disabled", true);
                    $("#formulario\\.hora").attr("disabled", true);
                    $("#formulario\\.minutos").attr("disabled", true);
                    $("#formulario\\.participante").attr("disabled", true);
                    $('#formulario\\.nombre').attr("disabled", true);
                    $("#formulario\\.actividad").attr("disabled", true);
                    $("#formulario\\.lugar").attr("disabled", true);
                    $("#formulario\\.cancelacion").attr("disabled", true);
                    $('#formulario\\.fcancelacion').attr("disabled", true);
                    $("#formulario\\.valor").attr("disabled", true);
                    $("#formulario\\.comentarios").attr("disabled", true);
                    $("#formulario\\.palabras").attr("disabled", true);
                });
            }
            else{
                $("#boton\\.editar").removeClass("d-none");
                let apunte_id = $(this).data("id");

                var solicitud = {
                    accion: "apunte",
                    id: apunte_id
                };

                $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                    $("#formulario\\.id").val(data.apunte_id);
                    $("#formulario\\.fecha").val(data.apunte_date);
                    $('#formulario\\.fecha').datepicker('setValue', data.apunte_date);
                    $("#formulario\\.hora").val(data.apunte_hour);
                    $("#formulario\\.minutos").val(data.apunte_minute);
                    $('#formulario\\.nombre').val(data.apunte_nombre);
                    $("#formulario\\.participante").val(data.apunte_participante);
                    $("#formulario\\.actividad").val(data.apunte_activity);
                    $("#formulario\\.lugar").val(data.apunte_location);
                    $("#formulario\\.cancelacion").val(data.apunte_cancellation);
                    $("#formulario\\.fcancelacion").val(data.apunte_fcancellation);
                    $('#formulario\\.fcancelacion').datepicker('setValue', data.apunte_fcancellation);
                    $("#formulario\\.valor").val(data.apunte_cost);
                    $("#formulario\\.comentarios").val(data.apunte_text);
                    $("#formulario\\.palabras").val(data.apunte_keywords);
                });
            }
        });

        $(".eliminar").on("click",function(){
            let apunte_id = $(this).data("id");
            $("#dialog\\.delete").remove();
            $("#dialog\\.title").html('Eliminar Evento')
            $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el evento seleccionado?</p>')
            $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" data-id="' + apunte_id + '">Eliminar</button>');

            $("#dialog\\.delete").on("click", function(){
                let apunte_id = $(this).data("id");
                var solicitud = {
                    accion: "eliminar",
                    id: apunte_id
                };

                $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                    cargarTabla();
                    $("#dialog\\.delete").remove();
                    $("#dialog\\.view").modal("hide");

                    var dateTime = new Date();
                    var day = ("0" + dateTime.getDate()).slice(-2);
                    var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);

                    $("#formulario\\.id").val("").attr("disabled", true);
                    $("#formulario\\.fecha").val(day + "/" + month + "/" + dateTime.getFullYear()).attr("disabled", true);
                    $('#formulario\\.fecha').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
                    $("#formulario\\.hora").val("").attr("disabled", true);
                    $("#formulario\\.minutos").val("").attr("disabled", true);
                    $('#formulario\\.nombre').val("").attr("disabled", true);
                    $("#formulario\\.participante").val("").attr("disabled", true);
                    $("#formulario\\.actividad").val("").attr("disabled", true);
                    $("#formulario\\.lugar").val("").attr("disabled", true);
                    $("#formulario\\.cancelacion").val("").attr("disabled", true);
                    $("#formulario\\.fcancelacion").val(day + "/" + month + "/" + dateTime.getFullYear()).attr("disabled", true);
                    $('#formulario\\.fcancelacion').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
                    $("#formulario\\.valor").val("0").attr("disabled", true);
                    $("#formulario\\.comentarios").val("").attr("disabled", true);
                    $("#formulario\\.palabras").val("").attr("disabled", true);
                });
            });
            $("#dialog\\.view").modal("show");
        });
    });
}

function cargarActividad(){
    var solicitud = {
        accion: "actividad"
    };

    $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
        $("#formulario\\.actividad").empty();
        $("#tabla\\.actividad").empty();
        $("#calculos\\.formulario\\.actividad").empty();

        let option = '<option value="99" selected>Todos</option>';
        $("#calculos\\.formulario\\.actividad").append(option);

        $.each(data, function(i, item) {
            let alternativa = parseInt(item["actividad_preset"]) == 0 ? "No" : "Si";
            let fila = '<tr><td>' + item["actividad_text"] + '</td><td class="columna-actividad">' + alternativa + '<button type="button" data-id="' + item["actividad_id"] + '" class="btn btn-outline-warning px-3 eliminar-actividad float-right d-none"><i class="fas fa-trash"></i></button></td></tr>';
            let option = '<option value="'+ item["actividad_id"]+'">' +item["actividad_text"]+'</option>';
            $("#tabla\\.actividad").append(fila);
            $("#formulario\\.actividad").append(option);
            $("#calculos\\.formulario\\.actividad").append(option);
        });

        $(".columna-actividad").on("mouseenter",function(){
            $(this).children("button").removeClass("d-none");
        }).on("mouseleave", function(){
            $(this).children("button").addClass("d-none");
        });

        $(".eliminar-actividad").on("click", function(){
            let actividad_id = $(this).data("id");
            $("#dialog\\.delete").remove();
            $("#dialog\\.title").html('Eliminar tipo de evento')
            $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el tipo de evento seleccionada?</p>')
            $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" data-id="' + actividad_id + '">Eliminar</button>');

            $("#dialog\\.delete").on("click", function(){
                let actividad_id = $(this).data("id");
                var solicitud = {
                    accion: "eliminarActividad",
                    id: actividad_id
                };

                $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                    cargarActividad();
                    $("#boton\\.configuracion").trigger("click");
                    $('#myTab a[href="#home"]').tab('show')
                });
            });
            $("#dialog\\.view").modal("show");
        });
    });
}

function cargarLugar(){
    var solicitud = {
        accion: "lugar"
    };

    $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
        $("#formulario\\.lugar").empty();
        $("#tabla\\.lugar").empty();
        $("#calculos\\.formulario\\.lugar").empty();

        let option = '<option value="99" selected>Todos</option>';
        $("#calculos\\.formulario\\.lugar").append(option);

        $.each(data, function(i, item) {
            let fila = '<tr><th scope="row">' + item["lugar_id"] + '</th><td class="columna-lugar">' + item["lugar_text"] + '<button type="button" data-id="' + item["lugar_id"] + '" class="btn btn-outline-warning px-3 eliminar-lugar float-right d-none"><i class="fas fa-trash"></i></button></td></tr>';
            let option = '<option value="'+ item["lugar_id"]+'">' +item["lugar_text"]+'</option>';
            $("#tabla\\.lugar").append(fila);
            $("#formulario\\.lugar").append(option);
            $("#calculos\\.formulario\\.lugar").append(option);
        });

        $(".columna-lugar").on("mouseenter",function(){
            $(this).children("button").removeClass("d-none");
        }).on("mouseleave", function(){
            $(this).children("button").addClass("d-none");
        });

        $(".eliminar-lugar").on("click", function(){
            let lugar_id = $(this).data("id");
            $("#dialog\\.delete").remove();
            $("#dialog\\.title").html('Eliminar Lugar')
            $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el lugar seleccionado?</p>')
            $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" data-id="' + lugar_id + '">Eliminar</button>');

            $("#dialog\\.delete").on("click", function(){
                let lugar_id = $(this).data("id");
                var solicitud = {
                    accion: "eliminarLugar",
                    id: lugar_id
                };

                $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                    cargarLugar();
                    $("#boton\\.configuracion").trigger("click");
                    $('#myTab a[href="#profile"]').tab('show')
                });
            });
            $("#dialog\\.view").modal("show");
        });
    });
}

function cargarParticipante(){
    var solicitud = {
        accion: "participante"
    };

    $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
        $("#formulario\\.participante").empty();
        $("#tabla\\.participante").empty();

        $.each(data, function(i, item) {
            let fila = '<tr><th scope="row">' + item["participante_id"] + '</th><td class="columna-participante">' + item["participante_text"] + '<button type="button" data-id="' + item["participante_id"] + '" class="btn btn-outline-warning px-3 eliminar-participante float-right d-none"><i class="fas fa-trash"></i></button></td></tr>';
            let option = '<option value="'+ item["participante_id"]+'">' +item["participante_text"]+'</option>';
            $("#tabla\\.participante").append(fila);
            $("#formulario\\.participante").append(option);
        });

        $(".columna-participante").on("mouseenter",function(){
            $(this).children("button").removeClass("d-none");
        }).on("mouseleave", function(){
            $(this).children("button").addClass("d-none");
        });

        $(".eliminar-participante").on("click", function(){
            let participante_id = $(this).data("id");
            $("#dialog\\.delete").remove();
            $("#dialog\\.title").html('Eliminar Participante')
            $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el participante seleccionado?</p>')
            $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" data-id="' + participante_id + '">Eliminar</button>');

            $("#dialog\\.delete").on("click", function(){
                let participante_id = $(this).data("id");
                var solicitud = {
                    accion: "eliminarParticipante",
                    id: participante_id
                };

                $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                    cargarParticipante();
                    $("#boton\\.configuracion").trigger("click");
                    $('#myTab a[href="#participante"]').tab('show');
                });
            });
            $("#dialog\\.view").modal("show");
        });
    });
}

function updateCalculos(){
    $("#tabla\\.calculos").empty();
    var solicitud = {
        accion: "calculos",
        uno: $("#calculos\\.fecha\\.uno").val(),
        dos: $("#calculos\\.fecha\\.dos").val(),
        lugar: $("#calculos\\.formulario\\.lugar").val(),
        actividad: $("#calculos\\.formulario\\.actividad").val(),
        cancelacion: $("#calculos\\.formulario\\.cancelacion").val()
    };

    $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
        if (Object.keys(data).length > 0) {

            $.each(data, function(i, item) {
                let participante = "";
                let lugar = "";

                $("#formulario\\.participante > option").each(function() {
                    if (this.value == item["apunte_participante"]){
                        participante = this.text;
                    }
                });

                $("#formulario\\.actividad > option").each(function() {
                    if (this.value == item["apunte_activity"]){
                        lugar = this.text;
                    }
                });

                let fila = '<tr><th scope="row">' + item["apunte_id"] + '</th><td>' + item["apunte_nombre"] + '</td><td>' + lugar + '</td><td>' + item["apunte_date"] + '</td><td>' + participante + '</td><td>' + item["apunte_cost"] + '</td></tr>';
                $("#tabla\\.calculos").append(fila);
            });

            var solicitud = {
                accion: "calculosSum",
                uno: $("#calculos\\.fecha\\.uno").val(),
                dos: $("#calculos\\.fecha\\.dos").val(),
                lugar: $("#calculos\\.formulario\\.lugar").val(),
                actividad: $("#calculos\\.formulario\\.actividad").val(),
                cancelacion: $("#calculos\\.formulario\\.cancelacion").val()
            }
            $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                if (Object.keys(data).length > 0) {
                    let fila = '<tr><th scope="row"></th><td></td><td></td><td></td><td class="text-right"><strong>Total:</strong></td><td><strong>' + data.apunte_costo + '</strong></td></tr>';
                    $("#tabla\\.calculos").append(fila);
                }
            });
        }
    });
}

function cargarTiempo(){
    for (var i = 0; i < 24; i++) {
        let option = '<option value="' + i +'" >'+ i + '</option>';
        $("#formulario\\.hora").append(option);
    }

    for (var i = 0; i < 60; i++) {
        let option = '<option value="' + i +'" >'+ i + '</option>';
        $("#formulario\\.minutos").append(option);
    }
}