document.getElementById("registroForm").addEventListener("submit", async function(event){
    event.preventDefault();
    const form = document.getElementById("registroForm");
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const response = await fetch("http://localhost:3000/usuarios",
        {method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({nombre, correo, contrasena})
    });
    const data = await response.json();
    alert(data.mensaje);
    form.reset();
    
} );