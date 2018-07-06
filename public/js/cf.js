$(document).ready(function(){

    loadPais();
    loadRegion();
    loadHospital();
    loadUu();
    loadProfesional();
    loadProfesionalReferente();
    loadLugarControl();
    loadLugarParto();
    loadPatologiaObstetrica();
    loadPatologiaObstetrica();
    loadMotivoExamen();
    loadPrevision();
    loadEmail();

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

    $("#nuevoHospital").on("click", function(){
        $("#table\\.hospital").addClass("d-none");
        $("#form\\.hospital").removeClass("d-none");
        $("#input\\.hospital").val("");
        $("#nuevoHospital").addClass("d-none");
        $("#guardarHospital").removeClass("d-none");
        $("#cancelarHospital").removeClass("d-none");
        $("#eliminarHospital").addClass("d-none");
    });
    
    $("#editarHospital").on("click", function(){

    });

    $("#guardarHospital").on("click", function(){
        var dataHospital = {
            hospital_name: $("#input\\.hospital").val()
        }

        $.post(appUrl + "configuracion/savehospital", dataHospital).done(function (data) {
            $("#table\\.hospital").removeClass("d-none");
            $("#form\\.hospital").addClass("d-none");
            $("#input\\.hospital").val("");
            $("#nuevoHospital").removeClass("d-none");
            $("#guardarHospital").addClass("d-none");
            $("#cancelarHospital").addClass("d-none");
            loadHospital();
        });
    });

    $("#cancelarHospital").on("click", function(){
        $("#table\\.hospital").removeClass("d-none");
        $("#form\\.hospital").addClass("d-none");
        $("#input\\.hospital").val("");
        $("#nuevoHospital").removeClass("d-none");
        $("#guardarHospital").addClass("d-none");
        $("#cancelarHospital").addClass("d-none");
        loadHospital();
    });

    $("#eliminarHospital").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Hospital");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el Hospital seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.hospital").children();
            var hospital_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    hospital_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarhospital/" + hospital_id, function( data ) {
                loadHospital();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevoUu").on("click", function(){
        $("#table\\.uu").addClass("d-none");
        $("#form\\.uu").removeClass("d-none");
        $("#input\\.uu").val("");
        $("#nuevoUu").addClass("d-none");
        $("#guardarUu").removeClass("d-none");
        $("#cancelarUu").removeClass("d-none");
        $("#eliminarUu").addClass("d-none");
    });
    
    $("#editarUu").on("click", function(){

    });

    $("#guardarUu").on("click", function(){
        var dataUu = {
            uu_name: $("#input\\.uu").val()
        }

        $.post(appUrl + "configuracion/saveuu", dataUu).done(function (data) {
            $("#table\\.uu").removeClass("d-none");
            $("#form\\.uu").addClass("d-none");
            $("#input\\.uu").val("");
            $("#nuevoUu").removeClass("d-none");
            $("#guardarUu").addClass("d-none");
            $("#cancelarUu").addClass("d-none");
            loadUu();
        });
    });

    $("#cancelarUu").on("click", function(){
        $("#table\\.uu").removeClass("d-none");
        $("#form\\.uu").addClass("d-none");
        $("#input\\.uu").val("");
        $("#nuevoUu").removeClass("d-none");
        $("#guardarUu").addClass("d-none");
        $("#cancelarUu").addClass("d-none");
        loadUu();
    });

    $("#eliminarUu").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Unidad Ultrasonográfica");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar la Unidad Ultrasonográfica seleccionada?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.uu").children();
            var uu_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    uu_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminaruu/" + uu_id, function( data ) {
                loadUu();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevoProfesional").on("click", function(){
        $("#table\\.profesional").addClass("d-none");
        $("#form\\.profesional").removeClass("d-none");
        $("#input\\.profesional").val("");
        $("#nuevoProfesional").addClass("d-none");
        $("#guardarProfesional").removeClass("d-none");
        $("#cancelarProfesional").removeClass("d-none");
        $("#eliminarProfesional").addClass("d-none");
    });
    
    $("#editarProfesional").on("click", function(){

    });

    $("#guardarProfesional").on("click", function(){
        var dataProfesional = {
            profesional_name: $("#input\\.profesional").val()
        }

        $.post(appUrl + "configuracion/saveprofesional", dataProfesional).done(function (data) {
            $("#table\\.profesional").removeClass("d-none");
            $("#form\\.profesional").addClass("d-none");
            $("#input\\.profesional").val("");
            $("#nuevoProfesional").removeClass("d-none");
            $("#guardarProfesional").addClass("d-none");
            $("#cancelarProfesional").addClass("d-none");
            loadProfesional();
        });
    });

    $("#cancelarProfesional").on("click", function(){
        $("#table\\.profesional").removeClass("d-none");
        $("#form\\.profesional").addClass("d-none");
        $("#input\\.profesional").val("");
        $("#nuevoProfesional").removeClass("d-none");
        $("#guardarProfesional").addClass("d-none");
        $("#cancelarProfesional").addClass("d-none");
        loadProfesional();
    });

    $("#eliminarProfesional").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Profesional Ecografista");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el Profesional Ecografista seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.profesional").children();
            var profesional_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    profesional_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarprofesional/" + profesional_id, function( data ) {
                loadProfesional();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevoProfesionalReferente").on("click", function(){
        $("#table\\.profesional\\.referente").addClass("d-none");
        $("#form\\.profesional\\.referente").removeClass("d-none");
        $("#input\\.profesional\\.referente").val("");
        $("#nuevoProfesionalReferente").addClass("d-none");
        $("#guardarProfesionalReferente").removeClass("d-none");
        $("#cancelarProfesionalReferente").removeClass("d-none");
        $("#eliminarProfesionalReferente").addClass("d-none");
    });
    
    $("#editarProfesionalReferente").on("click", function(){

    });

    $("#guardarProfesionalReferente").on("click", function(){
        var dataProfesional = {
            profesional_name: $("#input\\.profesional\\.referente").val()
        }

        $.post(appUrl + "configuracion/saveprofesionalreferente", dataProfesional).done(function (data) {
            $("#table\\.profesional\\.referente").removeClass("d-none");
            $("#form\\.profesional\\.referente").addClass("d-none");
            $("#input\\.profesional\\.referente").val("");
            $("#nuevoProfesionalReferente").removeClass("d-none");
            $("#guardarProfesionalReferente").addClass("d-none");
            $("#cancelarProfesionalReferente").addClass("d-none");
            loadProfesionalReferente();
        });
    });

    $("#cancelarProfesionalReferente").on("click", function(){
        $("#table\\.profesional\\.referente").removeClass("d-none");
        $("#form\\.profesional\\.referente").addClass("d-none");
        $("#input\\.profesional\\.referente").val("");
        $("#nuevoProfesionalReferente").removeClass("d-none");
        $("#guardarProfesionalReferente").addClass("d-none");
        $("#cancelarProfesionalReferente").addClass("d-none");
        loadProfesionalReferente();
    });

    $("#eliminarProfesionalReferente").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Profesional Referente");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el Profesional Referente seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.profesional\\.referente").children();
            var profesional_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    profesional_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarprofesionalreferente/" + profesional_id, function( data ) {
                loadProfesionalReferente();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevoLugarControl").on("click", function(){
        $("#table\\.lugar").addClass("d-none");
        $("#form\\.lugar").removeClass("d-none");
        $("#input\\.lugar").val("");
        $("#nuevoLugarControl").addClass("d-none");
        $("#guardarLugarControl").removeClass("d-none");
        $("#cancelarLugarControl").removeClass("d-none");
        $("#eliminarLugarControl").addClass("d-none");
    });
    
    $("#editarLugarControl").on("click", function(){

    });

    $("#guardarLugarControl").on("click", function(){
        var dataLugar = {
            lcp_name: $("#input\\.lugar").val()
        }

        $.post(appUrl + "configuracion/savelugarcontrol", dataLugar).done(function (data) {
            $("#table\\.lugar").removeClass("d-none");
            $("#form\\.lugar").addClass("d-none");
            $("#input\\.lugar").val("");
            $("#nuevoLugarControl").removeClass("d-none");
            $("#guardarLugarControl").addClass("d-none");
            $("#cancelarLugarControl").addClass("d-none");
            loadLugarControl();
        });
    });

    $("#cancelarLugarControl").on("click", function(){
        $("#table\\.lugar").removeClass("d-none");
        $("#form\\.lugar").addClass("d-none");
        $("#input\\.lugar").val("");
        $("#nuevoLugarControl").removeClass("d-none");
        $("#guardarLugarControl").addClass("d-none");
        $("#cancelarLugarControl").addClass("d-none");
        loadLugarControl();
    });

    $("#eliminarLugarControl").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Profesional Referente");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el Profesional Referente seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.lugar").children();
            var lugar_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    lugar_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarlugarcontrol/" + lugar_id, function( data ) {
                loadLugarControl();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevoLugarParto").on("click", function(){
        $("#table\\.parto").addClass("d-none");
        $("#form\\.parto").removeClass("d-none");
        $("#input\\.parto").val("");
        $("#nuevoLugarParto").addClass("d-none");
        $("#guardarLugarParto").removeClass("d-none");
        $("#cancelarLugarParto").removeClass("d-none");
        $("#eliminarLugarParto").addClass("d-none");
    });
    
    $("#editarLugarParto").on("click", function(){

    });

    $("#guardarLugarParto").on("click", function(){
        var dataLugar = {
            lugar_name: $("#input\\.parto").val()
        }

        $.post(appUrl + "configuracion/savelugarparto", dataLugar).done(function (data) {
            $("#table\\.parto").removeClass("d-none");
            $("#form\\.parto").addClass("d-none");
            $("#input\\.parto").val("");
            $("#nuevoLugarParto").removeClass("d-none");
            $("#guardarLugarParto").addClass("d-none");
            $("#cancelarLugarParto").addClass("d-none");
            loadLugarParto();
        });
    });

    $("#cancelarLugarParto").on("click", function(){
        $("#table\\.parto").removeClass("d-none");
        $("#form\\.parto").addClass("d-none");
        $("#input\\.parto").val("");
        $("#nuevoLugarParto").removeClass("d-none");
        $("#guardarLugarParto").addClass("d-none");
        $("#cancelarLugarParto").addClass("d-none");
        loadLugarParto();
    });

    $("#eliminarLugarParto").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Lugar del Parto");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el lugar de parto seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.parto").children();
            var lugar_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    lugar_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarlugarparto/" + lugar_id, function( data ) {
                loadLugarParto();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevoPatologiaObstetrica").on("click", function(){
        $("#table\\.obstetrica").addClass("d-none");
        $("#form\\.obstetrica").removeClass("d-none");
        $("#input\\.obstetrica").val("");
        $("#nuevoPatologiaObstetrica").addClass("d-none");
        $("#guardarPatologiaObstetrica").removeClass("d-none");
        $("#cancelarPatologiaObstetrica").removeClass("d-none");
        $("#eliminarPatologiaObstetrica").addClass("d-none");
    });
    
    $("#editarPatologiaObstetrica").on("click", function(){});

    $("#guardarPatologiaObstetrica").on("click", function(){
        var dataPatologia = {
            patologia_name: $("#input\\.obstetrica").val()
        }

        $.post(appUrl + "configuracion/savepatologiaobstetrica", dataPatologia).done(function (data) {
            $("#table\\.obstetrica").removeClass("d-none");
            $("#form\\.obstetrica").addClass("d-none");
            $("#input\\.obstetrica").val("");
            $("#nuevoPatologiaObstetrica").removeClass("d-none");
            $("#guardarPatologiaObstetrica").addClass("d-none");
            $("#cancelarPatologiaObstetrica").addClass("d-none");
            loadPatologiaObstetrica();
        });
    });

    $("#cancelarPatologiaObstetrica").on("click", function(){
        $("#table\\.obstetrica").removeClass("d-none");
        $("#form\\.obstetrica").addClass("d-none");
        $("#input\\.obstetrica").val("");
        $("#nuevoPatologiaObstetrica").removeClass("d-none");
        $("#guardarPatologiaObstetrica").addClass("d-none");
        $("#cancelarPatologiaObstetrica").addClass("d-none");
        loadPatologiaObstetrica();
    });

    $("#eliminarPatologiaObstetrica").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Patologia Materna");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar la Patología Materna seleccionada?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.obstetrica").children();
            var patologia_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    patologia_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarpatologiaobstetrica/" + patologia_id, function( data ) {
                loadPatologiaObstetrica();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevoTipoExamen").on("click", function(){
        $("#table\\.tipo").addClass("d-none");
        $("#form\\.tipo").removeClass("d-none");
        $("#input\\.tipo").val("");
        $("#nuevoTipoExamen").addClass("d-none");
        $("#guardarTipoExamen").removeClass("d-none");
        $("#cancelarTipoExamen").removeClass("d-none");
        $("#eliminarTipoExamen").addClass("d-none");
    });
    
    $("#editarTipoExamen").on("click", function(){ });

    $("#guardarTipoExamen").on("click", function(){
        var dataTipo = {
            tipo_name: $("#input\\.tipo").val()
        }

        $.post(appUrl + "configuracion/savetipoexamen", dataTipo).done(function (data) {
            $("#table\\.tipo").removeClass("d-none");
            $("#form\\.tipo").addClass("d-none");
            $("#input\\.tipo").val("");
            $("#nuevoTipoExamen").removeClass("d-none");
            $("#guardarTipoExamen").addClass("d-none");
            $("#cancelarTipoExamen").addClass("d-none");
            loadTipoExamen();
        });
    });

    $("#cancelarTipoExamen").on("click", function(){
        $("#table\\.tipo").removeClass("d-none");
        $("#form\\.tipo").addClass("d-none");
        $("#input\\.tipo").val("");
        $("#nuevoTipoExamen").removeClass("d-none");
        $("#guardarTipoExamen").addClass("d-none");
        $("#cancelarTipoExamen").addClass("d-none");
        loadTipoExamen();
    });

    $("#eliminarTipoExamen").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Tipo de examen");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el Tipo de examen seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.tipo").children();
            var tipo_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    tipo_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminartipoexamen/" + tipo_id, function( data ) {
                loadTipoExamen();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevoMotivoExamen").on("click", function(){
        $("#table\\.motivo").addClass("d-none");
        $("#form\\.motivo").removeClass("d-none");
        $("#input\\.motivo").val("");
        $("#nuevoMotivoExamen").addClass("d-none");
        $("#guardarMotivoExamen").removeClass("d-none");
        $("#cancelarMotivoExamen").removeClass("d-none");
        $("#eliminarMotivoExamen").addClass("d-none");
    });
    
    $("#editarMotivoExamen").on("click", function(){

    });

    $("#guardarMotivoExamen").on("click", function(){
        var dataMotivo = {
            motivo_name: $("#input\\.motivo").val()
        }

        $.post(appUrl + "configuracion/savemotivoexamen", dataMotivo).done(function (data) {
            $("#table\\.motivo").removeClass("d-none");
            $("#form\\.motivo").addClass("d-none");
            $("#input\\.motivo").val("");
            $("#nuevoMotivoExamen").removeClass("d-none");
            $("#guardarMotivoExamen").addClass("d-none");
            $("#cancelarMotivoExamen").addClass("d-none");
            loadMotivoExamen();
        });
    });

    $("#cancelarMotivoExamen").on("click", function(){
        $("#table\\.motivo").removeClass("d-none");
        $("#form\\.motivo").addClass("d-none");
        $("#input\\.motivo").val("");
        $("#nuevoMotivoExamen").removeClass("d-none");
        $("#guardarMotivoExamen").addClass("d-none");
        $("#cancelarMotivoExamen").addClass("d-none");
        loadMotivoExamen();
    });

    $("#eliminarMotivoExamen").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Profesional Referente");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el Profesional Referente seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.motivo").children();
            var motivo_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    motivo_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarmotivoexamen/" + motivo_id, function( data ) {
                loadMotivoExamen();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevaPrevision").on("click", function(){
        $("#table\\.prevision").addClass("d-none");
        $("#form\\.prevision").removeClass("d-none");
        $("#input\\.prevision").val("");
        $("#nuevaPrevision").addClass("d-none");
        $("#guardarPrevision").removeClass("d-none");
        $("#cancelarPrevision").removeClass("d-none");
        $("#eliminarPrevision").addClass("d-none");
    });
    
    $("#editarPrevision").on("click", function(){

    });

    $("#guardarPrevision").on("click", function(){
        var dataPrevision = {
            prevision_name: $("#input\\.prevision").val()
        }

        $.post(appUrl + "configuracion/saveprevision", dataPrevision).done(function (data) {
            $("#table\\.prevision").removeClass("d-none");
            $("#form\\.prevision").addClass("d-none");
            $("#input\\.prevision").val("");
            $("#nuevaPrevision").removeClass("d-none");
            $("#guardarPrevision").addClass("d-none");
            $("#cancelarPrevision").addClass("d-none");
            loadPrevision();
        });
    });

    $("#cancelarPrevision").on("click", function(){
        $("#table\\.prevision").removeClass("d-none");
        $("#form\\.prevision").addClass("d-none");
        $("#input\\.prevision").val("");
        $("#nuevaPrevision").removeClass("d-none");
        $("#guardarPrevision").addClass("d-none");
        $("#cancelarPrevision").addClass("d-none");
        loadPrevision();
    });

    $("#eliminarPrevision").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Profesional Referente");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el Profesional Referente seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.prevision").children();
            var prevision_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    prevision_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/eliminarprevision/" + prevision_id, function( data ) {
                loadPrevision();
            });

            $("#modal\\.generico\\.action").remove();
            $("#modal\\.generico\\.container").modal("hide");
        });
        $("#modal\\.generico\\.container").modal("show");
    });

    $("#nuevoEmail").on("click", function(){
        $("#table\\.email").addClass("d-none");
        $("#form\\.email").removeClass("d-none");
        $("#input\\.email").val("");
        $("#nuevoEmail").addClass("d-none");
        $("#guardarEmail").removeClass("d-none");
        $("#cancelarEmail").removeClass("d-none");
        $("#eliminarEmail").addClass("d-none");
    });
    
    $("#editarEmail").on("click", function(){

    });

    $("#guardarEmail").on("click", function(){
        var dataEmail = {
            email_text: $("#input\\.email").val()
        }

        $.post(appUrl + "configuracion/setemails", dataEmail).done(function (data) {
            $("#table\\.email").removeClass("d-none");
            $("#form\\.email").addClass("d-none");
            $("#input\\.email").val("");
            $("#nuevoEmail").removeClass("d-none");
            $("#guardarEmail").addClass("d-none");
            $("#cancelarEmail").addClass("d-none");
            loadEmail();
        });
    });

    $("#cancelarEmail").on("click", function(){
        $("#table\\.email").removeClass("d-none");
        $("#form\\.email").addClass("d-none");
        $("#input\\.email").val("");
        $("#nuevoEmail").removeClass("d-none");
        $("#guardarEmail").addClass("d-none");
        $("#cancelarEmail").addClass("d-none");
        loadEmail();
    });

    $("#eliminarEmail").on("click", function(){
        $("#modal\\.generico\\.title").html("Eliminar Email");
        $("#modal\\.generico\\.body").html("<h5>¿Está seguro de eliminar el correo electrónico seleccionado?</h5>");
        var btnElement = "<button type='button' class='btn btn-primary' id='modal.generico.action'>Si</button>";
        $("#modal\\.generico\\.fotter").prepend(btnElement);
        $("#modal\\.generico\\.action").on("click", function(){
            var tableChild =  $("#table\\.body\\.email").children();
            var email_id = 0;
            $.each(tableChild, function(key,des){
                if ($(des).hasClass("table-active") == true){
                    email_id = $(des).children("th").data("id");
                }
            });

            $.get( appUrl + "configuracion/delemail/" + email_id, function( data ) {
                loadEmail();
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

function loadHospital(){
    $.get( appUrl + "configuracion/hospital", function( data ) {
        $("#table\\.body\\.hospital").empty();
        $("#eliminarHospital").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.hospital_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.hospital_name +"</td></tr>";
            $("#table\\.body\\.hospital").append(strTable);
            $("#eliminarRegion").removeClass("d-none");
        });
        $("#table\\.body\\.hospital tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadUu(){
    $.get( appUrl + "configuracion/uu", function( data ) {
        $("#table\\.body\\.uu").empty();
        $("#eliminarUu").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.uu_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.uu_name +"</td></tr>";
            $("#table\\.body\\.uu").append(strTable);
            $("#eliminarUu").removeClass("d-none");
        });
        $("#table\\.body\\.uu tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadProfesional(){
    $.get( appUrl + "configuracion/profesional", function( data ) {
        $("#table\\.body\\.profesional").empty();
        $("#eliminarProfesional").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.profesional_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.profesional_name +"</td></tr>";
            $("#table\\.body\\.profesional").append(strTable);
            $("#eliminarProfesional").removeClass("d-none");
        });
        $("#table\\.body\\.profesional tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadProfesionalReferente(){
    $.get( appUrl + "configuracion/profesionalreferente", function( data ) {
        $("#table\\.body\\.profesional\\.referente").empty();
        $("#eliminarProfesionalReferente").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.profesional_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.profesional_name +"</td></tr>";
            $("#table\\.body\\.profesional\\.referente").append(strTable);
            $("#eliminarProfesionalReferente").removeClass("d-none");
        });
        $("#table\\.body\\.profesional\\.referente tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadLugarControl(){
    $.get( appUrl + "configuracion/lugarcontrol", function( data ) {
        $("#table\\.body\\.lugar").empty();
        $("#eliminarLugarControl").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.lcp_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.lcp_name +"</td></tr>";
            $("#table\\.body\\.lugar").append(strTable);
            $("#eliminarLugarControl").removeClass("d-none");
        });
        $("#table\\.body\\.lugar tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadLugarParto(){
    $.get( appUrl + "configuracion/lugarparto", function( data ) {
        $("#table\\.body\\.parto").empty();
        $("#eliminarLugarParto").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.lugar_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.lugar_name +"</td></tr>";
            $("#table\\.body\\.parto").append(strTable);
            $("#eliminarLugarParto").removeClass("d-none");
        });
        $("#table\\.body\\.parto tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadPatologiaObstetrica(){
    $.get( appUrl + "configuracion/patologiaobstetrica", function( data ) {
        $("#table\\.body\\.obstetrica").empty();
        $("#eliminarPatologiaObstetrica").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.patologia_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.patologia_name +"</td></tr>";
            $("#table\\.body\\.obstetrica").append(strTable);
            $("#eliminarPatologiaObstetrica").removeClass("d-none");
        });
        $("#table\\.body\\.obstetrica tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadTipoExamen(){
    $.get( appUrl + "configuracion/tipoexamen", function( data ) {
        $("#table\\.body\\.tipo").empty();
        $("#eliminarTipoExamen").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.tipo_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.tipo_name +"</td></tr>";
            $("#table\\.body\\.tipo").append(strTable);
            $("#eliminarTipoExamen").removeClass("d-none");
        });
        $("#table\\.body\\.tipo tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadMotivoExamen(){
    $.get( appUrl + "configuracion/motivoexamen", function( data ) {
        $("#table\\.body\\.motivo").empty();
        $("#eliminarMotivoExamen").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.motivo_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.motivo_name +"</td></tr>";
            $("#table\\.body\\.motivo").append(strTable);
            $("#eliminarMotivoExamen").removeClass("d-none");
        });
        $("#table\\.body\\.motivo tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadPrevision(){
    $.get( appUrl + "configuracion/prevision", function( data ) {
        $("#table\\.body\\.prevision").empty();
        $("#eliminarPrevision").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.prevision_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.prevision_name +"</td></tr>";
            $("#table\\.body\\.prevision").append(strTable);
            $("#eliminarPrevision").removeClass("d-none");
        });
        $("#table\\.body\\.prevision tr").on('click',function(){
            activateTr(this);
        });
    });
}

function loadEmail(){
    $.get( appUrl + "configuracion/getemails", function( data ) {
        $("#table\\.body\\.email").empty();
        $("#eliminarEmail").addClass("d-none");
        $.each(data, function (key, des) {
            var strTable = "<tr><th scope='row' data-id='" + des.email_id + "'>" + (parseInt(key) + parseInt(1)) +"</th><td>" + des.email_text +"</td></tr>";
            $("#table\\.body\\.email").append(strTable);
            $("#eliminarEmail").removeClass("d-none");
        });
        $("#table\\.body\\.email tr").on('click',function(){
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