function deploySignInForm(){
    // document.getElementById("divSignIn").setAttribute(hidden,"false");
    document.getElementById("divSignIn").hidden= false;
    document.getElementById("divLogIn").hidden= true;
}

function deployLogInForm(){
    // document.getElementById("divLogIn").setAttribute(hidden,"false");
    document.getElementById("divLogIn").hidden= false;
    document.getElementById("divSignIn").hidden= true;
}

function logIn(){
    let usuario = document.forms["logIn"]["user"].value;
    let contrasena = document.forms["logIn"]["pwd"].value;
    if ((usuario == "") || (contrasena="")){
        alert("No deje casillas en blanco");
        return false;
    }
    window.alert("Hola "+usuario);
}

function signIn(){
    let email = document.forms["signIn"]["email"].value;
    let usuario = document.forms["signIn"]["user"].value;
    let contrasena = document.forms["signIn"]["pwd"].value;
    let c_contrasena = document.forms["signIn"]["c_pwd"].value;

    if ((email=="") || (usuario="") || (contrasena="") || (c_contrasena="")){
        alert("No deje casillas en blanco")
        return false;
    }
    if (contrasena!=c_contrasena){
        alert("las contraseñas no son iguales");
        return false;
    }

}