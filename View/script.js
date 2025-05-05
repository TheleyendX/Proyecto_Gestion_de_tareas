document.getElementById("RegistroForm").addEventListener("submit", async function(event){
    event.preventDefault();
    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");
    const response = await fetch("http://localhost:3000/usuarios",
        {method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({nombre, correo, contrasena})
    });
    const data = await response.json();
    alert(data.mensaje);
} );