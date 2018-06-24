function onHashChange(){
    let hash = document.location.hash;

    if (hash=="#paciente"){
        displayElement("div\\.paciente");
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
        //resetea los inputs
        $("#lcn").val("");
        $("#lcnPct").val("");
        $("#saco").val("");
        $("#sacoPct").val("");
        obtenerEcoPrimTrim();
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
        let RUTPACIENTE = $("#id-paciente").val();
        let FechaExm = $("#input\\.paciente\\.fe").val();
        let dia = FechaExm.substring(0,2);
        let mes = Number(FechaExm.substring(3,5)) -1;
        let ano = FechaExm.substring(6,10);
        FechaExm = new Date(ano, mes, dia).getTime() / 1000
        getDCM(RUTPACIENTE, FechaExm);
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
            
            var strTable = "<tr><th scope='row' data-id='" + des.PatientID + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + nombre[1] + " "+ nombre[0] +"</td><td>" + date + "</td><td>" + ecmtxt + "</td><td><i class='fas fa-camera' name='dcm' data-id='" + des.PatientID +"' data-date='" + des.AccessTime + "'></i></td></tr>";
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
            $("#buscar\\.paciente\\.action").trigger("click");
        });

        $("i[name='dcm']").on("click", function(){
            let RUTPACIENTE = $(this).data("id");
            let FechaExm = $(this).data("date");

            getDCM(RUTPACIENTE, FechaExm);

            $("#buscar\\.paciente\\.id").val(RUTPACIENTE);
            obtenerNombre(RUTPACIENTE);

            window.location.href = "#imgDicom";
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
            $("#paciente\\.nombre\\.eco\\.elegir").html(nombre[1] + " " + nombre[0] + ", " + id_paciente);
            $("#paciente\\.nombre\\.eco\\.prim").html(nombre[1] + " " + nombre[0] + ", " + id_paciente);
            $("#paciente\\.nombre\\.eco\\.segundo").html(nombre[1] + " " + nombre[0] + ", " + id_paciente);
            $("#paciente\\.nombre\\.eco\\.doppler").html(nombre[1] + " " + nombre[0] + ", " + id_paciente);
            $("#paciente\\.nombre\\.imagenes").html(nombre[1] + " " + nombre[0] + ", " + id_paciente);
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
            $('#input\\.paciente\\.fum').datepicker('setValue', (day)+"/"+(month)+"/"+dateTime.getFullYear());
            $("#input\\.paciente\\.fum").trigger("change");
        }
    });
}

function obtenerEcoPrimTrim(){
    //cargar los exámenes que tiene el paciente para mostrar en la grilla
    let data = {
        id: $("#id-paciente").val(),
        tipo: 1
    }

   $.post(serverURL + "examen/get", data).done(function (response) {
        if ( Object.keys(response).length > 0 ){
            $("#table\\.ecografia\\.primtrim").empty();
            $.each(response.data, function(i,val){
                let fila = "<tr><th scope='row'>"+ val.n_examen +"</th><td>" + val.eg_examen +"</td><td>" + val.embrion +"</td><td>"+ val.prom_saco+"</td>";
                $("#table\\.ecografia\\.primtrim").append(fila);
            });
        }
    }); 
}

function eglcn(lcn) {

    var LCN = [[],[]];

    LCN[0][0] = 0.09; LCN[0][1] = 0.2; LCN[0][2] = 0.37;
    LCN[0][3] = 0.57; LCN[0][4] = 0.7; LCN[0][5] = 0.8;
    LCN[0][6] = 0.9; LCN[0][7] = 1; LCN[0][8] = 1.1;
    LCN[0][9] = 1.12; LCN[0][10] = 1.13; LCN[0][11] = 1.18;
    LCN[0][12] = 1.27; LCN[0][13] = 1.38; LCN[0][14] = 1.47;
    LCN[0][15] = 1.58; LCN[0][16] = 1.65; LCN[0][17] = 1.72;
    LCN[0][18] = 1.87; LCN[0][19] = 1.96; LCN[0][20] = 2.05;
    LCN[0][21] = 2.18; LCN[0][22] = 2.25; LCN[0][23] = 2.35;
    LCN[0][24] = 2.54; LCN[0][25] = 2.62; LCN[0][26] = 2.7;
    LCN[0][27] = 2.9; LCN[0][28] = 3.08; LCN[0][29] = 3.16;
    LCN[0][30] = 3.4; LCN[0][31] = 3.51; LCN[0][32] = 3.57;
    LCN[0][33] = 3.76; LCN[0][34] = 3.85; LCN[0][35] = 4.05;
    LCN[0][36] = 4.18; LCN[0][37] = 4.46; LCN[0][38] = 4.55;
    LCN[0][39] = 4.66; LCN[0][40] = 4.88; LCN[0][41] = 5.07;
    LCN[0][42] = 5.29; LCN[0][43] = 5.46; LCN[0][44] = 5.66;
    LCN[0][45] = 5.87; LCN[0][46] = 6.01; LCN[0][47] = 6.27;
    LCN[0][48] = 6.37; LCN[0][49] = 6.65; LCN[0][50] = 6.77;
    LCN[0][51] = 7.08; LCN[0][52] = 7.19; LCN[0][53] = 7.39;
    LCN[0][54] = 7.57; LCN[0][55] = 7.68; LCN[0][56] = 7.98;
    LCN[0][57] = 8.09; LCN[0][58] = 8.35; LCN[0][59] = 8.48;
    LCN[0][60] = 8.56; LCN[0][61] = 8.76; LCN[0][62] = 8.88;
    LCN[0][63] = 9.09;

    LCN[1][0] = 0; LCN[1][1] = 5.5; LCN[1][2] = 6;
    LCN[1][3] = 6.2; LCN[1][4] = 6.4; LCN[1][5] = 6.5;
    LCN[1][6] = 6.6; LCN[1][7] = 7.1; LCN[1][8] = 7.1;
    LCN[1][9] = 7.1; LCN[1][10] = 7.2; LCN[1][11] = 7.3;
    LCN[1][12] = 7.4; LCN[1][13] = 7.5; LCN[1][14] = 7.6;
    LCN[1][15] = 8; LCN[1][16] = 8.1; LCN[1][17] = 8.2;
    LCN[1][18] = 8.3; LCN[1][19] = 8.4; LCN[1][20] = 8.5;
    LCN[1][21] = 8.6; LCN[1][22] = 9; LCN[1][23] = 9.1;
    LCN[1][24] = 9.2; LCN[1][25] = 9.3; LCN[1][26] = 9.4;
    LCN[1][27] = 9.5; LCN[1][28] = 10; LCN[1][29] = 10.1;
    LCN[1][30] = 10.2; LCN[1][31] = 10.3; LCN[1][32] = 10.4;
    LCN[1][33] = 10.5; LCN[1][34] = 10.6; LCN[1][35] = 11;
    LCN[1][36] = 11.1; LCN[1][37] = 11.2; LCN[1][38] = 11.3;
    LCN[1][39] = 11.4; LCN[1][40] = 11.5; LCN[1][41] = 11.6;
    LCN[1][42] = 12; LCN[1][43] = 12.1; LCN[1][44] = 12.2;
    LCN[1][45] = 12.3; LCN[1][46] = 12.4; LCN[1][47] = 12.5;
    LCN[1][48] = 12.6; LCN[1][49] = 13; LCN[1][50] = 13.1;
    LCN[1][51] = 13.2; LCN[1][52] = 13.3; LCN[1][53] = 13.4;
    LCN[1][54] = 13.5; LCN[1][55] = 13.6; LCN[1][56] = 14;
    LCN[1][57] = 14.1; LCN[1][58] = 14.2; LCN[1][59] = 14.3;
    LCN[1][60] = 14.4; LCN[1][61] = 14.5; LCN[1][62] = 14.6;
    LCN[1][63] = 15;
	
    lcn = lcn.toString();
    lcn = lcn.replace(",", ".");
    lcn = parseFloat(lcn);

    if (isNaN(lcn) != true){
	    if (lcn > 90) {
		    return 0;
	    }
	    else if (lcn < 1){
	    	return 0;
	    }
	    else {

		    var ValLCN1 = lcn / 10;

		    for (i = 1; i <= 63; i ++ ) {
			if (LCN[0][i] >= ValLCN1) {
			    var eglcn = LCN[1][i];
			    i = 63;
			}
		    }
		    return eglcn;
	    }
    }
    else{
    	return 0;
    }
};

