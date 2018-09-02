function guardarParto(solicitado, aceptado){
    $("#boton\\.parto\\.guardar").addClass("d-none");
    $("#boton\\.hipoglicemia\\.guardar").addClass("d-none");
    $("#boton\\.hipoglicemia\\.modificar").removeClass("d-none");
    $("#boton\\.hipoglicemia\\.cancelar").addClass("d-none");
    $("#boton\\.parto\\.nuevo").removeClass("d-none");
    $("#boton\\.parto\\.modificar").removeClass("d-none");
    $("#boton\\.parto\\.cancelar").addClass("d-none");
    $("#boton\\.parto\\.eliminar").removeClass("d-none");
    //desbloquear cajas
    $("#id_paciente").prop("disabled", true);
    $("#nombre_madre").prop("disabled", true);
    $("#apellido_madre").prop("disabled", true);
    $("#lugar_parto_rn").prop("disabled", true);
    $("#id_rn").prop("disabled", true);
    $("#nombre_rn").prop("disabled", true);
    $("#apellido_rn").prop("disabled", true);
    $("#sexo_rn").prop("disabled", true);
    $("#fecha_parto_rn").prop("disabled", true);
    $("#datos\\.neonatal\\.edad").prop("disabled", true);
    $("#termino_parto").prop("disabled", true);
    $("#tipo_parto").prop("disabled", true);
    $("#tipo_patologia_obstetrica").prop("disabled", true);
    $("#meconio").prop("disabled", true);
    $("#datos\\.neonatal\\.peso").prop("disabled", true);
    $("#datos\\.neonatal\\.talla").prop("disabled", true);
    $("#perimetro_craneo_rn").prop("disabled", true);
    $("#peso_placentario").prop("disabled", true);
    $("#apgar_1").prop("disabled", true);
    $("#apgar_5").prop("disabled", true);
    $("#hiperbilirrubinemia").prop("disabled", true);
    $("#poliglobulia").prop("disabled", true);
    $("#hospital_ucin").prop("disabled", true);
    $("#sindrome_respiratorio").prop("disabled", true);
    $("#alta_con_madre").prop("disabled", true);
    $("#observaciones").prop("disabled", true);
    $("#prof\\.atencion\\.parto").prop("disabled", true);
    $("#dextro_uno").prop("disabled", true);
    $("#glicemia_uno").prop("disabled", true);
    $("#conducta\\.uno").prop("disabled", true);
    $("#dextro_dos").prop("disabled", true);
    $("#glicemia_dos").prop("disabled", true);
    $("#conducta\\.dos").prop("disabled", true);
    $("#dextro_tres").prop("disabled", true);
    $("#glicemia_tres").prop("disabled", true);
    $("#conducta\\.tres").prop("disabled", true);
    $("#hipoglicemia_riesgo").prop("disabled", true);
    $("#hipoglicemia_sospechada").prop("disabled", true);
    $("#hipoglicemia_confirmada").prop("disabled", true);
    $("#prof\\.alta\\.rn").prop("disabled", true);
    $("#prof\\.atencion\\.parto").prop("disabled", true);
    $("#datos\\.parto\\.consentimiento").val(true)

    var parto = {
        id_paciente: $("#id_paciente").val(),
        nombre_madre: $("#nombre_madre").val(),
        apellido_madre: $("#apellido_madre").val(),
        lugar_parto_rn: $("#lugar_parto_rn").val(),
        id_rn: $("#id_rn").val(),
        nombre_rn: $("#nombre_rn").val(),
        apellido_rn: $("#apellido_rn").val(),
        sexo_rn: $("#sexo_rn").val(),
        fecha_parto_rn: $("#fecha_parto_rn").val(),
        eg_parto: $("#datos\\.neonatal\\.edad").val(),
        termino_parto: $("#termino_parto").val(),
        tipo_parto: $("#tipo_parto").val(),
        tipo_patologia_obstetrica: $("#tipo_patologia_obstetrica").val(),
        meconio: $("#meconio").val(),
        peso_rn: $("#datos\\.neonatal\\.peso").val(),
        talla_rn: $("#datos\\.neonatal\\.talla").val(),
        perimetro_craneo_rn: $("#perimetro_craneo_rn").val(),
        ipn_rn: $("#datos\\.neonatal\\.ipn").val(),
        peso_placentario: $("#peso_placentario").val(),
        apgar_1: $("#apgar_1").val(),
        apgar_5: $("#apgar_5").val(),
        hiperbilirrubinemia: $("#hiperbilirrubinemia").val(),
        poliglobulia: $("#poliglobulia").val(),
        hospital_ucin: $("#hospital_ucin").val(),
        sindrome_respiratorio: $("#sindrome_respiratorio").val(),
        alta_con_madre: $("#alta_con_madre").val(),
        observaciones: $("#observaciones").val(),
        hipoglicemia_riesgo: $("#hipoglicemia_riesgo").val(),
        hipoglicemia_sospechada: $("#hipoglicemia_sospechada").val(),
        hipoglicemia_confirmada: $("#hipoglicemia_confirmada").val(),
        dextro_uno: $("#dextro_uno").val(),
        glicemia_uno: $("#glicemia_uno").val(),
        conducta_uno: $("#conducta\\.uno").val(),
        dextro_dos: $("#dextro_dos").val(),
        glicemia_dos: $("#glicemia_dos").val(),
        conducta_dos: $("#conducta\\.dos").val(),
        dextro_tres: $("#dextro_tres").val(),
        glicemia_tres: $("#glicemia_tres").val(),
        conducta_tres: $("#conducta\\.tres").val(),
        prof_alta_rn: $("#prof\\.alta\\.rn").val(),
        prof_atencion_parto: $("#prof\\.atencion\\.parto").val(),
        peso_eg_nacional: 0,
        peso_eg_regional: 0,
        peso_eg_ajustado: $("#PesoEgeCAj").val(),
        ipn_eg_ajustado: $("#IpnPct").val(),
        solicito_consentimiento: solicitado,
        acepto_consentimiento: aceptado
    }

    var data = {
        id: $("#id_paciente").val(),
        tipo: 4,
        data:JSON.stringify(parto)
    }

    $.post(serverURL + "examen/set/", data).done(function(response) {
        obtenerPartos();
    });
}

function databasePartos(){

    var data = {
        id: "1",
        tipo: 4
    }

    $.post(serverURL + "examen/get", data).done(function(response) {
        $("#table\\.db\\.partos").empty();
        if (Object.keys(response).length > 0) {
            if (Object.keys(response.data).length > 0) {
                $.each(response.data, function(i, val) {
                    let fila = "<tr><th scope='row'>"+ val.id_parto+ "</th><td>"+val.id_paciente+"</td><td>"+val.nombre_madre+"</td><td>"+val.apellido_madre+"</td><td>"+val.lugar_parto_rn+"</td><td>"+val.id_rn+"</td><td>"+val.nombre_rn+"</td><td>"+val.apellido_rn+"</td><td>"+val.sexo_rn+"</td><td>"+val.fecha_parto_rn+"</td><td>"+val.eg_parto+"</td><td>"+val.termino_parto+"</td><td>"+val.tipo_parto+"</td><td>"+val.tipo_patologia_obstetrica+"</td><td>"+val.meconio+"</td><td>"+val.peso_rn+"</td><td>"+val.talla_rn+"</td><td>"+val.perimetro_craneo_rn+"</td><td>"+val.ipn_rn+"</td><td>"+val.peso_placentario+"</td><td>"+val.apgar_1+"</td><td>"+val.apgar_5+"</td><td>"+val.hiperbilirrubinemia+"</td><td>"+val.poliglobulia+"</td><td>"+val.hospital_ucin+"</td><td>"+val.sindrome_respiratorio+"</td><td>"+val.alta_con_madre+"</td><td>"+val.observaciones+"</td><td>"+val.hipoglicemia_riesgo+"</td><td>"+val.hipoglicemia_sospechada+"</td><td>"+val.hipoglicemia_confirmada+"</td><td>"+val.dextro_uno+"</td><td>"+val.glicemia_uno+"</td><td>"+val.conducta_uno+"</td><td>"+val.dextro_dos+"</td><td>"+val.glicemia_dos+"</td><td>"+val.conducta_dos+"</td><td>"+val.dextro_tres+"</td><td>"+val.glicemia_tres+"</td><td>"+val.conducta_tres+"</td><td>"+val.prof_alta_rn+"</td><td>"+val.prof_atencion_parto+"</td><td>"+val.peso_eg_ajustado+"</td><td>"+val.ipn_eg_ajustado+"</td><td>"+val.solicito_consentimiento+"</td><td>"+val.acepto_consentimiento+"</td></tr>";
                    $("#table\\.db\\.partos").append(fila);
                });
            }
        }
    });
}
function obtenerPartos() {
    var data = {
        id: "1",
        tipo: 4
    }

    $.post(serverURL + "examen/get", data).done(function(response) {
        $("#table\\.ecografia\\.parto").empty();
        if (Object.keys(response).length > 0) {
            if (Object.keys(response.data).length > 0) {
                $.each(response.data, function(i, val) {
                    let fila = '<tr><th scope="row" data-id="' + val.id_paciente + '" data-tipo="4">' + val.id_parto + '</th><td>' + val.id_paciente + '</td><td>' + val.id_rn + '</td><td>' + val.eg_parto + '</td><td>' + val.peso_rn + '</td><td>' + val.talla_rn + '</td></tr>';
                    $("#table\\.ecografia\\.parto").append(fila);
                });
                $("#table\\.ecografia\\.parto tr").on('click', function() {
                    activateTr(this);
                });
                $("#boton\\.hipoglicemia\\.modificar").removeClass("d-none");
                $("#boton\\.parto\\.modificar").removeClass("d-none");
                $("#boton\\.parto\\.eliminar").removeClass("d-none");
            }
            else{
                $("#boton\\.hipoglicemia\\.modificar").addClass("d-none");
                $("#boton\\.parto\\.modificar").addClass("d-none");
                $("#boton\\.parto\\.eliminar").addClass("d-none");
            }
        }
        else{
            $("#boton\\.hipoglicemia\\.modificar").addClass("d-none");
            $("#boton\\.parto\\.modificar").addClass("d-none");
            $("#boton\\.parto\\.eliminar").addClass("d-none");
        }
    });
}

