<!doctype html>
<html lang="es">
<head class="h-100 w-100">
    <title>Crecimiento Fetal</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="data:;base64,=">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
    <link rel="stylesheet" href="//unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/portada.css"></script>
    <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="//unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
    <script src="//unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
    <script>$(document).ready(function() { $('body').bootstrapMaterialDesign(); });</script>
</head>
<body class="h-100 w-100">
  <div class="container h-100 w-100">
    <div class="row pt-3">
      <div class="col mt-5">
        <h2>crecimientofetal.cl<br><small>Ultrasonografía obstétrica básica para profesionales</small></h2>
        <p><small>Sitio web diseñado para profesionales de la salud (médicos) vinculados con la vigilancia del control prenatal.<br>El objetivo de esta aplicación es facilitar la valoración de datos obstétricos ecográficos relacionados con la vigilancia del crecimiento fetal. Actualmente activadas herramientas informaticas para:<br>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Determinación ecográfica de la edad gestacional<br>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valoración de biometrías y crecimiento fetal<br>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flujometria Doppler Materno / Fetal básico.<br>En el ámbito postnatal se valora el crecimiento intrauterino mediante relaciones; peso e Índice ponderal neonatal (Ipn) según edad gestacional al parto, se utilizan dos estándares chilenos, grafica nacional de peso neonatal y grafica regional (región de La Araucanía), la última a objeto de valorar efecto modulador del peso esperado según diversas variables materna No patológicas.</small></p>
        <div class="btn-group-vertical">
          <button type="button" class="btn btn-raised btn-primary">Primary</button>
          <button type="button" class="btn btn-raised btn-primary">Primary</button>
          <button type="button" class="btn btn-raised btn-primary">Primary</button>
        </div>
      </div>
      <div class="col mt-5">
      </div>
    </div>
	<div class="bienvenida mb-3 p-2">
    <div class="media">
      <img class="d-flex ml-3" src="img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
      <div class="media-body mt-4">
        <h4 class="mt-0 mb-1"><em>CrecimientoFetal.cl</em></h4>
        <p><em>Ultrasonografía obstétrica básica para profesionales</em></p>
      </div>
      <div class="media-body mt-4">
        <p class="float-right" name="fechaHora" style="color: #f0df90;">Viernes, 29 de Diciembre 2017</p>
      </div>
    </div>
	</div>
	<div class="row">
                <div class="col-4 hidden-md-down">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Acciones</h4>
                            <ul class="nav flex-column">
                              <li class="nav-item">
                                <a class="nav-link" href="<?php echo Config::get('URL'); ?>examen/express"><i class="fa fa-user-md" aria-hidden="true"></i> <strong>Iniciar exámen ecográfico EXPRESS</strong> <span class="badge badge-secondary">Libre</span></a>
                              </li>
                              <?php if (Session::userIsLoggedIn()) { ?>
                                <li class="nav-item">
                                  <a class="nav-link" href="<?php echo Config::get('URL'); ?>dicom/view"> <strong>Ver imágenes ecográficas registradas en base</strong></a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="<?php echo Config::get('URL'); ?>examen/parto"><strong>Evaluación datos Post-Natales</strong> <span class="badge badge-secondary">En construcción</span></a>
                                </li>
                            <?php } ?>
                            <?php if (Session::userIsLoggedIn() == false) { ?>
                              <li class="nav-item">
                                <a class="nav-link" href="<?php echo Config::get('URL'); ?>register/index"><i class="fa fa-user-plus" aria-hidden="true"></i>  <strong>Solicitud de ingreso al sistema</strong> <span class="badge badge-secondary">Restringido</span></a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="<?php echo Config::get('URL'); ?>login/index"><i class="fa fa-sign-in" aria-hidden="true"></i>  <strong>Ingresar a plataforma de datos</strong> <span class="badge badge-secondary">Restringido</span></a>
                              </li>
                            <?php } ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <h4 class="text-azul">Crecimientofetal.cl</h4>
                    <div id="sliderMensaje" class="carousel slide" data-ride="carousel" data-interval="60000">
                      <ol class="carousel-indicators" style="bottom:-24px;">
                        <li data-target="#sliderMensaje" data-slide-to="0" class="" style="text-indent:-74px !important"><span style="position: absolute;left: -151%;top: 15%;" class="fa fa-chevron-left text-primary">Volver</span></li>
                        <li data-target="#sliderMensaje" data-slide-to="1" style="text-indent: 28px !important" class="active"><span style="position: absolute;left: -139%;top: 15%;" class="fa fa-chevron-right text-primary">Avanzar</span></li>
                      </ol>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
				<div class="row">
					<div class="col-8">
                          <p class="text-justify text-azul"><small>Sitio web diseñado para profesionales de la salud (médicos) vinculados con la vigilancia del control prenatal.<br>El objetivo de esta aplicación es facilitar la valoración de datos obstétricos ecográficos relacionados con la vigilancia del crecimiento fetal. Actualmente activadas herramientas informaticas para:<br>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Determinación ecográfica de la edad gestacional<br>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valoración de biometrías y crecimiento fetal<br>*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flujometria Doppler Materno / Fetal básico.<br>En el ámbito postnatal se valora el crecimiento intrauterino mediante relaciones; peso e Índice ponderal neonatal (Ipn) según edad gestacional al parto, se utilizan dos estándares chilenos, grafica nacional de peso neonatal y grafica regional (región de La Araucanía), la última a objeto de valorar efecto modulador del peso esperado según diversas variables materna No patológicas.</small></p>
					</div>
<div class="col-4">                        
<img src="img/calendario.png" class="img-fluid">
</div>
</div>
                        </div>
                        <div class="carousel-item">
<div class="row">
					<div class="col-8">
                          <p class="text-justify text-azul"><small>Actualmente el análisis general de los datos ecográficos se encuentran disponibles para uso abierto <strong>(Iniciar exámen ecográfico)</strong>, en tanto que: el guardado de pacientes en base de datos requiere acceso previo registro del examinador y/o centro ecográfico.<br><br>Los cálculos y resultados de los contenidos en esta aplicación web deben ser confirmados antes de ser usados clínicamente, los resultados obtenidos mediante ella, no sustituyen el buen juicio clínico.<br><br><strong>La interpretación de los datos extraídos mediante esta herramienta informática es responsabilidad exclusiva de quien realiza y certifica el examen</strong></small></p>
					</div>
<div class="col-4">                            
<img src="img/calendario.png" class="img-fluid">
</div>
</div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
</div>
<footer>
        <div class="container">
        </div>
    </footer>
</body>
</html>