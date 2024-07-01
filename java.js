function checkIfFormIsFilledIn(event) {

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var isValid = true;

    if (name === "") { 
        document.getElementById("emptyName").innerHTML = "Empty name";
        isValid = false;
    } else {
        document.getElementById("emptyName").innerHTML = "";
    }

    if (surname === "") { 
        document.getElementById("emptySurname").innerHTML = "Empty surname";
        isValid = false;
    } else {
        document.getElementById("emptySurname").innerHTML = "";
    }

    if (password === "") { 
        document.getElementById("emptyPassword").innerHTML = "Empty password";
        isValid = false;
    } else {
        document.getElementById("emptyPassword").innerHTML = "";
    }

    if (email === "") { 
        document.getElementById("emptyEmail").innerHTML = "Empty email";
        isValid = false;
    } else {
        document.getElementById("emptyEmail").innerHTML = "";
    }

    if (!isValid) {
        event.preventDefault(); 
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", checkIfFormIsFilledIn);
});