function egSaco(saco) {

    var y = [];
    
        y[5] =4.2;    y[6] =4.3;    y[7] =4.4;    y[8] =4.5;
        y[9] =4.6;    y[10] =5;    y[11] =5.1;    y[12] =5.2;
        y[13] =5.3;    y[14] =5.4;    y[15] =5.5;    y[16] =5.6;
        y[17] =6;    y[18] =6.1;    y[19] =6.2;    y[20] =6.3;
        y[21] =6.4;    y[22] =6.5;    y[23] =6.6;    y[24] =7;
        y[25] =7.1;    y[26] =7.2;    y[27] =7.3;    y[28] =7.4;
        y[29] =7.5;    y[30] =7.6;    y[31] =8;    y[32] =8.1;
        y[33] =8.2;    y[34] =8.3;    y[35] =8.4;    y[36] =8.5;
        y[37] =8.6;    y[38] =9;    y[39] =9.1;    y[40] =9.2;
        y[41] =9.3;    y[42] =9.4;    y[43] =9.5;    y[44] =9.6;
        y[45] =9.6;    y[46] =10;    y[47] =10.1;    y[48] =10.2;
        y[49] =10.3;    y[50] =10.4;    y[51] =10.5;    y[52] =11;
        y[53] =11.1;    y[54] =11.2;    y[55] =11.3;    y[56] =11.4;
        y[57] =11.5;    y[58] =11.6;    y[59] =12;    y[60] =12.1;
        y[61] =12.2;
        
        saco = saco.replace(",", ".");
        var prs = parseInt(saco);
    
        if (prs < 5) {
            return 0;
        }
        else if (prs > 61) {
            return 0;
        }
        else {
            var egsaco = y[prs];
            return egsaco;
        }
};

function crearInformeEcoPrimTrim(){

	var sacovitelinotxt = "";
        if ($('#saco-vitelino').val() == "no se observa"){
            sacovitelinotxt = ".";
        }
        else{
            
	     sacovitelinotxt = " de diametro " + $('#saco-vitelino-mm').val() +" mm.";
        }

        var sacogestacionaltxt = $("#saco-gestacional-mm").val();

        if (sacogestacionaltxt > 0){
            sacogestacionaltxt = " diametro promedio " + sacogestacionaltxt +" mm.";
        }
        else{
             sacogestacionaltxt = ".";
        }

        var fcftexto = $("#embrion").val();

        if (fcftexto == 'no se observa aun'){
              fcftexto = ".";
        }
        else if (fcftexto == 'act. no evidenciable'){
              fcftexto = ".";
        }
        else{
              if ($("#fcf-prim").val() == '(+) inicial'){
                  fcftexto = " frecuencia cardiaca fetal " + $("#fcf-prim").val();
              }
              else {
                   fcftexto = " frecuencia cardiaca fetal de " + $("#fcf-prim").val() +" x min.";
              }
        }

	var douglasinforme = '';
	
        if ($("#exploracion-douglas").val() == 'ocupado'){
               douglasinforme = $("#comentarios-douglas-informe").val();
        }
        else
        {
               douglasinforme = ".";
        }

        var LINEA1 = $("#utero-ubic1").val() + " " + $("#utero-ubic2").val() + ", " + $("#cuerpo-uterino").val() + ".";
        var LINEA2 = $("#saco-gestacional").val() + sacogestacionaltxt;
        var LINEA3 = $("#saco-vitelino").val() + sacovitelinotxt;
        var LINEA4 = $("#embrion").val() + fcftexto;
        var LINEA5 = $("#anexo-derecho").val();
        var LINEA6 = $("#anexo-izquierdo").val();
        var LINEA7 = $("#exploracion-douglas").val() + ", " + douglasinforme;
	var LINEA12 = '';
	var LINEA8 = '';
        if ($('#lcn').val() > 0){
	    var LINEA9 = "Utero " + $("#utero-ubic1").val() + " " + $("#utero-ubic2").val() + ", " + $("#cuerpo-uterino").val() + ".";
	    var LINEA10 = "Exploración anexial derecha " + $("#anexo-derecho").val();
            var LINEA11 = "Exploración anexial izquierda " + $("#anexo-izquierdo").val();
        }
	else{
	    var LINEA9 = "Gestación Inicial<br>Utero " + $("#utero-ubic1").val() + " " + $("#utero-ubic2").val() + ", " + $("#cuerpo-uterino").val() + ".";
	    var LINEA10 = "Exploración anexial " + $("#anexo-derecho").val();
            var LINEA11 = "";
	    LINEA12 = "Embrion no se observa";
	}
	
        if (sacogestacionaltxt > 0){
            LINEA12 = "Saco gestacional diámetro promedio de " + sacogestacionaltxt +" mm.<br>";
            LINEA8 = "Edad gestacional estimada " + $("#sacoPct").val() + " por saco gestacional.<br>";
                    //eliminar referencias que no son alusivas a saco
                    //comprobar si no hay lcn
            //if ($("#lcn").val()( < 1){
            //    $("#referencia-eco1").html("Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800<br><br>Software diseñado por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br>Este software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.");
            //}
        }

        if ($('#lcn').val() > 0) {
            LINEA12 = "Largo embrionario máximo de " + $("#lcn").val() + " mm.";
            LINEA8 = "Edad gestacional estimada " + $("#lcnPct").val() + " semanas por LCN.<br>";
        }
	var LINEA13 = '';
	
        if ($('eco1-dbp').val() > 0){
            LINEA13 = "DBP: " + $("eco1-dbp").val() + "mm";
        }

	var TITULOBIOMETRIAS = 'BIOMETRÍAS EMBRIO/FETAL';
	
        if ($('#lcn').val() < 1) {
            if ($('#eco1-dbp').val() < 1) {
                if (sacogestacionaltxt < 1){
                    LINEA12 = '';
                    LINEA8 = '';
                    TITULOBIOMETRIAS = '';
                }
            }
        }
	
	//si solo tiena saco
	if ($('#lcn').val() < 1 && $('#saco').val() > 1){
		var InformeString = "<div class='container-fluid'> <h3 class='page-header text-center'>Evaluación ecografía obstétrica de primer trimestre</h3></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container-fluid'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>ANTECEDENTES</strong> </p><p><strong>FUM: </strong> :FUM <br><strong>EG (UPM): </strong> :EG semanas</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>DESCRIPCIÓN</strong> </p><p>Cuerpo Uterino :LINEA1 <br>Saco Gestacional :LINEA2 <br>Saco Vitelino :LINEA3 <br>Embrión :LINEA4 <br>Exploración anexial derecha :LINEA5 <br>Exploración anexial izquierda :LINEA6 <br>Exploración de Douglas :LINEA7</p><p></p><p></p><p><strong style='color:#045dab;'>:TITULOBIOMETRIAS</strong> </p><p>:LINEA12 <br>:LINEA13</p><p></p><p></p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><span style='color:#045dab;'> (Adicionar comentarios del examinador)</span> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container-fluid'> <p class='text-right top40'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina' style='border-bottom:0;'>Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br>Referencia Edad menstrual por LCN Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br>Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.</strong> </p></div>";
	}
	else
	{
		var InformeString = "<div class='container-fluid'> <h3 class='page-header text-center'>Evaluación ecografía obstétrica de primer trimestre</h3></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container-fluid'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>ANTECEDENTES</strong> </p><p><strong>FUM: </strong> :FUM <br><strong>EG (UPM): </strong> :EG semanas</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>DESCRIPCIÓN</strong> </p><p>Cuerpo Uterino :LINEA1 <br>Saco Gestacional :LINEA2 <br>Saco Vitelino :LINEA3 <br>Embrión :LINEA4 <br>Exploración anexial derecha :LINEA5 <br>Exploración anexial izquierda :LINEA6 <br>Exploración de Douglas :LINEA7</p><p></p><p></p><p><strong style='color:#045dab;'>:TITULOBIOMETRIAS</strong> </p><p>:LINEA12 <br>:LINEA13</p><p></p><p></p><p><strong style='color:#045dab;'>HIPÓTESIS DIAGNÓSTICA</strong> </p><p>:LINEA8 :LINEA9 <br>:LINEA10 <br>:LINEA11</p></div><div class='container-fluid'> <p><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container-fluid'> <p class='text-right top40'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina' style='border-bottom:0;'>Referencia saco gestacional Hellman LM, Kobayashi M., Fillisti L. Am J Onstet Gynecol 1968; 103(6):789-800 <br>Referencia Edad menstrual por LCN Hadlock FP, Shan YP, Kanon JD y cols.: Radiology 182:501, 1992. <br>Referencia Diámetro biparital según gráfica de Hadlock y col. 1984 <br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos,<br>es responsabilidad exclusiva de quien realiza y certifica este documento.</strong> </p></div>";
	}
	
	var paciente = $( '#nombre-paciente').val() + " " + $( '#apellido-paciente').val();
	var idpaciente = $( '#id-paciente').val();
	var motivo = $( '#motivo\\.examen option:selected').text();
	var ecografista = $( '#profesional\\.ecografista option:selected').text();

	var fur = $("#input\\.paciente\\.fum").val();
	var fexamen = $("#input\\.paciente\\.fe\\.ecoprim").val();
	var eg = $("#eco\\.prim\\.eg").val();

	InformeString = InformeString.replace(":PACIENTE", paciente);
	InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
	InformeString = InformeString.replace(":MOTIVO", motivo);
	InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
    
    let fecha = new Date();
    let day = ("0" + fecha.getDate()).slice(-2);
    let month = ("0" + (fecha.getMonth() + 1)).slice(-2);
    var dateInf = (day)+"/"+(month)+"/"+fecha.getFullYear();
	
	var comentario = $("#comentarios-eco-uno").val();
	if (typeof comentario !== 'undefined'){
		comentario = comentario.replace(/\r?\n/g, "<br>");
	}
	else{
		comentario='';
	}
	
	var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();
	var edadmaterna = $( "select[name='edad_materna']").val();
	
	InformeString = InformeString.replace(":FUM", fur);
	InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);
	InformeString = InformeString.replace(":FEXAMEN", fexamen);
	InformeString = InformeString.replace(":EG", eg);
	InformeString = InformeString.replace(":LINEA1", LINEA1);
	InformeString = InformeString.replace(":LINEA2", LINEA2);
	InformeString = InformeString.replace(":LINEA3", LINEA3);
	InformeString = InformeString.replace(":LINEA4", LINEA4);
	InformeString = InformeString.replace(":LINEA5", LINEA5);
	InformeString = InformeString.replace(":LINEA6", LINEA6);
	InformeString = InformeString.replace(":LINEA7", LINEA7);
	InformeString = InformeString.replace(":LINEA8", LINEA8);
	InformeString = InformeString.replace(":LINEA9", LINEA9);
	InformeString = InformeString.replace(":LINEA10", LINEA10);
	InformeString = InformeString.replace(":LINEA11", LINEA11);
	InformeString = InformeString.replace(":LINEA12", LINEA12);
	InformeString = InformeString.replace(":LINEA13", LINEA13);
	InformeString = InformeString.replace(":TITULOBIOMETRIAS", TITULOBIOMETRIAS);
	InformeString = InformeString.replace(":COMENTARIO", comentario);
	InformeString = InformeString.replace(":DATEINFORME", dateInf);
	InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);
	
	imprInforme(InformeString);
}

