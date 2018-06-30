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
////////////////////////////////////////////

$("input[name='ajustarEcoPrimTrim']").on("change", function(){
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