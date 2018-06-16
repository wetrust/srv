//funciones
//from https://stackoverflow.com/questions/17907445/how-to-detect-ie11
function isIE() { return ((navigator.appName == 'Microsoft Internet Explorer') || ((navigator.appName == 'Netscape') && (new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null))); }

$( '#adicionalCrecimientoView' ).on( 'click', function() {
	if ($('#adicionalCrecimiento').css( "display" ) == 'none'){
		$('#adicionalCrecimiento').show();
	}
	else{
		$('#adicionalCrecimiento').hide();
	}
});

$('#partos').on("change", function(){
	if ($(this).val() > 0){
		$('#itemGestasPrevias').removeClass("d-none");
	}
	else{
		$('#itemGestasPrevias').addClass("d-none");
	}
});

$( '#mensajeRestringido' ).on( 'click', function() {
	$('#popupTitle').html("Sección restringida, solo disponible para usuarios capacitados en la plataforma.");
	//remueve los botones de imprimir en caso de que estén
	$( '#impEcoObsSegTrim2').remove();
	$( '#impEcoObsSegTrim1').remove();
	$( '#impDoppler3').remove();
	$( '#impDoppler2').remove();
	$( '#impDoppler1').remove();
	$( '#impDoppler1').remove();
        $('#popupBody').html("<form><h5 class='text-center'>Formulario solicitud de ingreso</h5><div class='row'><div class='form-group col'> <label for='contact-name'>Nombre, Apellido</label> <input type='text' class='form-control' id='contact-name'> </div><div class='form-group col'> <label for='contact-id'>RUT o DNI</label> <input type='text' class='form-control' id='contact-id'> </div></div><div class='row'><div class='form-group col'> <label for='contact-country'>Nacionalidad</label> <input type='text' class='form-control' id='contact-country'> </div><div class='form-group col'> <label for='contact-job-location'>Pais</label> <input type='text' class='form-control' id='contact-job-location'> </div></div><div class='row'><div class='form-group col'> <label for='contact-grade'>Año de título profesional</label> <input type='text' class='form-control' id='contact-grade'> </div><div class='form-group col'> <label for='contact-register'>N° de registro profesional</label> <input type='text' class='form-control' id='contact-register'> </div></div><div class='row'><div class='form-group col'> <label for='contact-expertise'>Años de experiencia en US Obstétrico</label> <input type='text' class='form-control' id='contact-expertise'> </div><div class='form-group col'> <label for='contact-job'>Profesión</label> <select class='form-control' id='contact-job'> <option>Médico con especialidad en perinatología</option> <option>Médico con especialidad en gineco-obstetricia</option> <option>Médico sin especialidad en gineco-obstetricia</option> <option>Médico en formación de la especialidad</option> <option>Otros, ultrosonografistas gineco - obstétrico</option> </select> </div></div><div class='row'><div class='form-group col'> <label for='contact-phone'>Teléfono de contacto</label> <input type='number' class='form-control' id='contact-phone'> </div><div class='form-group col'> <label for='contact-email'>Correo electrónico</label> <input type='email' class='form-control' id='contact-email'> <small id='emailHelp' class='form-text text-muted'>Nunca compartiremos tu correo con terceros</small></div></div><div class='row'><div class='col'><h5>Lugar de desempeño laboral</h5></div></div><div class='row'><div class='form-group col'> <label for='contact-city'>Ciudad</label> <input type='text' class='form-control' id='contact-city'> </div><div class='form-group col'> <label for='contact-ss'>Servicio de salud / Clínica</label>  <input type='text' class='form-control' id='contact-ss'></div><div class='form-group col'><label for='contact-h'>Hospital / Unidad académica</label>   <input type='text' class='form-control' id='contact-h'></div></div><div class='row'><div class='form-group col'> <label for='contact-consultorio'>Consultorio público</label> <input type='text' class='form-control' id='contact-consultorio'> </div><div class='form-group col'> <label for='contact-private-job'>Consulta privada</label> <input type='text' class='form-control' id='contact-private-job'> </div></div><div class='form-group'> <label for='contact-comments'>Comentarios y sugerencias</label> <input type='text' class='form-control' id='contact-comments'> </div></form>");
	$( "#contact-name" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-id").focus()
	  }
	});
	
	$( "#contact-id" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-country").focus()
	  }
	});
	
	$( "#contact-country" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-job-location").focus()
	  }
	});
	$( "#contact-job" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-city").focus()
	  }
	});
	$( "#contact-grade" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-register").focus()
	  }
	});
	
	$( "#contact-register" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-expertise").focus()
	  }
	});
	$( "#contact-expertise" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-job").focus()
	  }
	});
	$( "#contact-job-location" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-grade").focus()
	  }
	});
	$( "#contact-city" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-phone").focus()
	  }
	});
	$( "#contact-phone" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-email").focus()
	  }
	});
	$( "#contact-email" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-ss").focus()
	  }
	});
	$( "#contact-ss" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-h").focus()
	  }
	});
	$( "#contact-h" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-consultorio").focus()
	  }
	});
	$( "#contact-consultorio" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-private-job").focus()
	  }
	});
	$( "#contact-private-job" ).keypress(function( event ) {
	  if ( event.which == 13 ) {
	     event.preventDefault();
	     $("#contact-comments").focus()
	  }
	});
	$('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler1'>Genere PDF y envíe solicitud de ingreso</button>");
	$( '#impDoppler1').on("click", function(){
	      //crearInformeEcoPrimTrim();
	});
	$('#popupGenerico').modal('show');
});

$('#cccaController').on('click', function(){

	if ($('#cccaView').hasClass('d-none')){
		$('#cccaView').removeClass('d-none');
	}
	else{
		$('#cccaView').addClass('d-none');
	}

});

$("#saveMebrete").on("click", function(event){
	event.preventDefault();
	var configuracion = JSON.parse(localStorage["configuracion"]);
	var membrete = $('#membrete').val();
	configuracion.configuracion.membrete = membrete;
	
	localStorage["configuracion"] = JSON.stringify(configuracion);
});

//enters
$( "#lcn" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $('#lcn').trigger("change");
     var eg = localStorage.eg;
     $('#furReferida').val($("input[name='fum']").val());
     $('#egReferida').val(eg);
     $('#fppReferida').val($("input[name='fpp']").val());
     var LCN = parseInt($('#lcn').val());
     
     if (isNaN(LCN) | LCN < 0 | isNaN(eg) | eg < 1) {
         $('#diferenciaEcoPrimTrim').html('La diferencia observada entre edad gestacional por FUM referida y la edad por ecografia es de 0 días.');
         $('#preguntaAjusteEcoPrimTrim').hide();
     }
     else{
	var EGLCN = parseFloat($('#lcnPct').val());
	var eg1 = new Number((Math.floor(EGLCN) * 7) + Math.round((EGLCN - Math.floor(EGLCN)) * 7));
	var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
	var diferencia = Math.abs(Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
	$('#diferenciaEcoPrimTrim').html('La diferencia observada entre edad gestacional por FUM referida y la edad por exámen ecografico es de ' + diferencia + ' días.');
        $('#preguntaAjusteEcoPrimTrim').show();
	$('#resultadoAjusteEcoPrimTrim').show();
	     
	var LCN = parseInt($('#lcn').val());
	var eg = localStorage.eg;
	var oneday = 1000 * 60 * 60 * 24;
			
	if (isNaN(LCN) | LCN < 0 | isNaN(eg) | eg < 1) {
		$('#popupTitle').html("Información");
		$('#popupBody').html("<p>El paciente debe tener una Edad Gestacional y un valor en LCN o Saco Gestacional</p>");
		$('#popupGenerico').modal('show');
	}
	else{
		var EGLCN = parseFloat($('#lcnPct').val());
		var eg1 = new Number((Math.floor(EGLCN) * 7) + Math.round((EGLCN - Math.floor(EGLCN)) * 7));
		var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
		var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
		diferencia = diferencia * oneday;
		var FUM = localStorage.fum;
		FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
		FUM = new Date (FUM);
		var B = new Date();
  		B.setTime(FUM.getTime() + diferencia);
		$('#furAjustada').val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
		var undia = 1000 * 60 * 60 * 24;
		var unasemana = undia * 7;
		var FExamen = localStorage.fee;
		FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
		FExamen = new Date (FExamen);
		var EdadGestacional = ((FExamen.getTime() - B.getTime()) / unasemana).toFixed(1);
		$('#egAjustada').val(EdadGestacional);
		var C = new Date();
		C.setTime(B.getTime() + (40 * unasemana)); 
		$('#fppAjustada').val(C.getDate()+"/"+(C.getMonth()+1)+"/"+C.getFullYear());
	}  
        $("#graficoLcn").focus()
     }
  }
});

$( "#saco" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
     $('#saco').trigger("change");
     var eg = parseFloat($("input[name='eg']").val());
     var EGsaco = parseFloat($('#sacoPct').val());
     var eg1 = new Number((Math.floor(EGsaco) * 7) + Math.round((EGsaco - Math.floor(EGsaco)) * 7));
     var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
     var diferencia = Math.abs(Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
     $('#diferenciaEcoPrimTrim').html('La diferencia observada entre edad gestacional por FUM referida y la edad por exámen ecografico es de ' + diferencia + ' días.<br><small>La determinación de edad gestacional ecográfica y ajuste a edad gestacional real, ha de realizarse solo una vez lograda la medición embrionaria (LCN).</small>');
     $('#preguntaAjusteEcoPrimTrim').hide();
     $("#graficoSaco").focus();
  }
});



function show_hide(id){
  if (document.getElementById){
    var el = document.getElementById(id);
    el.style.display = (el.style.display == 'none') ? 'block' : 'none';
  }
};


$( '#embarazoNo' ).on( 'click', function() {
	$("div[name='embarazo']").addClass("d-none");
});

$( '#embarazoSi' ).on( 'click', function() {
	$("div[name='embarazo']").removeClass("d-none");
});

$( '#semanasEcoPrim' ).on( 'change', function() {
	var semanas = $(this).val();
	var dias = $('#diasEcoPrim').val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;

	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	localStorage.eg = semanas + "." + dias;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	$("input[name='eg']").val(localStorage.eg);
	$('#semanasEcoObs').val(semanas);
	$('#diasEcoObs').val(dias);
	$('#semanasEcoDopp').val(semanas);
	$('#diasEcoDopp').val(dias);
	$( '#semanasTipoEco' ).val(semanas);
	$( '#diasTipoEco' ).val(dias);
});

