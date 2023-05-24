function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }else{
        return (false)
    }
}

function validateForm() {
    let x = document.getElementById("nombre").value;
    let valid = true;
    document.getElementById("consulta_enviada").style.display = 'none';
    if (x == "") {
        document.getElementById("nombre").style.borderColor = 'red';
        document.getElementById("complete_nombre").style.display = 'contents';
        valid = false;
    }else{
        document.getElementById("nombre").style.borderColor = '';
        document.getElementById("complete_nombre").style.display = 'none';
        valid = !valid ? false : true;
    }
    x = document.getElementById("email").value;
    if (x == "") {
        document.getElementById("email").style.borderColor = 'red';
        document.getElementById("complete_email").style.display = 'contents';
        valid = false;
    }else{
        if (ValidateEmail(x)) {
            document.getElementById("email").style.borderColor = '';
            document.getElementById("complete_email").style.display = 'none';
            valid = !valid ? false : true;
        }else{
            document.getElementById("email").style.borderColor = 'red';
            document.getElementById("complete_email").style.display = 'contents';
            valid = false;
        }
    }    
    x = document.getElementById("comentario").value;
    if (x == "") {
        document.getElementById("comentario").style.borderColor = 'red';
        document.getElementById("complete_consulta").style.display = 'contents';
        valid = false;
    }else{
        document.getElementById("comentario").style.borderColor = '';
        document.getElementById("complete_consulta").style.display = 'none';
        valid = !valid ? false : true;
    }    
    return valid;
}

function sendEmail() {
    if (validateForm()) {
        Email.send({
                SecureToken : " f968f179-5009-4429-bb0e-9a255baa67a3",
                To : 'sguastoni@hotmail.com',
                From : "sguastoni@hotmail.com",
                Subject: "Consulta de páginca Codo a Codo",
                Body: "Nombre: " + document.getElementById("nombre").value +
                    "Email: "+ document.getElementById("email").value +
                    "Consulta: " + document.getElementById("comentario").value
            })
            .then(function (message) {
                document.getElementById("nombre").value = '';
                document.getElementById("nombre").style.borderColor = '';
                document.getElementById("complete_nombre").style.display = 'none';
                document.getElementById("email").value = '';
                document.getElementById("email").style.borderColor = '';
                document.getElementById("complete_email").style.display = 'none';
                document.getElementById("comentario").value = '';
                document.getElementById("comentario").style.borderColor = '';
                document.getElementById("complete_consulta").style.display = 'none';
                document.getElementById("consulta_enviada").style.display = 'contents';
            });
    }
}
