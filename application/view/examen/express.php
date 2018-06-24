<div class="modal text-center" tabindex="-1" role="dialog" id="modalZoom" style="background-color: RGBA(0,0,0,0.8);"></div>
<div class="container pt-2" id="div.paciente">
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-3">
                <div class="card-body">
                    <div id="step-one">
                        <h6 class="text-center text-secondary">Paso 1</h6>
                        <button class="btn btn-outline-danger float-right" id="boton.volver.step.one"><i class="fas fa-door-open"></i><br>Volver</button>
                        <h1 class="text-center">¿Qué desea hacer?</h1>
                        <div class="text-center">
                            <button type="button" class="btn btn-outline-primary" id="step.search"><i class="fas fa-address-book fa-5x my-2"></i><br>Ver ultimos exámenes</button>
                            <button type="button" class="btn btn-outline-primary" id="step.new"><i class="fas fa-user-circle fa-5x my-2"></i><br>Nuevo Paciente</button>
                            <button type="button" class="btn btn-outline-primary" id="step.examen"><i class="fas fa-male fa-5x my-2"></i><br>Exámen paciente virtual</button>
                        </div>
                    </div>
                    <div class="d-none" id="step-two-find">
                        <h6 class="text-center text-secondary">Paso 2</h6>
                        <button class="btn btn-outline-danger float-right" id="boton.volver.step.two.find"><i class="fas fa-door-open"></i><br>Volver</button>
                        <h1 class="text-center">Busque un paciente</h1>
                        <h3 class="card-title text-primary">Buscar un Paciente</h3>
                        <p class="text-secondary">Escriba el id o el apellido de la paciente y luego presione el botón buscar</p>
                        <div class="form-group row mb-0 mx-sm-3">
                            <div class="col-12 col-sm-6">
                                <label for="buscar.paciente.id" class="col-form-label mt-2"><strong>Número de Registro Clínico ( RUT / DNI )</strong></label>
                            </div>
                            <div class="col-12 col-sm-6">
                                <input type="text" class="form-control my-3" id="buscar.paciente.id">
                            </div>
                        </div>
                        <div class="form-group row mb-0 mx-sm-3">
                            <div class="col-12 col-sm-6">
                                <label for="buscar.paciente.apellido" class="col-form-label mt-3"><strong>Apellidos</strong></label>
                            </div>
                            <div class="col-12 col-sm-6">
                                <input type="text" class="form-control my-3" id="buscar.paciente.apellido" list="apellidos">
                                <datalist id="apellidos">
                                </datalist>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-primary my-3" id="buscar.paciente.action"><i class="fas fa-search"></i> Buscar</button>
                        </div>
                        <h2 class="card-title text-primary">Ultimos Pacientes</h2>
                        <p class="text-secondary">Haga click sobre uno de los pacientes de la lista para cargar sus exámenes</p>
                        <div class="row mt-3" id="buscar.pacientes.last.view.container">
                            <div class="col-12">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Tipo Exm. Previo</th>
                                            <th scope="col">DCM</th>
                                        </tr>
                                    </thead>
                                    <?php if ($this->dicom) { ?>
                                    <tbody id="table.body.pacientes">
                                    </tbody>
                                    <?php } ?>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="step-three" class="d-none">
                        <h6 class="text-center text-secondary" id="titulos.step.three.step">Paso 3</h6>
                        <button class="btn btn-outline-danger float-right" id="boton.volver.step.three"><i class="fas fa-door-open"></i><br>Volver</button>
                        <h1 class="text-center" id="titulos.step.three.head">Validar datos de paciente</h1>
                        <p class="text-secondary text-center" id="titulos.step.three.help">Verifique si los datos son correctos y continue con el exámen</p>
                        <div class="form-group row">
                            <div class="col-4">
                                <label for="id-paciente" class="col-form-label mt-3">Número de Registro Clínico ( RUT / DNI )</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control my-3" id="id-paciente" disabled>
                            </div>
                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-2">
                                <label for="nombre-paciente" class="col-form-label">Nombre</label>
                            </div>
                            <div class="col-4">
                                <input class="form-control gris-claro" type="text" id="nombre-paciente" value="Paciente" disabled>
                            </div>
                            <div class="col-2">
                                <label for="nombre-paciente" class="col-form-label">Apellido</label>
                            </div>
                            <div class="col-4">
                                <input class="form-control gris-claro" type="text" id="apellido-paciente" value="de prueba" disabled>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-2">
                                <label for="input.paciente.fum.examen" class="col-form-label">FUM</label>
                            </div>
                            <div class="col-4">
                                <div class="row">
                                    <div class="col">
                                        <input class="form-control" type="text" data-date-format="dd/mm/yyyy" data-weekStart="1" id="input.paciente.fum" disabled>
                                    </div>
                                    <div class="col-4 p-0 d-none" id="div.pacientes.fum.save">
                                        <button type="button" class="btn btn-warning" id="guardarfur">Guardar</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <label for="input.paciente.eg.examen" class="col-form-label">EG</label>
                            </div>
                            <div class="col-4">
                                <div class="row">
                                    <div class="col">
                                        <input class="form-control" type="number" id="input.paciente.eg.semanas" disabled>
                                    </div>
                                    <div class="col">
                                        <input class="form-control" type="number" id="input.paciente.eg.dias" disabled>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-2">
                                <label for="input.paciente.fpp.examen" class="col-form-label">FPP</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" id="input.paciente.fpp.examen" readonly>
                            </div>
                            <div class="col-2">
                                <label for="fee" class="col-form-label">Fecha de exámen (Modificable)</label>
                            </div>
                            <div class="col-4">
                                <input class="form-control" type="text" id="input.paciente.fe" data-date-format="dd/mm/yyyy" onfocus="blur();" name="fee">
                            </div>
                        </div>
                        <div class="row mt-2 mb-2">
                            <div class="col-2 d-none">
                                <label class="col-form-label">Edad materna</label>
                            </div>
                            <div class="col-4 d-none">
                                <select name="edad_materna" class="form-control gris-claro" disabled>
                                    <option value="10">10 años</option>
                                    <option value="11">11 años</option>
                                    <option value="12">12 años</option>
                                    <option value="13">13 años</option>
                                    <option value="14">14 años</option>
                                    <option value="15">15 años</option>
                                    <option value="16">16 años</option>
                                    <option value="17">17 años</option>
                                    <option value="18">18 años</option>
                                    <option value="19">19 años</option>
                                    <option value="20">20 años</option>
                                    <option value="21">21 años</option>
                                    <option value="22">22 años</option>
                                    <option value="23">23 años</option>
                                    <option value="24">24 años</option>
                                    <option value="25">25 años</option>
                                    <option value="26">26 años</option>
                                    <option value="27">27 años</option>
                                    <option value="28">28 años</option>
                                    <option value="29">29 años</option>
                                    <option value="30">30 años</option>
                                    <option value="31">31 años</option>
                                    <option value="32">32 años</option>
                                    <option value="33">33 años</option>
                                    <option value="34">34 años</option>
                                    <option value="35">35 años</option>
                                    <option value="36">36 años</option>
                                    <option value="37">37 años</option>
                                    <option value="38">38 años</option>
                                    <option value="39">39 años</option>
                                    <option value="40">40 años</option>
                                    <option value="41">41 años</option>
                                    <option value="42">42 años</option>
                                    <option value="43">43 años</option>
                                    <option value="44">44 años</option>
                                    <option value="45">45 años</option>
                                    <option value="46">46 años</option>
                                    <option value="47">47 años</option>
                                    <option value="48">48 años</option>
                                    <option value="49">49 años</option>
                                    <option value="50">50 años</option>
                                </select>
                            </div>
                            <div class="col-2">
                                <label for="tipo.examen.previo" class="col-form-label">Tipo Exm. Previo</label>
                            </div>
                            <div class="col-4">
                                <div class="row">
                                    <div class="col">
                                        <select id="tipo.examen.previo" class="form-control" disabled></select>
                                    </div>
                                    <div class="col-4 p-0 d-none" id="div.pacientes.tipo.examen.sav">
                                        <button type="button" class="btn btn-warning" id="guardartipoexamen">Guardar</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-2">
                                <label class="col-form-label">Fecha Exm. Previo</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" id="fecha.examen.previo" readonly>
                            </div>
                        </div>
                        <div class="row mb-3 d-none">
                            <div class="col">
                                <p>Ingrese RUT de la paciente, si la paciente es anónima o no cuenta con la información, presione el botón continuar a datos de exámen.</p>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col d-flex justify-content-center">
                                <button type="button" class="btn btn-warning" id="boton.modificar.paciente"><i class="fas fa-edit"></i><br>Modificar y corregir</button>
                                <button type="button" class="btn btn-info ml-sm-2" id="step.four"><i class="far fa-check-circle"></i><br>Continuar a exámen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
	    <div class="col-md-12">
            <div class="card mb-3">
                <div class="card-body">
			        <div class="row mb-3">
                        <div class="col-9">
                            <h5 class="card-title text-primary text-left mt-2">Configuración de datos para variable de uso habitual (Opcional)</h5>
                        </div>
                        <div class="col-3">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-outline-info p-2 active" id="configNoController" data-value="0">
                                    <input type="radio" value="0" checked> NO
                                </label>
                                <label class="btn btn-outline-info p-2" id="configSiController" data-value="1">
                                    <input type="radio" value="1"> SI
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-9">
                            <h5 class="card-title text-primary text-left mt-2 mb-4">Información útil para reporte de informe y / o graficas (Opcional)</h5>
                        </div>
                                <div class="col-3">
                                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label class="btn btn-outline-info active" id="infadicionalNoController" data-value="0">
                                        <input type="radio" value="0" checked=""> NO
                                        </label>
                                        <label class="btn btn-outline-info" id="infadicionalSiController" data-value="1">
                                        <input type="radio" value="1"> SI
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group d-none" id="infadicionalView">
                                <div class="row mt-2 mb-2">
                                    <div class="col-2">
                                        <label for="ecografista" class="col-form-label">Profesional examinador</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="profesional.ecografista" class="form-control gris-claro">
                                         </select>
                                    </div>
                                    <div class="col-2">
                                        <label for="motivo.examen" class="col-form-label">Motivo del exámen</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="motivo.examen" class="form-control gris-claro">
                                         </select>
                                    </div>
                                </div>
                                <div class="row mt-2 mb-2">
                                    <div class="col-2">
                                        <label for="patologiaObstetricaUno" class="col-form-label">Patología Obstétrica Relevante</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="patologiaObstetricaUno" class="form-control"></select>
                                    </div>
                                    <div class="col-2">
                                        <label for="ecografista" class="col-form-label">Profesional referente</label>
                                    </div>
                                    <div class="col-4">
                                    <select id="profReferente" class="form-control"></select>
                                    </div>
                                </div>
                                <div class="row mt-2 mb-2">
                                    <div class="col-2">
                                        <label for="motivo-examen" class="col-form-label">Lugar de control prenatal</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="lugar.control.prenatal" class="form-control">
                                         </select>
                                    </div>
                                    <div class="col-2">
                                        <label for="ecografista" class="col-form-label">Embarazo Gemelar</label>
                                    </div>
                                    <div class="col-4">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-outline-info active" id="embarazoNo" data-value="0">
                                            <input type="radio" value="0" checked=""> NO
                                            </label>
                                            <label class="btn btn-outline-info" id="embarazoSi" data-value="1">
                                            <input type="radio" value="1"> SI
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row my-3">
                                    <div class="col-9">
                                        <h5 class="card-title text-primary text-left mt-2 mb-4">Adicional datos clínicos relevantes</h5>
                                    </div>
                                    <div class="col-3">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-outline-info p-3 active" id="infadicionalClinicoNoController" data-value="0" aria-pressed="true">
                                            <input type="radio" value="0" checked=""> NO</label>
                                            <label class="btn btn-outline-info p-3" id="infadicionalClinicoSiController" data-value="1" aria-pressed="true">
                                            <input type="radio" value="1"> SI</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group d-none" id="infadicionalClinicoView">
                                    <div class="row my-3">
                                        <div class="col-2">
                                            <label for="gestas" class="col-form-label">Gestas previas</label>
                                        </div>
                                        <div class="col-2">
                                            <select class="form-control" id="gestas">
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
                                        <div class="col-2">
                                            <label for="id-paciente" class="col-form-label">Partos</label>
                                        </div>
                                        <div class="col-2">
                                            <select class="form-control" id="partos">
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
                                        <div class="col-2">
                                            <label for="abortos" class="col-form-label">Abortos</label>
                                        </div>
                                        <div class="col-2">
                                            <select class="form-control" id="abortos">
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
                                    <div class="row my-3 d-none" id="itemGestasPrevias">
                                        <div class="col-2">
                                            <label class="col-form-label">Prematuro</label>
                                        </div>
                                        <div class="col-2">
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label class="btn btn-outline-info active" id="prematuroNo" data-value="0">
                                                <input type="radio" value="0" checked=""> NO
                                                </label>
                                                <label class="btn btn-outline-info" id="prematuroSi" data-value="1">
                                                <input type="radio" value="1"> SI
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <label class="col-form-label">Feto PEG o RCIU</label>
                                        </div>
                                        <div class="col-2">
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label class="btn btn-outline-info active" id="fetoPEGNo" data-value="0">
                                                <input type="radio" value="0" checked=""> NO
                                                </label>
                                                <label class="btn btn-outline-info" id="fetoPEGSi" data-value="1">
                                                <input type="radio" value="1"> SI
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <label class="col-form-label">Feto SHE</label>
                                        </div>
                                        <div class="col-2">
                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                <label class="btn btn-outline-info active" id="fetoSHENo" data-value="0">
                                                <input type="radio" value="0" checked=""> NO
                                                </label>
                                                <label class="btn btn-outline-info" id="fetoSHESi" data-value="1">
                                                <input type="radio" value="1"> SI
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-2">
                                            <label class="col-form-label">Presión Arterial</label>
                                        </div>
                                        <div class="col-2">
                                            <input class="form-control" type="text" id="sistolica">
                                        </div>
                                        <div class="col-1">/</div>
                                        <div class="col-2">
                                            <input class="form-control" type="text" id="diastolica">
                                        </div>
                                        <div class="col-5">
                                            <label for="" class="col-form-label">mmHg</label>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-2">
                                            <label for="pesoMaterno" class="col-form-label">Peso</label>
                                        </div>
                                        <div class="col-2">
                                            <select class="form-control" id="pesoMaterno">
                                                <option value="35">35 kg.</option>
                                                <option value="36">36 kg.</option>
                                                <option value="37">37 kg.</option>
                                                <option value="38">38 kg.</option>
                                                <option value="39">39 kg.</option>
                                                <option value="40">40 kg.</option>
                                                <option value="41">41 kg.</option>
                                                <option value="42">42 kg.</option>
                                                <option value="43">43 kg.</option>
                                                <option value="44">44 kg.</option>
                                                <option value="45">45 kg.</option>
                                                <option value="46">46 kg.</option>
                                                <option value="47">47 kg.</option>
                                                <option value="48">48 kg.</option>
                                                <option value="49">49 kg.</option>
                                                <option value="50">50 kg.</option>
                                                <option value="51">51 kg.</option>
                                                <option value="52">52 kg.</option>
                                                <option value="53">53 kg.</option>
                                                <option value="54">54 kg.</option>
                                                <option value="55">55 kg.</option>
                                                <option value="56">56 kg.</option>
                                                <option value="57">57 kg.</option>
                                                <option value="58">58 kg.</option>
                                                <option value="59">59 kg.</option>
                                                <option value="60">60 kg.</option>
                                                <option value="61">61 kg.</option>
                                                <option value="62">62 kg.</option>
                                                <option value="63">63 kg.</option>
                                                <option value="64">64 kg.</option>
                                                <option value="65" selected>65 kg.</option>
                                                <option value="66">66 kg.</option>
                                                <option value="67">67 kg.</option>
                                                <option value="68">68 kg.</option>
                                                <option value="69">69 kg.</option>
                                                <option value="70">70 kg.</option>
                                                <option value="71">71 kg.</option>
                                                <option value="72">72 kg.</option>
                                                <option value="73">73 kg.</option>
                                                <option value="74">74 kg.</option>
                                                <option value="75">75 kg.</option>
                                                <option value="76">76 kg.</option>
                                                <option value="77">77 kg.</option>
                                                <option value="78">78 kg.</option>
                                                <option value="79">79 kg.</option>
                                                <option value="80">80 kg.</option>
                                                <option value="81">81 kg.</option>
                                                <option value="82">82 kg.</option>
                                                <option value="83">83 kg.</option>
                                                <option value="84">84 kg.</option>
                                                <option value="85">85 kg.</option>
                                                <option value="86">86 kg.</option>
                                                <option value="87">87 kg.</option>
                                                <option value="88">88 kg.</option>
                                                <option value="89">89 kg.</option>
                                                <option value="90">90 kg.</option>
                                                <option value="91">91 kg.</option>
                                                <option value="92">92 kg.</option>
                                                <option value="93">93 kg.</option>
                                                <option value="94">94 kg.</option>
                                                <option value="95">95 kg.</option>
                                                <option value="96">96 kg.</option>
                                                <option value="97">97 kg.</option>
                                                <option value="98">98 kg.</option>
                                                <option value="99">99 kg.</option>
                                                <option value="100">100 kg.</option>
                                                <option value="101">101 kg.</option>
                                                <option value="102">102 kg.</option>
                                                <option value="103">103 kg.</option>
                                                <option value="104">104 kg.</option>
                                                <option value="105">105 kg.</option>
                                                <option value="106">106 kg.</option>
                                                <option value="107">107 kg.</option>
                                                <option value="108">108 kg.</option>
                                                <option value="109">109 kg.</option>
                                                <option value="110">110 kg.</option>
                                                <option value="111">111 kg.</option>
                                                <option value="112">112 kg.</option>
                                                <option value="113">113 kg.</option>
                                                <option value="114">114 kg.</option>
                                                <option value="115">115 kg.</option>
                                                <option value="116">116 kg.</option>
                                                <option value="117">117 kg.</option>
                                                <option value="118">118 kg.</option>
                                                <option value="119">119 kg.</option>
                                                <option value="120">120 kg.</option>
                                                <option value="121">121 kg.</option>
                                                <option value="122">122 kg.</option>
                                                <option value="123">123 kg.</option>
                                                <option value="124">124 kg.</option>
                                                <option value="125">125 kg.</option>
                                                <option value="126">126 kg.</option>
                                                <option value="127">127 kg.</option>
                                                <option value="128">128 kg.</option>
                                                <option value="129">129 kg.</option>
                                                <option value="130">130 kg.</option>
                                            </select>
                                        </div>
                                        <div class="col-2">
                                            <label for="id-paciente" class="col-form-label">Talla</label>
                                        </div>
                                        <div class="col-2">
                                            <select class="form-control" id="tallaMaterna">
                                                <option value="135">135 cms.</option>
                                                <option value="136">136 cms.</option>
                                                <option value="137">137 cms.</option>
                                                <option value="138">138 cms.</option>
                                                <option value="139">139 cms.</option>
                                                <option value="140">140 cms.</option>
                                                <option value="141">141 cms.</option>
                                                <option value="142">142 cms.</option>
                                                <option value="143">143 cms.</option>
                                                <option value="144">144 cms.</option>
                                                <option value="145">145 cms.</option>
                                                <option value="146">146 cms.</option>
                                                <option value="147">147 cms.</option>
                                                <option value="148">148 cms.</option>
                                                <option value="149">149 cms.</option>
                                                <option value="150">150 cms.</option>
                                                <option value="151">151 cms.</option>
                                                <option value="152">152 cms.</option>
                                                <option value="153">153 cms.</option>
                                                <option value="154">154 cms.</option>
                                                <option value="155">155 cms.</option>
                                                <option value="156">156 cms.</option>
                                                <option value="157">157 cms.</option>
                                                <option value="158">158 cms.</option>
                                                <option value="159">159 cms.</option>
                                                <option value="160">160 cms.</option>
                                                <option value="161">161 cms.</option>
                                                <option value="162">162 cms.</option>
                                                <option value="163">163 cms.</option>
                                                <option value="164">164 cms.</option>
                                                <option value="165" selected>165 cms.</option>
                                                <option value="166">166 cms.</option>
                                                <option value="167">167 cms.</option>
                                                <option value="168">168 cms.</option>
                                                <option value="169">169 cms.</option>
                                                <option value="170">170 cms.</option>
                                                <option value="171">171 cms.</option>
                                                <option value="172">172 cms.</option>
                                                <option value="173">173 cms.</option>
                                                <option value="174">174 cms.</option>
                                                <option value="175">175 cms.</option>
                                                <option value="176">176 cms.</option>
                                                <option value="177">177 cms.</option>
                                                <option value="178">178 cms.</option>
                                                <option value="179">179 cms.</option>
                                                <option value="180">180 cms.</option>
                                                <option value="181">181 cms.</option>
                                                <option value="182">182 cms.</option>
                                                <option value="183">183 cms.</option>
                                                <option value="184">184 cms.</option>
                                                <option value="185">185 cms.</option>
                                                <option value="186">186 cms.</option>
                                                <option value="187">187 cms.</option>
                                                <option value="188">188 cms.</option>
                                                <option value="189">189 cms.</option>
                                                <option value="190">190 cms.</option>
                                            </select>
                                        </div>
                                        <div class="col-2">
                                            <label for="id-paciente" class="col-form-label">IMC</label>
                                        </div>
                                        <div class="col-2">
                                            <input type="text" class="form-control" id="imcMaterno" readonly>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div class="row">
                        <div class="col-9">
                            <h5 class="card-title text-primary text-left mt-2 mb-4">¿Consentimiento informado para eventual uso en investigación?</h5>
                        </div>
                        <div class="col-3">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-outline-info active" id="configConsentimientoNoController" data-value="0">
                                    <input type="radio" value="0" checked=""> NO
                                </label>
                                <label class="btn btn-outline-info" id="configConsentimientoSiController" data-value="1">
                                    <input type="radio" value="1"> SI
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container" id="imagenesDicom" style="display:none;">
    <div class="row">
        <div class="col pr-0">
            <img class="d-flex justify-content-center" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
        </div>
        <div class="col col-sm-10 pl-0 mt-sm-4">
            <h6 class="text-secondary mt-2">Imágenes ecográficas</h6>
            <h4 class="mb-0" id="paciente.nombre.imagenes">Juana Peres Peres, 12345678-9</h4>
            <h6 class="text-info" id="paciente.nombre.imagenes.basico.examen">FUM: 12-12-12, EG: 22,2 sem., FPP:12-12-12</h6>
        </div>
    </div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>examen/express">Inicio</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Imágenes Ecográficas</li>
                    <li class="ml-auto"><a href="#tipoExamen" class="text-center text-danger"><i class="fas fa-door-open"></i> Volver</a></li>
                </ol>
            </nav>
            <h4>Imágenes Disponibles</h4>
            <hr>
            <div class="row">
                <div class="col-6 col-md-7 col-xl-9">
                    <div id="fotosDicom" class="row"></div>
                </div>
                <div class="col-6 col-md-5 col-xl-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Enviar imágenes por correo</h5>
                            <div class="form-group">
                                <label for="tipo.examen.previo" class="col-form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" id="paciente.correo.copia">
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" id="paciente.correo.lista">Enviar con copia a:</label>
                            </div>
                            <div class="form-group">
                                <select id="paciente.correo.config" class="form-control">
                                </select>
                            </div>
                            <h5 class="card-title">Otras Opciones</h5>
                            <div class="btn-group-vertical">
                                <button class='btn btn-light text-left' id='imprimirFotos'>Ver Informe / Impresión</button>
                                <button class='btn btn-light text-left' id='emailFotos'>Enviar fotos por E-Mail</button>
                                <button class='btn btn-light text-left' id='eliminarFotos'>Eliminar fotos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div class="container" id="tipoExamen" style="display:none;">
    <div class="row">
        <div class="col pr-0">
            <img class="d-flex justify-content-center" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
        </div>
        <div class="col col-sm-10 pl-0 mt-sm-4">
            <h6 class="text-secondary mt-2">Información para el exámen</h6>
            <h4 class="mb-0" id="paciente.nombre.eco.elegir">Juana Peres Peres, 12345678-9</h4>
            <h6 class="text-info" id="paciente.nombre.eco.elegir.examen">FUM: 12-12-12, EG: 22,2 sem., FPP:12-12-12</h6>
        </div>
    </div>        
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>examen/express">Inicio</a></li>
            <li class="breadcrumb-item active" aria-current="page">Tipo de exámen</li>
        </ol>
    </nav>
    <div class="row">
        <div class="col-md-12">
            <div class="card mb-3">
                <div class="card-body">
                    <button class="btn btn-outline-danger float-right" id="boton.volver.step.five"><i class="fas fa-door-open"></i><br>Volver</button>
                    <h1 class="text-center" id="titulos.step.six.head">Elegir Exámen Ecográfico</h1>
                    <div class="row d-none" id="paciente.informacion.ecografica">
                        <div class="col">
                            <div class="form-group row">
                                <div class="col-1">
                                    <label for="input.paciente.fum.examen.extra" class="col-form-label">FUM</label>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" id="input.paciente.fum.extra" data-date-format="dd/mm/yyyy" onfocus="blur();">
                                </div>
                                <div class="col-1">
                                    <label for="input.paciente.eg.examen.extra" class="col-form-label">EG</label>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" id="input.paciente.eg.extra" readonly>
                                </div>
                                <div class="col-1">
                                    <label for="input.paciente.fpp.examen.extra" class="col-form-label">FPP</label>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" id="input.paciente.fpp.extra" readonly>
                                </div>
                                <div class="col">
                                    <label for="fee" class="col-form-label">Fecha de exámen</label>
                                </div>
                                <div class="col">
                                    <input class="form-control" type="text" id="input.paciente.fe.extra" data-date-format="dd/mm/yyyy" onfocus="blur();" name="fee">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h3 class="card-title text-primary">Evaluación de biometría y Doppler</h3>
                            <p class="text-secondary">Módulos cuyo objetivo es la valoración de la biometría fetal más flujometria Doppler materno fetal.</p>
                            <div class="card mb-3 mt-3" id="ecografia.uno">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Ecografía Obstétrica 1° Trimestre</h6><a href="#ecoObsPrimTrim" class="card-link float-right">Ir a exámen</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3" id="ecografia.dos">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Ecografía Obstétrica 2° - 3° Trimestre</h6><a href="#ecoObsSegTrim" class="card-link float-right">Ir a exámen</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3" id="ecografia.doppler">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Flujometría Doppler Materna y/o Fetal</h6><a href="#ecoDoppler" class="card-link float-right">Ir a exámen</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3" id="ecografia.imagenes">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Ver imágenes de exámenes</h6><a href="#imgDicom" class="card-link float-right">Ver Imágenes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <h3 class="card-title text-primary">Tamizaje y evaluación morfológica</h3>
                            <p class="text-secondary">Módulos cuyo desarrollo se realizará posteriormente en colaboración con otros especialistas.</p>
                            <div class="card mb-3 mt-3">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Ecografía para tamizaje 11 - 14</h6><span class="card-link float-right">en desarrollo</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3 mb-2">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Evaluación morfológica 22 - 24</h6><span class="card-link float-right">en desarrollo</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Eco cardiografía fetal</h6><span class="card-link float-right">en desarrollo</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-2">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Neurosonografía fetal</h6><span class="card-link float-right">en desarrollo</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-2" style="display:none;">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Datos neonatales</h6><a href="#dneonatales" class="card-link float-right">en desarrollo</a>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-2" style="display:none;">
                                <div class="card-body p-2">
                                    <div class="clearfix">
                                    <h6 class="card-title float-left">Otros protocolos</h6><a href="#ecocardio" class="card-link float-right">en desarrollo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container h-100" id="ecoObsPrimTrim" style="display:none;">
    <div class="row">
        <div class="col pr-0">
            <img class="d-flex justify-content-center" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
        </div>
        <div class="col col-sm-10 pl-0 mt-sm-4">
            <h6 class="text-secondary mt-2">Ecografía Obstétrica de 1° Trimestre</h6>
            <h4 class="mb-0" id="paciente.nombre.eco.prim">Juana Peres Peres, 12345678-9</h4>
            <h6 class="text-info" id="paciente.nombre.eco.prim.examen">FUM: 12-12-12, EG: 22,2 sem., FPP:12-12-12</h6>
        </div>
    </div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>examen/express">Inicio</a></li>
            <li class="breadcrumb-item"><a href="#tipoExamen">Elija tipo de exámen ecográfico</a></li>
            <li class="breadcrumb-item active" aria-current="page">Ecografía Obstétrica</li>
            <li class="ml-auto"><a href="#tipoExamen" class="text-danger"><i class="fas fa-door-open"></i> Volver</a></li>
        </ol>
    </nav>
    <div class="row">
        <div class="col-12 col-sm-3 order-sm-1">
            <div class="card">
                <div class="card-body">
                    <h6 class="text-center my-2">Acciones</h6>
                    <div class="btn-group-vertical d-flex justify-content-center" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary" id="boton.eco.prim.guardar">Guardar</button><button type="button" class="btn btn-secondary d-none" id="boton.eco.prim.cancelar">Cancelar</button><button type="button" class="btn btn-danger d-none" id="boton.eco.prim.eliminar">Eliminar</button>
                    </div>
                    <hr>
                    <h6 class="text-center my-2">Informes</h6>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-info" type="button" id="modalPreInfEcoPrimTrim">Reporte ecografía</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-9">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-6 col-sm-3">
                            <label for="fee" class="col-form-label">Fecha de exámen</label>
                        </div>
                        <div class="col-6 col-sm-3">
                            <input class="form-control" type="text" data-date-format="dd/mm/yyyy" id="input.paciente.fe.ecoprim" disabled>
                        </div>
                        <div class="col-6 col-sm-3">
                            <label for="fee" class="col-form-label">EG al exámen</label>
                        </div>
                        <div class="col-6 col-sm-3">
                            <input class="form-control" type="text" data-date-format="dd/mm/yyyy" onfocus="blur();" id="eco.prim.eg" readonly>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 col-lg-3 mb-2">
                            <label for="lcn">Medida del embrión</label>
                        </div>
                        <div class="col-md-12 col-lg-3 mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="lcn">
                                <div class="input-group-append"><div class="input-group-text">mm</div></div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-3 mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">E.G. x LCN</div>
                                </div>
                                <input type="text" class="form-control" id="lcnPct" readonly>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-info" id="graficoLcn"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12 col-lg-3 mb-2">
                            <label for="saco">Promedio Saco Gestacional</label>
                        </div>
                        <div class="col-md-12 col-lg-3 mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="saco">
                                <div class="input-group-append"><div class="input-group-text">mm</div></div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-3 mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">E.G. x Saco</div>
                                </div>
                                <input type="text" class="form-control" id="sacoPct" readonly>
                            </div>
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-info" id="graficoSaco"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row mt-3" id="resultadoAjusteEcoPrimTrim" style="display:none;">
                        <div class="col-12">
                            <div class="alert alert-info" role="alert">
                                <div class="row mt-3">
                                    <div class="col">
                                        <h6 class="text-center">Cálculos por FUM materna referida</h6>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput"><strong>FUM</strong> Referida</label>
                                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                                <div class="input-group-addon"><i class="fa fa-calendar-o" aria-hidden="true"></i></div>
                                                <input type="text" class="form-control" id="furReferida" readonly="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2"><strong>EG</strong> por FUM referida</label>
                                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                                <div class="input-group-addon"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                                                <input type="text" class="form-control" id="egReferida" readonly="">
                                                <div class="input-group-append"><div class="input-group-text">semanas</div></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2"><strong>FPP</strong> por FUM referida</label>
                                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                                <div class="input-group-addon"><i class="fa fa-calendar-o" aria-hidden="true"></i></div>
                                                <input type="text" class="form-control" id="fppReferida" readonly="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h6 class="text-center">Cálculos por ajuste ecográfico</h6>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput"><strong>FUM</strong> Ajustada</label>
                                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                                <div class="input-group-addon"><i class="fa fa-calendar-o" aria-hidden="true"></i></div>
                                                <input type="text" class="form-control" id="furAjustada" readonly="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2"><strong>EG</strong> ajustada</label>
                                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                                <div class="input-group-addon"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                                                <input type="text" class="form-control" id="egAjustada" readonly="">
                                                <div class="input-group-append"><div class="input-group-text">semanas</div></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2"><strong>FPP</strong> Ajustada</label>
                                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                                <div class="input-group-addon"><i class="fa fa-calendar-o" aria-hidden="true"></i></div>
                                                <input type="text" class="form-control" id="fppAjustada" readonly="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="alert alert-info" role="alert">
                                <p class="mb-0"><span id="diferenciaEcoPrimTrim">Diferencia observada entre edad gestacional por FUM referida y edad gestacional por exámen ecografico es de 0 días.</span> Rango de tolerancia para diferencia entre edad esperada por FUM y obtenida por exámen ecográfico, para las semanas 8 a 10 es de ± 3 días.</p>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row" id="preguntaAjusteEcoPrimTrim" style="display:none;">
                        <div class="col">
                            <p>¿Necesita realizar ajuste a la edad gestacional?</p>
                        </div>
                        <div class="col-3">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-outline-primary active"><input type="radio" name="ajustarEcoPrimTrim" value="0" checked=""> NO</label>
                                <label class="btn btn-outline-primary"><input type="radio" name="ajustarEcoPrimTrim" value="1"> SI</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <p>Evaluaciones adicionales (LCN 45mm - 84mm)</p>
                        </div>
                        <div class="col-3">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-outline-primary active"><input type="radio" name="ajustarEcoPrimTrim" value="0" checked=""> NO</label>
                                <label class="btn btn-outline-primary"><input type="radio" name="ajustarEcoPrimTrim" value="1"> SI</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row" id="examen.eco.primtrim.adicionales">
                        <div class="col-12">
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="formGroupExampleInput">Edad Materna</label>
                                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                            <div class="input-group-prepend"><div class="input-group-text"><i class="fa fa-calendar-o" aria-hidden="true"></i></div></div>
                                            <input type="text" class="form-control" id="furReferida" readonly="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group">
                                        <label for="formGroupExampleInput">Longitud cefalo caudal</label>
                                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                            <div class="input-group-append"><div class="input-group-text"><i class="fa fa-calendar-o" aria-hidden="true"></i></div></div>
                                            <input type="text" class="form-control" id="furReferida" readonly="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <label for="formGroupExampleInput">Translucidez Nucal</label>
                                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                            <div class="input-group-append"><div class="input-group-text"><i class="fa fa-calendar-o" aria-hidden="true"></i></div></div>
                                            <input type="text" class="form-control" id="furReferida" readonly="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <label for="formGroupExampleInput">¿Ha tenido algun hijo con trisomia 21?</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="trisomia" id="examen.eco.primtrim.adicionales.translucencia.trisomia.no" value="false" checked>
                                        <label class="form-check-label" for="examen.eco.primtrim.adicionales.translucencia.trisomia.no">
                                            No
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="trisomia" id="examen.eco.primtrim.adicionales.translucencia.trisomia.si" value="true">
                                        <label class="form-check-label" for="examen.eco.primtrim.adicionales.translucencia.trisomia.si">
                                            Si
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-body">
            <h5>Exámenes</h5>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">EG</th>
                        <th scope="col">Medida embrion</th>
                        <th scope="col">Prom. Saco</th>
                    </tr>
                </thead>
                <tbody id="table.ecografia.primtrim">
                </tbody>
            </table>
        </div>
    </div> 
