        <section>
            <h4 class="text-center py-4 mb-0" id="titulo"><strong><em>Evaluación postnatal del crecimiento</em></strong></h4>
        </section>
        <div class="container" id="neonatal">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>">Inicio</a></li>
                <li class="breadcrumb-item active">Datos Neonatales</li>
                <li class="breadcrumb-item"><a href="#recienacido">Evaluación Peso e IPN</a></li>
                <li class="ml-auto"><a href="<?php echo Config::get('URL'); ?>">Volver</a></li>
            </ol>
            <div class="row my-2">
                <div class="col-12">
                    <div class="card bg-light">
                        <div class="card-body p-2 pl-3">
                            <div class="row align-items-center">
                                <div class="col-4">
                                    <h5 class="card-title m-0"><i class="fas fa-search"></i>  Buscar Pacientes Por:</h5>
                                </div>
                                <div class="col-3">
                                    <select id="buscar.parto.tipo" class="form-control">
                                        <option value="0" selected>ID de la madre</option>
                                        <option value="1">ID del Recién Nacido</option>
                                        <option value="2">Apellidos de la Madre</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <input class="form-control" id="buscar.parto.madre" type="text" placeholder="N° ID de la Madre">
                                </div>
                                <div class="col-2">
                                    <button type="button" class="btn btn-info">Buscar</button>
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
                                <button type="button" class="btn btn-secondary" id="boton.parto.nuevo">Nuevo</button>
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
                            <h5 class="card-title"><i class="fas fa-child"></i> Datos de parto y RN</h5>
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
                                    <label for="apgar_1">Apgar 1° Min.</label>
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
                                    <label for="apgar_5">Apgar 5° Min.</label>
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
                                            <select id="datos.neonatal.edad" class="form-control">
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
                                <div class="col-4">
                                    <label>Prof. Atención de Parto</label>
                                    <select class="form-control" id="prof.atencion.parto">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-secondary p-1" id="menuListaPartos">
                <a class="navbar-brand ml-3" data-hide="true" id="listaPartos" href="#"><i class="fas fa-th"></i> Lista de Ultimos Partos</a>
            </nav>
            <div id="contenedorListaPartos" class="container-fluid bg-secondary d-none" style="position: fixed;top: calc(70%);left: 0;height:30%">
                <h5 class="ml-3 mt-3 text-white" id="listaPartosDos"><i class="fas fa-th"></i> Lista de Ultimos Partos</h5>
                <div id="contenedorTabla">
                    <style>
                        .scroll-table{
                            overflow-y: scroll;
                            height: 53%;
                            width: 98%;
                            position: absolute;
                        }

                        .scroll-table > tr{
                            width: 100%;
                            display: inline-table;
                            table-layout: fixed;
                        }
                        .div-hover:hover{
                            background-color:#17a2b8;
                            color:white;
                        }
                    </style>
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
        <div class="container" id="recienacido" style="display:none;">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>">Inicio</a></li>
                <li class="breadcrumb-item"><a href="#neonatal">Datos Neonatales</a></li>
                <li class="breadcrumb-item active">Evaluación Peso e IPN</li>
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
                            <small class="text-info">Graficas para categorizar crecimiento y ponderación de variables biológicas</small><br>
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
            </div>
        </div>
        <link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/datepicker.css">
        <script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
        <script type="text/javascript">
            function obtenerPartos(){
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
                                    $("#datos\\.neonatal\\.edad").val(val.eg_parto).trigger("focusout");
                                    $("#termino_parto").val(val.termino_parto);
                                    $("#tipo_parto").val(val.tipo_parto);
                                    $("#tipo_patologia_obstetrica").val(val.tipo_patologia_obstetrica);
                                    $("#meconio").val(val.meconio);
                                    $("#datos\\.neonatal\\.peso").val(val.peso_rn).trigger("change");
                                    $("#datos\\.neonatal\\.talla").val(val.talla_rn).trigger("change");
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
                                    $("#conducta\\.uno").val(val.conducta_uno);
                                    $("#conducta\\.dos").val(val.conducta_dos);
                                    $("#conducta\\.tres").val(val.conducta_tres);
                                    $("#prof\\.alta\\.rn").val(val.prof_alta_rn);
                                    $("#prof\\.atencion\\.parto").val(val.prof_atencion_parto)
                                };
                            });
                        }
                    }
                });
            }

            $( document ).ready(function() {
                document.location.hash = "#";
                let fecha = new Date();
                let day = ("0" + fecha.getDate()).slice(-2);
                let month = ("0" + (fecha.getMonth() + 1)).slice(-2);

                $('#fecha_parto_rn').val((day)+"/"+(month)+"/"+fecha.getFullYear());
                $('#fecha_parto_rn').datepicker('setValue', (day)+"/"+(month)+"/"+fecha.getFullYear());

                obtenerPartos();

                $.get( serverURL + "configuracion/profesionalparto/1", function( data ) {
                    $("#prof\\.alta\\.rn").empty();
                    $.each(data, function (key, des) {
                        let strSelect = "<option value='" + des.id_profesional +"'>" + des.nombre_profesional + "</option>";
                        $("#prof\\.alta\\.rn").append(strSelect);
                    });
                });

                $("#buscar\\.parto\\.madre").on("keydown", function(e){
                    var text = $(this).val();
                    switch (e.which) {
                        case 13:
                            let data = {
                                id: $(this).val(),
                                tipo: 4
                            }
                            $.post(serverURL + "examen/gets", data).done(function (response) {
                                if (response !== null){
                                    if ( Object.keys(response).length > 0 ){
                                        $.each(response.data, function(i,val){
                                                $("#id_paciente").val(val.id_paciente);
                                                $("#nombre_madre").val(val.nombre_madre);
                                                $("#apellido_madre").val(val.apellido_madre);
                                                $("#lugar_parto_rn").val(val.lugar_parto_rn);
                                                $("#id_rn").val(val.id_rn);
                                                $("#nombre_rn").val(val.nombre_rn);
                                                $("#apellido_rn").val(val.apellido_rn);
                                                $("#sexo_rn").val(val.sexo_rn);
                                                $("#fecha_parto_rn").val(val.fecha_parto_rn);
                                                $("#datos\\.neonatal\\.edad").val(val.eg_parto).trigger("focusout");
                                                $("#termino_parto").val(val.termino_parto);
                                                $("#tipo_parto").val(val.tipo_parto);
                                                $("#tipo_patologia_obstetrica").val(val.tipo_patologia_obstetrica);
                                                $("#meconio").val(val.meconio);
                                                $("#datos\\.neonatal\\.peso").val(val.peso_rn).trigger("change");
                                                $("#datos\\.neonatal\\.talla").val(val.talla_rn).trigger("change");
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
                                                $("#conducta\\.uno").val(val.conducta_uno);
                                                $("#conducta\\.dos").val(val.conducta_dos);
                                                $("#conducta\\.tres").val(val.conducta_tres);
                                                $("#prof\\.alta\\.rn").val(val.prof_alta_rn);
                                                $("#prof\\.atencion\\.parto").val(val.prof_atencion_parto)
                                        });
                                    }
                                }
                                else{
                                    alert("No hay pacientes con el id escrito");
                                }
                            });
                            break;
                    }
                });

                $.get( serverURL + "configuracion/profesionalparto/0", function( data ) {
                    $("#prof\\.atencion\\.rn").empty();
                    $.each(data, function (key, des) {
                        let strSelect = "<option value='" + des.id_profesional +"'>" + des.nombre_profesional + "</option>";
                        $("#prof\\.atencion\\.parto").append(strSelect);
                    });
                });

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

                $("#boton\\.parto\\.nuevo").on("click", function(){
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
                    $("#prof\\.atencion\\.parto").val("");
                    $("#prof\\.alta\\.rn").val("");
                    $("#conducta\\.uno").val(3);
                    $("#conducta\\.dos").val(3);
                    $("#conducta\\.tres").val(3);
                    $("#prof\\.alta\\.rn").val("");
                    $("#prof\\.atencion\\.parto").val("");
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
                                $("#boton\\.parto\\.nuevo").trigger("click");
                                obtenerPartos();
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
                        conducta_uno: $("#conducta\\.uno").val(),
                        conducta_dos: $("#conducta\\.dos").val(),
                        conducta_tres: $("#conducta\\.tres").val(),
                        prof_alta_rn: $("#prof\\.alta\\.rn").val(),
                        prof_atencion_parto: $("#prof\\.atencion\\.parto").val()
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

                $("#datos\\.neonatal\\.edad").on("focusout", function(){
                    $("#edadGestacional").val($(this).val());
                    $("#edadGestacional").trigger("change");
                });

                $("#edadGestacional").on("focusout", function(){
                    $("#datos\\.neonatal\\.edad").val($(this).val());
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
            
            var RN = 0;

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

                    if (hash=="#recienacido"){
                        $("#titulo").html("<strong><em>Evaluación postnatal del crecimiento</em></strong>");
                        displayElement("recienacido");
                    }
                    else if (hash=="#pdfviebox"){
                        $("#titulo").html("<strong><em>Evaluación postnatal del crecimiento</em></strong>");
                        displayElement("pdfviebox");
                    }
                    else if (hash=="#neonatal"){
                        $("#titulo").html("<strong><em>Evaluación postnatal del crecimiento</em></strong>");
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
                $('#neonatal').hide();
                $('#ajustepeso').hide();
                $('#pdfviebox').hide();
                $('#recienacido').hide();
                $('#'+div_id).show();
            }

            $( document ).ready(function() {
                //cargar los select con los valores numéricos
                var pesoNeonatal
                var pesoMaterno

                //cargar input de semanas que empiezan con 25
                for (i = 20; i < 43; i++) {
                    $("#edadGestacional").append('<option value="' + i +'">' + i + '</option>');
                    $("#datos\\.neonatal\\.edad").append('<option value="' + i +'">' + i + '</option>');
                    $('#edadGestacional option[value="40"]').prop('selected', true);
                    $('#datos\\.neonatal\\.edad option[value="40"]').prop('selected', true);
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
                    $("#pesoMaterno").append('<option value="' + i +'">' + i + ' kg</option>');
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