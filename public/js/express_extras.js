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

function appClean(){
    
}