</div>
<div class="container" id="ecoObsSegTrim" style="display:none;">
    <div class="row">
        <div class="col pr-0">
            <img class="d-flex justify-content-center" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
        </div>
        <div class="col col-sm-10 pl-0 mt-sm-4">
            <h6 class="text-secondary mt-2">Ecografía Obstétrica de 2° / 3° trimestre</h6>
            <h4 class="mb-0" id="paciente.nombre.eco.segundo">Juana Peres Peres, 12345678-9</h4>
            <h6 class="text-info" id="paciente.nombre.eco.segundo.examen">FUM: 12-12-12, EG: 22,2 sem., FPP:12-12-12</h6>
        </div>
    </div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>examen/express">Inicio</a></li>
            <li class="breadcrumb-item"><a href="#tipoExamen">Elija tipo de exámen ecográfico</a></li>
            <li class="breadcrumb-item active" aria-current="page">Ecografía Obstétrica 2do 3er trim</li>
            <li class="ml-auto"><a href="#tipoExamen" class="text-danger"><i class="fas fa-door-open"></i> Volver</a></li>
        </ol>
    </nav>
    <hr style="border-color:rgba(0, 0, 0, 0.36);">
    <div class="row">
        <div class="col-12 col-sm-3 order-sm-1">
            <div class="card">
                <div class="card-body">
                    <h6 class="text-center my-2">Acciones</h6>
                    <div class="btn-group-vertical d-flex justify-content-center" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary">Guardar</button><button type="button" class="btn btn-secondary d-none">Cancelar</button><button type="button" class="btn btn-danger d-none">Eliminar</button>
                    </div>
                    <hr>
                    <h6 class="text-center my-2">Informes</h6>
                    <div class="btn-group-vertical d-flex justify-content-center">
                        <button type="button" class="btn btn-info" id="modalPreInfEcoObsSegTrim1">Informe de crecimiento</button>
                        <button type="button" class="btn btn-info" id="infecoObsSegTrim1">Gráficas de crecimiento</button>
                        <button type="button" class="btn btn-info" id="modalPreInfEcoObsSegTrim2">Informe edad gestacional</button>
                        <button type="button" class="btn btn-info" id="infecoObsSegTrim2">Gráfica Edad Gestacional</button>
                        <button type="button" class="btn btn-info d-none" id="adicionalCrecimientoView">Adicional proporcionalidad</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-9">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-6 col-sm-3">
                            <label for="fee" class="col-form-label">Fecha de exámen</label>
                        </div>
                        <div class="col-6 col-sm-3">
                            <input class="form-control" type="text" data-date-format="dd/mm/yyyy" id="input.paciente.fe.ecoseg" disabled="">
                        </div>
                        <div class="col-6 col-sm-3">
                            <label for="fee" class="col-form-label">EG al exámen</label>
                        </div>
                        <div class="col-6 col-sm-3">
                            <input class="form-control" type="text"  onfocus="blur();" id="eco.seg.eg" readonly="">
                        </div>
                    </div>
                    <h5 class="card-title">BIOMETRÍA FETAL</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Hadlock FP. y col. Radiology 152: 497 - 501; 1984. *Hill LM. y col. Obstet Gynecol. 1990; 75(6) : 981-5</h6>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="dbp" class="col-form-label">DBP</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="dbp">
                                <div class="input-group-append">
						            <div class="input-group-text">mm</div>
				    	        </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="dbpDE">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="dbpPct">
                            <input type="hidden" id="dbpRango">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoDbp"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-3 mb-2">
                            <label for="dof" class="col-form-label">DOF</label>
                        </div>
                        <div class="col-3 mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="dof">
                                <div class="input-group-append">
                                    <div class="input-group-text">mm</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-3 mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="dofPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="dofPctRpt">
                            <input type="hidden" id="dofRango">
                        </div>
                        <div class="col-2 mb-2">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">IC</div>
                                </div>
                                <input type="text" class="form-control" id="ic" readonly="">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="cc" class="col-form-label">CC</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="cc">
                                <div class="input-group-append">
                                    <div class="input-group-text">mm</div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="ccPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="ccPctRpt">
                            <input type="hidden" id="ccRango">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoCc"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="ca" class="col-form-label">CA</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="ca">
                                <div class="input-group-append">
                                    <div class="input-group-text">mm</div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="caPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="caPctRpt">
                            <input type="hidden" id="caRango">
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-info" id="graficoCa"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="lf" class="col-form-label">LF</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="lf">
                                <div class="input-group-append">
                                    <div class="input-group-text">mm</div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="lfPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="lfPctRpt">
                            <input type="hidden" id="lfRango">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoLf"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="lh" class="col-form-label">LH</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="lh">
                                <div class="input-group-append">
                                    <div class="input-group-text">mm</div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="lhPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="lhPctRpt">
                            <input type="hidden" id="lhRango">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoLh"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="cerebelo" class="col-form-label">Diámetro cerebeloso transverso</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="cerebelo">
                                <div class="input-group-append">
                                    <div class="input-group-text">mm</div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="cerebeloPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="cerebeloPctRpt">
                            <input type="hidden" id="cerebeloRango">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoCerebelo"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">CRECIMIENTO INTRAUTERINO  <span class="float-right text-muted" id="cccaController"><small>Opcional CC/CA</small></span></h5>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="pfe" class="col-form-label"><strong>Peso Fetal Estimado</strong> (> 15 sem)
                            <br><small class="text-muted">Hadlock FP. y col. Radiology 181: 129 - 133; 1991</small>
                            </label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="pfe" readonly>
	                            <div class="input-group-append">
		                            <div class="input-group-text">kgr</div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="pfePct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="pfePctRpt">
                            <input type="hidden" id="pfeRango">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoPFE"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row d-none" id="cccaView">
                        <div class="col mb-2">
                            <label for="ccca" class="col-form-label">Relación Cráneo Abdómen<br><small class="text-muted">Hadlock FP. y col. Radiology 181: 129 - 133; 1991</small></label>
                        </div>
                        <div class="col mb-2">
                            <input type="text" class="form-control" id="ccca" readonly>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="cccaPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="cccaPct">
                            <input type="hidden" id="cccaRango">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoCCCA"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="bvm" class="col-form-label"><strong class="text-primary">BVM</strong></label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="bvm">
                                <div class="input-group-append">
				                    <div class="input-group-text">mm</div>
				                </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="bvmPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="bvmPct">
                            <input type="hidden" id="bvmRango">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoBVM"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row d-none">
                        <div class="col mb-2">
                            <label for="tallaFetal" class="col-form-label">Talla Fetal Estimada (> 23 sem)
                            <br><small class="text-muted">Referencias neonatales SOCHIPE*</small>
                            </label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="number" class="form-control" id="tallaFetal" readonly>
                                <div class="input-group-append">
					                <div class="input-group-text">cm</div>
				                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="tallaPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="tallaPctRpt">
                            <input type="hidden" id="tallaRango">
                        </div>
                        <div class="col">
                            <button type="button" class="btn btn-outline-info" id="graficoTalla"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                </div>
                <p class="text-muted d-none" style="float:left">* SOCHIPE: Sociedad Chilena de Pedratría.</p>
                <p class="text-muted d-none" style="float:right">Artículo de referencia: Rev. Chil. Pediat 2010; 81 (3): 264-274</p>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">OPCIONAL DETERMINACIÓN DE EDAD GESTACIONAL</h5>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="egP50" class="col-form-label">Calculo de Edad Gestacional según BP50</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control bg-secondary text-white text-center" id="egP50" readonly>
                                <div class="input-group-append">
       			                    <div class="input-group-text">semanas</div>
	           	                </div>
                            </div>
                        </div>
                        <div class="col"></div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <ul>
                                <li>La variabilidad en el crecimiento fetal, es directamente proporcional a la edad gestacional, variando el rango desde ± 7 días sobre las 12 semanas hasta ± 21 días en el 3er trimestre.</li>
                                <li>Dado que el rango de variabilidad entre las 9 a 11 semanas es mínimo (+ - 3 días), es el periodo ideal para determinación ecográfica de la Edad gestacional.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row" id="preguntaAjusteEcoSegTrim" style="">
                        <div class="col">
                            <h5 class="alert-heading">¿Desea ajustar la edad gestacional referida?</h5>
                        </div>
                        <div class="col">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                <label class="btn btn-outline-info p-3 active">
                                    <input type="radio" name="ajustarEcoSegTrim" value="0" checked=""> NO
                                </label>
                                <label class="btn btn-outline-info p-3">
                                    <input type="radio" name="ajustarEcoSegTrim" value="1"> SI
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <ul>
                                <li>Para mayor precisión  el software excluye perímetro abdominal, es recomendable adicionar el largo humeral y diámetro de cerebelo.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" id="adicionalCrecimiento" style="display:none;">
                <div class="card-body">
                    <h5 class="card-title">Adicional proporcionalidad fetal</h5>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="dof-dbp" class="col-form-label">Indice Cefalico (IC)</label>
                        </div>
                        <div class="col mb-2">
                            <input type="text" class="form-control" id="dof-dbp" readonly>
                        </div>
                        <div class="col mb-2">
                            <p> IC &lt; 74% = Dolicocefalia<br>IC &gt; 83 % = Braquicefalia</p>
                        </div>
                        <div class="col mb-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card mb-3">
                <div class="card-body">
                    <h5>Exámenes</h5>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">EG</th>
                                <th scope="col">Medida embrion</th>
                                <th scope="col">Prom. Saco</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container" id="ecoDoppler" style="display:none;">
    <div class="row">
        <div class="col pr-0">
            <img class="d-flex justify-content-center" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
        </div>
        <div class="col col-sm-10 pl-0 mt-sm-4">
            <h6 class="text-secondary mt-2">Ecografía Doppler Materno fetal</h6>
            <h4 class="mb-0" id="paciente.nombre.eco.doppler">Juana Peres Peres, 12345678-9</h4>
            <h6 class="text-info" id="paciente.nombre.eco.doppler.examen">FUM: 12-12-12, EG: 22,2 sem., FPP:12-12-12</h6>
        </div>
    </div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>examen/express">Inicio</a></li>
            <li class="breadcrumb-item"><a href="#tipoExamen">Elija tipo de exámen ecográfico</a></li>
            <li class="breadcrumb-item active" aria-current="page">Ecografía Dopple</li>
            <li class="ml-auto"><a href="#tipoExamen" class="text-danger"><i class="fas fa-door-open"></i> Volver</a></li>
        </ol>
    </nav>
    <hr style="border-color:rgba(0, 0, 0, 0.36);">
    <div class="row">
        <div class="col-12 col-sm-3 order-sm-1">
            <div class="card">
                <div class="card-body">
                    <h6 class="text-center my-2">Acciones</h6>
                    <div class="btn-group-vertical d-flex justify-content-center" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary">Guardar</button><button type="button" class="btn btn-secondary d-none">Cancelar</button><button type="button" class="btn btn-danger d-none">Eliminar</button>
                    </div>
                    <hr>
                    <h6 class="text-center my-2">Informes</h6>
                    <div class="btn-group-vertical d-flex justify-content-center">
                        <button type="button" class="btn btn-info" id="modalPreInfEcoDoppler">Informe Doppler</button>
                        <button type="button" class="btn btn--info" id="infDoppler1">Resumen de Gráficas</button>
                        <!-- <button type="button" class="btn btn-secondary d-none" id="infDoppler2">PFE + Doppler Fetal</button>
                            <button type="button" class="btn btn-secondary d-none" id="infDoppler3">PFE + Doppler Materno / Fetal</button> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-9">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-6 col-sm-3">
                            <label for="fee" class="col-form-label">Fecha de exámen</label>
                        </div>
                        <div class="col-6 col-sm-3">
                            <input class="form-control" type="text" data-date-format="dd/mm/yyyy" id="input.paciente.fe.doppler" disabled="">
                        </div>
                        <div class="col-6 col-sm-3">
                            <label for="fee" class="col-form-label">EG al exámen</label>
                        </div>
                        <div class="col-6 col-sm-3">
                            <input class="form-control" type="text"  onfocus="blur();" id="eco.doppler.eg" readonly="">
                        </div>
                    </div>
                    <h4 class="card-title">FLUJOMETRÍA DOPPLER MATERNO <small>(a partir de las 11 semanas)</small></h4>
                    <h6 class="card-subtitle mb-2 text-muted">Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32</h6>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="aud" class="col-form-label">Arteria Uterina Derecha</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="aud">
					            <div class="input-group-append">
						            <div class="input-group-text">IP</div>
				    	        </div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="audPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="audPctTxt">
                            <input type="hidden" id="audRngo">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoAud"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="aui" class="col-form-label">Arteria Uterina Izquierda</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="aui">
					            <div class="input-group-append"><div class="input-group-text">IP</div></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="auiPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="auiPctTxt">
                            <input type="hidden" id="auiRngo">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoAui"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="auprom" class="col-form-label"><strong>Promedio de Aterias Uterinas</strong></label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="auprom" readonly>
					            <div class="input-group-append"><div class="input-group-text">IP</div></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="auPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="auPctTxt">
                            <input type="hidden" id="auRngo">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoAu"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">FLUJOMETRÍA DOPPLER FETAL <small>(a partir de las 20 semanas)</small></h4>
                    <h6 class="card-subtitle mb-2 text-muted">Baschat AA, Gembruch U. the cerebroplacental Doppler ratio revisited. Ultrasound Obstet. Ginecol. 2003; 21: 124 - 127</h6>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="ipau" class="col-form-label">IP Arteria Umbilical</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="ipau">
					            <div class="input-group-append"><div class="input-group-text">IP</div></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="ipauPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="ipauPctTxt">
                            <input type="hidden" id="ipauRngo">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoIpau"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="ipacm" class="col-form-label">IP Arteria C. Media</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="ipacm">
					            <div class="input-group-append"><div class="input-group-text">IP</div></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="ipacmPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="ipacmPctTxt">
                            <input type="hidden" id="ipacmRngo">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoIpacm"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="ccp" class="col-form-label">Cuociente Cerebro Placentario</label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="ccp" readonly>
					            <div class="input-group-append"><div class="input-group-text">IP</div></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="ccpPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="ccpPctTxt">
                            <input type="hidden" id="ccpRngo">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoCcp"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">Flujometrías adicionales <small>(a partir de las 20 semanas)</small></h4>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="dv" class="col-form-label"><strong>Ductus Venoso</strong> (prematuro)
                            <br><small class="text-muted">Kessler J. y col.: U. Obstet. &amp; Gynecol. 28p 890-b 2006</small>
                            </label>
                        </div>
                        <div class="col mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="dv">
					            <div class="input-group-append"><div class="input-group-text">IP</div></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <div class="progress mt-2 mb-2 mr-sm-2 mb-sm-0" id="dvPct">
                                <div class="progress-bar bg-light text-primary pivote-cero" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-uno" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-dos" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-centro" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                                <div class="progress-bar bg-light text-primary pivote-tres" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cuatro" role="progressbar" style="width: 17%" aria-valuemin="0" aria-valuemax="100"></div>
                                <div class="progress-bar bg-light text-primary pivote-cien" role="progressbar" style="width: 10%" aria-valuemin="0" aria-valuemax="100">|</div>
                            </div>
                            <input type="hidden" id="dvPctTxt">
                            <input type="hidden" id="dvRngo">
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficoDv"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col mb-2">
                            <label for="ccp" class="col-form-label"><strong>Pick sistólico máximo de ACM</strong> (Anemia fetal)
                            <br><small class="text-muted">De Mari G, Deter RL, Carpenter RL y cols. N Engl J Med 342:9, 2000.</small>
                            </label>
                        </div>
                        <div class="col-6 mb-2">
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                                <input type="text" class="form-control" id="psmACM">
				                <div class="input-group-append"><div class="input-group-text">MCA-PSB (cm/s)</div></div>
                            </div>
                        </div>
                        <div class="col mb-2">
                            <button type="button" class="btn btn-outline-info" id="graficopsmACM"><i class="fas fa-chart-bar"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card mb-3">
                <div class="card-body">
                    <h5>Exámenes</h5>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">EG</th>
                                <th scope="col">Medida embrion</th>
                                <th scope="col">Prom. Saco</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal" id="popupGenerico">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header" id="popupHeader">
                        <h5 class="modal-title text-center" id="popupTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" id="popupBody">
                    </div>
                    <div class="modal-footer" id="popupFooter">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" id="popupGraficos">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header" id="graficosHeader">
                        <h5 class="modal-title text-center" id="graficosTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" id="graficosBody">
                    </div>
                    <div class="modal-footer" id="graficosFooter">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
<link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/datepicker.css">
<script src="https://code.highcharts.com/highcharts.js"></script>
<script>
    var serverURL = "<?php echo Config::get('URL'); ?>";
</script>
<script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
<script src="<?php echo Config::get('URL'); ?>js/express_extras.js"></script>
<script src="<?php echo Config::get('URL'); ?>js/express.js"></script>
