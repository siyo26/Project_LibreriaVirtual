
let contenedor_catalogo=document.getElementById("contenedor_catalogo")
console.log(contenedor_catalogo)




fetch("catalogo.json")
.then((respuesta)=>respuesta.json())
.then((datos)=>{
    console.log(datos)
    console.log(datos.catalogo[0].Titulo)

    datos.catalogo.forEach(element => {
        console.log(element.titulo)
        console.log(element.cover)

        const ContenedorCreado=document.createElement("div")

        ContenedorCreado.innerHTML=`   
            <img src="${element.cover}">        
            <h4>${element.titulo}</h4> 
        `
        ;
        contenedor_catalogo.append(ContenedorCreado)
        ContenedorCreado.setAttribute('class','card')
    });
}
)