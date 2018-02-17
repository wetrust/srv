      <style>
         .a-disabled{
            pointer-events: none;
         }
      </style>
      <div class="row m-0 h-100">
         <div class="col-12 col-md-3 bg-faded h-100 pt-3" style="box-shadow: inset -3px 0px 5px -2px rgba(0,0,0,0.75);">
            <div class="card">
               <div class="card-block">
                  <h4 class="card-title">Opciones de configuración</h4>
                  <ul class="nav flex-column">
                     <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#pais" data-id="1" name="centroRegional">País</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#dp" data-id="1" name="centroRegional">Región de salud</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#dp" data-id="2" name="ciudad">Hospital o Centro Clínico (Ciudad)</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#dp" data-id="3" name="unidadUltrasonografica">Unidad Ultrasonográfica</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#membrete" data-id="3">Membrete</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#dp" data-id="4" name="profesionalEcografista">Profesional Ecografista</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#dp" data-id="9" name="profesionalReferente">Profesional Referente</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#dp" data-id="5" name="lugarControlPrenatal">Lugar Control prenatal</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#dp" data-id="6" name="patologiaObstetrica">Patología Obstétrica Relevante</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#dp" data-id="7" name="motivoExamen">Motivo exámen ecográfico</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#dp" data-id="8" name="prevision">Prevision</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#usuario">Usuario registrado</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="#uu">Unidad Ultrasonográfica</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-9">
            <div class="tab-content">
            <div class="tab-pane active" id="pais" role="tabpanel">
                  <h2 class="my-4">Configurar datos predeterminados</h2>
                  <div class="card">
                     <div class="card-block">
                        <ul class="nav justify-content-end mb-2">
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary mr-1" id="nuevoPais"><i class="fa fa-plus" aria-hidden="true"></i> Nueva País</button>
                           </li>
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary d-none mr-1" id="editarPais"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar País</button>
                           </li>
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary d-none mr-1" id="guardarPais"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                           </li>
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary d-none mr-1" id="cancelarPais"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                           </li>
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary d-none" id="eliminarPais"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                           </li>
                        </ul>
                        <table class="table table-hover table-bordered">
                           <thead>
                              <tr id="tableHead">
                                 <th>#</th>
                                 <th>País</th>
                              </tr>
                           </thead>
                           <tbody id="tableBody">
                           </tbody>
                        </table>
                        <div class="card formulario d-none">
                           <div class="card-block">
                              <div class="form-group">
                                 <h5 id="titleInput">Nuevo País</h5>
                              </div>
                              <div class="form-group">
                                 <input type="text" class="form-control" id="inputPais">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane" id="dp" role="tabpanel">
                  <h2 class="my-4">Configurar datos predeterminados</h2>
                  <div class="card">
                     <div class="card-block">
                        <ul class="nav justify-content-end mb-2">
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary mr-1" id="nuevoConfig"><i class="fa fa-plus" aria-hidden="true"></i> Nueva región de salud</button>
                           </li>
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary d-none mr-1" id="editarConfig"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar región de salud</button>
                           </li>
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary d-none mr-1" id="guardarConfig"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                           </li>
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary d-none mr-1" id="cancelarConfig"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                           </li>
                           <li class="nav-item">
                              <button type="button" class="btn btn-outline-primary d-none" id="eliminarConfig"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                           </li>
                        </ul>
                        <table class="table table-hover table-bordered">
                           <thead>
                              <tr id="tableHead">
                                 <th>#</th>
                                 <th>Centro Regional</th>
                              </tr>
                           </thead>
                           <tbody id="tableBody">
                           </tbody>
                        </table>
                        <div class="card formulario d-none">
                           <div class="card-block">
                              <div class="form-group">
                                 <h5 id="titleInput">Nuevo Centro Regional</h5>
                              </div>
                              <div class="form-group">
                                 <input type="text" class="form-control" id="inputConfig">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane" id="membrete" role="tabpanel">
                  <h2 class="my-4">Membrete para informe</h2>
                  <div class="card">
                     <div class="card-block">
                        <div class="form-group">
                           <h5 id="titleInput">Escriba un membrete personalizado</h5>
                        </div>
                        <div class="form-group">
                           <textarea class="form-control" rows="3" onkeydown="return limitLines(this, event)" id="inputMembrete"></textarea>
                           <button class="btn btn-danger" id="saveMebrete"><small><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar Membrete</small></button>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="tab-pane" id="usuario" role="tabpanel">
                  <h2 class="my-4">Datos de usuario registrado</h2>
                  <div class="card">
                     <div class="card-block">
                        <div class="row mt-2 mb-2">
                           <div class="col-2">
                              <label for="nombre-paciente" class="col-form-label">Nombre profesional</label>
                           </div>
                           <div class="col-4">
                              <input class="form-control gris-claro" type="text" id="nombre-paciente" value="Medico de prueba" disabled="">
                           </div>
                           <div class="col-2">
                              <label for="id-paciente" class="col-form-label">Número de Registro</label>
                           </div>
                           <div class="col-4">
                              <input type="text" class="form-control gris-claro" id="id-paciente" disabled="">
                           </div>
                        </div>
                        <p><strong>Usted se encuentra creditado en los siguientes módulos</strong></p>
                        <table class="table table-bordered">
                           <thead>
                              <tr>
                                 <th>Nombre del módulo</th>
                                 <th>Activado</th>
                                 <th>Fecha de acreditación</th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <td>Ecografía Básica Primer Trimestre</td>
                                 <td>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option1"> No
                                       </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option2"> Si
                                       </label>
                                    </div>
                                 </td>
                                 <td>
                                    <input type="text" class="form-control gris-claro" id="id-paciente" disabled="" value="12/12/2017">
                                 </td>
                              </tr>
                              <tr>
                                 <td>Ecografía Básica Segundo - Tercer Trimestre</td>
                                 <td>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option1"> No
                                       </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option2"> Si
                                       </label>
                                    </div>
                                 </td>
                                 <td>
                                    <input type="text" class="form-control gris-claro" id="id-paciente" disabled="" value="12/12/2017">
                                 </td>
                              </tr>
                              <tr>
                                 <td>Flujometría Doppler Materno Fetal Básico</td>
                                 <td>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option1"> No
                                       </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option2"> Si
                                       </label>
                                    </div>
                                 </td>
                                 <td>
                                    <input type="text" class="form-control gris-claro" id="id-paciente" disabled="" value="12/12/2017">
                                 </td>
                              </tr>
                              <tr>
                                 <td>Ecografía para tamizaje 11 - 14</td>
                                 <td>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option1"> No
                                       </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option2"> Si
                                       </label>
                                    </div>
                                 </td>
                                 <td>
                                    <input type="text" class="form-control gris-claro" id="id-paciente" disabled="" value="12/12/2017">
                                 </td>
                              </tr>
                              <tr>
                                 <td>Evaluación morfológica 22 - 24</td>
                                 <td>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option1"> No
                                       </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option2"> Si
                                       </label>
                                    </div>
                                 </td>
                                 <td>
                                    <input type="text" class="form-control gris-claro" id="id-paciente" disabled="" value="12/12/2017">
                                 </td>
                              </tr>
                              <tr>
                                 <td>Eco cardiografía fetal</td>
                                 <td>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option1"> No
                                       </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                       <label class="form-check-label">
                                          <input class="form-check-input" type="radio" name="ecoPrimTrim" value="option2"> Si
                                       </label>
                                    </div>
                                 </td>
                                 <td>
                                    <input type="text" class="form-control gris-claro" id="id-paciente" disabled="" value="12/12/2017">
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
               <div class="tab-pane" id="uu" role="tabpanel">c</div>
            </div>
         </div>
      </div>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
      <script>
            $(document).ready(function(){
                  $("body").addClass("h-100");
                  $("html").addClass("h-100");
                  $("#InicioLink").attr("href", "http://servidor.crecimientofetal.cl/examen/express");
                  $("#InicioLink").html("Volver");
            });
      </script>
      <script src="<?php echo Config::get('URL'); ?>js/static/configuracion.js"></script>