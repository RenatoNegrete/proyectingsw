const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const btnRegistrarse = document.getElementById("registro")
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");
const btnIniSesion = document.getElementById("inicioSesion");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
})

btnRegistrarse.addEventListener("click", e => {
  e.preventDefault(); 

  formRegister.classList.add("hide");
  formLogin.classList.remove("hide");

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const contra = document.getElementById("contra").value;
  const tipoUsuario = document.getElementById("tipoUsuario").value;

  fetch('/validar', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, correo, contra, tipoUsuario })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al enviar los datos');
      }
      return response.json();
  })
  .then(data => {
      console.log('Datos enviados correctamente:', data);
  })
  .catch(error => {
      console.error('Error en la solicitud:', error);
  });
});

btnIniSesion.addEventListener("click", e => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const contrasenia = document.getElementById("contrasenia").value;

  fetch('/ingresar', {
      method: 'POST',
      body: JSON.stringify({ email: email, contrasenia: contrasenia }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json()) // Parsea la respuesta JSON
    .then(data => {
      if (data.success) {
        // Comprueba si el usuario es admin y redirige según el tipo de usuario
        if (data.admin) {
          window.location.href = "/emprendimientos"; // Redirige a la página de emprendimientos
        } else {
          window.location.href = "/index2"; // Redirige a otra página si no es admin
        }
      } else {
        console.error('Usuario no encontrado. Verifica tu correo electrónico y contraseña.');
      }
    })
    .catch(error => console.error('Error en la solicitud:', error));
});