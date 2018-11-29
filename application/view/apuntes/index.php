<!doctype html>
<html lang="es">
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
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="<?php echo Config::get('URL'); ?>apuntes">Apuntes de Notas</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHome" aria-controls="navbarHome" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarHome">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="boton.home"><i class="fas fa-home fa-2x text-white"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="boton.imprimir"><i class="fas fa-print fa-2x text-white"></i></a>
                    </liv>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><?php echo Session::get('user_name'); ?> </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarUser">
                            <a class="dropdown-item" id="boton.configuracion"><i class="fas fa-cog"></i> Configuración</a>
                            <a class="dropdown-item" href="<?php echo Config::get('URL'); ?>login/logout"><i class="fas fa-door-closed"></i> Salir</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="row flex-xl-nowrap m-0">
            <div class="col-12 col-md-3 col-xl-3 p-md-0">
                <nav class="navbar navbar-light bg-light justify-content-between">
                    <div class="form-inline my-2 my-lg-0">
                        <input id="caja.busqueda" type="search" placeholder="Buscar.." aria-label="Search" class="form-control">
                        <button type="button" id="boton.lista" title="Ordenar por alfabeto" class="btn btn-outline-primary"><i class="fas fa-font"></i></button>
                        <button type="button" id="boton.listd" title="Ordenar por fecha" class="btn btn-outline-primary"><i class="fas fa-calendar-alt"></i></button>
                    </div>
                </nav>
                <div style="overflow-y:scroll;height:calc(100% - 7.1rem);" class="pb-5" id="contenedor.tarjetas">
                </div>
            </div>
            <div class="col-12 col-md-9 col-xl-9 pl-md-5">
                <div class="card">
                    <div class="card-body">
                        <div class="btn-group" role="group" aria-label="Menú">
                            <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.nuevo" title="Nuevo apunte"><i class="fas fa-plus"></i></button>
                            <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.editar" title="Modificar apunte"><i class="fas fa-pen"></i></button>
                            <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.guardar" title="Guardar apunte"><i class="fas fa-save"></i></button>
                            <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 d-none" id="boton.cancelar" title="Cancelar apunte"><i class="fas fa-ban"></i></button>
                        </div>
                        <div class="row m-0">
                            <div class="col">
                                <div class="form-group row">
                                    <div class="col-8">
                                        <label for="formulario.actividad"><strong>Tipo de evento</strong>(<i class="fas fa-cog text-success"></i>)</label>
                                    </div>
                                    <div class="col-4">
                                        <button type="button" class="btn btn-outline-primary" id="boton.aplicar" title="Activar evento"><i class="fas fa-check"></i></button>
                                    </div>
                                    <div class="col-12">
                                        <select class="form-control" id="formulario.actividad" disabled="">
                                            <option value="1">Evento dos</option>
                                            <option value="2">Evento tres</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group"><label for="formulario.lugar"><strong>Lugar del evento</strong>(<i class="fas fa-cog text-success"></i>)</label><select class="form-control" id="formulario.lugar" disabled></select></div>
                                <div class="form-group"><label for="formulario.fecha"><strong>Fecha</strong></label><input class="form-control" id="formulario.fecha" data-date-format="dd-mm-yyyy" type="text" disabled></div>
                                <div class="row">
                                    <div class="form-group col-6">
                                        <label for="formulario.hora"><strong>Hora</strong></label>
                                        <select class="form-control" id="formulario.hora" disabled=""></select>
                                    </div>
                                    <div class="form-group col-6">
                                        <label for="formulario.hora"><strong>Minutos</strong></label>
                                        <select class="form-control" id="formulario.minutos" disabled=""></select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="formulario.palabras"><strong>Primer participante</strong>(<i class="fas fa-cog text-success"></i>)</label>
                                    <select class="form-control" id="formulario.participante" disabled=""></select>
                                </div>
                                <div class="form-group">
                                    <label for="formulario.palabras"><strong>Otros participantes</strong></label>
                                    <select class="form-control" id="formulario.palabras" disabled=""></select>
                                </div>
                                <input id="formulario.id" type="hidden" value="" />
                                <div class="form-group mt-4"><label for="formulario.cancelacion"><strong>Cierre del evento</strong></label><select class="form-control" id="formulario.cancelacion" disabled><option value="0">Pendiente</option><option value="2">Cancelado</option><option value="3">Suspendido</option></select></div>
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="opcion.financiera">
                                    <label class="form-check-label" for="opcion.financiera"><strong>Registro financiero</strong></label>
                                </div>
                                <div class="d-none mt-3" id="div.financiero">
                                    <div class="form-group"><label for="formulario.fcancelacion"><strong>Fecha de cancelación</strong></label><input class="form-control" id="formulario.fcancelacion" type="text" data-date-format="dd-mm-yyyy" disabled></div>
                                    <div class="form-group"><label for="formulario.valor"><strong>Valor cancelado</strong></label><input class="form-control" id="formulario.valor" type="number" disabled></div>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="formulario.paciente"><strong>Nombre</strong> <small>(identificación del registro)</small></label>
                                            <input class="form-control" id="formulario.nombre" type="text" disabled>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <label for="formulario.paciente"><strong>Correo</strong> <small>(identificación del usuario)</small></label>
                                        <input class="form-control" type="text" value="<?php echo Session::get('user_email'); ?>" disabled>
                                    </div>
                                </div>
                                <div class="form-group"><label for="formulario.comentarios"><strong>Comentarios relativos al tipo de evento seleccionado.</strong></label><textarea class="form-control border h6" id="formulario.comentarios" rows="25" disabled></textarea></div>
                                <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1" id="boton.calculos" title="calculos"><i class="fas fa-calculator"></i></button>
                                <?php if (Session::get("user_account_type") == 7) : ?>
                                    <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-1 float-right" id="boton.usuarios" title="Usuarios"><i class="fas fa-users"></i></button>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <div class="modal" tabindex="-1" role="dialog" id="dialog.view">
         <div class="modal-dialog" role="document" style="max-width: 950px;">
            <div class="modal-content">
               <div class="modal-header">
                  <h4 class="modal-title" id="dialog.title"></h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
               </div>
               <div class="modal-body" id="dialog.body"></div>
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