$( '#diasEcoPrim' ).on( 'change', function() {
	var semanas = $('#semanasEcoPrim').val();
	var dias = $(this).val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;
	
	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	localStorage.eg = semanas + "." + dias;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	$("input[name='eg']").val(localStorage.eg);
	$('#semanasEcoObs').val(semanas);
	$('#diasEcoObs').val(dias);
	$('#semanasEcoDopp').val(semanas);
	$('#diasEcoDopp').val(dias);
	$( '#semanasTipoEco' ).val(semanas);
	$( '#diasTipoEco' ).val(dias);
});

$( '#semanasEcoGen' ).on( 'change', function() {
	var semanas = $(this).val();
	var dias = $('#diasEcoGen').val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;
	
	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	localStorage.eg = semanas + "." + dias;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	$("input[name='eg']").val(localStorage.eg);
	$('#semanasEcoObs').val(semanas);
	$('#diasEcoObs').val(dias);
	$('#semanasEcoDopp').val(semanas);
	$('#diasEcoDopp').val(dias);
	$( '#semanasTipoEco' ).val(semanas);
	$( '#diasTipoEco' ).val(dias);
	$('#semanasEcoPrim').val(semanas);
        $( '#diasEcoPrim' ).val(dias);
});

$( '#diasEcoGen' ).on( 'change', function() {
	var semanas = $('#semanasEcoGen').val();
	var dias = $(this).val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;
	
	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	localStorage.eg = semanas + "." + dias;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	$("input[name='eg']").val(localStorage.eg);
	$('#semanasEcoObs').val(semanas);
	$('#diasEcoObs').val(dias);
	$('#semanasEcoDopp').val(semanas);
	$('#diasEcoDopp').val(dias);
	$( '#semanasTipoEco' ).val(semanas);
	$( '#diasTipoEco' ).val(dias);
	$('#semanasEcoPrim').val(semanas);
        $( '#diasEcoPrim' ).val(dias);
});

$( '#semanasTipoEco' ).on( 'change', function() {
	var semanas = $(this).val();
	var dias = $('#diasTipoEco').val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;
	
	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	localStorage.eg = semanas + "." + dias;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	$("input[name='eg']").val(localStorage.eg);
	$( '#semanasEcoGen' ).val(semanas);
	$( '#diasEcoGen' ).val(dias);
	$('#semanasEcoObs').val(semanas);
	$('#diasEcoObs').val(dias);
	$('#semanasEcoDopp').val(semanas);
	$('#diasEcoDopp').val(dias);
	$('#semanasEcoPrim').val(semanas);
        $( '#diasEcoPrim' ).val(dias);
});

$( '#diasTipoEco' ).on( 'change', function() {
	var semanas = $('#semanasTipoEco').val();
	var dias = $(this).val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;
	
	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	localStorage.eg = semanas + "." + dias;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	$("input[name='eg']").val(localStorage.eg);
	$( '#semanasEcoGen' ).val(semanas);
	$( '#diasEcoGen' ).val(dias);
	$('#semanasEcoObs').val(semanas);
	$('#diasEcoObs').val(dias);
	$('#semanasEcoDopp').val(semanas);
	$('#diasEcoDopp').val(dias);
	$('#semanasEcoPrim').val(semanas);
        $( '#diasEcoPrim' ).val(dias);
});


$( '#semanasEcoObs' ).on( 'change', function() {
	var semanas = $(this).val();
	var dias = $('#diasEcoObs').val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;
	
	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	localStorage.eg = semanas + "." + dias;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	$("input[name='eg']").val(localStorage.eg);
	$('#semanasEcoGen').val(semanas);
	$('#diasEcoGen').val(dias);
	$('#semanasEcoDopp').val(semanas);
	$('#diasEcoDopp').val(dias);
	$( '#semanasTipoEco' ).val(semanas);
	$( '#diasTipoEco' ).val(dias);
	$('#semanasEcoPrim').val(semanas);
        $( '#diasEcoPrim' ).val(dias);
});

$( '#diasEcoObs' ).on( 'change', function() {
	var semanas = $('#semanasEcoObs').val();
	var dias = $(this).val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;
	
	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	localStorage.eg = semanas + "." + dias;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	$("input[name='eg']").val(localStorage.eg);
	$('#semanasEcoGen').val(semanas);
	$('#diasEcoGen').val(dias);
	$('#semanasEcoDopp').val(semanas);
	$('#diasEcoDopp').val(dias);
	$( '#semanasTipoEco' ).val(semanas);
	$( '#diasTipoEco' ).val(dias);
	$('#semanasEcoPrim').val(semanas);
        $( '#diasEcoPrim' ).val(dias);
});

$( '#semanasEcoDopp' ).on( 'change', function() {
	var semanas = $(this).val();
	var dias = $('#diasEcoDopp').val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;
	
	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	localStorage.eg = semanas + "." + dias;
	$("input[name='eg']").val(localStorage.eg);
	$('#semanasEcoObs').val(semanas);
	$('#diasEcoObs').val(dias);
	$('#semanasEcoGen').val(semanas);
	$('#diasEcoGen').val(dias);
	$( '#semanasTipoEco' ).val(semanas);
	$( '#diasTipoEco' ).val(dias);
	$('#semanasEcoPrim').val(semanas);
        $( '#diasEcoPrim' ).val(dias);
});

