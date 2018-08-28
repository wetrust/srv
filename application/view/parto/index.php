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
    <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="//unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
    <script src="//unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
    <script>$(document).ready(function() { $('body').bootstrapMaterialDesign(); });</script>
    <style>input[type=text]{ height: calc(2.4375rem + 2px);}</style>
</head>
<body class="h-100 w-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="btn btn-outline-light my-2 my-sm-0" href="<?php echo Config::get('URL'); ?>">Inicio</a>
        <span class="navbar-text mx-auto text-white text-uppercase">Evaluación postnatal del crecimiento</span>
        <a class="btn btn-outline-light my-2 my-sm-0" href="<?php echo Config::get('URL'); ?>login/index">Ingresar</a>
    </nav>
    <section class="container px-0 pt-2">
        <div class="row">
            <div class="col-2 px-0 border-right">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a href="#neonatal">DATOS NEONATALES</a>
                    </li>
                    <li class="nav-item">
                        <a href="#recienacido">EVALUACIÓN PESO E IPN</a>
                    </li>
                    <li class="nav-item">
                        <a href="#postnatal">Proyecto a desarrollar</a>
                    </li>
                    <li class="nav-item">
                        <a href="#ajustepeso">Curvas customizadas</a>
                    </li>
                    <li class="nav-item">
                        <a href="#hipoglicemia">Protocolo hipoglicemia neonatal</a>
                    </li>
                </ul>
            </div>
            <div class="col px-0">
            </div>
        </div>
    </section>
    <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/datepicker.css">
    <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
    <script src="<?php echo Config::get('URL'); ?>js/parto.js"></script>
    <script>var serverURL = "<?php echo Config::get('URL'); ?>";</script>
</body>
</html>