function activateTr(element) {
    $.each($(element).parent().children(), function(i, val) {
        $(val).removeClass('table-active');
    });
    $(element).addClass('table-active');
    var id = $(element).children().data("id");
    loadExamen("4", id);
    $("#listaPartos").trigger("click");
}

function loadExamen(tipo, id) {
    let data = {
        id: $("#id-paciente").val(),
        tipo: tipo
    }

    $.post(serverURL + "examen/get", data).done(function(response) {
        if (tipo == 4) {
            if (Object.keys(response).length > 0) {
                $.each(response.data, function(i, val) {
                    if (val.id_paciente == id) {
                        $("#id_paciente").val(val.id_paciente);
                        $("#id_rn").val(val.id_rn);
                        $("#nombre_madre").val(val.nombre_madre);
                        $("#apellido_madre").val(val.apellido_madre);
                        $("#lugar_parto_rn").val(val.lugar_parto_rn);
                        $("#nombre_rn").val(val.nombre_rn);
                        $("#apellido_rn").val(val.apellido_rn);
                        $("#sexo_rn").val(val.sexo_rn);
                        $("#fecha_parto_rn").val(val.fecha_parto_rn);
                        $("#datos\\.neonatal\\.edad").val(val.eg_parto).trigger("focusout");
                        $("#termino_parto").val(val.termino_parto);
                        $("#tipo_parto").val(val.tipo_parto);
                        $("#tipo_patologia_obstetrica").val(val.tipo_patologia_obstetrica);
                        $("#datos\\.neonatal\\.peso").val(val.peso_rn).trigger("change");
                        $("#datos\\.neonatal\\.talla").val(val.talla_rn).trigger("change");
                        $("#perimetro_craneo_rn").val(val.perimetro_craneo_rn);
                        $("#datos\\.neonatal\\.ipn").val(val.ipn_rn);
                        $("#PesoEgeCAj").val(val.peso_eg_ajustado);
                        $("#IpnPct").val(val.ipn_eg_ajustado);
                        $("#peso_placentario").val(val.peso_placentario);
                        $("#apgar_1").val(val.apgar_1);
                        $("#apgar_5").val(val.apgar_5);
                        $("#hipoglicemia_riesgo").val(val.hipoglicemia_riesgo);
                        $("#hipoglicemia_sospechada").val(val.hipoglicemia_sospechada);
                        $("#hipoglicemia_confirmada").val(val.hipoglicemia_confirmada);
                        $("#hiperbilirrubinemia").val(val.hiperbilirrubinemia);
                        $("#poliglobulia").val(val.poliglobulia);
                        $("#hospital_ucin").val(val.hospital_ucin);
                        $("#sindrome_respiratorio").val(val.sindrome_respiratorio);
                        $("#alta_con_madre").val(val.alta_con_madre);
                        $("#observaciones").val(val.observaciones);
                        $("#meconio").val(val.meconio);
                        $("#conducta\\.tres").val(val.conducta_tres);
                        $("#glicemia_tres").val(val.glicemia_tres);
                        $("#dextro_tres").val(val.dextro_tres);
                        $("#conducta\\.dos").val(val.conducta_dos);
                        $("#glicemia_dos").val(val.glicemia_dos);
                        $("#dextro_dos").val(val.dextro_dos);
                        $("#conducta\\.uno").val(val.conducta_uno);
                        $("#glicemia_uno").val(val.glicemia_uno);
                        $("#dextro_uno").val(val.dextro_uno);
                        $("#prof\\.alta\\.rn").val(val.prof_alta_rn);
                        $("#prof\\.atencion\\.parto").val(val.prof_atencion_parto);
                        $("#datos\\.parto\\.consentimiento").val(true);
                    };
                });
            }
        }
    });
}

function eliminarParto(){
    var filas = $("#table\\.ecografia\\.parto").children();

        $.each(filas,function(i,val){
            if ($(val).hasClass('table-active') == true){
                let examen = {
                    eg: "0"
                }
                
                let data = {
                    id: $("#id_paciente").val(),
                    tipo: 4,
                    data: JSON.stringify(examen)
                }

                $.post(serverURL + "examen/del/", data).done(function(response) {
                    $("#table\\.ecografia\\.parto").empty();
                    obtenerPartos();
                    $("#id_paciente").val("");
                    $("#nombre_madre").val("");
                    $("#apellido_madre").val("");
                    $("#lugar_parto_rn").val("");
                    $("#id_rn").val("");
                    $("#nombre_rn").val("");
                    $("#apellido_rn").val("");
                    $("#sexo_rn").val("");
                    $("#fecha_parto_rn").val("");
                    $("#datos\\.neonatal\\.edad").val("");
                    $("#termino_parto").val("");
                    $("#tipo_parto").val("");
                    $("#tipo_patologia_obstetrica").val("");
                    $("#meconio").val("");
                    $("#datos\\.neonatal\\.peso").val("");
                    $("#datos\\.neonatal\\.talla").val("");
                    $("#perimetro_craneo_rn").val("");
                    $("#datos\\.neonatal\\.ipn").val("");
                    $("#peso_placentario").val("");
                    $("#apgar_1").val("");
                    $("#apgar_5").val("");
                    $("#hiperbilirrubinemia").val("");
                    $("#poliglobulia").val("");
                    $("#hospital_ucin").val("");
                    $("#sindrome_respiratorio").val("");
                    $("#alta_con_madre").val("");
                    $("#observaciones").val("");
                    $("#prof\\.atencion\\.parto").val("");
                    $("#dextro_uno").val("");
                    $("#glicemia_uno").val("");
                    $("#conducta\\.uno").val(3);
                    $("#dextro_dos").val("");
                    $("#glicemia_dos").val("");
                    $("#conducta\\.dos").val(3);
                    $("#dextro_tres").val("");
                    $("#glicemia_tres").val("");
                    $("#conducta\\.tres").val(3);
                    $("#hipoglicemia_riesgo").val("");
                    $("#hipoglicemia_sospechada").val("");
                    $("#hipoglicemia_confirmada").val("");
                    $("#prof\\.alta\\.rn").val("");
                    $("#prof\\.atencion\\.parto").val("");
                });
            }
        });
}

