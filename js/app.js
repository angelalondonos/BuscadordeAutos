//Variables
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

//Contenedor para los resultados
const resultado = document.querySelector('#resultado')
const max = new Date().getFullYear()
const min = max - 10


//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    //Muestra los autos al cargar
    mostrarAutors()

    //Llena las opciones de años
    llenarSelector()
})

//Event listener para los select de búsqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})

year.addEventListener('change', e =>{
    datosBusqueda.year = e.target.value
})

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value
})

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value
})

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = e.target.value
})

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value
})

color.addEventListener('change', e=>{
    datosBusqueda.color = e.target.value
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

//Función que filtra en base a la búsqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca)
    console.log (resultado)

}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto
}
