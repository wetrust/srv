function construirGraficos() {
        $('#graficolcn').highcharts({
        title: {
            text: 'LCN',
            x: -20 //center
        },
        xAxis: {
            categories: ['6', '7', '8', '9', '10',  '11', '12', '13', '14', '15']
        },
        yAxis: {
            title: {
                text: 'Milimetros (mm)'
            },
            tickPositions: [0.2, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11]
        },
        credits: {enabled:false},
        colors: ['#313131', '#313131', '#313131'],
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
         },
        series: [{
            name: '(-) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.26, 0.77, 1.4, 2.05, 2.75,3.65, 4.64, 5.82, 7.1, 8.02]
        }, {
            name: 'Media',
            type: "line",
            marker: { enabled: false },
            data: [0.38, 0.89, 1.54, 2.25, 3.05,4.05, 5.29, 6.65, 7.98, 9.01]
        }, {
            name: '(+) 2DE',
            type: "line",
            marker: { enabled: false },
            data: [0.53, 1.04, 1.71, 2.49, 3.42,4.64, 6.12, 7.67, 9.01, 10.01]
        }]
    });
}

$( '#infecoObsSegTrim1' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfica evaluación ecográfica del crecimiento fetal");
    $( '#impEcoObsSegTrim1').remove();
    $( '#infecoObsSegTrim1Clon').remove();
    $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impEcoObsSegTrim1'>Ver Impresion</button>");
    var stringGraficos = "<div class='container'><div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica evaluación ecográfica del crecimiento fetal</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><hr class='d-none'><div class='row'> <div class='col'> <div id='graficoInfecoObsSegTrimPFEView'></div></div><div class='col'> <div class='row'> <div class='col-12'> <div id='graficoCaView'></div></div><div class='col-12'> <div id='graficoBVMView'></div></div></div></div></div><div class='row' id='lineclear'> <div class='col'> <p class='d-none' style='font-size:10px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> <br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina d-none'>* Evaluación del crecimiento fetal, según referencia propuesta por Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad pct. 10 a 90) <br>** Circunferencia Ambominal según referencia de Hadlock y col. Radiology 152:497 - 501, 1984. (Normalidad Pct 3 a 97) <br>*** Liquido Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000 <br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil. <br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
    var comentarios = $("#comentarios-eco-dos-inf-dos").val();
    
    var paciente = $( '#nombre-paciente').val()+ " " + $( '#apellido-paciente').val();
    paciente = paciente.toLowerCase();
    var idpaciente = $( '#id-paciente').val();
    var fexamen = $( "input[name='fee']").val();
    var ecografista = $( '#ecografista option:selected').text();
    stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
    stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
	stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
	stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);


    if(typeof comentarios == 'undefined'){
	     comentarios = 'Crecimiento (peso) percentil ' + parseInt($('#pfePctRpt').val()) + ', para gráfica de peso fetal Hadlock*<br />Bolsillo vertical mayor de ' + document.getElementById("bvm").value + ' mm';
    }
    else{
	     comentarios = $("#comentarios-eco-dos-inf-dos").val().replace(/\r\n|\r|\n/g,"<br />");
    }
    stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);
        
    $('#graficosBody').html(stringGraficos);
    $( '#impEcoObsSegTrim1').on("click", function(){
      imprSelec("graficosBody");
    });
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoInfecoObsSegTrimPFEView').highcharts({
            chart: {
            height: 512
        },
       title: {
           text: 'Peso Fetal Estimado *',
           x: -20, //center
               style: {
            fontSize: '14px'
        }
       },
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
       plotOptions: {
           series: {
               enableMouseTracking: false,
               pointInterval: 1
           }
       },
       yAxis: {
           title: { text: 'Kilogramos' },
           tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct 3',
           dashStyle: "Dot",
           marker: {enabled: false},
           data: [110,136,167,205,248,299,359,426,503,589,685,791,908,1034,1169,1313,1465,1622,1783,1946,2110,2271,2427,2576,2714]
       }, {
           type: "line",
           name: 'Pct 10',
           marker: { enabled: false },
           data: [121,150,185,227,275,331,398,471,556,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,2985]
       }, {
           type: "line",
           name: 'Pct 90',
           marker: { enabled: false },
           data: [171,212,261,319,387,467,559,665,784,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234]
       }, {
           type: "line",
           name: 'Pct 97',
           dashStyle: "Dot",
           marker: { enabled: false, },
           data: [183,226,279,341,414,499,598,710,838,981,1141,1319,1513,1724,1949,2189,2441,2703,2971,3244,3516,3785,4045,4294,4474]
       }, {
           type: "line",
           name: 'Peso',
           dashStyle: "Dot",
           marker: {symbol:'square'},
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) -1;

               for (i = 16; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseFloat($('#pfe').val()),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
    });
    $('#graficoCaView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Circunferencia Abdominal **',
           x: -20, //center
               style: {
            fontSize: '14px'
        }
       },
       subtitle: {
           text: 'Milimetros (mm)',
           x: -20
       },
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [20, 60, 100, 140, 180, 220, 260, 300, 340, 400]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: { enabled: false },
       series: [{
           type: "line",
           name: 'Pct. 3',
           dashStyle: "Dot",
           marker: { enabled: false },
           data: [40,50,60,72,84,97,107,119,131,141,151,161,171,181,191,200,209,218,227,236,245,253,261,269,277,285,292,299,307]
       }, {
           type: "line",
           name: 'Pct 97',
           dashStyle: "Dot",
           marker: { enabled: false },
           data: [68,78,88,101,112,127,141,155,168,183,196,209,223,235,248,260,271,284,295,306,318,329,339,349,359,370,380,389,399]
       }, {
           type: "line",
           name: 'CA',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }

               var ca = $("#ca").val();
               ca = ca.toString();
               ca = ca.replace(",", ".");
               ca = parseFloat(ca);

               data.push({
                   y:ca,
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
        
   $('#graficoBVMView').highcharts({
             chart: {
             height: 250
         },
         title: {
             text: 'BVM de Líquido Amniótico ***',
             x: -20,
                 style: {
             fontSize: '14px'
         }
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
             legend: {
             itemStyle: {
                 fontSize: '10px',
                 fontWeight:'normal'
             }
         },
         yAxis: {
             title: { text: 'Milimetros (mm)' },
             tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
         },
         colors: ['#313131','#313131','#313131'],
         xAxis: {
             categories: ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         credits: {enabled:false},
         series: [{
             type: "line",
             name: 'Pct. 5',
             dashStyle: "Dot",
             marker: {enabled:false},
             data: [23,25,27,28,29,29,30,30,30,30,30,30,30,29,29,29,29,29,28,28,27,26,24,23,21]
         }, {
             type: "line",
             name: 'Pct. 95',
             dashStyle: "Dot",
             marker: { enabled: false },
             data: [59,62,64,66,67,68,68,68,68,68,68,69,69,69,69,70,71,72,72,72,71,70,68,66,62]
         }, {
             type: "line",
             name: 'BVM',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (
                 function () {
                     var data = [];
                     var edadGest = parseInt(localStorage.eg) -1;
 
                     for (i = 16; i <= edadGest; i ++ ) {
                         data.push({
                             y: 0,
                         });
                     }
                     data.push({
                             y: parseFloat($('#bvm').val()),
                         });
                     for (i = edadGest +1; i <= 39; i ++ ) {
                         data.push({
                             y: 0,
                         });
                     }
                     return data;
                 }())
             }]
     });
    $('#popupGraficos').modal('show');
});

$( '#infecoObsSegTrim2' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfica Determinación Ecográfica (Tardía) de la Edad Gestacional");
    $( '#impEcoObsSegTrim2').remove();
    $( '#infecoObsSegTrim1Clon').remove();
    $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impEcoObsSegTrim2'>Ver Impresion</button>");
    var stringGraficos = "<div class='container'><div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica Determinación Ecográfica (Tardía) de la Edad Gestacional</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><hr class='d-none'><div class='row'><div class='col'><div id='graficoCcView'></div></div><div class='col'><div id='graficoCerebeloView'></div></div></div><div class='row'><div class='col'><div id='graficoLfView'></div></div><div class='col'><div id='graficoLhView'></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:12px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Para la evaluación morfológica fetal, ceñirse a recomendaciones oficiales vigentes, para Chile: Guías Perinatales MINSAL 2015<br>Ver dirección web: http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf<br>** Referencias: CC y LF Hadlock y col. 1984; LH Jeanty y col.<br>*** Diámetro cerebeloso transverso Hill LM. y col. Obstet Gynecol. 1990; 75(6) : 981-5<br>**** Referencia liq. amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
    var fur = $( "input[name='fum']").val();
    var fpp = $( "input[name='fpp']").val();

    var comentarios = $("#comentarios-eco-dos-inf-dos").val();
    var paciente = $( '#nombre-paciente').val()+ " " + $( '#apellido-paciente').val();
    paciente = paciente.toLowerCase();
    var idpaciente = $( '#id-paciente').val();
    var fexamen = $( "input[name='fee']").val();
    var ecografista = $( '#ecografista option:selected').text();
    stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
    stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
    stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
    stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);

    if(typeof comentarios == 'undefined'){
        comentarios = "Fum operacional: " + fur + "<br>Fecha probable de parto: " + fpp + "<br>";
    }
    else{
	comentarios = $("#comentarios-eco-dos-inf-dos").val().replace(/\r\n|\r|\n/g,"<br />");
    }

    stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);
        
    $('#graficosBody').html(stringGraficos);
    $( '#impEcoObsSegTrim2').on("click", function(){
      imprSelec("graficosBody");
    });
    $( '#impEcoObsSegTrim1').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoCcView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Circunferencia de Cráneo',
           x: -20,
               style: {
            fontSize: '14px'
        }
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [30, 72, 114, 156, 198, 240, 282, 324, 366, 408]
       },
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: {enabled: false},
       series: [{
           type: "line",
           name: 'Pct. 3',
           dashStyle: "Dot",
           marker: {enabled: false},
           data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
       }, {
           type: "line",
           name: 'Pct. 97',
           dashStyle: "Dot",
           marker: {enabled: false},
           data: [90,100,111,124,136,150,165,179,193,206,219,232,243,256,268,279,290,300,310,319,328,336,343,351,358,363,368,373,377]
       }, {
           type: "line",
           name: 'CC',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({
                       y: 0,
                   });
               }
               data.push({
                   y: parseInt(document.getElementById("cc").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
   $('#graficoCerebeloView').highcharts({
           chart: {
            height: 250
        },
            title: {
                text: 'Diámetro de Cerebelo',
                x: -20,
                    style: {
            fontSize: '14px'
        }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: { text: 'Milimetros (mm)' },
                tickPositions: [5, 10,20,30,40,50,60,70]
            },
           legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: {enabled: false},
            series: [{
                type: "line",
                name: '-2DE',
                dashStyle: "Dot",
                marker: {enabled: false},
                data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44]
            }, {
                type: "line",
                name: 'media',
                dashStyle: "Dot",
                marker: {enabled: false},
                data: [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52]
            }, {
                type: "line",
                name: '+2DE',
                dashStyle: "Dot",
                marker: {enabled: false},
                data: [18, 18, 19, 20, 22, 23, 25, 26, 27, 30, 32, 34, 34, 37, 38, 41, 43, 46, 48, 53, 56, 58, 60, 62, 62, 62]
            }, {
                type: "line",
                name: 'Cerebelo',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 15; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseInt(document.getElementById("cerebelo").value),
                    });
                    for (i = edadGest + 1; i <= 39; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
        });
    $('#graficoLfView').highcharts({
            chart: {
            height: 250
        },
       title: {
           text: 'Largo Femoral',
           x: -20,
               style: {
            fontSize: '14px'
        }
       },
       plotOptions: {
           series: {
               enableMouseTracking: false
           }
       },
            legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
       yAxis: {
           title: { text: 'Milimetros (mm)' },
           tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
       },
       colors: ['#313131', '#313131', '#313131'],
       xAxis: {
           categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
       },
       credits: { enabled: false },
       series: [{
           type: "line",
           name: 'Pct. 3',
           dashStyle: "Dot",
           marker: { enabled: false },
           data: [6,9,12,14,17,20,22,25,27,30,32,35,37,40,42,45,47,49,52,54,56,58,59,61,62,64,65,66,67]
       }, {
           type: "line",
           name: 'Pct. 97',
           dashStyle: "Dot",
           marker: { enabled: false },
           data: [12,15,18,21,24,28,31,34,38,41,44,47,50,53,55,57,60,62,65,67,70,71,73,75,77,79,80,81,82]
       }, {
           type: "line",
           name: 'LF',
           dashStyle: "Dot",
           marker: { symbol: 'square' },
           lineWidth: 0,
           data: (function () {
               var data = [];
               var edadGest = parseInt(localStorage.eg) - 1;

               for (i = 12; i <= edadGest; i++) {
                   data.push({ y: 0, });
               }
               data.push({
                   y: parseInt(document.getElementById("lf").value),
               });
               for (i = edadGest + 1; i <= 39; i++) {
                   data.push({
                       y: 0,
                   });
               }
               return data;
           }())
       }]
   });
   $('#graficoLhView').highcharts({
           chart: {
            height: 250
        },
            title: {
                text: 'Largo Humeral',
                x: -20,
                    style: {
            fontSize: '14px'
        }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
           legend: {
            itemStyle: {
                fontSize: '10px',
                fontWeight:'normal'
            }
        },
            yAxis: {
                title: { text: 'Milimetros (mm)' },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories:['12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
            },
            credits: { enabled: false },
            series: [{
                type: "line",
                name: 'Pct. 5',
                dashStyle: "Dot",
                marker: { enabled: false },
                data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
                marker: { enabled: false },
                data: [12.3, 15.1, 17.9, 20.7, 23.5, 26.3, 29.1, 31.6, 34.2, 36.7, 39.2, 41.6, 43.9, 46.1, 48.1, 50.1, 52.1, 53.9, 55.6, 57.3, 58.9, 60.5, 62.1, 63.5, 64.9, 66.4, 67.8, 69.3, 70.8]
            }, {
                type: "line",
                name: 'Humero',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 12; i <= edadGest; i++) {
                        data.push({ y: 0, });
                    }
                    data.push({
                        y: parseInt(document.getElementById("lh").value),
                    });
                    for (i = edadGest + 1; i <= 39; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    return data;
                }())
            }]
    });
    $('#popupGraficos').modal('show');
});

$( '#graficoTallaPeso' ).on( 'click', function() {
    $('#graficosTitle').html("Análisis Talla Peso según referencias postnatales");
    $('#graficosBody').html("<div id='viewGraficoTallaPeso'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoTallaPeso').highcharts({
    title: {
        text: 'Análisis Talla Peso según referencias postnatales'
    },
    subtitle: {
        text: 'Alarcón y col. 2008'
    },
    xAxis: [{
        categories: ['24', '25', '26', '27', '28', '29',
            '30', '31', '32', '33', '34', '35','36','37','38','39','40','41','42'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Talla Fetal',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true,
        min:5,
        max: 55,
        tickAmount: 5

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Peso',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} kgs',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        min:5
    }],
    tooltip: {
        shared: true
    },
    credits: { enabled: false },
    series: [{
        name: 'Peso PCT90',
        type: 'spline',
        yAxis: 1,
        data: [899,966,1074,1219,1395,1597,1820,2059,2308,2562,2817,3067,3307,3532,3736,3914,4061,4173,4244],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    },{
        name: 'Peso PCT50',
        type: 'spline',
        yAxis: 1,
        data: [750,810,905,1032,1185,1361,1555,1763,1980,2202,2424,2642,2852,3049,3228,3386,3517,3618,3684],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    },{
        name: 'Peso PCT10',
        type: 'spline',
        yAxis: 1,
        data: [630,661,728,826,951,1099,1265,1446,1637,1834,2032,2263,2438,2596,2795,2903,3024,3116,3176],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    },{
        name: 'Peso',
        type: 'spline',
        yAxis: 1,
        data: (function () {
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                        data.push({ y: 0, });
                }
                data.push({
                        y: parseInt(document.getElementById("pfe").value),
                });
                for (i = edadGest + 1; i <= 41; i++) {
                        data.push({
                            y: 0,
                        });
                }
                return data;
        }()),
        dashStyle: "Dot",
        marker: { symbol: 'square' },
        lineWidth: 0,
        tooltip: {
            valueSuffix: ' kgs'
        },
        color: Highcharts.getOptions().colors[0]

    }, {
        name: 'Talla PCT 90',
        type: 'spline',
        data: [34.1,35.7,37.2,38.7,40.1,41.6,43.1,44.3,45.6,46.8,47.9,49.1,49.9,50.8,51.5,52.1,52.6,52.9,53.1],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }, {
        name: 'Talla PCT 50',
        type: 'spline',
        data: [31.6,33.1,34.5,36.1,37.5,39.1,40.5,41.9,43.3,44.6,45.8,46.9,47.9,48.7,49.6,50.3,50.8,51.1,51.3],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }, {
        name: 'Talla PCT 10',
        type: 'spline',
        data: [29.8,31.1,32.3,33.6,35.1,36.5,37.7,39.1,40.5,41.8,43.1,44.2,45.3,46.3,47.2,47.9,48.5,48.8,49.1],
        marker: { enabled: false },
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }, {
        name: 'Talla',
        type: 'spline',
        data: (function () {
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                        data.push({ y: 0, });
                }
                data.push({
                        y: parseInt(document.getElementById("tallaFetal").value),
                });
                for (i = edadGest + 1; i <= 41; i++) {
                        data.push({
                            y: 0,
                        });
                }
                return data;
        }()),
        dashStyle: "Dot",
        marker: { symbol: 'square' },
        lineWidth: 0,
        tooltip: {
            valueSuffix: ' mm'
        },
        color: Highcharts.getOptions().colors[1]
    }]
});
    $('#popupGraficos').modal('show');
});

$( '#graficoIPN' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico IPN Referencia Neonatal SOCHIPE");
    $('#graficosBody').html("<div id='viewGraficoIPN'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoIPN').highcharts({
        title: {
            text: 'IPN / EG',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: '' },
            tickPositions: [1, 1.6, 2.2, 2.8, 3.4, 4]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories:
            ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Pct. 10',
            marker: { enabled: false },
            data: [1.79, 1.83, 1.87, 1.91, 1.95, 1.99, 2.04, 2.08, 2.12, 2.16, 2.2, 2.25, 2.29, 2.33, 2.37, 2.41, 2.45, 2.5, 2.54]
        }, {
            type: "line",
            name: 'Pct. 90',
            marker: { enabled: false },
            data: [2.54,2.57,2.59,2.62,2.65,2.68,2.71,2.74,2.77,2.8,2.83,2.86,2.89,2.92,2.95,2.98,3.01,3.04,3.07]
        }, {
            type: "line",
            name: 'IPN',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseFloat(document.getElementById("ipn").value),
                });
                for (i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });
            $('#popupGraficos').modal('show');
});

