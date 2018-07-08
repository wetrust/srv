        <div class="container" id="neonatal">
            <div class="bienvenida mb-3 rounded-bottom">
                <div class="container">
                    <div class="media">
                        <img class="d-flex ml-3" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
                        <div class="media-body mt-4">
                            <h4 class="mt-0 mb-1"><em>Datos Neonatales</em></h4>
                            <p><em>Evaluación postnatal básica para profesionales</em></p>
                        </div>
                        <div class="media-body mt-4">
                            <p class="float-right" name="fechaHora" style="color: #f0df90;"></p>
                        </div>
                    </div>
                </div>
            </div>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>">Inicio</a></li>
                <li class="breadcrumb-item active">Datos Neonatales</li>
                <li class="breadcrumb-item"><a href="#recienacido">Evaluación Peso e IPN</a></li>
                <li class="breadcrumb-item"><a href="#ajustepeso">Ajuste al Peso Neonatal</a></li>
                <li class="breadcrumb-item"><a href="#hipoglicemia">Protocolo Hipoglicemia neonatal</a></li>
                <li class="breadcrumb-item"><a href="#postnatal">Curvas de crecimiento</a></li>
                <li class="ml-auto"><a href="#inicio">Volver</a></li>
            </ol>
            <div class="row my-2">
                <div class="col-12">
                    <div class="card mb-3 bg-light">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-3">
                                    <h5 class="card-title mb-3"><i class="fas fa-search"></i> Buscar Pacientes</h5>
                                    <p>Por:</p>
                                </div>
                                <div class="col-3">
                                    <label for="edadGestacional">N° ID de la Madre</label>
                                    <input class="form-control" type="text">
                                </div>
                                <div class="col-3">
                                    <label for="edadGestacional">N° ID del Recién Nacido</label>
                                    <input class="form-control" type="text">
                                </div>
                                <div class="col-3">
                                    <button type="button" class="btn btn-primary mt-4">Buscar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mb-5 pb-5">
                <div class="col-12 col-sm-2 order-sm-1">
                    <div class="card mb-3 position-fixed">
                        <div class="card-body">
                            <div class="btn-group-vertical d-flex justify-content-center" role="group" aria-label="First group">
                                <button type="button" class="btn btn-secondary" id="boton.parto.guardar">Guardar</button>
                                <button type="button" class="btn btn-danger" id="boton.parto.eliminar">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-10">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title mb-3"><i class="fas fa-female"></i> Datos de la madre</h5>
                            <div class="row">
                                <div class="col-2">
                                    <label for="edadGestacional">N° de Registro</label>
                                    <input class="form-control" type="text" id="id_paciente">
                                </div>
                                <div class="col-3">
                                    <label for="edadGestacional">Nombre</label>
                                    <input class="form-control" type="text" id="nombre_madre">
                                </div>
                                <div class="col-3">
                                    <label for="edadGestacional">Apellido</label>
                                    <input class="form-control" type="text" id="apellido_madre">
                                </div>
                                <div class="col-4">
                                    <label for="edadGestacional">Lugar de parto</label>
                                    <select class="form-control" id="lugar_parto_rn">
                                        <option value="1">temuco</option>
                                    </select>
                                </div>
                            </div>
                            <h5 class="card-title mt-3">Datos del RN</h5>
                            <div class="row">
                                <div class="col-2">
                                    <label for="edadGestacional">N° de Registro</label>
                                    <input class="form-control" type="text" id="id_rn">
                                </div>
                                <div class="col-3">
                                    <label for="edadGestacional">Nombre</label>
                                    <input class="form-control" type="text" id="nombre_rn">
                                </div>
                                <div class="col-3">
                                    <label for="edadGestacional">Apellido</label>
                                    <input class="form-control" type="text" id="apellido_rn">
                                </div>
                                <div class="col-4">
                                    <label for="edadGestacional">Sexo de RN</label>
                                    <select id="sexo_rn" class="form-control">
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
                            <h5 class="card-title"><i class="fas fa-clipboard-list"></i> Información del Parto</h5>
                            <hr class="mb-5">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label for="edadGestacional" class="col-5">Fecha de Parto</label>
                                        <input class="form-control col-7" data-date-format="dd/mm/yyyy" type="text" id="fecha_parto_rn">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label for="edadGestacional" class="col-5">E. Gestacional</label>
                                        <div class="input-group px-0 col-7">
                                            <select id="datos.neonatal.edad" class="form-control" id="eg_parto">
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="30">31</option>
                                                <option value="30">32</option>
                                                <option value="30">33</option>
                                                <option value="30">34</option>
                                                <option value="30">35</option>
                                                <option value="30">36</option>
                                                <option value="30">37</option>
                                                <option value="30">38</option>
                                                <option value="30">39</option>
                                                <option value="40" selected>40</option>
                                                <option value="41">41</option>
                                                <option value="42">42</option>
                                            </select>
                                            <div class="input-group-append">
                                                <div class="input-group-text">sem.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label for="edadGestacional" class="col-5">Término de Gestación</label>
                                        <select id="termino_parto" class="form-control col-7">
                                            <option value="0" selected>Parto</option>
                                            <option value="1">Aborto</option>
                                            <option value="2">Desconocido</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label for="edadGestacional" class="col-5">Tipo de Parto</label>
                                        <select id="tipo_parto" class="form-control col-7">
                                            <option value="0" selected>Vaginal</option>
                                            <option value="1">Cesarea</option>
                                            <option value="2">Forceps</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label for="edadGestacional" class="col-5">Peso Placentario</label>
                                        <div class="input-group col-7 p-0">
                                            <input class="form-control" id="peso_placentario" type="number" min="0" max="9999">
                                            <div class="input-group-append">
                                                <div class="input-group-text">grs.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group row">
                                        <label for="edadGestacional" class="col-5">Patologia Obstétrica</label>
                                        <select id="tipo_patologia_obstetrica" class="form-control col-7">
                                            <option value="0" selected></option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-child"></i> Información del RN</h5>
                            <hr class="mb-3">
                            <div class="row">
                                <div class="col-3">
                                    <label for="edadGestacional">Peso RN</label>
                                    <div class="input-group">
                                        <input class="form-control" style="background-color:#e9ecef;" id="datos.neonatal.peso" min="0" max="9999" type="number">
                                        <div class="input-group-append">
                                            <div class="input-group-text">grs.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <label for="edadGestacional">Talla RN</label>
                                    <div class="input-group">
                                        <input class="form-control" style="background-color:#e9ecef;" id="datos.neonatal.talla" min="0" max="999" maxlength="3" type="number">
                                        <div class="input-group-append">
                                            <div class="input-group-text">mm.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <label for="edadGestacional">Perimetro Craneo</label>
                                    <div class="input-group">
                                        <input class="form-control" style="background-color:#e9ecef;" type="number" min="0" max="999" id="perimetro_craneo_rn">
                                        <div class="input-group-append">
                                            <div class="input-group-text">mm.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <label for="edadGestacional">Indices calculados (Ipn)</label>
                                    <div class="input-group">
                                        <input class="form-control" id="datos.neonatal.ipn" disabled type="number">
                                        <div class="input-group-append">
                                            <div class="input-group-text">mm.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-4">
                                    <label for="edadGestacional">Meconio al parto</label>
                                    <select id="meconio" class="form-control">
                                        <option value="0" selected>Ausente</option>
                                        <option value="1">Fluido</option>
                                        <option value="2">Espeso</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="edadGestacional">Apar 1° Min.</label>
                                    <select id="apgar_1" class="form-control">
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
                                <div class="col-4">
                                    <label for="edadGestacional">Apar 5° Min.</label>
                                    <select id="apgar_5" class="form-control">
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
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-notes-medical"></i> Patologia del RN</h5>
                            <hr class="mb-3">
                            <div class="row pt-3">
                                <div class="col-4">
                                    <label for="edadGestacional">Hiperbilirrubinemia</label>
                                    <select id="hiperbilirrubinemia" class="form-control">
                                        <option value="0">Si</option>
                                        <option value="1">No</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="edadGestacional">Poliglobulia</label>
                                    <select id="poliglobulia" class="form-control">
                                        <option value="0">Si</option>
                                        <option value="1">No</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="edadGestacional">Hospital - UCIN</label>
                                    <select id="hospital_ucin" class="form-control">
                                        <option value="0">Si</option>
                                        <option value="1">No</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col-4">
                                    <label for="edadGestacional">Sindrome D.Respiratorio</label>
                                    <select id="sindrome_respiratorio" class="form-control">
                                        <option value="0">Si</option>
                                        <option value="1">No</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="edadGestacional">Alta con su madre</label>
                                    <select id="alta_con_madre" class="form-control">
                                        <option value="0">Si</option>
                                        <option value="1">No</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row pt-3">
                                <div class="col-12">
                                    <label for="edadGestacional">Observaciones</label>
                                    <input class="form-control" type="text" id="observaciones">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-secondary" id="menuListaPartos">
                <a class="navbar-brand" data-hide="true" id="listaPartos" href="#"><i class="fas fa-th"></i> Lista de Ultimos Partos</a>
            </nav>
            <div id="contenedorListaPartos" class="container-fluid bg-secondary d-none" style="position: fixed;top: calc(70%);left: 0;height:30%">
                <h5 class="m-4 text-white" id="listaPartosDos"><i class="fas fa-th"></i> Lista de Ultimos Partos</h5>
                <div id="contenedorTabla">
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID Materno</th>
                            <th scope="col">ID Recien Nacido</th>
                            <th scope="col">EG</th>
                            <th scope="col">Peso</th>
                            <th scope="col">Talla</th>
                        </tr>
                    </thead>
                    <tbody id="table.ecografia.parto" class="text-white">
                        <tr>
                            <td></td>
                            <td>12345</td>
                            <td>56798</td>
                            <td>40</td>
                            <td>3080</td>
                            <td>512</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>12345</td>
                            <td>56798</td>
                            <td>40</td>
                            <td>3080</td>
                            <td>512</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>12345</td>
                            <td>56798</td>
                            <td>40</td>
                            <td>3080</td>
                            <td>512</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>12345</td>
                            <td>56798</td>
                            <td>40</td>
                            <td>3080</td>
                            <td>512</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>12345</td>
                            <td>56798</td>
                            <td>40</td>
                            <td>3080</td>
                            <td>512</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        <div class="container" id="postnatal" style="display:none;">
            <div class="bienvenida mb-3 rounded-bottom">
                <div class="container">
                    <div class="media">
                        <img class="d-flex ml-3" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
                        <div class="media-body mt-4">
                            <h4 class="mt-0 mb-1"><em>Evaluación postnatal del crecimiento</em></h4>
                            <p><em>Evaluación postnatal básica para profesionales</em></p>
                        </div>
                        <div class="media-body mt-4">
                            <p class="float-right" name="fechaHora" style="color: #f0df90;"></p>
                        </div>
                    </div>
                </div>
            </div>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>">Inicio</a></li>
                <li class="breadcrumb-item"><a href="#neonatal">Datos Neonatales</a></li>
                <li class="breadcrumb-item"><a href="#recienacido">Evaluación Peso e IPN</a></li>
                <li class="breadcrumb-item"><a href="#ajustepeso">Ajuste al Peso Neonatal</a></li>
                <li class="breadcrumb-item"><a href="#hipoglicemia">Protocolo Hipoglicemia neonatal</a></li>
                <li class="breadcrumb-item active">Curvas de crecimiento</li>
                <li class="ml-auto"><a href="#inicio">Volver</a></li>
            </ol>
            <div class="row mt-2">
                <div class="col-3">
                    <img src="<?php echo Config::get('URL'); ?>img/cpeso.png" class="mr-auto ml-auto img-fluid">
                </div>
                <div class="col">
                    <h6 class="alert-heading text-azul">Evaluación del crecimiento intrauterino, ¿Curva local generalizada o general individualizada?</h6>
                    <div id="sliderParto" class="carousel slide" data-ride="carousel" data-interval="60000">
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <p class="text-justify text-azul">El criterio neonatal, tanto con fines pronóstico como de manejo clínico, es categorizar el peso del recién nacido (RN) como pequeño (PEG), adecuado (AEG) o grande (GEG) para su edad gestacional, según se ubique bajo el percentil 10, entre los percentiles 10 y 90 o sobre el percentil 90 de una gráfica de crecimiento determinada. Secundariamente integrando la talla del RN se obtiene el índice ponderal neonatal ((peso / talla)^3)*100), clasificando tambien a los RN en enflaquecidos, eutróficos y obesos, según se ubiquen bajo el percentil 10, entre los percentiles 10 y 90 o sobre el percentil 90 de la gráfica IPN/edad gestacional.<br><br><br><br>Sin embargo, para una población heterogénea, el mejor parámetro para delinear crecimiento intrauterino no necesariamente sería un estándar local generalizado (Peso / Edad), sino uno que además se ajuste a características materno-fetales individuales y por tanto trasciende límites geográficos. Para el ajuste al peso han sido reportado diverso factores (No patológicos) que modulan significativamente el peso a término, entre ellos destacan las variables: Paridad, talla y edad materna, sexo del recién nacido, estado nutricional materno y características étnicas maternas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="bg-light p-2 text-center">Al paradigma actual: Peso/ Edad gestacional, con el tiempo tal vez debamos adicionarle características propias de cada embarazada.</p>
        </div>
        <div class="container" id="pdfviebox" style="display:none;">
            <div class="bienvenida mb-3 rounded-bottom">
                <div class="container">
                    <div class="media">
                        <img class="d-flex ml-3" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
                        <div class="media-body mt-4">
                            <h4 class="mt-0 mb-1"><em>Evaluación postnatal del crecimiento</em></h4>
                            <p><em>Evaluación postnatal básica para profesionales</em></p>
                        </div>
                        <div class="media-body mt-4">
                            <p class="float-right" name="fechaHora" style="color: #f0df90;"></p>
                        </div>
                    </div>
                </div>
            </div>
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
        <div class="container" id="recienacido" style="display:none;">
            <div class="bienvenida mb-3 rounded-bottom">
                <div class="container">
                    <div class="media">
                        <img class="d-flex ml-3" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
                        <div class="media-body mt-4">
                            <h4 class="mt-0 mb-1"><em>Evaluación postnatal del crecimiento</em></h4>
                            <p><em>Evaluación postnatal básica para profesionales</em></p>
                        </div>
                        <div class="media-body mt-4">
                            <p class="float-right" name="fechaHora" style="color: #f0df90;"></p>
                        </div>
                    </div>
                </div>
            </div>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>">Inicio</a></li>
                <li class="breadcrumb-item"><a href="#neonatal">Datos Neonatales</a></li>
                <li class="breadcrumb-item active">Evaluación Peso e IPN</li>
                <li class="breadcrumb-item"><a href="#ajustepeso">Ajuste al Peso Neonatal</a></li>
                <li class="breadcrumb-item"><a href="#hipoglicemia">Protocolo Hipoglicemia neonatal</a></li>
                <li class="breadcrumb-item"><a href="#postnatal">Curvas de crecimiento</a></li>
                <li class="ml-auto"><a href="#postnatal">Volver</a></li>
            </ol>
            <div class="row mt-2">
                <div class="col-5">
                    <div class="card">
                        <div class="card-body">
                            <h5>Datos de Recién Nacido</h5>
                            <form style="font-size: 0.8rem;">
                                <div class="form-group row">
                                    <label for="edadGestacional" class="col-4">E. Gestacional</label>
                                    <div class="input-group col-8">
                                        <select id="edadGestacional" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" aria-describedby="edadGestacionalHelp"></select>
                                        <div class="input-group-append">
                                            <div class="input-group-text p-1">semanas</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="pesoRN" class="col-4">Peso RN (gr.)</label>
                                    <div class="input-group col-8">
                                        <input type="number" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="pesoRN" aria-describedby="pesoRNHelp" min="0" max="9999" >
                                        <div class="input-group-append">
                                            <div class="input-group-text p-1">gr</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="tallaRN" class="col-4">Talla RN (mm.)</label>
                                    <div class="input-group col-8">
                                        <input type="number" class="form-control" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="tallaRN" aria-describedby="tallaRNHelp" min="0" max="999" maxlength="3">
                                        <div class="input-group-append">
                                            <div class="input-group-text p-1">mm</div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <h5>Datos de RN calculado</h5>
                            <form style="font-size: 0.8rem;">
                                <div class="form-group row">
                                    <label for="IPNRN" class="col-6">IPN <small>((peso / talla)^3)*100</small></label>
                                    <div class="col-2"></div>
                                    <input type="number" class="form-control col-3" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="IPNRN" disabled>
                                </div>
                                <div class="form-group row">
                                    <label for="PesoEge" class="col-4">Peso / EG</label>
                                    <input type="text" class="form-control col-2" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="PesoPct" style="font-size: 0.8rem;" disabled>
                                    <div class="col-2"></div>
                                    <input type="text" class="form-control col-3" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="PesoEge" style="font-size: 0.8rem;" disabled>
                                </div>
                                <div class="form-group row">
                                    <label for="IpnEge" class="col-4">IPN / Ege</label>
                                    <input type="text" class="form-control col-2" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="IpnPct" style="font-size: 0.8rem;" disabled>
                                    <div class="col-2"></div>
                                    <input type="text" class="form-control col-3" style="font-size: 0.8rem;height: calc(2rem + 2px);" id="IpnEge" style="font-size: 0.8rem;" disabled>
                                </div>
                            </form>
                            <small class="text-primary">Graficas para categorizar crecimiento y ponderación de variables biológicas</small><br>
                            <small style="font-size: 60%;">* Grafica Nacional: M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274. <a id="pdfnacionalview" href="#pdfviebox">Ver PDF</a>
                            <br>** Grafica Regional: Lagos y col. Rev. Chilena Obtet. Ginecol. 2009; 74(4). <a id="pdfregionalview" href="#pdfviebox">Ver PDF</a></small>
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
                                  <option value="2">IPN / Edad Gestacional (Curva Nacional SOCHIPE)</option>
                                  <option></option>
                                  <option value="1">Peso / Edad Gestacional (Curva Regional Araucanía)</option>
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
            </div>
        </div>
        <div class="container" id="hipoglicemia" style="display:none">
            <div class="bienvenida mb-3 rounded-bottom">
                <div class="container">
                    <div class="media">
                        <img class="d-flex ml-3" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
                        <div class="media-body mt-4">
                            <h4 class="mt-0 mb-1"><em>Hipoglicemia Neonatal</em></h4>
                            <p><em>Evaluación postnatal básica para profesionales</em></p>
                        </div>
                        <div class="media-body mt-4">
                            <p class="float-right" name="fechaHora" style="color: #f0df90;">Martes, 19 de Junio 2018</p>
                        </div>
                    </div>
                </div>
            </div>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>">Inicio</a></li>
                <li class="breadcrumb-item"><a href="#neonatal">Datos Neonatales</a></li>
                <li class="breadcrumb-item"><a href="#recienacido">Evaluación Peso e IPN</a></li>
                <li class="breadcrumb-item"><a href="#ajustepeso">Ajuste al Peso Neonatal</a></li>
                <li class="breadcrumb-item active">Protocolo Hipoglicemia neonatal</li>
                <li class="breadcrumb-item"><a href="#postnatal">Curvas de crecimiento</a></li>
                <li class="ml-auto"><a href="#postnatal">Volver</a></li>
            </ol>
            <div class="row mt-1">
                <div class="col-12 col-sm-2 order-sm-1">
                    <div class="card mb-3 position-fixed">
                        <div class="card-body">
                            <div class="btn-group-vertical d-flex justify-content-center" role="group" aria-label="First group">
                                <button type="button" class="btn btn-secondary" id="boton.hipoglicemia.guardar">Guardar</button>
                                <button type="button" class="btn btn-danger" id="boton.hipoglicemia.eliminar">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-10">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Crecimiento intrauterino para la relación Peso/Ege</h5>
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
                                <div class="col-4">
                                    <button type="button" class="btn btn-secondary" id="goto_ajuste">Ajuste al Peso / Ege</button>
                                </div>
                            </div>
                            <div class="row p-2">
                                <div class="col-12 bg-primary p-2">
                                    <p class="text-white m-0">Estas diferencias observadas en el potencial de crecimiento, ¿implican tambien diferencias clínicas significativas para el RN?</p>
                                </div>
                            </div>
                            <div class="row p-2">
                                <div class="col-4">
                                    <label for="edadGestacional"><small>Protocolo Riesgo de Hipoglicemia</small></label>
                                    <select id="hipoglicemia_riesgo" class="form-control">
                                        <option value="0">RN PEG (<10)</option>
                                        <option value="1">RN GEG (IP > 3.3)</option>
                                        <option value="2">Hijo madre DM GEG IP > 3.3</option>
                                        <option value="3">RN Pretérmino 34 - 36.6 semanas</option>
                                        <option value="4">Sin riesgo clínico de hipoglicemia</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="edadGestacional"><small>Hipoglicemia sospecha Clínicamente</small></label>
                                    <select id="hipoglicemia_sospechada" class="form-control">
                                        <option value="0">Si</option>
                                        <option value="1">No</option>
                                    </select>
                                </div>
                                <div class="col-4">
                                    <label for="edadGestacional"><small>Hipoglicemia confirmada Laboratorio</small></label>
                                    <select id="hipoglicemia_confirmada" class="form-control">
                                        <option value="0">Si</option>
                                        <option value="1">No</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mt-3">
                                    <div class="row bg-primary text-white p-3">
                                        <div class="col-2">Exámenes</div>
                                        <div class="col-2 text-center">Dextro</div>
                                        <div class="col-2 text-center">Glicemia ev</div>
                                        <div class="col-6">Conducta seguida según condición clínica del RN</div>
                                    </div>
                                    <div class="row p-3" style="background-color:#e2e3e5;">
                                        <div class="col-2">Primero</div>
                                        <div class="col-2"><input class="form-control" type="number"></div>
                                        <div class="col-2"><input class="form-control" type="number"></div>
                                        <div class="col-6">
                                            <select class="form-control">
                                                <option value="1">Promover alimentación natural</option>
                                                <option value="2">Alimentación enteral</option>
                                                <option value="3">Terapia endovenosa</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row p-3">
                                        <div class="col-2">Segundo</div>
                                        <div class="col-2"><input class="form-control" type="number"></div>
                                        <div class="col-2"><input class="form-control" type="number"></div>
                                        <div class="col-6">
                                            <select class="form-control">
                                                <option value="1">Promover alimentación natural</option>
                                                <option value="2">Alimentación enteral</option>
                                                <option value="3">Terapia endovenosa</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row p-3" style="background-color:#e2e3e5;">
                                        <div class="col-2">Tercero</div>
                                        <div class="col-2"><input class="form-control" type="number"></div>
                                        <div class="col-2"><input class="form-control" type="number"></div>
                                        <div class="col-6">
                                            <select class="form-control">
                                                <option value="1">Promover alimentación natural</option>
                                                <option value="2">Alimentación enteral</option>
                                                <option value="3">Terapia endovenosa</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" id="ajustepeso" style="display:none;">
            <div class="bienvenida mb-3 rounded-bottom">
                <div class="container">
                    <div class="media">
                        <img class="d-flex ml-3" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
                        <div class="media-body mt-4">
                            <h4 class="mt-0 mb-1"><em>Ajuste al peso Neonatal</em></h4>
                            <p><em>Evaluación postnatal básica para profesionales</em></p>
                        </div>
                        <div class="media-body mt-4">
                            <p class="float-right" name="fechaHora" style="color: #f0df90;"></p>
                        </div>
                    </div>
                </div>
            </div>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>">Inicio</a></li>
                <li class="breadcrumb-item"><a href="#neonatal">Datos Neonatales</a></li>
                <li class="breadcrumb-item"><a href="#recienacido">Evaluación Peso e IPN</a></li>
                <li class="breadcrumb-item active">Ajuste al Peso Neonatal</li>
                <li class="breadcrumb-item"><a href="#hipoglicemia">Protocolo Hipoglicemia neonatal</a></li>
                <li class="breadcrumb-item"><a href="#postnatal">Curvas de crecimiento</a></li>
                <li class="ml-auto"><a href="#recienacido">Volver</a></li>
            </ol>
            <div class="row mt-1">
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h4>Recién Nacido</h4>
                            <form>
                                <div class="form-group row">
                                    <label class="col-4" for="edadGestacional">Sexo Neonatal</label>
                                    <select id="sn" class="form-control col-8" style="background-color: #ECEEEF;font-size: 0.8rem;height: 2rem;">
                                        <option value="1" selected>Femeníno</option>
                                        <option value="0">Masculíno</option>
                                    </select>
                                </div>
                                <div class="form-group row">
                                    <label for="edadGestacional" class="col-4">Paridad Materna</label>
                                    <select id="pm" class="form-control col-8" style="background-color: #ECEEEF;font-size: 0.8rem;height: 2rem;">
                                        <option value="1" selected>Primípara</option>
                                        <option value="0">Multípara</option>
                                    </select>
                                </div>
                                <div class="form-group row">
                                    <label for="edadGestacional" class="col-3">Talla Materna</label>
                                    <select id="tm" class="form-control col-3" style="background-color: #ECEEEF;font-size: 0.8rem;height: 2rem;"></select>
                                    <label for="edadGestacional" class="col-3">Peso Materno</label>
                                    <select id="pesom" class="form-control col-3" style="font-size: 0.8rem;height: 2rem;"></select>
                                </div>
                                <div class="form-group row">
                                    <label for="edadGestacional" class="col-4">IMC <small>((Peso/Talla)^2)</small></label>
                                    <input type="text" class="form-control col-8" style="background-color: #FFF;font-size: 0.8rem;height: 2rem;" id="valorimc" disabled>
                                </div>
                                <div class="form-group row">
                                    <label for="edadGestacional" class="col-4">Estado Nutricional</label>
                                    <select id="imc" class="form-control col-8" style="font-size: 0.8rem;height: 2rem;">
                                        <option value="1">Enflaquecida</option>
                                        <option value="2">Normal</option>
                                        <option value="3">SobrePeso</option>
                                        <option value="4" selected>Obesidad</option>
                                    </select>
                                </div>
                                <div class="form-group row">
                                    <label for="edadGestacional" class="col-4">Edad Materna</label>
                                    <select id="em" class="form-control col-8" style="font-size: 0.8rem;height: 2rem;">
                                        <option value="1">&lt; 19</option>
                                        <option value="2">20 - 21</option>
                                        <option value="3">22 - 23</option>
                                        <option value="4">24 - 25</option>
                                        <option value="5">26 - 27</option>
                                        <option value="6" selected>&gt; 27</option>
                                    </select>
                                </div>
                                <div class="form-group row">
                                    <label for="edadGestacional" class="col-4">Etnia Materna</label>
                                    <select id="apellm" class="form-control col-8" style="font-size: 0.8rem;height: 2rem;">
                                        <option value="0">Ambos Caucásicos</option>
                                        <option value="2">Solo uno Caucásico</option>
                                        <option value="1" selected>Ninguno Caucásico</option>
                                    </select>
                                </div>
                            </form>
                            <h6 class="text-left text-primary" style="margin-top:30px;">Cuatro ejemplos para ajuste al peso esperado según variables</h6>
                            <div class="btn-group" role="group" aria-label="Default button group">
                                <button type="button" class="btn btn-outline-primary" id="opt1">Cond. Neutra</button>
                                <button type="button" class="btn btn-outline-primary" id="opt2">Potencial alto</button>
                                <button type="button" class="btn btn-outline-primary" id="opt3">Potencial bajo</button>
                                <button type="button" class="btn btn-outline-primary" id="opt4">Cond. extremas</button>
                            </div>
                            <button class="btn btn-outline-info d-none" id="g3">Graficar percentil ajustado</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <div id="graficoAjustado"></div>
                            <div>
                                <div class="form-group row mb-0">
                                    <p class="col-12 d-none" id="tituloAjusteG"><strong>Peso ajustado para:</strong></p>
                                    <label for="PesoEgeSAj" class="col-4" id="tituloAjusteAlto" style="font-size: 0.8rem;height: 2rem;">Pct. peso sin ajuste</label>
                                    <input type="text" class="form-control col-2" id="PesoEgeSAj" disabled style="font-size: 0.8rem;height: 2rem;">
                                    <label for="PesoEgeCAj" class="col-4" id="tituloAjusteBajo" style="font-size: 0.8rem;height: 2rem;">Pct. peso con ajuste</label>
                                    <input type="text" class="form-control col-2" id="PesoEgeCAj" disabled style="font-size: 0.8rem;height: 2rem;background-color: #bfe9fb;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/datepicker.css">
        <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
        <script type="text/javascript">

            function obtenerPartos(){
                //cargar los exámenes que tiene el paciente para mostrar en la grilla

                var data = {
                    id: "1",
                    tipo: 4
                }

                $.post(serverURL + "examen/get", data).done(function (response) {
                    $("#table\\.ecografia\\.parto").empty();
                    if ( Object.keys(response).length > 0 ){
                        $.each(response.data, function(i,val){
                            let fila = '<tr><th scope="row" data-id="' + val.id_paciente + '" data-tipo="4">' + val.id_parto + '</th><td>'+ val.id_paciente +'</td><td>' + val.id_rn +'</td><td>' + val.eg_parto +'</td><td>' + val.peso_rn +'</td><td>'+ val.talla_rn+'</td></tr>';
                            $("#table\\.ecografia\\.parto").append(fila);
                        });
                        $("#table\\.ecografia\\.parto tr").on('click',function(){
                            activateTr(this);
                        });
                    }
                });
            }

            function activateTr(element){
                $.each( $(element).parent().children(), function( i, val ) {
                    $( val ).removeClass( 'table-active');
                });
                $(element).addClass('table-active');
                var id = $(element).children().data("id"); 
                loadExamen("4",id);
                $("#listaPartos").trigger("click");
            }

            function loadExamen(tipo, id){
                let data = {
                    id: $("#id-paciente").val(),
                    tipo: tipo
                }

                $.post(serverURL + "examen/get", data).done(function (response) {
                    if (tipo == 4){
                        if ( Object.keys(response).length > 0 ){
                            $.each(response.data, function(i,val){
                                if (val.id_paciente == id){
                                    $("#id_paciente").val(val.id_paciente);
                                    $("#nombre_madre").val(val.nombre_madre);
                                    $("#apellido_madre").val(val.apellido_madre);
                                    $("#lugar_parto_rn").val(val.lugar_parto_rn);
                                    $("#id_rn").val(val.id_rn);
                                    $("#nombre_rn").val(val.nombre_rn);
                                    $("#apellido_rn").val(val.apellido_rn);
                                    $("#sexo_rn").val(val.sexo_rn);
                                    $("#fecha_parto_rn").val(val.fecha_parto_rn);
                                    $("#datos\\.neonatal\\.edad").val(val.eg_parto);
                                    $("#termino_parto").val(val.termino_parto);
                                    $("#tipo_parto").val(val.tipo_parto);
                                    $("#tipo_patologia_obstetrica").val(val.tipo_patologia_obstetrica);
                                    $("#meconio").val(val.meconio);
                                    $("#datos\\.neonatal\\.peso").val(val.peso_rn);
                                    $("#datos\\.neonatal\\.talla").val(val.talla_rn);
                                    $("#perimetro_craneo_rn").val(val.perimetro_craneo_rn);
                                    $("#datos\\.neonatal\\.ipn").val(val.ipn_rn);
                                    $("#peso_placentario").val(val.peso_placentario);
                                    $("#apgar_1").val(val.apgar_1);
                                    $("#apgar_5").val(val.apgar_5);
                                    $("#hiperbilirrubinemia").val(val.hiperbilirrubinemia);
                                    $("#poliglobulia").val(val.poliglobulia);
                                    $("#hospital_ucin").val(val.hospital_ucin);
                                    $("#sindrome_respiratorio").val(val.sindrome_respiratorio);
                                    $("#alta_con_madre").val(val.alta_con_madre);
                                    $("#observaciones").val(val.observaciones);
                                };
                            });
                        }
                    }
                });
            }

            $( document ).ready(function() {

                $("body").css("background-color", "rgb(233, 246, 248)");

                let fecha = new Date();
                let day = ("0" + fecha.getDate()).slice(-2);
                let month = ("0" + (fecha.getMonth() + 1)).slice(-2);

                $('#fecha_parto_rn').val((day)+"/"+(month)+"/"+fecha.getFullYear());
                $('#fecha_parto_rn').datepicker('setValue', (day)+"/"+(month)+"/"+fecha.getFullYear());

                obtenerPartos();

                $.get( serverURL + "configuracion/lugarparto", function( data ) {
                    $("#lugar_parto_rn").empty();
                    $.each(data, function (key, des) {
                        let strSelect = "<option value='" + des.lugar_id +"'>" + des.lugar_name + "</option>";
                        $("#lugar_parto_rn").append(strSelect);
                    });
                });

                $.get( serverURL + "configuracion/patologiaobstetrica", function( data ) {
                    $("#tipo_patologia_obstetrica").empty();
                    $.each(data, function (key, des) {
                        let strSelect = "<option value='" + des.patologia_id +"'>" + des.patologia_name + "</option>";
                        $("#tipo_patologia_obstetrica").append(strSelect);
                    });
                });

                $("#boton\\.parto\\.eliminar").on("click", function(){
                    var filas = $("#table\\.ecografia\\.parto").children();

                    $.each(filas,function(i,val){
                        if ($(val).hasClass('table-active') == true){
                            let examen = {
                                eg: "0"
                            }
                            
                            let data = {
                                id: $("#id_paciente").val(),
                                tipo: 4,
                                data: JSON.stringify(examen)
                            }

                            $.post(serverURL + "examen/del/", data).done(function(response) {
                                $("#table\\.ecografia\\.parto").empty();
                                obtenerPartos();
                                $("#id_paciente").val("");
                                $("#nombre_madre").val("");
                                $("#apellido_madre").val("");
                                $("#lugar_parto_rn").val("");
                                $("#id_rn").val("");
                                $("#nombre_rn").val("");
                                $("#apellido_rn").val("");
                                $("#sexo_rn").val("");
                                $("#fecha_parto_rn").val("");
                                $("#datos\\.neonatal\\.edad").val("");
                                $("#termino_parto").val("");
                                $("#tipo_parto").val("");
                                $("#tipo_patologia_obstetrica").val("");
                                $("#meconio").val("");
                                $("#datos\\.neonatal\\.peso").val("");
                                $("#datos\\.neonatal\\.talla").val("");
                                $("#perimetro_craneo_rn").val("");
                                $("#datos\\.neonatal\\.ipn").val("");
                                $("#peso_placentario").val("");
                                $("#apgar_1").val("");
                                $("#apgar_5").val("");
                                $("#hiperbilirrubinemia").val("");
                                $("#poliglobulia").val("");
                                $("#hospital_ucin").val("");
                                $("#sindrome_respiratorio").val("");
                                $("#alta_con_madre").val("");
                                $("#observaciones").val("");
                            });
                        }
                    });
                });

                $("#boton\\.parto\\.guardar").on("click", function(){

                    var parto = {
                        id_paciente: $("#id_paciente").val(),
                        nombre_madre: $("#nombre_madre").val(),
                        apellido_madre: $("#apellido_madre").val(),
                        lugar_parto_rn: $("#lugar_parto_rn").val(),
                        id_rn: $("#id_rn").val(),
                        nombre_rn: $("#nombre_rn").val(),
                        apellido_rn: $("#apellido_rn").val(),
                        sexo_rn: $("#sexo_rn").val(),
                        fecha_parto_rn: $("#fecha_parto_rn").val(),
                        eg_parto: $("#datos\\.neonatal\\.edad").val(),
                        termino_parto: $("#termino_parto").val(),
                        tipo_parto: $("#tipo_parto").val(),
                        tipo_patologia_obstetrica: $("#tipo_patologia_obstetrica").val(),
                        meconio: $("#meconio").val(),
                        peso_rn: $("#datos\\.neonatal\\.peso").val(),
                        talla_rn: $("#datos\\.neonatal\\.talla").val(),
                        perimetro_craneo_rn: $("#perimetro_craneo_rn").val(),
                        ipn_rn: $("#datos\\.neonatal\\.ipn").val(),
                        peso_placentario: $("#peso_placentario").val(),
                        apgar_1: $("#apgar_1").val(),
                        apgar_5: $("#apgar_5").val(),
                        hiperbilirrubinemia: $("#hiperbilirrubinemia").val(),
                        poliglobulia: $("#poliglobulia").val(),
                        hospital_ucin: $("#hospital_ucin").val(),
                        sindrome_respiratorio: $("#sindrome_respiratorio").val(),
                        alta_con_madre: $("#alta_con_madre").val(),
                        observaciones: $("#observaciones").val(),
                    }

                    var data = {
                        id: $("#id_paciente").val(),
                        tipo: 4,
                        data:JSON.stringify(parto)
                    }

                    $.post(serverURL + "examen/set/", data).done(function(response) {
                        obtenerPartos();
                    });
                });

                $("#goto_ajuste").on("click", function(){
                    document.location.hash = "#ajustepeso";
                });

                $("#listaPartos").on("click", function(){
                    let estado = $(this).data("hide");

                    if (estado == true){
                        $(this).data("hide", false);
                        $("#contenedorListaPartos").removeClass("d-none");
                        $("#menuListaPartos").addClass("d-none");
                    }
                    else{
                        $(this).data("hide", true);
                        $("#contenedorListaPartos").addClass("d-none");
                        $("#menuListaPartos").removeClass("d-none");
                    }
                });

                $("#listaPartosDos").on("click", function(){
                    $("#listaPartos").trigger("click");
                });

                $("#datos\\.neonatal\\.peso").on("change", function(){
                    var max = parseInt($(this).attr('max'));
                    var min = parseInt($(this).attr('min'));
                    
                    if ($(this).val() > max){
                        var str = String($(this).val());
                        str = str.slice(0, -1);
                        $(this).val(parseInt(str));
                    }
                    else if ($(this).val() < min)
                    {
                        $(this).val(min);
                    }

                    $("#pesoRN").val($(this).val());
                    $("#pesoRN").trigger("change");
                });

                $("#datos\\.neonatal\\.peso").on("keyup", function(){
                    var max = parseInt($(this).attr('max'));
                    var min = parseInt($(this).attr('min'));
                    
                    if ($(this).val() > max){
                        var str = String($(this).val());
                        str = str.slice(0, -1);
                        $(this).val(parseInt(str));
                    }
                    else if ($(this).val() < min)
                    {
                        $(this).val(min);
                    }
                });
                $("#datos\\.neonatal\\.peso").on("keyup", function(event){
                    if ( event.which == 13 ) {
                        event.preventDefault();
                        $("#datos\\.neonatal\\.talla").focus();
                    }
                });

                $("#datos\\.neonatal\\.talla").on("keyup", function(){
                    var max = parseInt($(this).attr('max'));
                    var min = parseInt($(this).attr('min'));
                    
                    if ($(this).val() > max){
                        var str = String($(this).val());
                        str = str.slice(0, -1);
                        $(this).val(parseInt(str));
                    }
                    else if ($(this).val() < min)
                    {
                        $(this).val(min);
                    }
                });

                $("#datos\\.neonatal\\.talla").on("change", function(){
                    var max = parseInt($(this).attr('max'));
                    var min = parseInt($(this).attr('min'));
                    if ($(this).val() > max){
                        var str = String($(this).val());
                        str = str.slice(0, -1);
                        $(this).val(parseInt(str));
                    }
                    else if ($(this).val() < min){
                        $(this).val(min);
                    }
                    $("#tallaRN").val($(this).val());
                    $("#tallaRN").trigger("change");
                });

                $("#perimetro_craneo_rn").on("keyup", function(){
                    var max = parseInt($(this).attr('max'));
                    var min = parseInt($(this).attr('min'));
                    
                    if ($(this).val() > max){
                        var str = String($(this).val());
                        str = str.slice(0, -1);
                        $(this).val(parseInt(str));
                    }
                    else if ($(this).val() < min)
                    {
                        $(this).val(min);
                    }
                });

                $("#peso_placentario").on("keyup", function(){
                    var max = parseInt($(this).attr('max'));
                    var min = parseInt($(this).attr('min'));
                    
                    if ($(this).val() > max){
                        var str = String($(this).val());
                        str = str.slice(0, -1);
                        $(this).val(parseInt(str));
                    }
                    else if ($(this).val() < min)
                    {
                        $(this).val(min);
                    }
                });

                $("#datos\\.neonatal\\.edad").on("change", function(){
                    $("#edadGestacional").val($(this).val());
                    $("#edadGestacional").trigger("change");
                });


                Highcharts.chart('grafico', {

                    title: {
                        text: 'M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274',
                        align: "left",
                        style:{
                            "font-size": "12px"
                        }
                    },
                    credits: { enabled: false },
                    yAxis: {
                        title: {
                            text: 'Gramos'
                        },
                        tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540]
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },

                    plotOptions: {
                        series: {
                            pointStart: 24
                        }
                    },
                    colors: ['#ff3300', '#ff3300', '#000000'],
                    series: [{
                        name: 'Pct. 10',
                        data: [640.6,666,728.2,822.9,945.7,1092.2,1258.2,1439.2,1630.8,1828.7,2028.6,2226,2416.7,2596.2,2760.2,2904.2,3024.1,3115.3,3173.5]
                    }, {
                        name: 'Pct. 90',
                        data:  [897.9,963.3,1070.6,1214.6,1390.1,1592,1815,2053.8,2303.4,2558.5,2813.9,3064.4,3304.7,3529.8,3734.4,3913.2,4061.2,4173,4243.5]
                    }]
                });
            });
            $("#graficoEstandar").on('click', function(){
                RN = new RecienNacido($("#pesoRN").val(),$("#tallaRN").val(),$("#edadGestacional").val());
                if ($("#pesoRN").val() > 1){ 

                    if ($("#graficoEstandar").val() == 1){
                        $("#PesoPct").val("Pct. " + RN.pesoTemuco());
                        $("#PesoEge").val(RN.pesoTemucoCondicion());
                    }
                    else{
                        $("#PesoPct").val("Pct. " + RN.pesoChile());
                        $("#PesoEge").val(RN.pesoChileCondicion());
                    }

                    $("#peso_eg_pct_regional").val(RN.pesoTemuco());
                    $("#peso_eg_regional").val(RN.pesoTemucoCondicion());
                    $('#g3').trigger("click");
                }

                if ($("#tallaRN").val() > 1){
                    if ($("#graficoEstandar").val() == 3){
                        $("#IpnPct").val("Pct. " + RN.ipnTemuco());
                        $("#IpnEge").val(RN.ipnTemucoCondicion());
                    }
                    else{
                        $("#IpnPct").val("Pct. " + RN.ipnChile());
                        $("#IpnEge").val(RN.ipnChileCondicion());
                    }
                }

                if (this.value == 0){
                    Highcharts.chart('grafico', {
                        title: {
                            text: 'M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274',
                            align: "left",
                            style:{
                                "font-size": "12px"
                            }
                        },
                        credits: { enabled: false },
                        yAxis: {
                            title: {
                                text: 'Gramos'
                            },
                            tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540]
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle'
                        },
                        plotOptions: {
                            series: {
                                pointStart: 24
                            }
                        },
                        colors: ['#ff3300', '#ff3300', '#000000'],
                        series: [{
                            name: 'Pct. 10',
                            data: [640.6,666,728.2,822.9,945.7,1092.2,1258.2,1439.2,1630.8,1828.7,2028.6,2226,2416.7,2596.2,2760.2,2904.2,3024.1,3115.3,3173.5]
                        }, {
                            name: 'Pct. 90',
                            data:  [897.9,963.3,1070.6,1214.6,1390.1,1592,1815,2053.8,2303.4,2558.5,2813.9,3064.4,3304.7,3529.8,3734.4,3913.2,4061.2,4173,4243.5]
                        }, {
                            type: "line",
                            name: 'Peso',
                            dashStyle: "Dot",
                            marker: { symbol: 'square' },
                            lineWidth: 0,
                            data: (function () {
                                var data = [];
                                var eg = $("#edadGestacional").val();
                                var peso = $("#pesoRN").val();

                                if (eg > 24){
                                    for (i = 24; i <= (eg -1); i++) {
                                        data.push({
                                            y: 0,
                                        });
                                    }
                                    data.push({
                                        y: parseInt(peso),
                                    });
                                    for (i = eg + 1; i <= 39; i++) {
                                        data.push({
                                            y: 0,
                                        });
                                    }
                                }
                                return data;
                            }())
                        }]
                    });
                } 
                else if (this.value == 1){
                    Highcharts.chart('grafico', {
                        title: {
                            text: 'Lagos y col. Rev. Chilena Obtet. Ginecol. 2009; 74(4)',
                            align: "left",
                            style:{
                                "font-size": "12px"
                            }
                        },
                        credits: { enabled: false },
                        yAxis: {
                            title: {
                                text: 'Gramos'
                            },
                            tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540]
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle'
                        },
                        plotOptions: {
                            series: {
                                pointStart: 24
                            }
                        },
                        colors: ['#ff3300', '#ff3300', '#000000'],
                        series: [{
                                name: 'Pct. 10',
                                data: [600,662,739,830,938,1064,1208,1373,1565,1756,1970,2192,2415,2628,2820,2978,3089,3120,3123]
                            }, {
                                name: 'Pct. 90',
                                data:  [800,960,1139,1337, 1551,1781,2022,2272,2527,2781,3031,3270, 3494,3699,3878,4030,4150,4236,4287]
                            }, {
                                type: "line",
                                name: 'Peso',
                                dashStyle: "Dot",
                                marker: { symbol: 'square' },
                                lineWidth: 0,
                                data: (function () {
                                    var data = [];
                                    var eg = $("#edadGestacional").val();
                                    var peso = $("#pesoRN").val();
                                if (eg > 24){
                                    for (i = 24; i <= (eg -1); i++) {
                                        data.push({
                                            y: 0,
                                        });
                                    }
                                    data.push({
                                        y: parseInt(peso),
                                    });
                                    for (i = eg + 1; i <= 39; i++) {
                                        data.push({
                                            y: 0,
                                        });
                                    }
                                }
                                return data;
                            }())
                        }]
                    });
                }
                else if (this.value == 2){
                    Highcharts.setOptions({
                        lang: {
                            numericSymbols: [ "k" , "M" , "G" , "T" , "P" , "E"]
                        }
                    });
                    Highcharts.chart('grafico', {
                        title: {
                            text: 'M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274',
                            align: "left",
                            style:{
                                "font-size": "14px"
                            }
                        },
                        credits: { enabled: false },
                        yAxis: {
                            title: {
                                text: '((peso / talla)^3)*100'
                            },
                            tickPositions: [1, 1.6, 2.2, 2.8, 3.4, 4],
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle'
                        },
                        colors: ['#ff3300', '#ff3300', '#000000'],
                        plotOptions: {
                            series: {
                                pointStart: 24
                            }
                        },
                        series: [{
                            name: 'Pct. 10',
                            data: [1.79, 1.83, 1.87, 1.91, 1.95, 1.99, 2.04, 2.08, 2.12, 2.16, 2.2, 2.25, 2.29, 2.33, 2.37, 2.41, 2.45, 2.5, 2.54]
                        }, {
                            name: 'Pct. 90',
                            data:  [2.54, 2.57, 2.59, 2.62, 2.65, 2.68, 2.71, 2.74, 2.77, 2.8, 2.83, 2.86, 2.89, 2.92 ,2.95, 2.98, 3.01,3.04, 3.07]
                        }, {
                            type: "line",
                            name: 'IPN',
                            dashStyle: "Dot",
                            marker: { symbol: 'square' },
                            lineWidth: 0,
                            data: (function () {
                                var data = [];
                                var eg = $("#edadGestacional").val();
                                var ipn = $("#IPNRN").val();

                                if (eg > 24){
                                    for (i = 24; i <= (eg - 1); i++) {
                                        data.push({
                                            y: 0,
                                        });
                                    }
                                    data.push({
                                        y: parseFloat(ipn),
                                    });
                                    for (i = eg + 1; i <= 43; i++) {
                                        data.push({
                                            y: 0,
                                        });
                                    }
                                }
                                return data;
                            }())
                        }]
                    });
                }
                else if (this.value == 3){
                    Highcharts.setOptions({
                        lang: {
                            numericSymbols: [ "k" , "M" , "G" , "T" , "P" , "E"]
                        }
                    });
                    Highcharts.chart('grafico', {
                        title: {
                            text: 'Lagos y col. Rev. Chilena Obtet. Ginecol. 2009; 74(4)',
                            align: "left",
                            style:{
                                "font-size": "12px"
                            }
                        },
                        credits: { enabled: false },
                        yAxis: {
                            title: {
                                text: '((peso / talla)^3)*100'
                            },
                            tickPositions: [1, 1.6, 2.2, 2.8, 3.4, 4],
                        },
                        legend: {
                            layout: 'vertical',
                            align: 'right',
                            verticalAlign: 'middle'
                        },
                        colors: ['#ff3300', '#ff3300', '#000000'],
                        plotOptions: {
                            series: {
                                pointStart: 24
                            }
                        },
                        series: [{
                            name: 'Pct. 10',
                            data: [1.95,1.93,1.92,1.92,1.94,1.97,2.01,2.06,2.11,2.17,2.23,2.28,2.33,2.38,2.41,2.44,2.44,2.42,2.39]
                        }, {
                            name: 'Pct. 90',
                            data:  [2.43,2.44,2.46,2.49,2.53,2.57,2.62,2.68,2.74,2.79,2.85,2.9,2.95,2.99,3.02,3.04,3.05,3.04,3.01]
                        }, {
                            type: "line",
                            name: 'IPN',
                            dashStyle: "Dot",
                            marker: { symbol: 'square' },
                            lineWidth: 0,
                            data: (function () {
                                var data = [];
                                var eg = $("#edadGestacional").val();
                                var ipn = $("#IPNRN").val();

                                if (eg > 24){
                                    for (i = 24; i <= (eg - 1); i++) {
                                        data.push({
                                            y: 0,
                                        });
                                    }
                                    data.push({
                                        y: parseFloat(ipn),
                                    });
                                    for (i = eg + 1; i <= 43; i++) {
                                        data.push({
                                            y: 0,
                                        });
                                    }
                                }
                                return data;
                            }())
                        }]
                    });
                }
            });
            $( "#edadGestacional" ).change(function() {
              var max = parseInt($(this).attr('max'));
              var min = parseInt($(this).attr('min'));
              if ($(this).val() > max)
              {
                  $(this).val(max);
              }
              else if ($(this).val() < min)
              {
                  $(this).val(min);
              }
              $("#graficoEstandar").trigger("click");
            });

            $( "#pesoRN" ).change(function() {
              var max = parseInt($(this).attr('max'));
              var min = parseInt($(this).attr('min'));
              if ($(this).val() > max)
              {
                  $(this).val(max);
              }
              else if ($(this).val() < min)
              {
                  $(this).val(min);
              }

              if ($("#tallaRN").val() > 1){
                var valor = $(this).val() / (Math.pow($("#tallaRN").val(), 3));
                valor = valor * 100000;
                $("#IPNRN").val(valor.toFixed(2));
                $("#datos\\.neonatal\\.ipn").val(valor.toFixed(2));
              }
              $("#graficoEstandar").trigger("click");
            });

            $( "#tallaRN" ).change(function() {
                var max = parseInt($(this).attr('max'));
                var min = parseInt($(this).attr('min'));
                if ($(this).val() > max){
                    $(this).val(max);
                }
                else if ($(this).val() < min){
                    $(this).val(min);
                }

                if ($("#pesoRN").val() > 1){
                    var valor = $("#pesoRN").val() / (Math.pow($("#tallaRN").val(), 3));
                    valor = valor * 100000;
                    $("#IPNRN").val(valor.toFixed(2));
                    $("#datos\\.neonatal\\.ipn").val(valor.toFixed(2));
                }
                $("#graficoEstandar").trigger("click");
            });
            
            function verGraficoAjustePeso(){
                RN = new RecienNacido($("#pesoRN").val(),$("#tallaRN").val(),$("#edadGestacional").val());
                $('#opt1').trigger("click");
                $('#g3').trigger("click");
            };
            
            var RN = 0;
            var Tablas = 0;
            var varMama = 0;
            var p90Pso = [];
            var p10Pso = [];       

            $('#g3').click(function () {
                tipografico = 0;
                var apell = 0;
                if ($("#apellm").val() == 2) {
                    apell = 1;
                }
                else {
                    apell = $("#apellm").val();
                }
                varMama.edad = $("#em").val();
                varMama.apellido = apell;
                varMama.paridad = $("#pm").val();
                RN.sexo = $("#sn").val();
                var p90 = [0.2418159,-0.0038925,0.0000168,-0.0130562,-0.0127872,-0.0034632,0.0117179,0.0021092,-0.9260631];
                var p10 = [-0.2639902,0.0110356,-0.0001265,-0.0146183,-0.0134044,-0.0020684,0.0092266, 0.0009001, 4.474501];
                for (i = 24; i < 43; i++) {
                    x = i - 24;
                    p90Pso[x] = Math.pow(10, ((i * p90[0]) + (Math.pow(i, 2) * p90[1]) + (Math.pow(i, 3) * p90[2]) + (p90[3] * $("#pm").val()) + (p90[4] * $("#sn").val()) + (p90[5] * apell) + (p90[6] * $("#imc").val()) + (p90[7] * $("#em").val()) + p90[8]));
                    p10Pso[x] = Math.pow(10, ((i * p10[0]) + (Math.pow(i, 2) * p10[1]) + (Math.pow(i, 3) * p10[2]) + (p10[3] * $("#pm").val()) + (p10[4] * $("#sn").val()) + (p10[5] * apell) + (p10[6] * $("#imc").val()) + (p10[7] * $("#em").val()) + p10[8]));;
                }
                $("#PesoEgeSAj").val(RN.pesoTemuco());
                eg = RN.eg - 24;
                var tablas = new Tabla;
                var uno, dos, tres;
                uno = p90Pso[eg] - p10Pso[eg];
                dos = RN.peso - p10Pso[eg];
                tres = parseInt((80 / (uno)) * (dos)) + 10;
                $("#PesoEgeCAj").val(tres);
                $("#peso_eg_pct_ajustado").val(tres);
                if (tres < 10){
                    $("#peso_eg_ajustado").val("Pequeño");
                }
                else if (tres <= 90) {
                    $("#peso_eg_ajustado").val("Adecuado");
                }
                else if (tres > 90) {
                    $("#peso_eg_ajustado").val("Grande");
                }
                $("#tituloAjusteG").addClass("d-none");
                $("#tituloAjusteAlto").html("Pct Peso sin ajuste");
                $("#tituloAjusteBajo").html("Pct. Peso con ajuste");
                Highcharts.chart('graficoAjustado', {
                    title: {
                        text: 'Curva regional peso/eg ajustada por variables',
                        style: {
                        "color": "#337ab7",
                        "fontSize": "14px"
                        }
                    },
                    chart: {
                        backgroundColor: "rgba(0, 0, 0, 0)"
                    },
                    yAxis: {
                        title: { text: '' },
                        tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540,4980],
                        tickColor: "#337ab7",
                        labels: {
                        enabled: true,
                        style: {
                        color: '#337ab7',
                        }
                        }
                    },
                    colors: ['#ff3300', '#ff3300', '#ff3300'],
                    xAxis: {
                        categories:
                        ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
                        labels: {
                        enabled: true,
                        style: {
                        color: '#337ab7',
                        }
                        }
                    },
                    credits: { enabled: false },
                    series: [{
                        type: "line",
                        name: 'Pct. 10',
                        marker: { enabled: false },
                        dashStyle: (function (){
                            var estilo = 'solid';
                            if (RN.ajustePequeno == true){
                                estilo = 'Dash';
                            }
                            return estilo;
                        }()),
                        color: (function(){
                            var color = '#ff3300';

                            if (RN.ajustePequeno == true){
                                color = '#003d99';
                            }
                            return color;
                        }()),
                data: (function () {
                var data = [];
                for (i = 24; i < 43; i++) {
                x = i - 24;
                data.push({
                    y: p10Pso[x],
                });
                }
                return data;
                }())
                }, {
                type: "line",
                name: 'Pct. 90',
                marker: { enabled: false },
                dashStyle: (function (){
                    var estilo = 'solid';

                    if (RN.ajustePequeno == true){
                        estilo = 'Dash';
                    }

                    return estilo;
                }()),
                color: (function(){
                    var color = '#ff3300';

                    if (RN.ajustePequeno == true){
                        color = '#003d99';
                    }
                    return color;
                }()),
                data: (function () {
                var data = [];
                for (i = 24; i < 43; i++) {
                x = i - 24;
                data.push({
                    y: p90Pso[x],
                });
                }
                return data;
                }())
                }, {
                type: "line",
                name: 'Peso',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                var data = [];

                for (i = 24; i <= (RN.eg -1); i++) {
                data.push({
                    y: 0,
                });
                }
                data.push({
                y: parseInt(RN.peso),
                });
                for (i = RN.eg + 1; i <= 39; i++) {
                data.push({
                    y: 0,
                });
                }
                return data;
                }())
                }]
            });
        });


            $('#tm').change(function () {
                varMama = new Mama($("#tm").val(),$("#pesom").val(),$("#em").val(),$('#apellm').val());
                $('#valorimc').val(varMama.imc());
                $('#imc').val(varMama.imcCondicion());
                $('#g3').trigger("click");
            });

            $('#pesom').change(function () {
                varMama = new Mama($("#tm").val(),$("#pesom").val(),$("#em").val(),$('#apellm').val());
                $('#valorimc').val(varMama.imc());
                $('#imc').val(varMama.imcCondicion());
                $('#g3').trigger("click");
            });

            $('#sn').change(function () {
                $('#g3').trigger("click");
            });
            $('#pm').change(function () {
                $('#g3').trigger("click");
            });
            $('#imc').change(function () {
                $('#g3').trigger("click");
            });
            $('#em').change(function () {
                $('#g3').trigger("click");
            });
            $('#apellm').change(function () {
                $('#g3').trigger("click");
            });

            $('#opt1').click(function () {
                $('#pm').val("1");
                $('#sn').val("1");
                $('#tm').val("149");
                $('#pesom').val("70");
                $('#em').val("6");
                $('#apellm').val("1");
                varMama = new Mama('149','70',$("#em").val(),$('#apellm').val());
                varMama.talla = '149';
                varMama.peso = '70';
                $('#valorimc').val(varMama.imc());
                $('#imc').val(varMama.imcCondicion());
                RN.ajustePequeno = false;
                $('#g3').trigger("click");
                $("#tituloAjusteG").addClass("d-none");
                $("#tituloAjusteAlto").html("Pct. peso sin ajuste");
                $("#tituloAjusteBajo").html("Pct. de peso con ajuste");
            });

            $('#opt2').click(function () {
                $('#pm').val("0");
                $('#sn').val("0");
                $('#tm').val("170");
                $('#pesom').val("91");
                $('#em').val("6");
                $('#apellm').val("0");
                $('#tm').change();
                varMama = new Mama('170','91',$("#em").val(),$('#apellm').val());
                varMama.talla = '170';
                varMama.peso = '91';
                $('#valorimc').val(varMama.imc());
                $('#imc').val(varMama.imcCondicion());
                RN.ajustePequeno = false;
                $('#g3').trigger("click");
                $("#tituloAjusteG").addClass("d-none");
                $("#tituloAjusteAlto").html("Pct. peso sin ajuste");
                $("#tituloAjusteBajo").html("Pct. peso con ajuste");
            });

            $('#opt3').click(function () {
                $('#sn').val("1");
                $('#pm').val("1");
                $('#tm').val("149");
                $('#pesom').val("44");
                $('#em').val("1");
                $('#apellm').val("1");
                $('#tm').change();
                varMama = new Mama('149','44',$("#em").val(),$('#apellm').val());
                varMama.talla = '149';
                varMama.peso = '44';
                $('#valorimc').val(varMama.imc());
                $('#imc').val(varMama.imcCondicion());
                RN.ajustePequeno = true;
                $('#g3').trigger("click");
                $("#tituloAjusteG").addClass("d-none");
                $("#tituloAjusteAlto").html("Pct.peso sin ajuste");
                $("#tituloAjusteBajo").html("Pct. peso con ajuste");
            });

            $("#opt4").click(function(){
                var chart =  Highcharts.chart('graficoAjustado', {
                    title: {
                        text: 'Visión simultanea curvas para condiciones extremas',
                        style: {
                        "color": "#337ab7",
                        "fontSize": "14px"
                        }
                    },
                    chart: {
                        backgroundColor: "rgba(0, 0, 0, 0)"
                    },
                    yAxis: {
                        title: { text: '' },
                        tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540,4980],
                        tickColor: "#337ab7",
                        labels: {
                        enabled: true,
                        style: {
                        color: '#337ab7',
                        }
                        }
                    },
                    colors: ['#ff3300', '#ff3300', '#ff3300'],
                    xAxis: {
                        categories:
                        ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
                        labels: {
                        enabled: true,
                        style: {
                        color: '#337ab7',
                        }
                        }
                    },
                    credits: { enabled: false },
                    series: [{
                        type: "line",
                        name: 'Pct. 10',
                        marker: { enabled: false },
                        dashStyle: (function (){
                            estilo = 'Dash';
                            return estilo;
                        }()),
                        color: (function(){
                            color = '#003d99';
                            return color;
                        }())
                    }, {
                        type: "line",
                        name: 'Pct. 90',
                        marker: { enabled: false },
                        dashStyle: (function (){
                                estilo = 'Dash';
                            return estilo;
                        }()),
                        color: (function(){
                            color = '#003d99';
                            return color;
                        }())
                    }, {
                        type: "line",
                        name: 'Peso',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                        data: (function () {
                            var data = [];
                            for (i = 24; i <= (RN.eg -1); i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                            data.push({
                                y: parseInt(RN.peso),
                            });
                            for (i = RN.eg + 1; i <= 39; i++) {
                                data.push({
                                    y:  0,
                                });
                            }
                            return data;
                        }())
                    },{
                        type: "line",
                        name: 'Pct. 10',
                        marker: { enabled: false },
                        dashStyle: (function (){
                            estilo = 'solid';
                            return estilo;
                        }()),
                        color: (function(){
                            color = '#ff3300';
                            return color;
                        }())
                    }, {
                        type: "line",
                        name: 'Pct. 90',
                        marker: { enabled: false },
                        dashStyle: (function (){
                            estilo = 'solid';
                            return estilo;
                        }()),
                        color: (function(){
                            color = '#ff3300';
                            return color;
                        }())
                    }]
                });

                chart.series[3].setData([614.911761594748,688.2409351621351,775.8261252713739,879.2765685663702,1000.14921864602,1139.7859521609507,1299.0982567628794,1478.2976958841446,1676.578914688683,1891.7742075463264,2120.0143470672206,2355.4478861757852,2590.0872856319534,2813.8600915466154,3014.940876697811,3180.418712251241,3297.311672544965,3353.875214095742,3341.073271117301]);
                chart.series[4].setData([845.6847516567528,1019.8791186895171,1215.1332367429115,1430.6549439464502,1664.8783277732855,1915.435357904167,2179.1679353682594,2452.1831280795927,2729.951302092218,3007.4436584447762,3279.3026501881805,3540.0361747837806,3784.224559989481,4006.728359825368,4202.884932894939,4368.682671927062,4500.903482341126,4597.226484532643,4656.288703467283]);
                chart.series[0].setData([532.7720094718462,596.3058912325178,672.1914745777674,761.8230347419276,866.5495478697786,987.5336430802754,1125.5650517432623,1280.827076703167,1452.6219422120837,1639.0715041903895,1836.8233856299587,2040.8077742235917,2244.1041041316807,2437.985397218539,2612.205863734485,2755.5792133386753,2856.8576426002764,2905.8654410796826,2894.7735782926065]);
                chart.series[1].setData([711.5447194612854,858.108887467441,1022.3923706232943,1203.7286574482926,1400.800215862748,1611.6146255636006,1833.5147159659111,2063.2250404407005,2296.9344422785457,2530.4117758437037,2759.1492925532416,2978.526031047196,3183.981971581188,3371.1928720061205,3536.235665413285,3675.7350538979554,3786.9833875928784,3868.0279180018288,3917.721861188435]);

                $("#tituloAjusteG").removeClass("d-none");
                $("#tituloAjusteAlto").html("potencial de crecimiento alto");
                $("#tituloAjusteBajo").html("potencial de crecimiento bajo");

                var p90x = [845.6847516567528,1019.8791186895171,1215.1332367429115,1430.6549439464502,1664.8783277732855,1915.435357904167,2179.1679353682594,2452.1831280795927,2729.951302092218,3007.4436584447762,3279.3026501881805,3540.0361747837806,3784.224559989481,4006.728359825368,4202.884932894939,4368.682671927062,4500.903482341126,4597.226484532643,4656.288703467283];
                var p10x = [614.911761594748,688.2409351621351,775.8261252713739,879.2765685663702,1000.14921864602,1139.7859521609507,1299.0982567628794,1478.2976958841446,1676.578914688683,1891.7742075463264,2120.0143470672206,2355.4478861757852,2590.0872856319534,2813.8600915466154,3014.940876697811,3180.418712251241,3297.311672544965,3353.875214095742,3341.073271117301];
                
                var p90 = [711.5447194612854,858.108887467441,1022.3923706232943,1203.7286574482926,1400.800215862748,1611.6146255636006,1833.5147159659111,2063.2250404407005,2296.9344422785457,2530.4117758437037,2759.1492925532416,2978.526031047196,3183.981971581188,3371.1928720061205,3536.235665413285,3675.7350538979554,3786.9833875928784,3868.0279180018288,3917.721861188435];
                var p10 = [532.7720094718462,596.3058912325178,672.1914745777674,761.8230347419276,866.5495478697786,987.5336430802754,1125.5650517432623,1280.827076703167,1452.6219422120837,1639.0715041903895,1836.8233856299587,2040.8077742235917,2244.1041041316807,2437.985397218539,2612.205863734485,2755.5792133386753,2856.8576426002764,2905.8654410796826,2894.7735782926065];
            
                var uno, dos, tres;

                uno = p90x[eg] - p10x[eg];
                dos = RN.peso - p10x[eg];
                tres = parseInt((80 / (uno)) * (dos)) + 10;
                $("#PesoEgeSAj").val(tres);

                uno = p90[eg] - p10[eg];
                dos = RN.peso - p10[eg];
                tres = parseInt((80 / (uno)) * (dos)) + 10;
                $("#PesoEgeCAj").val(tres);
            });

            function RecienNacido(peso = 0, talla = 0,eg = 40) {
                this.peso = peso;
                this.talla = talla;
                this.eg = eg;
                this.ipn = function ipn(){
                    var valor = this.peso / (Math.pow(this.talla, 3));
                    valor = valor * 100000;
                    return valor.toFixed(1);
                };
                this.pesoChile = function pesoChile(){
                    eg = this.eg - 24;
                    var tablas = new Tabla;
                    var uno = tablas.pct90PesoNacional[eg] - tablas.pct10PesoNacional[eg];
                    var dos = this.peso - tablas.pct10PesoNacional[eg];
                    return parseInt((80 / (uno)) * (dos)) + 10;
                };
                this.pesoTemuco = function pesoTemuco(){
                    eg = this.eg - 24;
                    var tablas = new Tabla;
                    var uno = tablas.pct90PesoTemuco[eg] - tablas.pct10PesoTemuco[eg];
                    var dos = this.peso - tablas.pct10PesoTemuco[eg];
                    return parseInt((80 / (uno)) * (dos)) + 10;
                };
                this.pesoAjustado = 0;
                this.pesoChileCondicion = function pesoChileC(){
                    eg = this.eg - 24;
                    var tablas = new Tabla;
                    if (this.peso < tablas.pct10PesoNacional[eg]){
                        return "Pequeño";
                    }
                    else if (this.peso <= tablas.pct90PesoNacional[eg]) {
                        return "Adecuado";
                    }
                    else if (this.peso > tablas.pct90PesoNacional[eg]) {
                        return "Grande";
                    }
                };
                this.pesoTemucoCondicion = function pesoTemucoC(){
                    eg = this.eg - 24;
                    var tablas = new Tabla;
                    
                    if (this.peso < tablas.pct10PesoTemuco[eg]){
                        return "Pequeño";
                    }
                    else if (this.peso <= tablas.pct90PesoTemuco[eg]) {
                        return "Adecuado";
                    }
                    else if (this.peso > tablas.pct90PesoTemuco[eg]) {
                        return "Grande";
                    }
                };
                this.pesoAjutadoCondicion = '';
                this.ipnChile = function ipnChile(){
                    var eg = this.eg - 24;
                    var tablas = new Tabla;
                    var uno = tablas.pct90IpnNacional[eg] - tablas.pct10IpnNacional[eg];
                    var dos= this.ipn() - tablas.pct10IpnNacional[eg];
                    return parseInt((80 / (uno)) * (dos)) + 10;
                };
                this.ipnTemuco = function ipnTemuco(){
                    var eg = this.eg - 24;
                    var tablas = new Tabla;
                    var uno = tablas.pct90IpnTemuco[eg] - tablas.pct10IpnTemuco[eg];
                    var dos = this.ipn() - tablas.pct10IpnTemuco[eg];
                    return parseInt((80 / (uno)) * (dos)) + 10;
                };
                this.ipnChileCondicion = function ipnChileC(){
                    var eg = this.eg - 24;
                    var tablas = new Tabla;
                    
                    if (this.ipn() < tablas.pct10IpnNacional[eg]){
                        return "Enflaquecido";
                    } else if (this.ipn() <= tablas.pct90IpnNacional[eg]) {
                        return "Eutrófico";
                    } else if (this.ipn() > tablas.pct90IpnNacional[eg]) {
                        return "RN Obeso";
                    }
                };
                this.ipnTemucoCondicion = function ipnTemucoC(){
                    var eg = this.eg - 24;
                    var tablas = new Tabla;
                    
                    if (this.ipn() < tablas.pct10IpnTemuco[eg]){
                        return "Enflaquecido";
                    } else if (this.ipn() <= tablas.pct90IpnTemuco[eg]) {
                        return "Eutrófico";
                    } else if (this.ipn() > tablas.pct90IpnTemuco[eg]) {
                        return "RN Obeso";
                    }
                };
                this.sexo = '';
                this.ajustePequeno = false;
            };

            function Tabla(plataforma) {
                this.plataforma = plataforma;
                this.pct10IpnNacional = [1.79, 1.83, 1.87, 1.91, 1.95, 1.99, 2.04, 2.08, 2.12, 2.16, 2.2, 2.25, 2.29, 2.33, 2.37, 2.41, 2.45, 2.5, 2.54];
                this.pct90IpnNacional = [2.54, 2.57, 2.59, 2.62, 2.65, 2.68, 2.71, 2.74, 2.77, 2.8, 2.83, 2.86, 2.89, 2.92 ,2.95, 2.98, 3.01,3.04, 3.07];
                this.pct10PesoNacional = [640.6,666,728.2,822.9,945.7,1092.2,1258.2,1439.2,1630.8,1828.7,2028.6,2226,2416.7,2596.2,2760.2,2904.2,3024.1,3115.3,3173.5];
                this.pct90PesoNacional = [897.9,963.3,1070.6,1214.6,1390.1,1592,1815,2053.8,2303.4,2558.5,2813.9,3064.4,3304.7,3529.8,3734.4,3913.2,4061.2,4173,4243.5];
                this.pct10IpnTemuco = [1.95,1.93,1.92,1.92,1.94,1.97,2.01,2.06,2.11,2.17,2.23,2.28,2.33,2.38,2.41,2.44,2.44,2.42,2.39];
                this.pct90IpnTemuco = [2.43,2.44,2.46,2.49,2.53,2.57,2.62,2.68,2.74,2.79,2.85,2.9,2.95,2.99,3.02,3.04,3.05,3.04,3.01];
                this.pct10PesoTemuco = [600,662,739,830,938,1064,1208,1373,1565,1756,1970,2192,2415,2628,2820,2978,3089,3120,3123];
                this.pct90PesoTemuco = [800,960,1139,1337, 1551,1781,2022,2272,2527,2781,3031,3270, 3494,3699,3878,4030,4150,4236,4287];
                this.pct10PesoAjustado = [];
                this.pct90PesoAjustado = [];
            };

            function Mama(talla,peso,edad,apellido) {
                this.paridad = 0
                this.talla = talla;
                this.peso = peso;
                this.edad = edad;
                this.apellido = apellido;
                this.imc = function imc(){
                    var valor = ((this.peso / (Math.pow(this.talla, 2))) * 10000);
                    return valor.toFixed(1);
                };
                this.imcCondicion = function imcC(){
                    if (this.imc() < 20){
                        return 1
                    }
                    else if (this.imc() < 25) {
                        return 2
                    }
                    else if (this.imc() <= 30) {
                        return 3
                    }
                    else if (this.imc() > 30) {
                        return 4
                    }
                };
            };
        </script>
        <script>
            $(document).ready(function(){
                $(window).on('hashchange', function(){
                    let hash = document.location.hash;

                    if (hash=="#postnatal"){
			            displayElement("postnatal");
                    }
                    else if (hash=="#ajustepeso"){
                        displayElement("ajustepeso");
                        verGraficoAjustePeso();
                    }
                    else if (hash=="#recienacido"){
                        displayElement("recienacido");
                    }
                    else if (hash=="#pdfviebox"){
                        displayElement("pdfviebox");
                    }
                    else if (hash=="#hipoglicemia"){
                        displayElement("hipoglicemia");
                    }
                    else if (hash=="#neonatal"){
                        displayElement("neonatal"); 
                    }
                });

                $("#pdfnacionalview").on("click", function(){
					$("#pdfview").attr('src', "https://servidor.crecimientofetal.cl/pdf/gnacional.pdf");
				});
				
				$("#pdfregionalview").on("click", function(){
					$("#pdfview").attr('src', "https://servidor.crecimientofetal.cl/pdf/gregional.pdf");
				});
            });

            function displayElement(div_id){
                $('#postnatal').hide();
                $('#ajustepeso').hide();
                $('#pdfviebox').hide();
                $('#recienacido').hide();
                $('#hipoglicemia').hide();
                $('#neonatal').hide();
                $('#'+div_id).show();
            }

