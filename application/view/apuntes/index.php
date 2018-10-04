<!doctype html>
<html lang="es" class="h-100">
   <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
        <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/solid.css" integrity="sha384-VGP9aw4WtGH/uPAOseYxZ+Vz/vaTb1ehm1bwx92Fm8dTrE+3boLfF1SpAtB1z7HW" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/fontawesome.css" integrity="sha384-1rquJLNOM3ijoueaaeS5m+McXPJCGdr5HcA03/VHXxcp2kX2sUrQDmFc3jR5i/C7" crossorigin="anonymous">
        <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/datepicker.css">
        <title>Notas de apuntes</title>
   </head>
   <body class="h-100">
        <div class="row h-100 w-100" style="overflow:hide">
            <div class="col-3 border-right pr-0 h-100">
                <nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand">Notas de apuntes</a>
                    <div class="btn-group" role="group" aria-label="Menú">
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.nuevo" title="Nuevo apunte"><i class="fas fa-pen"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.imprimir" title="Imprimir apunte actual"><i class="fas fa-print"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.calculos" title="calculos"><i class="fas fa-calculator"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.buscar" title="Buscar apunte"><i class="fas fa-search"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0" id="boton.configuracion" title="Configuración"><i class="fas fa-cog"></i></button>
                    </div>
                    <div class="form-inline d-none" id="div.busqueda">
                        <input class="form-control mr-sm-2" type="search" placeholder="Escribir" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                    </div>
                </nav>
                <div style="overflow-y:scroll;height:calc(100% - 7.1rem);" id="contenedor.tarjetas">
                </div>
            </div>
            <div class="col-9 h-100" style="overflow-y:scroll;height:calc(100% - 7.1rem);">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group col"><label for="formulario.paciente"><strong>Nombre del evento</strong></label><input class="form-control" id="formulario.paciente" type="email" disabled></div>
                        <div class="row m-0">
                            <div class="col">
                                <div class="form-group"><label for="formulario.fecha"><strong>Fecha</strong></label><input class="form-control" id="formulario.fecha" data-date-format="dd/mm/yyyy" type="text" disabled></div>
                                <div class="form-group"><label for="formulario.hora"><strong>Hora</strong></label><input class="form-control" id="formulario.hora" type="text" disabled></div>
                                <div class="form-group"><label for="formulario.palabras"><strong>Otros participantes</strong></label><input class="form-control" id="formulario.palabras" type="text" disabled></div>
                                <div class="form-group"><label for="formulario.lugar"><strong>Lugar del evento</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="formulario.lugar" disabled></select></div>
                                <div class="form-group"><label for="formulario.actividad"><strong>Método de búsqueda</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="formulario.actividad" disabled></select></div>
                                <input id="formulario.id" type="hidden" value="" />
                                <div class="form-group mt-4"><label for="formulario.cancelacion"><strong>Cierre de evento</strong> (<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="formulario.cancelacion" disabled></select></div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="opcion.financiera">
                                    <label class="form-check-label" for="opcion.financiera"><strong>Registro financiero</strong></label>
                                </div>
                                <div class="d-none mt-3" id="div.financiero">
                                    <div class="form-group"><label for="formulario.fcancelacion"><strong>Fecha de cancelación</strong></label><input class="form-control" id="formulario.fcancelacion" type="text" data-date-format="dd/mm/yyyy" disabled></div>
                                    <div class="form-group"><label for="formulario.valor"><strong>Valor cancelado</strong></label><input class="form-control" id="formulario.valor" type="number" disabled></div>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="form-group"><label for="formulario.comentarios"><strong>Comentarios generales</strong></label><textarea class="form-control border h6" id="formulario.comentarios" rows="25" disabled></textarea></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div class="modal" tabindex="-1" role="dialog" id="dialog.view">
         <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="dialog.title"></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body" id="dialog.body">
               </div>
               <div class="modal-footer" id="dialog.footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
               </div>
            </div>
         </div>
      </div>
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
      <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
      <script>$(document).ready(function() { var dateTime = new Date(); var day = ("0" + dateTime.getDate()).slice(-2); var month = ("0" + (dateTime.getMonth() + 1)).slice(-2); $("#formulario\\.fecha").val((day) + "/" + (month) + "/" + dateTime.getFullYear()); $('#formulario\\.fecha').datepicker('setValue', (day) + "/" + (month) + "/" + dateTime.getFullYear());$("#formulario\\.fcancelacion").val((day) + "/" + (month) + "/" + dateTime.getFullYear()); $('#formulario\\.fcancelacion').datepicker('setValue', (day) + "/" + (month) + "/" + dateTime.getFullYear());});</script>
      <script>
        $(document).ready(function(){
            cargarTabla();
            cargarActividad();
            cargarLugar();
            cargarCancelacion();
         
            $("#boton\\.calculos").on("click", function(){

                var dateTime = new Date();
                var day = ("0" + dateTime.getDate()).slice(-2);
                var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);

                $("#dialog\\.title").html("Calculos");
                $("#dialog\\.delete").remove();
                $("#dialog\\.view").modal("show");
                $("#dialog\\.body").html('<div class="row"><div class="col"><div class="form-group"><label for="calculos.fecha.uno">Fecha inicio</label><input type="text" class="form-control" id="calculos.fecha.uno" data-date-format="dd/mm/yyyy"></div></div><div class="col"><div class="form-group"><label for="calculos.fecha.uno">Fecha fin</label><input type="text" class="form-control" id="calculos.fecha.dos" data-date-format="dd/mm/yyyy"></div></div></div><div class="row"><div class="col"><div class="table-responsive"><table class="table"><thead><tr><th scope="col">#</th><th scope="col">Nombre del evento</th><th scope="col">Fecha</th><th scope="col">Lugar</th><th scope="col">Valor cancelado</th></tr></thead><tbody><tr><th scope="row">1</th><td>Cell</td><td>Cell</td></tr><tr><th scope="row">2</th><td>Cell</td><td>Cell</td></tr><tr><th scope="row">3</th><td>Cell</td><td>Cell</td></tr></tbody></table></div></div></div><div class="row"><div class="col"><div class="form-group"><label for="calculos.formulario.lugar"><strong>Lugar del evento</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="calculos.formulario.lugar"></select></div></div></div><div class="row"><div class="col"><div class="form-group"><label for="calculos.formulario.actividad"><strong>Método de búsqueda</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="calculos.formulario.actividad"></select></div></div></div><div class="row"><div class="col"><div class="form-group"><label for="calculos.formulario.cancelacion"><strong>Cierre de evento</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="calculos.formulario.cancelacion"></select></div></div></div>');
            
                $("#calculos\\.fecha\\.uno").val(day + "/" + month + "/" + dateTime.getFullYear());
                $("#calculos\\.fecha\\.uno").datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
                $("#calculos\\.fecha\\.dos").val(day + "/" + month + "/" + dateTime.getFullYear());
                $("#calculos\\.fecha\\.dos").datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());


            });
            $("#boton\\.buscar").on("click", function(){
                if ($("#div\\.busqueda").hasClass("d-none")){
                    $("#div\\.busqueda").removeClass("d-none");
                }
                else{
                    $("#div\\.busqueda").addClass("d-none");
                }
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

                var formulario = {
                    accion: "nuevo",
                    fecha: day + "/" + month + "/" + dateTime.getFullYear(),
                    hora: "",
                    paciente: "Nuevo evento",
                    actividad: "",
                    lugar: "",
                    cancelacion: "",
                    fcancelacion: day + "/" + month + "/" + dateTime.getFullYear(),
                    valor: "",
                    comentarios: "",
                    palabras: ""
                };
                $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                    $("#formulario\\.id").val(data.apunte_id).attr("disabled", false);
                    $("#formulario\\.fecha").val(data.apunte_date).attr("disabled", false);
                    $('#formulario\\.fecha').datepicker('setValue', data.apunte_date);
                    $("#formulario\\.hora").val("").attr("disabled", false);
                    $("#formulario\\.paciente").val(data.apunte_person).attr("disabled", false);
                    $("#formulario\\.actividad").val("").attr("disabled", false);
                    $("#formulario\\.lugar").val("").attr("disabled", false);
                    $("#formulario\\.cancelacion").val("").attr("disabled", false);
                    $("#formulario\\.fcancelacion").val(data.apunte_fcancellation).attr("disabled", false);
                    $('#formulario\\.fcancelacion').datepicker('setValue', data.apunte_fcancellation);
                    $("#formulario\\.valor").val("").attr("disabled", false);
                    $("#formulario\\.comentarios").val("").attr("disabled", false);
                    $("#formulario\\.palabras").val("").attr("disabled", false);
                    cargarTabla();
                });
            });

            $("#formulario\\.paciente").on("focusout", function(){
                guardarAutomatico();
            });

            $("#formulario\\.fecha").on("focusout", function(){
                guardarAutomatico();
            });

            $("#formulario\\.hora").on("focusout", function(){
                guardarAutomatico();
            });

            $("#formulario\\.actividad").on("focusout", function(){
                guardarAutomatico();
            });

            $("#formulario\\.lugar").on("focusout", function(){
                guardarAutomatico();
            });

            $("#formulario\\.cancelacion").on("focusout", function(){
                guardarAutomatico();
            });

            $("#formulario\\.fcancelacion").on("focusout", function(){
                guardarAutomatico();
            });

            $("#formulario\\.valor").on("focusout", function(){
                guardarAutomatico();
            });
         
            $("#formulario\\.comentarios").on("focusout", function(){
                guardarAutomatico();
            });

            $("#formulario\\.palabras").on("focusout", function(){
                guardarAutomatico();
            });

            $("#boton\\.configuracion").on("click", function(){
                cargarActividad();
                cargarLugar();
                cargarCancelacion();
                $("#dialog\\.title").html("Configuración");
                $("#dialog\\.delete").remove();
                $("#dialog\\.view").modal("show");
                $("#dialog\\.body").html('<ul class="nav nav-tabs" id="myTab" role="tablist"> <li class="nav-item"> <a class="nav-link active show" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Lugar de evento</a> </li><li class="nav-item"> <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Busqueda por evento</a> </li><li class="nav-item"> <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="true">Cancelacion</a> </li></ul> <div class="tab-content" id="myTabContent"> <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <div class="btn-group" role="group" aria-label="Menú"> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.lugar.nuevo" title="Nueva lugar"><i class="fas fa-pen"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.lugar.guardar" title="Nueva lugar"><i class="fas fa-save"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.lugar.cancelar" title="Nueva lugar"><i class="fas fa-ban"></i></button> </div><div class="row d-none" id="div.lugar"> <div class="form-group col"> <label for="lugar.texto">Nombre del Lugar</label> <input type="text" class="form-control" id="lugar.texto"> </div></div><table class="table table-hover"> <thead class="table-success"> <tr> <th scope="col">#</th> <th scope="col">Nombre del Lugar</th> </tr></thead> <tbody id="tabla.lugar"> </tbody> </table> </div><div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab"> <div class="btn-group" role="group" aria-label="Menú"> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.actividad.nuevo" title="Nueva actividad"><i class="fas fa-pen"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.actividad.guardar" title="Nueva actividad"><i class="fas fa-save"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.actividad.cancelar" title="Nueva actividad"><i class="fas fa-ban"></i></button> </div><div class="row d-none" id="div.actividad"> <div class="form-group col"> <label for="actividad.texto">Nombre de la Busqueda por evento</label> <input type="text" class="form-control" id="actividad.texto"> </div></div><table class="table table-hover"> <thead class="table-success"> <tr> <th scope="col">#</th> <th scope="col">Nombre de la busqueda por evento</th> </tr></thead> <tbody id="tabla.actividad"> </tbody> </table> </div><div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"> <div class="btn-group" role="group" aria-label="Menú"> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.cancelacion.nuevo" title="Nueva cancelacion"><i class="fas fa-pen"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.cancelacion.guardar" title="Nueva cancelacion"><i class="fas fa-save"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.cancelacion.cancelar" title="Nueva cancelacion"><i class="fas fa-ban"></i></button> </div><div class="row d-none" id="div.cancelacion"> <div class="form-group col"> <label for="cancelacion.texto">Tipo de cancelación</label> <input type="text" class="form-control" id="cancelacion.texto"> </div></div><table class="table table-hover"> <thead class="table-success"> <tr> <th scope="col">#</th> <th scope="col">Tipo de cancelación</th> </tr></thead> <tbody id="tabla.cancelacion"></tbody> </table> </div></div>');
            
                $("#boton\\.actividad\\.nuevo").on("click", function(){
                    $("#div\\.actividad").removeClass("d-none");
                    $("#boton\\.actividad\\.nuevo").addClass("d-none");
                    $("#boton\\.actividad\\.guardar").removeClass("d-none");
                    $("#boton\\.actividad\\.cancelar").removeClass("d-none");
                });

                $("#boton\\.actividad\\.guardar").on("click", function(){
                    $("#div\\.actividad").addClass("d-none");
                    $("#boton\\.actividad\\.nuevo").removeClass("d-none");
                    $("#boton\\.actividad\\.guardar").addClass("d-none");
                    $("#boton\\.actividad\\.cancelar").addClass("d-none");

                    var formulario = {
                        accion: "nuevoActividad",
                        actividad_text: $("#actividad\\.texto").val(),
                    };

                    $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                        cargarActividad();
                        $("#actividad\\.texto").val("");
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

                $("#boton\\.cancelacion\\.nuevo").on("click", function(){
                    $("#div\\.cancelacion").removeClass("d-none");
                    $("#boton\\.cancelacion\\.nuevo").addClass("d-none");
                    $("#boton\\.cancelacion\\.guardar").removeClass("d-none");
                    $("#boton\\.cancelacion\\.cancelar").removeClass("d-none");
                });

                $("#boton\\.cancelacion\\.guardar").on("click", function(){
                    $("#div\\.cancelacion").addClass("d-none");
                    $("#boton\\.cancelacion\\.nuevo").removeClass("d-none");
                    $("#boton\\.cancelacion\\.guardar").addClass("d-none");
                    $("#boton\\.cancelacion\\.cancelar").addClass("d-none");

                    var formulario = {
                        accion: "nuevaCancelacion",
                        cancelacion_text: $("#cancelacion\\.texto").val(),
                    };

                    $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                        cargarCancelacion();
                        $("#cancelacion\\.texto").val("");
                    });
                });

                $("#boton\\.cancelacion\\.cancelar").on("click", function(){
                    $("#div\\.cancelacion").addClass("d-none");
                    $("#boton\\.cancelacion\\.nuevo").removeClass("d-none");
                    $("#boton\\.cancelacion\\.guardar").addClass("d-none");
                    $("#boton\\.cancelacion\\.cancelar").addClass("d-none");
                    $("#cancelacion\\.texto").val("");
                });
            });
        });

        function guardarAutomatico(){
            var formulario = {
                accion: "guardar",
                id: $("#formulario\\.id").val(),
                fecha: $("#formulario\\.fecha").val(),
                hora: $("#formulario\\.hora").val(),
                paciente: $("#formulario\\.paciente").val(),
                actividad: $("#formulario\\.actividad").val(),
                lugar: $("#formulario\\.lugar").val(),
                cancelacion: $("#formulario\\.cancelacion").val(),
                fcancelacion: $("#formulario\\.fcancelacion").val(),
                valor: $("#formulario\\.valor").val(),
                comentarios: $("#formulario\\.comentarios").val(),
                palabras: $("#formulario\\.palabras").val()
            };

            $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                $("#formulario\\.id").val(data.apunte_id);
                $("#formulario\\.fecha").val(data.apunte_date);
                $('#formulario\\.fecha').datepicker('setValue', data.apunte_date);
                $("#formulario\\.hora").val(data.apunte_hour);
                $("#formulario\\.paciente").val(data.apunte_person);
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

        function cargarTabla(){
            var solicitud = {
                accion: "tabla"
            };

            $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                $("#contenedor\\.tarjetas").empty();

                $.each(data, function(i, item) {
                    let fila = '<div class="card"><div class="card-body p-3"><div class="row apunte" data-id="' + item["apunte_id"] + '"><div class="col text-truncate"><p class="my-2">' + item["apunte_person"] +'</p></div><div class="col-4 d-none"><button type="button" data-id="' + item["apunte_id"] + '" class="btn btn-outline-warning px-3 eliminar"><i class="fas fa-trash"></i></button></div></div></div></div>';
                    $("#contenedor\\.tarjetas").append(fila);
                });

                $(".apunte").on("mouseenter", function(){
                    $(this).children(".col-4").removeClass("d-none");
                }).on("mouseleave", function(){
                    $(this).children(".col-4").addClass("d-none");
                }).on("click",function(){
                    let apunte_id = $(this).data("id");

                    var solicitud = {
                        accion: "apunte",
                        id: apunte_id
                    };

                    $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                        $("#formulario\\.id").val(data.apunte_id).attr("disabled", false);
                        $("#formulario\\.fecha").val(data.apunte_date).attr("disabled", false);
                        $('#formulario\\.fecha').datepicker('setValue', data.apunte_date);
                        $("#formulario\\.hora").val(data.apunte_hour).attr("disabled", false);
                        $("#formulario\\.paciente").val(data.apunte_person).attr("disabled", false);
                        $("#formulario\\.actividad").val(data.apunte_activity).attr("disabled", false);
                        $("#formulario\\.lugar").val(data.apunte_location).attr("disabled", false);
                        $("#formulario\\.cancelacion").val(data.apunte_cancellation).attr("disabled", false);
                        $("#formulario\\.fcancelacion").val(data.apunte_fcancellation).attr("disabled", false),
                        $('#formulario\\.fcancelacion').datepicker('setValue', data.apunte_fcancellation);
                        $("#formulario\\.valor").val(data.apunte_cost).attr("disabled", false);
                        $("#formulario\\.comentarios").val(data.apunte_text).attr("disabled", false);
                        $("#formulario\\.palabras").val(data.apunte_keywords).attr("disabled", false);
                    });
                });

                $(".eliminar").on("click",function(){
                    let apunte_id = $(this).data("id");
                    $("#dialog\\.delete").remove();
                    $("#dialog\\.title").html('Eliminar Evento')
                    $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el evento seleccionado?')
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
                            $("#formulario\\.paciente").val("").attr("disabled", true);
                            $("#formulario\\.actividad").val("").attr("disabled", true);
                            $("#formulario\\.lugar").val("").attr("disabled", true);
                            $("#formulario\\.cancelacion").val("").attr("disabled", true);
                            $("#formulario\\.fcancelacion").val(day + "/" + month + "/" + dateTime.getFullYear()).attr("disabled", true);
                            $('#formulario\\.fcancelacion').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
                            $("#formulario\\.valor").val("").attr("disabled", true);
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

                $.each(data, function(i, item) {
                    let fila = '<tr><th scope="row">' + item["actividad_id"] + '</th><td class="columna-actividad">' + item["actividad_text"] + '<button type="button" data-id="' + item["actividad_id"] + '" class="btn btn-outline-warning px-3 eliminar-actividad float-right d-none"><i class="fas fa-trash"></i></button></td></tr>';
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
                    $("#dialog\\.title").html('Eliminar Busqueda por evento')
                    $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar la Busqueda por evento seleccionada?')
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
                    $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el lugar seleccionado?')
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

        function cargarCancelacion(){
            var solicitud = {
                accion: "cancelacion"
            };

            $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                $("#formulario\\.cancelacion").empty();
                $("#tabla\\.cancelacion").empty();

                $.each(data, function(i, item) {
                    let fila = '<tr><th scope="row">' + item["cancelacion_id"] + '</th><td class="columna-cancelacion">' + item["cancelacion_text"] + '<button type="button" data-id="' + item["cancelacion_id"] + '" class="btn btn-outline-warning px-3 eliminar-cancelacion float-right d-none"><i class="fas fa-trash"></i></button></td></tr>';
                    let option = '<option value="'+ item["cancelacion_id"]+'">' +item["cancelacion_text"]+'</option>';
                    $("#tabla\\.cancelacion").append(fila);
                    $("#formulario\\.cancelacion").append(option);
                    $("#calculos\\.formulario\\.cancelacion").append(option);
                });

                $(".columna-cancelacion").on("mouseenter",function(){
                    $(this).children("button").removeClass("d-none");
                }).on("mouseleave", function(){
                    $(this).children("button").addClass("d-none");
                });

                $(".eliminar-cancelacion").on("click", function(){
                    let cancelacion_id = $(this).data("id");
                    $("#dialog\\.delete").remove();
                    $("#dialog\\.title").html('Eliminar tipo de cancelación')
                    $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el tipo de cancelación seleccionado?')
                    $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" data-id="' + cancelacion_id + '">Eliminar</button>');

                    $("#dialog\\.delete").on("click", function(){
                        let cancelacion_id = $(this).data("id");
                        var solicitud = {
                            accion: "eliminarCancelacion",
                            id: cancelacion_id
                        };

                        $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                            cargarCancelacion();
                            $("#boton\\.configuracion").trigger("click");
                            $('#myTab a[href="#contact"]').tab('show')
                        });
                    });

                    $("#dialog\\.view").modal("show");
                });
            });
        }
      </script>
   </body>
</html>