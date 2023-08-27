let abrir_menu = document.getElementById("menu_abrir")
abrir_menu.addEventListener("click",()=>{
    abrir_menu.style.display="none";
    document.getElementById("menu_cerrar").style.display="inline"
    // con este document cambiamos la disturbucion para crear el espacio para los nuevos elementos que se van a mostrar
    document.body.style.gridTemplateColumns = "15% 85%"

    // con esta funcion mostramos el resto del menu que no se estaba mostrando en consola
    let display_menu = document.querySelectorAll(".i__span")

    for(let i =0; i< display_menu.length; i++){
        display_menu[i].style.display="inline"
    }
    // aqui termina la funcion

    // ahora necesitamos cambiar el estilo de la etiquta anchor para cambiar la forma en como se muestra el flex
    let readjust_elements = document.querySelectorAll(".elemento__url")
    for(let i =0; i< readjust_elements.length; i++){
        readjust_elements[i].style.justifyContent="flex-start"
    }
    // cambio la posicion de la x para cerrar el menu
    
    let chamge_x = document.querySelectorAll(".firstdiv__menu")
    for(let i =0; i< chamge_x.length; i++){
        chamge_x[i].style.justifyContent="flex-start"
    }

})

let cerrar_menu =document.getElementById("menu_cerrar")

cerrar_menu.addEventListener("click",()=>{
    abrir_menu.style.display="inline";
    document.getElementById("menu_cerrar").style.display="none"
    document.body.style.gridTemplateColumns = "5% 95%"
    //con esta funcion escondemos los elementos nuevamente
    let display_menu = document.querySelectorAll(".i__span")

    for(let i =0; i< display_menu.length; i++){
        display_menu[i].style.display="none"
    }
    // aqui termina la funcion

    // ahora devolvemos el posiionamiento al tamaño original
    let readjust_elements = document.querySelectorAll(".elemento__url")
    for(let i =0; i< readjust_elements.length; i++){
        readjust_elements[i].style.justifyContent="center"
    }
    // cambio la posicion del logo de menu cuando el menu se cierre 
    
    let chamge_x = document.querySelectorAll(".firstdiv__menu")
    for(let i =0; i< chamge_x.length; i++){
        chamge_x[i].style.justifyContent="center"
    }
})