$( '#graficoTalla' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Talla Fetal Estimada Referencia Neonatal SOCHIPE");
    $('#graficosBody').html("<div id='viewGraficoTalla'></div><p><small>Talla (Formula = lf * 0.55 + 9.6) </small></p>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
$('#viewGraficoTalla').highcharts({
        title: {
            text: 'Talla Fetal estimada',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'mm' },
            tickPositions: [25, 35, 45, 55]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Talla PCT 90',
            marker: { enabled: false },
            data:  [34.1,35.7,37.2,38.7,40.1,41.6,43.1,44.3,45.6,46.8,47.9,49.1,49.9,50.8,51.5,52.1,52.6,52.9,53.1]
        }, {
            type: "line",
            name: 'Talla PCT 50',
            marker: { enabled: false },
            data: [31.6,33.1,34.5,36.1,37.5,39.1,40.5,41.9,43.3,44.6,45.8,46.9,47.9,48.7,49.6,50.3,50.8,51.1,51.3]
        }, {
            type: "line",
            name: 'Talla PCT 10',
            marker: { enabled: false },
            data: [29.8,31.1,32.3,33.6,35.1,36.5,37.7,39.1,40.5,41.8,43.1,44.2,45.3,46.3,47.2,47.9,48.5,48.8,49.1]
        }, {
            type: "line",
            name: 'talla',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 24; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseInt(document.getElementById("tallaFetal").value),
                });
                for (i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });
            $('#popupGraficos').modal('show');
});

