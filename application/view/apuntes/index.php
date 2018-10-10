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
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.home" title="Empezar nuevamente"><i class="fas fa-home"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.configuracion" title="Configuración"><i class="fas fa-cog"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.buscar" title="Buscar apunte"><i class="fas fa-search"></i></button>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0" id="boton.imprimir" title="Ver resumen e imprimir"><i class="fas fa-print"></i></button>
                    </div>
                    <div class="form-inline d-none" id="div.busqueda">
                        <input id="caja.busqueda" class="form-control mr-sm-2" type="search" placeholder="Escribir" aria-label="Search">
                    </div>
                </nav>
                <div style="overflow-y:scroll;height:calc(100% - 7.1rem);" id="contenedor.tarjetas">
                </div>
            </div>
            <div class="col-9 h-100" style="overflow-y:scroll;height:calc(100% - 7.1rem);">
                <div class="card">
                    <div class="card-body">
                        <div class="btn-group" role="group" aria-label="Menú">
                            <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.nuevo" title="Nuevo apunte"><i class="fas fa-plus"></i></button>
                            <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.editar" title="Editar apunte"><i class="fas fa-pen"></i></button>
                            <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.guardar" title="Guardar apunte"><i class="fas fa-save"></i></button>
                            <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.cancelar" title="Cancelar apunte"><i class="fas fa-ban"></i></button>
                        </div>
                        <div class="form-group col"><label for="formulario.paciente"><strong>Nombre del evento</strong></label><input class="form-control" id="formulario.paciente" type="email" disabled></div>
                        <div class="row m-0">
                            <div class="col">
                                <div class="form-group"><label for="formulario.fecha"><strong>Fecha</strong></label><input class="form-control" id="formulario.fecha" data-date-format="dd/mm/yyyy" type="text" disabled></div>
                                <div class="form-group"><label for="formulario.hora"><strong>Hora</strong></label><input class="form-control" id="formulario.hora" type="text" disabled></div>
                                <div class="form-group"><label for="formulario.palabras"><strong>Primer participante</strong></label><input class="form-control" id="formulario.participante" type="text" disabled></div>
                                <div class="form-group"><label for="formulario.palabras"><strong>Otros participantes</strong></label><input class="form-control" id="formulario.palabras" type="text" disabled></div>
                                <div class="form-group"><label for="formulario.lugar"><strong>Lugar del evento</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="formulario.lugar" disabled></select></div>
                                <div class="form-group"><label for="formulario.actividad"><strong>Tipo de evento</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="formulario.actividad" disabled></select></div>
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
                                <div class="form-group"><label for="formulario.comentarios"><strong>Comentarios relativos al evento; operación, reunión, etc.</strong></label><textarea class="form-control border h6" id="formulario.comentarios" rows="25" disabled></textarea></div>
                                <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.calculos" title="calculos"><i class="fas fa-calculator"></i></button>
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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
      <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
      <script src="<?php echo Config::get('URL'); ?>js/apuntes.js"></script>
      <script>$(document).ready(function() { var dateTime = new Date(); var day = ("0" + dateTime.getDate()).slice(-2); var month = ("0" + (dateTime.getMonth() + 1)).slice(-2); $("#formulario\\.fecha").val((day) + "/" + (month) + "/" + dateTime.getFullYear()); $('#formulario\\.fecha').datepicker('setValue', (day) + "/" + (month) + "/" + dateTime.getFullYear());$("#formulario\\.fcancelacion").val((day) + "/" + (month) + "/" + dateTime.getFullYear()); $('#formulario\\.fcancelacion').datepicker('setValue', (day) + "/" + (month) + "/" + dateTime.getFullYear());});</script>
   </body>
</html>