$( '#diasEcoDopp' ).on( 'change', function() {
	var semanas = $('#semanasEcoDopp').val();
	var dias = $(this).val();
	var undia = 1000 * 60 * 60 * 24;
	var unasemana = undia * 7;
	
	semanas = semanas * unasemana;
	dias = dias * undia;
	var eg = semanas + dias;
	
	var FExamen = $("input[name='fee']").val();
	FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FExamen = new Date (FExamen);
	
	var B = new Date();
	B.setTime(FExamen.getTime() - eg);
	
	$("input[name='fum']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	var FUM = $("input[name='fum']").val();
	FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
	FUM = new Date (FUM);
	
	B = new Date();
	B.setTime(FUM.getTime() + 40 * unasemana); 
	$("input[name='fpp']").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
	
	localStorage.fum = $("input[name='fum']").val();
    	localStorage.fee = $("input[name='fee']").val();
	semanas = semanas / unasemana;
	dias = dias / undia;
	
	//borrar los colores de las tarjetas
	$("#ecografia\\.uno").removeClass("border-primary");
	$("#ecografia\\.dos").removeClass("border-primary");
	$("#ecografia\\.doppler").removeClass("border-primary");
	//determinar a quien le pongo el color
	if (semanas < 15){
		$("#ecografia\\.uno").addClass("border-primary");
	}
	else{
		$("#ecografia\\.dos").addClass("border-primary");
		$("#ecografia\\.doppler").addClass("border-primary");
	}
	
	localStorage.eg = semanas + "." + dias;
	$("input[name='eg']").val(localStorage.eg);
	$('#semanasEcoObs').val(semanas);
	$('#diasEcoObs').val(dias);
	$('#semanasEcoGen').val(semanas);
	$('#diasEcoGen').val(dias);
	$( '#semanasTipoEco' ).val(semanas);
	$( '#diasTipoEco' ).val(dias);
	$('#semanasEcoPrim').val(semanas);
        $( '#diasEcoPrim' ).val(dias);
});

////////////////////////////////////////////
// Ajuste primer trimestre
//
////////////////////////////////////////////

$("input[name='ajustarEcoPrimTrim']").on("change", function(){
	event.preventDefault();
	if ($(this).is(":checked")){
		if ($(this).val() == 1){
			var LCN = parseInt($('#lcn').val());
			var saco = parseInt($('#saco').val());
			var eg = parseFloat($("input[name='eg']").val());
			var oneday = 1000 * 60 * 60 * 24;
			
			if (isNaN(LCN) | LCN < 0 | isNaN(eg) | eg < 1) {
				if (isNaN(saco) | saco < 0 | isNaN(eg) | eg < 1) {
					$('#popupTitle').html("Información");
					$('#popupBody').html("<p>El paciente debe tener una Edad Gestacional y un valor en LCN o Saco Gestacional</p>");
					$('#popupGenerico').modal('show');
				}
				else{
					var EGsaco = parseFloat($('#sacoPct').val());
					var eg1 = new Number((Math.floor(EGsaco) * 7) + Math.round((EGsaco - Math.floor(EGsaco)) * 7));
					var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
					var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
					diferencia = diferencia * oneday;
					var FUM = localStorage.fum;
					FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
					FUM = new Date (FUM);
					var B = new Date();
  					B.setTime(FUM.getTime() + diferencia);
					$("#fum-tres").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
					$("#fum-tres").trigger("change");
					$('#furAjustada').val($("input[name='fum']").val());
					$('#egAjustada').val($("input[name='eg']").val());
					$('#fppAjustada').val($("input[name='fpp']").val());
				}
			}
			else{
				var EGLCN = parseFloat($('#lcnPct').val());
				var eg1 = new Number((Math.floor(EGLCN) * 7) + Math.round((EGLCN - Math.floor(EGLCN)) * 7));
				var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
				var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
				diferencia = diferencia * oneday;
				var FUM = localStorage.fum;
				FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
				FUM = new Date (FUM);
				var B = new Date();
  				B.setTime(FUM.getTime() + diferencia);
				$("#fum-tres").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
				$("#fum-tres").trigger("change");
				$('#furAjustada').val($("input[name='fum']").val());
				$('#egAjustada').val($("input[name='eg']").val());
				$('#fppAjustada').val($("input[name='fpp']").val());
				
			}
			$('#resultadoAjusteEcoPrimTrim').show();
		}
		else{
			$('#resultadoAjusteEcoPrimTrim').hide();
		}
	}
});


////////////////////////////////////////////
// Ajuste segundo trimestre
//
////////////////////////////////////////////

$("input[name='ajustarEcoSegTrim']").on("change", function(){
	event.preventDefault();
	if ($(this).is(":checked")){
		if ($(this).val() == 1){
			var lh = parseInt($('#lh').val());
			var lf = parseInt($('#lf').val());
			var cerebelo = parseInt($('#cerebelo').val());
			var eg = parseFloat($("input[name='eg']").val());
			var oneday = 1000 * 60 * 60 * 24;
			
			if (isNaN(lf) | lf < 0 | isNaN(eg) | eg < 1) {
				if (isNaN(lh) | lh < 0 | isNaN(cerebelo) | cerebelo < 1) {
					$('#popupTitle').html("Información");
					$('#popupBody').html("<p><strong>Edad gestacional calculada solamente por Cráneo y Fémur.<br>Para mayor exactitud ingrese medición de Humero y Cerebelo.</strong></p>");
					$('#impDoppler1').remove();
					$('#infecoObsSegTrim1Clon').remove()
					$('#popupGenerico').modal('show');
				}
				else{
					var EGsaco = parseFloat($('#sacoPct').val());
					var eg1 = new Number((Math.floor(EGsaco) * 7) + Math.round((EGsaco - Math.floor(EGsaco)) * 7));
					var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
					var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
					diferencia = diferencia * oneday;
					var FUM = localStorage.fum;
					FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
					FUM = new Date (FUM);
					var B = new Date();
  					B.setTime(FUM.getTime() + diferencia);
					$("#fum-tres").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
					$("#fum-tres").trigger("change");
					$('#furAjustada').val($("input[name='fum']").val());
					$('#egAjustada').val($("input[name='eg']").val());
					$('#fppAjustada').val($("input[name='fpp']").val());
				}
			}
			else{
				var EGLCN = parseFloat($('#lcnPct').val());
				var eg1 = new Number((Math.floor(EGLCN) * 7) + Math.round((EGLCN - Math.floor(EGLCN)) * 7));
				var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
				var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
				diferencia = diferencia * oneday;
				var FUM = localStorage.fum;
				FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
				FUM = new Date (FUM);
				var B = new Date();
  				B.setTime(FUM.getTime() + diferencia);
				$("#fum-tres").val(B.getDate()+"/"+(B.getMonth()+1)+"/"+B.getFullYear());
				$("#fum-tres").trigger("change");
				$('#furAjustada').val($("input[name='fum']").val());
				$('#egAjustada').val($("input[name='eg']").val());
				$('#fppAjustada').val($("input[name='fpp']").val());
				
			}
			$('#resultadoAjusteEcoPrimTrim').show();
		}
		else{
			$('#resultadoAjusteEcoPrimTrim').hide();
		}
	}
});

////////////////////////////////////////////


function calcularEdad(){
	var fcumpleanos, Edad;
	var d = new Date();
	var undia = 1000 * 60 * 60 * 24;
 	var unasemana = undia * 7;
	var unano = undia * 365;
	
	fcumpleanos = new Date($("#fNacimiento").val());

	Edad = ((d.getTime() - fcumpleanos.getTime()) / unano).toFixed(0);

	return Edad;
}

function calcularEdadMaterna(){
	var fcumpleanos, Edad;
	var d = new Date();
	var undia = 1000 * 60 * 60 * 24;
 	var unasemana = undia * 7;
	var unano = undia * 365;
	
	fcumpleanos = new Date($("#fechaMaterna").val().split(/\//).reverse().join('/'));

	Edad = ((d.getTime() - fcumpleanos.getTime()) / unano).toFixed(0);

	return Edad;
}

function deDBP() {
	var DBPMenos2DE = [];
	var DBPMas2DE = [];

	DBPMenos2DE[0] = 14;	DBPMenos2DE[1] = 17;
	DBPMenos2DE[2] = 19;	DBPMenos2DE[3] = 25;
	DBPMenos2DE[4] = 29;	DBPMenos2DE[5] = 33;
	DBPMenos2DE[6] = 34;	DBPMenos2DE[7] = 38;
	DBPMenos2DE[8] = 41;	DBPMenos2DE[9] = 43;
	DBPMenos2DE[10] = 46;	DBPMenos2DE[11] = 49;
	DBPMenos2DE[12] = 52;	DBPMenos2DE[13] = 54;
	DBPMenos2DE[14] = 57;	DBPMenos2DE[15] = 61;
	DBPMenos2DE[16] = 63;	DBPMenos2DE[17] = 65;
	DBPMenos2DE[18] = 69;	DBPMenos2DE[19] = 69;
	DBPMenos2DE[20] = 74;	DBPMenos2DE[21] = 74;
	DBPMenos2DE[22] = 77;	DBPMenos2DE[23] = 78;
	DBPMenos2DE[24] = 78;	DBPMenos2DE[25] = 81;
	DBPMenos2DE[26] = 85;	DBPMenos2DE[27] = 88;

	DBPMas2DE[0] = 25;	DBPMas2DE[1] = 29;
	DBPMas2DE[2] = 33;	DBPMas2DE[3] = 35;
	DBPMas2DE[4] = 41;	DBPMas2DE[5] = 42;
	DBPMas2DE[6] = 46;	DBPMas2DE[7] = 50;
	DBPMas2DE[8] = 52;	DBPMas2DE[9] = 56;
	DBPMas2DE[10] = 59;	DBPMas2DE[11] = 63;
	DBPMas2DE[12] = 66;	DBPMas2DE[13] = 70;
	DBPMas2DE[14] = 71;	DBPMas2DE[15] = 75;
	DBPMas2DE[16] = 77;	DBPMas2DE[17] = 81;
	DBPMas2DE[18] = 83;	DBPMas2DE[19] = 87;
	DBPMas2DE[20] = 88;	DBPMas2DE[21] = 91;
	DBPMas2DE[22] = 94;	DBPMas2DE[23] = 95;
	DBPMas2DE[24] = 97;	DBPMas2DE[25] = 99;
	DBPMas2DE[26] = 97;	DBPMas2DE[27] = 106;

	var eg=0;
	eg=parseFloat(localStorage.eg);
	var dbp = $("#dbp").val();
	var dof = $("#dof").val();
	dbp = dbp.toString();
    	dbp = dbp.replace(",", ".");
	dbp = parseFloat(dbp);

	if (eg < 12) {
		$("#dbpDE").val('0');
		$('#dbpPct').val('0');
	}
	else if (eg > 40)
	{
		$("#dbpDE").val('0');
		$('#dbpPct').val('0');
	}
	else {
		eg = eg - 12;
		eg = parseInt(eg);

		var uno = DBPMas2DE[eg] - DBPMenos2DE[eg];
		var dos = dbp - DBPMenos2DE[eg];
		var resultado = (parseInt(95 / (uno) * (dos) + 3));
		ajustarProgreso(resultado, "dbpDE");
		var pctDBP = '';
		//truncador de Pct, sobre 100 o bajo 1
		if (resultado > 99){
			pctDBP = '&gt; 99';
		}
		else if (resultado < 1){
			pctDBP = '&lt; 1';
		}
		else{
			pctDBP = resultado;
		}
		
		$('#dbpPct').val(pctDBP);
		$('#dbpRango').val(DBPMenos2DE[eg] + ' - ' + DBPMas2DE[eg] );
		p50();
	}
	
	if (dbp > 0){
		if (dof > 0){
			var valor = ((dbp/dof)*100);
			$('#dof-dbp').val(valor.toFixed(0) + "%");
			$('#ic').val(valor.toFixed(0) + "%");
		}
		else{
			$('#dof-dbp').val("0");
			$('#ic').val("0");
		}
	}
	else{
		$('#dof-dbp').val("0");
		$('#ic').val("0");
	}
}

function calcdof(){

	var dof = $("#dof").val();

	var eg=0;
	eg= Math.trunc(parseFloat(localStorage.eg));
	
	if (eg > 9 && dof > 0){
		var DOF05PCT = [];
		var DOF95PCT = [];
		DOF05PCT[10]=7;	DOF05PCT[11]=11; DOF05PCT[12]=16; DOF05PCT[13]=20;
		DOF05PCT[14]=24; DOF05PCT[15]=29; DOF05PCT[16]=33; DOF05PCT[17]=37;
		DOF05PCT[18]=41; DOF05PCT[19]=46; DOF05PCT[20]=50; DOF05PCT[21]=54;
		DOF05PCT[22]=58; DOF05PCT[23]=62; DOF05PCT[24]=65; DOF05PCT[25]=69;
		DOF05PCT[26]=73; DOF05PCT[27]=76; DOF05PCT[28]=80; DOF05PCT[29]=83;
		DOF05PCT[30]=86; DOF05PCT[31]=89; DOF05PCT[32]=92; DOF05PCT[33]=95;
		DOF05PCT[34]=97; DOF05PCT[35]=99; DOF05PCT[36]=102; DOF05PCT[37]=104;
		DOF05PCT[38]=105; DOF05PCT[39]=107; DOF05PCT[40]=108;

		DOF95PCT[10]=21; DOF95PCT[11]=25; DOF95PCT[12]=30; DOF95PCT[13]=34;
		DOF95PCT[14]=38; DOF95PCT[15]=43; DOF95PCT[16]=47; DOF95PCT[17]=51;
		DOF95PCT[18]=55; DOF95PCT[19]=60; DOF95PCT[20]=64; DOF95PCT[21]=68;
		DOF95PCT[22]=72; DOF95PCT[23]=76; DOF95PCT[24]=79; DOF95PCT[25]=83;
		DOF95PCT[26]=87; DOF95PCT[27]=90; DOF95PCT[28]=94; DOF95PCT[29]=97;
		DOF95PCT[30]=100; DOF95PCT[31]=103; DOF95PCT[32]=106; DOF95PCT[33]=108;
		DOF95PCT[34]=111; DOF95PCT[35]=113; DOF95PCT[36]=116; DOF95PCT[37]=118;
		DOF95PCT[38]=119; DOF95PCT[39]=121; DOF95PCT[40]=122;

		var uno = DOF95PCT[eg] - DOF05PCT[eg];
		var dos = dof - DOF05PCT[eg];
		var resultado = (parseInt(95 / (uno) * (dos) + 3));
		ajustarProgreso(resultado, "dofPct");
		var pctDOF = '';
		//truncador de Pct, sobre 100 o bajo 1
		if (resultado > 99){
			pctDOF = '&gt; 99';
		}
		else if (resultado < 1){
			pctDOF = '&lt; 1';
		}
		else{
			pctDOF = resultado;
		}
		$('#dofPctRpt').val(pctDOF);
		$('#dofRango').val(DOF05PCT[eg] + ' - '+ DOF95PCT[eg]);

		var dbp = $("#dbp").val();

		if (dbp > 0){
			var valor = ((dbp/dof)*100);
				
			$('#dof-dbp').val(valor.toFixed(0) + "%");
			$('#ic').val(valor.toFixed(0) + "%");
			$('#cc').val(valCC(dof,dbp)).trigger('change');
		}
		else{
			$('#dof-dbp').val("0");
			$('#ic').val("0");
		}
	}
	else{
		ajustarProgreso(0, "dofPct");
		$('#dofRango').val(0);
		$('#dofPctRpt').val(0);
		$('#dof-dbp').val("0");
		$('#ic').val("0");
	}
}

function pctcc() {

 var pct3 = [], pct97 = [];

 pct3[0] = 64;pct3[1] = 74;pct3[2] = 88;pct3[3] = 100;pct3[4] = 113;pct3[5] = 126;
 pct3[6] = 137;pct3[7] = 149;pct3[8] = 161;pct3[9] = 172;pct3[10] = 183;
 pct3[11] = 194;pct3[12] = 204;pct3[13] = 214;pct3[14] = 224;pct3[15] = 233;
 pct3[16] = 242;pct3[17] = 250;pct3[18] = 258;pct3[19] = 267;pct3[20] = 274;
 pct3[21] = 280;pct3[22] = 287;pct3[23] = 293;pct3[24] = 299;pct3[25] = 303;
 pct3[26] = 308;pct3[27] = 311;pct3[28] = 315;

 pct97[0] = 81;pct97[1] = 94;pct97[2] = 106;pct97[3] = 120;pct97[4] = 135;
 pct97[5] = 150;pct97[6] = 165;pct97[7] = 179;pct97[8] = 193;pct97[9] = 206;
 pct97[10] = 219;pct97[11] = 232;pct97[12] = 243;pct97[13] = 256;pct97[14] = 268;
 pct97[15] = 279;pct97[16] = 290;pct97[17] = 300;pct97[18] = 310;pct97[19] = 319;
 pct97[20] = 328;pct97[21] = 336;pct97[22] = 343;pct97[23] = 351;pct97[24] = 358;
 pct97[25] = 363;pct97[26] = 368;pct97[27] = 373;pct97[28] = 377;

 var eg=0, cc=0;

 eg=Math.trunc(parseFloat(localStorage.eg));
 cc=parseInt(document.getElementById("cc").value);

 if (eg < 12) {
         $("#ccPct").val("");
	 $('#ccPctRpt').val("");
 }
 else if (eg > 40){ 
         $("#ccPct").val("");
	 $('#ccPctRpt').val("");
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=cc - pct3[eg];
  ajustarProgreso(parseInt(95 / (uno) * (dos) + 3), "ccPct");
  var resultado = parseInt(95 / (uno) * (dos) + 3);
  var pctCC = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctCC = '&gt; 99';
			}
			else if (resultado < 1){
				pctCC = '&lt; 1';
			}
			else{
				pctCC = resultado;
			}
	 
	 $('#ccPctRpt').val(pctCC);
	 $('#ccRango').val(pct3[eg] + ' - ' + pct97[eg]);
	 psohdlk();
	 p50();
 }
};

function pctca() {

 var pct3 = [], pct97 = [];

 pct3[0] = 42;pct3[1] = 52;pct3[2] = 64;pct3[3] = 75;pct3[4] = 86;
 pct3[5] = 97;pct3[6] = 109;pct3[7] = 119;pct3[8] = 131;pct3[9] = 141;
 pct3[10] = 151;pct3[11] = 161;pct3[12] = 171;pct3[13] = 181;
 pct3[14] = 191;pct3[15] = 200;pct3[16] = 209;pct3[17] = 218;pct3[18] = 227;
 pct3[19] = 236;pct3[20] = 245;pct3[21] = 253;pct3[22] = 261;pct3[23] = 269;
 pct3[24] = 277;pct3[25] = 285;pct3[26] = 292;pct3[27] = 299;pct3[28] = 307;

 pct97[0] = 71;pct97[1] = 79;pct97[2] = 92;pct97[3] = 102;pct97[4] = 113;
 pct97[5] = 127;pct97[6] = 141;pct97[7] = 155;pct97[8] = 170;
 pct97[9] = 183;pct97[10] = 192;pct97[11] = 209;pct97[12] = 223;
 pct97[13] = 235;pct97[14] = 248;pct97[15] = 260;pct97[16] = 271;pct97[17] = 284;
 pct97[18] = 295;pct97[19] = 306;pct97[20] = 318;pct97[21] = 329;pct97[22] = 339;
 pct97[23] = 349;pct97[24] = 359;pct97[25] = 370;pct97[26] = 380;pct97[27] = 389;
 pct97[28] = 399;

 var eg=0, ca=0;

 eg=Math.trunc(parseFloat(localStorage.eg));
 ca=parseInt(document.getElementById("ca").value);

 if (eg < 12) {
         $("#caPct").val("0");
	 $('#caPctRpt').val("0");
 }
 else if (eg > 40){ 
         $("#caPct").val("0");
	 $('#caPctRpt').val("0");
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=ca - pct3[eg];
	 var resultado = parseInt(95 / (uno) * (dos) + 3);
	 ajustarProgreso(resultado, "caPct");
	 var pctCA = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctCA = '&gt; 99';
			}
			else if (resultado < 1){
				pctCA = '&lt; 1';
			}
			else{
				pctCA = resultado;
			}
	 $('#caPctRpt').val(pctCA);
	 $('#caRango').val(pct3[eg] + ' - ' + pct97[eg]);
	 psohdlk();
	 p50();
 }
};

function pctlf() {

 var pct3 = [], pct97 = [];

 pct3[0] = 7;pct3[1] = 9;pct3[2] = 12;pct3[3] = 15;pct3[4] = 17;pct3[5] = 21;
 pct3[6] = 23;pct3[7] = 26;pct3[8] = 28;pct3[9] = 30;pct3[10] = 33;pct3[11] = 35;
 pct3[12] = 38;pct3[13] = 40;pct3[14] = 42;pct3[15] = 44;pct3[16] = 46;
 pct3[17] = 48;pct3[18] = 50;pct3[19] = 52;pct3[20] = 53;pct3[21] = 55;
 pct3[22] = 57;pct3[23] = 59;pct3[24] = 60;pct3[25] = 62;pct3[26] = 64;
 pct3[27] = 65;pct3[28] = 66;

 pct97[0] = 12;pct97[1] = 14;pct97[2] = 17;pct97[3] = 20;pct97[4] = 23;pct97[5] = 27;
 pct97[6] = 31;pct97[7] = 34;pct97[8] = 38;pct97[9] = 40;pct97[10] = 43;pct97[11] = 47;
 pct97[12] = 50;pct97[13] = 52;pct97[14] = 56;pct97[15] = 58;pct97[16] = 62;
 pct97[17] = 64;pct97[18] = 66;pct97[19] = 68;pct97[20] = 71;pct97[21] = 73;
 pct97[22] = 75;pct97[23] = 78;pct97[24] = 80;pct97[25] = 82;pct97[26] = 84;
 pct97[27] = 86;pct97[28] = 88;

 var eg=0, lf=0;

 eg=Math.trunc(parseFloat(localStorage.eg));
 lf=parseInt(document.getElementById("lf").value);

 if (eg < 12) {
         $("#lfPct").val("0");
	 $('#lfPctRpt').val("0");
 }
 else if (eg > 40){ 
         $("#lfPct").val("0");
	 $('#lfPctRpt').val("0");
 }
 else {
  eg = eg - 12;
  eg = parseInt(eg);
  var uno=pct97[eg] - pct3[eg];
  var dos=lf - pct3[eg];
	 var resultado = parseInt(95 / (uno) * (dos) + 3);
	 ajustarProgreso(resultado, "lfPct");
	 var pctLF = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctLF = '&gt; 99';
			}
			else if (resultado < 1){
				pctLF = '&lt; 1';
			}
			else{
				pctLF = resultado;
			}
	 $('#lfPctRpt').val(pctLF);
	 $('#lfRango').val(pct3[eg] + ' - ' + pct97[eg]);
	 p50();
	 $('#tallaFetal').val(parseInt(lf * 0.55 + 9.6));
	 //$('#tallaFetal').val(parseInt(6.18+5.9*lf/10));

	 eg = eg + 12;
	 
	 if (eg >= 24){
	 
	  var Pct90Talla = [];
	  var Pct10Talla = [];

	  Pct90Talla[24] = 34.1;	  Pct90Talla[25] = 35.7;	  Pct90Talla[26] = 37.2;	  Pct90Talla[27] = 38.7;
	  Pct90Talla[28] = 40.1;	  Pct90Talla[29] = 41.6;	  Pct90Talla[30] = 43.1;	  Pct90Talla[31] = 44.3;
	  Pct90Talla[32] = 45.6;	  Pct90Talla[33] = 46.8;	  Pct90Talla[34] = 47.9;	  Pct90Talla[35] = 49.1;
	  Pct90Talla[36] = 49.9;	  Pct90Talla[37] = 50.8;	  Pct90Talla[38] = 51.5;	  Pct90Talla[39] = 52.1;
	  Pct90Talla[40] = 52.6;	  Pct90Talla[41] = 52.9;	  Pct90Talla[42] = 53.1;		 
		 
	  Pct10Talla[24] = 29.8;	  Pct10Talla[25] = 31.1;	  Pct10Talla[26] = 32.3;	  Pct10Talla[27] = 33.6;
	  Pct10Talla[28] = 35.1;	  Pct10Talla[29] = 36.5;	  Pct10Talla[30] = 37.7;	  Pct10Talla[31] = 39.1;
	  Pct10Talla[32] = 40.5;	  Pct10Talla[33] = 41.8;	  Pct10Talla[34] = 43.1;	  Pct10Talla[35] = 44.2;
	  Pct10Talla[36] = 45.3;	  Pct10Talla[37] = 46.3;	  Pct10Talla[38] = 47.2;	  Pct10Talla[39] = 47.9;
	  Pct10Talla[40] = 48.5;	  Pct10Talla[41] = 48.8;	  Pct10Talla[42] = 49.1;

          eg = parseInt(eg);
          var tallaFet = $('#tallaFetal').val(); 
          uno=Pct90Talla[eg] -  Pct10Talla[eg];
          dos=tallaFet -  Pct10Talla[eg];
	  resultado = parseInt(80 / (uno) * (dos) + 10);
          ajustarProgreso(resultado, "tallaPct");
		 var pctTalla = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctTalla = '&gt; 99';
			}
			else if (resultado < 1){
				pctTalla = '&lt; 1';
			}
			else{
				pctTalla = resultado;
			}
          $('#tallaPctRpt').val(pctTalla);
	  $('#tallaRango').val(Pct10Talla[eg] + ' - ' + Pct90Talla[eg]);
		 ipn()
	 } 
 }
};

