<html lang='es'>
   <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'>
      <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
      <style>@page { margin: 0; }</style>
   </head>
   <body class="mt-5 pt-5">
      <div class='container'>
         <div style='width:30%;text-align:center;'></div>
      </div>
      <div class='container mt-5 pt-5'>
         <h3 class='text-center mt-5'>Impresión de Imágenes Gineco-Obstétrica</h3>
         <span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span> 
         <p style='font-size: 0.8rem;'><strong>Paciente Sra. (Srta.): </strong><span id="nombre.paciente"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>RUT: </strong><span><?php echo $this->user_id; ?></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong><span id="fecha.examen"></span></p>
      </div>
      <div class='container' id="fotosContainer"></div>
      <div class='container'>
         <span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> 
         <p style='font-size: 0.8rem;'>Fecha Informe: <span id="fecha.informe"></span></p>
         <span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> 
         <p style='font-size: 0.7rem;'>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p>
      </div>
      <script>
        var contains = function(needle) {
            // Per spec, the way to identify NaN is that it is not equal to itself
            var findNaN = needle !== needle;
            var indexOf;

            if(!findNaN && typeof Array.prototype.indexOf === 'function') {
                indexOf = Array.prototype.indexOf;
            } else {
                indexOf = function(needle) {
                    var i = -1, index = -1;

                    for(i = 0; i < this.length; i++) {
                        var item = this[i];

                        if((findNaN && item !== item) || item === needle) {
                            index = i;
                            break;
                        }
                    }

                    return index;
                };
            }

            return indexOf.call(this, needle) > -1;
        };

        $(document).ready(function(){

            //obtener la hora actual
            var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            var f = new Date();
            var g = String(<?php echo $this->StudyDate; ?>);
            $("#fecha\\.informe").html(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
            $("#fecha\\.examen").html(g.substr(6,2) + " de " + g.substr(4,2) + " de " + g.substr(0,4));
            

            $.get("<?php echo Config::get('URL'); ?>configuracion/obtenernombre/<?php echo $this->user_id; ?>").done(function(data) {
                if (data.length > 0 ){
                    var nombre = data[0].PatientNam.split("^");
                    $("#nombre\\.paciente").html(nombre[1] + " " + nombre[0]);
                }
            });



            $.get("<?php echo Config::get('URL'); ?>dicom/getimages/<?php echo $this->user_id; ?>/<?php echo $this->StudyDate; ?>").done(function(data) {
                listIMG = JSON.parse("[<?php echo $this->img_id; ?>]")
                gString = ""
                contadorIMG = 1;
                contIMG = 1;
                totJPG = listIMG.length;
                $.each(data.JPGFiles, function(i, item) {
                    needle = i,
                    index = contains.call(listIMG, needle);

                    if (index == true){
                        if (contadorIMG == 1){
                            gString = gString + "<div class='row mb-4'>";
                        }
                        
                        if (totJPG <= 4){
                            gString = gString + "<div class='col-6'><img alt='200x200' style='width: 480px; height: 361px;' class='d-block mx-auto' src='<?php echo Config::get('URL'); ?>data/" + item +"'></div>";
                            if (contadorIMG == 2){
                                gString = gString + "</div>";
                                contadorIMG = 0;
                            }
                        }
                        else if (totJPG => 6){
                            gString = gString + "<div class='col-6'><img alt='200x200' style='width: 352px; height: 275px;' class='d-block mx-auto' src='<?php echo Config::get('URL'); ?>data/" + item +"'></div>";
                            if (contadorIMG == 2){
                                gString = gString + "</div>";
                                contadorIMG = 0;
                            }
                        }

                        if (contIMG == totJPG && contIMG != 2 && contIMG != 6){
                            gString = gString + "</div>";
                        }
                        
                        contadorIMG = contadorIMG +1;
                        contIMG = contIMG +1;
                    } 
                });
                $("#fotosContainer").append(gString);
            })
        })
      </script>
   </body>
</html>