$(document).ready(function() {
    document.location.hash = "#";
    let fecha = new Date();
    let day = ("0" + fecha.getDate()).slice(-2);
    let month = ("0" + (fecha.getMonth() + 1)).slice(-2);

    $('#fecha_parto_rn').val((day) + "/" + (month) + "/" + fecha.getFullYear());
    $('#fecha_parto_rn').datepicker('setValue', (day) + "/" + (month) + "/" + fecha.getFullYear());

    obtenerPartos();

    $.get(serverURL + "configuracion/profesionalparto/1", function(data) {
        $("#prof\\.alta\\.rn").empty();
        $.each(data, function(key, des) {
            let strSelect = "<option value='" + des.id_profesional + "'>" + des.nombre_profesional + "</option>";
            $("#prof\\.alta\\.rn").append(strSelect);
        });
    });

    $("#buscar\\.parto\\.madre").on("keydown", function(e) {
        var text = $(this).val();
        switch (e.which) {
            case 13:

                let tpoBusqueda = $("#buscar\\.parto\\.tipo").val();

                let data = {
                    id: $(this).val(),
                    tipo: 4,
                    tipoB:tpoBusqueda
                }

                $.post(serverURL + "examen/gets", data).done(function(response) {
                    if (response !== null) {
                        if (Object.keys(response).length > 0) {
                            $.each(response.data, function(i, val) {
                                $("#id_paciente").val(val.id_paciente);
                                $("#id_rn").val(val.id_rn);
                                $("#nombre_madre").val(val.nombre_madre);
                                $("#apellido_madre").val(val.apellido_madre);
                                $("#lugar_parto_rn").val(val.lugar_parto_rn);
                                $("#nombre_rn").val(val.nombre_rn);
                                $("#apellido_rn").val(val.apellido_rn);
                                $("#sexo_rn").val(val.sexo_rn);
                                $("#fecha_parto_rn").val(val.fecha_parto_rn);
                                $("#datos\\.neonatal\\.edad").val(val.eg_parto).trigger("focusout");
                                $("#termino_parto").val(val.termino_parto);
                                $("#tipo_parto").val(val.tipo_parto);
                                $("#tipo_patologia_obstetrica").val(val.tipo_patologia_obstetrica);
                                $("#datos\\.neonatal\\.peso").val(val.peso_rn).trigger("change");
                                $("#datos\\.neonatal\\.talla").val(val.talla_rn).trigger("change");
                                $("#perimetro_craneo_rn").val(val.perimetro_craneo_rn);
                                $("#datos\\.neonatal\\.ipn").val(val.ipn_rn);
                                $("#PesoEgeCAj").val(val.peso_eg_ajustado);
                                $("#IpnPct").val(val.ipn_eg_ajustado);
                                $("#peso_placentario").val(val.peso_placentario);
                                $("#apgar_1").val(val.apgar_1);
                                $("#apgar_5").val(val.apgar_5);
                                $("#hipoglicemia_riesgo").val(val.hipoglicemia_riesgo);
                                $("#hipoglicemia_sospechada").val(val.hipoglicemia_sospechada);
                                $("#hipoglicemia_confirmada").val(val.hipoglicemia_confirmada);
                                $("#hiperbilirrubinemia").val(val.hiperbilirrubinemia);
                                $("#poliglobulia").val(val.poliglobulia);
                                $("#hospital_ucin").val(val.hospital_ucin);
                                $("#sindrome_respiratorio").val(val.sindrome_respiratorio);
                                $("#alta_con_madre").val(val.alta_con_madre);
                                $("#observaciones").val(val.observaciones);
                                $("#meconio").val(val.meconio);
                                $("#conducta\\.tres").val(val.conducta_tres);
                                $("#glicemia_tres").val(val.glicemia_tres);
                                $("#dextro_tres").val(val.dextro_tres);
                                $("#conducta\\.dos").val(val.conducta_dos);
                                $("#glicemia_dos").val(val.glicemia_dos);
                                $("#dextro_dos").val(val.dextro_dos);
                                $("#conducta\\.uno").val(val.conducta_uno);
                                $("#glicemia_uno").val(val.glicemia_uno);
                                $("#dextro_uno").val(val.dextro_uno);
                                $("#prof\\.alta\\.rn").val(val.prof_alta_rn);
                                $("#prof\\.atencion\\.parto").val(val.prof_atencion_parto);
                            });
                        }
                    } else {
                        alert("No hay pacientes que coincidan con la búsqueda");
                    }
                });
                break;
        }
    });

    $("#buscar\\.parto\\.madre\\.button").on("click", function() {

        let tpoBusqueda = $("#buscar\\.parto\\.tipo").val();

        let data = {
            id: $("#buscar\\.parto\\.madre").val(),
            tipo: 4,
            tipoB:tpoBusqueda
        }
        $.post(serverURL + "examen/gets", data).done(function(response) {
            if (response !== null) {
                if (Object.keys(response).length > 0) {
                    $.each(response.data, function(i, val) {
                        $("#id_paciente").val(val.id_paciente);
                        $("#id_rn").val(val.id_rn);
                        $("#nombre_madre").val(val.nombre_madre);
                        $("#apellido_madre").val(val.apellido_madre);
                        $("#lugar_parto_rn").val(val.lugar_parto_rn);
                        $("#nombre_rn").val(val.nombre_rn);
                        $("#apellido_rn").val(val.apellido_rn);
                        $("#sexo_rn").val(val.sexo_rn);
                        $("#fecha_parto_rn").val(val.fecha_parto_rn);
                        $("#datos\\.neonatal\\.edad").val(val.eg_parto).trigger("focusout");
                        $("#termino_parto").val(val.termino_parto);
                        $("#tipo_parto").val(val.tipo_parto);
                        $("#tipo_patologia_obstetrica").val(val.tipo_patologia_obstetrica);
                        $("#datos\\.neonatal\\.peso").val(val.peso_rn).trigger("change");
                        $("#datos\\.neonatal\\.talla").val(val.talla_rn).trigger("change");
                        $("#perimetro_craneo_rn").val(val.perimetro_craneo_rn);
                        $("#datos\\.neonatal\\.ipn").val(val.ipn_rn);
                        $("#PesoEgeCAj").val(val.peso_eg_ajustado);
                        $("#IpnPct").val(val.ipn_eg_ajustado);
                        $("#peso_placentario").val(val.peso_placentario);
                        $("#apgar_1").val(val.apgar_1);
                        $("#apgar_5").val(val.apgar_5);
                        $("#hipoglicemia_riesgo").val(val.hipoglicemia_riesgo);
                        $("#hipoglicemia_sospechada").val(val.hipoglicemia_sospechada);
                        $("#hipoglicemia_confirmada").val(val.hipoglicemia_confirmada);
                        $("#hiperbilirrubinemia").val(val.hiperbilirrubinemia);
                        $("#poliglobulia").val(val.poliglobulia);
                        $("#hospital_ucin").val(val.hospital_ucin);
                        $("#sindrome_respiratorio").val(val.sindrome_respiratorio);
                        $("#alta_con_madre").val(val.alta_con_madre);
                        $("#observaciones").val(val.observaciones);
                        $("#meconio").val(val.meconio);
                        $("#conducta\\.tres").val(val.conducta_tres);
                        $("#glicemia_tres").val(val.glicemia_tres);
                        $("#dextro_tres").val(val.dextro_tres);
                        $("#conducta\\.dos").val(val.conducta_dos);
                        $("#glicemia_dos").val(val.glicemia_dos);
                        $("#dextro_dos").val(val.dextro_dos);
                        $("#conducta\\.uno").val(val.conducta_uno);
                        $("#glicemia_uno").val(val.glicemia_uno);
                        $("#dextro_uno").val(val.dextro_uno);
                        $("#prof\\.alta\\.rn").val(val.prof_alta_rn);
                        $("#prof\\.atencion\\.parto").val(val.prof_atencion_parto);
                    });
                }
            } else {
                alert("No hay pacientes con el id escrito");
            }
        });
    });

    $.get(serverURL + "configuracion/profesionalparto/0", function(data) {
        $("#prof\\.atencion\\.rn").empty();
        $.each(data, function(key, des) {
            let strSelect = "<option value='" + des.id_profesional + "'>" + des.nombre_profesional + "</option>";
            $("#prof\\.atencion\\.parto").append(strSelect);
        });
    });

    $.get(serverURL + "configuracion/lugarparto", function(data) {
        $("#lugar_parto_rn").empty();
        $.each(data, function(key, des) {
            let strSelect = "<option value='" + des.lugar_id + "'>" + des.lugar_name + "</option>";
            $("#lugar_parto_rn").append(strSelect);
        });
    });

    $.get(serverURL + "configuracion/patologiaobstetrica", function(data) {
        $("#tipo_patologia_obstetrica").empty();
        $.each(data, function(key, des) {
            let strSelect = "<option value='" + des.patologia_id + "'>" + des.patologia_name + "</option>";
            $("#tipo_patologia_obstetrica").append(strSelect);
        });
    });

    $("#boton\\.hipoglicemia\\.nuevo").on("click", function() {
        $("#boton\\.parto\\.nuevo").trigger("click");
    });

    $("#boton\\.hipoglicemia\\.cancelar").on("click", function() {
        $("#boton\\.parto\\.cancelar").trigger("click");
    });

    $("#boton\\.parto\\.nuevo").on("click", function() {
        $("#boton\\.parto\\.guardar").removeClass("d-none");
        $("#boton\\.hipoglicemia\\.guardar").removeClass("d-none");
        $("#boton\\.hipoglicemia\\.cancelar").removeClass("d-none");
        $("#boton\\.hipoglicemia\\.modificar").addClass("d-none");
        $("#boton\\.parto\\.nuevo").addClass("d-none");
        $("#boton\\.parto\\.cancelar").removeClass("d-none");
        $("#boton\\.parto\\.modificar").addClass("d-none");
        $("#boton\\.parto\\.eliminar").addClass("d-none");
        //desbloquear cajas
        $("#id_paciente").prop("disabled", false).val("");
        $("#nombre_madre").prop("disabled", false).val("");
        $("#apellido_madre").prop("disabled", false).val("");
        $("#lugar_parto_rn").prop("disabled", false).val("");
        $("#id_rn").prop("disabled", false).val("");
        $("#nombre_rn").prop("disabled", false).val("");
        $("#apellido_rn").prop("disabled", false).val("");
        $("#sexo_rn").prop("disabled", false).val(0);
        $("#fecha_parto_rn").prop("disabled", false).val("");
        $("#datos\\.neonatal\\.edad").prop("disabled", false).val(40);
        $("#termino_parto").prop("disabled", false).val(0);
        $("#tipo_parto").prop("disabled", false).val(0);
        $("#tipo_patologia_obstetrica").prop("disabled", false).val("");
        $("#meconio").prop("disabled", false).val(0);
        $("#datos\\.neonatal\\.peso").prop("disabled", false).val("");
        $("#datos\\.neonatal\\.talla").prop("disabled", false).val("");
        $("#perimetro_craneo_rn").prop("disabled", false).val("");
        $("#datos\\.neonatal\\.ipn").val("");
        $("#peso_placentario").prop("disabled", false).val("");
        $("#apgar_1").prop("disabled", false).val("");
        $("#apgar_5").prop("disabled", false).val("");
        $("#hiperbilirrubinemia").prop("disabled", false).val(1);
        $("#poliglobulia").prop("disabled", false).val(1);
        $("#hospital_ucin").prop("disabled", false).val(1);
        $("#sindrome_respiratorio").prop("disabled", false).val(1);
        $("#alta_con_madre").prop("disabled", false).val(0);
        $("#observaciones").prop("disabled", false).val("");
        $("#prof\\.atencion\\.parto").prop("disabled", false).val("");
        $("#dextro_uno").prop("disabled", false).val("");
        $("#glicemia_uno").prop("disabled", false).val("");
        $("#conducta\\.uno").prop("disabled", false).val(3);
        $("#dextro_dos").prop("disabled", false).val("");
        $("#glicemia_dos").prop("disabled", false).val("");
        $("#conducta\\.dos").prop("disabled", false).val(3);
        $("#dextro_tres").prop("disabled", false).val("");
        $("#glicemia_tres").prop("disabled", false).val("");
        $("#conducta\\.tres").prop("disabled", false).val(3);
        $("#hipoglicemia_riesgo").prop("disabled", false).val(0);
        $("#hipoglicemia_sospechada").prop("disabled", false).val(1);
        $("#hipoglicemia_confirmada").prop("disabled", false).val(1);
        $("#prof\\.alta\\.rn").prop("disabled", false).val("");
        $("#prof\\.atencion\\.parto").prop("disabled", false).val("");
        $("#datos\\.parto\\.consentimiento").val(false);
    });

    $("#boton\\.parto\\.modificar").on("click", function() {

        if ($("#id_paciente").val() == ""){
            $("#dialog\\.title").html("Modificar");
            $("#dialog\\.text").html("<p>Debe seleccional un examen primero</p>");
            $("#dialog\\.action").off("click").addClass("d-none");
            $("#dialog\\.exit").html("Aceptar");
            $("#dialog").modal("show");
        }
        else{
            $("#boton\\.parto\\.guardar").removeClass("d-none");
            $("#boton\\.hipoglicemia\\.guardar").removeClass("d-none");
            $("#boton\\.hipoglicemia\\.cancelar").removeClass("d-none");
            $("#boton\\.hipoglicemia\\.modificar").addClass("d-none");
            $("#boton\\.parto\\.cancelar").removeClass("d-none");
            $("#boton\\.parto\\.nuevo").addClass("d-none");
            $("#boton\\.parto\\.modificar").addClass("d-none");
            $("#boton\\.parto\\.eliminar").addClass("d-none");
            //desbloquear cajas
            $("#id_paciente").prop("disabled", false);
            $("#nombre_madre").prop("disabled", false);
            $("#apellido_madre").prop("disabled", false);
            $("#lugar_parto_rn").prop("disabled", false);
            $("#id_rn").prop("disabled", false);
            $("#nombre_rn").prop("disabled", false);
            $("#apellido_rn").prop("disabled", false);
            $("#sexo_rn").prop("disabled", false);
            $("#fecha_parto_rn").prop("disabled", false);
            $("#datos\\.neonatal\\.edad").prop("disabled", false);
            $("#termino_parto").prop("disabled", false);
            $("#tipo_parto").prop("disabled", false);
            $("#tipo_patologia_obstetrica").prop("disabled", false);
            $("#meconio").prop("disabled", false);
            $("#datos\\.neonatal\\.peso").prop("disabled", false);
            $("#datos\\.neonatal\\.talla").prop("disabled", false);
            $("#perimetro_craneo_rn").prop("disabled", false);
            $("#datos\\.neonatal\\.ipn");
            $("#peso_placentario").prop("disabled", false);
            $("#apgar_1").prop("disabled", false);
            $("#apgar_5").prop("disabled", false);
            $("#hiperbilirrubinemia").prop("disabled", false);
            $("#poliglobulia").prop("disabled", false);
            $("#hospital_ucin").prop("disabled", false);
            $("#sindrome_respiratorio").prop("disabled", false);
            $("#alta_con_madre").prop("disabled", false);
            $("#observaciones").prop("disabled", false);
            $("#prof\\.atencion\\.parto").prop("disabled", false);
            $("#dextro_uno").prop("disabled", false);
            $("#glicemia_uno").prop("disabled", false);
            $("#conducta\\.uno").prop("disabled", false);
            $("#dextro_dos").prop("disabled", false);
            $("#glicemia_dos").prop("disabled", false);
            $("#conducta\\.dos").prop("disabled", false);
            $("#dextro_tres").prop("disabled", false);
            $("#glicemia_tres").prop("disabled", false);
            $("#conducta\\.tres").prop("disabled", false);
            $("#hipoglicemia_riesgo").prop("disabled", false);
            $("#hipoglicemia_sospechada").prop("disabled", false);
            $("#hipoglicemia_confirmada").prop("disabled", false);
            $("#prof\\.alta\\.rn").prop("disabled", false);
            $("#prof\\.atencion\\.parto").prop("disabled", false);
        }
    });

    $("#boton\\.parto\\.cancelar").on("click", function() {
        $("#boton\\.parto\\.guardar").addClass("d-none");
        $("#boton\\.hipoglicemia\\.guardar").addClass("d-none");
        $("#boton\\.hipoglicemia\\.cancelar").addClass("d-none");
        $("#boton\\.parto\\.nuevo").removeClass("d-none");
        $("#boton\\.parto\\.cancelar").addClass("d-none");
        //desbloquear cajas
        $("#id_paciente").prop("disabled", true);
        $("#nombre_madre").prop("disabled", true);
        $("#apellido_madre").prop("disabled", true);
        $("#lugar_parto_rn").prop("disabled", true);
        $("#id_rn").prop("disabled", true);
        $("#nombre_rn").prop("disabled", true);
        $("#apellido_rn").prop("disabled", true);
        $("#sexo_rn").prop("disabled", true);
        $("#fecha_parto_rn").prop("disabled", true);
        $("#datos\\.neonatal\\.edad").prop("disabled", true);
        $("#termino_parto").prop("disabled", true);
        $("#tipo_parto").prop("disabled", true);
        $("#tipo_patologia_obstetrica").prop("disabled", true);
        $("#meconio").prop("disabled", true);
        $("#datos\\.neonatal\\.peso").prop("disabled", true);
        $("#datos\\.neonatal\\.talla").prop("disabled", true);
        $("#perimetro_craneo_rn").prop("disabled", true);
        $("#datos\\.neonatal\\.ipn");
        $("#peso_placentario").prop("disabled", true);
        $("#apgar_1").prop("disabled", true);
        $("#apgar_5").prop("disabled", true);
        $("#hiperbilirrubinemia").prop("disabled", true);
        $("#poliglobulia").prop("disabled", true);
        $("#hospital_ucin").prop("disabled", true);
        $("#sindrome_respiratorio").prop("disabled", true);
        $("#alta_con_madre").prop("disabled", true);
        $("#observaciones").prop("disabled", true);
        $("#prof\\.atencion\\.parto").prop("disabled", true);
        $("#dextro_uno").prop("disabled", true);
        $("#glicemia_uno").prop("disabled", true);
        $("#conducta\\.uno").prop("disabled", true);
        $("#dextro_dos").prop("disabled", true);
        $("#glicemia_dos").prop("disabled", true);
        $("#conducta\\.dos").prop("disabled", true);
        $("#dextro_tres").prop("disabled", true);
        $("#glicemia_tres").prop("disabled", true);
        $("#conducta\\.tres").prop("disabled", true);
        $("#hipoglicemia_riesgo").prop("disabled", true);
        $("#hipoglicemia_sospechada").prop("disabled", true);
        $("#hipoglicemia_confirmada").prop("disabled", true);
        $("#prof\\.alta\\.rn").prop("disabled", true);
        $("#prof\\.atencion\\.parto").prop("disabled", true);
        obtenerPartos();
    });

    $("#boton\\.parto\\.guardar").on("click", function() {

        
        if ($("#id_paciente").val() == ""){
            $("#dialog\\.title").html("Guardar");
            $("#dialog\\.text").html("<p>Ingrese un numero de registro (id, RUT)</p>");
            $("#dialog\\.action").off("click").addClass("d-none");
            $("#dialog\\.exit").html("Aceptar");   
        }
        else{
            let content = "";
            let consent = $("#datos\\.parto\\.consentimiento").val();
            consent = consent.toLowerCase() == 'true' ? true : false; 
            if (consent == false){
                $("#dialog\\.title").html("Guardar");
                content = '<p>Antes de guardar, se sugiere solicitar consentimiento informado</p><p>¿Consentimiento solicitado?</p><div class="form-row"><div class="col"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="consentimiento_solicitado" value="true"><label class="form-check-label">Si</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="consentimiento_solicitado" value="false" checked><label class="form-check-label">No</label></div></div></div><p>¿Consentimiento aceptado?</p><div class="form-row"><div class="col"><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="consentimiento_aceptado" value="true"><label class="form-check-label">Si</label></div><div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="consentimiento_aceptado" value="false" checked><label class="form-check-label">No</label></div></div></div>';
                $("#dialog\\.text").html(content);
                $("#dialog\\.exit").html("Cancelar");
                $("#dialog\\.action").off("click").removeClass("d-none").html("Guardar");
                $("#dialog\\.action").on("click", function(){
                    let solicitado = $( "input[type=radio][name=consentimiento_solicitado]:checked" ).val();
                    let aceptado = $( "input[type=radio][name=consentimiento_aceptado]:checked" ).val();
                    guardarParto(solicitado,aceptado);
                    $("#dialog").modal("hide");
                });
                $("#dialog").modal("show"); 
            }
            else{
                guardarParto(false,false);
            }
        }
        $
    });

    $("#boton\\.parto\\.eliminar").on("click", function() {
        if ($("#id_paciente").val() == ""){
            $("#dialog\\.title").html("Eliminar");
            $("#dialog\\.text").html("<p>Debe seleccional un examen primero</p>");
            $("#dialog\\.action").off("click").addClass("d-none");
            $("#dialog\\.exit").html("Aceptar");    
        }
        else{
            $("#dialog\\.title").html("Eliminar");
            $("#dialog\\.text").html("<p>¿Está seguro de eliminar el exámen seleccionado?</p>");
            $("#dialog\\.exit").html("Cancelar"); 
            $("#dialog\\.action").off("click").removeClass("d-none").html("Eliminar");
            $("#dialog\\.action").on("click", function(){
                eliminarParto();
                $("#dialog").modal("hide");
            });
        }
        $("#dialog").modal("show");
    });

    $("#boton\\.hipoglicemia\\.modificar").on("click", function() {
        $("#boton\\.parto\\.modificar").trigger("click");
    });

    $("#boton\\.hipoglicemia\\.guardar").on("click", function() {
        $("#boton\\.parto\\.guardar").trigger("click");
    });

    $("#listaPartos").on("click", function() {
        let estado = $(this).data("hide");

        if (estado == true) {
            $(this).data("hide", false);
            $("#contenedorListaPartos").removeClass("d-none");
            $("#menuListaPartos").addClass("d-none");
        } else {
            $(this).data("hide", true);
            $("#contenedorListaPartos").addClass("d-none");
            $("#menuListaPartos").removeClass("d-none");
        }
    });

    $("#listaPartosDos").on("click", function() {
        $("#listaPartos").trigger("click");
    });

    $("#goto_ajuste").on("click", function() {
        document.location.hash = "#ajustepeso";
    });

    $("#datos\\.neonatal\\.peso").on("change", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }

        $("#pesoRN").val($(this).val());
        $("#datos\\.ajuste\\.peso").val($(this).val() + " gramos");
        $("#datos\\.hipoglicemia\\.peso").val($(this).val());
        $("#pesoRN").trigger("change");
    });

    $("#datos\\.neonatal\\.peso").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#dextro_uno").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#glicemia_uno").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#dextro_dos").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#glicemia_dos").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#dextro_tres").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#glicemia_tres").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#datos\\.neonatal\\.peso").on("keyup", function(event) {
        if (event.which == 13) {
            event.preventDefault();
            $("#datos\\.neonatal\\.talla").focus();
        }
    });

    $("#datos\\.neonatal\\.talla").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#datos\\.neonatal\\.talla").on("change", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));
        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
        $("#tallaRN").val($(this).val());
        $("#tallaRN").trigger("change");
    });

    $("#perimetro_craneo_rn").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#peso_placentario").on("keyup", function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));

        if ($(this).val() > max) {
            var str = String($(this).val());
            str = str.slice(0, -1);
            $(this).val(parseInt(str));
        } else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    $("#datos\\.neonatal\\.edad").on("focusout", function() {
        $("#edadGestacional").val($(this).val());
        $("#datos\\.hipoglicemia\\.eg").val($(this).val());
        $("#datos\\.ajuste\\.eg").val($(this).val() + " semanas");
        $("#edadGestacional").trigger("change");
    });

    $("#edadGestacional").on("focusout", function() {
        $("#datos\\.neonatal\\.edad").val($(this).val());
        $("#datos\\.hipoglicemia\\.eg").val($(this).val());
        $("#datos\\.ajuste\\.eg").val($(this).val());
    });


    Highcharts.chart('grafico', {

        title: {
            text: 'M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274',
            align: "left",
            style: {
                "font-size": "12px"
            }
        },
        credits: {
            enabled: false
        },
        yAxis: {
            title: {
                text: 'Gramos'
            },
            tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                pointStart: 24
            }
        },
        colors: ['#ff3300', '#ff3300', '#000000'],
        series: [{
            name: 'Pct. 10',
            data: [640.6, 666, 728.2, 822.9, 945.7, 1092.2, 1258.2, 1439.2, 1630.8, 1828.7, 2028.6, 2226, 2416.7, 2596.2, 2760.2, 2904.2, 3024.1, 3115.3, 3173.5]
        }, {
            name: 'Pct. 90',
            data: [897.9, 963.3, 1070.6, 1214.6, 1390.1, 1592, 1815, 2053.8, 2303.4, 2558.5, 2813.9, 3064.4, 3304.7, 3529.8, 3734.4, 3913.2, 4061.2, 4173, 4243.5]
        }]
    });
});

