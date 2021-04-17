


//Crear una lista (Array) usando el metodo fill el rango de la
//lista puede ser opcional, almecar diferentes animales "Acuaticos,
//Terrestres, Aerios" (Listas anidadas), pedir al usario cual listas
//desea ver de los animales usando el metodo slice, motrar unas opciones
//Para visualizar los datos Ejemplo(ver todos,1-2 hay 10, 2-4 hay 10, 4-6 hay 10 
//6-8 hay 10, 8-10 hay 10) y despues Si desea ver los datos ASD o DES

let lista  = [];
// let Acuaticos = ["Delfin","Pez","pez2","Delfin2","Miguel"], Terrestres = ["Perro", "Gato"], Aerios = ["Paloma","Aguila"];
// lista[0] = Acuaticos; lista[1] = Terrestres; lista[2] = Aerios;
let Acuaticos = new Array(parseInt(prompt("Cuantos animales acuaticos hay"))).fill('');
for (let i = 0; i < Acuaticos.length; i++) {
    Acuaticos[i] = prompt(`Nombre del animal acuatico ${i+1}`);
}
lista.push(Acuaticos);
let Terrestres = new Array(parseInt(prompt("Cuantos animales terrestres hay"))).fill('');
for (let i = 0; i < Terrestres.length; i++) {
    Terrestres[i] = prompt(`Nombre del animal terrestres ${i+1}`);
}
lista.push(Terrestres);
let Aerios = new Array(parseInt(prompt("Cuantos animales aerios hay"))).fill('');
for (let i = 0; i < Aerios.length; i++) {
    Aerios[i] = prompt(`Nombre del animal aerios ${i+1}`);
}
lista.push(Aerios);
console.log("La lista contiene los siguientes datos",lista);
let usuario = parseInt(prompt("Usuario cuales de las siguientes listas dese ver:\n1. Acuaticos\n2. Terrestres\n3. Aerios"));
let numPaginar = 2;
if(!(numPaginar<=lista[usuario-1].length)){
    numPaginar=lista[usuario-1].length;
}
let menu = `Total de datos en la lista: ${lista[usuario-1].length}\n1. Ver todos los datos \n`;
let cont = 2, opcionesMenu = [];
opcionesMenu[1] = [0,lista[usuario-1].length];
if(lista[usuario-1].length%numPaginar==0){
    for (let i = 0; i < lista[usuario-1].length; i+=numPaginar) {
        menu += `${cont}. ${i+1} - ${i+numPaginar} hay ${lista[usuario-1].length} \n`;
        opcionesMenu[cont] = [i, i+numPaginar];
        cont++;
    }
}else{
    for (let i = 0; i < lista[usuario-1].length; i+=numPaginar) {
        if(lista[usuario-1].length==i+1){
            menu += `${cont}. ${i+1} hay ${lista[usuario-1].length} \n`;
            opcionesMenu[cont] = [-1, lista[usuario-1].length];
        }else{
            menu += `${cont}. ${i+1} - ${i+numPaginar} hay ${lista[usuario-1].length} \n`;
            opcionesMenu[cont] = [i, i+numPaginar];
        }
        cont++;
    }
}
let paginacion = prompt(menu);
let copiaLista = lista[usuario-1].slice(opcionesMenu[paginacion][0], opcionesMenu[paginacion][1]);
let verOrdenLista = prompt("Desea ver la lista\n1.ASD 'Ver la lista con el ultmimo dato ingresado'\n2.DES 'Ver la lista con el primer dato ingresado'");
switch (verOrdenLista) {
    case "1":
        console.log("Resultado: ",copiaLista);
        break;
    case "2":
        console.log("Resultado: ",copiaLista.reverse());
        break;
}




// let lista = new Array(5).fill('');
// Object.preventExtensions(lista);
// lista[3] = "";
// console.log(lista);

// let array = ["A","B","C","D","E","F","G","H"];
// array.fill("Miguel",3,7);
// console.log(array);



// let lista2 = ["A","B","C","D","E","F","G","H"];

// const copia = lista2.slice(3);


// console.log(lista2);
// console.log(copia);


// let listaAsc = ["A","B", "C","D"];
// listaAsc.reverse();
// console.log(listaAsc);










// let i = -5, indice = ((array.length-1)+i);
// while(true){
//     if(array.keys%2==0){
//         array.fill("Miguel",i, );
//         indice--;
//     }
// }




