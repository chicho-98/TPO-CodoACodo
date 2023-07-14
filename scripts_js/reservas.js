const { createApp } = Vue
createApp({
data() {
    return {
        producto:[],
        url:'https://agustinrodriguez.pythonanywhere.com/reservas', 
        error:false,
        cargando:true,

    }
    },
        methods: {
        fetchData(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.reservas=data;
            this.cargando=false
    })
        .catch(err => {
            console.error(err);
            this.error=true
    })
    },
        eliminar(reserva) {
        const url = this.url+'/' + reserva;
        var options = {
        method: 'DELETE',
    }
        fetch(url, options)
        .then(res => res.text()) // or res.json()
        .then(res => {
        location.reload();
    })
    },
        grabar(){
            let producto = {
            nombre:this.nombre,
            precio: this.precio,
            stock: this.stock,
            imagen:this.imagen
        }
        var options = {
        body:JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
        }
    fetch(this.url, options)
    .then(function () {
        alert("Registro grabado")
        window.location.href = "../templates/productos.html";
    })
    .catch(err => {
        console.error(err);
        alert("Error al Grabarr")
    })
    }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')