<div class="container" id="consulta">
   <div class="bienvenida mb-3 p-2">
      <div class="media">
         <img class="d-flex ml-3" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
         <div class="media-body mt-4">
            <h4 class="mt-0 mb-1"><em>CrecimientoFetal.cl</em></h4>
            <p><em>Ultrasonografía obstétrica básica para profesionales</em></p>
         </div>
         <div class="media-body mt-4">
            <p class="float-right" name="fechaHora" style="color: #f0df90;"></p>
         </div>
      </div>
   </div>
   <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
         <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>">Inicio</a></li>
         <li class="breadcrumb-item active" aria-current="page">Nuevo Exámen</li>
         <li class="ml-auto"><a href="<?php echo Config::get('URL'); ?>">Volver</a></li>
      </ol>
   </nav>
<div class="row">
<div class="col">
<h3 class="mb-4">1.- Primer paso | Seleccionar o crear paciente</h3>
</div>
</div>
   <div class="row">
<div class="col-6">
<div class="card">
  <img class="card-img-top" src="<?php echo Config::get('URL'); ?>img/elderly-1461424_640.jpg" alt="Card image cap">
  <div class="card-body text-center">
    <h4 class="card-title">Nuevo Paciente</h4>
    <p class="card-text text-left">Cree un nuevo paciente en la base de datos al cual se le realizara el exámen.</p>
    <a href="<?php echo Config::get('URL'); ?>pacientes/nuevo" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo Paciente</a>
  </div>
</div>
</div>
<div class="col-6">
<div class="card">
  <img class="card-img-top" src="<?php echo Config::get('URL'); ?>img/doctor-548133_640.jpg" alt="Card image cap">
  <div class="card-body text-center">
    <h4 class="card-title">Buscar paciente</h4>
    <p class="card-text text-left">Busque un paciente anteriormente guardado para realizar un nuevo exámen.</p>
    <a href="#" class="btn btn-primary text-center"><i class="fa fa-search" aria-hidden="true"></i> Buscar Paciente</a>
  </div>
</div>
</div>
</div>
<link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/datepicker.css">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="<?php echo Config::get('URL'); ?>js/static/app.class.js"></script>
<script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
<script src="<?php echo Config::get('URL'); ?>js/static/botones.js"></script>
<script src="<?php echo Config::get('URL'); ?>js/static/configuracion.js"></script>
<script src="<?php echo Config::get('URL'); ?>js/static/funciones.js"></script>
<script src="<?php echo Config::get('URL'); ?>js/static/graficos.js"></script>
<script src="<?php echo Config::get('URL'); ?>js/static/main.js"></script>