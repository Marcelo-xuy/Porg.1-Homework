

function Nmayor() {
    var A = parseInt(prompt("Ingrese número: "));
    var B = parseInt(prompt("Ingrese número: "));
    var C = parseInt(prompt("Ingrese número: "));

    if (A > B && A > C) {
        alert("El número mayor es: " + A);
    } else if (B > A && B > C) {
        alert("El número mayor es: " + B);
    } else if (C > A && C > B) {
        alert("El número mayor es: " + C);
    } else {
        alert("Los números son iguales");
    }
}
