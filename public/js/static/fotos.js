var RUTPACIENTE = "";
$(document).ready(function(){
    $("#id-paciente").on("change", function(){
      RUTPACIENTE = $(this).val();
    
$.get( "http://192.168.1.198/dicom/getimages/" + $(this).val())
  .done(function(data) {
    $("#fotosDicom").html(" ");
    if (data.DCM = true){
 $.each(data.JPGFiles, function(i, item) {
        $("#fotosDicom").append( "<div class='col-3'><img class='rounded' alt='200x200' style='width: 200px; height: 200px;' src='http://192.168.1.198/data/" + RUTPACIENTE + "/" + item +"'><div class='form-check'><label class='form-check-label'><input type='checkbox' class='form-check-input' name='fotosElegidas'>Seleccionar</label></div></div>" );
    });
$("#fotosDicom").append("<button class='btn btn-primary' id='imprimirFotos'>Imprimir</button>");
    $("#imprimirFotos").on("click", function(){
        var fotosArreglo = [];
        $("input[name='fotosElegidas']").each(function () {
          if(this.checked == true){
            var img = $(this).parent().parent().parent();
            var divContenedor = $(img).children("img");
            fotosArreglo.push("<img class='rounded' alt='200x200' style='width: 300px; height: 300px;' src=" + $(divContenedor).attr('src')+ ">");
          };
      });

	event.preventDefault();
var document = '<!DOCTYPE html><html lang="es-CL"><head><meta charset="utf-8"><title>Impresión de Gráficos</title><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"><link rel="stylesheet" href="consulta.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">:ESTILO</head><body><div class="container" style="margin-top:50px !important;">:DATOS</div>:FUNCION</body></html>';
	var ventimp = window.open(" ","popimpr");
	var estilo = '<style>@media print{*{margin:0;padding:0;border:0}p,th,td{font-size:11px;line-height:17px;margin-bottom:7px}th,td{margin:0 !important;padding:0 !important}.pie-pagina{font-size:9px}.pie-pagina-dos{font-size:10px}#lineclear{clear:both}h3{font-size:130%;text-align:center}h3::first-letter{font-size:100%}.membrete::first-letter{font-size:14px;}.membrete::first-line{font-size:14px;}.membrete{font-size:10px;}}</style>';
	var funcion = '<script>document.addEventListener("DOMContentLoaded",function(event){var ventimp=window;ventimp.print();ventimp.close();});</script>';
	var membrete = $("#membrete").val().replace(/\r\n|\r|\n/g,"<br />");
	
	document = document.replace(":DATOS", fotosArreglo.toString());
	document = document.replace(":ESTILO", estilo);
	document = document.replace(":FUNCION", funcion);
	
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