function pctcb() {

//cerebelo segun Hill
var pct2ds = [];
var pctmedia = [];
var pct2dsmas = [];

 pct2ds[0] = 12;pct2ds[1] = 14;pct2ds[2] = 15;pct2ds[3] = 16;pct2ds[4] = 17;pct2ds[5] = 18;
 pct2ds[6] = 19;pct2ds[7] = 20;pct2ds[8] = 21;pct2ds[9] = 22;pct2ds[10] = 24;
 pct2ds[11] = 26;pct2ds[12] = 27;pct2ds[13] = 29;pct2ds[14] = 30;pct2ds[15] = 31;
 pct2ds[16] = 33;pct2ds[17] = 36;pct2ds[18] = 37;pct2ds[19] = 38;pct2ds[20] = 40;
 pct2ds[21] = 40;pct2ds[22] = 40;pct2ds[23] = 41;pct2ds[24] = 42;pct2ds[25] = 44;

 pctmedia[0] = 15;pctmedia[1] = 16;pctmedia[2] = 17;pctmedia[3] = 18;pctmedia[4] = 20;
 pctmedia[5] = 20;pctmedia[6] = 22;pctmedia[7] = 23;pctmedia[8] = 24;pctmedia[9] = 26;
 pctmedia[10] = 28;pctmedia[11] = 30;pctmedia[12] = 31;pctmedia[13] = 33;pctmedia[14] = 34;
 pctmedia[15] = 37;pctmedia[16] = 39;pctmedia[17] = 41;pctmedia[18] = 43;pctmedia[19] = 46;
 pctmedia[20] = 47;pctmedia[21] = 49;pctmedia[22] = 51;pctmedia[23] = 51;pctmedia[24] = 52;
 pctmedia[25] = 52

 pct2dsmas[0] = 18;pct2dsmas[1] = 18;pct2dsmas[2] = 19;pct2dsmas[3] = 20;pct2dsmas[4] = 22;
 pct2dsmas[5] = 23;pct2dsmas[6] = 25;pct2dsmas[7] = 26;pct2dsmas[8] = 27;pct2dsmas[9] = 30;
 pct2dsmas[10] = 32;pct2dsmas[11] = 34;pct2dsmas[12] = 34;pct2dsmas[13] = 37;pct2dsmas[14] = 38;
 pct2dsmas[15] = 41;pct2dsmas[16] = 43;pct2dsmas[17] = 46;pct2dsmas[18] = 48;pct2dsmas[19] = 53;
 pct2dsmas[20] = 56;pct2dsmas[21] = 58;pct2dsmas[22] = 60;pct2dsmas[23] = 62;pct2dsmas[24] = 62;
 pct2dsmas[25] = 62;


 var eg=0;
 var cb=0;
 eg=Math.trunc(parseFloat(localStorage.eg));
 cb=parseInt(document.getElementById("cerebelo").value);

 if (eg < 15) {$("#cbPct").val("0");$('#cerebeloPctRpt').val("0")}
 else if (eg > 40){$("#cbPct").val("0");$('#cerebeloPctRpt').val("0");}
 else {

  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct2dsmas[eg] - pct2ds[eg];
  var dos=cb - pct2ds[eg];
	 var resultado = parseInt(95 / (uno) * (dos));
	 var pctCB = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctCB = '&gt; 99';
			}
			else if (resultado < 1){
				pctCB = '&lt; 1';
			}
			else{
				pctCB = resultado;
			}
	 $('#cerebeloPctRpt').val(pctCB);
	 $('#cerebeloRango').val(pct2ds[eg] + ' - ' + pct2dsmas[eg]);
	 ajustarProgreso(resultado, "cerebeloPct");
	 
	 p50();
 }
};

