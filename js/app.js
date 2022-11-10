//Variables
const resultado = document.querySelector('#resultado')
const year = document.querySelector('#year')
const max = new Date().getFullYear()
const min = max - 10

//Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    //Muestra los autos al cargar
    mostrarAutors()

    //Llena las opciones de años
    llenarSelector()
})


//Funcionaes 
function mostrarAutors(){
    autos.forEach(auto =>{
        const autoHTML = document.createElement('p') 
        
        const {marca, modelo, year, puertas, transmision, precio, color} = auto
        autoHTML.textContent= `
            ${marca} ${modelo} - ${year} - ${puertas} - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
            
            `

        //Insertar en el HTML
        resultado.appendChild(autoHTML)
    })
}

//Genera los años del select
function llenarSelector(){
    for (let index = max; index >= min; index--) {
        const opcion = document.createElement('option')
        opcion.vale = index
        opcion.textContent = index
        year.appendChild(opcion) //Agrega las opciones de año al select
    }
}

