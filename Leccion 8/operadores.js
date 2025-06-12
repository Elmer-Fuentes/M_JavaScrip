



let opcion = parseInt(prompt("Digita una opción \n 1.Sumar\n 2.Restar\n 3.Multiplicación\n 4.División\n 5.Potencia\n 6.Residuo"))

 n1= parseInt(prompt("Digita el primer valor"));
 n2= parseInt(prompt("Digita el Segundo valor"));



function operaciones (opcion)
{
   //opcion= parseInt(opcion)
    switch (opcion) {
        case 1:
            return n1+n2; //suma
        break;
        case 2:
            return n1-n2;//Resta
        break;
        case 3:
            return n1*n2;//Multiplicación
        break
        case 4:
            return n1/n2;//Division
        break;
        case 5:
            return n1**n2;//Potencia
        break;
        case 6:
            return n1%n2;//Residuo
        break;
        default:
            return "Opción no válida";
        break;
    }
}

alert(operaciones(opcion))