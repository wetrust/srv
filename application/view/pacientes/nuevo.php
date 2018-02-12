<div class="container" id="consulta">
   <div class="bienvenida mb-3 p-2">
      <div class="media">
         <img class="d-flex ml-3" src="<?php echo Config::get('URL'); ?>img/ic_launcher-web.png" alt="logo" style="max-width: 128px;">
         <div class="media-body mt-4">
            <h4 class="mt-0 mb-1"><em>CrecimientoFetal.cl</em></h4>
            <p><em>Ultrasonografía obstétrica básica para profesionales</em></p>
         </div>
         <div class="media-body mt-4">
            <p class="float-right" name="fechaHora" style="color: #f0df90;"></p>
         </div>
      </div>
   </div>
   <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
         <li class="breadcrumb-item"><a href="<?php echo Config::get('URL'); ?>">Inicio</a></li>
         <li class="breadcrumb-item active"><a href="<?php echo Config::get('URL'); ?>examen/seleccionar">Nuevo Exámen</a></li>
	 <li class="breadcrumb-item active" aria-current="page">Nuevo Paciente</li>
         <li class="ml-auto"><a href="<?php echo Config::get('URL'); ?>examen/seleccionar">Volver</a></li>
      </ol>
   </nav>
<div class="row">
<div class="col">
<h3 class="mb-4">1.- Primer paso | Nuevo Paciente</h3>
</div>
</div>
<form>
<div class="form-group">
                                <div class="row mt-2 mb-2">
                                    <div class="col-2">
                                        <label for="nombre-paciente" class="col-form-label">Nombre paciente</label>
                                    </div>
                                    <div class="col-4">
                                        <input class="form-control gris-claro" type="text" id="nombre-paciente" value="Paciente de Prueba">
                                    </div>
                                    <div class="col-2">
                                        <label for="id-paciente" class="col-form-label">Número de Registro</label>
                                    </div>
                                    <div class="col-4">
                                        <input type="text" class="form-control gris-claro" id="id-paciente"">
                                    </div>
                                </div>
                                <div class="row mt-2 mb-2">
                                    <div class="col-2">
                                        <label class="col-form-label">Edad materna</label>
                                    </div>
                                    <div class="col-4">
                                        <select name="edad_materna" class="form-control gris-claro">
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
                                        <label for="procedencia" class="col-form-label">Procedencia (Ciudad)</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="procedencia" class="form-control">
                                         </select>
                                    </div>
                                </div>
                                <div class="row mt-2 mb-2">
                                    <div class="col-2">
                                        <label for="motivo-examen" class="col-form-label">Lugar de control prenatal</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="Lugar-examen" class="form-control">
                                         </select>
                                    </div>
                                    <div class="col-2">
                                        <label for="motivo-examen" class="col-form-label">Motivo del exámen</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="motivo-examen" class="form-control gris-claro">
                                         </select>
                                    </div>
                                </div>
                                <div class="row mt-2 mb-2">
                                    <div class="col-2">
                                        <label for="patologiaObstetricaUno" class="col-form-label">Patología Obstétrica Relevante</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="patologiaObstetricaUno" class="form-control gris-claro">
                                         </select>
                                    </div>
                                    <div class="col-2">
                                        <label for="ecografista" class="col-form-label">Profesional referente</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="profReferente" class="form-control gris-claro"">
                                         </select>
                                    </div>
                                </div>
                                <div class="row mt-2 mb-2">
                                    <div class="col-2">
                                        <label for="ecografista" class="col-form-label">Profesional examinador</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="ecografista" class="form-control gris-claro">
                                         </select>
                                    </div>
                                    <div class="col-2">
                                        <label for="prevision" class="col-form-label">Previsión</label>
                                    </div>
                                    <div class="col-4">
                                        <select id="prevision" class="form-control gris-claro">
                                         </select>
                                    </div>
                                </div>
                                <div class="row mt-2 mb-2">
                                    <div class="col-2 mt-3">
                                        <label for="ecografista" class="col-form-label">Embarazo Gemelar</label>
                                    </div>
                                    <div class="col-4 mt-3">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-outline-info active" id="embarazoNo" data-value="0">
                                            <input type="radio" value="0" checked=""> NO
                                            </label>
                                            <label class="btn btn-outline-info" id="embarazoSi" data-value="1">
                                            <input type="radio" value="1"> SI
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-2"></div>
                                     <div class="col-4">
                                    </div>
                                </div>
                                <div class="row my-3">
                                    <div class="col-9">
                                        <h5 class="card-title text-primary text-left mt-2 mb-4">Adicional datos clínicos relevantes</h5>
                                    </div>
                                    <div class="col-3">
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-outline-info p-3" id="infadicionalClinicoNoController" data-value="0" aria-pressed="true">
                                            <input type="radio" value="0" checked=""> NO</label>
                                            <label class="btn btn-outline-info p-3 active" id="infadicionalClinicoSiController" data-value="1" aria-pressed="true">
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
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn btn-outline-consulta active" id="prematuroNo" data-value="0">
                                                <input type="radio" value="0" checked=""> NO
                                                </label>
                                                <label class="btn btn-outline-consulta" id="prematuroSi" data-value="1">
                                                <input type="radio" value="1"> SI
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <label class="col-form-label">Feto PEG o RCIU</label>
                                        </div>
                                        <div class="col-2">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn btn-outline-consulta active" id="fetoPEGNo" data-value="0">
                                                <input type="radio" value="0" checked=""> NO
                                                </label>
                                                <label class="btn btn-outline-consulta" id="fetoPEGSi" data-value="1">
                                                <input type="radio" value="1"> SI
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <label class="col-form-label">Feto SHE</label>
                                        </div>
                                        <div class="col-2">
                                            <div class="btn-group" data-toggle="buttons">
                                                <label class="btn btn-outline-consulta active" id="fetoSHENo" data-value="0">
                                                <input type="radio" value="0" checked=""> NO
                                                </label>
                                                <label class="btn btn-outline-consulta" id="fetoSHESi" data-value="1">
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
                                                <option value="65" selected="">65 kg.</option>
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
                                                <option value="165" selected="">165 cms.</option>
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
                                            <input type="text" class="form-control" id="imcMaterno" readonly="">
                                        </div>
                                    </div>
                                </div>
                            </div>


<div class="col text-center">
<button class="btn btn-primary" type="submit"><i class="fa fa-floppy-o fa-2" aria-hidden="true"></i> GUARDAR PACIENTE</button>
</div>
<form>
</div>