/*Funcion para elegir entre que dos planetas se quiere saber la distancia
Retorna las distancia que hay entre cada planeta elegido y el sol para luego en otra funcion hacer la diferencia
entre esas dos distancias y da la distancia entre esos planetas.
Si ninguna opcion se elige retorna un 1 para avisarle al usuario que no existe el planeta*/
function elegirPlaneta(planeta) {
    if (planeta == 1) {
        return planeta = 46;
    } else if (planeta == 2) {
        return planeta = 107;
    } else if (planeta == 3) {
        return planeta = 147;
    } else if (planeta == 4) {
        return planeta = 205;
    } else if (planeta == 5) {
        return planeta = 741;
    } else if (planeta == 6) {
        return planeta = 1354;
    } else if (planeta == 7) {
        return planeta = 2748;
    } else if (planeta == 8) {
        return planeta = 4453;
    } else {
        return 1;
    }
}
/*Funcion que calcula la distancia entre los planetas elegidos. Si la diferencia da negativo, multiplica por -1 para que sea un numero positivo*/
function calcularDistancia(planeta1, planeta2) {
    let distancia = planeta1 - planeta2;
    if (distancia < 0) {
        distancia = distancia * -1;
    }
    return distancia;
}

let pla1 = parseInt(prompt("Elija el planeta: \n 1-Mercurio\n 2-Venus \n 3-Tierra \n 4-Marte \n 5-Jupiter \n 6-Saturno \n 7-Urano \n 8-Neptuno"));
let pla2 = parseInt(prompt("Elija el planeta: \n 1-Mercurio\n 2-Venus \n 3-Tierra \n 4-Marte \n 5-Jupiter \n 6-Saturno \n 7-Urano \n 8-Neptuno"));

let planeta1 = elegirPlaneta(pla1);
let planeta2 = elegirPlaneta(pla2);

let distanciaTotal = calcularDistancia(planeta1, planeta2);

if (planeta1 == 1 || planeta2 == 1) {
    alert("Uno de los dos planetas no existe ")
} else {
    alert(" La distancia entre los dos planetas es  " + distanciaTotal + " Millones de Kilometros");
}