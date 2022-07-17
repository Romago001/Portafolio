const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombredeusuario = document.getElementById('nombre');
  const direcciónEmail = document.getElementById('email');
  if (nombre.value === "") {
    alert("Escribe tu nombre de usuario.");
    nombre.focus();
    return false;
  }
    
  if (email.value === "") {
    alert("Escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }
  
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

