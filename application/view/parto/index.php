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
                    <li class="nav-item ml-2 my-1">
                        <a href="#ajustepeso">Curvas customizadas</a>
                    </li>
                    <li class="nav-item ml-2 my-1">
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
                            <button type="button" class="btn btn-outline-secondary text-left d-none" id="boton.parto.modificar">Modificar</button>
                            <button type="button" class="btn btn-outline-danger text-left d-none" id="boton.parto.guardar">Guardar</button>
                            <button type="button" class="btn btn-outline-secondary text-left d-none" id="boton.parto.cancelar">Cancelar</button>
                            <button type="button" class="btn btn-outline-danger text-left d-none" id="boton.parto.eliminar">Eliminar</button>
                        </div>
                    </div>
                    <div class="col-12 p-0 pr-1 col-sm-10 h-100" style="overflow: auto;">
                        <div class="card mb-3 mt-2">
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
                                        <select id="meconio" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0" selected>Ausente</option>
                                            <option value="1">Fluido</option>
                                            <option value="2">Espeso</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Apgar 1° Min.</h6>
                                        <select id="apgar_1" class="form-control text-center" style="text-align-last:center;" disabled>
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
                                        <select id="apgar_5" class="form-control text-center" style="text-align-last:center;" disabled>
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
                                        <input class="form-control text-center" data-date-format="dd/mm/yyyy" type="text" id="fecha_parto_rn" disabled>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">E. Gestacional</h6>
                                        <select id="datos.neonatal.edad" class="form-control text-center" style="text-align-last:center;" disabled>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Término de Gestación</h6>
                                        <select id="termino_parto" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0" selected>Parto</option>
                                            <option value="1">Aborto</option>
                                            <option value="2">Desconocido</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Tipo de Parto</h6>
                                        <select id="tipo_parto" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0" selected>Vaginal</option>
                                            <option value="1">Cesarea</option>
                                            <option value="2">Forceps</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Peso Placentario</h6>
                                        <div class="input-group">
                                            <input class="form-control text-center" style="text-align-last:center;" id="peso_placentario" type="number" min="0" max="9999" disabled>
                                            <div class="input-group-append">
                                                <div class="input-group-text">grs.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Patologia Obstétrica</h6>
                                        <select id="tipo_patologia_obstetrica" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0" selected></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-5">
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-notes-medical"></i> Patologia del RN</h5>
                                <hr class="mb-3">
                                <div class="form-row">
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Hiperbilirrubinemia</h6>
                                        <select id="hiperbilirrubinemia" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Poliglobulia</h6>
                                        <select id="poliglobulia" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Hospital - UCIN</h6>
                                        <select id="hospital_ucin" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Sindrome dificultad respiratoria</h6>
                                        <select id="sindrome_respiratorio" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Alta con su madre</h6>
                                        <select id="alta_con_madre" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0">Si</option>
                                            <option value="1">No</option>
                                        </select>
                                    </div>
                                    <div class="col-4 form-group">
                                        <h6 class="text-primary">Profesional atención del Parto</h6>
                                        <select class="form-control text-center" id="prof.atencion.parto" style="text-align-last:center;" disabled>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-1 mx-0" style="overflow: hidden;height: calc(100vh - 150px);display:none;" id="recienacido">
                    <div class="col-5 p-0">
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
                    <div class="col-7">
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
                                <div id="grafico"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <small class="text-info">Graficas para categorizar crecimiento y ponderación de variables biológicas</small><br>
                        <small style="font-size: 60%;">* Grafica Nacional: M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274. <a id="pdfnacionalview" href="#pdfviebox">Ver PDF</a>    ** Grafica Regional: Lagos y col. Rev. Chilena Obtet. Ginecol. 2009; 74(4). <a id="pdfregionalview" href="#pdfviebox">Ver PDF</a></small>
                    </div>
                </div>
                <div class="row mt-1 mx-0" style="overflow: hidden;height: calc(100vh - 150px); display:none;" id="postnatal">
                    <div class="col-3">
                        <img src="<?php echo Config::get('URL'); ?>img/cpeso.png" class="mr-auto ml-auto img-fluid">
                    </div>
                    <div class="col">
                        <h6 class="alert-heading text-azul">Evaluación del crecimiento intrauterino, ¿Curva local generalizada o general individualizada?</h6>
                        <div id="sliderParto" class="carousel slide" data-ride="carousel" data-interval="60000">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <p class="text-justify text-azul">El criterio neonatal, tanto con fines pronóstico como de manejo clínico, es categorizar el peso del recién nacido (RN) como pequeño (PEG), adecuado (AEG) o grande (GEG) para su edad gestacional, según se ubique bajo el percentil 10, entre los percentiles 10 y 90 o sobre el percentil 90 de una gráfica de crecimiento determinada. Secundariamente integrando la talla del RN se obtiene el índice ponderal neonatal ((peso / talla)^3)*100), clasificando tambien a los RN en enflaquecidos, eutróficos y obesos, según se ubiquen bajo el percentil 10, entre los percentiles 10 y 90 o sobre el percentil 90 de la gráfica IPN/edad gestacional.<br><br>Sin embargo, para una población heterogénea, el mejor parámetro para delinear crecimiento intrauterino no necesariamente sería un estándar local generalizado (Peso / Edad), sino uno que además se ajuste a características materno-fetales individuales y por tanto trasciende límites geográficos. Para el ajuste al peso han sido reportado diverso factores (No patológicos) que modulan significativamente el peso a término, entre ellos destacan las variables: Paridad, talla y edad materna, sexo del recién nacido, estado nutricional materno y características étnicas maternas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <p class="bg-light p-2 text-center">Al paradigma actual: Peso/ Edad gestacional, con el tiempo tal vez debamos adicionarle características propias de cada embarazada.</p>
                    </div>
                </div>
                <div class="row mt-1 mx-0" style="overflow:auto; height: calc(100vh - 150px); display:none;" id="ajustepeso">
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Recién Nacido</h5>
                                <hr class="mb-3">
                                <div class="form-row">
                                    <div class="col">
                                        <h6 class="text-primary m-0">Sexo Neonatal</h6>
                                        <select id="sn" class="form-control py-0">
                                            <option value="1" selected>Femeníno</option>
                                            <option value="0">Masculíno</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <h6 class="text-primary m-0 mt-3">Paridad Materna</h6>
                                        <select id="pm" class="form-control py-0">
                                            <option value="1" selected>Primípara</option>
                                            <option value="0">Multípara</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-6">
                                        <h6 class="text-primary m-0 mt-3">Talla Materna</h6>
                                        <select id="tm" class="form-control py-0"></select>
                                    </div>
                                    <div class="col-6">
                                        <h6 class="text-primary m-0 mt-3">Peso Materno</h6>
                                        <select id="pesom" class="form-control py-0"></select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <h6 class="text-primary m-0 mt-3">IMC <small>((Peso/Talla)^2)</small></h6>
                                        <input type="text" class="form-control py-0" id="valorimc" disabled>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <h6 class="text-primary m-0 mt-3">Estado Nutricional</h6>
                                        <select id="imc" class="form-control py-0">
                                            <option value="1">Enflaquecida</option>
                                            <option value="2">Normal</option>
                                            <option value="3">SobrePeso</option>
                                            <option value="4" selected>Obesidad</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <h6 class="text-primary m-0 mt-3">Edad Materna</h6>
                                        <select id="em" class="form-control py-0">
                                            <option value="1">&lt; 19</option>
                                            <option value="2">20 - 21</option>
                                            <option value="3">22 - 23</option>
                                            <option value="4">24 - 25</option>
                                            <option value="5">26 - 27</option>
                                            <option value="6" selected>&gt; 27</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <h6 class="text-primary m-0 mt-3">Etnia Materna</h6>
                                        <select id="apellm" class="form-control py-0">
                                            <option value="0">Ambos Caucásicos</option>
                                            <option value="2">Solo uno Caucásico</option>
                                            <option value="1" selected>Ninguno Caucásico</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title" id="grafico.ajustado.title">Curva regional Peso/Ege ajustada por variables</h5>
                                <hr class="mb-3">
                                <div id="graficoAjustado"></div>
                                <div>
                                    <div class="form-group row mb-0">
                                        <p class="col-12 d-none" id="tituloAjusteG"><strong>Peso ajustado para:</strong></p>
                                        <h6 class="col-4" id="tituloAjusteAlto" style="font-size: 0.8rem;height: 2rem;">Pct. peso sin ajuste</h6>
                                        <div class="col-2">
                                            <input type="text" class="form-control" id="PesoEgeSAj" disabled style="font-size: 0.8rem;height: 2rem;">
                                        </div>
                                        <h6 class="col-4" id="tituloAjusteBajo" style="font-size: 0.8rem;height: 2rem;">Pct. peso con ajuste</h6>
                                        <div class="col-2">
                                            <input type="text" class="form-control" id="PesoEgeCAj" disabled style="font-size: 0.8rem;height: 2rem;background-color: #bfe9fb;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-3 mb-5">
                            <div class="card-body">
                                <p class="text-center text-primary">Cuatro ejemplos para ajuste al peso esperado según categoria de variables</p>
                                <div class="btn-group d-flex justify-content-center" role="group" aria-label="Default button group">
                                    <button type="button" class="btn btn-outline-primary mr-1" id="opt1"><small>Cond. Neutra</small></button>
                                    <button type="button" class="btn btn-outline-primary mr-1" id="opt3"><small>Potencial bajo</small></button>
                                    <button type="button" class="btn btn-outline-primary mr-1" id="opt2"><small>Potencial alto</small></button>
                                    <button type="button" class="btn btn-outline-primary" id="opt4"><small>Cond. extremas</small></button>
                                </div>
                                <button class="btn btn-outline-info d-none" id="g3">Graficar percentil ajustado</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-1 mx-0" style="overflow: hidden;height: calc(100vh - 150px); display:none;" id="hipoglicemia">
                    <div class="col-12 h-100" style="overflow: auto;">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Crecimiento intrauterino para la relación Peso / Ege y ajuste según variables</h5>
                                <div class="row">
                                    <div class="col-4">
                                        <label for="edadGestacional">&nbsp;&nbsp;&nbsp;&nbsp;1.- Curva Generalizada (percentil)</label>
                                    </div>
                                    <div class="col-1">
                                        <input class="form-control" type="text" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="peso_eg_pct_regional" disabled>
                                    </div>
                                    <div class="col-2">
                                        <input class="form-control text-center" type="text" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="peso_eg_regional" disabled>
                                    </div>
                                    <div class="col-5 align-self-end p-0">
                                        <div class="row m-1">
                                            <label class="col-2 p-0">Peso (grs)</label>
                                            <div class="p-0 col-4">
                                                <input class="form-control" id="datos.hipoglicemia.peso" min="0" max="9999" type="number" disabled>
                                            </div>
                                            <label class="col-2 p-0 text-center">Ege (sem)</label>
                                            <div class="p-0 col-4">
                                                <input class="form-control" id="datos.hipoglicemia.eg" min="0" max="9999" type="number" disabled>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row pt-2">
                                    <div class="col-4">
                                        <label for="edadGestacional">&nbsp;&nbsp;&nbsp;&nbsp;2.- Curva Categorizada (percentil)</label>
                                    </div>
                                    <div class="col-1">
                                        <input class="form-control" type="text" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="peso_eg_pct_ajustado" disabled>
                                    </div>
                                    <div class="col-2">
                                        <input class="form-control text-center" type="text" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="peso_eg_ajustado" disabled>
                                    </div>
                                    <div class="col-5 align-self-end">
                                        <button type="button" class="btn btn-outline-secondary float-right" id="goto_ajuste">Ver variables para ajuste al peso neonatal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border border-info p-2  mt-3 div-hover">
                            <p class="m-0 text-center"><small>La Diferencia observada (Percentil), ha de ser contrastada con morbilidad neonatal prevalente en la población general de recién nacido, ejemplo hipoglicemia neonatal.</small></p>
                        </div>
                        <div class="card mt-2">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 my-3">
                                        <div class="row bg-primary text-white p-2">
                                            <div class="col-2">Exámenes</div>
                                            <div class="col-2 text-center">Dextro</div>
                                            <div class="col-2 text-center">Glicemia ev</div>
                                            <div class="col-6">Conducta seguida según condición clínica del RN</div>
                                        </div>
                                        <div class="row p-2 border border-info border-top-0 border-bottom-0" style="background-color:#e2e3e5;">
                                            <div class="col-2">Primero</div>
                                            <div class="col-2"><input class="form-control text-center" type="number" min="0" max="99" id="dextro_uno" disabled></div>
                                            <div class="col-2"><input class="form-control text-center" type="number" min="0" max="99" id="glicemia_uno" disabled></div>
                                            <div class="col-6">
                                                <select class="form-control text-center" style="text-align-last:center;" id="conducta.uno" disabled>
                                                    <option value="1">Promover alimentación natural</option>
                                                    <option value="2">Alimentación enteral</option>
                                                    <option value="3" selected>Terapia endovenosa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row p-2 border border-info border-top-0 border-bottom-0" style="background-color:#e2e3e5;">
                                            <div class="col-2">Segundo</div>
                                            <div class="col-2"><input class="form-control text-center" type="number" min="0" max="99" id="dextro_dos" disabled></div>
                                            <div class="col-2"><input class="form-control text-center" type="number" min="0" max="99" id="glicemia_dos" disabled></div>
                                            <div class="col-6">
                                                <select class="form-control text-center" style="text-align-last:center;" id="conducta.dos" disabled>
                                                    <option value="1">Promover alimentación natural</option>
                                                    <option value="2">Alimentación enteral</option>
                                                    <option value="3" selected>Terapia endovenosa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row p-2 border border-info border-top-0" style="background-color:#e2e3e5;">
                                            <div class="col-2">Tercero</div>
                                            <div class="col-2"><input class="form-control text-center" type="number" min="0" max="99" id="dextro_tres" disabled></div>
                                            <div class="col-2"><input class="form-control text-center" type="number" min="0" max="99" id="glicemia_tres" disabled></div>
                                            <div class="col-6">
                                                <select class="form-control text-center" style="text-align-last:center;" id="conducta.tres" disabled>
                                                    <option value="1">Promover alimentación natural</option>
                                                    <option value="2">Alimentación enteral</option>
                                                    <option value="3" selected>Terapia endovenosa</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row p-2">
                                    <div class="col-4">
                                        <p class="text-primary m-0 mt-3">Factores de Riesgo para Hipoglicemia</p>
                                        <select id="hipoglicemia_riesgo" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0">RN PEG (&lt;10)</option>
                                            <option value="1">RN GEG (IP &gt; 3.3)</option>
                                            <option value="2">Hijo madre DM GEG IP > 3.3</option>
                                            <option value="3">RN Pretérmino 34 - 36.6 semanas</option>
                                            <option value="4" selected>Sin riesgo clínico de hipoglicemia</option>
                                        </select>
                                    </div>
                                    <div class="col-4">
                                        <p class="text-primary m-0 mt-3">Sospecha Clínica de Hipoglicemia</p>
                                        <select id="hipoglicemia_sospechada" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                    <div class="col-4">
                                        <p class="text-primary m-0 mt-3">Hipoglicemia confirmada por laboratorio</p>
                                        <select id="hipoglicemia_confirmada" class="form-control text-center" style="text-align-last:center;" disabled>
                                            <option value="0">Si</option>
                                            <option value="1" selected>No</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row p-2">
                                    <div class="col-8">
                                        Observaciones
                                    </div>
                                    <div class="col-4">
                                        Profesional alta del recién nacido
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">
                                        <input class="form-control" type="text" id="observaciones" disabled>
                                    </div>
                                    <div class="col-4">
                                        <select class="form-control" id="prof.alta.rn" disabled>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card my-2">
                            <div class="card-body">
                                <button type="button" class="btn btn-secondary float-right" id="boton.hipoglicemia.modificar">Modificar</button>
                                <button type="button" class="btn btn-secondary float-right" id="boton.hipoglicemia.guardar">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-secondary p-1" id="menuListaPartos">
        <a class="navbar-brand ml-3" data-hide="true" id="listaPartos" href="#"><i class="fas fa-th"></i> Lista de Ultimos Partos</a>
    </nav>
    <div id="contenedorListaPartos" class="container-fluid bg-secondary d-none" style="position: fixed;top: calc(70%);left: 0;height:30%">
        <h5 class="ml-3 mt-3 text-white" id="listaPartosDos"><i class="fas fa-th"></i> Lista de Ultimos Partos</h5>
        <div id="contenedorTabla">
            <table class="table table-hover table-sm">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" class="p-1">#</th>
                        <th scope="col">ID Materno</th>
                        <th scope="col">ID Recien Nacido</th>
                        <th scope="col">EG</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Talla</th>
                    </tr>
                </thead>
                <tbody id="table.ecografia.parto" class="text-white scroll-table">
                </tbody>
            </table>
            </div>
        </div>
    </div>
    <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/datepicker.css">
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
    <script src="<?php echo Config::get('URL'); ?>js/parto.js"></script>
    <script>var serverURL = "<?php echo Config::get('URL'); ?>";</script>
</body>
</html>

        <div class="container" id="pdfviebox" style="display:none;">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#recienacido">Volver</a></li>
            </ol>
            <div class="row mt-2">
                <div class="col">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe id="pdfview" class="embed-responsive-item" src=""></iframe>
                    </div>
                </div>
            </div>
        </div>