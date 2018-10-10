$(document).ready(function(){
    cargarTabla();
});

function cargarTabla(){
    var solicitud = {
        accion: "tabla"
    };

    $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
        $("#contenedor\\.tarjetas").empty();
        $("#boton\\.editar").addClass("d-none");
        $.each(data, function(i, item) {
            let fila = '<div class="card mb-1"><div class="card-body p-3"><div class="row apunte" data-id="' + item["apunte_id"] + '"><div class="col text-truncate"><p class="my-2">' + item["apunte_person"] +'</p></div><div class="col-4 d-none"><button type="button" data-id="' + item["apunte_id"] + '" class="btn btn-outline-warning px-3 eliminar"><i class="fas fa-trash"></i></button></div></div></div></div>';
            $("#contenedor\\.tarjetas").append(fila);
        });

        $(".apunte").on("mouseenter", function(){
            $(this).children(".col-4").removeClass("d-none");
            $(this).parent().parent().addClass("bg-info").addClass("text-white");
        }).on("mouseleave", function(){
            $(this).children(".col-4").addClass("d-none");
            $(this).parent().parent().parent().children().each(function(i){
                $(this).removeClass("bg-info").removeClass("text-white");;
            });
        }).on("click",function(){

            if ($("#formulario\\.paciente").is(':disabled') == false){
                $("#dialog\\.delete").remove();
                $("#dialog\\.title").html('Guardar cambios')
                $("#dialog\\.body").html('<p class="text-center">¿Quiere guardar los cambios efectuados antes de salir?')
                $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" >Guardar</button>');
                $("#dialog\\.view").modal("show");

                $("#dialog\\.delete").on("click", function(){
                    guardarAutomatico();
                    $("#dialog\\.view").modal("hide");
                    $("#formulario\\.fecha").attr("disabled", true);
                    $("#formulario\\.hora").attr("disabled", true);
                    $("#formulario\\.participante").attr("disabled", true);
                    $("#formulario\\.paciente").attr("disabled", true);
                    $("#formulario\\.actividad").attr("disabled", true);
                    $("#formulario\\.lugar").attr("disabled", true);
                    $("#formulario\\.cancelacion").attr("disabled", true);
                    $('#formulario\\.fcancelacion').attr("disabled", true);
                    $("#formulario\\.valor").attr("disabled", true);
                    $("#formulario\\.comentarios").attr("disabled", true);
                    $("#formulario\\.palabras").attr("disabled", true);
                });
            }
            else{
                $("#boton\\.editar").removeClass("d-none");
                let apunte_id = $(this).data("id");

                var solicitud = {
                    accion: "apunte",
                    id: apunte_id
                };

                $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                    $("#formulario\\.id").val(data.apunte_id);
                    $("#formulario\\.fecha").val(data.apunte_date);
                    $('#formulario\\.fecha').datepicker('setValue', data.apunte_date);
                    $("#formulario\\.hora").val(data.apunte_hour);
                    $("#formulario\\.participante").val(data.apunte_participante);
                    $("#formulario\\.paciente").val(data.apunte_person);
                    $("#formulario\\.actividad").val(data.apunte_activity);
                    $("#formulario\\.lugar").val(data.apunte_location);
                    $("#formulario\\.cancelacion").val(data.apunte_cancellation);
                    $("#formulario\\.fcancelacion").val(data.apunte_fcancellation);
                    $('#formulario\\.fcancelacion').datepicker('setValue', data.apunte_fcancellation);
                    $("#formulario\\.valor").val(data.apunte_cost);
                    $("#formulario\\.comentarios").val(data.apunte_text);
                    $("#formulario\\.palabras").val(data.apunte_keywords);
                });
            }
        });

        $(".eliminar").on("click",function(){
            let apunte_id = $(this).data("id");
            $("#dialog\\.delete").remove();
            $("#dialog\\.title").html('Eliminar Evento')
            $("#dialog\\.body").html('<p class="text-center">¿Está seguro que desea eliminar el evento seleccionado?')
            $("#dialog\\.footer").append('<button type="button" class="btn btn-danger" id="dialog.delete" data-id="' + apunte_id + '">Eliminar</button>');

            $("#dialog\\.delete").on("click", function(){
                let apunte_id = $(this).data("id");
                var solicitud = {
                    accion: "eliminar",
                    id: apunte_id
                };

                $.post("https://servidor.crecimientofetal.cl/apuntes/api", solicitud).done(function(data){
                    cargarTabla();
                    $("#dialog\\.delete").remove();
                    $("#dialog\\.view").modal("hide");

                    var dateTime = new Date();
                    var day = ("0" + dateTime.getDate()).slice(-2);
                    var month = ("0" + (dateTime.getMonth() + 1)).slice(-2);

                    $("#formulario\\.id").val("").attr("disabled", true);
                    $("#formulario\\.fecha").val(day + "/" + month + "/" + dateTime.getFullYear()).attr("disabled", true);
                    $('#formulario\\.fecha').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
                    $("#formulario\\.hora").val("").attr("disabled", true);
                    $("#formulario\\.participante").val("").attr("disabled", true);
                    $("#formulario\\.paciente").val("").attr("disabled", true);
                    $("#formulario\\.actividad").val("").attr("disabled", true);
                    $("#formulario\\.lugar").val("").attr("disabled", true);
                    $("#formulario\\.cancelacion").val("").attr("disabled", true);
                    $("#formulario\\.fcancelacion").val(day + "/" + month + "/" + dateTime.getFullYear()).attr("disabled", true);
                    $('#formulario\\.fcancelacion').datepicker('setValue', day + "/" + month + "/" + dateTime.getFullYear());
                    $("#formulario\\.valor").val("0").attr("disabled", true);
                    $("#formulario\\.comentarios").val("").attr("disabled", true);
                    $("#formulario\\.palabras").val("").attr("disabled", true);
                });
            });

            $("#dialog\\.view").modal("show");
        });
    });
}