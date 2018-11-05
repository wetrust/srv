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
            <a class="navbar-brand" href="#">Turno</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="row m-0">
            <div class="col-8">
                <div class="card ml-3 my-3">
                    <div class="card-body">
                        <div class="form-row">
                            <div class="col">
                                <p>Mes</p>
                            </div>
                            <div class="col">
                                <select id="inputState" class="form-control">
                                    <option selected>Enero</option>
                                    <option>Febrero</option>
                                    <option>Marzo</option>
                                    <option>Abril</option>
                                    <option>Mayo</option>
                                    <option>Junio</option>
                                    <option>Julio</option>
                                    <option>Agosto</option>
                                    <option>Septiembre</option>
                                    <option>Octubre</option>
                                    <option>Noviembre</option>
                                    <option>Diciembre</option>
                                </select>
                            </div>
                            <div class="col">
                                <p>Año</p>
                            </div>
                            <div class="col">
                                <select id="inputState" class="form-control">
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
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
                                    <th scope="col">Sábado</th>
                                    <th scope="col">Domingo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th class="text-center">1</th>
                                    <td class="text-center">Mark</td>
                                    <td class="text-center">Otto</td>
                                    <td class="text-center">@mdo</td>
                                    <td class="text-center">@mdo</td>
                                    <td class="text-center">@mdo</td>
                                    <td class="text-center">@mdo</td>
                                </tr>
                                <tr>
                                    <th class="text-center">2</th>
                                    <td class="text-center">Jacob</td>
                                    <td class="text-center">Thornton</td>
                                    <td class="text-center">@fat</td>
                                    <td class="text-center">@mdo</td>
                                    <td class="text-center">@mdo</td>
                                    <td class="text-center">@mdo</td>
                                </tr>
                                <tr>
                                    <th class="text-center">3</th>
                                    <td class="text-center">Larry</td>
                                    <td class="text-center">the Bird</td>
                                    <td class="text-center">@twitter</td>
                                    <td class="text-center">@mdo</td>
                                    <td class="text-center">@mdo</td>
                                    <td class="text-center">@mdo</td>
                                </tr>
                                <tr>
                                    <th class="text-center">3</th>
                                    <td class="text-center">Larry</td>
                                    <td class="text-center">the Bird</td>
                                    <td class="text-center">@twitter</td>
                                    <td class="text-center">@mdo</td>
                                    <td class="text-center">@mdo</td>
                                    <td class="text-center">@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card my-3">
                    <div class="card-body">
                        <h6 class="card-title">Profesionales</h6>
                    </div>
                </div>
            </div>
        </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
      <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
      <script src="<?php echo Config::get('URL'); ?>js/apuntes.js"></script>
      <script>$(document).ready(function() { });</script>
   </body>
</html>