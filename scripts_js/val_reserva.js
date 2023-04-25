function changeCantEntradas() 
{
    let total = document.forms["form_reserva"]["cantidad_entradas"].value * 1500;
    document.getElementById("total_pelicula").innerHTML = "Total: $" + total;
}