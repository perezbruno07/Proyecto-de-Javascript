// Se definen valores para cada operación
var valorProducto = 0;
var descuentoAsosiado = 0;
var porcentajeIva = 0;
var valorIva = 0;
var total = 0;
// Funcion para calcular el descuento del 30% si el usuario pone un monto mayor a 15000, si es bajo de eso el descuento es 0, luego restado el descuento al valor inicial se saca el % del iva (19% en este caso), y se da el monto final.
function calcular() {
    valorProducto = document.getElementById('valorProducto').value;
    if (valorProducto >= 15000) {
        descuentoAsosiado = (valorProducto * 0.30);
        document.getElementById('descuentoAsosiado').value = descuentoAsosiado;
    } else {
        descuentoAsosiado = 0;
        document.getElementById('descuentoAsosiado').value = descuentoAsosiado;
    }
    valorIva = ((valorProducto - descuentoAsosiado) * 0.19);
    document.getElementById('ivaProducto').value = valorIva;
    total = (parseInt(valorProducto) - parseInt(descuentoAsosiado)) + parseInt(valorIva);
    document.getElementById('total').value = total;
    console.log(total);
}