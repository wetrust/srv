function onHashChange(){
    let hash = document.location.hash;

    if (hash=="#paciente"){
        displayElement("div\\.paciente");
    }
    else if (hash=="#consulta"){
        displayElement("consulta");
    }
    else if (hash=="#tipoExamen"){
        displayElement("tipoExamen");
    }
    else if (hash=="#ecoDoppler"){
        displayElement("ecoDoppler");
    }
    else if (hash=="#ecoObsSegTrim"){
        displayElement("ecoObsSegTrim");
    }
    else if (hash=="#ecoObsPrimTrim"){
        displayElement("ecoObsPrimTrim");
    }
    else if (hash=="#configuracion"){
        displayElement("configuracion");
    }
    else if (hash=="#tamizaje-11"){
        displayElement("tamizaje-11");
    }
    else if (hash=="#morfologica-22"){
        displayElement("morfologica-22");
    }
    else if (hash=="#ecocardio"){
        displayElement("ecocardio");
    }
    else if (hash=="#dneonatales"){
        displayElement("dNeonatales");
    }
    else if (hash=="#agenda"){
        displayElement("agenda");
    }
    else if (hash=="#imgDicom"){
        displayElement("imagenesDicom");
    }
}

function displayElement(div_id){
	$('#consulta').hide();
	$('#tipoExamen').hide();
	$('#ecoObsPrimTrim').hide();
	$('#ecoObsSegTrim').hide();
	$('#ecoDoppler').hide();
	if ($('#popupGenerico').is(':visible')){
		$('#popupGenerico').modal('hide');
	}
	$('#tcal').css("visibility", "hidden");
	$('#div\\.paciente').hide();
	$('#configuracion').hide();
	$('#tamizaje-11').hide();
	$('#morfologica-22').hide();
	$('#ecocardio').hide();
    $('#dNeonatales').hide();
	$('#agenda').hide();
    $('#imagenesDicom').hide();
	if (div_id != 'agenda'){

		$('#home').hide();
	}
	$('#'+div_id).show();
}

function loadTablePatients(){
	$.get( serverURL + "dicom/getlastpatients", function( data ) {
        $("#table\\.body\\.pacientes").empty();
        $.each(data, function (key, des) {
            var date =  epochToDate(des.AccessTime);
            date =  dateToStr(date);
            if (des.PatientNam !== null){
                var nombre = des.PatientNam.split("^");
            }
            else{
                var nombre = ["NN", "NN"];
            }

            if (des.user_exmtxt !== null){
                var ecmtxt = des.user_exmtxt;
            }
            else{
                var ecmtxt = "";
            }
            
            var strTable = "<tr><th scope='row' data-id='" + des.PatientID + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + nombre[1] + " "+ nombre[0] +"</td><td>" + date + "</td><td>" + ecmtxt + "</td></tr>";
            $("#table\\.body\\.pacientes").append(strTable);
        });
        $("#table\\.body\\.pacientes tr").on('click',function(){
            
            $.each( $(this).parent().children(), function( i, val ) {
                $( val ).removeClass( 'table-active');
            });
            
            $(this).addClass('table-active');

            let RUT = $(this).children("th").data("id");
            
            $("#buscar\\.paciente\\.id").val(RUT);
            $("#buscar\\.paciente\\.apellido").val("");
            $("#buscar\\.paciente\\.action").trigger("change");
        });
    });
}

function epochToDate(epoch){
    var date = new Date(epoch*1000);
    return date;
}

function dateToStr(datetime){
    var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    var estring = datetime.getDate() + "-" + months[datetime.getMonth()] + "-" + datetime.getFullYear() + " " + datetime.getHours() + ":" + datetime.getMinutes();
    return estring;
}

function calcularEG(){
    var FExamen, FUM, EdadGestacional;
    var undia = 1000 * 60 * 60 * 24;
    var unasemana = undia * 7;
     
    FUM = localStorage.fum;
    FExamen = localStorage.fee;
   
    FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
    FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy

    FUM = new Date (FUM);
    FExamen = new Date (FExamen);

    EdadGestacional = ((FExamen.getTime() - FUM.getTime()) / unasemana).toFixed(1);
    var B = new Date();
    B.setTime(FUM.getTime() + 40 * unasemana);    
    localStorage.fpp = B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear();
     
    if (FExamen.getTime() < FUM.getTime()) {
        EdadGestacional = "0";
    }
    else if (((FExamen.getTime() - FUM.getTime()) / unasemana) > 42) {
        EdadGestacional = "42";
    }
    else {
        EdadGestacional = Math.floor(EdadGestacional)+"."+Math.round((EdadGestacional - Math.floor(EdadGestacional))*7);
    }
    
    return EdadGestacional;
}