function pctlh() {

 var pct05 = [];
 var pct95 = [];

        pct05[12] = 4.8;   pct95[12] = 12.3;        pct05[13] = 7.6;   pct95[13] = 15.1;
        pct05[14] = 10.3;  pct95[14] = 17.9;        pct05[15] = 13.1;  pct95[15] = 20.7;
        pct05[16] = 15.8;  pct95[16] = 23.5;        pct05[17] = 18.5;  pct95[17] = 26.3;
        pct05[18] = 21.2;  pct95[18] = 29.1;        pct05[19] = 23.8;  pct95[19] = 31.6;
        pct05[20] = 26.3;  pct95[20] = 34.2;        pct05[21] = 28.8;  pct95[21] = 36.7;
        pct05[22] = 31.2;  pct95[22] = 39.2;        pct05[23] = 33.5;  pct95[23] = 41.6;
        pct05[24] = 35.7;  pct95[24] = 43.9;        pct05[25] = 37.9;  pct95[25] = 46.1;
        pct05[26] = 39.9;  pct95[26] = 48.1;        pct05[27] = 41.9;  pct95[27] = 50.1;
        pct05[28] = 43.7;  pct95[28] = 52.1;        pct05[29] = 45.5;  pct95[29] = 53.9;
        pct05[30] = 47.2;  pct95[30] = 55.6;        pct05[31] = 48.9;  pct95[31] = 57.3;
        pct05[32] = 50.4;  pct95[32] = 58.9;        pct05[33] = 52.1;  pct95[33] = 60.5;
        pct05[34] = 53.4;  pct95[34] = 62.1;        pct05[35] = 54.8;  pct95[35] = 63.5;
        pct05[36] = 56.2;  pct95[36] = 64.9;        pct05[37] = 57.6;  pct95[37] = 66.4;
        pct05[38] = 59.8;  pct95[38] = 67.8;        pct05[39] = 60.4;  pct95[39] = 69.3;
        pct05[40] = 61.9;  pct95[40] = 70.8;
	
	var eg=0;
 	eg=Math.trunc(parseFloat(localStorage.eg));
 	var lh=parseInt($("#lh").val());

        if (eg < 12) {
        	$("#lhPct").val('0');
		$('#lhPctRpt').val('0');
        }
        else if (eg > 40) {
        	$("#lhPct").val('0');
		$('#lhPctRpt').val('0');
        }
        else {
        	eg = parseInt(eg);
		var uno = pct95[eg] - pct05[eg];
		var dos = lh - pct05[eg];
		var resultado = (parseInt(95 / (uno) * (dos) + 5));
		var pctLH = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctLH = '&gt; 99';
			}
			else if (resultado < 1){
				pctLH = '&lt; 1';
			}
			else{
				pctLH = resultado;
			}
		$('#lhPctRpt').val(pctLH);
		$('#lhRango').val(pct05[eg] + ' - ' + pct95[eg]);
		 ajustarProgreso(resultado, "lhPct");
		p50();
	}
}



function pctdv() {

 var pct5 = [];
 var pct95 = [];

 pct5[0] = 0.32; pct5[1] = 0.32; pct5[2] = 0.32; pct5[3] = 0.32;
 pct5[4] = 0.32; pct5[5] = 0.32; pct5[6] = 0.31; pct5[7] = 0.31;
 pct5[8] = 0.31; pct5[9] = 0.3; pct5[10] = 0.29; pct5[11] = 0.28;
 pct5[12] = 0.28; pct5[13] = 0.27; pct5[14] = 0.26; pct5[15] = 0.25;
 pct5[16] = 0.24; pct5[17] = 0.23; pct5[18] = 0.22; pct5[19] = 0.21;
 pct5[20] = 0.2;
    
 pct95[0] = 0.83; pct95[1] = 0.83; pct95[2] = 0.83; pct95[3] = 0.83;
 pct95[4] = 0.83; pct95[5] = 0.83; pct95[6] = 0.82; pct95[7] = 0.82;
 pct95[8] = 0.81; pct95[9] = 0.81; pct95[10] = 0.8; pct95[11] = 0.79;
 pct95[12] = 0.78; pct95[13] = 0.77; pct95[14] = 0.76; pct95[15] = 0.75;
 pct95[16] = 0.74; pct95[17] = 0.73; pct95[18] = 0.72; pct95[19] = 0.71;
 pct95[20] = 0.7;


 var eg=0;
 
 eg=parseFloat(localStorage.eg);
 var dv = document.getElementById("dv").value;
dv = dv.toString();
 dv = dv.replace(",", ".");
 dv = parseFloat(dv);
	
 if (eg < 20) {  
   $("#dvPct").val("0");
 }
 else if (eg > 40)
 {
   $("#dvPct").val("0");
 }
 else {
      eg = eg - 20;
      eg = parseInt(eg);
      var uno=pct95[eg] - pct5[eg];
      var dos=dv - pct5[eg];
	 var resultado = parseInt(90 / (uno) * (dos) + 5);
	 var pctDV = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctDV = '&gt; 99';
			}
			else if (resultado < 1){
				pctDV = '&lt; 1';
			}
			else{
				pctDV = resultado;
			}
      ajustarProgreso(resultado, "dvPct");
      $("#dvPctTxt").val(pctDV);
      $("#dvRngo").val( pct5[eg] + " - " + pct95[eg]);
 }
}

