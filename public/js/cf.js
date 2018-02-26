$(document).ready(function(){

    loadPais();
    loadRegion();

    $("#nuevoPais").on("click", function(){
        $("#table\\.pais").addClass("d-none");
        $("#form\\.pais").removeClass("d-none");
        $("#input\\.pais").val("");
        $("#nuevoPais").addClass("d-none");
        $("#guardarPais").removeClass("d-none");
        $("#cancelarPais").removeClass("d-none");
        $("#eliminarPais").addClass("d-none");
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
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.pais").children();
            var pais_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    pais_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarpais/" + pais_id, function( data ) {
                loadPais();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevaRegion").on("click", function(){
        $("#table\\.region").addClass("d-none");
        $("#form\\.region").removeClass("d-none");
        $("#input\\.region").val("");
        $("#nuevaRegion").addClass("d-none");
        $("#guardarRegion").removeClass("d-none");
        $("#cancelarRegion").removeClass("d-none");
        $("#eliminarRegion").addClass("d-none");
    });
    
    $("#editarRegion").on("click", function(){

    });

    $("#guardarRegion").on("click", function(){
        var dataRegion = {
            region_name: $("#input\\.region").val()
        }

        $.post(appUrl + "configuracion/saveregion", dataRegion).done(function (data) {
            $("#table\\.region").removeClass("d-none");
            $("#form\\.region").addClass("d-none");
            $("#input\\.region").val("");
            $("#nuevaRegion").removeClass("d-none");
            $("#guardarRegion").addClass("d-none");
            $("#cancelarRegion").addClass("d-none");
            loadRegion();
        });
    });

    $("#cancelarRegion").on("click", function(){
        $("#table\\.region").removeClass("d-none");
        $("#form\\.region").addClass("d-none");
        $("#input\\.region").val("");
        $("#nuevaRegion").removeClass("d-none");
        $("#guardarRegion").addClass("d-none");
        $("#cancelarRegion").addClass("d-none");
        loadRegion();
    });

    $("#eliminarRegion").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Region");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar la Region seleccionada?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.region").children();
            var region_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    region_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarregion/" + region_id, function( data ) {
                loadRegion();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });
});

function loadPais(){
    $.get( appUrl + "configuracion/pais", function( data ) {
        $("#table\\.body\\.pais").empty();
        $("#eliminarPais").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.pais_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.pais_name +"</td></tr>";
            $("#table\\.body\\.pais").append(strTable);
            $("#eliminarPais").removeClass("d-none");
        });
        $("#table\\.body\\.pais tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadRegion(){
    $.get( appUrl + "configuracion/region", function( data ) {
        $("#table\\.body\\.region").empty();
        $("#eliminarRegion").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.region_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.region_name +"</td></tr>";
            $("#table\\.body\\.region").append(strTable);
            $("#eliminarRegion").removeClass("d-none");
        });
        $("#table\\.body\\.region tr").on('click',function(){
            activateTr(this);
        });
    });
}

function activateTr(element){
	$.each( $(element).parent().children(), function( i, val ) {
		$( val ).removeClass( 'table-active');
	});
	$(element).addClass('table-active');
}