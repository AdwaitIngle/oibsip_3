var celcius = document.getElementById('cel')
var fahrenheit = document.getElementById('far')
var kelvin = document.getElementById('kel')

function cel_all(){
    var far_op = (parseFloat(celcius.value)  * 9/5)+32
    var kel_op = (parseFloat(celcius.value)+273)
    fahrenheit.value = parseFloat(far_op.toFixed(2))
    kelvin.value = parseFloat(kel_op.toFixed(2))
}

function far_all(){
    var cel_op = (parseFloat(fahrenheit.value) -32)*5/9
    var kel_op = ((parseFloat(fahrenheit.value)-32)*5/9) + 273
    celcius.value = parseFloat(cel_op.toFixed(2))
    kelvin.value = parseFloat(kel_op.toFixed(2))
}

function kel_all(){
    var far_op = ((parseFloat(kelvin.value) -273) * 9/5)+32
    var cel_op = (parseFloat(kelvin.value)-273)
    fahrenheit.value = parseFloat(far_op.toFixed(2))
    celcius.value = parseFloat(cel_op.toFixed(2))
}