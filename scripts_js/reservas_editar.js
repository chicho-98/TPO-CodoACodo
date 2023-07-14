console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
    data() {
    return {
        // id:0,
        // nombre:"",
        // imagen:"",
        // stock:0,
        // precio:0,
        id: 0,
        cine: "",
        email: "",
        entradas: 2,
        fecha: "",
        hora: 0,
        nombre: "",
        pelicula: "",
        url:'https://agustinrodriguez.pythonanywhere.com/reservas/'+id,
    }
    },
    methods: {
        fetchData(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.id=data.id;
            this.cine= data.cine;
            this.email=data.email;
            this.entradas=data.entradas;
            this.fecha=data.fecha;
            this.hora=data.hora;
            this.nombre = data.nombre;
            this.pelicula=data.pelicula;
    })
    .catch(err => {
        console.error(err);
        this.error=true
    })
    },
    modificar() {
        let reserva = {
            cine:this.cine,
            email:this.email,
            entradas:this.entradas,
            fecha:this.fecha,
            hora:this.hora,
            nombre:this.nombre,
            pelicula:this.pelicula
    }
    var options = {
        body: JSON.stringify(reserva),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(this.url, options)
    .then(function () {
    alert("Registro modificado")
        window.location.href = "/adm_reservas.html";
    })
    .catch(err => {
    console.error(err);
        alert("Error al Modificar")
    })
    }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')