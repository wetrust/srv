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
   
    FUM = new Date (FUM);
    FExamen = new Date (FExamen);
    
    console.log((FExamen.getTime() - FUM.getTime()));
    console.log((FExamen.getTime() - FUM.getTime()) / unasemana);

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
}