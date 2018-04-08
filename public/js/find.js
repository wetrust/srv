$(document).ready(function(){
    $("#buscar\\.pacientes\\.last\\.view").on("change", function(){
        let check = $(this).is(':checked');

        if (check == true){
            $("#buscar\\.pacientes\\.last\\.view\\.text").html("Si");
            $("#buscar\\.pacientes\\.last\\.view\\.container").removeClass("d-none");
        }
        else{
            $("#buscar\\.pacientes\\.last\\.view\\.text").html("No");
            $("#buscar\\.pacientes\\.last\\.view\\.container").addClass("d-none");
        }
    });
})