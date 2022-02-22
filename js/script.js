// function mostrarPopup(){
//     window.alert("Hello World")
// }


$(document).ready(function() {

    /* Configuração Carrosel da Prof Jessica que não esta funcionando... 16/02/2022 */
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()

    setInterval(slide, 2000)
    function slide(){
        if($(".banner-ativo").next().length ){
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
        }else{
            $(".banner-ativo").removeClass().hide()
            $("#carrosel img:eq(0)").addClass("banner-ativo").show()
        }
    }



    /* Meu Carrosel que não esta funcionando... 16/02/2022 */
    // $("#carrosel img:eq(0)").addclass("banner-ativo").show()
    // setInterval(slide, 2000)
    // function slide(){
    //     if($(".banner-ativo").next().length){
    //         $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    //     }else{
    //         $(".banner-ativo").removeClass().hide()
    //         $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    //     }
    // }

    $("#barras").click(function(){
        $("#menu").toggleClass("#menu-ativo")

        // if($("#menu").hasClass("#menu-ativo")){
        //             $("#menu").removeClass("#menu-ativo")
        // } else{
        //             $("#menu").addClass("menu-ativo")
        // }

    })
})

let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}