function crearInformeEcoSegTrim1(){
    var actCard;
    var movCorp;

    elem=document.getElementsByName('accard');
    for(i=0;i<elem.length;i++)
        if (elem[i].checked) {
            actCard = elem[i].value;
        }

    elem=document.getElementsByName('movfet');
    for(i=0;i<elem.length;i++)
        if (elem[i].checked) {
            movCorp = elem[i].value;
        }

    if (actCard = 0){
        actCard = "sin actividad cardiaca";
    }
    else
    {
        actCard = "con actividad cardiaca";
    }
    if (movCorp = 0){
        movCorp = "sin movimientos corporales";
    }
    else
    {
        movCorp = "con movimientos corporales";
    }
    
    var linea1 = "Feto en presentación " + document.getElementById("presentacion").value + ", dorso " + document.getElementById("dorso").value + ", " + actCard + " y " + movCorp + ".";
    var linea2 = "Frecuencia cardiaca fetal de " + document.getElementById("fcf").value + " x minuto.";

    var anatomiaFetal = $('#ev-morfo').val();
    var anatomiaFetalString = "";

    for(i=0;i<anatomiaFetal.length;i++)
        {
        anatomiaFetalString = anatomiaFetalString + anatomiaFetal[i];
        anatomiaFetalString = anatomiaFetalString + " <br>";
        }

        var linea3 = "<strong>Anatomía fetal ***</strong>  " + anatomiaFetalString + $('#comentarios-anatomia-informe-eg-texto').val();
        var linea4 = "<strong>Placenta</strong> inserción " + document.getElementById("incersion").value + " y de ubicación " + document.getElementById("ubicacion").value + ", grado " + document.getElementById("grado-placenta").value;
        var linea5 = "<strong>Cordón umbilical</strong> " + document.getElementById("cordon").value + ", identificandose "+ document.getElementById("vasos").value +" vasos.";
        var linea6 = "<strong>Líquido amniótico **</strong>" + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor de " + document.getElementById("bvmEcoDos").value + " mm.";

        var fur = $("#input\\.paciente\\.fum\\.examen").val();
        var fexamen = $("#input\\.paciente\\.fe\\.ecoseg").val();
        var eg = $("#eco\\.seg\\.eg").val();
        var fpp = $( "#input\\.paciente\\.fpp\\.examen").val();
        var dbp = $( '#dbp').val() + ' mm';
        var dbpPct = $( '#dbpPct').val();
        var dbpRango = '( ' + $( '#dbpRango').val() + ' )';
        var dof = $( '#dof').val() + ' mm';
        var dofPct = $( '#dofPctRpt').val();
        var dofRango = '( ' + $( '#dofRango').val() + ' )';
        var cc = $( '#cc').val() + ' mm';
        var ccPct = $( '#ccPctRpt').val();
        var ccRango = '( ' + $( '#ccRango').val() + ' )';
        var ca = $( '#ca').val() + ' mm';
        var caPct = $( '#caPctRpt').val();
        var caRango = '( ' + $( '#caRango').val() + ' )';
        var lf = $( '#lf').val() + ' mm';
        var lfPct = $( '#lfPctRpt').val();
        var lfRango = '( ' + $( '#lfRango').val() + ' )';
        var ccca = $( '#ccca').val();
        var cccaPct = $( '#cccaPct').val();
        var cccaRango = '( ' + $( '#cccaRango').val() + ' )';
        var pfe = '<strong>' + $( '#pfe').val() + ' Gr.' + '</strong>';
        var percentilPeso = $('#pfePctRpt').val();
        percentilPeso = percentilPeso.replace('&lt;','<').replace('&gt;', '>');
        var pfePct = '<strong>' + percentilPeso + '</strong>';
        var pfeRango = '<strong>' + $( '#pfeRango').val() + ' *</strong>';
        var ic = $( '#dof-dbp').val();
        var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();

        var paciente = $( '#nombre-paciente').val() + " " + $( '#apellido-paciente').val();
        var idpaciente = $( '#id-paciente').val();
        var motivo = $( '#motivo\\.examen option:selected').text();
        var ecografista = $( '#profesional\\.ecografista option:selected').text();
        var comentario = $('#comentarios-eco-dos-inf-dos').val();
        if (typeof comentario !== 'undefined'){
            comentario = comentario.replace(/\r?\n/g, "<br>");
        }
        else{
            comentario='';
        }

        var edadmaterna = $( "select[name='edad_materna']").val();

        var InformeString = "<div class='container'> <h3>Evaluación ecográfica del crecimiento fetal</h3></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p><p><strong>FUM: </strong>:FUR <br><strong>Ege: </strong>:EG semanas <br><strong>FPP: </strong>:FPP</p></div><div class='container'> <p><strong style='color:#045dab;'>DESCRIPCIÓN</strong> </p><p style='margin-bottom:0;'>:LINEA1 <br>:LINEA2</p><p style='margin-bottom:0; word-wrap: break-word;'>:LINEA3</p><p>:LINEA4 <br>:LINEA5 <br>:LINEA6</p><p></p><p></p></div><div class='container'> <table class='table'> <tbody> <tr> <th style='color:#045dab;'>BIOMETRÍA FETAL</th> <th style='text-align:center;'>Valor observado</th> <th class='text-center'>Pct de Crecimiento</th> <th class='text-center'>Referencia para Edad</th> </tr><tr> <td>DBP (Hadlock):</td><td style='text-align:center;'>:DBP</td><td class='text-center'>:DBPPCT</td><td class='text-center'>:DBPRANGO</td></tr><tr> <td>DOF (Jeanty):</td><td style='text-align:center;'>:DOF</td><td class='text-center'>:DOFPCT</td><td class='text-center'>:DOFRANGO</td></tr><tr> <td>CC (Hadlock):</td><td style='text-align:center;'>:CC</td><td class='text-center'>:CCPCT</td><td class='text-center'>:CCRANGO</td></tr><tr> <td>CA (Hadlock):</td><td style='text-align:center;'>:CA</td><td class='text-center'>:CAPCT</td><td class='text-center'>:CARANGO</td></tr><tr> <td style='padding-bottom: 15px !important;'>LF (Hadlock):</td><td style='text-align:center;padding-bottom: 15px !important;'>:LF</td><td style='text-align:center;padding-bottom: 15px !important;'>:LFPCT</td><td style='text-align:center;padding-bottom: 15px !important;'>:LFRANGO</td></tr><tr> <td style='border-top:1px dashed #045dab;'><strong>Peso Fetal Estimado según fórmula de Hadlock (DBP-CC-CA-LF)</strong> </td><td style='text-align:center;border-top:1px dashed #045dab;'><strong>:PFE</strong> </td><td style='text-align:center;border-top:1px dashed #045dab;'><strong>:PFEPCT</strong> </td><td style='text-align:center;border-top:1px dashed #045dab;'><strong>:PFERANGO</strong> </td></tr><tr> <td style='border-top:1px dashed #045dab;'>Relación CC / CA (Hadlock)</td><td class='text-center' style='border-top:1px dashed #045dab;'>:CCCA</td><td class='text-center' style='border-top:1px dashed #045dab;'>:CCCAPCT</td><td class='text-center' style='border-top:1px dashed #045dab;'>:CCCARANGO</td></tr><tr> <td>Indice Cefálico (DBP / DOF)</td><td style='text-align:center;'>:IC</td><td></td><td class='text-center'>( 70% - 86% )</td></tr><tr> <td></td><td></td><td></td><td></td></tr></tbody> </table></div><div class='container'> <p style='margin-bottom;0px;padding-bottom:0px;margin-bottom:0px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small> </p><p style='max-width: 700px;text-align: justify;margin-top:0px;padding-top:0px;'>:COMENTARIO</p></div><div class='container'> <p class='text-right top40' style='margin-right:100px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina' style='margin-bottom:0;'>* Evaluación de crecimiento fetal (Gráfica), según referencia propuesta por Hadlock y col. Radiology 181: 129 - 133; 1991 (Normalidad Pct 10 a 90) <br>** Referencia para medición de líquido amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000 <br><strong>*** Para la evaluación morfológica fetal, ceñirse a recomendaciones oficiales vigentes, para Chile: Guías Perinatales MINSAL 2015</strong> <br>Ver dirección web: http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf</p><p style='margin-bottom:0 !important;' class='pie-pagina-dos'>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong> </p></div>";

        InformeString = InformeString.replace(":PACIENTE", paciente);
        InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
        InformeString = InformeString.replace(":MOTIVO", motivo);
        InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
        InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);

        InformeString = InformeString.replace(":FUR", fur);
        InformeString = InformeString.replace(":FEXAMEN", fexamen);
        InformeString = InformeString.replace(":EG", eg);
        InformeString = InformeString.replace(":FPP", fpp);
        InformeString = InformeString.replace(":DBP", dbp);
        InformeString = InformeString.replace(":DBPPCT", dbpPct);
        InformeString = InformeString.replace(":DBPRANGO", dbpRango);
        InformeString = InformeString.replace(":DOF", dof);
        InformeString = InformeString.replace(":DOFPCT", dofPct);
        InformeString = InformeString.replace(":DOFRANGO", dofRango);
        InformeString = InformeString.replace(":CC", cc);
        InformeString = InformeString.replace(":CCPCT", ccPct);
        InformeString = InformeString.replace(":CCRANGO", ccRango);
        InformeString = InformeString.replace(":CA", ca);
        InformeString = InformeString.replace(":CAPCT", caPct);
        InformeString = InformeString.replace(":CARANGO", caRango);
        InformeString = InformeString.replace(":CCCA", ccca);
        InformeString = InformeString.replace(":CCCAPCT", cccaPct);
        InformeString = InformeString.replace(":CCCARANGO", cccaRango);
        InformeString = InformeString.replace(":LF", lf);
        InformeString = InformeString.replace(":LFPCT", lfPct);
        InformeString = InformeString.replace(":LFRANGO", lfRango);
        InformeString = InformeString.replace(":PFE", pfe);
        InformeString = InformeString.replace(":PFEPCT", pfePct);
        InformeString = InformeString.replace(":PFERANGO", pfeRango);
        InformeString = InformeString.replace(":IC", ic);

        let fecha = new Date();
        let day = ("0" + fecha.getDate()).slice(-2);
        let month = ("0" + (fecha.getMonth() + 1)).slice(-2);
        var dateInf = (day)+"/"+(month)+"/"+fecha.getFullYear();

        InformeString = InformeString.replace(":DATEINFORME", dateInf);

        InformeString = InformeString.replace(":LINEA1", linea1);
        InformeString = InformeString.replace(":LINEA2", linea2);
        InformeString = InformeString.replace(":LINEA3", linea3);
        InformeString = InformeString.replace(":LINEA4", linea4);
        InformeString = InformeString.replace(":LINEA5", linea5);
        InformeString = InformeString.replace(":LINEA6", linea6);
        InformeString = InformeString.replace(":COMENTARIO", comentario);
        InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);

        imprInforme(InformeString);
        //var day = ("0" + aplication.day.getDate()).slice(-2);
        //var month = ("0" + (aplication.day.getMonth() + 1)).slice(-2);

        //var dateInf = (day)+"/"+(month)+"/"+aplication.day.getFullYear();

        //var valores = {
        //	PACIENTE: paciente,
        //	IDPACIENTE: idpaciente,
        //	MOTIVO: motivo,
        //	ECOGRAFISTA: ecografista,
        //	EDADMATERNA: edadmaterna,
        //	FUR: fur,
        //	FEXAMEN: fexamen,
        //	EG: eg,
        //	FPP: fpp,
        //	DBP: dbp,
        //	DBPPCT: dbpPct,
        //	DBPRANGO: dbpRango,
        //	DOF: dof,
        //	DOFPCT: dofPct,
        //	DOFRANGO: dofRango,
        //	CC: cc,
        //	CCPCT: ccPct,
        //	CCRANGO: ccRango,
        //	CA: ca,
        //	CAPCT: caPct,
        //	CARANGO: caRango,
        //	CCCA: ccca,
        //	CCCAPCT: cccaPct,
        //	CCCARANGO: cccaRango,
        //	LF: lf,
        //	LFPCT: lfPct,
        //	LFRANGO: lfRango,
        //	PFE: pfe,
        //	PFEPCT: pfePct,
        //	PFERANGO: pfeRango,
        //	IC: ic,
        //	DATEINFORME: dateInf,
        //	LINEA1: linea1,
        //	LINEA2: linea2,
        //	LINEA3: linea3,
        //	LINEA4: linea4,
        //	LINEA5: linea5,
        //	LINEA6: linea6,
        //	COMENTARIO: comentario,
        //	PATOLOGIAOBSTETRICA: patologiaObstetrica,
        //}

        //$.post(serverURL + "pdf/crecimiento", valores).done(function (data) {
        //	event.preventDefault();
        //	var ventimp = window.open(" ","popimpr");
        //	ventimp.document.write(data);
        //	ventimp.document.close();
    //	ventimp.show();
    //});
}

