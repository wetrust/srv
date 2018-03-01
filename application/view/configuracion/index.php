      <style>
         .a-disabled{
            pointer-events: none;
         }
      </style>
      <div class="row m-0 h-100">
         <div class="col-12 col-md-3 bg-faded h-100 pt-3" style="box-shadow: inset -3px 0px 5px -2px rgba(0,0,0,0.75);">
            <div class="card">
               <div class="card-body">
                  <h4 class="card-title">Opciones de configuración</h4>
                  <ul class="nav flex-column">
                     <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#pais">País</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#region">Región de salud</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#hospital">Hospital o Centro Clínico (Ciudad)</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#uu">Unidad Ultrasonográfica</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#pe">Profesional Ecografista</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#pf">Profesional Referente</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#lc">Lugar Control prenatal</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#por">Patología Obstétrica Relevante</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#mee">Motivo exámen ecográfico</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#prevision">Prevision</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#membrete">Membrete</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#usuario">Usuario registrado</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-9">
            <div class="tab-content">
                  <div class="tab-pane active" id="pais" role="tabpanel">
                        <h2 class="my-4">Configurar País</h2>
                        <div class="card">
                              <div class="card-body">
                                    <ul class="nav mb-2">
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
                                    <table class="table table-hover table-bordered" id="table.pais">
                                          <thead class="bg-info">
                                                <tr>
                                                      <th>N°</th>
                                                      <th>Nombre</th>
                                                </tr>
                                          </thead>
                                          <tbody id="table.body.pais">
                                          </tbody>
                                    </table>
                                    <div class="card d-none" id="form.pais">
                                          <div class="card-body">
                                                <div class="form-group">
                                                      <h5 id="titleInput">Nuevo País</h5>
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="input.pais">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="tab-pane" id="region" role="tabpanel">
                        <h2 class="my-4">Configurar Región de salud</h2>
                        <div class="card">
                              <div class="card-body">
                                    <ul class="nav mb-2">
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary mr-1" id="nuevaRegion"><i class="fa fa-plus" aria-hidden="true"></i> Nueva región</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="editarRegion"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar región</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="guardarRegion"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="cancelarRegion"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none" id="eliminarRegion"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                                          </li>
                                    </ul>
                                    <table class="table table-hover table-bordered" id="table.region">
                                          <thead class="bg-info">
                                                <tr id="tableHead">
                                                      <th>N°</th>
                                                      <th>Nombre</th>
                                                </tr>
                                          </thead>
                                          <tbody id="table.body.region">
                                          </tbody>
                                    </table>
                                    <div class="card formulario d-none" id="form.region">
                                          <div class="card-body">
                                                <div class="form-group">
                                                      <h5 id="titleInput">Nombre de región</h5>
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="input.region">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="tab-pane" id="hospital" role="tabpanel">
                        <h2 class="my-4">Configurar Hospital</h2>
                        <div class="card">
                              <div class="card-body">
                                    <ul class="nav mb-2">
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary mr-1" id="nuevoHospital"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo Hospital</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="editarHospital"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar Hospital</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="guardarHospital"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="cancelarHospital"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none" id="eliminarHospital"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                                          </li>
                                    </ul>
                                    <table class="table table-hover table-bordered" id="table.hospital">
                                          <thead class="bg-info">
                                                <tr id="tableHead">
                                                      <th>N°</th>
                                                      <th>Nombre</th>
                                                </tr>
                                          </thead>
                                          <tbody id="table.body.hospital">
                                          </tbody>
                                    </table>
                                    <div class="card formulario d-none" id="form.hospital">
                                          <div class="card-body">
                                                <div class="form-group">
                                                      <h5 id="titleInput">Nombre del Hospital</h5>
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="input.hospital">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="tab-pane" id="uu" role="tabpanel">
                        <h2 class="my-4">Configurar Unidad Ultrasonográfica</h2>
                        <div class="card">
                              <div class="card-body">
                                    <ul class="nav mb-2">
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary mr-1" id="nuevoUu"><i class="fa fa-plus" aria-hidden="true"></i> Nueva Unidad</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="editarUu"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar Unidad</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="guardarUu"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="cancelarUu"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none" id="eliminarUu"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                                          </li>
                                    </ul>
                                    <table class="table table-hover table-bordered" id="table.uu">
                                          <thead class="bg-info">
                                                <tr id="tableHead">
                                                      <th>N°</th>
                                                      <th>Nombre</th>
                                                </tr>
                                          </thead>
                                          <tbody id="table.body.uu">
                                          </tbody>
                                    </table>
                                    <div class="card formulario d-none" id="form.uu">
                                          <div class="card-body">
                                                <div class="form-group">
                                                      <h5 id="titleInput">Nombre de Unidad</h5>
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="input.uu">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="tab-pane" id="membrete" role="tabpanel">
                        <h2 class="my-4">Membrete para informe</h2>
                        <div class="card">
                              <div class="card-body">
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
                  <div class="tab-pane" id="pe" role="tabpanel">
                        <h2 class="my-4">Configurar Profesional Ecografista</h2>
                        <div class="card">
                              <div class="card-body">
                                    <ul class="nav mb-2">
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary mr-1" id="nuevoProfesional"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo Profesional</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="editarProfesional"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar Profesional</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="guardarProfesional"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="cancelarProfesional"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none" id="eliminarProfesional"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                                          </li>
                                    </ul>
                                    <table class="table table-hover table-bordered" id="table.profesional">
                                          <thead class="bg-info">
                                                <tr id="tableHead">
                                                      <th>N°</th>
                                                      <th>Nombre</th>
                                                </tr>
                                          </thead>
                                          <tbody id="table.body.profesional">
                                          </tbody>
                                    </table>
                                    <div class="card formulario d-none" id="form.profesional">
                                          <div class="card-body">
                                                <div class="form-group">
                                                      <h5 id="titleInput">Nombre del profesional</h5>
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="input.profesional">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="tab-pane" id="pf" role="tabpanel">
                        <h2 class="my-4">Configurar Profesional Referente</h2>
                        <div class="card">
                              <div class="card-body">
                                    <ul class="nav mb-2">
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary mr-1" id="nuevoProfesionalReferente"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo Profesional</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="editarProfesionalReferente"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar Profesional</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="guardarProfesionalReferente"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="cancelarProfesionalReferente"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none" id="eliminarProfesionalReferente"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                                          </li>
                                    </ul>
                                    <table class="table table-hover table-bordered" id="table.profesional.referente">
                                          <thead class="bg-info">
                                                <tr id="tableHead">
                                                      <th>N°</th>
                                                      <th>Nombre</th>
                                                </tr>
                                          </thead>
                                          <tbody id="table.body.profesional.referente">
                                          </tbody>
                                    </table>
                                    <div class="card formulario d-none" id="form.profesional.referente">
                                          <div class="card-body">
                                                <div class="form-group">
                                                      <h5 id="titleInput">Nombre del profesional</h5>
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="input.profesional.referente">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="tab-pane" id="lc" role="tabpanel">
                        <h2 class="my-4">Configurar Lugar Control prenatal</h2>
                        <div class="card">
                              <div class="card-body">
                                    <ul class="nav mb-2">
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary mr-1" id="nuevoLugarControl"><i class="fa fa-plus" aria-hidden="true"></i> Nuevo Lugar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="editarLugarControl"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar Lugar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="guardarLugarControl"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="cancelarLugarControl"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none" id="eliminarLugarControl"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                                          </li>
                                    </ul>
                                    <table class="table table-hover table-bordered" id="table.lugar">
                                          <thead class="bg-info">
                                                <tr id="tableHead">
                                                      <th>N°</th>
                                                      <th>Nombre</th>
                                                </tr>
                                          </thead>
                                          <tbody id="table.body.lugar">
                                          </tbody>
                                    </table>
                                    <div class="card formulario d-none" id="form.lugar">
                                          <div class="card-body">
                                                <div class="form-group">
                                                      <h5 id="titleInput">Nombre del Lugar de control Prenatal</h5>
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="input.lugar">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="tab-pane" id="por" role="tabpanel">
                        <h2 class="my-4">Configurar Patología Obstétrica Relevante</h2>
                        <div class="card">
                              <div class="card-body">
                                    <ul class="nav mb-2">
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary mr-1" id="nuevaPatologia"><i class="fa fa-plus" aria-hidden="true"></i> Nueva País</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="editarPatologia"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar País</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="guardarPatologia"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1" id="cancelarPatologia"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none" id="eliminarPatologia"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                                          </li>
                                    </ul>
                                    <table class="table table-hover table-bordered" id="table.patologia">
                                          <thead class="bg-info">
                                                <tr id="tableHead">
                                                      <th>N°</th>
                                                      <th>Nombre</th>
                                                </tr>
                                          </thead>
                                          <tbody id="table.body.patologia">
                                          </tbody>
                                    </table>
                                    <div class="card formulario d-none" id="form.patologia">
                                          <div class="card-body">
                                                <div class="form-group">
                                                      <h5 id="titleInput">Nuevo País</h5>
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="input.patologia">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div class="tab-pane" id="mee" role="tabpanel">
                        <h2 class="my-4">Configurar Motivo exámen ecográfico</h2>
                        <div class="card">
                              <div class="card-body">
                                    <ul class="nav mb-2">
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary mr-1"><i class="fa fa-plus" aria-hidden="true"></i> Nueva País</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1"><i class="fa fa-pencil" aria-hidden="true"></i> Modificar País</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1"><i class="fa fa-floppy-o" aria-hidden="true"></i> Guardar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none mr-1"><i class="fa fa-ban" aria-hidden="true"></i> Cancelar</button>
                                          </li>
                                          <li class="nav-item">
                                                <button type="button" class="btn btn-outline-primary d-none"><i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
                                          </li>
                                    </ul>
                                    <table class="table table-hover table-bordered">
                                          <thead class="bg-info">
                                                <tr>
                                                      <th>#</th>
                                                      <th>Nombre</th>
                                                      <th>Código</th>
                                                </tr>
                                          </thead>
                                          <tbody id="tableBodyPais">
                                          </tbody>
                                    </table>
                                    <div class="card formulario d-none">
                                          <div class="card-body">
                                                <div class="form-group">
                                                      <h5 id="titleInput">Nuevo País</h5>
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="inputPaisNombre">
                                                </div>
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="inputPaisCodigo">
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
               <div class="tab-pane" id="prevision" role="tabpanel">
                  <h2 class="my-4">Configurar Prevision</h2>
                  <div class="card">
                     <div class="card-body">
                        <ul class="nav mb-2">
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
                           <thead class="bg-info">
                              <tr id="tableHead">
                                 <th>#</th>
                                 <th>Centro Regional</th>
                              </tr>
                           </thead>
                           <tbody id="tableBody">
                           </tbody>
                        </table>
                        <div class="card formulario d-none">
                           <div class="card-body">
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
               <div class="tab-pane" id="usuario" role="tabpanel">
                  <h2 class="my-4">Datos de usuario registrado</h2>
                  <div class="card">
                     <div class="card-body">
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
                           <thead class="bg-info">
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
            </div>
         </div>
      </div>
      <div class="modal fade" id="modal.generico.container">
            <div class="modal-dialog" role="document">
                  <div class="modal-content">
                        <div class="modal-header">
                              <h5 class="modal-title" id="modal.generico.title">Eliminar</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                        </div>
                        <div class="modal-body" id="modal.generico.body"></div>
                        <div class="modal-footer" id="modal.generico.fotter">
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                        </div>
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
                  $("#InicioLink").attr("href", "<?php echo Config::get('URL'); ?>examen/express");
                  $("#InicioLink").html("Volver");
            });
      </script>
      <script src="<?php echo Config::get('URL'); ?>js/cf.js"></script>
      <script type="text/javascript">
            var appUrl = '<?php echo Config::get('URL'); ?>';
      </script>