function pctau() {
	var pct5 = [];
	var pct95 = [];
	var xpct5 = [];
	var xpct95 = [];

	pct5[0] = 0.97;	pct5[1] = 0.95;
	pct5[2] = 0.94;	pct5[3] = 0.92;
	pct5[4] = 0.9;	pct5[5] = 0.89;
	pct5[6] = 0.87;	pct5[7] = 0.85;
	pct5[8] = 0.82;	pct5[9] = 0.8;
	pct5[10] = 0.78; pct5[11] = 0.75;
	pct5[12] = 0.73; pct5[13] = 0.7;
	pct5[14] = 0.67; pct5[15] = 0.65;
	pct5[16] = 0.62; pct5[17] = 0.58;
	pct5[18] = 0.55; pct5[19] = 0.52;
	pct5[20] = 0.49;

	pct95[0] = 1.6;	pct95[1] = 1.56;
	pct95[2] = 1.53; pct95[3] = 1.5;
	pct95[4] = 1.46; pct95[5] = 1.43;
	pct95[6] = 1.4;	pct95[7] = 1.37;
	pct95[8] = 1.35; pct95[9] = 1.32;
	pct95[10] = 1.29; pct95[11] = 1.27;
	pct95[12] = 1.25; pct95[13] = 1.22;
	pct95[14] = 1.2; pct95[15] = 1.18;
	pct95[16] = 1.16; pct95[17] = 1.14;
	pct95[18] = 1.13; pct95[19] = 1.11;
	pct95[20] = 1.09;

	xpct5[20] = 0.78; xpct5[21] = 0.87; xpct5[22] = 0.95; xpct5[23] = 1.02;
	xpct5[24] = 1.09; xpct5[25] = 1.15; xpct5[26] = 1.2; xpct5[27] = 1.24;
	xpct5[28] = 1.28; xpct5[29] = 1.31; xpct5[30] = 1.33; xpct5[31] = 1.35;
	xpct5[32] = 1.36; xpct5[33] = 1.36; xpct5[34] = 1.36; xpct5[35] = 1.34;
	xpct5[36] = 1.32; xpct5[37] = 1.3; xpct5[38] = 1.26; xpct5[39] = 1.22;
	xpct5[40] = 1.18;

	xpct95[20] = 1.68; xpct95[21] = 1.88; xpct95[22] = 2.06; xpct95[23] = 2.22;
	xpct95[24] = 2.36; xpct95[25] = 2.49; xpct95[26] = 2.6;	xpct95[27] = 2.7;
	xpct95[28] = 2.78; xpct95[29] = 2.84; xpct95[30] = 2.89; xpct95[31] = 2.92;
	xpct95[32] = 2.93; xpct95[33] = 2.93; xpct95[34] = 2.91; xpct95[35] = 2.87;
	xpct95[36] = 2.82; xpct95[37] = 2.75; xpct95[38] = 2.67; xpct95[39] = 2.57;
	
	var eg=0;
	eg=parseFloat(localStorage.eg);
 	var aumb = $('#ipau').val();
	aumb = aumb.toString();
 	aumb = aumb.replace(",", ".");
 	aumb = parseFloat(aumb);
 
	if (eg < 20) {
		$('#ipauPct').val('0');
	}
	else if (eg > 40)
	{
		$('#ipauPct').val('0');
	}
	else {
		eg = eg - 20;
		eg = parseInt(eg);
		var uno=pct95[eg] - pct5[eg];
		var dos=aumb - pct5[eg];
		var resultado = parseInt(90 / (uno) * (dos) + 5);
		ajustarProgreso(resultado, "ipauPct");
		var pctAUMB = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctAUMB = '&gt; 99';
			}
			else if (resultado < 1){
				pctAUMB = '&lt; 1';
			}
			else{
				pctAUMB = resultado;
			}

		$("#ipauPctTxt").val(pctAUMB);
		$("#ipauRngo").val(pct5[eg] + " - " + pct95[eg]);

		if ($('#ipacm').val()){
			var ccp = ($('#ipacm').val() / $('#ipau').val());
			$('#ccp').val(ccp.toFixed(2));

			eg = eg + 20;
			uno = xpct95[eg] - xpct5[eg];
			dos = ccp - xpct5[eg];
			resultado = parseInt(90 / (uno) * (dos) + 5);
			ajustarProgreso(resultado, "ccpPct");

			var pctCCP = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctCCP = '&gt; 99';
			}
			else if (resultado < 1){
				pctCCP = '&lt; 1';
			}
			else{
				pctCCP = resultado;
			}
			$("#ccpPctTxt").val(pctCCP);
            $("#ccpRngo").val(xpct5[eg] + " - " + xpct95[eg]);
		}
	}
}

function pctacm() {

	var pct5 = [];
	var pct95 = [];
	var xpct5 = [];
	var xpct95 = [];

	pct5[0] = 1.24;pct5[1] = 1.29;	pct5[2] = 1.34;pct5[3] = 1.37;
	pct5[4] = 1.4;pct5[5] = 1.43;	pct5[6] = 1.44;pct5[7] = 1.45;
	pct5[8] = 1.45;pct5[9] = 1.44;	pct5[10] = 1.43;pct5[11] = 1.41;
	pct5[12] = 1.38;pct5[13] = 1.34;	pct5[14] = 1.3;pct5[15] = 1.25;
	pct5[16] = 1.19;pct5[17] = 1.13;	pct5[18] = 1.05;pct5[19] = 0.98;
	pct5[20] = 0.89;

	pct95[0] = 1.98;	pct95[1] = 2.12;	pct95[2] = 2.25;	pct95[3] = 2.36;
	pct95[4] = 2.45;	pct95[5] = 2.53;	pct95[6] = 2.59;	pct95[7] = 2.63;
	pct95[8] = 2.66;	pct95[9] = 2.67;	pct95[10] = 2.67;	pct95[11] = 2.65;
	pct95[12] = 2.62;	pct95[13] = 2.56;	pct95[14] = 2.5;	pct95[15] = 2.41;
	pct95[16] = 2.31;	pct95[17] = 2.2;	pct95[18] = 2.07;	pct95[19] = 1.92;
	pct95[20] = 1.76;

	xpct5[20] = 0.78;	xpct5[21] = 0.87;	xpct5[22] = 0.95;	xpct5[23] = 1.02;
	xpct5[24] = 1.09;	xpct5[25] = 1.15;	xpct5[26] = 1.2;	xpct5[27] = 1.24;
	xpct5[28] = 1.28;	xpct5[29] = 1.31;	xpct5[30] = 1.33;	xpct5[31] = 1.35;
	xpct5[32] = 1.36;	xpct5[33] = 1.36;	xpct5[34] = 1.36;	xpct5[35] = 1.34;
	xpct5[36] = 1.32;	xpct5[37] = 1.3;	xpct5[38] = 1.26;	xpct5[39] = 1.22;
	xpct5[40] = 1.18;

	xpct95[20] = 1.68;	xpct95[21] = 1.88;	xpct95[22] = 2.06;	xpct95[23] = 2.22;
	xpct95[24] = 2.36;	xpct95[25] = 2.49;	xpct95[26] = 2.6;	xpct95[27] = 2.7;
	xpct95[28] = 2.78;	xpct95[29] = 2.84;	xpct95[30] = 2.89;	xpct95[31] = 2.92;
	xpct95[32] = 2.93;	xpct95[33] = 2.93;	xpct95[34] = 2.91;	xpct95[35] = 2.87;
	xpct95[36] = 2.82;	xpct95[37] = 2.75;	xpct95[38] = 2.67;	xpct95[39] = 2.57;

	var eg=0;

	eg=parseFloat(localStorage.eg);
	var acm = $('#ipacm').val();
	acm = acm.toString();
 	acm = acm.replace(",", ".");
 	acm = parseFloat(acm);

	if (eg < 20) {  
		$('#ipacmPct').val('0');
		$('#ccp').val('');
		$('#ccpPct').val('');
	}
	else if (eg > 40)
	{
		$('#ipacmPct').val('0');
		$('#ccp').val('');
		$('#ccpPct').val('');
	}
	else {
		eg = eg - 20;
		eg = parseInt(eg);
		var uno = pct95[eg] - pct5[eg];
		var dos = acm - pct5[eg];
 		var resultado = parseInt(90 / (uno) * (dos) + 5);
		ajustarProgreso(resultado, "ipacmPct");
		var pctACM = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctACM = '&gt; 99';
			}
			else if (resultado < 1){
				pctACM = '&lt; 1';
			}
			else{
				pctACM = resultado;
			}
		$("#ipacmPctTxt").val(pctACM);
                $("#ipacmRngo").val(pct5[eg] + " - " + pct95[eg]);

		if ($('#ipau').val()){
			var ccp = (acm / $('#ipau').val());

			$('#ccp').val(ccp.toFixed(2));

			eg = eg + 20;
			uno = xpct95[eg] - xpct5[eg];
			dos = ccp - xpct5[eg];
			resultado = parseInt(90 / (uno) * (dos) + 5);
			ajustarProgreso(resultado, "ccpPct");
			var pctCCP = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctCCP = '&gt; 99';
			}
			else if (resultado < 1){
				pctCCP = '&lt; 1';
			}
			else{
				pctCCP = resultado;
			}

			$("#ccpPctTxt").val(pctCCP);
            $("#ccpRngo").val(xpct5[eg] + " - " + xpct95[eg]);
		}
	}
}

function psohdlk() {

    var CC = 0;
    var CA = 0;

 CC=parseFloat($("#cc").val());
 CA=parseInt($("#ca").val());
	
 if ($("#cc").val() && $("#cc").val() && $("#lf").val() && $("#dbp").val()) {
    var psoP =  Math.pow(10, (1.182 + 0.00273 * CC + 0.007057 * CA - 0.0000063 *  Math.pow(CA, 2) - 0.000002184 * CC * CA))
	 
    $("#pfe").val(psoP.toFixed(0));
    pctpfe();
	valccca()
	 ipn()
  }
}

function pctpfe() {

 var pct10 = [];
 var pct90 = [];

 pct10[0] = 97;pct10[1] = 121;pct10[2] = 150;pct10[3] = 185;pct10[4] = 227;pct10[5] = 275;
 pct10[6] = 331;pct10[7] = 398;pct10[8] = 471;pct10[9] = 556;pct10[10] = 652;pct10[11] = 758;
 pct10[12] = 876;pct10[13] = 1004;pct10[14] = 1145;pct10[15] = 1294;pct10[16] = 1453;
 pct10[17] = 1621;pct10[18] = 1794;pct10[19] = 1973;pct10[20] = 2154;pct10[21] = 2335;
 pct10[22] = 2513; pct10[23] = 2686; pct10[24] = 2851; pct10[25] = 2985;

 pct90[0] = 137;pct90[1] = 171;pct90[2] = 212;pct90[3] = 261;pct90[4] = 319;
 pct90[5] = 387;pct90[6] = 467;pct90[7] = 559;pct90[8] = 665;pct90[9] = 784;
 pct90[10] = 918;pct90[11] = 1068;pct90[12] = 1234;pct90[13] = 1416;pct90[14] = 1613;
 pct90[15] = 1824;pct90[16] = 2049;pct90[17] = 2285;pct90[18] = 2530;
 pct90[19] = 2781;pct90[20] = 3036;pct90[21] = 3291;pct90[22] = 3543;pct90[23] = 3786;
 pct90[24] = 4019;pct90[25] = 4234;

 var eg=0;
 var pfe=0;
 eg=parseFloat(localStorage.eg);
 pfe=parseInt($("#pfe").val());

 if (eg < 15) {  
   $("#pfePct").val('0');
 }
 else if (eg > 40)
 {
   $("#pfePct").val('0');
 }
 else {
  eg = eg - 15;
  eg = parseInt(eg);
  var uno=pct90[eg] - pct10[eg];
  var dos=pfe - pct10[eg];
  var pctFinal = (80 / (uno) * (dos)) + 10
  ajustarProgreso(pctFinal, "pfePct");
	 var pctPFE = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (pctFinal > 99){
				pctPFE = '&gt; 99';
			}
			else if (pctFinal < 1){
				pctPFE = '&lt; 1';
			}
			else{
				pctPFE = pctFinal;
			}
	if (pctPFE > 0){
		$('#pfePctRpt').val(pctPFE.toFixed());
	}
	else{
		$('#pfePctRpt').val(pctPFE);
	}
	 
	 $('#pfeRango').val(pct10[eg] + ' - ' +pct90[eg]);
 }
}

