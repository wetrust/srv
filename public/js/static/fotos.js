var RUTPACIENTE = "";
$(document).ready(function(){
    $("#id-paciente").on("change", function(){
      RUTPACIENTE = $(this).val();
    
$.get( serverURL + "dicom/getimages/" + $(this).val())
  .done(function(data) {
    $("#fotosDicom").html(" ");
    if (data.DCM = true){
 $.each(data.JPGFiles, function(i, item) {
        $("#fotosDicom").append( "<div class='col-3'><img class='rounded' alt='200x200' style='width: 200px; height: 200px;' src='" + serverURL + "data/" + RUTPACIENTE + "/" + item +"'><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' name='fotosElegidas'>Seleccionar</label></div></div>" );
    });
$("#fotosDicom").append("<button class='btn btn-primary' id='imprimirFotos'>Imprimir</button>");
    $("#imprimirFotos").on("click", function(){
        var fotosArreglo = [];
        var contadorIMG = 1
        $("input[name='fotosElegidas']").each(function () {
          if(this.checked == true){
            var img = $(this).parent().parent().parent();
            var divContenedor = $(img).children("img");
            var gString = "";
            if (contadorIMG == 1){
              gString = "<div class='row mb-4'>";
            }
            gString = gString + "<div class='col-4'><img style='height: 270px;width: 270px;max-width: 270px;max-height: 270px;' src=" + $(divContenedor).attr('src')+ "></div>";
            if (contadorIMG == 3){
              gString = gString + "</div>";
            }
            fotosArreglo.push(gString);
            contadorIMG = contadorIMG +1;
          };
      });

	event.preventDefault();
  var document = "<html lang='es'> <head> <meta charset='utf-8'> <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'> <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'>:ESTILO</head> <body> <div class='container'> <div style='width:35%;text-align:center;'>Consulta<br>Consulta<br>Consulta</div> </div> <div class='container my-4'> <h3 class='text-center'>Impresión de Imágenes Gineco-Obstera</h3> <span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span> <p style='font-size: 0.8rem;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN<br><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p> </div> <div class='container'>:DATOS</div> <div class='container'> <p class='text-right' style='margin-right:100px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p> <span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p style='font-size: 0.8rem;'>Fecha Informe: :DATEINFORME</p> <span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> <p style='font-size: 0.5rem;'>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p> </div>:FUNCION</body></html>";
	var ventimp = window.open(" ","popimpr");
	//var estilo = '<style>@media print{*{margin:0;padding:0;border:0}p,th,td{font-size:11px;line-height:17px;margin-bottom:7px}th,td{margin:0 !important;padding:0 !important}.pie-pagina{font-size:9px}.pie-pagina-dos{font-size:10px}#lineclear{clear:both}h3{font-size:130%;text-align:center}h3::first-letter{font-size:100%}.membrete::first-letter{font-size:14px;}.membrete::first-line{font-size:14px;}.membrete{font-size:10px;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	var membrete = $("#membrete").val().replace(/\r\n|\r|\n/g,"<br />");
	
	document = document.replace(":DATOS", fotosArreglo.toString());
	//document = document.replace(":ESTILO", estilo);
	//document = document.replace(":FUNCION", funcion);
	
	ventimp.document.write(document);
	ventimp.document.close();
  ventimp.show();
    });

}
  })
  .fail(function() {
    $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
  });

    });
});
