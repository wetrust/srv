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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Notas de apuntes</a>
            <div class="dropdown pull-xs-right">
                <button class="btn bmd-btn-icon dropdown-toggle" type="button" id="lr1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">more_vert</i><div class="ripple-container"></div></button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="lr1" x-placement="bottom-end" style="position: absolute; top: 32px; left: 32px; will-change: top, left;">
                    <button class="dropdown-item" type="button">Action</button>
                    <button class="dropdown-item" type="button">Another action</button>
                    <button class="dropdown-item disabled" type="button">Disabled action</button>
                    <div class="dropdown-divider"> </div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
            </div>
        </nav>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
        <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
        <!--<script src="<?php echo Config::get('URL'); ?>js/apuntes.js"></script>
        <script>$(document).ready(function() { var dateTime = new Date(); var day = ("0" + dateTime.getDate()).slice(-2); var month = ("0" + (dateTime.getMonth() + 1)).slice(-2); $("#formulario\\.fecha").val((day) + "/" + (month) + "/" + dateTime.getFullYear()); $('#formulario\\.fecha').datepicker('setValue', (day) + "/" + (month) + "/" + dateTime.getFullYear());$("#formulario\\.fcancelacion").val((day) + "/" + (month) + "/" + dateTime.getFullYear()); $('#formulario\\.fcancelacion').datepicker('setValue', (day) + "/" + (month) + "/" + dateTime.getFullYear());});</script> -->
    </body>
</html>