function crearInformeEcoSegTrim2(){
    var actCard;
    var movCorp;

    elem=document.getElementsByName('accard');
    for(i=0;i<elem.length;i++)
        if (elem[i].checked) {
            actCard = elem[i].value;
        }

    elem=document.getElementsByName('movfet');
    for(i=0;i<elem.length;i++)
        if (elem[i].checked) {
            movCorp = elem[i].value;
        }

    if (actCard = 0){
        actCard = "sin actividad cardiaca";
    }
    else
    {
        actCard = "con actividad cardiaca";
    }
    if (movCorp = 0){
        movCorp = "sin movimientos corporales";
    }
    else
    {
        movCorp = "con movimientos corporales";
    }

    var p50 = $('#egP50').val() + ' semanas';
    var lh =  $( '#lh').val() + ' mm';
    var lhRango =  '( ' + $( '#lhRango').val() + ' )';
    var fur = $("#input\\.paciente\\.fum\\.examen").val();
    var fexamen = $("#input\\.paciente\\.fe\\.ecoseg").val();
    var eg = $("#eco\\.seg\\.eg").val();
    var fpp = $( "#input\\.paciente\\.fpp\\.examen").val();
    var dbp = $( '#dbp').val() + ' mm';
    var dbpRango = '( ' + $( '#dbpRango').val() + ' )';
    var dof = $( '#dof').val() + ' mm';
    var dofRango = '( ' + $( '#dofRango').val() + ' )';
    var cc = $( '#cc').val() + ' mm';
    var ccRango = '( ' + $( '#ccRango').val() + ' )';
    var ca = $( '#ca').val() + ' mm';
    var caRango = '( ' + $( '#caRango').val() + ' )';
    var lf = $( '#lf').val() + ' mm';
    var lfRango = '( ' + $( '#lfRango').val() + ' )';
    var ic = $( '#dof-dbp').val();
    var cb = $('#cerebelo').val() + ' mm';
    var cbRango = '( ' + $('#cerebeloRango').val() + ' )';

    var paciente = $( '#nombre-paciente').val() + " " + $( '#apellido-paciente').val();
    var idpaciente = $( '#id-paciente').val();
    var motivo = $( '#motivo-examen option:selected').text();
    var ecografista = $( '#ecografista option:selected').text();
    var edadmaterna = $( "select[name='edad_materna']").val();
    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();

    let fecha = new Date();
    let day = ("0" + fecha.getDate()).slice(-2);
    let month = ("0" + (fecha.getMonth() + 1)).slice(-2);
    var dateInf = (day)+"/"+(month)+"/"+fecha.getFullYear();

    var linea1 = "Feto en presentación " + document.getElementById("presentacion").value + ", dorso " + document.getElementById("dorso").value + ", " + actCard + " y " + movCorp + ".";
        var linea2 = "Frecuencia cardiaca fetal de " + document.getElementById("fcf").value + " x minuto.";
        
    var anatomiaFetal = $('#ev-morfo').val();
    var anatomiaFetalString = "";

    for(i=0;i<anatomiaFetal.length;i++)
    {
        anatomiaFetalString = anatomiaFetalString + anatomiaFetal[i];
        anatomiaFetalString = anatomiaFetalString + " <br>";
    }

    var linea3 = "<strong>Anatomía fetal *</strong>  " + anatomiaFetalString + $('#comentarios-anatomia-informe-eg-texto').val();
    var linea4 = "<strong>Placenta</strong> inserción " + document.getElementById("incersion").value + " y de ubicación " + document.getElementById("ubicacion").value + ", grado " + document.getElementById("grado-placenta").value;
    var linea5 = "<strong>Cordón umbilical</strong> " + document.getElementById("cordon").value + ", identificandose "+ document.getElementById("vasos").value +" vasos.";
    var linea6 = "<strong>Líquido amniótico**</strong> " + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor de " + document.getElementById("bvmEcoDos").value + " mm.";

    var InformeString = "<div class='container'> <h3>Determinación Ecográfica <small>(Tardía)</small> de la Edad Gestacional</h3></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p><p><strong>FUM: </strong> :FUR <br><strong>EG (UPM): </strong> :EG semanas</p></div><div class='container'> <p><strong style='color:#045dab;'>DESCRIPCIÓN</strong> </p><p style='margin-bottom:0;'>:LINEA1 <br>:LINEA2</p><p style='margin-bottom:0; word-wrap: break-word;'>:LINEA3</p><p>:LINEA4 <br>:LINEA5 <br>:LINEA6</p><p></p><p></p></div><div class='container-fluid'> <table class='table'> <tbody> <tr> <th style='line-height:15px !important;color:#045dab;'>BIOMETRIA FETAL</th> <th style='text-align:center;'>Valor observado</th> <th style='text-align:center;'>Referencia para Edad</th> </tr><tr> <td>DBP (Hadlock):</td><td style='text-align:center;'>:DBP</td><td style='text-align:center;'>:DBPRANGO</td></tr><tr> <td>DOF (Jeanty):</td><td style='text-align:center;'>:DOF</td><td style='text-align:center;'>:DOFRANGO</td></tr><tr> <td>CC (Hadlock):</td><td style='text-align:center;'>:CC</td><td style='text-align:center;'>:CCRANGO</td></tr><tr> <td>CA (Hadlock):</td><td style='text-align:center;'>:CA</td><td style='text-align:center;'>:CARANGO</td></tr><tr> <td>LF (Hadlock):</td><td style='text-align:center;'>:LF</td><td style='text-align:center;'>:LFRANGO</td></tr><tr> <td>LH (Jeanty):</td><td style='text-align:center;'>:LH</td><td style='text-align:center;'>:LHRANGO</td></tr><tr> <td>Cerebelo (Diámetro transverso) (Hill):</td><td style='text-align:center;'>:CB</td><td style='text-align:center;'>:CBRANGO</td></tr><tr> <td style='padding-bottom: 15px !important;'>Indice Cefálico (DBP / DOF)</td><td style='text-align:center;padding-bottom: 15px !important;'>:IC</td><td style='text-align:center;padding-bottom: 15px !important;'>( 70% - 86% )</td></tr><tr> <td style='border-top:1px dashed #045dab;'><strong>Edad gestacional ecográfica (Bp50)</strong> </td><td style='text-align:center;border-top:1px dashed #045dab;'><strong>:P50</strong> </td><td style='text-align:center;border-top:1px dashed #045dab;'><strong>(Para el cálculo de Bp50, se excluye CA.)</strong> </td></tr><tr> <td style='border-top:1px dashed #045dab;'></td><td style='border-top:1px dashed #045dab;'></td><td style='border-top:1px dashed #045dab;'></td></tr></tbody> </table></div><div class='container-fluid'> <p style='padding-bottom:0px;margin-bottom:0px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container-fluid'> <p class='text-right top40' style='margin-right:100px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina' style='margin-bottom:0;'><strong>* Para la evaluación morfológica fetal, ceñirse a recomendaciones oficiales vigentes, para Chile: Guías Perinatales MINSAL 2015</strong> <br>Ver dirección web: http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf <br>** Referencia para medición de líquido amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000</p><p style='margin-bottom:0 !important;' class='pie-pagina-dos'>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong> </p></div>";

    var comentario = $('#comentarios-eco-dos-inf-dos').val()
    if (typeof comentario !== 'undefined'){
        comentario = comentario.replace(/\r?\n/g, "<br>");
    }
    else{
        comentario='';
    }

    InformeString = InformeString.replace(":PACIENTE", paciente);
    InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
    InformeString = InformeString.replace(":MOTIVO", motivo);
    InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
    InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);

    InformeString = InformeString.replace(":FUR", fur);
    InformeString = InformeString.replace(":FEXAMEN", fexamen);
    InformeString = InformeString.replace(":EG", eg);
    InformeString = InformeString.replace(":FPP", fpp);
    InformeString = InformeString.replace(":DBP", dbp);
    InformeString = InformeString.replace(":DBPRANGO", dbpRango);
    InformeString = InformeString.replace(":DOF", dof);
    InformeString = InformeString.replace(":DOFRANGO", dofRango);
    InformeString = InformeString.replace(":CC", cc);
    InformeString = InformeString.replace(":CCRANGO", ccRango);
    InformeString = InformeString.replace(":CA", ca);
    InformeString = InformeString.replace(":CARANGO", caRango);
    InformeString = InformeString.replace(":LF", lf);
    InformeString = InformeString.replace(":LFRANGO", lfRango);
    InformeString = InformeString.replace(":LH", lh);
    InformeString = InformeString.replace(":LHRANGO", lhRango);
    InformeString = InformeString.replace(":IC", ic);
    InformeString = InformeString.replace(":CB", cb);
    InformeString = InformeString.replace(":CBRANGO", cbRango);
    InformeString = InformeString.replace(":COMENTARIO", comentario);
    InformeString = InformeString.replace(":P50", p50);

    InformeString = InformeString.replace(":LINEA1", linea1);
    InformeString = InformeString.replace(":LINEA2", linea2);
    InformeString = InformeString.replace(":LINEA3", linea3);
    InformeString = InformeString.replace(":LINEA4", linea4);
    InformeString = InformeString.replace(":LINEA5", linea5);
    InformeString = InformeString.replace(":LINEA6", linea6);
    InformeString = InformeString.replace(":DATEINFORME", dateInf);
    InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);

    imprInforme(InformeString);
}

