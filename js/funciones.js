


    var cambio = document.querySelectorAll('.menu-platillo')

    for(var i=0;i<cambio.length;i++){
        console.log(cambio[i])
       
        cambio[i].addEventListener("mouseover",cambiar);
        cambio[i].addEventListener("mouseleave",normal);
    }
    
    function cambiar(){
        let imagen= this.getAttribute("data-image")
        console.log(imagen) 
        this.style.transition ="all 1s"
        this.style.background = "url("+imagen+") repeat right center" 
        this.style.backgrou
    }
    function normal(){
        this.style.background="whitesmoke";
        this.style.transition ="all .5s"
    }


    
    
   

    


