<div class="container" id="paciente">
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
        <div class="row">
		    <div class="col-md-12">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Pacientes</h5>
                        <div class="form-group row">
                                <div class="col-6">
                                    <label for="id-paciente" class="col-form-label mt-3"><strong>Número de Registro ( RUT )</strong></label>
                                </div>
                                <div class="col-6">
                                    <input type="text" class="form-control my-3" id="id-paciente">
                                </div>
                            </div>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Fecha</th>
                                </tr>
                            </thead>
                            <tbody id="table.body.pacientes">
                            </tbody>
                        </table>
                        <h5 class="card-title">Exámenes</h5>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Hora</th>
                                </tr>
                            </thead>
                            <tbody id="table.body.examenes">
                            </tbody>
                        </table>
                    </div>
			    </div>
		    </div>
		</div>
</div>
<div class="modal" tabindex="-1" role="dialog" id="modaImages">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Imágenes</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body row" id="fotosDicom">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="imprimirFotos">Ver Impresion</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
<div class="modal" tabindex="-1" role="dialog" id="modalZoom" style="background-color: RGBA(0,0,0,0.8);">
</div>
<link rel="stylesheet" href="<?php echo Config::get('URL'); ?>css/datepicker.css">
<script>
    var serverURL = "<?php echo Config::get('URL'); ?>";
</script>
<script src="<?php echo Config::get('URL'); ?>js/static/bootstrap-datepicker.js"></script>
<script>
    $(document).ready(function(){
    $.get( serverURL + "dicom/getlastpatients", function( data ) {
        $("#table\\.body\\.pacientes").empty();
        $.each(data, function (key, des) {
            var date =  epochToDate(des.AccessTime);
            date =  dateToStr(date);
            var nombre = des.PatientNam.split("^");
            var strTable = "<tr><th scope='row' data-id='" + des.PatientID + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + nombre[1] + " "+ nombre[0] +"</td><td>" + date + "</td></tr>";
            $("#table\\.body\\.pacientes").append(strTable);
        });
        $("#table\\.body\\.pacientes tr").on('click',function(){
            activatePaciente(this);
        });
    });

     $("#id-paciente").on("change", function() {
        RUTPACIENTE = $(this).val();
        FechaExm = $("#fee-dos").val();

        $.get(serverURL + "dicom/patients/" + RUTPACIENTE).done(function(data) {
            $("#table\\.body\\.pacientes").empty();
            $.each(data, function (key, des) {
                var date =  epochToDate(des.AccessTime);
                date =  dateToStr(date);
                var nombre = des.PatientNam.split("^");
                var strTable = "<tr><th scope='row' data-id='" + des.PatientID + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + nombre[1] + " "+ nombre[0] +"</td><td>" + date + "</td></tr>";
                $("#table\\.body\\.pacientes").append(strTable);
            });
            $("#table\\.body\\.pacientes tr").on('click',function(){
                activatePaciente(this);
            });
        });
    });
});

function epochToDate(epoch){
    var date = new Date(epoch*1000);
    return date;
}

function dateToStr(datetime){
    var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var estring = datetime.getDate() + "-" + months[datetime.getMonth()] + "-" + datetime.getFullYear() + " " + datetime.getHours() + ":" + datetime.getMinutes();
    return estring;
}

function activatePaciente(element){
	$.each( $(element).parent().children(), function( i, val ) {
		$( val ).removeClass( 'table-active');
	});
    $(element).addClass('table-active');
    RUTPACIENTE = $(element).children("th").data("id");
    $.get(serverURL + "dicom/study/" + RUTPACIENTE).done(function(data) {
            $("#table\\.body\\.examenes").empty();
            $.each(data, function (key, des) {
                var ano = des.StudyDate.substring(0, 4);
                var mes = des.StudyDate.substring(4, 6);
                var dia = des.StudyDate.substring(6, 8);

                var hora = des.StudyTime.substring(0, 2);
                var minuto = des.StudyTime.substring(2, 4);

                var strTable = "<tr><th scope='row'  data-id='" + des.StudyDate + "' data-rut='" + RUTPACIENTE + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + dia + "-"+mes + "-" + ano +"</td><td>" + hora + ":"+minuto + "</td></tr>";
                $("#table\\.body\\.examenes").append(strTable);
            });
            $("#table\\.body\\.examenes tr").on('click',function(){
                activateExamenes(this);
            });
        });
}

function activateExamenes(element){
    $.each( $(element).parent().children(), function( i, val ) {
		$( val ).removeClass( 'table-active');
	});
    $(element).addClass('table-active');
    FechaExm = $(element).children("th").data("id");
    RUTPACIENTE = $(element).children("th").data("rut");

    $.get(serverURL + "configuracion/obtenerexamenes/" + RUTPACIENTE + "/" + FechaExm).done(function(data) {
                    if (data.exist == true ){
                        StudyDate =  data.StudyDate;
                        $.get(serverURL + "dicom/getimages/" + RUTPACIENTE + "/" + StudyDate).done(function(data) {
                            $("#fotosDicom").html(" ");
                            if (data.DCM = true) {
                                var jK = 0
                                $.each(data.JPGFiles, function(i, item) {
                                    jK++;
                                    $("#fotosDicom").append("<div class='col-6' ><img alt='200x200' class='img-fluid zoom' src='" + serverURL + "data/" + item + "'><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' name='fotosElegidas'>Seleccionar</label></div></div>");
                                });
                                $("#imprimirFotos").off("click");
                                $("#imprimirFotos").on("click", function() {
                                    var fotosArreglo = [];
                                    var contadorIMG = 0;
                                    $("input[name='fotosElegidas']").each(function() {
                                        if (this.checked == true) {
                                            fotosArreglo.push(contadorIMG);
                                        };
                                        contadorIMG = contadorIMG + 1
                                    });
                
                                    if (contadorIMG > 0){
                                        window.open(serverURL + "imagenes/view/" + RUTPACIENTE + "/" + fotosArreglo.toString() + "/" + StudyDate);
                                    }
                                    else{
                                        alert("Debe seleccionar al menos 2 imágenes");
                                    }
                                });
                                $('.zoom').on("click", function(){
                                    var img = $(this).html();
                                    $("#modalZoom").html(" ");
                                    $("#modalZoom").append(img);
                                    $("#modalZoom").modal("show");
                                });
                                if (jK > 0){
                                $("#modaImages").modal("show");
                                }
                            }
                        }).fail(function() {
                            $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
                        });
                    }
                    else{
                        $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
                    }
                });
}
</script>