function crearInformeDoppler(){

    var InformeString = "<div class='container'> <h3>Evaluación de flujometria doppler materno fetal</h3></div><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span><div class='container'> <p><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN</p><p><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p><p><strong>FUM: </strong> :FUM <br><strong>Ege: </strong> :EG semanas <br><strong>FPP: </strong> :FPP</p></div><div class='container'> <p><strong style='color:#045dab;'>ANTECEDENTES</strong> <small>(Descripción general del feto y anexos ovulares)</small> </p><p>Motivo del exámen: :MOTIVODOPPLER <br>Antecedentes Obstétricos: :ANTECEDENTES <br>Feto en Presentación: :PRESENTACION <br>Motilidad Fetal: :MOTILIDAD <br>Ubicación Placentaria: :UBICACION <br>Líquido Amniótico***: :LIQUIDO <br>Medida única de BVM***: :BVM</p></div><div class='container'> <table class='table'> <thead> <tr> <th style='color:#045dab;'>FLUJOMETRIA DOPPLER</th> <th style='text-align:center;'>IP Observado</th> <th style='text-align:center;'>Percentiles de IP</th> <th style='text-align:center;'>Referencia para Edad</th> </tr></thead> <tbody> <tr> <td>Arteria Uterina Derecha*</td><td style='text-align:center;'>:UD</td><td style='text-align:center;'>:UDTXT</td><td style='text-align:center;'>:UDRGO</td></tr><tr> <td>Arteria Uterina Izquierda*</td><td style='text-align:center;'>:UI</td><td style='text-align:center;'>:UITXT</td><td style='text-align:center;'>:UIRGO</td></tr><tr> <td style='border-top: 1px dashed #045dab;'>Promedio Arterias Uterinas*</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:UPROM</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:UPROMTXT</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:UPROMRGO</td></tr><tr> <td style='padding-top: 15px !important;border-top: 1px dashed #045dab;'>Arteria Umbilical**</td><td style='text-align:center;padding-top: 15px !important;border-top: 1px dashed #045dab;'>:AU</td><td style='text-align:center;padding-top: 15px !important;border-top: 1px dashed #045dab;'>:AUTXT</td><td style='text-align:center;padding-top: 15px !important;border-top: 1px dashed #045dab;'>:AURGO</td></tr><tr> <td style='padding-bottom: 15px !important;'>Arteria Cerebral Media**</td><td style='text-align:center;padding-bottom: 15px !important;'>:ACM</td><td style='text-align:center;padding-bottom: 15px !important;'>:ACMTXT</td><td style='text-align:center;padding-bottom: 15px !important;'>:ACMRGO</td></tr><tr> <td style='border-top: 1px dashed #045dab;'>Cuociente Cerebro Placentario ( CCP )**</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:CCP</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:CCPTXT</td><td style='text-align:center;border-top: 1px dashed #045dab;'>:CCPRGO</td></tr><tr> <td style='border-top: 1px dashed #045dab;'></td><td style='border-top: 1px dashed #045dab;'></td><td style='border-top: 1px dashed #045dab;'></td><td style='border-top: 1px dashed #045dab;'></td></tr></tbody> </table></div><div class='container'> <p style='padding-bottom:0px;margin-bottom:0px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> <small>&nbsp;&nbsp;&nbsp;(Espacio a completar por el ecografista)</small> </p><p style='max-width: 700px;text-align: justify;'>:COMENTARIO</p></div><div class='container'> <p class='text-right top40' style='margin-right:100px;'>Ecografista Dr(a): :ECOGRAFISTA</p><span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p>Fecha Informe: :DATEINFORME</p><span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina'>* Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32 <br>** Referencia para Doppler de arteria umbilical, C Media y CCP; Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127 <br>*** Referencia para Liq. Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000</p><p class='pie-pagina-dos'>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong> </p></div>";

    var paciente = $( '#nombre-paciente').val() + " " + $( '#apellido-paciente').val();
    var idpaciente = $( '#id-paciente').val();
    var motivo = $( '#motivo\\.examen option:selected').text();
    var ecografista = $( '#profesional\\.ecografista option:selected').text();

    var fur = $("#input\\.paciente\\.fum\\.examen").val();
    var fexamen = $("#input\\.paciente\\.fe\\.doppler").val();
    var eg = $("#eco\\.doppler\\.eg").val();
    var fpp = $( "#input\\.paciente\\.fpp\\.examen").val();

    var bvm = $('#bvmDoppler').val();
    var comentario = $("#comentarios-doppler").val();
    if (typeof comentario !== 'undefined'){
        comentario = comentario.replace(/\r?\n/g, "<br>");
    }
    else{
        comentario='';
    }

    var motivoDoppler = $( '#motivo-doppler').val();
    var antecedentes = $( '#antecedentes-doppler').val();
    var motilidad = $( '#motilidad-doppler').val();
    var ubicacion = $( '#ubicacion-doppler').val();
    var liquido = $( '#liqAmnioDoppler').val();
    var ud = $( '#aud').val();
    var udTxt = $( '#audPctTxt').val();
    var udRgo = '( ' + $( '#audRngo').val() + ' )';
    var ui = $( '#aui').val();
    var uiTxt = $( '#auiPctTxt').val();
    var uiRgo = '( ' + $( '#auiRngo').val() + ' )';
    var uprom = '<strong>' + $( '#auprom').val() + '</strong>';
    var upromTxt = '<strong>' + $( '#auPctTxt').val() + '</strong>';
    var upromRgo = '<strong>( ' + $( '#auRngo').val() + ' )</strong>';
    var au = $( '#ipau').val();
    var auTxt = $( '#ipauPctTxt').val();
    var auRgo = '( ' + $( '#ipauRngo').val() + ' )';
    var acm = $( '#ipacm').val();
    var acmTxt = $( '#ipacmPctTxt').val();
    var acmRgo = '( ' + $( '#ipacmRngo').val() + ' )';
    var ccp = '<strong>' + $( '#ccp').val() + '</strong>';
    var ccpTxt = '<strong>' + $( '#ccpPctTxt').val() + '</strong>';
    var ccpRgo = '<strong>( ' + $( '#ccpRngo').val() + ' )</strong>';
    var presentacion = $("#presentacion-doppler").val();
    var edadmaterna = $( "select[name='edad_materna']").val();

    let fecha = new Date();
    let day = ("0" + fecha.getDate()).slice(-2);
    let month = ("0" + (fecha.getMonth() + 1)).slice(-2);
    var dateInf = (day)+"/"+(month)+"/"+fecha.getFullYear();
    var patologiaObstetrica = $( '#patologiaObstetricaUno option:selected').text();

    InformeString = InformeString.replace(":PACIENTE", paciente);
    InformeString = InformeString.replace(":IDPACIENTE", idpaciente);
    InformeString = InformeString.replace(":MOTIVO", motivo);
    InformeString = InformeString.replace(":ECOGRAFISTA", ecografista);
    InformeString = InformeString.replace(":EDADMATERNA", edadmaterna);

    InformeString = InformeString.replace(":FUM", fur);
    InformeString = InformeString.replace(":FEXAMEN", fexamen);
    InformeString = InformeString.replace(":EG", eg);
    InformeString = InformeString.replace(":FPP", fpp);

    InformeString = InformeString.replace(":MOTIVODOPPLER", motivoDoppler);
    InformeString = InformeString.replace(":ANTECEDENTES", antecedentes);
    InformeString = InformeString.replace(":MOTILIDAD", motilidad);
    InformeString = InformeString.replace(":UBICACION", ubicacion);
    InformeString = InformeString.replace(":LIQUIDO", liquido);
    InformeString = InformeString.replace(":PRESENTACION", presentacion);
    InformeString = InformeString.replace(":BVM", bvm);
    InformeString = InformeString.replace(":UD", ud);
    InformeString = InformeString.replace(":UDRGO", udRgo);
    InformeString = InformeString.replace(":UDTXT", udTxt);
    InformeString = InformeString.replace(":UI", ui);
    InformeString = InformeString.replace(":UIRGO", uiRgo);
    InformeString = InformeString.replace(":UITXT", uiTxt);
    InformeString = InformeString.replace(":UPROM", uprom);
    InformeString = InformeString.replace(":UPROMRGO", upromRgo);
    InformeString = InformeString.replace(":UPROMTXT", upromTxt);
    InformeString = InformeString.replace(":AU", au);
    InformeString = InformeString.replace(":AURGO", auRgo);
    InformeString = InformeString.replace(":AUTXT", auTxt);
    InformeString = InformeString.replace(":ACM", acm);
    InformeString = InformeString.replace(":ACMRGO", acmRgo);
    InformeString = InformeString.replace(":ACMTXT", acmTxt);
    InformeString = InformeString.replace(":CCP", ccp);
    InformeString = InformeString.replace(":CCPRGO", ccpRgo);
    InformeString = InformeString.replace(":CCPTXT", ccpTxt);
    InformeString = InformeString.replace(":COMENTARIO", comentario);
    InformeString = InformeString.replace(":DATEINFORME", dateInf);
    InformeString = InformeString.replace(":PATOLOGIAOBSTETRICA", patologiaObstetrica);

    imprInforme(InformeString);
}