$( '#graficopsmACM' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfico Pick sistólico máximo de ACM");
    $('#graficosBody').html("<div id='viewGraficopsmACM'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    var medida = parseFloat(document.getElementById("psmACM").value);
                                
$('#viewGraficopsmACM').highcharts({
        title: {
            text: 'Pick sistólico máximo de ACM',
            x: -20 //center
        },
        plotOptions: {
            series: {
                enableMouseTracking: false
            }
        },
        yAxis: {
            title: { text: 'cm/s' },
            tickPositions: [20, 40, 60, 80, 100]
        },
        colors: ['#313131', '#313131', '#313131'],
        xAxis: {
            categories: ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
        },
        credits: { enabled: false },
        series: [{
            type: "line",
            name: 'Valor de la Media',
            marker: { enabled: false },  
            data:  [23.2,24.3,25.5,26.7,27.9,29.3,30.7,32.1,33.6,35.2,36.9,38.7,40.5,42.4,44.4,46.5,48.7,51.1,53.5,56,58.7,61.5,64.4]
        }, {
            type: "line",
            name: 'Anemia leve',
            marker: { enabled: false },
            data: [29.9, 31.1, 32.8,34.5,36,37.8,39.5,41.5,43.3,45.6,47.6,50.4,52.2,55,57.3,60.1,62.9,66,69,72.8,75.7,79.8,83] 
        }, {
            type: "line",
            name: 'Anemia moderada',
            marker: { enabled: false },
            data: [34.8,36.5,38.2,39.7,41.9,44,46,48,50.4,53,55.4,58,60.9,63.5,66.6,70,73.1,76.5,80.2,84,88,92.5,96.6]
        }, {
            type: "line",
            name: 'Pick sistólico máximo de ACM',
            dashStyle: "Dot",
            marker: { symbol: 'square' },
            lineWidth: 0,
            data: (function () {
                // generate an array of random data
                var data = [];
                var edadGest = parseInt(localStorage.eg) - 1;

                for (i = 18; i <= edadGest; i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: medida,
                });
                for (i = edadGest + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });
            $('#popupGraficos').modal('show');
});

$( '#graficoBVM' ).on( 'click', function() {
    $('#graficosTitle').html("Gráfica BVM");
    $('#graficosBody').html("<div id='graficoBVMView'></div>");
    $( '#impEcoObsSegTrim1').remove();
    $( '#impEcoObsSegTrim2').remove();
    $( '#impDoppler3').remove();
    $( '#impDoppler2').remove();
    $( '#impDoppler1').remove();
    $('#graficoBVMView').highcharts({
             chart: {
             height: 250
         },
         title: {
             text: 'BVM de Líquido Amniótico ***',
             x: -20,
                 style: {
             fontSize: '14px'
         }
         },
         plotOptions: {
             series: {
                 enableMouseTracking: false
             }
         },
             legend: {
             itemStyle: {
                 fontSize: '10px',
                 fontWeight:'normal'
             }
         },
         yAxis: {
             title: { text: 'Milimetros (mm)' },
             tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
         },
         colors: ['#313131','#313131','#313131'],
         xAxis: {
             categories: ['16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40']
         },
         credits: {enabled:false},
         series: [{
             type: "line",
             name: 'Pct. 5',
             dashStyle: "Dot",
             marker: {enabled:false},
             data: [23,25,27,28,29,29,30,30,30,30,30,30,30,29,29,29,29,29,28,28,27,26,24,23,21]
         }, {
             type: "line",
             name: 'Pct. 95',
             dashStyle: "Dot",
             marker: { enabled: false },
             data: [59,62,64,66,67,68,68,68,68,68,68,69,69,69,69,70,71,72,72,72,71,70,68,66,62]
         }, {
             type: "line",
             name: 'BVM',
             dashStyle: "Dot",
             marker: { symbol: 'square' },
             lineWidth: 0,
             data: (
                 function () {
                     var data = [];
                     var edadGest = parseInt(localStorage.eg) -1;
 
                     for (i = 16; i <= edadGest; i ++ ) {
                         data.push({
                             y: 0,
                         });
                     }
                     data.push({
                             y: parseFloat($('#bvm').val()),
                         });
                     for (i = edadGest +1; i <= 39; i ++ ) {
                         data.push({
                             y: 0,
                         });
                     }
                     return data;
                 }())
             }]
     });
    $('#popupGraficos').modal('show');
});