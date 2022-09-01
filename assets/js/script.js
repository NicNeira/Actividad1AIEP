
$(document).ready(function(){
    // similar a querySelectorAll()
    // param es un strign con selector CSS
    console.log("Funciona!");
    $("#navBar").load("components/navBar.html");
    $("#footer").load("components/footer.html");

    // $("#btn-contacto").on("click", function(){
    //     // .val para recuperar el valor de los elementos (input)
    //     const email = $("#exampleInputEmail1").val();
    //     const password =$("#exampleInputPassword1").val();

    //     console.dir({email,password});

    // });

});