function imprInforme(muestra)
{
	var ficha= muestra;
	var document = '<!DOCTYPE html><html lang="es-CL"><head><meta charset="utf-8"><title>Impresión de Gráficos</title><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel="stylesheet" href="consulta.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">:ESTILO</head><body><div class="container"><div style="width:35%;text-align:center;" class="membrete">:MEMBRETE</div></div><div class="container" style="margin-top:50px !important;">:DATOS</div>:FUNCION</body></html>';
	var ventimp = window.open(" ","popimpr");
	var estilo = '<style>@media print{*{margin:0;padding:0;border:0}p,th,td{font-size:11px;line-height:17px;margin-bottom:7px}th,td{margin:0 !important;padding:0 !important}.pie-pagina{font-size:9px}.pie-pagina-dos{font-size:10px}#lineclear{clear:both}h3{font-size:130%;text-align:center}h3::first-letter{font-size:100%}.membrete::first-letter{font-size:14px;}.membrete::first-line{font-size:14px;}.membrete{font-size:10px;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	//var membrete = $("#membrete").val().replace(/\r\n|\r|\n/g,"<br />");
	
	document = document.replace(":DATOS", ficha);
	document = document.replace(":ESTILO", estilo);
	document = document.replace(":FUNCION", funcion);
	document = document.replace(new RegExp('invisible', 'g'), "");
	document = document.replace(":MEMBRETE", "");
	//document = document.replace(":MEMBRETE", membrete);
	
	ventimp.document.write(document);
	ventimp.document.close();
	ventimp.show();
}

