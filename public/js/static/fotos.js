var RUTPACIENTE = "";
$(document).ready(function(){
    $("#id-paciente").on("change", function(){
      RUTPACIENTE = $(this).val();
    
$.get( "http://192.168.1.198/img/data/" + $(this).val() + "/img.json"
)
  .done(function(data) {
    $("#fotosDicom").html(" ");
    $.each(data, function(i, item) {
        $("#fotosDicom").append( "<img class='rounded float-left' alt='200x200' style='width: 200px; height: 200px;' src='http://192.168.1.198/img/data/" + RUTPACIENTE + "/" + data[i].img +"'>" );
    });
  })
  .fail(function() {
    $("#fotosDicom").html("<p>No hay imágenes para esta paciente</p>");
  });

    });
});


<div class="form-check">
    <label class="form-check-label">
      <input type="checkbox" class="form-check-input">
      Check me out
    </label>
  </div>


