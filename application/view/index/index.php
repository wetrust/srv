<!doctype html>
<html lang="es">
<head class="h-100 w-100">
    <title>Crecimiento Fetal</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="data:;base64,=">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons">
    <link rel="stylesheet" href="//unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous">
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/portada.css"></script>
    <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="//unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
    <script src="//unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
    <script>$(document).ready(function() { $('body').bootstrapMaterialDesign(); });</script>
</head>
<body class="h-100 w-100">
  <div class="h-100 w-100" id="main">
    <div class="container">
      <div class="row py-3">
        <div class="col mt-3">
          <h1><strong>crecimientofetal.cl</strong></h1>
          <h3 class="mb-3"><small>Ultrasonografía obstétrica básica para profesionales</small></h3>
          <p class="text-justify"><small>Plataforma web diseñada para profesionales de la salud (médicos) vinculados con la vigilancia del control prenatal.<br>El objetivo de esta aplicación es facilitar valoración de datos obstétricos ecográficos relacionados con la vigilancia del crecimiento fetal, tanto pre como post natal.<br>Software obstétrico propiedad intelectual Dr. Rudecindo Lagos, Maternidad Hospital Regional de Temuco, Facultad de Medicina Universidad de La Frontera Temuco - Chile <img src="<?php echo Config::get('URL'); ?>img/chile.jpg" alt="Chile"></small></p>
          <div class="btn-group-vertical">
            <a href="<?php echo Config::get('URL'); ?>examen/express" class="btn btn-raised btn-primary">Iniciar módulo exámen ecográfico</a>
            <a href="<?php echo Config::get('URL'); ?>examen/parto" class="btn btn-raised btn-primary">Evaluación Postanal del crecimiento</a>
            <a href="<?php echo Config::get('URL'); ?>acerca" class="btn btn-raised btn-default">Más información</a>
          </div>
        </div>
        <div class="col-7 mt-3">
          <img class="d-block mx-auto img-fluid" src="img/feto-computador.png" alt="logo" >
        </div>
      </div>
    </div>
  </div>
  <div class="h-100 w-100" id="objetivos">
    <div class="container py-5">
      <div class="row">
        <div class="col">
          <h4>MÓDULO PRENATAL<br><small>Biometría ecográfica y flujometría Doppler</small></h4>
          <p class="text-justify"><small>Facilitar la valoración de datos obstétricos ecográficos relacionados con la vigilancia del crecimiento fetal. Actualmente activadas herramientas informaticas para:</small></p>
          <ul class="list-unstyled">
            <li><i class="fas fa-check"></i> <small>Determinación ecográfica de la edad gestacional</small></li>
            <li><i class="fas fa-check"></i> <small>Valoración de biometrías y crecimiento fetal</small></li>
            <li><i class="fas fa-check"></i> <small>Flujometria Doppler Materno / Fetal básico</small></li>
          </ul>
          <p class="text-justify"><small>Actualmente el análisis general de los datos ecográficos se encuentran disponibles para uso abierto (<strong>Iniciar exámen ecográfico</strong>), en tanto que: el guardado de información en base de datos, requiere registro previo del examinador y/o centro ecográfico.</small></p>
        </div>
        <div class="col">
          <h4>MÓDULO POSTNATAL<br><small>Evaluación de datos relacionados al parto ( Peso e Ipn )</small></h4>
          <p class="text-justify"><small>El criterio neonatal, tanto con fines pronóstico como de manejo clínico, es categorizar el peso del recién nacido (RN) como pequeño (PEG), adecuado (AEG) o grande (GEG) para su edad gestacional, según se ubique bajo el percentil 10, entre los percentiles 10 y 90 o sobre el percentil 90 de una gráfica de crecimiento determinada.<br>Secundariamente integrando la talla del RN se obtiene el índice ponderal neonatal ((peso / talla)^3)*100), clasificando tambien a los RN en enflaquecidos, eutróficos y obesos, según se ubiquen bajo el percentil 10, entre los percentiles 10 y 90 o sobre el percentil 90 de la gráfica IPN/edad gestacional. Actualmente activadas herramientas informaticas para:</small></p>
          <ul class="list-unstyled">
            <li><i class="fas fa-check"></i> <small>Calcular índice ponderal neonatal ( IPN )</small></li>
            <li><i class="fas fa-check"></i> <small>Categorizar del peso e Ipn según edad gestacional</small></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="h-100 w-100 bg-primary generico">
    <div class="container">
      <div class="row">
        <div class="col pt-3">
        <p class="text-center text-white pb-0 mb-0">Los cálculos obtenidos mediante esta aplicación web deben ser confirmados antes de ser usados clínicamente, los resultados obtenidos mediante ella, no sustituyen el buen juicio clínico. La interpretación de los datos obtenidos es responsabilidad exclusiva de quien realiza y certifica el examen</p>
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