$("#graficoEstandar").on('click', function() {
    RN = new RecienNacido($("#pesoRN").val(), $("#tallaRN").val(), $("#edadGestacional").val());
    if ($("#pesoRN").val() > 1) {

        if ($("#graficoEstandar").val() == 1) {
            $("#PesoPct").val("Pct. " + RN.pesoTemuco());
            $("#PesoEge").val(RN.pesoTemucoCondicion());
        } else {
            $("#PesoPct").val("Pct. " + RN.pesoChile());
            $("#PesoEge").val(RN.pesoChileCondicion());
        }

        $("#peso_eg_pct_regional").val(RN.pesoTemuco());
        $("#peso_eg_regional").val(RN.pesoTemucoCondicion());
    }

    if ($("#tallaRN").val() > 1) {
        if ($("#graficoEstandar").val() == 3) {
            $("#IpnPct").val("Pct. " + RN.ipnTemuco());
            $("#IpnEge").val(RN.ipnTemucoCondicion());
        } else {
            $("#IpnPct").val("Pct. " + RN.ipnChile());
            $("#IpnEge").val(RN.ipnChileCondicion());
        }
    }

    if (this.value == 0) {
        Highcharts.chart('grafico', {
            title: {
                text: 'M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274',
                align: "left",
                style: {
                    "font-size": "12px"
                }
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: 'Gramos'
                },
                tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    pointStart: 24
                }
            },
            colors: ['#ff3300', '#ff3300', '#000000'],
            series: [{
                name: 'Pct. 10',
                data: [640.6, 666, 728.2, 822.9, 945.7, 1092.2, 1258.2, 1439.2, 1630.8, 1828.7, 2028.6, 2226, 2416.7, 2596.2, 2760.2, 2904.2, 3024.1, 3115.3, 3173.5]
            }, {
                name: 'Pct. 90',
                data: [897.9, 963.3, 1070.6, 1214.6, 1390.1, 1592, 1815, 2053.8, 2303.4, 2558.5, 2813.9, 3064.4, 3304.7, 3529.8, 3734.4, 3913.2, 4061.2, 4173, 4243.5]
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
                    var eg = $("#edadGestacional").val();
                    var peso = $("#pesoRN").val();

                    if (eg > 24) {
                        for (i = 24; i <= (eg - 1); i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: parseInt(peso),
                        });
                        for (i = eg + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
    } else if (this.value == 1) {
        Highcharts.chart('grafico', {
            title: {
                text: 'Lagos y col. Rev. Chilena Obtet. Ginecol. 2009; 74(4)',
                align: "left",
                style: {
                    "font-size": "12px"
                }
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: 'Gramos'
                },
                tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540]
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    pointStart: 24
                }
            },
            colors: ['#ff3300', '#ff3300', '#000000'],
            series: [{
                name: 'Pct. 10',
                data: [600, 662, 739, 830, 938, 1064, 1208, 1373, 1565, 1756, 1970, 2192, 2415, 2628, 2820, 2978, 3089, 3120, 3123]
            }, {
                name: 'Pct. 90',
                data: [800, 960, 1139, 1337, 1551, 1781, 2022, 2272, 2527, 2781, 3031, 3270, 3494, 3699, 3878, 4030, 4150, 4236, 4287]
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
                    var eg = $("#edadGestacional").val();
                    var peso = $("#pesoRN").val();
                    if (eg > 24) {
                        for (i = 24; i <= (eg - 1); i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: parseInt(peso),
                        });
                        for (i = eg + 1; i <= 39; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
    } else if (this.value == 2) {
        Highcharts.setOptions({
            lang: {
                numericSymbols: ["k", "M", "G", "T", "P", "E"]
            }
        });
        Highcharts.chart('grafico', {
            title: {
                text: 'M. Milad. A y Col.; Rev. Chil. Pediatr. 2010; 81(3): 1264-274',
                align: "left",
                style: {
                    "font-size": "14px"
                }
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: '((peso / talla)^3)*100'
                },
                tickPositions: [1, 1.6, 2.2, 2.8, 3.4, 4],
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            colors: ['#ff3300', '#ff3300', '#000000'],
            plotOptions: {
                series: {
                    pointStart: 24
                }
            },
            series: [{
                name: 'Pct. 10',
                data: [1.79, 1.83, 1.87, 1.91, 1.95, 1.99, 2.04, 2.08, 2.12, 2.16, 2.2, 2.25, 2.29, 2.33, 2.37, 2.41, 2.45, 2.5, 2.54]
            }, {
                name: 'Pct. 90',
                data: [2.54, 2.57, 2.59, 2.62, 2.65, 2.68, 2.71, 2.74, 2.77, 2.8, 2.83, 2.86, 2.89, 2.92, 2.95, 2.98, 3.01, 3.04, 3.07]
            }, {
                type: "line",
                name: 'IPN',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var eg = $("#edadGestacional").val();
                    var ipn = $("#IPNRN").val();

                    if (eg > 24) {
                        for (i = 24; i <= (eg - 1); i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: parseFloat(ipn),
                        });
                        for (i = eg + 1; i <= 43; i++) {
                            data.push({
                                y: 0,
                            });
                        }
                    }
                    return data;
                }())
            }]
        });
    } else if (this.value == 3) {
        Highcharts.setOptions({
            lang: {
                numericSymbols: ["k", "M", "G", "T", "P", "E"]
            }
        });
        Highcharts.chart('grafico', {
            title: {
                text: 'Lagos y col. Rev. Chilena Obtet. Ginecol. 2009; 74(4)',
                align: "left",
                style: {
                    "font-size": "12px"
                }
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: '((peso / talla)^3)*100'
                },
                tickPositions: [1, 1.6, 2.2, 2.8, 3.4, 4],
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            colors: ['#ff3300', '#ff3300', '#000000'],
            plotOptions: {
                series: {
                    pointStart: 24
                }
            },
            series: [{
                name: 'Pct. 10',
                data: [1.95, 1.93, 1.92, 1.92, 1.94, 1.97, 2.01, 2.06, 2.11, 2.17, 2.23, 2.28, 2.33, 2.38, 2.41, 2.44, 2.44, 2.42, 2.39]
            }, {
                name: 'Pct. 90',
                data: [2.43, 2.44, 2.46, 2.49, 2.53, 2.57, 2.62, 2.68, 2.74, 2.79, 2.85, 2.9, 2.95, 2.99, 3.02, 3.04, 3.05, 3.04, 3.01]
            }, {
                type: "line",
                name: 'IPN',
                dashStyle: "Dot",
                marker: {
                    symbol: 'square'
                },
                lineWidth: 0,
                data: (function() {
                    var data = [];
                    var eg = $("#edadGestacional").val();
                    var ipn = $("#IPNRN").val();

                    if (eg > 24) {
                        for (i = 24; i <= (eg - 1); i++) {
                            data.push({
                                y: 0,
                            });
                        }
                        data.push({
                            y: parseFloat(ipn),
                        });
                        for (i = eg + 1; i <= 43; i++) {
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
});
$("#edadGestacional").change(function() {
    var max = parseInt($(this).attr('max'));
    var min = parseInt($(this).attr('min'));
    if ($(this).val() > max) {
        $(this).val(max);
    } else if ($(this).val() < min) {
        $(this).val(min);
    }
    $("#graficoEstandar").trigger("click");
});

$("#pesoRN").change(function() {
    var max = parseInt($(this).attr('max'));
    var min = parseInt($(this).attr('min'));
    if ($(this).val() > max) {
        $(this).val(max);
    } else if ($(this).val() < min) {
        $(this).val(min);
    }

    if ($("#tallaRN").val() > 1) {
        var valor = $(this).val() / (Math.pow($("#tallaRN").val(), 3));
        valor = valor * 100000;
        $("#IPNRN").val(valor.toFixed(2));
        $("#datos\\.neonatal\\.ipn").val(valor.toFixed(2));
    }
    $("#graficoEstandar").trigger("click");
});

$("#tallaRN").change(function() {
    var max = parseInt($(this).attr('max'));
    var min = parseInt($(this).attr('min'));
    if ($(this).val() > max) {
        $(this).val(max);
    } else if ($(this).val() < min) {
        $(this).val(min);
    }

    if ($("#pesoRN").val() > 1) {
        var valor = $("#pesoRN").val() / (Math.pow($("#tallaRN").val(), 3));
        valor = valor * 100000;
        $("#IPNRN").val(valor.toFixed(2));
        $("#datos\\.neonatal\\.ipn").val(valor.toFixed(2));
    }
    $("#graficoEstandar").trigger("click");
});

function verGraficoAjustePeso() {
    RN = new RecienNacido($("#pesoRN").val(), $("#tallaRN").val(), $("#edadGestacional").val());
    $('#opt1').trigger("click");
};


var RN = 0;
var Tablas = 0;
var varMama = 0;
var p90Pso = [];
var p10Pso = [];

$('#g3').click(function() {
    tipografico = 0;
    var apell = 0;
    if ($("#apellm").val() == 2) {
        apell = 1;
    } else {
        apell = $("#apellm").val();
    }
    varMama.edad = $("#em").val();
    varMama.apellido = apell;
    varMama.paridad = $("#pm").val();
    RN.sexo = $("#sn").val();
    var p90 = [0.2418159, -0.0038925, 0.0000168, -0.0130562, -0.0127872, -0.0034632, 0.0117179, 0.0021092, -0.9260631];
    var p10 = [-0.2639902, 0.0110356, -0.0001265, -0.0146183, -0.0134044, -0.0020684, 0.0092266, 0.0009001, 4.474501];
    for (i = 24; i < 43; i++) {
        x = i - 24;
        p90Pso[x] = Math.pow(10, ((i * p90[0]) + (Math.pow(i, 2) * p90[1]) + (Math.pow(i, 3) * p90[2]) + (p90[3] * $("#pm").val()) + (p90[4] * $("#sn").val()) + (p90[5] * apell) + (p90[6] * $("#imc").val()) + (p90[7] * $("#em").val()) + p90[8]));
        p10Pso[x] = Math.pow(10, ((i * p10[0]) + (Math.pow(i, 2) * p10[1]) + (Math.pow(i, 3) * p10[2]) + (p10[3] * $("#pm").val()) + (p10[4] * $("#sn").val()) + (p10[5] * apell) + (p10[6] * $("#imc").val()) + (p10[7] * $("#em").val()) + p10[8]));;
    }
    $("#PesoEgeSAj").val(RN.pesoTemuco());
    eg = RN.eg - 24;
    var tablas = new Tabla;
    var uno, dos, tres;
    uno = p90Pso[eg] - p10Pso[eg];
    dos = RN.peso - p10Pso[eg];
    tres = parseInt((80 / (uno)) * (dos)) + 10;
    $("#PesoEgeCAj").val(tres);
    $("#peso_eg_pct_ajustado").val(tres);
    if (tres < 10) {
        $("#peso_eg_ajustado").val("Pequeño");
    } else if (tres <= 90) {
        $("#peso_eg_ajustado").val("Adecuado");
    } else if (tres > 90) {
        $("#peso_eg_ajustado").val("Grande");
    }
    $("#tituloAjusteAlto").html("Percentil de Peso/Ege sin ajuste");
    $("#tituloAjusteBajo").html("Percentil de Peso/Ege con ajuste");
    $("#grafico\\.ajustado\\.title").html("Curva regional Peso/Ege ajustada por variables biológicas");
    Highcharts.chart('graficoAjustado', {
        title: {
            text: null
        },
        chart: {
            backgroundColor: "rgba(0, 0, 0, 0)"
        },
        yAxis: {
            title: {
                text: ''
            },
            tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540, 4980],
            tickColor: "#337ab7",
            labels: {
                enabled: true,
                style: {
                    color: '#337ab7',
                }
            }
        },
        colors: ['#ff3300', '#ff3300', '#ff3300'],
        xAxis: {
            categories: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
            labels: {
                enabled: true,
                style: {
                    color: '#337ab7',
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: "line",
            name: 'Pct. 10',
            marker: {
                enabled: false
            },
            dashStyle: (function() {
                var estilo = 'solid';
                if (RN.ajustePequeno == true) {
                    estilo = 'Dash';
                }
                return estilo;
            }()),
            color: (function() {
                var color = '#ff3300';

                if (RN.ajustePequeno == true) {
                    color = '#003d99';
                }
                return color;
            }()),
            data: (function() {
                var data = [];
                for (i = 24; i < 43; i++) {
                    x = i - 24;
                    data.push({
                        y: p10Pso[x],
                    });
                }
                return data;
            }())
        }, {
            type: "line",
            name: 'Pct. 90',
            marker: {
                enabled: false
            },
            dashStyle: (function() {
                var estilo = 'solid';

                if (RN.ajustePequeno == true) {
                    estilo = 'Dash';
                }

                return estilo;
            }()),
            color: (function() {
                var color = '#ff3300';

                if (RN.ajustePequeno == true) {
                    color = '#003d99';
                }
                return color;
            }()),
            data: (function() {
                var data = [];
                for (i = 24; i < 43; i++) {
                    x = i - 24;
                    data.push({
                        y: p90Pso[x],
                    });
                }
                return data;
            }())
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

                for (i = 24; i <= (RN.eg - 1); i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseInt(RN.peso),
                });
                for (i = RN.eg + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }]
    });
});


$('#tm').change(function() {
    varMama = new Mama($("#tm").val(), $("#pesom").val(), $("#em").val(), $('#apellm').val());
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
});

$('#pesom').change(function() {
    varMama = new Mama($("#tm").val(), $("#pesom").val(), $("#em").val(), $('#apellm').val());
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
});


$('#opt1').click(function() {
    $('#pm').val("1");
    $('#sn').val("1");
    $('#tm').val("149");
    $('#pesom').val("70");
    $('#em').val("6");
    $('#apellm').val("1");
    varMama = new Mama('149', '70', $("#em").val(), $('#apellm').val());
    varMama.talla = '149';
    varMama.peso = '70';
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
    RN.ajustePequeno = false;
    $("#tituloAjusteAlto").html("Percentil de Peso/Ege sin ajuste");
    $("#tituloAjusteBajo").html("Percentil de Peso/Ege con ajuste");
});

$('#opt2').click(function() {
    $('#pm').val("0");
    $('#sn').val("0");
    $('#tm').val("170");
    $('#pesom').val("91");
    $('#em').val("6");
    $('#apellm').val("0");
    $('#tm').change();
    varMama = new Mama('170', '91', $("#em").val(), $('#apellm').val());
    varMama.talla = '170';
    varMama.peso = '91';
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
    RN.ajustePequeno = false;
    $("#tituloAjusteAlto").html("Percentil de Peso/Ege sin ajuste");
    $("#tituloAjusteBajo").html("Percentil de Peso/Ege con ajuste");
});

$('#opt3').click(function() {
    $('#sn').val("1");
    $('#pm').val("1");
    $('#tm').val("149");
    $('#pesom').val("44");
    $('#em').val("1");
    $('#apellm').val("1");
    $('#tm').change();
    varMama = new Mama('149', '44', $("#em").val(), $('#apellm').val());
    varMama.talla = '149';
    varMama.peso = '44';
    $('#valorimc').val(varMama.imc());
    $('#imc').val(varMama.imcCondicion());
    RN.ajustePequeno = true;
    $("#tituloAjusteAlto").html("Percentil de Peso/Ege sin ajuste");
    $("#tituloAjusteBajo").html("Percentil de Peso/Ege con ajuste");
});

$("#opt4").click(function() {
    $("#grafico\\.ajustado\\.title").html("Visión simultanea curvas para condiciones extremas");
    var chart = Highcharts.chart('graficoAjustado', {
        title: {
            text: null
        },
        chart: {
            backgroundColor: "rgba(0, 0, 0, 0)"
        },
        yAxis: {
            title: {
                text: ''
            },
            tickPositions: [400, 860, 1320, 1780, 2240, 2700, 3160, 3620, 4080, 4540, 4980],
            tickColor: "#337ab7",
            labels: {
                enabled: true,
                style: {
                    color: '#337ab7',
                }
            }
        },
        colors: ['#ff3300', '#ff3300', '#ff3300'],
        xAxis: {
            categories: ['24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42'],
            labels: {
                enabled: true,
                style: {
                    color: '#337ab7',
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            type: "line",
            name: 'Pct. 10',
            marker: {
                enabled: false
            },
            dashStyle: (function() {
                estilo = 'Dash';
                return estilo;
            }()),
            color: (function() {
                color = '#003d99';
                return color;
            }())
        }, {
            type: "line",
            name: 'Pct. 90',
            marker: {
                enabled: false
            },
            dashStyle: (function() {
                estilo = 'Dash';
                return estilo;
            }()),
            color: (function() {
                color = '#003d99';
                return color;
            }())
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
                for (i = 24; i <= (RN.eg - 1); i++) {
                    data.push({
                        y: 0,
                    });
                }
                data.push({
                    y: parseInt(RN.peso),
                });
                for (i = RN.eg + 1; i <= 39; i++) {
                    data.push({
                        y: 0,
                    });
                }
                return data;
            }())
        }, {
            type: "line",
            name: 'Pct. 10',
            marker: {
                enabled: false
            },
            dashStyle: (function() {
                estilo = 'solid';
                return estilo;
            }()),
            color: (function() {
                color = '#ff3300';
                return color;
            }())
        }, {
            type: "line",
            name: 'Pct. 90',
            marker: {
                enabled: false
            },
            dashStyle: (function() {
                estilo = 'solid';
                return estilo;
            }()),
            color: (function() {
                color = '#ff3300';
                return color;
            }())
        }]
    });

    chart.series[3].setData([614.911761594748, 688.2409351621351, 775.8261252713739, 879.2765685663702, 1000.14921864602, 1139.7859521609507, 1299.0982567628794, 1478.2976958841446, 1676.578914688683, 1891.7742075463264, 2120.0143470672206, 2355.4478861757852, 2590.0872856319534, 2813.8600915466154, 3014.940876697811, 3180.418712251241, 3297.311672544965, 3353.875214095742, 3341.073271117301]);
    chart.series[4].setData([845.6847516567528, 1019.8791186895171, 1215.1332367429115, 1430.6549439464502, 1664.8783277732855, 1915.435357904167, 2179.1679353682594, 2452.1831280795927, 2729.951302092218, 3007.4436584447762, 3279.3026501881805, 3540.0361747837806, 3784.224559989481, 4006.728359825368, 4202.884932894939, 4368.682671927062, 4500.903482341126, 4597.226484532643, 4656.288703467283]);
    chart.series[0].setData([532.7720094718462, 596.3058912325178, 672.1914745777674, 761.8230347419276, 866.5495478697786, 987.5336430802754, 1125.5650517432623, 1280.827076703167, 1452.6219422120837, 1639.0715041903895, 1836.8233856299587, 2040.8077742235917, 2244.1041041316807, 2437.985397218539, 2612.205863734485, 2755.5792133386753, 2856.8576426002764, 2905.8654410796826, 2894.7735782926065]);
    chart.series[1].setData([711.5447194612854, 858.108887467441, 1022.3923706232943, 1203.7286574482926, 1400.800215862748, 1611.6146255636006, 1833.5147159659111, 2063.2250404407005, 2296.9344422785457, 2530.4117758437037, 2759.1492925532416, 2978.526031047196, 3183.981971581188, 3371.1928720061205, 3536.235665413285, 3675.7350538979554, 3786.9833875928784, 3868.0279180018288, 3917.721861188435]);

    $("#tituloAjusteAlto").html("Potencial de crecimiento alto");
    $("#tituloAjusteBajo").html("Potencial de crecimiento bajo");

    var p90x = [845.6847516567528, 1019.8791186895171, 1215.1332367429115, 1430.6549439464502, 1664.8783277732855, 1915.435357904167, 2179.1679353682594, 2452.1831280795927, 2729.951302092218, 3007.4436584447762, 3279.3026501881805, 3540.0361747837806, 3784.224559989481, 4006.728359825368, 4202.884932894939, 4368.682671927062, 4500.903482341126, 4597.226484532643, 4656.288703467283];
    var p10x = [614.911761594748, 688.2409351621351, 775.8261252713739, 879.2765685663702, 1000.14921864602, 1139.7859521609507, 1299.0982567628794, 1478.2976958841446, 1676.578914688683, 1891.7742075463264, 2120.0143470672206, 2355.4478861757852, 2590.0872856319534, 2813.8600915466154, 3014.940876697811, 3180.418712251241, 3297.311672544965, 3353.875214095742, 3341.073271117301];

    var p90 = [711.5447194612854, 858.108887467441, 1022.3923706232943, 1203.7286574482926, 1400.800215862748, 1611.6146255636006, 1833.5147159659111, 2063.2250404407005, 2296.9344422785457, 2530.4117758437037, 2759.1492925532416, 2978.526031047196, 3183.981971581188, 3371.1928720061205, 3536.235665413285, 3675.7350538979554, 3786.9833875928784, 3868.0279180018288, 3917.721861188435];
    var p10 = [532.7720094718462, 596.3058912325178, 672.1914745777674, 761.8230347419276, 866.5495478697786, 987.5336430802754, 1125.5650517432623, 1280.827076703167, 1452.6219422120837, 1639.0715041903895, 1836.8233856299587, 2040.8077742235917, 2244.1041041316807, 2437.985397218539, 2612.205863734485, 2755.5792133386753, 2856.8576426002764, 2905.8654410796826, 2894.7735782926065];

    var uno, dos, tres;

    uno = p90x[eg] - p10x[eg];
    dos = RN.peso - p10x[eg];
    tres = parseInt((80 / (uno)) * (dos)) + 10;
    $("#PesoEgeSAj").val(tres);

    uno = p90[eg] - p10[eg];
    dos = RN.peso - p10[eg];
    tres = parseInt((80 / (uno)) * (dos)) + 10;
    $("#PesoEgeCAj").val(tres);
});

function RecienNacido(peso = 0, talla = 0, eg = 40) {
    this.peso = peso;
    this.talla = talla;
    this.eg = eg;
    this.ipn = function ipn() {
        var valor = this.peso / (Math.pow(this.talla, 3));
        valor = valor * 100000;
        return valor.toFixed(1);
    };
    this.pesoChile = function pesoChile() {
        eg = this.eg - 24;
        var tablas = new Tabla;
        var uno = tablas.pct90PesoNacional[eg] - tablas.pct10PesoNacional[eg];
        var dos = this.peso - tablas.pct10PesoNacional[eg];
        return parseInt((80 / (uno)) * (dos)) + 10;
    };
    this.pesoTemuco = function pesoTemuco() {
        eg = this.eg - 24;
        var tablas = new Tabla;
        var uno = tablas.pct90PesoTemuco[eg] - tablas.pct10PesoTemuco[eg];
        var dos = this.peso - tablas.pct10PesoTemuco[eg];
        return parseInt((80 / (uno)) * (dos)) + 10;
    };
    this.pesoAjustado = 0;
    this.pesoChileCondicion = function pesoChileC() {
        eg = this.eg - 24;
        var tablas = new Tabla;
        if (this.peso < tablas.pct10PesoNacional[eg]) {
            return "Pequeño";
        } else if (this.peso <= tablas.pct90PesoNacional[eg]) {
            return "Adecuado";
        } else if (this.peso > tablas.pct90PesoNacional[eg]) {
            return "Grande";
        }
    };
    this.pesoTemucoCondicion = function pesoTemucoC() {
        eg = this.eg - 24;
        var tablas = new Tabla;

        if (this.peso < tablas.pct10PesoTemuco[eg]) {
            return "Pequeño";
        } else if (this.peso <= tablas.pct90PesoTemuco[eg]) {
            return "Adecuado";
        } else if (this.peso > tablas.pct90PesoTemuco[eg]) {
            return "Grande";
        }
    };
    this.pesoAjutadoCondicion = '';
    this.ipnChile = function ipnChile() {
        var eg = this.eg - 24;
        var tablas = new Tabla;
        var uno = tablas.pct90IpnNacional[eg] - tablas.pct10IpnNacional[eg];
        var dos = this.ipn() - tablas.pct10IpnNacional[eg];
        return parseInt((80 / (uno)) * (dos)) + 10;
    };
    this.ipnTemuco = function ipnTemuco() {
        var eg = this.eg - 24;
        var tablas = new Tabla;
        var uno = tablas.pct90IpnTemuco[eg] - tablas.pct10IpnTemuco[eg];
        var dos = this.ipn() - tablas.pct10IpnTemuco[eg];
        return parseInt((80 / (uno)) * (dos)) + 10;
    };
    this.ipnChileCondicion = function ipnChileC() {
        var eg = this.eg - 24;
        var tablas = new Tabla;

        if (this.ipn() < tablas.pct10IpnNacional[eg]) {
            return "Enflaquecido";
        } else if (this.ipn() <= tablas.pct90IpnNacional[eg]) {
            return "Eutrófico";
        } else if (this.ipn() > tablas.pct90IpnNacional[eg]) {
            return "RN Obeso";
        }
    };
    this.ipnTemucoCondicion = function ipnTemucoC() {
        var eg = this.eg - 24;
        var tablas = new Tabla;

        if (this.ipn() < tablas.pct10IpnTemuco[eg]) {
            return "Enflaquecido";
        } else if (this.ipn() <= tablas.pct90IpnTemuco[eg]) {
            return "Eutrófico";
        } else if (this.ipn() > tablas.pct90IpnTemuco[eg]) {
            return "RN Obeso";
        }
    };
    this.sexo = '';
    this.ajustePequeno = false;
};

function Tabla(plataforma) {
    this.plataforma = plataforma;
    this.pct10IpnNacional = [1.79, 1.83, 1.87, 1.91, 1.95, 1.99, 2.04, 2.08, 2.12, 2.16, 2.2, 2.25, 2.29, 2.33, 2.37, 2.41, 2.45, 2.5, 2.54];
    this.pct90IpnNacional = [2.54, 2.57, 2.59, 2.62, 2.65, 2.68, 2.71, 2.74, 2.77, 2.8, 2.83, 2.86, 2.89, 2.92, 2.95, 2.98, 3.01, 3.04, 3.07];
    this.pct10PesoNacional = [640.6, 666, 728.2, 822.9, 945.7, 1092.2, 1258.2, 1439.2, 1630.8, 1828.7, 2028.6, 2226, 2416.7, 2596.2, 2760.2, 2904.2, 3024.1, 3115.3, 3173.5];
    this.pct90PesoNacional = [897.9, 963.3, 1070.6, 1214.6, 1390.1, 1592, 1815, 2053.8, 2303.4, 2558.5, 2813.9, 3064.4, 3304.7, 3529.8, 3734.4, 3913.2, 4061.2, 4173, 4243.5];
    this.pct10IpnTemuco = [1.95, 1.93, 1.92, 1.92, 1.94, 1.97, 2.01, 2.06, 2.11, 2.17, 2.23, 2.28, 2.33, 2.38, 2.41, 2.44, 2.44, 2.42, 2.39];
    this.pct90IpnTemuco = [2.43, 2.44, 2.46, 2.49, 2.53, 2.57, 2.62, 2.68, 2.74, 2.79, 2.85, 2.9, 2.95, 2.99, 3.02, 3.04, 3.05, 3.04, 3.01];
    this.pct10PesoTemuco = [600, 662, 739, 830, 938, 1064, 1208, 1373, 1565, 1756, 1970, 2192, 2415, 2628, 2820, 2978, 3089, 3120, 3123];
    this.pct90PesoTemuco = [800, 960, 1139, 1337, 1551, 1781, 2022, 2272, 2527, 2781, 3031, 3270, 3494, 3699, 3878, 4030, 4150, 4236, 4287];
    this.pct10PesoAjustado = [];
    this.pct90PesoAjustado = [];
};

function Mama(talla, peso, edad, apellido) {
    this.paridad = 0
    this.talla = talla;
    this.peso = peso;
    this.edad = edad;
    this.apellido = apellido;
    this.imc = function imc() {
        var valor = ((this.peso / (Math.pow(this.talla, 2))) * 10000);
        return valor.toFixed(1);
    };
    this.imcCondicion = function imcC() {
        if (this.imc() < 20) {
            return 1
        } else if (this.imc() < 25) {
            return 2
        } else if (this.imc() <= 30) {
            return 3
        } else if (this.imc() > 30) {
            return 4
        }
    };
};

$(document).ready(function() {
    $(window).on('hashchange', function() {
        let hash = document.location.hash;

        if (hash == "#recienacido") {
            displayElement("recienacido");
        } else if (hash == "#ajustepeso") {
            displayElement("ajustepeso");
            verGraficoAjustePeso();
        } else if (hash == "#pdfviebox") {
            displayElement("pdfviebox");
        } else if (hash == "#neonatal") {
            displayElement("neonatal");
        } else if (hash == "#hipoglicemia") {
            displayElement("hipoglicemia");
        } else if (hash == "#postnatal") {
            displayElement("postnatal");
            obtenerPartos();
        }
     else if (hash == "#db") {
        displayElement("db");
        databasePartos();
    }
    });

    $("#pdfnacionalview").on("click", function() {
        $("#pdfview").attr('src', "https://servidor.crecimientofetal.cl/pdf/gnacional.pdf");
    });

    $("#pdfregionalview").on("click", function() {
        $("#pdfview").attr('src', "https://servidor.crecimientofetal.cl/pdf/gregional.pdf");
    });
});

function displayElement(div_id) {
    $('#neonatal').hide();
    $('#ajustepeso').hide();
    $('#pdfviebox').hide();
    $('#recienacido').hide();
    $('#postnatal').hide();
    $('#hipoglicemia').hide();
    $('#db').hide();
    $('#' + div_id).show();
}

$(document).ready(function() {
    //cargar los select con los valores numéricos
    var pesoNeonatal
    var pesoMaterno

    //cargar input de semanas que empiezan con 25
    for (i = 20; i < 43; i++) {
        $("#edadGestacional").append('<option value="' + i + '">' + i + ' semanas</option>');
        $("#datos\\.neonatal\\.edad").append('<option value="' + i + '">' + i + ' semanas</option>');
        $('#edadGestacional option[value="40"]').prop('selected', true);
        $('#datos\\.neonatal\\.edad option[value="40"]').prop('selected', true);
    }
    //cargar inputs de edad materna
    for (i = 10; i < 51; i++) {
        $("#edad_materna").append('<option value="' + i + '">' + i + ' años</option>');
    }
    //cargar inputs de Peso
    for (i = 35; i < 130; i++) {
        $("#peso").append('<option value="' + i + '">' + i + ' kg.</option>');
    }
    //cargar inputs de talla
    for (i = 135; i < 190; i++) {
        $("#talla").append('<option value="' + i + '">' + i + ' cms.</option>');
        $("#tm").append('<option value="' + i + '">' + i + ' cms.</option>');
        $("#tallaMaterna").append('<option value="' + i + '">' + i + ' cms.</option>');
    }

    $('#talla option[value="149"]').prop('selected', true);
    $('#tm option[value="149"]').prop('selected', true);
    $('#tallaMaterna option[value="149"]').prop('selected', true);

    //cargar inputs de peso materno
    for (i = 35; i < 140; i++) {
        $("#pesoMaterno").append('<option value="' + i + '">' + i + ' kg</option>');
        $("#pesom").append('<option value="' + i + '">' + i + ' kg</option>');
    }

    $('#pesom option[value="70"]').prop('selected', true);
    $('#pesoMaterno option[value="70"]').prop('selected', true);

    $("#pesoRN").on("keydown", function(e) {
        var text = $(this).val();

        switch (e.which) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                if (text.toString().length > 3) {
                    return false;
                }
                break;
            case 13:
            case 8:
            case 37:
            case 39:
                break;
            default:
                return false;
        }
    });

    $("#tallaRN").on("keydown", function(e) {
        var text = $(this).val();

        switch (e.which) {
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                if (text.toString().length > 2) {
                    return false;
                }
                break;
            case 13:
            case 8:
            case 37:
            case 39:
                break;
            default:
                return false;
        }
    });
});