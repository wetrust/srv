$(document).ready(function(){

    loadPais();

    $("#nuevoPais").on("click", function(){
        $("#table\\.pais").addClass("d-none");
        $("#form\\.pais").removeClass("d-none");
        $("#input\\.pais").val("");
        $("#nuevoPais").addClass("d-none");
        $("#guardarPais").removeClass("d-none");
        $("#cancelarPais").removeClass("d-none");
    });
    
    $("#editarPais").on("click", function(){

    });

    $("#guardarPais").on("click", function(){
        var dataPais = {
            pais_name: $("#input\\.pais").val()
        }

        $.post(appUrl + "configuracion/savepais", dataPais).done(function (data) {
            $("#table\\.pais").removeClass("d-none");
            $("#form\\.pais").addClass("d-none");
            $("#input\\.pais").val("");
            $("#nuevoPais").removeClass("d-none");
            $("#guardarPais").addClass("d-none");
            $("#cancelarPais").addClass("d-none");
            loadPais();
        });
    });

    $("#cancelarPais").on("click", function(){
        $("#table\\.pais").removeClass("d-none");
        $("#form\\.pais").addClass("d-none");
        $("#input\\.pais").val("");
        $("#nuevoPais").removeClass("d-none");
        $("#guardarPais").addClass("d-none");
        $("#cancelarPais").addClass("d-none");
        loadPais();
    });

    $("#eliminarPais").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Pais");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el País seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal\\.generico\\.action'>Si</button>";
        $("#modal\\.generico\\.fotter").preppend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.pais").children();
            var pais_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("active") == true){
                    pais_id = $(des).children("th").html();
                }
            });

            $.get( appUrl + "configuracion/eliminarpais/" + pais_id, function( data ) {
                $("#table\\.body\\.pais").empty();
                $.each(data, function (key, des) {
                    var strTable = "<tr><th scope='row'>" + key +1 +"</th><td>" + des.pais_name +"</td></tr>";
                    $("#table\\.body\\.pais").append(strTable);
                });
            });
        });
        $("#modal\\.generico\\.container").modal("show");
    });
});

function loadPais(){
    $.get( appUrl + "configuracion/pais", function( data ) {
        $("#table\\.body\\.pais").empty();
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row'>" + key +1 +"</th><td>" + des.pais_name +"</td></tr>";
            $("#table\\.body\\.pais").append(strTable);
        });
    });
}