function bvm() {

 var pct5 = [], pct95 = [];

 pct5[0] = 23; pct5[1] = 25; pct5[2] = 27;  pct5[3] = 28;
 pct5[4] = 29; pct5[5] = 29; pct5[6] = 30;  pct5[7] = 30;
 pct5[8] = 30; pct5[9] = 30; pct5[10] = 30; pct5[11] = 30;
 pct5[12] = 30; pct5[13] = 29; pct5[14] = 29; pct5[15] = 29;
 pct5[16] = 29; pct5[17] = 29; pct5[18] = 28; pct5[19] = 28;
 pct5[20] = 27; pct5[21] = 26; pct5[22] = 24; pct5[23] = 23;
 pct5[24] = 21;

 pct95[0] = 59; pct95[1] = 62; pct95[2] = 64; pct95[3] = 66;
 pct95[4] = 67; pct95[5] = 68; pct95[6] = 68; pct95[7] = 68;
 pct95[8] = 68; pct95[9] = 68; pct95[10] = 68; pct95[11] = 69;
 pct95[12] = 69; pct95[13] = 69; pct95[14] = 69; pct95[15] = 70;
 pct95[16] = 71; pct95[17] = 72; pct95[18] = 72; pct95[19] = 72;
 pct95[20] = 71; pct95[21] = 70; pct95[22] = 68; pct95[23] = 66;
 pct95[24] = 62;

 var eg=0, bvm=0;

 eg=parseFloat(localStorage.eg);
 bvm=parseInt($("#bvm").val());

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

  var uno = pct95[eg] - pct5[eg];
  var dos = bvm - pct5[eg];
  var resultado = parseInt(90 / (uno) * (dos) + 5);
  ajustarProgreso(resultado, "bvmPct");
  $("#bvmPct").val(resultado);

 }
}

function bvmDoppler() {

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
 bvm=parseInt($("#bvmDoppler").val());
 
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
	 $("#liqAmnioDoppler").val("disminuido"); 
  }
  else if ( bvm <= pct95[eg]){
  	$("#liqAmnioDoppler").val("normal");
  }
  else{
  	$("#liqAmnioDoppler").val("aumentado");
  }
 }
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

function valccca() {

 var cc=parseInt($("#cc").val());
 var ca=parseInt($("#ca").val());
 if (cc > 0) {
  if (ca >0 ) {
   var ccca = cc / ca;
   $("#ccca").val(ccca.toFixed(2));
   var pct3 = [];
   var pct97 = [];

 pct3[0] = 1.1;pct3[1] = 1.09;pct3[2] = 1.08;pct3[3] = 1.07;pct3[4] = 1.06;
 pct3[5] = 1.06;pct3[6] = 1.05;pct3[7] = 1.04;pct3[8] = 1.03;pct3[9] = 1.02;
 pct3[10] = 1.01;pct3[11] = 1;pct3[12] = 1;pct3[13] = 0.99;pct3[14] = 0.98;
 pct3[15] = 0.97;pct3[16] = 0.96;pct3[17] = 0.95;pct3[18] = 0.95;pct3[19] = 0.94;
 pct3[20] = 0.93;pct3[21] = 0.92;pct3[22] = 0.91;pct3[23] = 0.9;pct3[24] = 0.89;
 pct3[25] = 0.89;

 pct97[0] = 1.29;pct97[1] = 1.28;pct97[2] = 1.27;pct97[3] = 1.26;pct97[4] = 1.25;
 pct97[5] = 1.24;pct97[6] = 1.24;pct97[7] = 1.23;pct97[8] = 1.22;pct97[9] = 1.21;
 pct97[10] = 1.2;pct97[11] = 1.19;pct97[12] = 1.18;pct97[13] = 1.18;pct97[14] = 1.17;
 pct97[15] = 1.17;pct97[16] = 1.16;pct97[17] = 1.15;pct97[18] = 1.14;pct97[19] = 1.13;
 pct97[20] = 1.12;pct97[21] = 1.11;pct97[22] = 1.1;pct97[23] = 1.09;pct97[24] = 1.08;
 pct97[25] = 1.08;

 var eg=0;
 eg=parseFloat(localStorage.eg);

 if (eg < 15) {
   $("#cccaPct").val('0');
 }
 else if (eg > 40)
 {
   $("#cccaPct").val('0');
 }
 else {
  eg = eg - 15;
  eg = parseInt(eg);
  var uno= pct97[eg] - pct3[eg];
  var dos=ccca - pct3[eg];
 var resultado = parseInt(95 / (uno) * (dos) + 3);
  ajustarProgreso(resultado, "cccaPct");
	 var pctCCCA = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctCCCA = '&gt; 99';
			}
			else if (resultado < 1){
				pctCCCA = '&lt; 1';
			}
			else{
				pctCCCA = resultado;
			}
	 $('#cccaPct').val(pctCCCA);
	  $("#cccaRango").val(pct3[eg] + ' - ' + pct97[eg]);
 }
  } else {
    $("#ccca").val('0');
    $("#cccaPct").val('0');
  }
 } else {
    $("#ccca").val('0');
    $("#cccaPct").val('0');
 }
}

function ajustarProgreso(valor, objeto){
	$("#"+objeto + " > .pivote-uno").html("");
	$("#"+objeto + " > .pivote-dos").html("");
	$("#"+objeto + " > .pivote-cero").html("|");
	$("#"+objeto + " > .pivote-centro").html("|");
	$("#"+objeto + " > .pivote-cien").html("|");
	$("#"+objeto + " > .pivote-tres").html("");
	$("#"+objeto + " > .pivote-cuatro").html("");
	
	if (valor <= 6){
		$("#"+objeto + " > .pivote-cero").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 10){
		$("#"+objeto + " > .pivote-uno").css( "width", "10%");
		$("#"+objeto + " > .pivote-uno").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-dos").css("width", "25%");
	}
	else if (valor <= 20){
		$("#"+objeto + " > .pivote-uno").css( "width", "17.5%");
		$("#"+objeto + " > .pivote-uno").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-dos").css("width", "17.5%");
	}
	else if (valor <= 30){
		$("#"+objeto + " > .pivote-uno").css( "width", "20%");
		$("#"+objeto + " > .pivote-dos").css("width", "15%");
		$("#"+objeto + " > .pivote-dos").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 40){
		$("#"+objeto + " > .pivote-uno").css( "width", "25%");
		$("#"+objeto + " > .pivote-dos").css("width", "10%");
		$("#"+objeto + " > .pivote-dos").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 50){
		$("#"+objeto + " > .pivote-centro").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 60){
		$("#"+objeto + " > .pivote-tres").css( "width", "10%");
		$("#"+objeto + " > .pivote-tres").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-cuatro").css("width", "25%");
	}
	else if (valor <= 70){
		$("#"+objeto + " > .pivote-tres").css( "width", "17.5%");
		$("#"+objeto + " > .pivote-tres").html("<strong style='color:red;'>X</strong>");
		$("#"+objeto + " > .pivote-cuatro").css("width", "17.5%");
	}
	else if (valor <= 80){
		$("#"+objeto + " > .pivote-tres").css( "width", "20%");
		$("#"+objeto + " > .pivote-cuatro").css("width", "15%");
		$("#"+objeto + " > .pivote-cuatro").html("<strong style='color:red;'>X</strong>");
	}
	else if (valor <= 90){
		$("#"+objeto + " > .pivote-tres").css( "width", "25%");
		$("#"+objeto + " > .pivote-cuatro").css("width", "10%");
		$("#"+objeto + " > .pivote-cuatro").html("<strong style='color:red;'>X</strong>");
	}
	else{
		$("#"+objeto + " > .pivote-cien").html("<strong style='color:red;'>X</strong>");
	}
}

function pctut() {

	var pct5 = [];
	var pct95 = [];

	pct5[0] = 1.23; pct5[1] = 1.18;	pct5[2] = 1.11; pct5[3] = 1.05;
	pct5[4] = 0.99; pct5[5] = 0.94;	pct5[6] = 0.89; pct5[7] = 0.85;
	pct5[8] = 0.81; pct5[9] = 0.78;	pct5[10] = 0.74; pct5[11] = 0.71;
	pct5[12] = 0.69; pct5[13] = 0.66;	pct5[14] = 0.64; pct5[15] = 0.62;
	pct5[16] = 0.6; pct5[17] = 0.58;	pct5[18] = 0.56; pct5[19] = 0.55;
	pct5[20] = 0.54; pct5[21] = 0.52;	pct5[22] = 0.51; pct5[23] = 0.51;
	pct5[24] = 0.51; pct5[25] = 0.49;	pct5[26] = 0.48; pct5[27] = 0.48;
	pct5[28] = 0.47; pct5[29] = 0.47;	pct5[30] = 0.47;

	pct95[0] = 2.84; pct95[1] = 2.71;	pct95[2] = 2.53; pct95[3] = 2.38;
	pct95[4] = 2.24; pct95[5] = 2.11;	pct95[6] = 1.99; pct95[7] = 1.88;
	pct95[8] = 1.79; pct95[9] = 1.71;	pct95[10] = 1.61; pct95[11] = 1.54;
	pct95[12] = 1.47; pct95[13] = 1.41;	pct95[14] = 1.35; pct95[15] = 1.3;
	pct95[16] = 1.25; pct95[17] = 1.21;	pct95[18] = 1.17; pct95[19] = 1.13;
	pct95[20] = 1.11; pct95[21] = 1.06;	pct95[22] = 1.04; pct95[23] = 1.01;
	pct95[24] = 0.99; pct95[25] = 0.97;	pct95[26] = 0.95; pct95[27] = 0.94;
	pct95[28] = 0.92; pct95[29] = 0.91;	pct95[30] = 0.91;
	var eg=0;
 
	eg=parseFloat(localStorage.eg);
	var utd = $("#aud").val();
	utd = utd.toString(); 
 	utd = utd.replace(",", ".");
 	utd = parseFloat(utd);
	var uti =$("#aui").val();
	uti = uti.toString();
 	uti = uti.replace(",", ".");
 	uti = parseFloat(uti);
	
	var utprom = ((uti + utd) / 2)
	$("#auprom").val(utprom.toFixed(2));

	if (eg < 10) {  
		$("#audPct").val('0');
		$("#auiPct").val('0');
		$("#auPct").val('0');
	 }
	 else if (eg > 40)
	 {
	   $("#audPct").val('0');
	   $("#auiPct").val('0');
	   $("#auPct").val('0');
	 }
	 else {
		eg = eg - 10;
		var uno=0;
		var dos=0;
		 var resultado = '';
		if (utd > 0){
			eg = parseInt(eg);
			uno=pct95[eg] - pct5[eg];
			dos=utd - pct5[eg];
			resultado = parseInt(90 / (uno) * (dos) + 5);
			ajustarProgreso(resultado, "audPct");
			var pctUTD = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctUTD = '&gt; 99';
			}
			else if (resultado < 1){
				pctUTD = '&lt; 1';
			}
			else{
				pctUTD = resultado;
			}
			$("#audPctTxt").val(pctUTD);
                        $("#audRngo").val(pct5[eg] + " - " + pct95[eg]);
		}
		if (uti > 0){
			eg = parseInt(eg);
			uno=pct95[eg] - pct5[eg];
			dos=uti - pct5[eg];
			$('#auiPct').val(parseInt(90 / (uno) * (dos) + 5));
			resultado = parseInt(90 / (uno) * (dos) + 5);
			ajustarProgreso(resultado, "auiPct");
			var pctUTI = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctUTI = '&gt; 99';
			}
			else if (resultado < 1){
				pctUTI = '&lt; 1';
			}
			else{
				pctUTI = resultado;
			}
			$("#auiPctTxt").val(pctUTI);
                        $("#auiRngo").val(pct5[eg] + " - " + pct95[eg]);
		}
		if ($("#aud").val() && $("#aui").val()){
			uno = pct95[eg] - pct5[eg];
			dos = utprom - pct5[eg];
			$('#auPct').val(parseInt(90 / (uno) * (dos) + 5));
			resultado = parseInt(90 / (uno) * (dos) + 5);
			ajustarProgreso(resultado, "auPct");
			var pctAUD = '';
			//truncador de Pct, sobre 100 o bajo 1
			if (resultado > 99){
				pctAUD = '&gt; 99';
			}
			else if (resultado < 1){
				pctAUD = '&lt; 1';
			}
			else{
				pctAUD = resultado;
			}
			$("#auPctTxt").val(pctAUD);
                        $("#auRngo").val(pct5[eg] + " - " + pct95[eg]);
		}
	 }
}

