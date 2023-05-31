
function InvertirPalabra(){
    var p = prompt("Ingrese palabra: ");
    var aux =( " " ) 
    var i = p.length -1
    while (i >= 0){
        aux = aux + p[i];
        i = i - 1;
    }
    alert("La palabra invertida es: " + aux);
}
function Eliminarcaracterslice(){
    var p = prompt("Ingrese palabra: ");
    var pp = p.slice(1 , p.length - 1)
    alert(pp)

}