$( document ).ready(function() {
    //cargar los select con los valores numéricos
    var pesoNeonatal
    var pesoMaterno

    //cargar input de semanas que empiezan con 25
    for (i = 25; i < 43; i++) {
        $("#edadGestacional").append('<option value="' + i +'">' + i + '</option>');
        $('#edadGestacional option[value="40"]').prop('selected', true);
    }
    //cargar inputs de edad materna
    for (i = 10; i < 51; i++) {
        $("#edad_materna").append('<option value="' + i +'">' + i + ' años</option>');
    }
    //cargar inputs de Peso
    for (i = 35; i < 130; i++) {
        $("#peso").append('<option value="' + i +'">' + i + ' kg.</option>');
    }
    //cargar inputs de talla
    for (i = 135; i < 190; i++) {
        $("#talla").append('<option value="' + i +'">' + i + ' cms.</option>');
        $("#tm").append('<option value="' + i +'">' + i + ' cms.</option>');
        $("#tallaMaterna").append('<option value="' + i +'">' + i + ' cms.</option>');
        $('#talla option[value="149"]').prop('selected', true);
        $('#tm option[value="149"]').prop('selected', true);
        $('#tallaMaterna option[value="149"]').prop('selected', true);
    }
    //cargar inputs de peso materno
    for (i = 35; i < 140; i++) {
        $("#pesom").append('<option value="' + i +'">' + i + ' kg</option>');
        $("#pesoMaterno").append('<option value="' + i +'">' + i + ' kg</option>');
        $('#pesom option[value="70"]').prop('selected', true);
        $('#pesoMaterno option[value="70"]').prop('selected', true);
    }

    $("#pesoRN").on("keydown", function(e){
        var text = $(this).val();
        
        switch (e.which) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                if (text.toString().length > 3){
                    return false;
                }
                break;
            case 13:
            case 8:
            case 37:
            case 39:
                break;
            default:
                return false;
        }
    });

    $("#tallaRN").on("keydown", function(e){
        var text = $(this).val();

        switch (e.which) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                if (text.toString().length > 2){
                    return false;
                }
                break;
            case 13:
            case 8:
            case 37:
            case 39:
                break;
            default:
                return false;
        }
    });
});
        </script>
    </body>
    <script>
        var serverURL = "<?php echo Config::get('URL'); ?>";
    </script>
</html>