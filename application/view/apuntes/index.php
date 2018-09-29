<div class="container">
    <ul class="nav mt-3">
        <li class="nav-item">
            <a class="nav-link active" href="#" id="boton.nuevo">Nuevo Apunte</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Configuración</a>
        </li>
    </ul>
    <div class="card mb-1">
        <div class="card-body">
            <div class="row">
                <div class="form-group col">
                    <label for="exampleFormControlSelect1">Buscar por</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>actividades</option>
                        <option>cancelacion</option>
                        <option>lugar</option>
                        <option>palabras claves</option>
                    </select>
                </div>
                <div class="form-group col">
                    <label for="exampleFormControlInput1">palabra</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1">
                </div>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Ultimos Apuntes</h5>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead class="table-success">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Resumen</th>
                            <th scope="col">Palabras claves</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="modal" tabindex="-1" role="dialog" id="dialog.view">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="dialog.title"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="dialog.body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="dialog.ok">Guardar</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>
<script>
    $("#boton\\.nuevo").on("click", function(){
        $("#dialog\\.title").html("Nuevo Apunte")
        $("#dialog\\.body").html('<div class="form-group"><label for="formulario.fecha">Fecha</label><input type="text" class="form-control" id="formulario.fecha"></div><div class="form-group"><label for="formulario.hora">Hora</label><input type="text" class="form-control" id="formulario.hora"></div><div class="form-group"><label for="formulario.paciente">Nombre del paciente</label><input type="email" class="form-control" id="formulario.paciente"></div><div class="form-group"><label for="formulario.actividad">Actividad realizada</label><select class="form-control" id="formulario.actividad"></select></div></div><div class="form-group"><label for="formulario.lugar">Lugar</label><select class="form-control" id="formulario.lugar"></select></div><div class="form-group"><label for="formulario.cancelacion">Cancelación</label><select class="form-control" id="formulario.cancelacion"></select></div><div class="form-group"><label for="formulario.fcancelacion">Fecha de cancelación</label><input type="text" class="form-control" id="formulario.fcancelacion"></div><div class="form-group"><label for="formulario.valor">Valor</label><input type="number" class="form-control" id="formulario.valor"></div><div class="form-group"><label for="formulario.comentarios">Comentarios</label><textarea class="form-control" id="formulario.comentarios" rows="3"></textarea></div><div class="form-group"><label for="formulario.palabras">Palabras claves</label><input type="text" class="form-control" id="formulario.palabras"></div>');
        $("#dialog\\.view").modal("show");
    })
</script>