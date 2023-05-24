function sendSubmit()
{
    //aquí se comunicaría con backend y espera respuesta. 
    //como no hay backend muestro mensaje y permito el submit.
    alert("Su reserva fue procesada. Gracias! vuelva pronto.");
    return true;
}
function changeCantEntradas() 
{
    let total = document.forms["form_reserva"]["cantidad_entradas"].value * 1500;
    document.getElementById("total_pelicula").innerHTML = "Total: $" + total;
}