function obtenerNombre(id_paciente){
    $.get(serverURL + "configuracion/obtenernombre/" + id_paciente).done(function(data) {
        if (data.length > 0 ){
            //bloquear los elementos necesarios del paso 3
            $("#id-paciente").attr("disabled", true);
            $("#nombre-paciente").attr("disabled", true);
            $("#apellido-paciente").attr("disabled", true);
            $("#input\\.paciente\\.fum").attr("disabled", true);
            $("#tipo\\.examen\\.previo").attr("disabled", true);
            //activar el boton modificar
            $("#boton\\.modificar\\.paciente").removeClass("d-none");
            //cambiar los textos para que coincida con lo que observa el usuario
            $("#titulos\\.step\\.three\\.step").html("Paso 3");
            $("#titulos\\.step\\.three\\.head").html("Validar datos de paciente");
            $("#titulos\\.step\\.three\\.help").html("Verifique si los datos son correctos y continue con el exámen");
            //copiar id al tercer paso
            $("#id-paciente").val(id_paciente);
            // copiar nombre y apellido al tercer paso
            if (data[0].PatientNam !== null){
                var nombre = data[0].PatientNam.split("^");
            }
            else{
                var nombre = ["NN", "NN"];
            }
            $("#nombre-paciente").val(nombre[1]);
            $("#apellido-paciente").val(nombre[0]);
            //nombre en Eco
            $("#paciente\\.nombre\\.eco\\.basico").html(nombre[1] + " " + nombre[0] + ", " + id_paciente);
            $("#paciente\\.nombre\\.eco\\.elegir").html(nombre[1] + " " + nombre[0] + ", " + id_paciente);
            $("#paciente\\.nombre\\.eco\\.prim").html(nombre[1] + " " + nombre[0] + ", " + id_paciente);
            $("#step-two-find").addClass("d-none");
            $("#step-three").removeClass("d-none");
            //establecer la fecha del exámen previo como fecha de exámen
            var dateTime = epochToDate(data[0].AccessTime)
            var day = ("0" + dateTime.getDate()).slice(-2);
            var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
            $("#fecha\\.examen\\.previo").val((day)+"/"+(month)+"/"+dateTime.getFullYear());
            $("#input\\.paciente\\.fe").val((day)+"/"+(month)+"/"+dateTime.getFullYear());
            $('#input\\.paciente\\.fe').datepicker('setValue', (day)+"/"+(month)+"/"+dateTime.getFullYear());
            //cargar fur si tiene
            obtenerFUM(id_paciente);  
        }
        else{
            alert("No hay pacientes con ese ID o Nombre")
        }
    });
}

function obtenerFUM(rut){
    $.get(serverURL + "pacientes/getfur/" + rut).done(function(data) {
        if (data !== null){
            if (Object.keys(data).length > 0 ){
                $("#input\\.paciente\\.fum").val(data.fur_date);
                $('#input\\.paciente\\.fum').datepicker('setValue', data.fur_date);
                $("#input\\.paciente\\.fum").trigger("change");
            }
        }
        else{
            var dateTime = new Date();
            var day = ("0" + dateTime.getDate()).slice(-2);
            var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
            
            $("#input\\.paciente\\.fum").val((day)+"/"+(month)+"/"+dateTime.getFullYear());
            $('#input\\.paciente\\.fum').datepicker('setValue', data.fur_date);
            $("#input\\.paciente\\.fum").trigger("change");
        }
    });
}

function obtenerexamenes(id_paciente, fecha){
    //año mes dia
    $.get(serverURL + "configuracion/obtenerexamenes/" + id_paciente + "/" + FechaExm[2] + FechaExm[1] + FechaExm[0]).done(function(data) {
        if (data.exist == true ){
            StudyDate =  data.StudyDate;
            $.get(serverURL + "dicom/getimages/" + id_paciente + "/" + StudyDate).done(function(data) {
                $("#fotosDicom").html(" ");
                if (data.DCM = true) {
                    $.each(data.JPGFiles, function(i, item) {
                        $("#fotosDicom").append("<div class='col-12 col-lg-6 col-xl-4'><img alt='200x200' class='zoom' style='width: 250px; height: 250px;' src='" + serverURL + "data/" + item + "'><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' name='fotosElegidas'>Seleccionar</label></div></div>");
                    });
                    $('.zoom').on("click", function(){
                        var img = this.outerHTML;
                        $("#modalZoom").html(" ");
                        $("#modalZoom").append(img);
                        $("#modalZoom img").removeClass("zoom").css("width","auto").css("height","auto");
                        $("#modalZoom").modal("show");
                    });
                }
            }).fail(function() {
                $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
            });     
        }
        else{
            $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
        }
    }); 
};

function appClean(){
    document.location.hash = "";
}

function appLoadBasic(){
    //cargar los ultimos pacientes de la bd
    loadTablePatients();
    //activar funcionalidad de input fur en paciente
    $('#input\\.paciente\\.fum').datepicker();
	$('#input\\.paciente\\.fum').datepicker().on('changeDate', function(ev){
		$(this).trigger("change");
    });
    //establecer la fecha de exámen
    let fecha = new Date();
    let day = ("0" + fecha.getDate()).slice(-2);
	let month = ("0" + (fecha.getMonth() + 1)).slice(-2);

    $("#input\\.paciente\\.fe").val((day)+"/"+(month)+"/"+fecha.getFullYear());
    $('#input\\.paciente\\.fe').datepicker();
	$('#input\\.paciente\\.fe').datepicker().on('changeDate', function(ev){
		$(this).trigger("change");
    });
    $('#input\\.paciente\\.fe').datepicker('setValue', (day)+"/"+(month)+"/"+fecha.getFullYear());

    $.get( serverURL + "configuracion/patologiaobstetrica", function( data ) {
        $("#tipo\\.examen\\.previo").empty();
        $("#patologiaObstetricaUno").empty();
        $.each(data, function (key, des) {
            $("#patologiaObstetricaUno").append('<option value="'+ des.patologia_id + '">'+ des.patologia_name  +'</option>');
            $("#tipo\\.examen\\.previo").append('<option value="'+ des.patologia_id + '">'+ des.patologia_name  +'</option>');
        });
    });
}