function imprSelec(muestra)
{
	var ficha=$("#"+muestra).html();
	var document = '<!DOCTYPE html><html lang="es-CL"><head><meta charset="utf-8"><title>Impresión de Gráficos</title><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel="stylesheet" href="consulta.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">:ESTILO</head><body><div class="container"><div style="width:35%;text-align:center;" class="membrete">:MEMBRETE</div></div><div class="container" style="margin-top:50px !important;">:DATOS</div>:FUNCION</body></html>';
	var ventimp= window.open(" ","popimpr");
	var estilo = '<style>@media print {.col{width:40%; height:30% float:left;}.text-center{text-align:center;}.pie-pagina{font-size:9px;}.pie-pagina-dos{font-size:10px;}#lineclear{clear:both;}h4{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;}.membrete::first-letter{font-size:14px;}.membrete::first-line {font-size: 14px;}.membrete {font-size: 10px;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	//var membrete = $("#membrete").val().replace(/\r\n|\r|\n/g,"<br />");
    
    let fecha = new Date();
    let day = ("0" + fecha.getDate()).slice(-2);
    let month = ("0" + (fecha.getMonth() + 1)).slice(-2);
    var dateInf = (day)+"/"+(month)+"/"+fecha.getFullYear();
	
	document = document.replace(":DATOS", ficha);
	document = document.replace(":DATEINFORME", dateInf);
	document = document.replace(":ESTILO", estilo);
	document = document.replace(":FUNCION", funcion);
	document = document.replace(new RegExp('d-none', 'g'), "");
	//document = document.replace(":MEMBRETE", membrete);
	document = document.replace(":MEMBRETE", "");
	
	ventimp.document.write(document);
	ventimp.document.close();
	ventimp.show();
}