function imprSelec(muestra)
{
	var ficha=$("#"+muestra).html();
	var document = '<!DOCTYPE html><html lang="es-CL"><head><meta charset="utf-8"><title>Impresión de Gráficos</title><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel="stylesheet" href="consulta.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">:ESTILO</head><body><div class="container"><div style="width:35%;text-align:center;" class="membrete">:MEMBRETE</div></div><div class="container" style="margin-top:50px !important;">:DATOS</div>:FUNCION</body></html>';
	var ventimp= window.open(" ","popimpr");
	var estilo = '<style>@media print {.col{width:40%; height:30% float:left;}.text-center{text-align:center;}.pie-pagina{font-size:9px;}.pie-pagina-dos{font-size:10px;}#lineclear{clear:both;}h4{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;}.membrete::first-letter{font-size:14px;}.membrete::first-line {font-size: 14px;}.membrete {font-size: 10px;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	//var membrete = $("#membrete").val().replace(/\r\n|\r|\n/g,"<br />");
	
	var day = ("0" + aplication.day.getDate()).slice(-2);
	var month = ("0" + (aplication.day.getMonth() + 1)).slice(-2);
	var dateInf = (day)+"/"+(month)+"/"+aplication.day.getFullYear();
	
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

function imprInforme(muestra)
{
	event.preventDefault();
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

function p50() {

    //calcular dbp
    const N7 = new Number(9.468544279);
    const N8 = new Number(1.015432196);
    var dbp= $('#dbp').val();
    var N = new Number(N7 * Math.pow(N8, dbp));
    dbp = Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

    var c1 = new Number(9.413641651);
    var c2 = new Number(1.004137705);
    var cc = $('#cc').val();
    N = new Number(c1 * Math.pow(c2, cc));
    cc =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

    c1 = new Number(11.20178254);
    c2 = new Number(1.01704237);
    var lf = $('#lf').val();
    N = new Number(c1 * Math.pow(c2, lf));
    lf =  Math.floor(N) + "." + Math.round((N - Math.floor(N)) * 7);

    var  humeroPromedioDE = [];

    humeroPromedioDE[10]=12.4;humeroPromedioDE[11]=12.6;humeroPromedioDE[12]=13.1;humeroPromedioDE[13]=13.4;
    humeroPromedioDE[14]=13.6;humeroPromedioDE[15]=14.1;humeroPromedioDE[16]=14.4;humeroPromedioDE[17]=14.6;
    humeroPromedioDE[18]=15.1;humeroPromedioDE[19]=15.4;humeroPromedioDE[20]=15.6;humeroPromedioDE[21]=16.2;
    humeroPromedioDE[22]=16.5;humeroPromedioDE[23]=17.1;humeroPromedioDE[24]=17.3;humeroPromedioDE[25]=17.6;
    humeroPromedioDE[26]=18.1;humeroPromedioDE[27]=18.4;humeroPromedioDE[28]=19;humeroPromedioDE[29]=19.3;
    humeroPromedioDE[30]=19.6;humeroPromedioDE[31]=20.2;humeroPromedioDE[32]=20.5;humeroPromedioDE[33]=21.1;
    humeroPromedioDE[34]=21.4;humeroPromedioDE[35]=22;humeroPromedioDE[36]=22.4;humeroPromedioDE[37]=22.6;
    humeroPromedioDE[38]=23.3;humeroPromedioDE[39]=23.6;humeroPromedioDE[40]=24.2;humeroPromedioDE[41]=24.6;
    humeroPromedioDE[42]=25.2;humeroPromedioDE[43]=25.5;humeroPromedioDE[44]=26.1;humeroPromedioDE[45]=26.5;
    humeroPromedioDE[46]=27.1;humeroPromedioDE[47]=27.5;humeroPromedioDE[48]=28.1;humeroPromedioDE[49]=28.6;
    humeroPromedioDE[50]=29.2;humeroPromedioDE[51]=29.6;humeroPromedioDE[52]=30.2;humeroPromedioDE[53]=30.6;
    humeroPromedioDE[54]=31.3;humeroPromedioDE[55]=32;humeroPromedioDE[56]=32.4;humeroPromedioDE[57]=33.1;
    humeroPromedioDE[58]=33.4;humeroPromedioDE[59]=34.1;humeroPromedioDE[60]=34.6;humeroPromedioDE[61]=35.2;
    humeroPromedioDE[62]=35.6;humeroPromedioDE[63]=36.4;humeroPromedioDE[64]=37.1;humeroPromedioDE[65]=37.5;
    humeroPromedioDE[66]=38.2;humeroPromedioDE[67]=38.6;humeroPromedioDE[68]=39.4;humeroPromedioDE[69]=40.1;

     var dbpdias = (Math.floor(dbp) * 7) + ((dbp - Math.floor(dbp)) * 10);
     var ccdias = (Math.floor(cc) * 7) + ((cc - Math.floor(cc)) * 10);
     var lfdias = (Math.floor(lf) * 7) + ((lf - Math.floor(lf)) * 10);

    var cb = $('#cerebelo').val();

    if (cb > 0) {
        cb = cb / 10;
        var egHill = 6.37+(5.4*cb)+(0.78*Math.pow(cb,2))-(0.13*Math.pow(cb,3));
        //añadir mayor presicion, ya se suma 1 dia
        cb = Math.round( egHill * 10 ) / 10;
	
        var cbdias = (Math.floor(cb) * 7) + ((cb - Math.floor(cb)) * 10);
        egbio = (ccdias + lfdias + cbdias) /3;
     }
     else {
        egbio = (dbpdias + ccdias + lfdias) /3;
     }

     var lh = parseInt($('#lh').val());
     if (lh > 0) {
	lh =  humeroPromedioDE[lh];
        var lhdias = (Math.floor(lh) * 7) + ((lh - Math.floor(lh)) * 10);
        egbio = (lhdias + egbio) /2;
     }

     egbio = Math.floor(egbio / 7)+"."+ Math.floor(egbio - (Math.floor(egbio/7) *7));

     $('#egP50').val(egbio);
    }

function ipn() {
    var talla = $('#tallaFetal').val();
    var peso = $('#pfe').val();

    if (talla > 0) {
        if (peso > 0) {
            var IPN = peso / (Math.pow((talla * 10), 3));
            IPN = IPN * 100000;
           $('#ipn').val(IPN.toFixed(2));
	
	   var Pct10IPN = [];
	   var Pct90IPN = [];
		
	   Pct10IPN[24] = 1.79;	   Pct10IPN[25] = 1.83;
	   Pct10IPN[26] = 1.87;	   Pct10IPN[27] = 1.91;
	   Pct10IPN[28] = 1.95;	   Pct10IPN[29] = 1.99;
	   Pct10IPN[30] = 2.04;	   Pct10IPN[31] = 2.08;
	   Pct10IPN[32] = 2.12;	   Pct10IPN[33] = 2.16;
	   Pct10IPN[34] = 2.2;	   Pct10IPN[35] = 2.25;
	   Pct10IPN[36] = 2.29;	   Pct10IPN[37] = 2.33;
	   Pct10IPN[38] = 2.37;	   Pct10IPN[39] = 2.41;
	   Pct10IPN[40] = 2.45;	   Pct10IPN[41] = 2.5;
	   Pct10IPN[42] = 2.54;
		
	   Pct90IPN[24] = 2.54;	   Pct90IPN[25] = 2.57;
	   Pct90IPN[26] = 2.59;	   Pct90IPN[27] = 2.62;
	   Pct90IPN[28] = 2.65;	   Pct90IPN[29] = 2.68;
	   Pct90IPN[30] = 2.71;	   Pct90IPN[31] = 2.74;
	   Pct90IPN[32] = 2.77;	   Pct90IPN[33] = 2.8;
	   Pct90IPN[34] = 2.83;	   Pct90IPN[35] = 2.86;
	   Pct90IPN[36] = 2.89;	   Pct90IPN[37] = 2.92;
	   Pct90IPN[38] = 2.95;	   Pct90IPN[39] = 2.98;
	   Pct90IPN[40] = 3.01;	   Pct90IPN[41] = 3.04;
	   Pct90IPN[42] = 3.07;
	
	   var eg = parseFloat(localStorage.eg);
           eg = parseInt(eg);
           var uno=Pct90IPN[eg] - Pct10IPN[eg];
           var dos=IPN - Pct10IPN[eg];

           ajustarProgreso(parseInt(80 / (uno) * (dos) + 10), "IPNPct");

        }
    }
}

function valCC(dof,dbp){
    var delta = parseFloat(1.60);
    return Math.round((parseInt(dof) + parseInt(dbp)) * delta);
}
