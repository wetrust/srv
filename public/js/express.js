//funciones al cargar la página
$(document).ready(function(){
    //color de fondo
    $("html").css("background", "linear-gradient(#c2e5e8, #e9f6f8)");
    $("html").addClass("h-100");
    $("head").css("background", "linear-gradient(#c2e5e8, #e9f6f8)");
    $("head").addClass("h-100");
    $("body").css("background", "linear-gradient(#c2e5e8, #e9f6f8)");
    $("body").addClass("h-100");
    appClean();
    appLoadBasic();
});

//funciones de botones
$(document).ready(function(){
    $(window).on('hashchange', function(){
        onHashChange();
    });

    //
    $("#step\\.examen").on("click", function(){
        //nombres predeterminados
        $("#nombre-paciente").val("Paciente");
        $("#apellido-paciente").val("de prueba");
        //establecer id (fecha actual)
        let fecha = new Date();
        let day = ("0" + fecha.getDate()).slice(-2);
	    let month = ("0" + (fecha.getMonth() + 1)).slice(-2);

        $("#id-paciente").val((day)+(month)+fecha.getFullYear());
        //cambiar fum por la fecha actual
        $("#input\\.paciente\\.fum").val((day)+"/"+(month)+"/"+fecha.getFullYear());
        $('#input\\.paciente\\.fum').datepicker('setValue', (day)+"/"+(month)+"/"+fecha.getFullYear());
        $("#input\\.paciente\\.fum").trigger("change");
        window.location.href = "#tipoExamen";

        $("#boton\\.volver\\.step\\.five").off("click");
        $("#boton\\.volver\\.step\\.five").on("click", function(){
            window.location.href = serverURL + "examen/expres";
        });
    });

    //pacientes paso 1
    $("#boton\\.volver\\.step\\.one").on("click", function(){
        window.location.href = serverURL;
    });

    $("#step\\.search").on("click", function(){
        $("#step-one").addClass("d-none");
        $("#step-two-find").removeClass("d-none");
        $("#buscar\\.paciente\\.id").val("");
        $("#buscar\\.paciente\\.apellido").val("");
    });

    $("#step\\.new").on("click", function(){
        $("#step-one").addClass("d-none");
        $("#step-three").removeClass("d-none");
        //desbloquear elementos necesarios
        $("#id-paciente").attr("disabled", false);
        $("#nombre-paciente").attr("disabled", false);
        $("#apellido-paciente").attr("disabled", false);
        $("#input\\.paciente\\.fum").attr("disabled", false);
        $("#tipo\\.examen\\.previo").attr("disabled", false);
        //ocultar elementos innecesarios
        $("#boton\\.modificar\\.paciente").addClass("d-none");
        //cambiar los textos para que coincida con lo que observa el usuario
        $("#titulos\\.step\\.three\\.step").html("Paso 2");
        $("#titulos\\.step\\.three\\.head").html("Paciente");
        $("#titulos\\.step\\.three\\.help").html("Si desea trabajar con un paciente anónimo, solo cambie la FUM");
        //nombres predeterminados
        $("#nombre-paciente").val("Paciente");
        $("#apellido-paciente").val("de prueba");
        //establecer id (fecha actual)
        let fecha = new Date();
        let day = ("0" + fecha.getDate()).slice(-2);
	    let month = ("0" + (fecha.getMonth() + 1)).slice(-2);

        $("#id-paciente").val((day)+(month)+fecha.getFullYear());
        //cambiar fum por la fecha actual
        $("#input\\.paciente\\.fum").val((day)+"/"+(month)+"/"+fecha.getFullYear());
        $('#input\\.paciente\\.fum').datepicker('setValue', (day)+"/"+(month)+"/"+fecha.getFullYear());
		$("#input\\.paciente\\.fum").trigger("change");
    });

    //pacientes paso 2
    $("#boton\\.volver\\.step\\.two\\.find").on("click", function(){
        $("#step-one").removeClass("d-none");
        $("#step-two-find").addClass("d-none");
    });

    $("#buscar\\.paciente\\.action").on("click", function(){
        let apellido = $("#buscar\\.paciente\\.apellido").val();
        let id = $("#buscar\\.paciente\\.id").val();

        if (apellido.length > 0){
            let data = {
                patient_lastname: $("#buscar\\.paciente\\.apellido").val()
            }
            $.post(serverURL + "configuracion/obtenerut", data).done(function (data) {
                $("#buscar\\.paciente\\.id").val("");
                if (data !== null){
                    if (Object.keys(data).length > 0 ){
                        $("#buscar\\.paciente\\.id").val(data.PatientID);
                        obtenerNombre(data.PatientID);
                    }
                }
                else{
                    alert("No hay pacientes con el apellido escrito");
                }
            });
        }
        else if (id.length > 0){
            obtenerNombre(id);
        }
        else{
            alert("Escriba un ID o el apellido de la paciente");
        }
    });
    
    //pacientes paso 3
    $("#boton\\.volver\\.step\\.three").on("click", function(){
        $("#step-one").removeClass("d-none");
        $("#step-three").addClass("d-none");
    });

    $("#boton\\.modificar\\.paciente").on("click", function(){
        $("#input\\.paciente\\.fum").attr("disabled", false);
        $("#tipo\\.examen\\.previo").attr("disabled", false);
        $("#div\\.pacientes\\.fum\\.save").removeClass("d-none");
        $("#div\\.pacientes\\.tipo\\.examen\\.sav").removeClass("d-none");
        $("#boton\\.modificar\\.paciente").addClass("d-none");
    });

    $('#guardarfur').on("click", function(){
		var valores = {
			rut: $("#id-paciente").val(),
			fur: $("#input\\.paciente\\.fum").val()
		}
		$.post(serverURL + "pacientes/savefur", valores).done(function (data) {
            $("#input\\.paciente\\.fum").attr("disabled", true);
            $("#div\\.pacientes\\.fum\\.save").addClass("d-none");
            alert("FUM guardada");
        });
    });
    
    $('#guardartipoexamen').on("click", function(){
		var valores = {
            rut: $("#id-paciente").val(),
            exmtxt: $("#tipo\\.examen\\.previo option:selected").html(),
			exm: $("#tipo\\.examen\\.previo").val()
		}
		$.post(serverURL + "pacientes/savexmprev", valores).done(function (data) {
            $("#tipo\\.examen\\.previo").attr("disabled", true);
            $("#div\\.pacientes\\.tipo\\.examen\\.sav").addClass("d-none");
            alert("Guardado");
        });
    });

    $('#configSiController').on('click', function(){
        window.location.href = serverURL + "configuracion";
    });
    
    $('#configSiController').on('focusout', function(){
        $('#configNoController').button('toggle');
    });

    //pacientes paso 4
    $("#step\\.four").on("click", function(){
        $("#id-paciente").attr("disabled", true);
        $("#nombre-paciente").attr("disabled", true);
        $("#apellido-paciente").attr("disabled", true);
        $("#input\\.paciente\\.fum").attr("disabled", true);
        $("#tipo\\.examen\\.previo").attr("disabled", true);
        $("#div\\.pacientes\\.fum\\.save").addClass("d-none");
        $("#div\\.pacientes\\.tipo\\.examen\\.sav").addClass("d-none");
        $("#boton\\.modificar\\.paciente").removeClass("d-none");
        window.location.href = "#consulta";
    });

    //Fecha de exámen paso 5
    $("#boton\\.volver\\.step\\.four").on("click", function(){
        window.location.href = "#paciente";
    });

    $("#step\\.five").on("click", function(){
        window.location.href = "#tipoExamen";

        $("#boton\\.volver\\.step\\.five").off("click");
        $("#boton\\.volver\\.step\\.five").on("click", function(){
            window.location.href = "#consulta";
        });
    });

    //ecografía de primer trimestre
    $("#boton\\.eco\\.prim\\.cancelar").on("click", function(){
        $("#boton\\.eco\\.prim\\.nuevo").removeClass("d-none");
        $("#boton\\.eco\\.prim\\.guardar").addClass("d-none");
        $("#boton\\.eco\\.prim\\.cancelar").addClass("d-none");
        $("#lcn").attr("readonly", true);
        $("#lcn").val("");
        $("#lcnPct").val("");
        $("#saco").attr("readonly", true);
        $("#saco").val("");
        $("#sacoPct").val("");
        $("#graficoLcn").removeClass("d-none");
        $("#graficoSaco").removeClass("d-none");
        $("#modalPreInfEcoPrimTrim").removeClass("d-none");
    });

    $("#boton\\.eco\\.prim\\.guardar").on("click", function(){
        let examen = {
            examen: 1,
            eg: $("#eco\\.prim\\.eg").val(),
            embrion: $("#lcn").val(),
            saco: $("#saco").val()
        }
        
        let data = {
            id: $("#id-paciente").val(),
            tipo: 1,
            data: JSON.stringify(examen)
        }

        $.post(serverURL + "examen/set/", data).done(function(response) {
            if ( Object.keys(response).length > 0 ){
                $("#table\\.ecografia\\.primtrim").empty();
                $.each(response.data, function(i,val){
                    let fila = "<tr><th scope='row'>"+ val.n_examen +"</th><td>" + val.eg_examen +"</td><td>" + val.embrion +"</td><td>"+ val.prom_saco+"</td>";
                    $("#table\\.ecografia\\.primtrim").append(fila);
                });
            }
        });
    });

    $( '#graficoLcn' ).on( 'click', function() {
        $('#graficosTitle').html("Gráfico LCN");
        $('#graficosBody').html("<div class='row'><div class='col'><div id='graficoLcnBaseView'></div></div><div class='col'><div id='graficoLcnView'></div></div>");
            
        var egLcn = parseFloat($("input[name='eg']").val());
        $( '#impEcoObsSegTrim1').remove();
        $( '#impEcoObsSegTrim2').remove();
        $( '#impDoppler3').remove();
        $( '#impDoppler2').remove();
        $( '#impDoppler1').remove();
        $('#graficoLcnBaseView').highcharts({
            title: {
                text: 'LCN 6 a 15 semanas',
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
                data: [0.26, 0.77, 1.4, 2.05, 2.62,3.55, 4.68, 5.82, 6.98, 8.02],
                dashStyle: 'shortdot'
            }, {
                name: 'Media',
                type: "line",
                marker: { enabled: false },
                data: [0.38, 0.89, 1.54, 2.25, 2.95,4.05, 5.29, 6.65, 7.90, 9.01]
            }, {
                name: '(+) 2DE',
                type: "line",
                marker: { enabled: false },
                data: [0.53, 1.04, 1.71, 2.49, 3.32,4.64, 6.08, 7.57, 8.91, 10.01],
                dashStyle: 'shortdot'
            }, {
                type: "line",
                name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
                dashStyle: "Dot",
                marker: { symbol: 'square' },
                lineWidth: 0,
                data: (function () {
    
                    // generate an array of random data
                    var data = [];
                    var egLcn2 = parseInt(localStorage.eg);
                    var lcn = $("#lcn").val();
                    lcn = lcn.toString();
                    lcn = lcn.replace(",", ".");
                    lcn = parseFloat(lcn) / 10;
    
                    var lcnegx = [];
                    var flag = false;
    
                    lcnegx[1] = 6;
                    lcnegx[2] = 7;
                    lcnegx[3] = 8;
                    lcnegx[4] = 9;
                    lcnegx[5] = 10;
                    lcnegx[6] = 11;
                    lcnegx[7] = 12;
                    lcnegx[8] = 13;
                    lcnegx[9] = 14;
                    lcnegx[10] = 14;
    
                    for (i = 1; i <= 10; i++) {
                        if (lcnegx[i] >= egLcn2) {
                            if (flag == false) {
                            data.push({
                                y: lcn,
                            });
                            flag = true;
                            }
                            else {
                             data.push({
                                y:0,
                             });
                            }
                        }
                        else {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
          });
            
        if (egLcn < 10){
                $('#graficoLcnView').highcharts({
                    title: {
                        text: 'LCN semana 9',
                        x: -20 //center
                    },
                    xAxis: {
                        categories: ['6', '7', '8', '9']
                    },
                    yAxis: {
                        title: {
                            text: 'Milimetros (mm)'
                        },
                        tickPositions: [0.2, 1.1, 2.2, 3.3]
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
                        data: [0.26, 0.77, 1.4, 2.05],
                        dashStyle: 'shortdot'
                    }, {
                        name: 'Media',
                        type: "line",
                        marker: { enabled: false },
                        data: [0.38, 0.89, 1.54, 2.25]
                    }, {
                        name: '(+) 2DE',
                        type: "line",
                        marker: { enabled: false },
                        data: [0.53, 1.04, 1.71, 2.49],
                        dashStyle: 'shortdot'
                    }, {
                        type: "line",
                        name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                        data: (function () {
    
                            // generate an array of random data
                            var data = [];
                            egLcn = parseInt(egLcn);
                            var lcn = $("#lcn").val();
                            lcn = lcn.toString();
                            lcn = lcn.replace(",", ".");
                            lcn = parseFloat(lcn) / 10;
    
                            var lcnegx = [];
                            var flag = false;
    
                            lcnegx[1] = 6;
                            lcnegx[2] = 7;
                            lcnegx[3] = 8;
                            lcnegx[4] = 9;
    
                            for (i = 1; i <= 4; i++) {
                                if (lcnegx[i] >= egLcn) {
                                    if (flag == false) {
                                    data.push({
                                        y: lcn,
                                    });
                                    flag = true;
                                    }
                                    else {
                                     data.push({
                                        y:0,
                                     });
                                    }
                                }
                                else {
                                    data.push({
                                        y: 0,
                                    });
                                }
                            }
                            return data;
                        }())
                    }]
                  });
        }
        else if (egLcn < 11){
                $('#graficoLcnView').highcharts({
                    title: {
                        text: 'LCN semana 10',
                        x: -20 //center
                    },
                    xAxis: {
                        categories: ['10',  '10,1', '10,2', '10,3', '10,4', '10,5', '10,6']
                    },
                    yAxis: {
                        title: {
                            text: 'Milimetros (mm)'
                        },
                        tickPositions: [1.1, 2.2, 3.3, 4.4, 5.5]
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
                        data: [2.62,2.75,2.85,2.95,3.11,3.25,3.45],
                        dashStyle: 'shortdot'
                    }, {
                        name: 'Media',
                        type: "line",
                        marker: { enabled: false },
                        data: [2.95,3.10,3.25,3.40,3.55,3.70,3.9]
                    }, {
                        name: '(+) 2DE',
                        type: "line",
                        marker: { enabled: false },
                        data: [3.32,3.55,3.68,3.9,4.05,4.25,4.45],
                        dashStyle: 'shortdot'
                    }, {
                        type: "line",
                        name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                        data: (function () {
    
                            // generate an array of random data
                            var data = [];
                            var lcn = $("#lcn").val();
                            lcn = lcn.toString();
                            lcn = lcn.replace(",", ".");
                            lcn = parseFloat(lcn) / 10;
    
                            var lcnegx = [];
                            var flag = false;
    
                            lcnegx[1] = 10;
                            lcnegx[2] = 10.1;
                            lcnegx[3] = 10.2;
                            lcnegx[4] = 10.3;
                            lcnegx[5] = 10.4;
                            lcnegx[6] = 10.5;
                            lcnegx[7] = 10.6;
    
                            for (i = 1; i <= 7; i++) {
                                if (lcnegx[i] >= egLcn) {
                                    if (flag == false) {
                                    data.push({
                                        y: lcn,
                                    });
                                    flag = true;
                                    }
                                    else {
                                     data.push({
                                        y:0,
                                     });
                                    }
                                }
                                else {
                                    data.push({
                                        y: 0,
                                    });
                                }
                            }
                            return data;
                        }())
                    }]
                  });
        }
        else if (egLcn < 12){
                $('#graficoLcnView').highcharts({
                    title: {
                        text: 'LCN semana 11',
                        x: -20 //center
                    },
                    xAxis: {
                        categories: ['11','11.1','11.2','11.3','11.4','11.5','11.6']
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
                        data: [3.55,3.75,3.85,4,4.2,4.4,4.55],
                        dashStyle: 'shortdot'
                    }, {
                        name: 'Media',
                        type: "line",
                        marker: { enabled: false },
                        data: [4.05,4.2,4.38,4.58,4.8,4.95,5.15]
                    }, {
                        name: '(+) 2DE',
                        type: "line",
                        marker: { enabled: false },
                        data: [4.64,4.8,5,5.24,5.44,5.64,5.84],
                        dashStyle: 'shortdot'
                    }, {
                        type: "line",
                        name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                        data: (function () {
    
                            // generate an array of random data
                            var data = [];
                            var lcn = $("#lcn").val();
                            lcn = lcn.toString();
                            lcn = lcn.replace(",", ".");
                            lcn = parseFloat(lcn) / 10;
    
                            var lcnegx = [];
                            var flag = false;
    
                            lcnegx[1] = 11;
                            lcnegx[2] = 11.1;
                            lcnegx[3] = 11.2;
                            lcnegx[4] = 11.3;
                            lcnegx[5] = 11.4;
                            lcnegx[6] = 11.5;
                            lcnegx[7] = 11.6;
    
                            for (i = 1; i <= 7; i++) {
                                if (lcnegx[i] >= egLcn) {
                                    if (flag == false) {
                                    data.push({
                                        y: lcn,
                                    });
                                    flag = true;
                                    }
                                    else {
                                     data.push({
                                        y:0,
                                     });
                                    }
                                }
                                else {
                                    data.push({
                                        y: 0,
                                    });
                                }
                            }
                            return data;
                        }())
                    }]
                  });
                
        }
        else if (egLcn < 13){
                $('#graficoLcnView').highcharts({
                    title: {
                        text: 'LCN semana 12',
                        x: -20 //center
                    },
                    xAxis: {
                        categories: ['12', '12.1', '12.2', '12.3', '12.4', '12.5', '12.6']
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
                        data: [4.68,4.87,5.02,5.2,5.4,5.52,5.7],
                        dashStyle: 'shortdot'
                    }, {
                        name: 'Media',
                        type: "line",
                        marker: { enabled: false },
                        data: [5.29,5.5,5.7,5.9,6.1,6.3,6.5]
                    }, {
                        name: '(+) 2DE',
                        type: "line",
                        marker: { enabled: false },
                        data: [6.08,6.28,6.5,6.7,6.90,7.15,7.35],
                        dashStyle: 'shortdot'
                    }, {
                        type: "line",
                        name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                        data: (function () {
    
                            // generate an array of random data
                            var data = [];
                            var egLcn = parseInt(localStorage.eg);
                            var lcn = $("#lcn").val();
                            lcn = lcn.toString();
                            lcn = lcn.replace(",", ".");
                            lcn = parseFloat(lcn) / 10;
    
                            var lcnegx = [];
                            var flag = false;
    
                            lcnegx[1] = 12;
                            lcnegx[2] = 12.1;
                            lcnegx[3] = 12.2;
                            lcnegx[4] = 12.3;
                            lcnegx[5] = 12.4;
                            lcnegx[6] = 12.5;
                            lcnegx[7] = 12.6;
    
    
                            for (i = 1; i <= 7; i++) {
                                if (lcnegx[i] >= egLcn) {
                                    if (flag == false) {
                                    data.push({
                                        y: lcn,
                                    });
                                    flag = true;
                                    }
                                    else {
                                     data.push({
                                        y:0,
                                     });
                                    }
                                }
                                else {
                                    data.push({
                                        y: 0,
                                    });
                                }
                            }
                            return data;
                        }())
                    }]
                  });
        }
        else if (egLcn < 14){
                $('#graficoLcnView').highcharts({
                    title: {
                        text: 'LCN semana 13',
                        x: -20 //center
                    },
                    xAxis: {
                        categories: ['13', '13.1', '13.2', '13.3', '13.4', '13.5', '13.6']
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
                        data: [5.82,6,6.15,6.29,6.45,6.65,6.85],
                        dashStyle: 'shortdot'
                    }, {
                        name: 'Media',
                        type: "line",
                        marker: { enabled: false },
                        data: [6.65,6.85,7,7.15,7.3,7.5,7.67]
                    }, {
                        name: '(+) 2DE',
                        type: "line",
                        marker: { enabled: false },
                        data: [7.57,7.78,7.98,8.15,8.4,8.55,8.75],
                        dashStyle: 'shortdot'
                    }, {
                        type: "line",
                        name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                        data: (function () {
    
                            // generate an array of random data
                            var data = [];
                            var egLcn = parseInt(localStorage.eg);
                            var lcn = $("#lcn").val();
                            lcn = lcn.toString();
                            lcn = lcn.replace(",", ".");
                            lcn = parseFloat(lcn) / 10;
    
                            var lcnegx = [];
                            var flag = false;
    
                            lcnegx[1] = 13;
                            lcnegx[2] = 13.1;
                            lcnegx[3] = 13.2;
                            lcnegx[4] = 13.3;
                            lcnegx[5] = 13.4;
                            lcnegx[6] = 13.5;
                            lcnegx[7] = 13.6;
    
                            for (i = 1; i <= 7; i++) {
                                if (lcnegx[i] >= egLcn) {
                                    if (flag == false) {
                                    data.push({
                                        y: lcn,
                                    });
                                    flag = true;
                                    }
                                    else {
                                     data.push({
                                        y:0,
                                     });
                                    }
                                }
                                else {
                                    data.push({
                                        y: 0,
                                    });
                                }
                            }
                            return data;
                        }())
                    }]
                  });
        }
        else if (egLcn < 15){
                $('#graficoLcnView').highcharts({
                    title: {
                        text: 'LCN semana 14',
                        x: -20 //center
                    },
                    xAxis: {
                        categories: ['14', '14.1', '14.2', '14.3', '14.4', '14.5', '14.6', '15']
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
                        data: [6.98,7.12,7.24,7.39,7.56,7.7,7.87,8.02],
                        dashStyle: 'shortdot'
                    }, {
                        name: 'Media',
                        type: "line",
                        marker: { enabled: false },
                        data: [7.9,8.05,8.2,8.35,8.5,8.7,8.87,9.01]
                    }, {
                        name: '(+) 2DE',
                        type: "line",
                        marker: { enabled: false },
                        data: [8.91,9.11,9.24,9.4,9.55,9.7,9.87,10.01],
                        dashStyle: 'shortdot'
                    }, {
                        type: "line",
                        name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
                        dashStyle: "Dot",
                        marker: { symbol: 'square' },
                        lineWidth: 0,
                        data: (function () {
    
                            // generate an array of random data
                            var data = [];
                            var lcn = $("#lcn").val();
                            lcn = lcn.toString();
                            lcn = lcn.replace(",", ".");
                            lcn = parseFloat(lcn) / 10;
    
                            var lcnegx = [];
                            var flag = false;
    
                            lcnegx[1] = 14;
                            lcnegx[2] = 14.1;
                            lcnegx[3] = 14.2;
                            lcnegx[4] = 14.3;
                            lcnegx[5] = 14.4;
                            lcnegx[6] = 14.5;
                            lcnegx[7] = 14.6;
                            lcnegx[8] = 15;
    
                            for (i = 1; i <= 8; i++) {
                                if (lcnegx[i] >= egLcn) {
                                    if (flag == false) {
                                    data.push({
                                        y: lcn,
                                    });
                                    flag = true;
                                    }
                                    else {
                                     data.push({
                                        y:0,
                                     });
                                    }
                                }
                                else {
                                    data.push({
                                        y: 0,
                                    });
                                }
                            }
                            return data;
                        }())
                    }]
                  });
        }
        $('#popupGraficos').modal('show');
    });
    
    $( '#graficoSaco' ).on( 'click', function() {
        $('#graficosTitle').html("Gráfico Saco");
        $('#graficosBody').html("<div id='graficoSacoView'></div>");
        $( '#impEcoObsSegTrim1').remove();
        $( '#impEcoObsSegTrim2').remove();
        $( '#impDoppler3').remove();
        $( '#impDoppler2').remove();
        $( '#impDoppler1').remove();
        $('#graficoSacoView').highcharts({
                 title: {
                     text: 'Promedio Saco Gestacional',
                     x: -20
                 },
                 subtitle: {
                     text: 'Milimetros (mm)',
                     x: -20
                 },
                 plotOptions: {
                     series: {
                         enableMouseTracking: false
                     }
                 },
                 yAxis: {
                     title: { text: '' },
                     tickPositions: [-1, 1.0, 2.5, 4.0]
                 },
                 colors: ['#313131', '#313131', '#313131'],
                 xAxis: {
                     categories:['4.2','4.3','4.4','4.5','4.6','5','5.1','5.2','5.3','5.4','5.5','5.6','6','6.1','6.2','6.3','6.4','6.5','6.6','7','7.1','7.2','7.3','7.4','7.5','7.6','8']
                 },
                 credits: { enabled: false },
                 series: [{
                     type: "line",
                     name: '-DE',
                     marker: { enabled: false },
                     data: [0.012,0.101,0.145,0.214,0.293,0.41,0.51,0.61,0.7,0.8,0.9,0.99,1.07,1.15,1.22,1.33,1.39,1.49,1.59,1.67,1.76,1.86,1.94,2.04,2.1,2.2,2.3],
                     dashStyle: 'shortdot'
                 },{
                     type: "line",
                     name: 'media',
                     marker: { enabled: false },
                     data: [0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,1.99,2.09,2.18,2.29,2.41,2.5,2.6,2.7,2.8,2.9,3]
                 },{
                     type: "line",
                     name: '+DE',
                     marker: { enabled: false },
                     data: [0.99,1.09,1.16,1.26,1.36,1.51,1.6,1.7,1.8,1.9,1.99,2.11,2.19,2.29,2.41,2.51,2.61,2.7,2.8,2.9,3,3.1,3.2,3.3,3.4,3.5,3.6],
                     dashStyle: 'shortdot'
                 }, {
                     type: "line",
                     name: 'Saco gestacional [Hellmann y col. Am. J O & G 1968; 1.03(6)789 800]',
                     dashStyle: "Dot",
                     marker: { symbol: 'square' },
                     lineWidth: 0,
                     data: (function () {
                         var data = [];
                         var categories = [4.2,4.3,4.4,4.5,4.6,5,5.1,5.2,5.3,5.4,5.5,5.6,6,6.1,6.2,6.3,6.4,6.5,6.6,7,7.1,7.2,7.3,7.4,7.5,7.6,8];
                         var edadGest = parseInt(localStorage.eg);
    
                         var saco = $("#saco").val();
                         saco = saco.toString();
                         saco = saco.replace(",", ".");
                         saco = parseFloat(saco) / 10;
                         
                         for (i = 0; i <= 27; i++) {
    
                             if (categories[i] == edadGest){
                                  data.push({
                                       y: saco,
                                  });
                             }
                             else{
                                  data.push({ y: -2, });
                             }
                         }
                         return data;
                     }())
                 }]
             });
        $('#popupGraficos').modal('show');
    });

    $( '#modalPreInfEcoPrimTrim' ).on( 'click', function() {
        $('#popupTitle').html("Datos para evaluación ecográfica de primer trimestre");
        //remueve los botones de imprimir en caso de que estén
        $( '#impEcoObsSegTrim2').remove();
        $( '#impEcoObsSegTrim1').remove();
        $( '#impDoppler3').remove();
        $( '#impDoppler2').remove();
        $( '#impDoppler1').remove();
        $( '#infecoObsSegTrim1Clon').remove();
        $('#popupBody').html("<div class='row'> <div class='col'> <div class='form-group'> <label>Utero Ubicacion 1</label> <select id='utero-ubic1' class='form-control'> <option value='central'>central</option> <option value='lateralizado a la izquierda'>lateralizado a la izquierda</option> <option value='lateralizado a la derecha'>lateralizado a la derecha</option> </select> </div></div><div class='col'> <div class='form-group'> <label>Utero Ubicacion 2</label> <select id='utero-ubic2' class='form-control'> <option value='anterior'>anterior</option> <option value='posterior'>posterior</option> </select> </div></div></div><div class='row'> <div class='col'> <div class='form-group'> <label>Cuerpo uterino</label> <select id='cuerpo-uterino' class='form-control'> <option value='aspecto normal'>aspecto normal</option> <option value='nodulo unico'>nodulo unico</option> <option value='múltiples nódulos'>múltiples nódulos</option> <option value='malformaciones'>malformaciones</option> </select> </div></div><div class='col'> <div class='form-group'> <label>Saco Gestacional</label> <select id='saco-gestacional' class='form-control'> <option value='normal'>normal</option> <option value='no se observa'>no se observa</option> <option value='múltiple'>múltiple</option> <option value='con pseudosaco'>con pseudosaco</option> <option value='con dpmto.parcial'>con dpmto.parcial</option> </select> </div></div><div class='col-2'> <div class='form-group'> <label>mm</label> <input id='saco-gestacional-mm' type='number' min='01' max='99' class='form-control'> </div></div></div><div class='row'> <div class='col-5'> <div class='form-group'> <label>Saco vitelino</label> <select id='saco-vitelino' class='form-control'> <option value='presente'>presente</option> <option value='no se observa' selected>no se observa </option> </select> </div></div><div class='col'> <div id='valor-saco-vitelino' class='form-group'> <label>Medida de saco vitelino</label> <div class='input-group'> <input id='saco-vitelino-mm' type='text' class='form-control'> <div class='input-group-addon'>mm.</div></div></div></div></div><div class='row'> <div class='col'> <div class='form-group'> <label>Embrión</label> <select id='embrion' class='form-control'> <option value='no se observa aun' selected>no se observa aun</option> <option value='act. no evidenciable'>act. no evidenciable</option> <option value='act. cardiaca evidenciable'>act. cardiaca evidenciable</option> <option value='con act. cardiaca (+)' >con act. cardiaca (+)</option> <option value='act. card. y Corp.(+)'>act. card. y Corp.(+)</option> <option value='act. card. y Corp. (-)'>act. card. y Corp. (-)</option> </select> </div></div><div class='col-2'> <div class='form-group'> <label>mm</label> <input type='text' class='form-control' id='lcn-informe' readonly> </div></div><div class='col'> <div class='form-group' id='fcf-primer-trim'> <label>FCF</label> <select id='fcf-prim' class='form-control'> <option value='(+) inicial'>(+) inicial</option> <option value=' <90'>&lt; 90</option> <option value='90'>90</option> <option value='91'>91</option> <option value='92'>92</option> <option value='93'>93</option> <option value='94'>94</option> <option value='95'>95</option> <option value='96'>96</option> <option value='97'>97</option> <option value='98'>98</option> <option value='99'>99</option> <option value='100'>100</option> <option value='101'>101</option> <option value='102'>102</option> <option value='103'>103</option> <option value='104'>104</option> <option value='105'>105</option> <option value='106'>106</option> <option value='107'>107</option> <option value='108'>108</option> <option value='109'>109</option> <option value='110'>110</option> <option value='111'>111</option> <option value='112'>112</option> <option value='113'>113</option> <option value='114'>114</option> <option value='115'>115</option> <option value='116'>116</option> <option value='117'>117</option> <option value='118'>118</option> <option value='119'>119</option> <option value='120'>120</option> <option value='121'>121</option> <option value='122'>122</option> <option value='123'>123</option> <option value='124'>124</option> <option value='125'>125</option> <option value='126'>126</option> <option value='127'>127</option> <option value='128'>128</option> <option value='129'>129</option> <option value='130'>130</option> <option value='131'>131</option> <option value='132'>132</option> <option value='133'>133</option> <option value='134'>134</option> <option value='135'>135</option> <option value='136'>136</option> <option value='137'>137</option> <option value='138'>138</option> <option value='139'>139</option> <option value='140' selected>140</option> <option value='141'>141</option> <option value='142'>142</option> <option value='143'>143</option> <option value='144'>144</option> <option value='145'>145</option> <option value='146'>146</option> <option value='147'>147</option> <option value='148'>148</option> <option value='149'>149</option> <option value='150'>150</option> <option value='151'>151</option> <option value='152'>152</option> <option value='153'>153</option> <option value='154'>154</option> <option value='155'>155</option> <option value='156'>156</option> <option value='157'>157</option> <option value='158'>158</option> <option value='159'>159</option> <option value='160'>160</option> <option value='161'>161</option> <option value='162'>162</option> <option value='163'>163</option> <option value='164'>164</option> <option value='165'>165</option> <option value='166'>166</option> <option value='167'>167</option> <option value='168'>168</option> <option value='169'>169</option> <option value='170'>170</option> <option value=' > 170'>&gt; 170</option> </select> </div></div></div><div class='row'> <div class='col'> <div class='form-group'> <label>Anexo derecho</label> <select id='anexo-derecho' class='form-control'> <option value='aspecto normal'>aspecto normal</option> <option value='masa sólida'>masa sólida</option> <option value='masa eco negativa'>masa eco negativa</option> <option value='con ovario'>con ovario</option> </select> </div></div><div class='col'> <div class='form-group'> <label>Anexo izquierdo</label> <select id='anexo-izquierdo' class='form-control'> <option value='aspecto normal'>aspecto normal</option> <option value='masa sólida'>masa sólida</option> <option value='masa eco negativa'>masa eco negativa</option> <option value='con ovario'>con ovario</option> </select> </div></div></div><div class='row'> <div class='col'> <div class='form-group'> <label>Douglas</label> <select id='exploracion-douglas' class='form-control'> <option value='libre'>libre</option> <option value='ocupado'>ocupado</option> </select> </div></div><div class='col'> <div class='form-group' id='exploracion-douglas-informe' style='display:none;'> <p><strong>Comentarios douglas</strong> </p><textarea id='comentarios-douglas-informe' rows='3' class='form-control'></textarea> </div></div></div><div class='form-group'> <p><strong>Comentarios adicionales <small>(Adicionar comentarios del examinador)</small></strong> </p><textarea id='comentarios-eco-uno' rows='3' class='form-control'></textarea></div>");
        //añadir boton de imprimir
        var fur = $( "#input\\.paciente\\.fum\\.examen").val();
        var fpp = $( "#input\\.paciente\\.fpp\\.examen").val();
        if ($('#lcn').val() < 1){
            var comentario = "En relación a fecha de ultima menstruación referida;\r\nse sugiere reevaluar más adelante para definir edad gestacional\r\n";
        }
        else{
            var comentario = "Fum operacional: " + fur + "\r\nFecha probable de parto: " + fpp;
        }
        $('#comentarios-eco-uno').val(comentario);
        $('#saco-gestacional-mm').val($('#saco').val());
        $('#lcn-informe').val($('#lcn').val());
        $( '#saco-vitelino').on("click", function(){
            if ($(this).val() == 'presente'){
                $('#valor-saco-vitelino').css('display', 'block');
            }
            else{
            $('#valor-saco-vitelino').css('display', 'none');
            $('#valor-saco-vitelino').val('');	
            }
        });
        $( '#saco-vitelino').trigger('click');
        $( '#exploracion-douglas').on("click", function(){
            if ($(this).val() == 'ocupado'){
                $('#exploracion-douglas-informe').css('display', 'block');
            }
            else{
            $('#exploracion-douglas-informe').css('display', 'none');	
            }
        });
        $( '#exploracion-douglas').trigger('click');
        $( '#embrion').on("click", function(){
            if ($(this).val() == 'no se observa aun' || $(this).val() == 'act. no evidenciable' ){
                $('#fcf-primer-trim').css('display', 'none');
            $('#fcf-primer-trim').val('');
            $('#lcn-informe').css('display', 'none');
            $('#lcn-informe').val('');
            }
            else if ($(this).val() == 'act. cardiaca evidenciable'){
                $('#fcf-prim').val($("#fcf-prim option:first").val());
            $('#lcn-informe').css('display', 'none');
            $('#lcn-informe').val($('#lcn').val());
            }
            else if ($(this).val() == 'act. card. y Corp. (-)'){
            $('#lcn-informe').css('display', 'block');
            $('#lcn-informe').val($('#lcn').val());
            }
            else{
            $('#fcf-primer-trim').css('display', 'block');
            $('#lcn-informe').css('display', 'block');
            $('#lcn-informe').val($('#lcn').val());
            }
        });
        $( '#embrion').trigger('click');
        $('#popupFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler1'>Ver Impresion</button>");
        $( '#impDoppler1').on("click", function(){
              crearInformeEcoPrimTrim();
        });
        $('#popupGenerico').modal('show');
    });

    //foto ecográficas
    $("#imprimirFotos").on("click", function() {
        var fotosArreglo = [];
        var contadorIMG = 0;
        var iIMG = 0;

        $("input[name='fotosElegidas']").each(function() {
            if (this.checked == true) {
                fotosArreglo.push(iIMG);
                contadorIMG = contadorIMG + 1
            }; 
            iIMG = iIMG + 1
        });

        if (contadorIMG <1){
            alert("Debe seleccionar al menos una imágen");
            return true;
        }
        if (contadorIMG == 3 | contadorIMG == 5){
            alert("Solo múltiplos de 2");
            return true;
        }

        let rut = $("#id-paciente").val();
        window.open(serverURL + "pdf/img/" + rut + "/" + fotosArreglo.toString() + "/" + StudyDate);
    });

    $("#emailFotos").on("click", function() {

        if ($("#paciente\\.correo").val() == "" && $("#paciente\\.correo\\.lista").is(':checked') == false){
            alert("Debe ingresar un correo para el paciente en la página principal");
            return true;
        }

        var fotosArreglo = [];
        var contadorIMG = 0;
        $("input[name='fotosElegidas']").each(function() {
            if (this.checked == true) {
                fotosArreglo.push(contadorIMG);
            };
            contadorIMG = contadorIMG + 1
        });

        var correo = ""

        if ($("#paciente\\.correo\\.lista").is(':checked') == true){
            correo = $( '#paciente\\.correo\\.config option:selected').text();
            if ($("#paciente\\.correo\\.copia").val() !== ""){
                correo = correo + ";" + $("#paciente\\.correo\\.copia").val();
            }
        }
        else{
            correo = $("#paciente\\.correo\\.copia").val()
        }

        var valores = {
            user_id: $("#buscar\\.paciente\\.id").val(),
            img_id: "[" + fotosArreglo.toString() + "]",
            studyDate: StudyDate,
            user_email: correo
        }

        alert("Enviando correo, espere un momento");
        $.post(serverURL + "imagenes/send", valores).done(function (data) {
            alert("Correo Enviado");
        });
    });

    $("#eliminarFotos").on("click", function() {
        var contadorIMG = 0;
        $("input[name='fotosElegidas']").each(function() {
            if (this.checked == true) {
                $(this).parent().parent().parent().addClass("d-none");
                contadorIMG = contadorIMG + 1
                this.checked = false;
            }; 
        });

        if (contadorIMG <1){
            alert("Debe seleccionar al menos una imágen");
            return true;
        }
    });
});

