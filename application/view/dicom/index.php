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
</div
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
                var ano = des.StudyDate.substring(0, 3);
                var mes = des.StudyDate.substring(3, 5);
                var dia = des.StudyDate.substring(5, 7);

                var strTable = "<tr><th scope='row'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + dia + "-"+mes + "-" + ano +"</td><td>" + des.StudyTime + "</td></tr>";
                $("#table\\.body\\.examenes").append(strTable);
            });
            $("#table\\.body\\.examenes tr").on('click',function(){
                activateExamenes(this);
            });
        });
}
</script>