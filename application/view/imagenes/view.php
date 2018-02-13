<html lang='es'>
   <head>
      <meta charset='utf-8'>
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'>
      <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
   </head>
   <body>
      <div class='container'>
         <div style='width:35%;text-align:center;'>:MEMBRETE</div>
      </div>
      <div class='container my-4'>
         <h3 class='text-center'>Impresión de Imágenes Gineco-Obstera</h3>
         <span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;margin-bottom:15px;'></span> 
         <p style='font-size: 0.8rem;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Edad Materna: </strong> :EDADMATERNA años.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Fecha de Exámen: </strong>:FEXAMEN<br><strong> ID Paciente: </strong>:IDPACIENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Motivo de exámen: </strong> :MOTIVO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong> Patología Obstétrica: </strong>:PATOLOGIAOBSTETRICA</p>
      </div>
      <div class='container' id="fotosContainer"></div>
      <div class='container'>
         <p class='text-right' style='margin-right:100px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p>
         <span style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> 
         <p style='font-size: 0.8rem;'>Fecha Informe: :DATEINFORME</p>
         <span style='border-top: 2px solid #000;width: 100% !important;display: block;'></span> 
         <p style='font-size: 0.5rem;'>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>El software tiene por objetivo favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p>
      </div>
      <script>
        $(document).ready(function(){
            $.get("<?php echo Config::get('URL'); ?>dicom/getimages/<?php echo $this->user_id; ?>").done(function(data) {
                $("#fotosDicom").html(" ");
                if (data.DCM = true){
                    gString = ""
                    contadorIMG = 1;
                    contIMG = 1;
                    $.each(data.JPGFiles, function(i, item) {
                        if (contadorIMG == 1){
                            gString = gString + "<div class='row mb-4'>";
                        }
                        gString = gString + "<div class='col-4'><img alt='200x200' style='width: 300px; height: 300px;' src='<?php echo Config::get('URL'); ?>data/<?php echo $this->user_id; ?>/" + item +"'></div>";
                        if (contadorIMG == 3){
                            gString = gString + "</div>";
                            contadorIMG = 1;
                        }
                        contadorIMG = contadorIMG +1;
                        contIMG = contIMG +1;
                    });

                    $("#fotosContainer").append(gString);
                }
            });
        })
      </script>
   </body>
</html>