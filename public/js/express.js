//funciones al cargar la página
//etapa se seleccionar fecha para exámen, mover a creación de pacientes, dimilar a sistema no guardar
$(document).ready(function() {
    //color de fondo
    $("html").css("background", "linear-gradient(#c2e5e8, #e9f6f8)").addClass("h-100");
    $("head").css("background", "linear-gradient(#c2e5e8, #e9f6f8)").addClass("h-100");
    $("body").css("background", "linear-gradient(#c2e5e8, #e9f6f8)").addClass("h-100");
    appClean();
    appLoadBasic();
    location.replace(serverURL + "examen/express#paciente");
});
//$(window).scroll(function(){
//    let a = $(window).scrollTop();
//    let b = 0;
//    if ($("#").hasClass("active") == true){
//        b = $("#ecoObsSegTrimContainer").height() - $("#ecoObsSegTrimMenu").height() - 100;
//    }
//    else{
//        b = $("#ecoObsSegTrimContainer").height() - $("#ecoDopplerMenu").height() - 100; 
//    }

//    if (a < b){
//        $("#ecoObsSegTrimMenu").addClass("position-fixed").removeClass("position-absolute");
//        $("#ecoDopplerMenu").addClass("position-fixed").removeClass("position-absolute");
//        $("#ecoObsSegTrimMenu").css("top","");
//        $("#ecoDopplerMenu").css("top","");
//    }
//    else if ( a > b){
//        $("#ecoObsSegTrimMenu").addClass("position-absolute").removeClass("position-fixed");
//        $("#ecoObsSegTrimMenu").css("top","calc(100% - 23.5rem)");
//        $("#ecoDopplerMenu").addClass("position-absolute").removeClass("position-fixed");
//        $("#ecoDopplerMenu").css("top","calc(100% - 23.5rem)");
//    }
//});

