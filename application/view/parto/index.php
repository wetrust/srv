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
    <style>input[type=text]{ height: calc(2.4375rem + 2px);} body{overflow:hidden;}</style>
</head>
<body class="h-100 w-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="btn btn-outline-light my-2 my-sm-0" href="<?php echo Config::get('URL'); ?>">Inicio</a>
        <span class="navbar-text mx-auto text-white text-uppercase">Evaluación postnatal del crecimiento</span>
        <a class="btn btn-outline-light my-2 my-sm-0" href="<?php echo Config::get('URL'); ?>login/index">Ingresar</a>
    </nav>
    <?php if (Session::userIsLoggedIn() == false) { ?>
    <?php } ?>
    <section class="container px-0">
        <div class="row">
            <div class="col-2 px-0">
                <ul class="nav flex-column pt-2">
                    <li class="nav-item my-1">
                        <a href="#neonatal">Datos Neonatales</a>
                    </li>
                    <li class="nav-item my-1">
                        <a href="#recienacido">Evaluación Peso e IPN</a>
                    </li>
                    <li class="nav-item my-1">
                        <a href="#postnatal" class="text-secondary">Proyecto a desarrollar</a>
                    </li>
                    <li class="nav-item ml-2">
                        <a href="#ajustepeso">Curvas customizadas</a>
                    </li>
                    <li class="nav-item ml-2">
                        <a href="#hipoglicemia">Protocolo hipoglicemia neonatal</a>
                    </li>
                </ul>
            </div>
            <div class="col px-0 border-left">
                <div class="card bg-light">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-4">
                                <h6 class="card-title m-0"><i class="fas fa-search"></i>  Buscar Pacientes Por:</h6>
                            </div>
                            <div class="col-3">
                                <select id="buscar.parto.tipo" class="form-control">
                                    <option value="0" selected>ID de la madre</option>
                                    <option value="1">ID del Recién Nacido</option>
                                    <option value="2">Apellidos de la Madre</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <input class="form-control mt-2" id="buscar.parto.madre" type="text" placeholder="N° ID de la Madre">
                            </div>
                            <div class="col-2 ">
                                <button type="button" id="buscar.parto.madre.button" class="btn btn-outline-primary my-auto">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-1 mx-0" style="overflow: hidden;height: calc(100vh - 150px);" id="neonatal">
                    <div class="col-12 p-0 col-sm-2 order-sm-1">
                        <div class="btn-group-vertical d-flex justify-content-center" role="group" aria-label="First group">
                            <button type="button" class="btn btn-outline-secondary text-left" id="boton.parto.nuevo">Nuevo</button>
                            <button type="button" class="btn btn-outline-secondary text-left" id="boton.parto.modificar">Modificar</button>
                            <button type="button" class="btn btn-outline-secondary text-left d-none" id="boton.parto.guardar">Guardar</button>
                            <button type="button" class="btn btn-outline-secondary text-left d-none" id="boton.parto.eliminar">Eliminar</button>
                        </div>
                    </div>
                    <div class="col-12 p-0 pr-1 col-sm-10 h-100" style="overflow: auto;">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title mb-3"><i class="fas fa-female"></i> Datos de la madre</h5>
                                <div class="form-row">
                                    <div class="col-2 form-group">
                                        <h6 class="text-primary">N° de Registro</h6>
                                        <input class="form-control" type="text" id="id_paciente" disabled>
                                    </div>
                                    <div class="col-3 form-group">
                                        <h6 class="text-primary">Nombre</h6>
                                        <input class="form-control" type="text" id="nombre_madre" disabled>
                                    </div>
                                    <div class="col-3 form-group">
                                        <h6 class="text-primary">Apellido</h6>
                                        <input class="form-control" type="text" id="apellido_madre" disabled>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Lugar de parto</h6>
                                        <select class="form-control" id="lugar_parto_rn" disabled>
                                            <option value="1">temuco</option>
                                        </select>
                                    </div>
                                </div>
                                <h5 class="card-title mt-3">Datos del RN</h5>
                                <hr class="mb-3">
                                <div class="form-row">
                                    <div class="col-2">
                                        <h6 class="text-primary">N° de Registro</h6>
                                        <input class="form-control" type="text" id="id_rn" disabled>
                                    </div>
                                    <div class="col-3">
                                        <h6 class="text-primary">Nombre</h6>
                                        <input class="form-control" type="text" id="nombre_rn" disabled>
                                    </div>
                                    <div class="col-3">
                                        <h6 class="text-primary">Apellido</h6>
                                        <input class="form-control" type="text" id="apellido_rn" disabled>
                                    </div>
                                    <div class="col-4">
                                        <h6 class="text-primary">Sexo de RN</h6>
                                        <select id="sexo_rn" class="form-control" disabled>
                                            <option value="0" selected>Masculino</option>
                                            <option value="1">Femenino</option>
                                            <option value="2">Indeterminado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-child"></i> Datos de parto y RN</h5>
                                <hr class="mb-3">
                                <div class="form-row">
                                    <div class="col-3">
                                        <h6 class="text-primary"">Peso RN</h6>
                                        <div class="input-group">
                                            <input class="form-control" style="background-color:#e9ecef;" id="datos.neonatal.peso" min="0" max="9999" type="number" disabled>
                                            <div class="input-group-append">
                                                <div class="input-group-text">grs.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <h6 class="text-primary">Talla RN</h6>
                                        <div class="input-group">
                                            <input class="form-control" style="background-color:#e9ecef;" id="datos.neonatal.talla" min="0" max="999" maxlength="3" type="number" disabled>
                                            <div class="input-group-append">
                                                <div class="input-group-text">mm.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <h6 class="text-primary">Perimetro Craneo</h6>
                                        <div class="input-group">
                                            <input class="form-control" style="background-color:#e9ecef;" type="number" min="0" max="999" id="perimetro_craneo_rn" disabled>
                                            <div class="input-group-append">
                                                <div class="input-group-text">mm.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <h6 class="text-primary">Indices calculados (Ipn)</h6>
                                        <div class="input-group">
                                            <input class="form-control" id="datos.neonatal.ipn" disabled type="number">
                                            <div class="input-group-append">
                                                <div class="input-group-text">mm.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Meconio al parto</h6>
                                        <select id="meconio" class="form-control" disabled>
                                            <option value="0" selected>Ausente</option>
                                            <option value="1">Fluido</option>
                                            <option value="2">Espeso</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Apgar 1° Min.</h6>
                                        <select id="apgar_1" class="form-control" disabled>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary"">Apgar 5° Min.</h6>
                                        <select id="apgar_5" class="form-control" disabled>
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Fecha de Parto</h6>
                                        <input class="form-control" data-date-format="dd/mm/yyyy" type="text" id="fecha_parto_rn" disabled>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">E. Gestacional</h6>
                                        <select id="datos.neonatal.edad" class="form-control" disabled>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Término de Gestación</h6>
                                        <select id="termino_parto" class="form-control" disabled>
                                            <option value="0" selected>Parto</option>
                                            <option value="1">Aborto</option>
                                            <option value="2">Desconocido</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Tipo de Parto</h6>
                                        <select id="tipo_parto" class="form-control" disabled>
                                            <option value="0" selected>Vaginal</option>
                                            <option value="1">Cesarea</option>
                                            <option value="2">Forceps</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Peso Placentario</h6>
                                        <div class="input-group">
                                            <input class="form-control" id="peso_placentario" type="number" min="0" max="9999" disabled>
                                            <div class="input-group-append">
                                                <div class="input-group-text">grs.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Patologia Obstétrica</h6>
                                        <select id="tipo_patologia_obstetrica" class="form-control" disabled>
                                            <option value="0" selected></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-notes-medical"></i> Patologia del RN</h5>
                                <hr class="mb-3">
                                <div class="form-row">
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Hiperbilirrubinemia</h6>
                                        <select id="hiperbilirrubinemia" class="form-control" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Poliglobulia</h6>
                                        <select id="poliglobulia" class="form-control" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Hospital - UCIN</h6>
                                        <select id="hospital_ucin" class="form-control" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Sindrome dificultad respiratoria</h6>
                                        <select id="sindrome_respiratorio" class="form-control" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Alta con su madre</h6>
                                        <select id="alta_con_madre" class="form-control" disabled>
                                            <option value="0">Si</option>
                                            <option value="1">No</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Profesional atención del Parto</h6>
                                        <select class="form-control" id="prof.atencion.parto" disabled>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-1 mx-0" style="overflow: hidden;height: calc(100vh - 150px);" id="recienacido">
                        <div class="col-5">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Datos de Recién Nacido</h5>
                                    <hr class="mb-3">
                                    <div class="form-row">
                                        <div class="col">
                                            <h6 class="text-primary">E. Gestacional</h6>
                                            <select id="edadGestacional" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" aria-describedby="edadGestacionalHelp" disabled></select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-6 mt-2">
                                            <h6 class="text-primary">Peso RN (gr.)</h6>
                                            <input type="number" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="pesoRN" aria-describedby="pesoRNHelp" min="0" max="9999" disabled>
                                        </div>
                                        <div class="col-6 mt-2">
                                            <h6 class="text-primary">Talla RN (mm.)</h6>
                                            <input type="number" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="tallaRN" aria-describedby="tallaRNHelp" min="0" max="999" maxlength="3" disabled>
                                        </div>
                                    </div>
                                    <h5 class="card-title mt-4">Datos de RN calculado</h5>
                                    <hr class="mb-3">
                                    <div class="form-row">
                                        <div class="col">
                                            <h6 class="text-primary">IPN <small>((peso / talla)^3)*100</small></h6>
                                            <input type="number" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="IPNRN" disabled>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-6 mt-2">
                                            <h6 class="text-primary">Peso / EG</h6>
                                            <input type="text" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="PesoPct" style="font-size: 0.8rem;" disabled>
                                        </div>
                                        <div class="col-6 mt-2">
                                            <h6 class="text-primary">&nbsp;</h6>
                                            <input type="text" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="PesoEge" style="font-size: 0.8rem;" disabled>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-6 mt-2">
                                            <h6 class="text-primary">IPN / Ege</h6>
                                            <input type="text" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="IpnPct" style="font-size: 0.8rem;" disabled>
                                        </div>
                                        <div class="col-6 mt-2">
                                            <h6 class="text-primary">&nbsp;</h6>
                                            <input type="text" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="IpnEge" style="font-size: 0.8rem;" disabled>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <form>
                                    <div class="form-group mb-0">
                                        <label for="graficoEstandar"><strong>Seleccione Curva</strong></label>
                                        <select class="form-control" id="graficoEstandar" style="font-size: 0.8rem;">
                                            <option value="0">Peso / Edad Gestacional (Curva Nacional SOCHIPE)</option>
                                            <option value="1">Peso / Edad Gestacional (Curva Regional Araucanía)</option>
                                            <option></option>
                                            <option value="2">IPN / Edad Gestacional (Curva Nacional SOCHIPE)</option>
                                            <option value="3">IPN / Edad Gestacional (Curva Regional Araucanía)</option>
                                            <option></option>
                                        </select>
                                    </div>
                                    </form>
                                    <script src="https://code.highcharts.com/highcharts.js"></script>
                                    <div id="grafico"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <small class="text-info">Graficas para categorizar crecimiento y ponderación de variables biológicas</small><br>
                            <small style="font-size: 60%;">* Grafica Nacional: M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274. <a id="pdfnacionalview" href="#pdfviebox">Ver PDF</a>    ** Grafica Regional: Lagos y col. Rev. Chilena Obtet. Ginecol. 2009; 74(4). <a id="pdfregionalview" href="#pdfviebox">Ver PDF</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/datepicker.css">
    <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
    <script src="<?php echo Config::get('URL'); ?>js/parto.js"></script>
    <script>var serverURL = "<?php echo Config::get('URL'); ?>";</script>
</body>
</html>