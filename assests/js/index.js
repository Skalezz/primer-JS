


// Scope Global

const precio = 400000
const cantidadElement = document.querySelector(".cantidad");
const cantidadValue = document.querySelector(".cantidad").innerHTML;


// Scope de funcion

function calcularPrecioTotal(cantidad, precio) {
    
    const amount = Number(cantidad);
    const price = Number(precio);

    const total = price * amount;

    return Intl.NumberFormat("en-ES", {
        style: "currency",
        currency: "CLP",
        currencySign: "accounting",
        maximumFractionDigits: 2,
    }).format(total);
}


function aumentar () {
    const precioTotalElement = document.querySelector(".valor-total");
    const cantidadElement = document.querySelector(".cantidad");
    const cantidadValue = Number (document.querySelector(".cantidad").innerHTML);
    const nuevaCantidad = cantidadValue + 1;

    cantidadElement.innerHTML = nuevaCantidad;

    const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
    
    precioTotalElement.innerHTML = valorTotal;
}


function restar () {
    const precioTotalElement = document.querySelector(".valor-total");
    const cantidadElement = document.querySelector(".cantidad");
    const cantidadValue = Number (document.querySelector(".cantidad").innerHTML);
    
    if (cantidadValue > 0) {
        const nuevaCantidad = cantidadValue - 1;
        cantidadElement.innerHTML = nuevaCantidad;
        
        const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
        precioTotalElement.innerHTML = valorTotal;
    }
}


const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio