$(document).ready(function() {
        $("#registroForm").submit(function(event) {
            event.preventDefault();
            $(".error").text("");
            let isValid = true;
            
            let nombre = $("#nombre").val().trim();
            let usuario = $("#usuario").val().trim();
            let email = $("#email").val().trim();
            let password = $("#password").val();
            let confirmPassword = $("#confirmPassword").val();
            let fechaNacimiento = new Date($("#fechaNacimiento").val());
            let hoy = new Date();
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            let mes = hoy.getMonth() - fechaNacimiento.getMonth();
            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
                edad--;
            }
            
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
            
            if (!nombre) {
                $("#errorNombre").text("El nombre es obligatorio");
                isValid = false;
            }
            if (!usuario) {
                $("#errorUsuario").text("El usuario es obligatorio");
                isValid = false;
            }
            if (!emailRegex.test(email)) {
                $("#errorEmail").text("Correo electrónico no válido");
                isValid = false;
            }
            if (!passwordRegex.test(password)) {
                $("#errorPassword").text("La contraseña debe tener entre 6 y 18 caracteres, al menos un número y una mayúscula");
                isValid = false;
            }
            if (password !== confirmPassword) {
                $("#errorConfirmPassword").text("Las contraseñas no coinciden");
                isValid = false;
            }
            if (edad < 13) {
                $("#errorFechaNacimiento").text("Debes tener al menos 13 años");
                isValid = false;
            }
            
            if (isValid) {
                alert("Formulario enviado con éxito");
                this.submit();
            }
        });
    });