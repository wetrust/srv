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

    //pacientes paso 3
    $("#boton\\.volver\\.step\\.three").on("click", function(){
        $("#step-one").removeClass("d-none");
        $("#step-three").addClass("d-none");
    });
})

//funciones de los inputs
$(document).ready(function(){
    //al cambiar la fum en input pacientes
    $("#input\\.paciente\\.fum").on("change", function(){
        localStorage.fum = $(this).val();
        localStorage.fee = $("#fee-dos").val();
        localStorage.eg = calcularEG();
        var semanas = Math.trunc(localStorage.eg);
        var dias =  Math.trunc((localStorage.eg - Math.trunc(localStorage.eg)) * 10);
    
        $("#input\\.paciente\\.eg\\.dias").val(dias);
        $("#input\\.paciente\\.eg\\.semanas").val(semanas);
     });
});

