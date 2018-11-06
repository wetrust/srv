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
        <title>Turnos</title>
    </head>
    <body class="h-100">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Turno CAT</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Turnos
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" id="boton.turno">Nuevo Turno</a>
                        <a class="dropdown-item" href="#">Cambiar turno</a>
                        <div class="dropdown-divider"></div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Configuración
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" id="boton.profesionales">Profesionales</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="row m-0">
            <div class="col-7">
                <div class="card ml-3 my-3">
                    <div class="card-body">
                        <div class="form-row">
                            <div class="col">
                                <p>Mes</p>
                            </div>
                            <div class="col">
                                <select id="fecha.mes" class="form-control">
                                    <option value="01">Enero</option>
                                    <option value="02">Febrero</option>
                                    <option value="03">Marzo</option>
                                    <option value="04">Abril</option>
                                    <option value="05">Mayo</option>
                                    <option value="06">Junio</option>
                                    <option value="07">Julio</option>
                                    <option value="08">Agosto</option>
                                    <option value="09">Septiembre</option>
                                    <option value="10">Octubre</option>
                                    <option value="11" selected>Noviembre</option>
                                    <option value="12">Diciembre</option>
                                </select>
                            </div>
                            <div class="col">
                                <p>Año</p>
                            </div>
                            <div class="col">
                                <select id="fecha.ano" class="form-control">
                                    <option value="2017">2017</option>
                                    <option value="2018" selected>2018</option>
                                    <option value="2019">2019</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card ml-3">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Lunes</th>
                                    <th scope="col">Martes</th>
                                    <th scope="col">Miércoles</th>
                                    <th scope="col">Jueves</th>
                                    <th scope="col">Viernes</th>
                                    <th scope="col" class="text-danger">Sábado</th>
                                    <th scope="col" class="text-danger">Domingo</th>
                                </tr>
                            </thead>
                            <tbody id="table.calendario">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-5">
                <div class="card my-3">
                    <div class="card-body">
                        <h6 class="card-title">Turnos para el día</h6>
                        <p>Seleccione un día para ver el turno correspondiente<p/>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" tabindex="-1" role="dialog" id="dialog.view">
         <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="dialog.title"></h4>
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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
      <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
      <style>
          .table tbody td:hover{
              background-color:rgba(0,0,0,.075);
          }
      </style>
      <script>
        $(document).ready(function() {
            $("#fecha\\.mes").on("change", function(){
                makeCalendario();
            });

            $("#fecha\\.ano").on("change", function(){
                makeCalendario();
            });

            makeCalendario();

            $("#boton\\.turno").on("click", function(){
                $("#dialog\\.title").html("Añadir un nuevo turno a un día");
                $("#dialog\\.body").html('<div class="row"><div class="form-group col"><label for="turnos.profesionales">Profesional</label><select class="form-control" id="turnos.profesionales"></select></div></div><div class="row"><p class="col-12"><strong>Entrada</strong></p><div class="form-group col"><label for="turnos.fecha.in">Fecha</label><input class="form-control" type="date" id="turnos.fecha.in"></div><div class="form-group col"><label for="turnos.hora.in">Hora</label><select class="form-control" id="turnos.hora.in"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select></div></div><div class="row"><p class="col-12"><strong>Salida</strong></p><div class="form-group col"><label for="turnos.fecha.out">Fecha del turno salida</label><input class="form-control" type="date" id="turnos.fecha.out"></div><div class="form-group col"><label for="turnos.hora.out">Hora Salida</label><select class="form-control" id="turnos.hora.out"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select></div></div>');
                $("#dialog\\.view").modal("show");
                cargarProfesionales();
                $("#dialog\\.delete").remove();
                $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete">Guardar</button>');

                $("#dialog\\.footer").on("click", function(){
                    let datos = {
                        accion: "profesionalesNuevo",
                        profesional: $("#turnos.profesionales").val(),
                        fechainic: $("#turnos\\.fecha\\.in").val(),
                        horainic: $("#turnos\\.hora\\.in").val(),
                        fechafin: $("#turnos\\.fecha\\.out").val(),
                        horafin: $("#turnos\\.hora\\.out").val() 
                    }

                    $.post("https://servidor.crecimientofetal.cl/turnos/api", datos).done(function(response){
                        $("#profesional\\.nombre").val("");
                        $("#profesional\\.rut").val("");
                        $("#profesional\\.telefono").val("");
                        $("#profesional\\.correo").val("");
                        $("#boton\\.profesional\\.nuevo").removeClass("d-none");
                        $("#boton\\.profesional\\.guardar").addClass("d-none");
                        $("#boton\\.profesional\\.cancelar").addClass("d-none");
                        cargarProfesionales();
                    });
                });
            });

            $("#boton\\.profesionales").on("click", function(){
                $("#dialog\\.title").html("Profesionales disponibles para turno");
                $("#dialog\\.body").html('<div class="btn-group" role="group" aria-label="Menú"> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" title="Nueva actividad" id="boton.profesional.nuevo"><i class="fas fa-pen"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" title="Nueva actividad" id="boton.profesional.guardar"><i class="fas fa-save"></i></button> <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" title="Nueva actividad" id="boton.profesional.cancelar"><i class="fas fa-ban"></i></button> </div><div id="div.profesional" class="my-3 mx-0 d-none"> <div class="row"><div class="form-group col"> <label for="profesional.nombre">1.- Nombre del profesional</label> <input type="text" class="form-control" id="profesional.nombre"> </div><div class="form-group col"> <label class="mr-3" for="profesional.rut">2.- R.U.T.</label> <input type="text" class="form-control" id="profesional.rut"></div></div><div class="row"><div class="form-group col"> <label for="profesional.telefono">3.- Teléfono</label> <input type="text" class="form-control" id="profesional.telefono"> </div><div class="form-group col"> <label class="mr-3" for="profesional.correo">4.- Correo Electrónico</label> <input type="text" class="form-control" id="profesional.correo"></div></div></div><table class="table table-hover"> <thead class="table-success"> <tr> <th scope="col">Nombre profesional</th> <th scope="col">Teléfono</th> <th scope="col">Correo Electrónico</th></tr></thead> <tbody id="tabla.profesional"></tbody> </table>');
                $("#dialog\\.view").modal("show");

                $("#dialog\\.delete").remove();
                $("#boton\\.profesional\\.nuevo").on("click", function(){
                    $("#div\\.profesional").removeClass("d-none");
                    $("#boton\\.profesional\\.nuevo").addClass("d-none");
                    $("#boton\\.profesional\\.guardar").removeClass("d-none")
                    $("#boton\\.profesional\\.cancelar").removeClass("d-none")
                });

                $("#boton\\.profesional\\.guardar").on("click", function(){
                    $("#div\\.profesional").addClass("d-none");
                    let datos = {
                        accion: "profesionalesNuevo",
                        nombre: $("#profesional\\.nombre").val(),
                        rut: $("#profesional\\.rut").val(),
                        telefono: $("#profesional\\.telefono").val(),
                        correo: $("#profesional\\.correo").val() 
                    }

                    $.post("https://servidor.crecimientofetal.cl/turnos/api", datos).done(function(response){
                        $("#profesional\\.nombre").val("");
                        $("#profesional\\.rut").val("");
                        $("#profesional\\.telefono").val("");
                        $("#profesional\\.correo").val("");
                        $("#boton\\.profesional\\.nuevo").removeClass("d-none");
                        $("#boton\\.profesional\\.guardar").addClass("d-none");
                        $("#boton\\.profesional\\.cancelar").addClass("d-none");
                        cargarProfesionales();
                    });
                });

                $("#boton\\.profesional\\.cancelar").on("click", function(){
                    $("#div\\.profesional").addClass("d-none");
                    $("#profesional\\.nombre").val("");
                    $("#profesional\\.rut").val("");
                    $("#profesional\\.telefono").val("");
                    $("#profesional\\.correo").val("");
                    $("#boton\\.profesional\\.nuevo").removeClass("d-none");
                    $("#boton\\.profesional\\.guardar").addClass("d-none")
                    $("#boton\\.profesional\\.cancelar").addClass("d-none")
                });

                cargarProfesionales();
            });
        });

      function makeCalendario(){
        let data = {
                accion : "calendario",
                mes: $("#fecha\\.mes").val(),
                ano: $("#fecha\\.ano").val()
            }

            $.post("https://servidor.crecimientofetal.cl/turnos/api", data).done(function(response){
                $("#table\\.calendario").empty();
                if (Object.keys(data).length > 0) {
                    let fila = '<tr>';
                    let i = response.diaDeLaSemana;
                    let j = response.diasEnElMes;
                    let k = 1;
                    let h = 1;

                    for (h; h < i; h++) {
                        fila += '<td class="text-center"></td>';
                    }

                    for (h; h < 8; h++) {
                        fila += '<td class="text-center">' + k + '</td>';
                        k++;
                    }

                    fila += '</tr>';
                    $("#table\\.calendario").append(fila);
                    
                    fila = '<tr>';
                    h = 1;

                    for (h; h < 8; h++) {
                        fila += '<td class="text-center">' + k + '</td>';
                        k++;
                    }

                    fila += '</tr>';
                    $("#table\\.calendario").append(fila);

                    fila = '<tr>';
                    h = 1;

                    for (h; h < 8; h++) {
                        fila += '<td class="text-center">' + k + '</td>';
                        k++;
                    }

                    fila += '</tr>';
                    $("#table\\.calendario").append(fila);

                    fila = '<tr>';
                    h = 1;

                    for (h; h < 8; h++) {
                        fila += '<td class="text-center">' + k + '</td>';
                        k++;
                    }

                    fila += '</tr>';
                    $("#table\\.calendario").append(fila);

                    fila = '<tr>';
                    h = 1;

                    for (h; h < 8; h++) {
                        if (k == j ){
                            h = 7;
                        }
                        fila += '<td class="text-center">' + k + '</td>';
                        k++;
                    }

                    fila += '</tr>';
                    $("#table\\.calendario").append(fila);

                    //
                    //para meses con 31 dias
                    if (k <= j ){
                        fila = '<tr>';
                        h = 1;

                        for (h; h < 8; h++) {
                            if (k >= j ){
                                h = 7;
                            }
                            fila += '<td class="text-center">' + k + '</td>';
                            k++;
                        }

                        fila += '</tr>';
                        $("#table\\.calendario").append(fila);
                    }
                }
            });
      }

      function cargarProfesionales(){
        let data = {
                accion : "profesionales",
            }

            $.post("https://servidor.crecimientofetal.cl/turnos/api", data).done(function(response){
                $("#tabla\\.profesional").empty();
                if (Object.keys(data).length > 0) {
                    $.each(response, function(i, item) {
                        let fila = '<tr><td>' + item["profesional_name"] + '</td><td>' + item["profesional_telefono"] + '<td class="columna-profesional">' + item["profesional_correo"] + '<button type="button" data-id="' + item["profesional_id"] + '" class="btn btn-outline-warning px-3 eliminar-profesional float-right d-none"><i class="fas fa-trash"></i></button></td></tr>';
                        let option = '<option value="' + item["profesional_id"] + '">' + item["profesional_name"] + '</option>';
                        $("#turnos\\.profesionales").append(option);
                        $("#tabla\\.profesional").append(fila);
                    });

                    $(".columna-profesional").on("mouseenter",function(){
                        $(this).children("button").removeClass("d-none");
                    }).on("mouseleave", function(){
                        $(this).children("button").addClass("d-none");
                    });

                $(".eliminar-profesional").on("click", function(){
                    let profesional_id = $(this).data("id");
                    $("#dialog\\.delete").remove();
                    $("#dialog\\.title").html('Eliminar Profesional')
                    $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el profesional seleccionado?</p>')
                    $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" data-id="' + profesional_id + '">Eliminar</button>');
        
                    $("#dialog\\.delete").on("click", function(){
                        let profesional_id = $(this).data("id");
                        var solicitud = {
                            accion: "profesionalesEliminar",
                            id: parseInt(profesional_id)
                        };
                        $.post("https://servidor.crecimientofetal.cl/turnos/api", solicitud).done(function(data){
                            $("#dialog\\.body").empty();
                            $("#boton\\.profesionales").trigger("click");
                        });
                    });
                    $("#dialog\\.view").modal("show");
                });
                }
            });
      }
      </script>
   </body>
</html>