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
        <title>Apuntes</title>
   </head>
   <body class="h-100">
        <div class="row h-100 w-100" style="overflow:hide">
            <div class="col-4 border-right pr-0 h-100">
                <nav class="navbar navbar-light bg-light justify-content-between">
                    <a class="navbar-brand">Apuntes</a>
                    <div class="btn-group" role="group" aria-label="Menú">
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.nuevo" title="Nuevo apunte"><i class="fas fa-pen"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.imprimir" title="Imprimir apunte actual"><i class="fas fa-print"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.buscar" title="Buscar apunte"><i class="fas fa-search"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0" id="boton.configuracion" title="Configuración"><i class="fas fa-cog"></i></button>
                    </div>
                    <div class="form-inline d-none" id="div.busqueda">
                        <input class="form-control mr-sm-2" type="search" placeholder="Escribir" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                    </div>
                </nav>
                <div style="overflow-y:scroll;height:calc(100% - 4.8rem);" id="contenedor.tarjetas">
                </div>
            </div>
            <div class="col-8 h-100" style="overflow-y:scroll;height:calc(100% - 4.8rem);">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group col"><label for="formulario.paciente">Nombre del evento o apuntes</label><input class="form-control" id="formulario.paciente" type="email"></div>
                        <div class="row m-0">
                            <div class="form-group col"><label for="formulario.fecha">Fecha</label><input class="form-control" id="formulario.fecha" data-date-format="dd/mm/yyyy" type="text"></div>
                            <div class="form-group col"><label for="formulario.hora">Hora</label><input class="form-control" id="formulario.hora" type="text"></div>
                        </div>
                        <div class="row m-0">
                            <div class="form-group col"><label for="formulario.lugar">Lugar del evento</label><select class="form-control" id="formulario.lugar"></select></div>
                            <div class="form-group col"><label for="formulario.actividad">Búsqueda por actividad</label><select class="form-control" id="formulario.actividad"></select></div>
                        </div>
                        <div class="row m-0">
                            <div class="form-group col"><label for="formulario.palabras">Asistentes al eventos</label><input class="form-control" id="formulario.palabras" type="text"></div>
                            <input id="formulario.id" type="hidden" value="" />
                        </div>
                        <div class="row m-0">
                            <div class="form-group col"><label for="formulario.comentarios">Comentarios generales</label><textarea class="form-control" id="formulario.comentarios" rows="3"></textarea></div>
                        </div>
                        <div class="row m-0">
                            <div class="form-group col"><label for="formulario.cancelacion">Cancelación $</label><select class="form-control" id="formulario.cancelacion"></select></div>
                            <div class="form-group col"><label for="formulario.fcancelacion">Fecha de cancelación</label><input class="form-control m-2" id="formulario.fcancelacion" type="text" data-date-format="dd/mm/yyyy"></div>
                            <div class="form-group col"><label for="formulario.valor">Valor cancelado</label><input class="form-control m-2" id="formulario.valor" type="number"></div>
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
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item"> <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Búsqueda por actividades</a> </li>
                        <li class="nav-item"> <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Lugar de evento</a> </li>
                        <li class="nav-item"> <a class="nav-link active show" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="true">Cancelacion</a> </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="btn-group" role="group" aria-label="Menú">
                                <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.actividad.nuevo" title="Nueva actividad"><i class="fas fa-pen"></i></button>
                            </div>
                            <div class="row d-none">
                                <div class="form-group col"> <label for="exampleInputEmail1">Nombre de la actividad</label> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </div>
                                <div class="col-3"> <button class="btn btn-primary"><i class="fas fa-save"></i></button> <button class="btn btn-primary"><i class="fas fa-ban"></i></button> </div>
                            </div>
                            <table class="table table-hover">
                                <thead class="table-success">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Nombre de la actividad</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla.actividad"> </tbody>
                            </table>
                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="row">
                                <div class="form-group col"> <label for="exampleInputEmail1">Nombre del Lugar</label> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </div>
                                <div class="col"> <button type="submit" class="btn btn-primary">Guardar</button> <button type="submit" class="btn btn-primary">Cancelar</button> </div>
                            </div>
                            <table class="table table-hover">
                                <thead class="table-success">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre del Lugar</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla.actividad"> </tbody>
                            </table>
                        </div>
                        <div class="tab-pane fade active show" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <div class="row">
                                <div class="form-group col"> <label for="exampleInputEmail1">Tipo de cancelación</label> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </div>
                                <div class="col"> <button type="submit" class="btn btn-primary">Guardar</button><button type="submit" class="btn btn-primary">Cancelar</button></div>
                            </div>
                            <table class="table table-hover">
                                <thead class="table-success">
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tipo de cancelación</th>
                                    </tr>
                                </thead>
                                <tbody id="tabla.actividad"></tbody>
                            </table>
                        </div>
                    </div>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-primary" id="dialog.ok">Guardar</button>
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
         
                $("#boton\\.buscar").on("click", function(){
                    if ($("#div\\.busqueda").hasClass("d-none")){
                        $("#div\\.busqueda").removeClass("d-none");
                    }
                    else{
                        $("#div\\.busqueda").addClass("d-none");
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
                    paciente: "Apunte sin título",
                    actividad: "",
                    lugar: "",
                    cancelacion: "",
                    fcancelacion: day + "/" + month + "/" + dateTime.getFullYear(),
                    valor: "",
                    comentarios: "",
                    palabras: ""
                };
                $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                    $("#formulario\\.id").val(data.apunte_id);
                    $("#formulario\\.fecha").val(data.apunte_date);
                    $('#formulario\\.fecha').datepicker('setValue', data.apunte_date);
                    $("#formulario\\.hora").val("");
                    $("#formulario\\.paciente").val(data.apunte_person);
                    $("#formulario\\.actividad").val("");
                    $("#formulario\\.lugar").val("");
                    $("#formulario\\.cancelacion").val("");
                    $("#formulario\\.fcancelacion").val(data.apunte_fcancellation),
                    $('#formulario\\.fcancelacion').datepicker('setValue', data.apunte_fcancellation);
                    $("#formulario\\.valor").val("");
                    $("#formulario\\.comentarios").val("");
                    $("#formulario\\.palabras").val("");
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
                 $("#dialog\\.title").html("Configuración");
                 $("#dialog\\.view").modal("show");
                 $("#dialog\\.body").html('<ul class="nav nav-tabs" id="myTab" role="tablist"> <li class="nav-item"> <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">Actividades</a> </li><li class="nav-item"> <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Lugares</a> </li><li class="nav-item"> <a class="nav-link active show" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="true">Cancelacion</a> </li></ul><div class="tab-content" id="myTabContent"> <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab"> <div class="row"> <div class="form-group col"> <label for="exampleInputEmail1">Nombre de la actividad</label> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </div><div class="col"> <button type="submit" class="btn btn-primary">Guardar</button> <button type="submit" class="btn btn-primary">Cancelar</button> </div></div><table class="table table-hover"> <thead class="table-success"> <tr> <th scope="col">#</th> <th scope="col">Nombre de la actividad</th> </tr></thead> <tbody id="tabla.actividad"> </tbody> </table> </div><div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <div class="row"> <div class="form-group col"> <label for="exampleInputEmail1">Nombre del Lugar</label> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </div><div class="col"> <button type="submit" class="btn btn-primary">Guardar</button> <button type="submit" class="btn btn-primary">Cancelar</button> </div></div><table class="table table-hover"> <thead class="table-success"> <tr> <th scope="col">#</th> <th scope="col">Nombre del Lugar</th> </tr></thead> <tbody id="tabla.actividad"> </tbody> </table> </div><div class="tab-pane fade active show" id="contact" role="tabpanel" aria-labelledby="contact-tab"> <div class="row"> <div class="form-group col"> <label for="exampleInputEmail1">Tipo de cancelación</label> <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"> </div><div class="col"> <button type="submit" class="btn btn-primary">Guardar</button><button type="submit" class="btn btn-primary">Cancelar</button></div></div><table class="table table-hover"><thead class="table-success"><tr><th scope="col">#</th><th scope="col">Tipo de cancelación</th></tr></thead><tbody id="tabla.actividad"></tbody></table></div></div>');
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
                    let fila = '<div class="card"><div class="card-body p-3"><div class="row apunte" data-id="' + item["apunte_id"] + '"><div class="col text-truncate"><p class="my-2">' + item["apunte_person"] +'</p></div><div class="col-4 d-none"><button type="button" id="boton.nuevo" data-id="' + item["apunte_id"] + '" class="btn btn-outline-warning px-3"><i class="fas fa-trash"></i></button></div></div></div></div>';
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
                    });

                });
            });
        }
      </script>
   </body>
</html>