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
                            <th scope="col">Nombre paciente</th>
                            <th scope="col">Palabras claves</th>
                        </tr>
                    </thead>
                    <tbody id="tabla.resultado">
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<div class="modal" tabindex="-1" role="dialog" id="dialog.view">
  <div class="modal-dialog modal-lg" role="document">
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
    $(document).ready(function(){
        cargarTabla();
    
        $("#boton\\.nuevo").on("click", function(){
            $("#dialog\\.title").html("Nuevo Apunte")
            $("#dialog\\.body").html('<div class="row"><div class="form-group col"><label for="formulario.fecha">Fecha</label><input class="form-control" id="formulario.fecha" type="text"></div><div class="form-group col"><label for="formulario.hora">Hora</label><input class="form-control" id="formulario.hora" type="text"></div></div><div class="row"><div class="form-group col"><label for="formulario.paciente">Nombre del paciente</label><input class="form-control" id="formulario.paciente" type="email"></div><div class="form-group col"><label for="formulario.actividad">Actividad realizada</label><select class="form-control" id="formulario.actividad"></select></div></div><div class="row"><div class="form-group col"><label for="formulario.lugar">Lugar</label><select class="form-control" id="formulario.lugar"></select></div><div class="form-group col"><label for="formulario.cancelacion">Cancelación</label><select class="form-control" id="formulario.cancelacion"></select></div></div><div class="row"><div class="form-group col"><label for="formulario.fcancelacion">Fecha de cancelación</label><input class="form-control" id="formulario.fcancelacion" type="text"></div><div class="form-group"><label for="formulario.valor">Valor</label><input class="form-control" id="formulario.valor" type="number"></div></div><div class="form-group"><label for="formulario.comentarios">Comentarios</label><textarea class="form-control" id="formulario.comentarios" rows="3"></textarea></div><div class="form-group"><label for="formulario.palabras">Palabras claves</label><input class="form-control" id="formulario.palabras" type="text"></div>');
            $("#dialog\\.ok").off("click").on("click", function(){
                var formulario = {
                    accion: "nuevo",
                    fecha: $("#formulario\\.fecha").val(),
                    hora: $("#formulario\\.hora").val(),
                    paciente: $("#formulario\\.paciente").val(),
                    actividad: $("#formulario\\.actividad").val(),
                    lugar: $("#formulario\\.lugar").val(),
                    cancelacion: $("#formulario\\.cancelacion").val(),
                    fcancelacion: $("#formulario\\.fcancelacion").val(),
                    valor: $("#formulario\\.valor").val(),
                    comentarios: $("#formulario\\.comentarios").val(),
                    palabras: $("#formulario\\.palabras").val()
                }
                $.post("https://servidor.crecimientofetal.cl/apuntes/api", formulario).done(function(data){
                    $("#dialog\\.view").modal("hide");
                    cargarTabla();
                })
            })
            $("#dialog\\.view").modal("show");
        });
    });

    function cargarTabla(){
        var solicitud = {
            accion: "tabla"
        };

        $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
            $("#tabla\\.resultado").empty();
            $.each(data function(i, item) {
                let fila = '<tr><th scope="row">';

                fila += item["apunte_id"] + '</th><td>';
                fila += item["apunte_date"] + '</td><td>';
                fila += item["apunte_person"] + '</td><td>';
                fila += item["apunte_keywords"] + '</td></tr>';

                $("#tabla\\.resultado").append(fila);
            };
        });
    }
</script>