//funciones de los inputs
$(document).ready(function(){
    //al cambiar la fum en input pacientes
    $("#input\\.paciente\\.fum").on("change", function(){
        localStorage.fum = $(this).val();
        localStorage.fee = $("#input\\.paciente\\.fe").val();
        localStorage.eg = calcularEG();
        var semanas = Math.trunc(localStorage.eg);
        var dias =  Math.trunc((localStorage.eg - Math.trunc(localStorage.eg)) * 10);

        $("#input\\.paciente\\.eg\\.dias").val(dias);
        $("#input\\.paciente\\.eg\\.semanas").val(semanas);

        //fum para examen
        $("#input\\.paciente\\.fum\\.examen").val(localStorage.fum);
        $("#input\\.paciente\\.fe\\.ecoprim").val(localStorage.fee);
        //eg para examen
        $("#input\\.paciente\\.eg\\.examen").val(localStorage.eg);
        $("#eco\\.prim\\.eg").val(localStorage.eg);
        //FPP
        $("#input\\.paciente\\.fpp\\.examen").val(localStorage.fpp);

        //datos para información paciente parte superior
        $("#paciente\\.nombre\\.eco\\.basico\\.examen").html("FUM: "+ localStorage.fum + ", EG: " + localStorage.eg +" sem., FPP: " + localStorage.fpp);
        $("#paciente\\.nombre\\.eco\\.elegir\\.examen").html("FUM: "+ localStorage.fum + ", EG: " + localStorage.eg +" sem., FPP: " + localStorage.fpp);
        $("#paciente\\.nombre\\.eco\\.prim\\.examen").html("FUM: "+ localStorage.fum + ", EG: " + localStorage.eg +" sem., FPP: " + localStorage.fpp);
        $("#paciente\\.nombre\\.eco\\.segundo\\.examen").html("FUM: "+ localStorage.fum + ", EG: " + localStorage.eg +" sem., FPP: " + localStorage.fpp);
        $("#paciente\\.nombre\\.eco\\.doppler\\.examen").html("FUM: "+ localStorage.fum + ", EG: " + localStorage.eg +" sem., FPP: " + localStorage.fpp);
        $("#paciente\\.nombre\\.imagenes\\.prim\\.examen").html("FUM: "+ localStorage.fum + ", EG: " + localStorage.eg +" sem., FPP: " + localStorage.fpp);
    });
    //input de apellidos de paciente
    $("#buscar\\.paciente\\.apellido").on("keyup", function(event){
        let apellido = {
            patient_lastname: $(this).val()
        }
        $.post(serverURL + "configuracion/obtenerapellidos", apellido).done(function (data) {
            $("#apellidos").empty();
            if (data.length > 0 ){
                $.each(data, function(i, item) {
                    if (item.PatientNam !== null){
                        var nombre = item.PatientNam.split("^");
                    }
                    else{
                        var nombre = ["NN", "NN"];
                    }
                    $("#apellidos").append('<option value="'+ nombre[0] + ' ' + nombre[1] + '"></option>');
                });
            }
        });
    });

    $("#lcn").on("keyup", function(){
        let valor = $(this).val();
        $("#lcnPct").val(eglcn(valor));
    });

    $("#saco").on("keyup", function(){
        let valor = $(this).val();
        $("#sacoPct").val(egSaco(valor));
    });
});