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

    //pacientes paso 1
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
    });

    //Tipo de exámen paso 6
    $("#boton\\.volver\\.step\\.five").on("click", function(){
        window.location.href = "#consulta";
    });

    //ecografía de primer trimestre
    $("#boton\\.eco\\.prim\\.nuevo").on("click", function(){
        $("#boton\\.eco\\.prim\\.nuevo").addClass("d-none");
        $("#boton\\.eco\\.prim\\.modificar").addClass("d-none");
        $("#boton\\.eco\\.prim\\.guardar").removeClass("d-none");
        $("#boton\\.eco\\.prim\\.cancelar").removeClass("d-none");
        $("#boton\\.eco\\.prim\\.eliminar").addClass("d-none");
        $("#lcn").attr("readonly", false);
        $("#saco").attr("readonly", false);
        $("#graficoLcn").addClass("d-none");
        $("#graficoSaco").addClass("d-none");
        $("#fum-cuatro").attr("readonly", true);
        $("#semanasEcoPrim").attr("readonly", true);
        $("#diasEcoPrim").attr("readonly", true);
        $("#modalPreInfEcoPrimTrim").addClass("d-none");
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
});