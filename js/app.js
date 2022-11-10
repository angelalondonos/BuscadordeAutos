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
    mostrarAutors(autos)

    //Llena las opciones de años
    llenarSelector()
})

//Event listener para los select de búsqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})

year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
})

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = parseInt(e.target.value)
    filtrarAuto()
})

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = parseInt(e.target.value)
    filtrarAuto()
})

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
})

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})

color.addEventListener('change', e=>{
    datosBusqueda.color = e.target.value
    filtrarAuto()
})

//Funcionaes 
function mostrarAutors(autos){

    limpiarHTML() //Elimina el HTML previo

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

//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
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
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    //console.log (resultado)
    if(resultado.length){
        mostrarAutors(resultado)
    }else{
        noResultado()
    }

}

function noResultado(){

    limpiarHTML()

    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = ' No hay resultado, intenta con otros terminos de búsqueda'
    resultado.appendChild(noResultado)

}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }
    return auto
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto
}