//funciones de botones
$(document).ready(function() {
    $(window).on('hashchange', function() {
        onHashChange();
    });

    $('#cccaController').on('click', function() {
        if ($('#cccaView').hasClass('d-none')) {
            $('#cccaView').removeClass('d-none');
        } else {
            $('#cccaView').addClass('d-none');
        }
    });

    $("#step\\.examen").on("click", function() {
        //establecer id (fecha actual)
        let fecha = new Date();
        let day = ("0" + fecha.getDate()).slice(-2);
        let month = ("0" + (fecha.getMonth() + 1)).slice(-2);

        //nombres predeterminados
        $("#nombre-paciente").val("Paciente");
        $("#apellido-paciente").val("de prueba");
        $("#paciente\\.nombre\\.eco\\.basico").html("Paciente de prueba, " + (day) + (month) + fecha.getFullYear());
        $("#paciente\\.nombre\\.eco\\.elegir").html("Paciente de prueba, " + (day) + (month) + fecha.getFullYear());
        $("#paciente\\.nombre\\.eco\\.prim").html("Paciente de prueba, " + (day) + (month) + fecha.getFullYear());
        $("#paciente\\.nombre\\.eco\\.segundo").html("Paciente de prueba, " + (day) + (month) + fecha.getFullYear());
        $("#paciente\\.nombre\\.eco\\.doppler").html("Paciente de prueba, " + (day) + (month) + fecha.getFullYear());
        $("#paciente\\.nombre\\.imagenes").html("Paciente de prueba, " + (day) + (month) + fecha.getFullYear());

        $("#id-paciente").val((day) + (month) + fecha.getFullYear());
        //cambiar fum por la fecha actual
        $("#input\\.paciente\\.fum").val((day) + "/" + (month) + "/" + fecha.getFullYear());
        $('#input\\.paciente\\.fum').datepicker('setValue', (day) + "/" + (month) + "/" + fecha.getFullYear());
        $("#input\\.paciente\\.fum").trigger("change");

        //cambiar a tipo de examen, paso 6
        window.location.href = "#tipoExamen";
        //no mostrar el título
        $("#titulos\\.step\\.six\\.head").addClass("d-none");
        // sección de datos innecesarios
        $("#paciente\\.informacion\\.ecografica").removeClass("d-none");
        //ocultar las imágenes
        $("#ecografia\\.imagenes").addClass("d-none");
        //activar los calendarios

        $("#input\\.paciente\\.fum\\.extra").val((day) + "/" + (month) + "/" + fecha.getFullYear());
        $("#input\\.paciente\\.fe\\.extra").val((day) + "/" + (month) + "/" + fecha.getFullYear());
        $('#input\\.paciente\\.fum\\.extra').datepicker();
        $('#input\\.paciente\\.fe\\.extra').datepicker();
        $('#input\\.paciente\\.fum\\.extra').datepicker('setValue', (day) + "/" + (month) + "/" + fecha.getFullYear());
        $('#input\\.paciente\\.fe\\.extra').datepicker('setValue', (day) + "/" + (month) + "/" + fecha.getFullYear());
        $('#input\\.paciente\\.fum\\.extra').datepicker().on('changeDate', function(ev) {
            $(this).trigger("change");
            $(this).datepicker('hide');
        });

        $('#input\\.paciente\\.fe\\.extra').datepicker().on('changeDate', function(ev) {
            $("#input\\.paciente\\.fum\\.extra").trigger("change");
            $(this).datepicker('hide');
        });

        $('#input\\.paciente\\.fum\\.extra').on("change", function() {
            localStorage.fum = $(this).val();
            localStorage.fee = $("#input\\.paciente\\.fe\\.extra").val();
            localStorage.eg = calcularEG();
            var semanas = Math.trunc(localStorage.eg);
            var dias = Math.trunc((localStorage.eg - Math.trunc(localStorage.eg)) * 10);

            $("#input\\.paciente\\.eg\\.dias").val(dias);
            $("#input\\.paciente\\.eg\\.semanas").val(semanas);

            $("#input\\.paciente\\.eg\\.dias\\.extra").val(dias);
            $("#input\\.paciente\\.eg\\.semanas\\.extra").val(semanas);

            //fum para examen
            $("#input\\.paciente\\.fe\\.ecoprim").val(localStorage.fee);
            $("#input\\.paciente\\.fe\\.ecoseg").val(localStorage.fee);
            $("#input\\.paciente\\.fe\\.doppler").val(localStorage.fee);
            //eg para examen
            $("#eco\\.prim\\.eg").val(localStorage.eg);
            $("#eco\\.seg\\.eg").val(localStorage.eg);
            $("#eco\\.doppler\\.eg").val(localStorage.eg);
            //FPP
            $("#input\\.paciente\\.fpp\\.examen").val(localStorage.fpp);
            $("#input\\.paciente\\.fpp\\.extra").val(localStorage.fpp);

            //datos para información paciente parte superior
            $("#paciente\\.nombre\\.eco\\.elegir\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
            $("#paciente\\.nombre\\.eco\\.prim\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
            $("#paciente\\.nombre\\.eco\\.segundo\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
            $("#paciente\\.nombre\\.eco\\.doppler\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
            $("#paciente\\.nombre\\.imagenes\\.prim\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
        });
    });

    $("#step\\.search").on("click", function() {
        $("#step-one").addClass("d-none");
        $("#step-two-find").removeClass("d-none");
        $("#buscar\\.paciente\\.id").val("");
        $("#buscar\\.paciente\\.apellido").val("");
    });

    $("#step\\.new").on("click", function() {
        $("#step-two-find").addClass("d-none");
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

        $("#id-paciente").val((day) + (month) + fecha.getFullYear());
        //cambiar fum por la fecha actual
        $("#input\\.paciente\\.fum").val((day) + "/" + (month) + "/" + fecha.getFullYear());
        $('#input\\.paciente\\.fum').datepicker('setValue', (day) + "/" + (month) + "/" + fecha.getFullYear());
        $("#input\\.paciente\\.fum").trigger("change");
    });

    $("#buscar\\.paciente\\.action").on("click", function() {
        let apellido = $("#buscar\\.paciente\\.apellido").val();
        let id = $("#buscar\\.paciente\\.id").val();

        if (apellido.length > 0) {
            let data = {
                patient_lastname: $("#buscar\\.paciente\\.apellido").val()
            }
            $.post(serverURL + "configuracion/obtenerut", data).done(function(data) {
                $("#buscar\\.paciente\\.id").val("");
                if (data !== null) {
                    if (Object.keys(data).length > 0) {
                        $("#buscar\\.paciente\\.id").val(data.PatientID);
                        obtenerNombre(data.PatientID);
                    }
                } else {
                    alert("No hay pacientes con el apellido escrito");
                }
            });
        } else if (id.length > 0) {
            obtenerNombre(id);
        } else {
            alert("Escriba un ID o el apellido de la paciente");
        }
    });

    //pacientes paso 3
    $("#boton\\.volver\\.step\\.three").on("click", function() {
        $("#step-two-find").removeClass("d-none");
        $("#step-three").addClass("d-none");
    });

    $("#boton\\.modificar\\.paciente").on("click", function() {
        $("#input\\.paciente\\.fum").attr("disabled", false);
        $("#tipo\\.examen\\.previo").attr("disabled", false);
        $("#div\\.pacientes\\.fum\\.save").removeClass("d-none");
        $("#div\\.pacientes\\.tipo\\.examen\\.sav").removeClass("d-none");
        $("#boton\\.modificar\\.paciente").addClass("d-none");
    });

    $('#guardarfur').on("click", function() {
        var valores = {
            rut: $("#id-paciente").val(),
            fur: $("#input\\.paciente\\.fum").val()
        }
        $.post(serverURL + "pacientes/savefur", valores).done(function(data) {
            $("#input\\.paciente\\.fum").attr("disabled", true);
            $("#div\\.pacientes\\.fum\\.save").addClass("d-none");
            alert("FUM guardada");
        });
    });

    $('#guardartipoexamen').on("click", function() {
        var valores = {
            rut: $("#id-paciente").val(),
            exmtxt: $("#tipo\\.examen\\.previo option:selected").html(),
            exm: $("#tipo\\.examen\\.previo").val()
        }
        $.post(serverURL + "pacientes/savexmprev", valores).done(function(data) {
            $("#tipo\\.examen\\.previo").attr("disabled", true);
            $("#div\\.pacientes\\.tipo\\.examen\\.sav").addClass("d-none");
            alert("Guardado");
        });
    });

    $('#configSiController').on('click', function() {
        window.location.href = serverURL + "configuracion";
    });

    $('#configSiController').on('focusout', function() {
        $('#configNoController').button('toggle');
    });

    $('#infadicionalClinicoNoController').on('click', function() {
        if ($('#infadicionalClinicoView').hasClass('d-none') == false) {
            $('#infadicionalClinicoView').addClass('d-none');
        }
    });

    $('#infadicionalClinicoSiController').on('click', function() {
        $('#infadicionalClinicoView').removeClass('d-none');
    });

    //pacientes paso 4
    $("#step\\.four").on("click", function() {
        $("#id-paciente").attr("disabled", true);
        $("#nombre-paciente").attr("disabled", true);
        $("#apellido-paciente").attr("disabled", true);
        $("#input\\.paciente\\.fum").attr("disabled", true);
        $("#tipo\\.examen\\.previo").attr("disabled", true);
        $("#div\\.pacientes\\.fum\\.save").addClass("d-none");
        $("#div\\.pacientes\\.tipo\\.examen\\.sav").addClass("d-none");
        $("#boton\\.modificar\\.paciente").removeClass("d-none");
        window.location.href = "#tipoExamen";
        //mostrar el título
        $("#titulos\\.step\\.six\\.head").removeClass("d-none");
        //ocultar sección de datos innecesarios
        $("#paciente\\.informacion\\.ecografica").addClass("d-none");
        //mostrar opcion de imagenes
        $("#ecografia\\.imagenes").removeClass("d-none");
    });

    $("#boton\\.volver\\.step\\.five").on("click", function() {
        window.location.href = "#paciente";
    });

    //botones volver
    $("#boton\\.volver\\.eco\\.prim\\.trim").on("click", function() {
        history.back();
    });
    $("#boton\\.volver\\.eco\\.seg\\.trim").on("click", function() {
        history.back();
    });
    $("#boton\\.volver\\.eco\\.doppler").on("click", function() {
        history.back();
    });

    $("#boton\\.volver\\.imagen").on("click", function() {
        history.back();
    });

    $("#boton\\.dicom\\.imagen").on("click", function() {
        document.location.hash = "#imgDicom";
        $("#boton\\.volver\\.imagen").off("click");
        $("#boton\\.volver\\.imagen").on("click", function() {
            history.back();
        });
    });
    
    //ecografía de primer trimestre
    $("#boton\\.eco\\.prim\\.cancelar").on("click", function() {
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

    $('#boton\\.eco\\.prim\\.guardar').on('click', function() {
        let fecha = new Date();
        
        let fechaStr = $("#input\\.paciente\\.fe\\.ecoprim").val();
        let hora = fecha.getHours()+":"+fecha.getMinutes();
        fechaStr = fechaStr+" "+ hora;
        let examen = {
            examen: 1,
            fecha: fechaStr,
            eg: $("#eco\\.prim\\.eg").val(),
            embrion: $("#lcn").val(),
            saco: $("#saco").val(),
            comentarios: $("#comentarios-eco-uno").val(),
            douglas: $("#exploracion-douglas").val(),
            douglas_comentarios: $("#comentarios-douglas-informe").val(),
            anexo_der: $("#anexo-derecho").val(),
            anexo_izq: $("#anexo-izquierdo").val(),
            embrion_desc: $("#embrion").val(),
            fcf: $("#fcf-prim").val(),
            saco_vitelino: $("#saco-vitelino").val(),
            saco_gest: $("#saco-gestacional").val(),
            saco_vitelino_mm: $("#saco-vitelino-mm").val(),
            utero_ubic_uno: $("#utero-ubic1").val(),
            utero_ubic_dos: $("#utero-ubic2").val(),
            cuerpo_uterino: $("#cuerpo-uterino").val(),
        }
    
        let data = {
            id: $("#id-paciente").val(),
            tipo: 1,
            data: JSON.stringify(examen)
        }
    
        $.post(serverURL + "examen/set/", data).done(function(response) {
            if (Object.keys(response).length > 0) {
                $("#table\\.ecografia\\.primtrim").empty();
                $.each(response.data, function(i, val) {
                    let fila = '<tr><th scope="row" data-id="' + val.eg_examen + '" data-paciente="' + $("#id-paciente").val() + '" data-tipo="1">' + val.n_examen + '</th><td>' + val.fecha_examen + '</td><td>' + val.eg_examen + '</td><td>' + val.embrion + '</td><td>' + val.prom_saco + '</td>';
                    $("#table\\.ecografia\\.primtrim").append(fila);
                });
                $("#table\\.ecografia\\.primtrim tr").on('click', function() {
                    activateTr(this);
                });
            }
        });
    });

    $("#boton\\.eco\\.prim\\.eliminar").on("click", function() {
        $('#popupTitle').html("Información");
        $('#popupBody').html("<p><strong>¿Está seguro de eliminar el exámen seleccionado?</strong></p><div class='btn-group btn-group-toggle' data-toggle='buttons'><label class='btn btn-secondary active' id='infEcoObsSegTrim2verNO' aria-pressed='true'><input type='radio' value='0' checked=''> NO</label><label class='btn btn-secondary' id='infEcoObsSegTrim2verSi' aria-pressed='true'><input type='radio' value='1'> SI</label></div>");
        $('#impDoppler1').remove();
        $('#infecoObsSegTrim1Clon').remove();
        $('#popupGenerico').modal('show');
        $("#infEcoObsSegTrim2verNO").on("click", function() {
            $('#popupGenerico').modal('hide');
        });
        $("#infEcoObsSegTrim2verSi").on("click", function() {
            $('#popupGenerico').modal('hide');
            var filas = $("#table\\.ecografia\\.primtrim").children();

            $.each(filas, function(i, val) {
                if ($(val).hasClass('table-active') == true) {
                    let examen = {
                        eg: $(val).children().data("id")
                    }
                    let data = {
                        id: $("#id-paciente").val(),
                        tipo: 1,
                        data: JSON.stringify(examen)
                    }
                    $.post(serverURL + "examen/del/", data).done(function(response) {
                        if (Object.keys(response).length > 0) {
                            $("#table\\.ecografia\\.primtrim").empty();
                            $.each(response.data, function(i, val) {
                                let fila = '<tr><th scope="row" data-id="' + val.eg_examen + '" data-paciente="' + $("#id-paciente").val() + '" data-tipo="1">' + val.n_examen + '</th><td>' + val.fecha_examen + '</td><td>' + val.eg_examen + '</td><td>' + val.embrion + '</td><td>' + val.prom_saco + '</td>';
                                $("#table\\.ecografia\\.primtrim").append(fila);
                            });
                            $("#table\\.ecografia\\.primtrim tr").on('click', function() {
                                activateTr(this);
                            });
                        }
                    });
                }
            });
        });
    });

    $('#graficoLcn').on('click', function() {
        $('#graficosTitle').html("Gráfico de Longitud Cefalo - Nalgas (LCN)");
        $('#graficosBody').html("<div class='row'><div class='col'><div id='graficoLcnBaseView'></div></div></div>");
        var egLcn = parseFloat(localStorage.eg);
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoLcnBaseView').highcharts({
            title: {
                text: 'LCN 6 a 15 semanas',
                x: -20
            },
            xAxis: {
                categories: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
            },
            yAxis: {
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [0.2, 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 11]
            },
            credits: {
                enabled: false
            },
            colors: ['#313131', '#313131', '#313131'],
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            series: [{
                name: '(-) 2DE',
                type: "line",
                marker: {
                    enabled: false
                },
                data: [0.26, 0.77, 1.4, 2.05, 2.62, 3.55, 4.68, 5.82, 6.98, 8.02],
                dashStyle: 'shortdot'
            }, {
                name: 'Media',
                type: "line",
                marker: {
                    enabled: false
                },
                data: [0.38, 0.89, 1.54, 2.25, 2.95, 4.05, 5.29, 6.65, 7.90, 9.01]
            }, {
                name: '(+) 2DE',
                type: "line",
                marker: {
                    enabled: false
                },
                data: [0.53, 1.04, 1.71, 2.49, 3.32, 4.64, 6.08, 7.57, 8.91, 10.01],
                dashStyle: 'shortdot'
            }, {
                type: "line",
                name: 'LCN (Hadlock y col. Radiology 182. 501, 1992)',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
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

                    if (egLcn2 > 1) {
                        for (i = 1; i <= 10; i++) {
                            if (lcnegx[i] >= egLcn2) {
                                if (flag == false) {
                                    data.push({
                                        y: lcn,
                                    });
                                    flag = true;
                                } else {
                                    data.push({
                                        y: 0,
                                    });
                                }
                            } else {
                                data.push({
                                    y: 0,
                                });
                            }
                        }
                    } else {
                        for (i = 1; i <= 4; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#graficoSaco').on('click', function() {
        $('#graficosTitle').html("Gráfico Saco");
        $('#graficosBody').html("<div id='graficoSacoView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
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
                title: {
                    text: ''
                },
                tickPositions: [-1, 1.0, 2.5, 4.0]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['4.2', '4.3', '4.4', '4.5', '4.6', '5', '5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '6', '6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '7', '7.1', '7.2', '7.3', '7.4', '7.5', '7.6', '8']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: '-DE',
                marker: {
                    enabled: false
                },
                data: [0.012, 0.101, 0.145, 0.214, 0.293, 0.41, 0.51, 0.61, 0.7, 0.8, 0.9, 0.99, 1.07, 1.15, 1.22, 1.33, 1.39, 1.49, 1.59, 1.67, 1.76, 1.86, 1.94, 2.04, 2.1, 2.2, 2.3],
                dashStyle: 'shortdot'
            }, {
                type: "line",
                name: 'media',
                marker: {
                    enabled: false
                },
                data: [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.99, 2.09, 2.18, 2.29, 2.41, 2.5, 2.6, 2.7, 2.8, 2.9, 3]
            }, {
                type: "line",
                name: '+DE',
                marker: {
                    enabled: false
                },
                data: [0.99, 1.09, 1.16, 1.26, 1.36, 1.51, 1.6, 1.7, 1.8, 1.9, 1.99, 2.11, 2.19, 2.29, 2.41, 2.51, 2.61, 2.7, 2.8, 2.9, 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6],
                dashStyle: 'shortdot'
            }, {
                type: "line",
                name: 'Saco gestacional [Hellmann y col. Am. J O & G 1968; 1.03(6)789 800]',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var categories = [4.2, 4.3, 4.4, 4.5, 4.6, 5, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 8];
                    var edadGest = parseInt(localStorage.eg);

                    var saco = $("#saco").val();
                    saco = saco.toString();
                    saco = saco.replace(",", ".");
                    saco = parseFloat(saco) / 10;

                    for (i = 0; i <= 27; i++) {

                        if (categories[i] == edadGest) {
                            data.push({
                                y: saco,
                            });
                        } else {
                            data.push({
                                y: -2,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $("input[name='ajustarEcoPrimTrim']").on("change", function() {
        if ($(this).is(":checked")) {
            if ($(this).val() == 1) {
                var LCN = parseInt($('#lcn').val());
                var saco = parseInt($('#saco').val());
                var eg = parseInt(localStorage.eg);
                var oneday = 1000 * 60 * 60 * 24;

                if (isNaN(LCN) | LCN < 0 | isNaN(eg) | eg < 1) {
                    if (isNaN(saco) | saco < 0 | isNaN(eg) | eg < 1) {
                        $('#popupTitle').html("Información");
                        $('#popupBody').html("<p>El paciente debe tener una Edad Gestacional y un valor en LCN o Saco Gestacional</p>");
                        $('#popupGenerico').modal('show');
                    } else {
                        var EGsaco = parseFloat($('#sacoPct').val());
                        var eg1 = new Number((Math.floor(EGsaco) * 7) + Math.round((EGsaco - Math.floor(EGsaco)) * 7));
                        var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
                        var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
                        diferencia = diferencia * oneday;
                        var FUM = localStorage.fum;
                        FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
                        FUM = new Date(FUM);
                        var B = new Date();
                        B.setTime(FUM.getTime() + diferencia);
                        $("#input\\.paciente\\.fum").val(B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear());
                        $('#input\\.paciente\\.fum').datepicker('setValue', B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear());
                        $("#input\\.paciente\\.fum").trigger("change");
                        $('#furAjustada').val($("#input\\.paciente\\.fum").val());
                        $('#egAjustada').val($("#input\\.paciente\\.eg\\.semanas").val() + "," + $("#input\\.paciente\\.eg\\.dias").val());
                        $('#fppAjustada').val($("#input\\.paciente\\.fpp\\.examen").val());
                    }
                } else {
                    var EGLCN = parseFloat($('#lcnPct').val());
                    var eg1 = new Number((Math.floor(EGLCN) * 7) + Math.round((EGLCN - Math.floor(EGLCN)) * 7));
                    var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
                    var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
                    diferencia = diferencia * oneday;
                    var FUM = localStorage.fum;
                    FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
                    FUM = new Date(FUM);
                    var B = new Date();
                    B.setTime(FUM.getTime() + diferencia);
                    $("#input\\.paciente\\.fum").val(B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear());
                    $('#input\\.paciente\\.fum').datepicker('setValue', B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear());
                    $("#input\\.paciente\\.fum").trigger("change");
                    $('#furAjustada').val($("#input\\.paciente\\.fum").val());
                    $('#egAjustada').val($("#input\\.paciente\\.eg\\.semanas").val() + "," + $("#input\\.paciente\\.eg\\.dias").val());
                    $('#fppAjustada').val($("#input\\.paciente\\.fpp\\.examen").val());
                }
                $('#resultadoAjusteEcoPrimTrim').show();
            } else {
                $('#resultadoAjusteEcoPrimTrim').hide();
            }
        }
    });

    $('#saco-vitelino').on("click", function() {
        if ($(this).val() == 'presente') {
            $('#valor-saco-vitelino').css('display', 'block');
        } else {
            $('#valor-saco-vitelino').css('display', 'none');
            $('#valor-saco-vitelino').val('');
        }
    });

    $('#exploracion-douglas').on("click", function() {
        if ($(this).val() == 'ocupado') {
            $('#exploracion-douglas-informe').css('display', 'block');
        } else {
            $('#exploracion-douglas-informe').css('display', 'none');
        }
    });

    $('#embrion').on("click", function() {
        if ($(this).val() == 'no se observa aun' || $(this).val() == 'act. no evidenciable') {
            $('#fcf-primer-trim').css('display', 'none');
            $('#fcf-primer-trim').val('');
            $('#lcn-informe').css('display', 'none');
            $('#lcn-informe').val('');
        } else if ($(this).val() == 'act. cardiaca evidenciable') {
            $('#fcf-prim').val($("#fcf-prim option:first").val());
            $('#lcn-informe').css('display', 'none');
            $('#lcn-informe').val($('#lcn').val());
        } else if ($(this).val() == 'act. card. y Corp. (-)') {
            $('#lcn-informe').css('display', 'block');
            $('#lcn-informe').val($('#lcn').val());
        } else {
            $('#fcf-primer-trim').css('display', 'block');
            $('#lcn-informe').css('display', 'block');
            $('#lcn-informe').val($('#lcn').val());
        }
    });

    $('#modalPreInfEcoPrimTrim').on('click', function() {
        crearInformeEcoPrimTrim();
    });

    $("#primtrim\\.adicionales\\.translucencia").on("click", function() {
        calcularRiesgo();
    });

    $("#boton\\.eco\\.prim\\.nuevo").on("click", function() {
        $("#lcn").val("");
        $("#saco").val("");
        $("#translunucal").val("");
        $("#edadmaternaprimtrim").val(14);
        $("#loncefalocaudal").val(45);
        $("#examen\\.eco\\.primtrim\\.adicionales\\.translucencia\\.trisomia\\.no").prop("checked", true);
        $("#evaluacion\\.translucencia\\.no").button('toggle');
        $("#ajuste\\.primtrim\\.no").button('toggle');
        $("#resultadoAjusteEcoPrimTrim").css("display", "none");
    });

    //ecografia segundo trimestre
    $("#boton\\.eco\\.segundo\\.nuevo").on("click", function() {
        $("#dbp").val("").trigger("change");
        $("#dof").val("").trigger("change");
        $("#cc").val("").trigger("change");
        $("#ca").val("").trigger("change");
        $("#ca").val("").trigger("change");
        $("#lf").val("").trigger("change");
        $("#lh").val("").trigger("change");
        $("#cerebelo").val("").trigger("change");
        $("#bvm").val("").trigger("change");
    });

    $('#bvmEcoDos').on('change', function() {
        bvmEcoDos();
        $('#bvm').val($(this).val()).trigger('change');
    });

    $("#eco\\.seg\\.trim\\.select\\.comentario").on("change", function(){
        if ($(this).val() == 1){
            $('#bvmEcoDos').val($('#bvm').val()).trigger('change');

            var percentilPeso = $('#pfePctRpt').val();
            percentilPeso = percentilPeso.replace('&lt;', '<').replace('&gt;', '>');
            var comentarios = 'Crecimiento (peso) percentil ' + percentilPeso + ', para gráfica de peso fetal Hadlock* \r\n';

            var linea6 = "Líquido amniótico " + $('#liq-cualitativo-eco').val() + ", con bolsillo vertical mayor " + document.getElementById("bvmEcoDos").value + " mm.";

            comentarios = comentarios + linea6 + '\r\n';
            $("#comentarios-eco-dos-inf-dos").val(comentarios);
        }
        else if ($(this).val() == 2){
            var fur = $("#input\\.paciente\\.fum\\.extra").val();
            var fpp = $("#input\\.paciente\\.fpp\\.extra").val();
            var comentario = "Fum operacional: " + fur + "\r\nFecha probable de parto: " + fpp + "\r\n";
            $('#comentarios-eco-dos-inf-dos').val(comentario);
        }
    });

    $('#ev-morfo').on('change', function() {
        if ($(this).val() == "Descripcion general detallando distintos segmentos") {
            $("#comentarios-anatomia-informe-eg-texto").val("Evaluación anatómica general de aspecto normal; cráneo y estructura internas de aspecto normal, cara cuello normal, labio superior integro, Tórax y abdomen de aspecto normal, corazón cuatro cámaras, tractos de salida de aspecto normal, cámara gástrica y vejiga visibles, riñón derecho e izquierdo de aspecto normal, pared abdominal integra, columna visible en toda su extensión, extremidades con movilidad y tono de aspecto normal, sexo fetal masculino.");
        } else {
            $("#comentarios-anatomia-informe-eg-texto").val('');
        }
    });

    $("#boton\\.eco\\.segundo\\.guardar").on("click", function() {
        let examen = {
            examen: 1,
            fecha: $("#input\\.paciente\\.fe\\.ecoseg").val(),
            eg: $("#eco\\.seg\\.eg").val(),
            dbp: $("#dbp").val(),
            dof: $("#dof").val(),
            cc: $("#cc").val(),
            ca: $("#ca").val(),
            capct: $("#caPctRpt").val(),
            lf: $("#lf").val(),
            lh: $("#lh").val(),
            cerebelo: $("#cerebelo").val(),
            pfe: $("#pfe").val(),
            pctpeso: $("#pfePctRpt").val(),
            bvm: $("#bvm").val(),
            bvmpct: $("#bvm").val(),
            egcal: $("#egP50").val(),
            ccca: $("#cccaPct").val(),
            cccapct: $("#cccaPct").val()
        }

        let data = {
            id: $("#id-paciente").val(),
            tipo: 2,
            data: JSON.stringify(examen)
        }

        $.post(serverURL + "examen/set/", data).done(function(response) {
            $("#table\\.ecografia\\.segundotrim").empty();
            if (Object.keys(response).length > 0) {
                $.each(response.data, function(i, val) {
                    let fila = '<tr><th scope="row" data-id="' + val.eg_examen + '" data-tipo="2">' + val.n_examen + '</th><td>' + val.fecha_examen + '</td><td>' + val.eg_examen + '</td><td>' + val.pfe_examen + '</td><td>' + val.pctpeso_examen + '</td><td>' + val.ccca_examen + '</td><td>' + val.pctca_examen + '</td><td>' + val.pctbvm_examen + '<td>';
                    $("#table\\.ecografia\\.segundotrim").append(fila);
                });
                $("#table\\.ecografia\\.segundotrim tr").on('click', function() {
                    activateTr(this);
                });
            }
        });
    });

    $("#boton\\.eco\\.segundo\\.eliminar").on("click", function() {
        $('#popupTitle').html("Información");
        $('#popupBody').html("<p><strong>¿Está seguro de eliminar el exámen seleccionado?</strong></p><div class='btn-group btn-group-toggle' data-toggle='buttons'><label class='btn btn-secondary active' id='infEcoObsSegTrim2verNO' aria-pressed='true'><input type='radio' value='0' checked=''> NO</label><label class='btn btn-secondary' id='infEcoObsSegTrim2verSi' aria-pressed='true'><input type='radio' value='1'> SI</label></div>");
        $('#impDoppler1').remove();
        $('#infecoObsSegTrim1Clon').remove();
        $('#popupGenerico').modal('show');
        $("#infEcoObsSegTrim2verNO").on("click", function() {
            $('#popupGenerico').modal('hide');
        });
        $("#infEcoObsSegTrim2verSi").on("click", function() {
            $('#popupGenerico').modal('hide');

            var filas = $("#table\\.ecografia\\.segundotrim").children();

            $.each(filas, function(i, val) {
                if ($(val).hasClass('table-active') == true) {
                    let examen = {
                        eg: $(val).children().data("id")
                    }

                    let data = {
                        id: $("#id-paciente").val(),
                        tipo: 2,
                        data: JSON.stringify(examen)
                    }

                    $.post(serverURL + "examen/del/", data).done(function(response) {
                        $("#table\\.ecografia\\.segundotrim").empty();
                        if (Object.keys(response).length > 0) {
                            $.each(response.data, function(i, val) {
                                let fila = '<tr><th scope="row" data-id="' + val.eg_examen + '" data-tipo="2">' + val.n_examen + '</th><td>' + val.fecha_examen + '</td><td>' + val.eg_examen + '</td><td>' + val.pfe_examen + '</td><td>' + val.pctpeso_examen + '</td><td>' + val.ccca_examen + '</td><td>' + val.pctca_examen + '</td><td>' + val.pctbvm_examen + '<td>';
                                $("#table\\.ecografia\\.segundotrim").append(fila);
                            });
                            $("#table\\.ecografia\\.segundotrim tr").on('click', function() {
                                activateTr(this);
                            });
                        }
                    });

                }
            });
        });
    });

    $('#modalPreInfEcoObsSegTrim1').on('click', function() {
        crearInformeEcoSegTrim1();
        
    });

    $('#modalPreInfEcoObsSegTrim2').on('click', function() {
        var cb = parseInt($('#cerebelo').val());
        var lh = parseInt($('#lh').val());

        if (isNaN(cb) || isNaN(lh)) {
            $('#popupTitle').html("Información");
            $('#popupBody').html("<p><strong>Actualmente la Edad gestacional se calculará solo por biometrías de Cráneo y Fémur (Excluido CA).<br>Para mayor exactitud es recomendable ingresar mediciones de Humero y Cerebelo.</strong><br>¿Desea ingresar biometrías de Humero y Cerebelo?</p><div class='btn-group btn-group-toggle' data-toggle='buttons'><label class='btn btn-secondary active' id='infEcoObsSegTrim2verNO' aria-pressed='true'><input type='radio' value='0' checked=''> NO</label><label class='btn btn-secondary' id='infEcoObsSegTrim2verSi' aria-pressed='true'><input type='radio' value='1'> SI</label></div>");
            $('#impDoppler1').remove();
            $('#infecoObsSegTrim1Clon').remove();
            $('#popupGenerico').modal('show');
            $("#infEcoObsSegTrim2verNO").on("click", function() {
                //añadir boton de imprimir
                crearInformeEcoSegTrim2();
                $('#popupGenerico').modal('hide');
            });
            $("#infEcoObsSegTrim2verSi").on("click", function() {
                $('#popupGenerico').modal('hide');
                $('#lh').focus();
                $("html, body").animate({
                    scrollTop: 100
                }, "slow");
            });
            return;
        }

        crearInformeEcoSegTrim2();
    });

    $('#graficoDbp').on('click', function() {
        $('#graficosTitle').html("Gráfico DBP");
        $('#graficosBody').html("<div id='graficoDbpView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoDbpView').highcharts({
            title: {
                text: 'DBP',
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
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [10, 30, 50, 72, 90, 114]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: '(-) 2DE',
                marker: {
                    enabled: false
                },
                data: [14, 17, 19, 25, 29, 33, 34, 38, 41, 43, 46, 49, 52, 54, 57, 61, 63, 65, 69, 69, 74, 74, 77, 78, 80, 83, 85, 87]
            }, {
                type: "line",
                name: 'DE',
                marker: {
                    enabled: false
                },
                data: [20, 23, 26, 30, 35, 38, 40, 44, 46, 49, 52, 56, 59, 62, 64, 68, 70, 73, 76, 78, 81, 83, 85, 86, 87, 90, 91, 94]
            }, {
                type: "line",
                name: '(+) 2DE',
                marker: {
                    enabled: false
                },
                data: [25, 29, 33, 35, 41, 42, 46, 50, 52, 56, 59, 63, 66, 70, 71, 75, 77, 81, 83, 87, 88, 91, 94, 95, 97, 99, 102, 104]
            }, {
                type: "line",
                name: 'DBP',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var dbp = $("#dbp").val();
                    dbp = dbp.toString();
                    dbp = dbp.replace(",", ".");
                    dbp = parseFloat(dbp);

                    if (dbp > 1) {
                        for (i = 13; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: dbp,
                        });
                        for (i = edadGest + 1; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 13; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show')
    });

    $('#graficoCc').on('click', function() {
        $('#graficosTitle').html("Gráfico CC");
        $('#graficosBody').html("<div id='graficoCcView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoCcView').highcharts({
            title: {
                text: 'Circunferencia de Cráneo',
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
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [30, 72, 114, 156, 198, 240, 282, 324, 366, 408]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 3',
                marker: {
                    enabled: false
                },
                data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
            }, {
                type: "line",
                name: 'Pct. 97',
                marker: {
                    enabled: false
                },
                data: [90, 100, 111, 124, 136, 150, 165, 179, 193, 206, 219, 232, 243, 256, 268, 279, 290, 300, 310, 319, 328, 336, 343, 351, 358, 363, 368, 373, 377]
            }, {
                type: "line",
                name: 'CC',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var cc = $("#cc").val();
                    cc = cc.toString();
                    cc = cc.replace(",", ".");
                    cc = parseFloat(cc);

                    if (cc > 1) {
                        for (i = 13; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: cc,
                        });
                        for (i = edadGest + 1; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 13; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show')
    });

    $('#graficoCa').on('click', function() {
        $('#graficosTitle').html("Gráfico CA");
        $('#graficosBody').html("<div id='graficoCaView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoCaView').highcharts({
            title: {
                text: 'CA**',
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
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [20, 60, 100, 140, 180, 220, 260, 300, 340, 400]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 3',
                marker: {
                    enabled: false
                },
                data: [40, 50, 60, 72, 84, 97, 107, 119, 131, 141, 151, 161, 171, 181, 191, 200, 209, 218, 227, 236, 245, 253, 261, 269, 277, 285, 292, 299, 307]
            }, {
                type: "line",
                name: 'Pct 97',
                marker: {
                    enabled: false
                },
                data: [68, 78, 88, 101, 112, 127, 141, 155, 168, 183, 196, 209, 223, 235, 248, 260, 271, 284, 295, 306, 318, 329, 339, 349, 359, 370, 380, 389, 399]
            }, {
                type: "line",
                name: 'CA',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var ca = $("#ca").val();
                    ca = ca.toString();
                    ca = ca.replace(",", ".");
                    ca = parseFloat(ca);

                    if (ca > 1) {
                        for (i = 13; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: ca,
                        });
                        for (i = edadGest + 1; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 13; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show')
    });

    $('#graficoLf').on('click', function() {
        $('#graficosTitle').html("Gráfico LF");
        $('#graficosBody').html("<div id='graficoLfView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoLfView').highcharts({
            title: {
                text: 'Largo Femoral',
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
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 3',
                marker: {
                    enabled: false
                },
                data: [6, 9, 12, 14, 17, 20, 22, 25, 27, 30, 32, 35, 37, 40, 42, 45, 47, 49, 52, 54, 56, 58, 59, 61, 62, 64, 65, 66, 67]
            }, {
                type: "line",
                name: 'Pct. 97',
                marker: {
                    enabled: false
                },
                data: [12, 15, 18, 21, 24, 28, 31, 34, 38, 41, 44, 47, 50, 53, 55, 57, 60, 62, 65, 67, 70, 71, 73, 75, 77, 79, 80, 81, 82]
            }, {
                type: "line",
                name: 'LF',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var lf = $("#lf").val();
                    lf = lf.toString();
                    lf = lf.replace(",", ".");
                    lf = parseFloat(lf);

                    if (lf > 0) {
                        for (i = 13; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: lf,
                        });
                        for (i = edadGest + 1; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 13; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show')
    });

    $('#graficoLh').on('click', function() {
        $('#graficosTitle').html("Gráfico LH");
        $('#graficosBody').html("<div id='graficoLhView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoLhView').highcharts({
            title: {
                text: 'Largo Humeral',
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
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [12.3, 15.1, 17.9, 20.7, 23.5, 26.3, 29.1, 31.6, 34.2, 36.7, 39.2, 41.6, 43.9, 46.1, 48.1, 50.1, 52.1, 53.9, 55.6, 57.3, 58.9, 60.5, 62.1, 63.5, 64.9, 66.4, 67.8, 69.3, 70.8]
            }, {
                type: "line",
                name: 'Humero',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var lh = $("#lh").val();
                    lh = lh.toString();
                    lh = lh.replace(",", ".");
                    lh = parseFloat(lh);

                    if (lh > 1) {
                        for (i = 13; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: lh,
                        });
                        for (i = edadGest + 1; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 13; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show')
    });

    $('#graficoCerebelo').on('click', function() {
        $('#graficosTitle').html("Gráfico Cerebelo");
        $('#graficosBody').html("<div id='graficoCerebeloView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoCerebeloView').highcharts({
            title: {
                text: 'Diámetro de Cerebelo',
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
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: '-2DE',
                marker: {
                    enabled: false
                },
                data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44]
            }, {
                type: "line",
                name: 'media',
                marker: {
                    enabled: false
                },
                data: [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52]
            }, {
                type: "line",
                name: '+2DE',
                marker: {
                    enabled: false
                },
                data: [18, 18, 19, 20, 22, 23, 25, 26, 27, 30, 32, 34, 34, 37, 38, 41, 43, 46, 48, 53, 56, 58, 60, 62, 62, 62]
            }, {
                type: "line",
                name: 'Cerebelo',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var cerebelo = $("#cerebelo").val();
                    cerebelo = cerebelo.toString();
                    cerebelo = cerebelo.replace(",", ".");
                    cerebelo = parseFloat(cerebelo);

                    if (cerebelo > 0) {
                        for (i = 15; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: cerebelo,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 15; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#graficoPFE').on('click', function() {
        $('#graficosTitle').html("Gráfico Peso Fetal Estimado");
        $('#graficosBody').html("<div id='graficoPesoView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoPesoView').highcharts({
            title: {
                text: 'Peso Fetal Estimado *',
                x: -20 //center
            },
            subtitle: {
                text: 'Kilogramos',
                x: -20
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false,
                    pointInterval: 1
                }
            },
            yAxis: {
                title: {
                    text: 'Kilogramos'
                },
                tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct 3',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [110, 136, 167, 205, 248, 299, 359, 426, 503, 589, 685, 791, 908, 1034, 1169, 1313, 1465, 1622, 1783, 1946, 2110, 2271, 2427, 2576, 2714]
            }, {
                type: "line",
                name: 'Pct 10',
                marker: {
                    enabled: false
                },
                data: [121, 150, 185, 227, 275, 331, 398, 471, 556, 652, 758, 876, 1004, 1145, 1294, 1453, 1621, 1794, 1973, 2154, 2335, 2513, 2686, 2851, 2985]
            }, {
                type: "line",
                name: 'Pct 90',
                marker: {
                    enabled: false
                },
                data: [171, 212, 261, 319, 387, 467, 559, 665, 784, 918, 1068, 1234, 1416, 1613, 1824, 2049, 2285, 2530, 2781, 3036, 3291, 3543, 3786, 4019, 4234]
            }, {
                type: "line",
                name: 'Pct 97',
                dashStyle: "Dot",
                marker: {
                    enabled: false,
                },
                data: [183, 226, 279, 341, 414, 499, 598, 710, 838, 981, 1141, 1319, 1513, 1724, 1949, 2189, 2441, 2703, 2971, 3244, 3516, 3785, 4045, 4294, 4474]
            }, {
                type: "line",
                name: 'Peso',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;
                    let pfe = parseFloat($('#pfe').val());

                    if (pfe > 1) {
                        for (i = 16; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: pfe,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 16; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#infecoObsSegTrim1').on('click', function() {
        $('#graficosTitle').html("Gráfica evaluación ecográfica del crecimiento fetal");
        $('#impEcoObsSegTrim1').remove();
        $('#infecoObsSegTrim1Clon').remove();
        $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impEcoObsSegTrim1'>Ver Impresion</button>");
        var stringGraficos = "";
        
        if ($("#cccaView").hasClass("d-none") == true){
            stringGraficos = "<div class='container'><div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica evaluación ecográfica del crecimiento fetal</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><hr class='d-none'><div class='row'> <div class='col'> <div id='graficoInfecoObsSegTrimPFEView'></div></div><div class='col'> <div class='row'> <div class='col-12'> <div id='graficoCaView'></div></div><div class='col-12'> <div id='graficoBVMView'></div></div></div></div></div><div class='row' id='lineclear'> <div class='col'> <p class='d-none' style='font-size:10px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> <br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina d-none'>* Evaluación del crecimiento fetal, según referencia propuesta por Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad pct. 10 a 90) <br>** Circunferencia Ambominal según referencia de Hadlock y col. Radiology 152:497 - 501, 1984. (Normalidad Pct 3 a 97) <br>*** Liquido Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000 <br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil. <br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
        }
        else{
            stringGraficos = "<div class='container'> <div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica evaluación ecográfica del crecimiento fetal</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'> <p style='font-size:10px;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE </p></div><div class='col-3'> <p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'> <p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><hr class='d-none'><div class='row'> <div class='col'> <div class='row'> <div class='col-12'> <div id='graficoInfecoObsSegTrimPFEView'></div></div><div class='col-12'> <div id='graficoCCCAView'></div></div></div></div><div class='col'> <div class='row'> <div class='col-12'> <div id='graficoCaView'></div></div><div class='col-12'> <div id='graficoBVMView'></div></div></div></div></div><div class='row' id='lineclear'> <div class='col'> <p class='d-none' style='font-size:10px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong> <br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span> <p class='pie-pagina d-none'>* Evaluación del crecimiento fetal, según referencia propuesta por Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad pct. 10 a 90) <br>** Circunferencia Ambominal según referencia de Hadlock y col. Radiology 152:497 - 501, 1984. (Normalidad Pct 3 a 97) <br>*** Liquido Amniotico BVM, Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000 <br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil. <br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
        }
        var comentarios = $("#comentarios-eco-dos-inf-dos").val();

        var paciente = $('#nombre-paciente').val() + " " + $('#apellido-paciente').val();
        paciente = paciente.toLowerCase();
        var idpaciente = $('#id-paciente').val();
        var fexamen = $("input[name='fee']").val();
        var ecografista = $('#ecografista option:selected').text();
        stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
        stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
        stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
        stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);


        if (typeof comentarios == 'undefined') {
            comentarios = 'Crecimiento (peso) percentil ' + parseInt($('#pfePctRpt').val()) + ', para gráfica de peso fetal Hadlock*<br />Bolsillo vertical mayor de ' + document.getElementById("bvm").value + ' mm';
        } else {
            comentarios = $("#comentarios-eco-dos-inf-dos").val().replace(/\r\n|\r|\n/g, "<br />");
        }
        stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);

        $('#graficosBody').html(stringGraficos);
        $('#impEcoObsSegTrim1').on("click", function() {
            imprSelec("graficosBody");
        });
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        if ($("#cccaView").hasClass("d-none") == true){
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
                        fontWeight: 'normal'
                    }
                },
                plotOptions: {
                    series: {
                        enableMouseTracking: false,
                        pointInterval: 1
                    }
                },
                yAxis: {
                    title: {
                        text: 'Kilogramos'
                    },
                    tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
                },
                colors: ['#313131', '#313131', '#313131'],
                xAxis: {
                    categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
                },
                credits: {
                    enabled: false
                },
                series: [{
                    type: "line",
                    name: 'Pct 3',
                    dashStyle: "Dot",
                    marker: {
                        enabled: false
                    },
                    data: [110, 136, 167, 205, 248, 299, 359, 426, 503, 589, 685, 791, 908, 1034, 1169, 1313, 1465, 1622, 1783, 1946, 2110, 2271, 2427, 2576, 2714]
                }, {
                    type: "line",
                    name: 'Pct 10',
                    marker: {
                        enabled: false
                    },
                    data: [121, 150, 185, 227, 275, 331, 398, 471, 556, 652, 758, 876, 1004, 1145, 1294, 1453, 1621, 1794, 1973, 2154, 2335, 2513, 2686, 2851, 2985]
                }, {
                    type: "line",
                    name: 'Pct 90',
                    marker: {
                        enabled: false
                    },
                    data: [171, 212, 261, 319, 387, 467, 559, 665, 784, 918, 1068, 1234, 1416, 1613, 1824, 2049, 2285, 2530, 2781, 3036, 3291, 3543, 3786, 4019, 4234]
                }, {
                    type: "line",
                    name: 'Pct 97',
                    dashStyle: "Dot",
                    marker: {
                        enabled: false,
                    },
                    data: [183, 226, 279, 341, 414, 499, 598, 710, 838, 981, 1141, 1319, 1513, 1724, 1949, 2189, 2441, 2703, 2971, 3244, 3516, 3785, 4045, 4294, 4474]
                }, {
                    type: "line",
                    name: 'Peso',
                    dashStyle: "Dot",
                    marker: {
                        symbol: 'square'
                    },
                    lineWidth: 0,
                    data: (function() {
                        var data = [];
                        var edadGest = parseInt(localStorage.eg) - 1;
                        let peso = parseFloat($('#pfe').val());

                        if (peso > 1) {
                            for (i = 16; i <= edadGest; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                            data.push({
                                y: peso,
                            });
                            for (i = edadGest + 1; i <= 39; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                        } else {
                            for (i = 16; i <= 40; i++) {
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
        else
        {
            $('#graficoInfecoObsSegTrimPFEView').highcharts({
                chart: {
                    height: 250
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
                        fontWeight: 'normal'
                    }
                },
                plotOptions: {
                    series: {
                        enableMouseTracking: false,
                        pointInterval: 1
                    }
                },
                yAxis: {
                    title: {
                        text: 'Kilogramos'
                    },
                    tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
                },
                colors: ['#313131', '#313131', '#313131'],
                xAxis: {
                    categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
                },
                credits: {
                    enabled: false
                },
                series: [{
                    type: "line",
                    name: 'Pct 3',
                    dashStyle: "Dot",
                    marker: {
                        enabled: false
                    },
                    data: [110, 136, 167, 205, 248, 299, 359, 426, 503, 589, 685, 791, 908, 1034, 1169, 1313, 1465, 1622, 1783, 1946, 2110, 2271, 2427, 2576, 2714]
                }, {
                    type: "line",
                    name: 'Pct 10',
                    marker: {
                        enabled: false
                    },
                    data: [121, 150, 185, 227, 275, 331, 398, 471, 556, 652, 758, 876, 1004, 1145, 1294, 1453, 1621, 1794, 1973, 2154, 2335, 2513, 2686, 2851, 2985]
                }, {
                    type: "line",
                    name: 'Pct 90',
                    marker: {
                        enabled: false
                    },
                    data: [171, 212, 261, 319, 387, 467, 559, 665, 784, 918, 1068, 1234, 1416, 1613, 1824, 2049, 2285, 2530, 2781, 3036, 3291, 3543, 3786, 4019, 4234]
                }, {
                    type: "line",
                    name: 'Pct 97',
                    dashStyle: "Dot",
                    marker: {
                        enabled: false,
                    },
                    data: [183, 226, 279, 341, 414, 499, 598, 710, 838, 981, 1141, 1319, 1513, 1724, 1949, 2189, 2441, 2703, 2971, 3244, 3516, 3785, 4045, 4294, 4474]
                }, {
                    type: "line",
                    name: 'Peso',
                    dashStyle: "Dot",
                    marker: {
                        symbol: 'square'
                    },
                    lineWidth: 0,
                    data: (function() {
                        var data = [];
                        var edadGest = parseInt(localStorage.eg) - 1;
                        let peso = parseFloat($('#pfe').val());

                        if (peso > 1) {
                            for (i = 16; i <= edadGest; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                            data.push({
                                y: peso,
                            });
                            for (i = edadGest + 1; i <= 39; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                        } else {
                            for (i = 16; i <= 40; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                        }
                        return data;
                    }())
                }]
            });

            $('#graficoCCCAView').highcharts({
                chart: {
                    height: 250
                },
                title: {
                    text: 'Cc / Ca *',
                    x: -20
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
                    title: {
                        text: 'Valor cuociente'
                    },
                    tickPositions: [0.75, 0.82, 0.88, 0.95, 1, 1.07, 1.14, 1.2, 1.27, 1.33]
                },
                colors: ['#313131', '#313131', '#313131'],
                xAxis: {
                    categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
                },
                credits: {
                    enabled: false
                },
                series: [{
                    type: "line",
                    name: 'Pct. 3',
                    marker: {
                        enabled: false
                    },
                    data: [1.1, 1.09, 1.08, 1.07, 1.06, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1, 1, 0.99, 0.98, 0.97, 0.96, 0.95, 0.95, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.89]
                }, {
                    type: "line",
                    name: 'Pct. 97',
                    marker: {
                        enabled: false
                    },
                    data: [1.29, 1.28, 1.27, 1.26, 1.25, 1.24, 1.24, 1.23, 1.22, 1.21, 1.2, 1.19, 1.18, 1.18, 1.17, 1.17, 1.16, 1.15, 1.14, 1.13, 1.12, 1.11, 1.1, 1.09, 1.08, 1.08]
                }, {
                    type: "line",
                    name: 'CC/CA',
                    dashStyle: "Dot",
                    marker: {
                        symbol: 'square'
                    },
                    lineWidth: 0,
                    data: (function() {
                        var data = [];
                        var edadGest = parseInt(localStorage.eg) - 1;
    
                        if (ccca > 1 && edadGest > 16) {
                            for (i = 16; i <= edadGest; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                            data.push({
                                y: parseFloat($('#ccca').val()),
                            });
                            for (i = edadGest + 1; i <= 39; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                        }
                        else{
                            for (i = 16; i <= 39; i++) {
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
                    fontWeight: 'normal'
                }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [20, 60, 100, 140, 180, 220, 260, 300, 340, 400]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 3',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [40, 50, 60, 72, 84, 97, 107, 119, 131, 141, 151, 161, 171, 181, 191, 200, 209, 218, 227, 236, 245, 253, 261, 269, 277, 285, 292, 299, 307]
            }, {
                type: "line",
                name: 'Pct 97',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [68, 78, 88, 101, 112, 127, 141, 155, 168, 183, 196, 209, 223, 235, 248, 260, 271, 284, 295, 306, 318, 329, 339, 349, 359, 370, 380, 389, 399]
            }, {
                type: "line",
                name: 'CA',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var ca = $("#ca").val();
                    ca = ca.toString();
                    ca = ca.replace(",", ".");
                    ca = parseFloat(ca);

                    if (ca > 1) {
                        for (i = 12; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: ca,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 12; i <= 41; i++) {
                            data.push({
                                y: 0,
                            });
                        }
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
                    fontWeight: 'normal'
                }
            },
            yAxis: {
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [23, 25, 27, 28, 29, 29, 30, 30, 30, 30, 30, 30, 30, 29, 29, 29, 29, 29, 28, 28, 27, 26, 24, 23, 21]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [59, 62, 64, 66, 67, 68, 68, 68, 68, 68, 68, 69, 69, 69, 69, 70, 71, 72, 72, 72, 71, 70, 68, 66, 62]
            }, {
                type: "line",
                name: 'BVM',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (
                    function() {
                        var data = [];
                        var edadGest = parseInt(localStorage.eg) - 1;
                        let bvm = parseFloat($('#bvm').val());

                        if (bvm > 0) {
                            for (i = 16; i <= edadGest; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                            data.push({
                                y: bvm,
                            });
                            for (i = edadGest + 1; i <= 39; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                        } else {
                            for (i = 16; i <= 40; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                        }

                        return data;
                    }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#infecoObsSegTrim2').on('click', function() {
        $('#graficosTitle').html("Gráfica Determinación Ecográfica (Tardía) de la Edad Gestacional");
        $('#impEcoObsSegTrim2').remove();
        $('#infecoObsSegTrim1Clon').remove();
        $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impEcoObsSegTrim2'>Ver Impresion</button>");
        var stringGraficos = "<div class='container'><div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica Determinación Ecográfica (Tardía) de la Edad Gestacional</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><hr class='d-none'><div class='row'><div class='col'><div id='graficoCcView'></div></div><div class='col'><div id='graficoCerebeloView'></div></div></div><div class='row'><div class='col'><div id='graficoLfView'></div></div><div class='col'><div id='graficoLhView'></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:12px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Para la evaluación morfológica fetal, ceñirse a recomendaciones oficiales vigentes, para Chile: Guías Perinatales MINSAL 2015<br>Ver dirección web: http://web.minsal.cl/sites/default/files/files/GUIA%20PERINATAL_2015_%20PARA%20PUBLICAR.pdf<br>** Referencias: CC y LF Hadlock y col. 1984; LH Jeanty y col.<br>*** Diámetro cerebeloso transverso Hill LM. y col. Obstet Gynecol. 1990; 75(6) : 981-5<br>**** Referencia liq. amniótico (BVM), Magann EF. Sanderson M. Martin JN y col. Am J Obstet Gynecol 1982: 1581, 2000<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
        var fur = $("input[name='fum']").val();
        var fpp = $("input[name='fpp']").val();

        var comentarios = $("#comentarios-eco-dos-inf-dos").val();
        var paciente = $('#nombre-paciente').val() + " " + $('#apellido-paciente').val();
        paciente = paciente.toLowerCase();
        var idpaciente = $('#id-paciente').val();
        var fexamen = $("input[name='fee']").val();
        var ecografista = $('#ecografista option:selected').text();
        stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
        stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
        stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
        stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);

        if (typeof comentarios == 'undefined') {
            comentarios = "Fum operacional: " + fur + "<br>Fecha probable de parto: " + fpp + "<br>";
        } else {
            comentarios = $("#comentarios-eco-dos-inf-dos").val().replace(/\r\n|\r|\n/g, "<br />");
        }

        stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);

        $('#graficosBody').html(stringGraficos);
        $('#impEcoObsSegTrim2').on("click", function() {
            imprSelec("graficosBody");
        });
        $('#impEcoObsSegTrim1').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
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
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [30, 72, 114, 156, 198, 240, 282, 324, 366, 408]
            },
            legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight: 'normal'
                }
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 3',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [70, 80, 90, 100, 113, 126, 137, 149, 161, 172, 183, 194, 204, 214, 224, 233, 242, 250, 258, 267, 274, 280, 287, 293, 299, 303, 308, 311, 315]
            }, {
                type: "line",
                name: 'Pct. 97',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [90, 100, 111, 124, 136, 150, 165, 179, 193, 206, 219, 232, 243, 256, 268, 279, 290, 300, 310, 319, 328, 336, 343, 351, 358, 363, 368, 373, 377]
            }, {
                type: "line",
                name: 'CC',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;
                    let cc = parseInt(document.getElementById("cc").value);

                    if (cc > 1) {
                        for (i = 12; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: cc,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 12; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
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
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70]
            },
            legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight: 'normal'
                }
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: '-2DE',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 29, 30, 31, 33, 36, 37, 38, 40, 40, 40, 41, 42, 44]
            }, {
                type: "line",
                name: 'media',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [15, 16, 17, 18, 20, 20, 22, 23, 24, 26, 28, 30, 31, 33, 34, 37, 39, 41, 43, 46, 47, 49, 51, 51, 52, 52]
            }, {
                type: "line",
                name: '+2DE',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [18, 18, 19, 20, 22, 23, 25, 26, 27, 30, 32, 34, 34, 37, 38, 41, 43, 46, 48, 53, 56, 58, 60, 62, 62, 62]
            }, {
                type: "line",
                name: 'Cerebelo',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;
                    let cc = parseInt(document.getElementById("cerebelo").value);

                    if (cc > 1) {
                        for (i = 15; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: cc,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 15; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
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
                    fontWeight: 'normal'
                }
            },
            yAxis: {
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 3',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [6, 9, 12, 14, 17, 20, 22, 25, 27, 30, 32, 35, 37, 40, 42, 45, 47, 49, 52, 54, 56, 58, 59, 61, 62, 64, 65, 66, 67]
            }, {
                type: "line",
                name: 'Pct. 97',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [12, 15, 18, 21, 24, 28, 31, 34, 38, 41, 44, 47, 50, 53, 55, 57, 60, 62, 65, 67, 70, 71, 73, 75, 77, 79, 80, 81, 82]
            }, {
                type: "line",
                name: 'LF',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;
                    let lf = parseInt(document.getElementById("lf").value);

                    if (lf > 1) {
                        for (i = 12; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: lf,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 12; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
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
                    fontWeight: 'normal'
                }
            },
            yAxis: {
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [5, 10, 20, 30, 40, 50, 60, 70, 80]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [4.8, 7.6, 10.3, 13.1, 15.8, 18.5, 21.2, 23.8, 26.3, 28.8, 31.2, 33.5, 35.7, 37.9, 39.9, 41.9, 43.7, 45.5, 47.2, 48.9, 50.4, 52.1, 53.4, 54.8, 56.2, 57.6, 59.8, 60.4, 61.9]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [12.3, 15.1, 17.9, 20.7, 23.5, 26.3, 29.1, 31.6, 34.2, 36.7, 39.2, 41.6, 43.9, 46.1, 48.1, 50.1, 52.1, 53.9, 55.6, 57.3, 58.9, 60.5, 62.1, 63.5, 64.9, 66.4, 67.8, 69.3, 70.8]
            }, {
                type: "line",
                name: 'Humero',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;
                    let lh = parseInt(document.getElementById("lh").value);

                    if (lh > 1) {
                        for (i = 12; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: lh,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 12; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });
    $('#graficoBVM').on('click', function() {
        $('#graficosTitle').html("Gráfica BVM");
        $('#graficosBody').html("<div id='graficoBVMView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
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
                    fontWeight: 'normal'
                }
            },
            yAxis: {
                title: {
                    text: 'Milimetros (mm)'
                },
                tickPositions: [5, 16, 27, 38, 49, 60, 71, 82, 93, 104]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [23, 25, 27, 28, 29, 29, 30, 30, 30, 30, 30, 30, 30, 29, 29, 29, 29, 29, 28, 28, 27, 26, 24, 23, 21]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [59, 62, 64, 66, 67, 68, 68, 68, 68, 68, 68, 69, 69, 69, 69, 70, 71, 72, 72, 72, 71, 70, 68, 66, 62]
            }, {
                type: "line",
                name: 'BVM',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (
                    function() {
                        var data = [];
                        var edadGest = parseInt(localStorage.eg) - 1;
                        let Valorbvm = parseInt(document.getElementById("bvm").value);

                        if (Valorbvm > 1) {
                            for (i = 16; i <= edadGest; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                            data.push({
                                y: Valorbvm,
                            });
                            for (i = edadGest + 1; i <= 39; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                        } else {
                            for (i = 16; i <= 39; i++) {
                                data.push({
                                    y: 0,
                                });
                            }
                        }
                        return data;
                    }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    //ecografía doppler
    $("#boton\\.eco\\.doppler\\.nuevo").on("click", function() {
        $("#aud").val(""),
        $("#aui").val(""),
        $("#auprom").val(""),
        $("#ipau").val(""),
        $("#ipacm").val(""),
        $("#ccp").val(""),
        $("#dv").val(""),
        $("#psmACM").val("")
    });

    $("#boton\\.eco\\.doppler\\.guardar").on("click", function() {
        let examen = {
            examen: 1,
            fecha: $("#input\\.paciente\\.fe\\.doppler").val(),
            eg: $("#eco\\.doppler\\.eg").val(),
            aud: $("#aud").val(),
            audPctTxt: $("#audPctTxt").val(),
            aui: $("#aui").val(),
            auiPctTxt: $("#auiPctTxt").val(),
            auprom: $("#auprom").val(),
            auPctTxt: $("#auPctTxt").val(),
            ipau: $("#ipau").val(),
            ipauPctTxt: $("#ipauPctTxt").val(),
            ipacm: $("#ipacm").val(),
            ipacmPctTxt: $("#ipacmPctTxt").val(),
            ccp: $("#ccp").val(),
            ccpPctTxt: $("#ccpPctTxt").val(),
            dv: $("#dv").val(),
            dvPctTxt: $("#dvPctTxt").val(),
            psmACM: $("#psmACM").val(),
            liquido: $("#liqAmnioDoppler").val(),
            bvm: $("#bvmDoppler").val(),
            motivo: $("#motivo-doppler").val(),
            antecedentes_obstetricos: $("#antecedentes-doppler").val(),
            presentacion: $("#presentacion-doppler").val(),
            motilidad_fetal: $("#motilidad-doppler").val(),
            placenta_ubic: $("#ubicacion-doppler").val(),
            comentarios: $("#comentarios-doppler").val()
        }

        let data = {
            id: $("#id-paciente").val(),
            tipo: 3,
            data: JSON.stringify(examen)
        }

        $.post(serverURL + "examen/set/", data).done(function(response) {
            $("#table\\.ecografia\\.doppler").empty();
            if (Object.keys(response).length > 0) {
                $.each(response.data, function(i, val) {
                    let fila = '<tr><th scope="row" data-id="' + val.eg_examen + '" data-tipo="3">' + val.n_examen + '</th><td>' + val.fecha_examen + '</td><td>' + val.eg_examen + '</td><td>' + val.uterinas_pct + '</td><td>' + val.arteria_pct_umbilical + '</td><td>' + val.arteria_pct_media + '</td><td>' + val.ccp_pct + '</td>';
                    $("#table\\.ecografia\\.doppler").append(fila);
                });
                $("#table\\.ecografia\\.doppler tr").on('click', function() {
                    activateTr(this);
                });
            }
        });
    });

    $("#boton\\.eco\\.doppler\\.eliminar").on("click", function() {
        $('#popupTitle').html("Información");
        $('#popupBody').html("<p><strong>¿Está seguro de eliminar el exámen seleccionado?</strong></p><div class='btn-group btn-group-toggle' data-toggle='buttons'><label class='btn btn-secondary active' id='infEcoObsSegTrim2verNO' aria-pressed='true'><input type='radio' value='0' checked=''> NO</label><label class='btn btn-secondary' id='infEcoObsSegTrim2verSi' aria-pressed='true'><input type='radio' value='1'> SI</label></div>");
        $('#impDoppler1').remove();
        $('#infecoObsSegTrim1Clon').remove();
        $('#popupGenerico').modal('show');
        $("#infEcoObsSegTrim2verNO").on("click", function() {
            $('#popupGenerico').modal('hide');
        });
        $("#infEcoObsSegTrim2verSi").on("click", function() {
            $('#popupGenerico').modal('hide');
            var filas = $("#table\\.ecografia\\.doppler").children();

            $.each(filas, function(i, val) {
                if ($(val).hasClass('table-active') == true) {
                    let examen = {
                        eg: $(val).children().data("id")
                    }

                    let data = {
                        id: $("#id-paciente").val(),
                        tipo: 3,
                        data: JSON.stringify(examen)
                    }

                    $.post(serverURL + "examen/del/", data).done(function(response) {
                        $("#table\\.ecografia\\.doppler").empty();
                        if (Object.keys(response).length > 0) {
                            $.each(response.data, function(i, val) {
                                let fila = '<tr><th scope="row" data-id="' + val.eg_examen + '" data-tipo="3">' + val.n_examen + '</th><td>' + val.fecha_examen + '</td><td>' + val.eg_examen + '</td><td>' + val.pfe_examen + '</td><td>' + val.pctpeso_examen + '</td><td>' + val.ccca_examen + '</td><td>' + val.pctca_examen + '</td><td>' + val.pctbvm_examen + '<td>';
                                $("#table\\.ecografia\\.doppler").append(fila);
                            });
                            $("#table\\.ecografia\\.doppler tr").on('click', function() {
                                activateTr(this);
                            });
                        }
                    });

                }
            });
        });
    });

    $('#bvmDoppler').on('change', function() {
        bvmDoppler();
    });

    $('#modalPreInfEcoDoppler').on('click', function() {
        crearInformeDoppler();
    });

    $('#graficoAud').on('click', function() {
        $('#graficosTitle').html("Gráfico Arteria Uterina Derecha");
        $('#graficosBody').html("<div id='graficoArtUtDerView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoArtUtDerView').highcharts({
            title: {
                text: 'IP Arterias Uterinas Derecha',
                x: -20,
                style: {
                    fontSize: '10px'
                }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [1.23, 1.18, 1.11, 1.05, 0.99, 0.94, 0.89, 0.85, 0.81, 0.78, 0.74, 0.71, 0.69, 0.66, 0.64, 0.62, 0.6, 0.58, 0.56, 0.55, 0.54, 0.52, 0.51, 0.51, 0.51, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [2.84, 2.71, 2.53, 2.38, 2.24, 2.11, 1.99, 1.88, 1.79, 1.71, 1.61, 1.54, 1.47, 1.41, 1.35, 1.3, 1.25, 1.21, 1.17, 1.13, 1.11, 1.06, 1.04, 1.01, 0.99, 0.97, 0.95, 0.94, 0.92, 0.91, 0.91]
            }, {
                type: "line",
                name: 'Arteria Promedio',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var aud = $("#aud").val();
                    aud = aud.toString();
                    aud = aud.replace(",", ".");
                    aud = parseFloat(aud);

                    if (aud > 1) {
                        for (i = 10; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: aud,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 10; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#graficoAui').on('click', function() {
        $('#graficosTitle').html("Gráfico Arteria Uterina Izquierda");
        $('#graficosBody').html("<div id='graficoArtUtIzqView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoArtUtIzqView').highcharts({
            title: {
                text: 'IP Arterias Uterinas Izquierda',
                x: -20,
                style: {
                    fontSize: '10px'
                }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [1.23, 1.18, 1.11, 1.05, 0.99, 0.94, 0.89, 0.85, 0.81, 0.78, 0.74, 0.71, 0.69, 0.66, 0.64, 0.62, 0.6, 0.58, 0.56, 0.55, 0.54, 0.52, 0.51, 0.51, 0.51, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [2.84, 2.71, 2.53, 2.38, 2.24, 2.11, 1.99, 1.88, 1.79, 1.71, 1.61, 1.54, 1.47, 1.41, 1.35, 1.3, 1.25, 1.21, 1.17, 1.13, 1.11, 1.06, 1.04, 1.01, 0.99, 0.97, 0.95, 0.94, 0.92, 0.91, 0.91]
            }, {
                type: "line",
                name: 'Arteria Promedio',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var aui = $("#aui").val();
                    aui = aui.toString();
                    aui = aui.replace(",", ".");
                    aui = parseFloat(aui);

                    if (aui > 1) {
                        for (i = 10; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: aui,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 10; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#graficoAu').on('click', function() {
        $('#graficosTitle').html("Gráfico Promedio Arteria Uterinas");
        $('#graficosBody').html("<div id='graficoArtUtView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoArtUtView').highcharts({
            title: {
                text: 'IP Promedio Arteria Uterinas',
                x: -20,
                style: {
                    fontSize: '10px'
                }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [1.23, 1.18, 1.11, 1.05, 0.99, 0.94, 0.89, 0.85, 0.81, 0.78, 0.74, 0.71, 0.69, 0.66, 0.64, 0.62, 0.6, 0.58, 0.56, 0.55, 0.54, 0.52, 0.51, 0.51, 0.51, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [2.84, 2.71, 2.53, 2.38, 2.24, 2.11, 1.99, 1.88, 1.79, 1.71, 1.61, 1.54, 1.47, 1.41, 1.35, 1.3, 1.25, 1.21, 1.17, 1.13, 1.11, 1.06, 1.04, 1.01, 0.99, 0.97, 0.95, 0.94, 0.92, 0.91, 0.91]
            }, {
                type: "line",
                name: 'Arteria Promedio',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var auprom = $("#auprom").val();
                    auprom = auprom.toString();
                    auprom = auprom.replace(",", ".");
                    auprom = parseFloat(auprom);

                    if (auprom > 1) {
                        for (i = 10; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: auprom,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 10; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#graficoIpau').on('click', function() {
        $('#graficosTitle').html("Gráfico IP Arteria Umbilical");
        $('#graficosBody').html("<div id='graficoIpauView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoIpauView').highcharts({
            title: {
                text: 'IP Arteria Umbilical **',
                x: -20, //center
                style: {
                    fontSize: '10px'
                }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [0.97, 0.95, 0.94, 0.92, 0.9, 0.89, 0.87, 0.85, 0.82, 0.8, 0.78, 0.75, 0.73, 0.7, 0.67, 0.65, 0.62, 0.58, 0.55, 0.52, 0.49]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [1.6, 1.56, 1.53, 1.5, 1.46, 1.43, 1.4, 1.37, 1.35, 1.32, 1.29, 1.27, 1.25, 1.22, 1.2, 1.18, 1.16, 1.14, 1.13, 1.11, 1.09]
            }, {
                type: "line",
                name: 'Arteria',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var ipau = $("#ipau").val();
                    ipau = ipau.toString();
                    ipau = ipau.replace(",", ".");
                    ipau = parseFloat(ipau);

                    if (ipau > 0) {
                        for (i = 20; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: ipau,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 20; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#graficoIpacm').on('click', function() {
        $('#graficosTitle').html("Gráfico IP Arteria C. Media");
        $('#graficosBody').html("<div id='graficoIpacmView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoIpacmView').highcharts({
            title: {
                text: 'IP Arteria Cerebral Media **',
                x: -20,
                style: {
                    fontSize: '10px'
                }
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [1.24, 1.29, 1.34, 1.37, 1.4, 1.43, 1.44, 1.45, 1.45, 1.44, 1.43, 1.41, 1.38, 1.34, 1.3, 1.25, 1.19, 1.13, 1.05, 0.98, 0.89]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [1.98, 2.12, 2.25, 2.36, 2.45, 2.53, 2.59, 2.63, 2.66, 2.67, 2.67, 2.65, 2.62, 2.56, 2.5, 2.41, 2.31, 2.2, 2.07, 1.92, 1.76]
            }, {
                type: "line",
                name: 'Arteria',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var ipacm = $("#ipacm").val();
                    ipacm = ipacm.toString();
                    ipacm = ipacm.replace(",", ".");
                    ipacm = parseFloat(ipacm);

                    if (ipacm > 0) {
                        for (i = 20; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: ipacm,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 20; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#graficoCcp').on('click', function() {
        $('#graficosTitle').html("Gráfico Cuociente Cerebro Placentario");
        $('#graficosBody').html("<div id='graficoCcpView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoCcpView').highcharts({
            title: {
                text: 'IP de CCP (Indice ACM / AU) **',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [0.78, 0.87, 0.95, 1.02, 1.09, 1.15, 1.2, 1.24, 1.28, 1.31, 1.33, 1.35, 1.36, 1.36, 1.36, 1.34, 1.32, 1.3, 1.26, 1.22, 1.18]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [1.68, 1.88, 2.06, 2.22, 2.36, 2.49, 2.6, 2.7, 2.78, 2.84, 2.89, 2.92, 2.93, 2.93, 2.91, 2.87, 2.82, 2.75, 2.67, 2.57, 2.45]
            }, {
                type: "line",
                name: 'Cuociente',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var ccp = $("#ccp").val();
                    ccp = ccp.toString();
                    ccp = ccp.replace(",", ".");
                    ccp = parseFloat(ccp);

                    if (ccp > 0) {
                        for (i = 20; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: ccp,
                        });
                        for (i = edadGest + 1; i <= 38; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 20; i <= 38; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#graficoDv').on('click', function() {
        $('#graficosTitle').html("Gráfico Ductus Venoso");
        $('#graficosBody').html("<div id='graficoDvView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoDvView').highcharts({
            title: {
                text: 'Ductus Venoso',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [0.32, 0.32, 0.32, 0.32, 0.32, 0.32, 0.31, 0.31, 0.31, 0.3, 0.29, 0.28, 0.28, 0.27, 0.26, 0.25, 0.24, 0.23, 0.22, 0.21, 0.2]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [0.83, 0.83, 0.83, 0.83, 0.83, 0.83, 0.82, 0.82, 0.81, 0.81, 0.8, 0.79, 0.78, 0.77, 0.76, 0.75, 0.74, 0.73, 0.72, 0.71, 0.7]
            }, {
                type: "line",
                name: 'Ductus Venoso',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var dv = $("#dv").val();
                    dv = dv.toString();
                    dv = dv.replace(",", ".");
                    dv = parseFloat(dv);

                    if (dv > 0) {
                        for (i = 20; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: dv,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 20; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#graficoCCCA').on('click', function() {
        $('#graficosTitle').html("Gráfico Relación Cráneo Abdómen (CC/CA)");
        $('#graficosBody').html("<div id='graficoCCCAView'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoCCCAView').highcharts({
            title: {
                text: 'Cc / Ca *',
                x: -20
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
                title: {
                    text: 'Valor cuociente'
                },
                tickPositions: [0.75, 0.82, 0.88, 0.95, 1, 1.07, 1.14, 1.2, 1.27, 1.33]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 3',
                marker: {
                    enabled: false
                },
                data: [1.1, 1.09, 1.08, 1.07, 1.06, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1, 1, 0.99, 0.98, 0.97, 0.96, 0.95, 0.95, 0.94, 0.93, 0.92, 0.91, 0.9, 0.89, 0.89]
            }, {
                type: "line",
                name: 'Pct. 97',
                marker: {
                    enabled: false
                },
                data: [1.29, 1.28, 1.27, 1.26, 1.25, 1.24, 1.24, 1.23, 1.22, 1.21, 1.2, 1.19, 1.18, 1.18, 1.17, 1.17, 1.16, 1.15, 1.14, 1.13, 1.12, 1.11, 1.1, 1.09, 1.08, 1.08]
            }, {
                type: "line",
                name: 'CC/CA',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 16; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseFloat($('#ccca').val()),
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

    $("#auprom").on("change", function(){
        var comentarios = "";
        if ($('#auprom').val() > 0) {
            comentarios = 'F. Doppler materno (promedio uterinas), IP percentil ' + $('#auPctTxt').val() + '\r\n';
        }
        if ($('#ipau').val() > 0) {
            comentarios = comentarios + 'F. Doppler fetal, IP de CCP percentil ' + $('#ccpPctTxt').val() + '\r\n';
        }
        $('#comentarios-doppler').val(comentarios);
    });

    $("#ipau").on("change", function(){
        var comentarios = "";
        if ($('#auprom').val() > 0) {
            comentarios = 'F. Doppler materno (promedio uterinas), IP percentil ' + $('#auPctTxt').val() + '\r\n';
        }
        if ($('#ipau').val() > 0) {
            comentarios = comentarios + 'F. Doppler fetal, IP de CCP percentil ' + $('#ccpPctTxt').val() + '\r\n';
        }
        $('#comentarios-doppler').val(comentarios);
    });
    
    $('#infDoppler1').on('click', function() {
        $('#graficosTitle').html("Gráfica para evaluación de la flujometría doppler materno fetal básica");
        $('#impDoppler1').remove();
        $('#infecoObsSegTrim1Clon').remove();
        $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler1'>Guardar y Ver Impresion</button>");
        var stringGraficos = "<div class='container'><div style='width:100px;text-align:center;'></div></div><h4 class='text-center d-none'>Gráfica para evaluación de la flujometría doppler materno fetal básica</h4><span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none mt-2'></span><div class='row d-none mt-2'> <div class='col-5'><p style='font-size:10px;'><strong>Paciente Sra. (Srta.): </strong>:PACIENTE </p></div><div class='col-3'><p style='font-size:10px;'><strong>RUT: </strong>:IDPACIENTE </p></div><div class='col-4'><p style='font-size:10px;'><strong>Fecha de Exámen: </strong>:FEXAMEN </p></div></div><div class='row'><div class='col'><div id='graficoIpArtUtView'></div></div><div class='col'><div id='graficoIpArtUmbView'></div></div></div><div class='row'><div class='col'><div id='graficoIpArtCMView'></div></div><div class='col'><div id='graficoIpCCPView'></div></div></div><div class='row' id='lineclear'><div class='col'><p class='d-none' style='font-size:12px;'><strong style='color:#045dab;'>COMENTARIOS Y OBSERVACIONES</strong><br>:COMENTARIOS</p><p class='d-none text-right top40' style='margin-right:100px; font-size: 12px;'>Ecografista Dr(a): <strong>:ECOGRAFISTA</strong> </p><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Referencia para Doppler promedio de arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32<br>** Referencia para Doppler de arteria umbilical, C Media y CCP Baschat et al Ultrasound Obstet. Gynecol 2003; 21 124 - 127<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>";
        var comentarios = $("#comentarios-doppler").val();
        var paciente = $('#nombre-paciente').val() + " " + $('#apellido-paciente').val();
        paciente = paciente.toLowerCase();
        var idpaciente = $('#id-paciente').val();
        var fexamen = $("input[name='fee']").val();
        var ecografista = $('#ecografista option:selected').text();
        stringGraficos = stringGraficos.replace(":ECOGRAFISTA", ecografista);
        stringGraficos = stringGraficos.replace(":PACIENTE", paciente);
        stringGraficos = stringGraficos.replace(":IDPACIENTE", idpaciente);
        stringGraficos = stringGraficos.replace(":FEXAMEN", fexamen);

        if (typeof comentarios == 'undefined') {
            if ($('#auprom').val() > 0) {
                comentarios = 'F. Doppler materno (promedio uterinas), IP percentil ' + $('#auPctTxt').val() + '<br />';
            }
            if ($('#ipau').val() > 0) {
                comentarios = comentarios + 'F. Doppler fetal, IP de CCP percentil ' + $('#ccpPctTxt').val() + '<br />';
            }
        } else {
            comentarios = $("#comentarios-doppler").val().replace(/\r\n|\r|\n/g, "<br />");
        }

        stringGraficos = stringGraficos.replace(":COMENTARIOS", comentarios);

        $('#graficosBody').html(stringGraficos);
        $('#impDoppler1').on("click", function() {
            imprSelec("graficosBody");
        });
        $('#impEcoObsSegTrim2').remove();
        $('#impEcoObsSegTrim1').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        //$('#graficoIpArtUtView').highcharts({
        graficoUno = Highcharts.chart('graficoIpArtUtView', {
            chart: {
                height: 250
            },
            title: {
                text: 'IP Promedio Arteria Uterinas *',
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
                    fontWeight: 'normal'
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [1.23, 1.18, 1.11, 1.05, 0.99, 0.94, 0.89, 0.85, 0.81, 0.78, 0.74, 0.71, 0.69, 0.66, 0.64, 0.62, 0.6, 0.58, 0.56, 0.55, 0.54, 0.52, 0.51, 0.51, 0.51, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [2.84, 2.71, 2.53, 2.38, 2.24, 2.11, 1.99, 1.88, 1.79, 1.71, 1.61, 1.54, 1.47, 1.41, 1.35, 1.3, 1.25, 1.21, 1.17, 1.13, 1.11, 1.06, 1.04, 1.01, 0.99, 0.97, 0.95, 0.94, 0.92, 0.91, 0.91]
            }, {
                type: "line",
                name: 'Promedio Uterinas',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var auprom = $("#auprom").val();
                    auprom = auprom.toString();
                    auprom = auprom.replace(",", ".");
                    auprom = parseFloat(auprom);

                    if (auprom > 0) {
                        for (i = 10; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: auprom,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 10; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });

        //$('#graficoIpArtUmbView').highcharts({
        graficoDos = Highcharts.chart('graficoIpArtUmbView', {
            chart: {
                height: 250
            },
            title: {
                text: 'IP Arteria Umbilical **',
                x: -20, //center
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
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight: 'normal'
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [0.97, 0.95, 0.94, 0.92, 0.9, 0.89, 0.87, 0.85, 0.82, 0.8, 0.78, 0.75, 0.73, 0.7, 0.67, 0.65, 0.62, 0.58, 0.55, 0.52, 0.49]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [1.6, 1.56, 1.53, 1.5, 1.46, 1.43, 1.4, 1.37, 1.35, 1.32, 1.29, 1.27, 1.25, 1.22, 1.2, 1.18, 1.16, 1.14, 1.13, 1.11, 1.09]
            }, {
                type: "line",
                name: 'Arteria Umbilical',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var ipau = $("#ipau").val();
                    ipau = ipau.toString();
                    ipau = ipau.replace(",", ".");
                    ipau = parseFloat(ipau);

                    if (ipau > 0) {
                        for (i = 20; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: ipau,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 20; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        //$('#graficoIpArtCMView').highcharts({
        graficoTres = Highcharts.chart('graficoIpArtCMView', {
            chart: {
                height: 250
            },
            title: {
                text: 'IP Arteria Cerebral Media **',
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
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight: 'normal'
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [1.24, 1.29, 1.34, 1.37, 1.4, 1.43, 1.44, 1.45, 1.45, 1.44, 1.43, 1.41, 1.38, 1.34, 1.3, 1.25, 1.19, 1.13, 1.05, 0.98, 0.89]
            }, {
                type: "line",
                name: 'Pct. 95',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [1.98, 2.12, 2.25, 2.36, 2.45, 2.53, 2.59, 2.63, 2.66, 2.67, 2.67, 2.65, 2.62, 2.56, 2.5, 2.41, 2.31, 2.2, 2.07, 1.92, 1.76]
            }, {
                type: "line",
                name: 'Arteria C. Media',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var ipacm = $("#ipacm").val();
                    ipacm = ipacm.toString();
                    ipacm = ipacm.replace(",", ".");
                    ipacm = parseFloat(ipacm);

                    if (ipacm > 1) {
                        for (i = 20; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: ipacm,
                        });
                        for (i = edadGest + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 20; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        //$('#graficoIpCCPView').highcharts({
        graficoCuatro = Highcharts.chart('graficoIpCCPView', {
            chart: {
                height: 250
            },
            title: {
                text: 'IP de CCP (Indice ACM / AU) **',
                x: -20, //center
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
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
            },
            legend: {
                itemStyle: {
                    fontSize: '10px',
                    fontWeight: 'normal'
                }
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [0.78, 0.87, 0.95, 1.02, 1.09, 1.15, 1.2, 1.24, 1.28, 1.31, 1.33, 1.35, 1.36, 1.36, 1.36, 1.34, 1.32, 1.3, 1.26, 1.22, 1.18]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [1.68, 1.88, 2.06, 2.22, 2.36, 2.49, 2.6, 2.7, 2.78, 2.84, 2.89, 2.92, 2.93, 2.93, 2.91, 2.87, 2.82, 2.75, 2.67, 2.57, 2.45]
            }, {
                type: "line",
                name: 'Cuociente CP.',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    var ccp = $("#ccp").val();
                    ccp = ccp.toString();
                    ccp = ccp.replace(",", ".");
                    ccp = parseFloat(ccp);

                    if (ccp > 1) {
                        for (i = 20; i <= edadGest; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: ccp,
                        });
                        for (i = edadGest + 1; i <= 38; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    } else {
                        for (i = 20; i <= 38; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
    });

    $('#infDoppler2').on('click', function() {
        $('#graficosTitle').html("Gráfica crecimiento intrauterino, Peso Fetal Estimado + Flujometría Doppler - Fetal");
        $('#impDoppler2').remove();
        $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler2'>Ver Impresion</button>");
        $('#graficosBody').html("<span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none'></span><h4 class='text-center d-none mt-2'>Gráfica crecimiento intrauterino, Peso Fetal Estimado + Flujometría Doppler - Fetal</h4><hr class='d-none'><div class='row'><div class='col'><div id='graficoInfPFEView'></div></div><div class='col'><div id='graficoInfIpArtUmbView'></div></div></div><div class='row'><div class='col'><div id='graficoInfIpArtCMView'></div></div><div class='col'><div id='graficoInfIpCCPView'></div></div></div><div class='row' id='lineclear'><div class='col'><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Referencia evaluación de crecimiento fetal según gráfica de Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad entre pct. 10 a 90)<br>** Referencia para Doppler Fetal: Baschat AA, Gembruch U. the cerebroplacental Doppler ratio revisited. Ultrasound Obstet. Ginecol. 2003; 21: 124 - 127<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>");
        $('#impDoppler2').on("click", function() {
            imprSelec("graficosBody");
        });
        $('#impEcoObsSegTrim2').remove();
        $('#impEcoObsSegTrim1').remove();
        $('#impDoppler3').remove();
        $('#impDoppler1').remove();
        $('#graficoInfPFEView').highcharts({
            chart: {
                height: 250
            },
            title: {
                text: 'Peso Fetal Estimado *',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false,
                    pointInterval: 1
                }
            },
            yAxis: {
                title: {
                    text: 'Kilogramos'
                },
                tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct 3',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [110, 136, 167, 205, 248, 299, 359, 426, 503, 589, 685, 791, 908, 1034, 1169, 1313, 1465, 1622, 1783, 1946, 2110, 2271, 2427, 2576, 2714]
            }, {
                type: "line",
                name: 'Pct 10',
                marker: {
                    enabled: false
                },
                data: [121, 150, 185, 227, 275, 331, 398, 471, 556, 652, 758, 876, 1004, 1145, 1294, 1453, 1621, 1794, 1973, 2154, 2335, 2513, 2686, 2851, 2985]
            }, {
                type: "line",
                name: 'Pct 90',
                marker: {
                    enabled: false
                },
                data: [171, 212, 261, 319, 387, 467, 559, 665, 784, 918, 1068, 1234, 1416, 1613, 1824, 2049, 2285, 2530, 2781, 3036, 3291, 3543, 3786, 4019, 4234]
            }, {
                type: "line",
                name: 'Pct 97',
                dashStyle: "Dot",
                marker: {
                    enabled: false,
                },
                data: [183, 226, 279, 341, 414, 499, 598, 710, 838, 981, 1141, 1319, 1513, 1724, 1949, 2189, 2441, 2703, 2971, 3244, 3516, 3785, 4045, 4294, 4474]
            }, {
                type: "line",
                name: 'Peso',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

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
        $('#graficoInfIpArtUmbView').highcharts({
            chart: {
                height: 250
            },
            title: {
                text: 'IP Arteria Umbilical **',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [0.97, 0.95, 0.94, 0.92, 0.9, 0.89, 0.87, 0.85, 0.82, 0.8, 0.78, 0.75, 0.73, 0.7, 0.67, 0.65, 0.62, 0.58, 0.55, 0.52, 0.49]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [1.6, 1.56, 1.53, 1.5, 1.46, 1.43, 1.4, 1.37, 1.35, 1.32, 1.29, 1.27, 1.25, 1.22, 1.2, 1.18, 1.16, 1.14, 1.13, 1.11, 1.09]
            }, {
                type: "line",
                name: 'Arteria',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 20; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseFloat($('#ipau').val()),
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
        $('#graficoInfIpArtCMView').highcharts({
            chart: {
                height: 250
            },
            title: {
                text: 'IP Arteria Cerebral Media **',
                x: -20
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [1.24, 1.29, 1.34, 1.37, 1.4, 1.43, 1.44, 1.45, 1.45, 1.44, 1.43, 1.41, 1.38, 1.34, 1.3, 1.25, 1.19, 1.13, 1.05, 0.98, 0.89]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [1.98, 2.12, 2.25, 2.36, 2.45, 2.53, 2.59, 2.63, 2.66, 2.67, 2.67, 2.65, 2.62, 2.56, 2.5, 2.41, 2.31, 2.2, 2.07, 1.92, 1.76]
            }, {
                type: "line",
                name: 'Arteria',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 20; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseFloat($('#ipacm').val()),
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
        $('#graficoInfIpCCPView').highcharts({
            chart: {
                height: 250
            },
            title: {
                text: 'IP de CCP (Indice ACM / AU) **',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [0.78, 0.87, 0.95, 1.02, 1.09, 1.15, 1.2, 1.24, 1.28, 1.31, 1.33, 1.35, 1.36, 1.36, 1.36, 1.34, 1.32, 1.3, 1.26, 1.22, 1.18]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [1.68, 1.88, 2.06, 2.22, 2.36, 2.49, 2.6, 2.7, 2.78, 2.84, 2.89, 2.92, 2.93, 2.93, 2.91, 2.87, 2.82, 2.75, 2.67, 2.57, 2.45]
            }, {
                type: "line",
                name: 'Cuociente',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 20; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseFloat($('#ccp').val()),
                    });
                    for (i = edadGest + 1; i <= 38; i++) {
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

    $('#infDoppler3').on('click', function() {
        $('#graficosTitle').html("Gráfica crecimiento intrauterino, Peso Estimado + Flujometría Dopler Materno Fetal");
        $('#impDoppler3').remove();
        $('#graficosFooter').prepend("<button type='button' class='btn btn-outline-info' id='impDoppler3'>Ver Impresion</button>")
        $('#graficosBody').html("<span style='border-top: 1px solid #000;width: 100% !important;display: block;border-bottom: 2px solid #000;padding-top: 2px;' class='d-none'></span><h4 class='text-center d-none mt-2'>Gráfica crecimiento intrauterino, Peso Estimado + Flujometría Dopler Materno Fetal</h4><hr class='d-none'><div class='row'><div class='col'><div id='graficoInfDoplerPFEView'></div></div><div class='col'><div id='graficoInfDoplerIpArtUmbView'></div></div></div><div class='row'><div class='col'><div id='graficoInfDoplerArtUtView'></div></div><div class='col'><div id='graficoInfDoplerIpCCPView'></div></div></div><div class='row' id='lineclear'><div class='col'><span style='border-top: 1px solid #000;width: 100% !important;display: block;' class='d-none'></span><p class='d-none' style='margin-bottom:0;font-size:11px;'>Fecha Informe: :DATEINFORME</p><span class='d-none' style='border-top: 1px solid #000;width: 100% !important;display: block;'></span><p class='pie-pagina d-none'>* Referencia evaluación de crecimiento fetal según gráfica de Hadlock y col. Radiology 181:129 - 133. 1991 (Normalidad entre pct. 10 a 90)<br>** Referencia para Doppler Fetal: Baschat AA, Gembruch U. the cerebroplacental Doppler ratio revisited. Ultrasound Obstet. Ginecol. 2003; 21: 124 - 127<br>*** Referencia para arterias uterinas: Gómes O., Figueras F., Fernandez S., Bennasar M, Martínez JM., Puerto B., Gratacos E., UOG 2008; 32: 128-32<br>Herramienta informática diseñada por Dr. Rudecindo Lagos S. Médico gineco-obstetra ultrasonografista  y Cristopher Castro G. Ingenieria Civil.<br><strong>Las gráficas de este software tienen por objeto favorecer el análisis preliminar de los datos obtenidos en el exámen ecográfico, la interpretación clínica de los mismos, es responsabilidad exclusiva de quien realiza y certifica este documento.</strong></p></div></div>");
        $('#impDoppler3').on("click", function() {
            imprSelec("graficosBody");
        });
        $('#impEcoObsSegTrim2').remove();
        $('#impEcoObsSegTrim1').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
        $('#graficoInfDoplerPFEView').highcharts({
            chart: {
                height: 250
            },
            title: {
                text: 'Peso Fetal Estimado *',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false,
                    pointInterval: 1
                }
            },
            yAxis: {
                title: {
                    text: 'Kilogramos'
                },
                tickPositions: [100, 560, 1020, 1480, 1940, 2400, 2860, 3320, 3780, 4340, 4900]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct 3',
                dashStyle: "Dot",
                marker: {
                    enabled: false
                },
                data: [110, 136, 167, 205, 248, 299, 359, 426, 503, 589, 685, 791, 908, 1034, 1169, 1313, 1465, 1622, 1783, 1946, 2110, 2271, 2427, 2576, 2714]
            }, {
                type: "line",
                name: 'Pct 10',
                marker: {
                    enabled: false
                },
                data: [121, 150, 185, 227, 275, 331, 398, 471, 556, 652, 758, 876, 1004, 1145, 1294, 1453, 1621, 1794, 1973, 2154, 2335, 2513, 2686, 2851, 2985]
            }, {
                type: "line",
                name: 'Pct 90',
                marker: {
                    enabled: false
                },
                data: [171, 212, 261, 319, 387, 467, 559, 665, 784, 918, 1068, 1234, 1416, 1613, 1824, 2049, 2285, 2530, 2781, 3036, 3291, 3543, 3786, 4019, 4234]
            }, {
                type: "line",
                name: 'Pct 97',
                dashStyle: "Dot",
                marker: {
                    enabled: false,
                },
                data: [183, 226, 279, 341, 414, 499, 598, 710, 838, 981, 1141, 1319, 1513, 1724, 1949, 2189, 2441, 2703, 2971, 3244, 3516, 3785, 4045, 4294, 4474]
            }, {
                type: "line",
                name: 'Peso',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

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
        $('#graficoInfDoplerIpArtUmbView').highcharts({
            chart: {
                height: 250
            },
            title: {
                text: 'IP Arteria Umbilical **',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [0.97, 0.95, 0.94, 0.92, 0.9, 0.89, 0.87, 0.85, 0.82, 0.8, 0.78, 0.75, 0.73, 0.7, 0.67, 0.65, 0.62, 0.58, 0.55, 0.52, 0.49]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [1.6, 1.56, 1.53, 1.5, 1.46, 1.43, 1.4, 1.37, 1.35, 1.32, 1.29, 1.27, 1.25, 1.22, 1.2, 1.18, 1.16, 1.14, 1.13, 1.11, 1.09]
            }, {
                type: "line",
                name: 'Arteria',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 20; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseFloat($('#ipau').val()),
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
        $('#graficoInfDoplerArtUtView').highcharts({
            chart: {
                height: 250
            },
            title: {
                text: 'IP Promedio Arteria Uterinas',
                x: -20
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.1, 0.5, 1, 1.5, 2, 2.5, 3]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [1.23, 1.18, 1.11, 1.05, 0.99, 0.94, 0.89, 0.85, 0.81, 0.78, 0.74, 0.71, 0.69, 0.66, 0.64, 0.62, 0.6, 0.58, 0.56, 0.55, 0.54, 0.52, 0.51, 0.51, 0.51, 0.49, 0.48, 0.48, 0.47, 0.47, 0.47]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [2.84, 2.71, 2.53, 2.38, 2.24, 2.11, 1.99, 1.88, 1.79, 1.71, 1.61, 1.54, 1.47, 1.41, 1.35, 1.3, 1.25, 1.21, 1.17, 1.13, 1.11, 1.06, 1.04, 1.01, 0.99, 0.97, 0.95, 0.94, 0.92, 0.91, 0.91]
            }, {
                type: "line",
                name: 'Arteria Promedio',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 10; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseFloat($('#auprom').val()),
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
        $('#graficoInfDoplerIpCCPView').highcharts({
            chart: {
                height: 250
            },
            title: {
                text: 'IP de CCP (Indice ACM / AU) **',
                x: -20 //center
            },
            plotOptions: {
                series: {
                    enableMouseTracking: false
                }
            },
            yAxis: {
                title: {
                    text: 'Valor IP'
                },
                tickPositions: [0.35, 0.7, 1.05, 1.4, 1.75, 2.1, 2.45, 2.8, 3.15, 3.5]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Pct. 5',
                marker: {
                    enabled: false
                },
                data: [0.78, 0.87, 0.95, 1.02, 1.09, 1.15, 1.2, 1.24, 1.28, 1.31, 1.33, 1.35, 1.36, 1.36, 1.36, 1.34, 1.32, 1.3, 1.26, 1.22, 1.18]
            }, {
                type: "line",
                name: 'Pct. 95',
                marker: {
                    enabled: false
                },
                data: [1.68, 1.88, 2.06, 2.22, 2.36, 2.49, 2.6, 2.7, 2.78, 2.84, 2.89, 2.92, 2.93, 2.93, 2.91, 2.87, 2.82, 2.75, 2.67, 2.57, 2.45]
            }, {
                type: "line",
                name: 'Cuociente',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    for (i = 20; i <= edadGest; i++) {
                        data.push({
                            y: 0,
                        });
                    }
                    data.push({
                        y: parseFloat($('#ccp').val()),
                    });
                    for (i = edadGest + 1; i <= 38; i++) {
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

    $('#graficopsmACM').on('click', function() {
        $('#graficosTitle').html("Gráfico Pick sistólico máximo de ACM");
        $('#graficosBody').html("<div id='viewGraficopsmACM'></div>");
        $('#impEcoObsSegTrim1').remove();
        $('#impEcoObsSegTrim2').remove();
        $('#impDoppler3').remove();
        $('#impDoppler2').remove();
        $('#impDoppler1').remove();
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
                title: {
                    text: 'cm/s'
                },
                tickPositions: [20, 40, 60, 80, 100]
            },
            colors: ['#313131', '#313131', '#313131'],
            xAxis: {
                categories: ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40']
            },
            credits: {
                enabled: false
            },
            series: [{
                type: "line",
                name: 'Valor de la Media',
                marker: {
                    enabled: false
                },
                data: [23.2, 24.3, 25.5, 26.7, 27.9, 29.3, 30.7, 32.1, 33.6, 35.2, 36.9, 38.7, 40.5, 42.4, 44.4, 46.5, 48.7, 51.1, 53.5, 56, 58.7, 61.5, 64.4]
            }, {
                type: "line",
                name: 'Anemia leve',
                marker: {
                    enabled: false
                },
                data: [29.9, 31.1, 32.8, 34.5, 36, 37.8, 39.5, 41.5, 43.3, 45.6, 47.6, 50.4, 52.2, 55, 57.3, 60.1, 62.9, 66, 69, 72.8, 75.7, 79.8, 83]
            }, {
                type: "line",
                name: 'Anemia moderada',
                marker: {
                    enabled: false
                },
                data: [34.8, 36.5, 38.2, 39.7, 41.9, 44, 46, 48, 50.4, 53, 55.4, 58, 60.9, 63.5, 66.6, 70, 73.1, 76.5, 80.2, 84, 88, 92.5, 96.6]
            }, {
                type: "line",
                name: 'Pick sistólico máximo de ACM',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var edadGest = parseInt(localStorage.eg) - 1;

                    if (medida > 0) {
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
                    } else {
                        for (i = 18; i <= 40; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }

                    return data;
                }())
            }]
        });
        $('#popupGraficos').modal('show');
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

        if (contadorIMG < 1) {
            alert("Debe seleccionar al menos una imágen");
            return true;
        }
        if (contadorIMG == 3 | contadorIMG == 5) {
            alert("Solo múltiplos de 2");
            return true;
        }

        let rut = $("#id-paciente").val();
        window.open(serverURL + "pdf/img/" + rut + "/" + fotosArreglo.toString() + "/" + StudyDate);
    });

    $("#emailFotos").on("click", function() {

        if ($("#paciente\\.correo").val() == "" && $("#paciente\\.correo\\.lista").is(':checked') == false) {
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

        if ($("#paciente\\.correo\\.lista").is(':checked') == true) {
            correo = $('#paciente\\.correo\\.config option:selected').text();
            if ($("#paciente\\.correo\\.copia").val() !== "") {
                correo = correo + ";" + $("#paciente\\.correo\\.copia").val();
            }
        } else {
            correo = $("#paciente\\.correo\\.copia").val()
        }

        var valores = {
            user_id: $("#buscar\\.paciente\\.id").val(),
            img_id: "[" + fotosArreglo.toString() + "]",
            studyDate: StudyDate,
            user_email: correo
        }

        alert("Enviando correo, espere un momento");
        $.post(serverURL + "imagenes/send", valores).done(function(data) {
            alert("Correo Enviado");
        });
    });

    $("#emailVideo").on("click", function() {

        if ($("#paciente\\.correo").val() == "" && $("#paciente\\.correo\\.lista").is(':checked') == false) {
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

        if ($("#paciente\\.correo\\.lista").is(':checked') == true) {
            correo = $('#paciente\\.correo\\.config option:selected').text();
            if ($("#paciente\\.correo\\.copia").val() !== "") {
                correo = correo + ";" + $("#paciente\\.correo\\.copia").val();
            }
        } else {
            correo = $("#paciente\\.correo\\.copia").val()
        }

        var valores = {
            user_id: $("#buscar\\.paciente\\.id").val(),
            img_id: "[" + fotosArreglo.toString() + "]",
            studyDate: StudyDate,
            user_email: correo
        }

        alert("Enviando correo, espere un momento");
        $.post(serverURL + "imagenes/sendmovie", valores).done(function(data) {
            alert("Correo Enviado");
        });
    });

    $("#eliminarFotos").on("click", function() {
        var contadorIMG = 0;
        $("input[name='fotosElegidas']").each(function() {
            if (this.checked == true) {
                let imgID = $(this).parent().parent().parent().data("id");
                var data = {
                    id: imgID
                };
                var elemento = this;

                $.post(serverURL + "dicom/del", data).done(function(data) {
                    $(elemento).parent().parent().parent().addClass("d-none");
                });

                contadorIMG = contadorIMG + 1
                this.checked = false;
            };
        });

        if (contadorIMG < 1) {
            alert("Debe seleccionar al menos una imágen");
            return true;
        }
    });
});

//funciones de los inputs
$(document).ready(function() {
    //al cambiar la fum en input pacientes
    $("#input\\.paciente\\.fum").on("change", function() {
        localStorage.fum = $(this).val();
        localStorage.fee = $("#input\\.paciente\\.fe").val();
        localStorage.eg = calcularEG();
        var semanas = Math.trunc(localStorage.eg);
        var dias = Math.trunc((localStorage.eg - Math.trunc(localStorage.eg)) * 10);

        $("#input\\.paciente\\.eg\\.dias").val(dias);
        $("#input\\.paciente\\.eg\\.semanas").val(semanas);

        $("#input\\.paciente\\.eg\\.dias\\.extra").val(dias);
        $("#input\\.paciente\\.eg\\.semanas\\.extra").val(semanas);

        //fum para examen
        $("#input\\.paciente\\.fum\\.extra").val(localStorage.fum);
        $("#input\\.paciente\\.fe\\.ecoprim").val(localStorage.fee);
        $("#input\\.paciente\\.fe\\.ecoseg").val(localStorage.fee);
        $("#input\\.paciente\\.fe\\.doppler").val(localStorage.fee);
        //eg para examen
        $("#input\\.paciente\\.eg\\.examen").val(localStorage.eg);
        $("#eco\\.prim\\.eg").val(localStorage.eg);
        $("#eco\\.seg\\.eg").val(localStorage.eg);
        $("#eco\\.doppler\\.eg").val(localStorage.eg);
        //FPP
        $("#input\\.paciente\\.fpp\\.examen").val(localStorage.fpp);
        $("#input\\.paciente\\.fpp\\.extra").val(localStorage.fpp);

        //datos para información paciente parte superior
        $("#paciente\\.nombre\\.eco\\.elegir\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
        $("#paciente\\.nombre\\.eco\\.prim\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
        $("#paciente\\.nombre\\.eco\\.segundo\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
        $("#paciente\\.nombre\\.eco\\.doppler\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
        $("#paciente\\.nombre\\.imagenes\\.prim\\.examen").html("FUM: " + localStorage.fum + ", EG: " + localStorage.eg + " sem., FPP: " + localStorage.fpp);
    });

    $("#input\\.paciente\\.eg\\.semanas").on("change", function() {

        var undia = 1000 * 60 * 60 * 24;
        var unasemana = undia * 7;
        let semanas = $(this).val();
        let dias = $("#input\\.paciente\\.eg\\.dias").val();

        //obtener la fecha inicial del cálculo, fecha de exámen
        let fRef = $("#input\\.paciente\\.fe").val();

        fRef = fRef.split(/\//).reverse().join('/'); //convert dd/mm/yyy

        semanas = semanas * unasemana;
        dias = dias * undia;

        dias = dias + semanas;

        // crear una variable fecha
        fRef = new Date(fRef)
        // crear variable para FUR
        var FUR = new Date();
        //calcular la fecha de fur usando EG y fecha de exámen
        FUR.setTime(fRef.getTime() - dias);

        $("#input\\.paciente\\.fum").val((FUR.getDate()) + "/" + (FUR.getMonth() + 1) + "/" + FUR.getFullYear());
        $('#input\\.paciente\\.fum').datepicker('setValue', (FUR.getDate()) + "/" + (FUR.getMonth() + 1) + "/" + FUR.getFullYear());
        $("#input\\.paciente\\.fum").trigger("change");
    });

    $("#input\\.paciente\\.eg\\.dias").on("change", function() {
        $("#input\\.paciente\\.eg\\.semanas").trigger("change");
    });

    $("#input\\.paciente\\.eg\\.semanas\\.extra").on("change", function() {
        let semanas = $(this).val();
        $("#input\\.paciente\\.eg\\.semanas").val(semanas).trigger("change");
    });

    $("#input\\.paciente\\.eg\\.dias\\.extra").on("change", function() {
        let dias = $(this).val();
        $("#input\\.paciente\\.eg\\.dias").val(dias).trigger("change");
    });
    //input de apellidos de paciente
    $("#buscar\\.paciente\\.apellido").on("keyup", function(event) {
        let apellido = {
            patient_lastname: $(this).val()
        }
        $.post(serverURL + "configuracion/obtenerapellidos", apellido).done(function(data) {
            $("#apellidos").empty();
            if (data.length > 0) {
                $.each(data, function(i, item) {
                    if (item.PatientNam !== null) {
                        var nombre = item.PatientNam.split("^");
                    } else {
                        var nombre = ["NN", "NN"];
                    }
                    $("#apellidos").append('<option value="' + nombre[0] + ' ' + nombre[1] + '"></option>');
                });
            }
        });
    });

    $("#lcn").on("keyup", function() {
        let valor = $(this).val();
        $("#lcnPct").val(eglcn(valor));
        $("#lcn-informe").val(valor);
    });

    $("#lcn").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            var eg = localStorage.eg;
            $('#furReferida').val($("#input\\.paciente\\.fum").val());
            $('#egReferida').val(eg);
            $('#fppReferida').val($("#input\\.paciente\\.fpp\\.examen").val());
            var LCN = parseInt($('#lcn').val());

            if (isNaN(LCN) | LCN < 0 | isNaN(eg) | eg < 1) {
                $('#diferenciaEcoPrimTrim').html('Días de diferencia observado entre edad gestacional por FUR referida y exámen ecográfico es de 0 días.');
                $('#preguntaAjusteEcoPrimTrim').hide();
            } else {
                var EGLCN = parseFloat($('#lcnPct').val());
                var eg1 = new Number((Math.floor(EGLCN) * 7) + Math.round((EGLCN - Math.floor(EGLCN)) * 7));
                var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
                var diferencia = Math.abs(Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
                $('#diferenciaEcoPrimTrim').html('Días de diferencia observado entre edad gestacional por FUR referida y exámen ecográfico es de ' + diferencia + ' días.');
                $('#preguntaAjusteEcoPrimTrim').show();
                $('#resultadoAjusteEcoPrimTrim').show();

                var LCN = parseInt($('#lcn').val());
                var eg = localStorage.eg;
                var oneday = 1000 * 60 * 60 * 24;

                if (isNaN(LCN) | LCN < 0 | isNaN(eg) | eg < 1) {
                    $('#popupTitle').html("Información");
                    $('#popupBody').html("<p>El paciente debe tener una Edad Gestacional y un valor en LCN o Saco Gestacional</p>");
                    $('#popupGenerico').modal('show');
                } else {
                    var EGLCN = parseFloat($('#lcnPct').val());
                    var eg1 = new Number((Math.floor(EGLCN) * 7) + Math.round((EGLCN - Math.floor(EGLCN)) * 7));
                    var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
                    var diferencia = (Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
                    diferencia = diferencia * oneday;
                    var FUM = localStorage.fum;
                    FUM = FUM.split(/\//).reverse().join('/'); //convert dd/mm/yyy
                    FUM = new Date(FUM);
                    var B = new Date();
                    B.setTime(FUM.getTime() + diferencia);
                    $('#furAjustada').val(B.getDate() + "/" + (B.getMonth() + 1) + "/" + B.getFullYear());
                    var undia = 1000 * 60 * 60 * 24;
                    var unasemana = undia * 7;
                    var FExamen = localStorage.fee;
                    FExamen = FExamen.split(/\//).reverse().join('/'); //convert dd/mm/yyy
                    FExamen = new Date(FExamen);
                    var EdadGestacional = ((FExamen.getTime() - B.getTime()) / unasemana).toFixed(1);
                    $('#egAjustada').val(EdadGestacional);
                    var C = new Date();
                    C.setTime(B.getTime() + (40 * unasemana));
                    $('#fppAjustada').val(C.getDate() + "/" + (C.getMonth() + 1) + "/" + C.getFullYear());
                }
                $("#graficoLcn").focus();
            }
        }
    });

    $("#saco").on("keyup", function() {
        let valor = $(this).val();
        $('#saco-gestacional-mm').val(valor);
        $("#sacoPct").val(egSaco(valor));
    });

    $("#saco").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            var eg = parseFloat(localStorage.eg);
            var EGsaco = parseFloat($('#sacoPct').val());
            var eg1 = new Number((Math.floor(EGsaco) * 7) + Math.round((EGsaco - Math.floor(EGsaco)) * 7));
            var eg2 = new Number((Math.floor(eg) * 7) + Math.round((eg - Math.floor(eg)) * 7));
            var diferencia = Math.abs(Math.floor(eg2 - eg1) + Math.round(((eg2 - eg1) - Math.floor(eg2 - eg1)) * 7));
            $('#diferenciaEcoPrimTrim').html('Días de diferencia observado entre edad gestacional por FUR referida y exámen ecográfico es de ' + diferencia + ' días.<br><small>La determinación de edad gestacional ecográfica y ajuste a edad gestacional real, ha de realizarse solo una vez lograda la medición embrionaria (LCN).</small>');
            $('#preguntaAjusteEcoPrimTrim').hide();
            $("#graficoSaco").focus();
        }
    });

    $("#translunucal").keypress(function() {
        if (event.which == 13) {
            event.preventDefault();
            calcularRiesgo();
        }
    });

    $("#dbp").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#dof").focus()
        }
    });

    $("#dof").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#ca").focus()
        }
    });

    $("#cc").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#cc").trigger('change');
            $("#ca").focus().trigger('change');
        }
    });

    $("#ca").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#ca").trigger('change');
            $("#lf").focus()
        }
    });

    $("#lf").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#ca").trigger('change');
            $("#bvm").focus()
        }
    });

    $("#lh").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#cerebelo").focus()
        }
    });

    $("#cerebelo").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#bvm").focus()
        }
    });

    $("#bvm").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#pfe").focus()
            bvm();
        }
    });

    $("#aud").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#aui").focus()
        }
    });

    $("#aui").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#ipau").focus()
        }
    });

    $("#aui").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#ipau").focus()
        }
    });

    $("#ipau").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#ipacm").focus()
        }
    });

    $("#ipacm").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#dv").focus()
        }
    });

    $("#dv").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#graficoDv").focus()
        }
    });

    $("#psmACM").keypress(function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#graficopsmACM").focus()
        }
    });

    $('#dbp').change(deDBP);
    $('#cc').change(pctcc);
    $('#ca').change(pctca);
    $('#lf').change(pctlf);
    $('#cerebelo').change(pctcb);
    $('#lh').change(pctlh);
    $('#dof').change(calcdof);

    $('#aud').change(pctut);
    $('#aui').change(pctut);
    $('#dv').change(pctdv);
    $('#ipau').change(pctau);
    $('#ipacm').change(pctacm);
    $('#bvm').change(pctbvm);

    $("input[name='radio_translucencia']").on("change", function() {
        if ($(this).val() == 1) {
            $("#examen\\.eco\\.primtrim\\.adicionales").removeClass("d-none");
            var lcn = $("#lcn").val();
            if (lcn > 44 && lcn < 86) {
                $("#loncefalocaudal").val($("#lcn").val());
            }
        } else {
            $("#examen\\.eco\\.primtrim\\.adicionales").addClass("d-none");
            $("#prob").addClass("d-none");
            $("#prob2").addClass("d-none");
        }
    });

});