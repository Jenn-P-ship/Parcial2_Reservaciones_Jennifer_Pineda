// Nombre: Jennifer Rebeca Guevara Pineda 

//Orden de los datos
interface Reservacion {
    id: number;
    cliente: string;
    personas: number;
    zona: string; // puede ser"Interior" o "Terraza"
}

let listaReservaciones: Reservacion[] = [
    { id: 1, cliente: "Carlos Gomez", personas: 2, zona: "Interior" },
    { id: 2, cliente: "Familia Perez", personas: 6, zona: "Terraza" },
    { id: 3, cliente: "Grupo Amigos", personas: 5, zona: "Interior" },
    { id: 4, cliente: "Ana Lopez", personas: 3, zona: "Terraza" }
];


//ESTA ES LA INTEGRACIÓN DE UNA FUNCIÓN TIPADA
// Recibe un arreglo tipado, lo modifica y no devuelve valores.
function atenderReservacion(lista: Reservacion[]): void {
    const reservacionAtendida = lista.shift();

    // Compruebo si existe o si la lista estaba vacía
    if (reservacionAtendida !== undefined) {
        console.log(`[ATENDIDA] Cliente: ${reservacionAtendida.cliente} | Personas: ${reservacionAtendida.personas}`);
    } else {
        console.log(`[AVISO] La lista está vacía. No hay reservaciones para atender.`);
    }
}


//Registro de nuevas reservaciones
listaReservaciones.push({ 
    id: 5, 
    cliente: "Luis Martinez", 
    personas: 4, 
    zona: "Interior" 
});

// Aquí agrego una reservación prioritaria al inicio
listaReservaciones.unshift({ 
    id: 99, 
    cliente: "Alcalde (PRIORIDAD)", 
    personas: 2, 
    zona: "Terraza" 
});

console.log("--- 2. LISTA ANTES DE ATENDER ---");
console.log(listaReservaciones);


//Atender una reservación
console.log("\n--- 3. ATENDIENDO RESERVACIONES ---");
atenderReservacion(listaReservaciones); // Esto retirará al "Alcalde (PRIORIDAD)"

// Llamada 2 a la función tipada (Situación: arreglo vacío de prueba)
// Esto demuestra que la función maneja correctamente el caso sin datos.
let listaVaciaPrueba: Reservacion[] = [];
atenderReservacion(listaVaciaPrueba); 


//Buscamos y consultamos
console.log("\n--- 4. BÚSQUEDA Y FILTRO ---");

// Buscar por ID existente 
const buscarExistente = listaReservaciones.find(res => res.id === 2);
if (buscarExistente !== undefined) {
    console.log(`[BÚSQUEDA EXITOSA] ID 2 pertenece a: ${buscarExistente.cliente}, Zona: ${buscarExistente.zona}`);
} else {
    console.log("[BÚSQUEDA FALLIDA] No se encontró el registro.");
}

// Buscar por ID inexistente 
const buscarInexistente = listaReservaciones.find(res => res.id === 100);
if (buscarInexistente !== undefined) {
    console.log(`[BÚSQUEDA EXITOSA] ID 100 pertenece a: ${buscarInexistente.cliente}`);
} else {
    console.log(`[BÚSQUEDA FALLIDA] La reservación con ID 100 no existe.`);
}

//Aca filtramos 
console.log("\n[Filtro: Grupos grandes en Terraza]");
// Guardamos la longitud original antes del filtro 
const cantidadAntesFiltro = listaReservaciones.length; 

const filtroTerrazaGrandes = listaReservaciones.filter(
    res => res.zona === "Terraza" && res.personas >= 5
);

// Mostramos los resultados del filtro o mensaje si no hay
if (filtroTerrazaGrandes.length > 0) {
    console.log(filtroTerrazaGrandes);
} else {
    console.log("[AVISO] No hay reservaciones que cumplan con los requisitos del filtro.");
}

//Demostración de filtro sin coincidencias
console.log("\n[Filtro sin coincidencias: Terraza y >= 20 personas]");
const filtroSinResultados = listaReservaciones.filter(res => res.zona === "Terraza" && res.personas >= 20);
if (filtroSinResultados.length > 0) {
    console.log(filtroSinResultados);
} else {
    console.log("[AVISO] No hay grupos de 20 o más personas en Terraza.");
}


//Comprobación final
console.log("\n--- 6. ESTADO FINAL DE LAS RESERVACIONES ---");
const cantidadDespuesFiltro = listaReservaciones.length;

// Aquí comprobamos que el filtro no destruyó el arreglo original
console.log(`Cantidad original antes del filtro: ${cantidadAntesFiltro}`);
console.log(`Cantidad original después del filtro: ${cantidadDespuesFiltro}`);

console.log(`\nCoincidencias encontradas por el filtro principal: ${filtroTerrazaGrandes.length}`);
console.log(`Cantidad final de reservaciones PENDIENTES: ${listaReservaciones.length}`);

console.log("\n--- LISTA FINAL DE RESERVACIONES PENDIENTES ---");
console.log(listaReservaciones);