$('#infadicionalNoController').on('click', function(){
	if ($('#infadicionalView').hasClass('d-none') == false){
		$('#infadicionalView').addClass('d-none');
		$('#continuarExamenEcografico').removeClass('d-none');
	}
});

$('#infadicionalSiController').on('click', function(){
	$('#infadicionalView').removeClass('d-none');
	$('#continuarExamenEcografico').addClass('d-none');
});

function getDCM(RUTPACIENTE, FechaExm){
    FechaExm = epochToDate(FechaExm);
    let mes = FechaExm.getMonth() + 1;

    if (mes < 10){
        mes = "0" + mes;
    }

    $.get(serverURL + "configuracion/obtenerexamenes/" + RUTPACIENTE + "/" + FechaExm.getFullYear() + mes + FechaExm.getDate()).done(function(data) {
        if (data.exist == true ){
            StudyDate =  data.StudyDate;
            $.get(serverURL + "dicom/getimages/" + RUTPACIENTE + "/" + StudyDate).done(function(data) {
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
}

function bvmEcoDos() {

    var pct5 = [];
    var pct95 = [];
   
       pct5[0] = 23;    pct5[1] = 25;    pct5[2] = 27;    pct5[3] = 28;
       pct5[4] = 29;    pct5[5] = 29;    pct5[6] = 30;    pct5[7] = 30;
       pct5[8] = 30;    pct5[9] = 30;    pct5[10] = 30;    pct5[11] = 30;
       pct5[12] = 30;    pct5[13] = 29;    pct5[14] = 29;    pct5[15] = 29;
       pct5[16] = 29;    pct5[17] = 29;    pct5[18] = 28;    pct5[19] = 28;
       pct5[20] = 27;    pct5[21] = 26;    pct5[22] = 24;    pct5[23] = 23;
       pct5[24] = 21;
   
        pct95[0] = 59;     pct95[1] = 62;     pct95[2] = 64;     pct95[3] = 66;
        pct95[4] = 67;     pct95[5] = 68;     pct95[6] = 68;     pct95[7] = 68;
        pct95[8] = 68;     pct95[9] = 68;     pct95[10] = 68;     pct95[11] = 69;
        pct95[12] = 69;     pct95[13] = 69;     pct95[14] = 69;     pct95[15] = 70;
        pct95[16] = 71;     pct95[17] = 72;     pct95[18] = 72;     pct95[19] = 72;
        pct95[20] = 71;     pct95[21] = 70;     pct95[22] = 68;     pct95[23] = 66;
        pct95[24] = 62;
   
    var eg=0;
    var bvm=0;
    
    eg=parseFloat(localStorage.eg);
    bvm=parseInt($("#bvmEcoDos").val());
    
    if (eg < 16) {  
     //
    }
    else if (eg > 40)
    {
      //
    }
    else {
     eg = eg - 16;
     eg = parseInt(eg);
     if ( bvm <= pct5[eg]){
        $("#liq-cualitativo-eco").val("disminuido"); 
     }
     else if ( bvm <= pct95[eg]){
         $("#liq-cualitativo-eco").val("normal");
     }
     else{
         $("#liq-cualitativo-eco").val("aumentado");
     }
    }
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
        $(this).datepicker('hide');
    });
    //establecer la fecha de exámen
    let fecha = new Date();
    let day = ("0" + fecha.getDate()).slice(-2);
	let month = ("0" + (fecha.getMonth() + 1)).slice(-2);

    $("#input\\.paciente\\.fe").val((day)+"/"+(month)+"/"+fecha.getFullYear());
    $('#input\\.paciente\\.fe').datepicker();
	$('#input\\.paciente\\.fe').datepicker().on('changeDate', function(ev){
        $("#input\\.paciente\\.fum").trigger("change");
        $(this).datepicker('hide');
    });
    $('#input\\.paciente\\.fe').datepicker('setValue', (day)+"/"+(month)+"/"+fecha.getFullYear());
    //establecer fecha para examen de primer trimestre
    $("#input\\.paciente\\.fe\\.ecoprim").val((day)+"/"+(month)+"/"+fecha.getFullYear());

    //establecer fecha para examen de segundo, tercer trimestre
    $("#input\\.paciente\\.fe\\.ecoseg").val((day)+"/"+(month)+"/"+fecha.getFullYear());

    //establecer fecha para examen de doppler
    $("#input\\.paciente\\.fe\\.doppler").val((day)+"/"+(month)+"/"+fecha.getFullYear());

    //cargar patología obstétrica
    $.get( serverURL + "configuracion/motivoexamen", function( data ) {
        $("#motivo\\.examen").empty();
        $.each(data, function (key, des) {
            $("#motivo\\.examen").append('<option value="'+ des.motivo_id + '">'+ des.motivo_name  +'</option>');
        });
    });

    //cargar patología obstétrica
    //$.get( serverURL + "configuracion/patologiaobstetrica", function( data ) {
    //    $("#tipo\\.examen\\.previo").empty();
    //    $("#motivo\\.examen").empty();
    //    $.each(data, function (key, des) {
    //        $("#motivo\\.examen").append('<option value="'+ des.patologia_id + '">'+ des.patologia_name  +'</option>');
    //        $("#tipo\\.examen\\.previo").append('<option value="'+ des.patologia_id + '">'+ des.patologia_name  +'</option>');
    //    });
    //});

    //cargar profesional
    $.get( serverURL + "configuracion/profesional", function( data ) {
        $("#profesional\\.ecografista").empty();
        $.each(data, function (key, des) {
            $("#profesional\\.ecografista").append('<option value="'+ des.profesional_id + '">'+ des.profesional_name  +'</option>');
        });
    });

    //cargar profesional referente
    $.get( serverURL + "configuracion/profesionalreferente", function( data ) {
        $("#profReferente").empty();
        $.each(data, function (key, des) {
            $("#profReferente").append('<option value="'+ des.profesional_id + '">'+ des.profesional_name  +'</option>');
        });
    });

    //cargar profesional referente
    $.get( serverURL + "configuracion/hospital", function( data ) {
        $("#lugar\\.control\\.prenatal").empty();
        $.each(data, function (key, des) {
            $("#lugar\\.control\\.prenatal").append('<option value="'+ des.hospital_id + '">'+ des.hospital_name  +'</option>');
        });
    });

    $.get( serverURL + "configuracion/getemails", function( data ) {
        $("#paciente\\.correo\\.config").empty();
        $.each(data, function (key, des) {
            let strSelect = "<option value='" + des.email_text +"'>" + des.email_text + "</option>";
            $("#paciente\\.correo\\.config").append(strSelect);
        });
    });
}