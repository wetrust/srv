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
});

//funciones de botones
$(document).ready(function(){
    $(window).on('hashchange', function(){
        onHashChange();
    });
})



