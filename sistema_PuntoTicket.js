//Institución: INACAP
//Profesor: Esteban Rojas Cancino
//Alumno: Giovanni Riveros
//Curso: Base de Datos No Estructuradas

//==========================================================
// PARTE 1 - Unidad 2: 
//==========================================================

// 1. Identeficación de Etapas del proceso de Instalación:

// ------------------------------------
// Descarga de MongoDB
// ------------------------------------

// Descargar MongoDB Community desde:
// https://www.mongodb.com/try/download/community

// ------------------------------------
// Instalación del Software
// ------------------------------------
// Ejecutar el instalador de MongoDB Community.
// Mantener la configuración por defecto hasta finalizar la instalación.
// Al finalizar se instala MongoDB Compass.

// ------------------------------------
// Configuración Inicial
// ------------------------------------
// Abrir la terminal (mongosh)
mongosh

// Verificar la base de datos actual
db

// Mostrar las bases de datos existentes
show dbs

// Crear o seleccionar una base de datos
use PuntoTicket


// ------------------------------------
// Verififcación de la Instalación
// ------------------------------------
db.createCollection("entradas")

// Mostrar las colecciones
show collections

// Mostrar las bases de datos
show dbs


// 2.- Comandos de Gestión de Base de Datos y Colecciones:

// Creacion de Base de Datos
use PuntoTicket

// Eliminación de Base de Datos
db.dropDatabase()

// Creación de Colección
db.createCollection("entradas")

// Eliminación de Colección
db.entradas.drop()

// 3.- Operaciones CRUD en Documentos

// Creación de Documentos 
// (Cree un nuevo documento para que no afecte los documentos de la base de datos)
db.entradas.insertOne( 
    { 
        "_id": 31, 
        "cliente": "Pedro Salinas", 
        "email": "pedro.salinas@gmail.com", 
        "evento": "Los Bunkers", 
        "cantidad": 2, 
        "precio": 65000, 
        "estado": "Pagado", 
        "UBICACION": { 
        "recinto": "Movistar Arena", 
        "ciudad": "Santiago", "sector": "Cancha" }, "asientos":["C501","C502"] })

// Lectura de Documentos
db.entradas.find({_id: 31})

// Actualización de Documentos
db.entradas.updateOne( 
    {_id:31}, 
    { 
        $set:{ 
            precio:70000 
        } 
    })

// Eliminación de Documentos
db.entradas.deleteOne(
    { _id: 31 }
)

// 4.- Operación CRUD en Subdocumentos //

// Creación de Subdocumentos
db.entradas.find(
    { _id: 1 },
    { 
        $set: { 
            "UBICACION": {
                "recinto": "Estadio Monumental",
                "ciudad": "Santiago",
                "sector": "Océano"
            }
        }
    }
)

// Lectura de Subdocumentos
db.entradas.find(
    { _id: 1 },
    { 
        "UBICACION": 1 
    })

// Actualización de Subdocumentos
db.entradas.updateOne(
    { _id: 1 },
    { 
        $set: {
            "UBICACION.sector": "VIP Premium"
        }
    }
)

// Eliminación de Subdocumentos 
db.entradas.updateOne(
    { _id: 1 },
    { 
        $unset: { 
        "UBICACION.sector": "" 
    } 
    })

// Base de Datos: PuntoTicket

nombre : String
email : String
evento : String
cantidad : Number
precio : Number
estado : String
UBICACION : Subdocumento
recinto : String
ciudad : String
sector : String
asientos : Array

//==========================================================
// PARTE 2 - Unidad 3:
//==========================================================

// 1.- Insertar documentos //
db.entradas.insertMany([
    {
        "_id": 1,
        "cliente": "Giovanni Riveros",
        "email": "giovanni.riveros@gmail.com",
        "evento": "Colo colo vs Ohiggins",
        "cantidad": 2,
        "precio": 55000,
        "estado": "Pagado",
        "UBICACION": {
            "recinto": "Estadio Monumental",
            "ciudad": "Santiago",
            "sector": "Océano"
        },
        "asientos": ["O101","O102"]
    },
    {
        "_id": 2,
        "cliente": "María José",
        "email": "maria.jose@gmail.com",
        "evento": "Morat Gira Latinoamerica",
        "cantidad": 4,
        "precio": 280000,
        "estado": "Pagado",
        "UBICACION": {
            "recinto": "Movistar Arena",
            "ciudad": "Santiago",
            "sector": "Platea Baja"
        },
        "asientos": ["G201","G202","G203","G204"]
    },
    {
        "_id": 3,
        "cliente": "Diego Rojas",
        "email": "diego.rojas@gmail.com",
        "evento": "Universidad de Chile vs Everton",
        "cantidad": 2,
        "precio": 32000,
        "estado": "Pendiente",
        "UBICACION": {
            "recinto": "Estadio Nacional",
            "ciudad": "Santiago",
            "sector": "Andes"
        },
        "asientos": ["A120","A121"]
    },
    {
        "_id": 4,
        "cliente": "Sofía Morales",
        "email": "sofia.morales@gmail.com",
        "evento": "Los Bunkers - Gira Acústica",
        "cantidad": 3,
        "precio": 65000,
        "estado": "Pagado",
        "UBICACION": {
            "recinto": "Movistar Arena",
            "ciudad": "Santiago",
            "sector": "VIP"
        },
        "asientos": ["V15","V16","V17"]
    },
    {
        "_id": 5,
        "cliente": "Camila Fuentes",
        "email": "camila.fuentes@gmail.com",
        "evento": "Mon Laferte Tour",
        "cantidad": 2,
        "precio": 79000,
        "estado": "Pagado",
        "UBICACION": {
            "recinto": "Movistar Arena",
            "ciudad": "Santiago",
            "sector": "Platea Baja"
        },
        "asientos": ["PB31","PB32"]
    }, 
    {
    "_id": 6,
    "cliente": "Felipe Herrera",
    "email": "felipe.herrera@gmail.com",
    "evento": "Los Tres en Vivo",
    "cantidad": 1,
    "precio": 45000,
    "estado": "Cancelado",
    "UBICACION": {
        "recinto": "Movistar Arena",
        "ciudad": "Santiago",
        "sector": "Cancha"
    },
    "asientos": ["C210"]
},
{
    "_id": 7,
    "cliente": "Valentina Soto",
    "email": "valentina.soto@gmail.com",
    "evento": "Myriam Hernández Tour",
    "cantidad": 2,
    "precio": 59000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Movistar Arena",
        "ciudad": "Santiago",
        "sector": "Platea Alta"
    },
    "asientos": ["PA105","PA106"]
},
{
    "_id": 8,
    "cliente": "Ignacio Muñoz",
    "email": "ignacio.munoz@gmail.com",
    "evento": "Festival de Viña del Mar",
    "cantidad": 5,
    "precio": 120000,
    "estado": "Pendiente",
    "UBICACION": {
        "recinto": "Quinta Vergara",
        "ciudad": "Viña del Mar",
        "sector": "Palco"
    },
    "asientos": ["P1","P2","P3","P4","P5"]
},
{
    "_id": 9,
    "cliente": "Fernanda Castro",
    "email": "fernanda.castro@gmail.com",
    "evento": "Lollapalooza Chile",
    "cantidad": 3,
    "precio": 95000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Parque Cerrillos",
        "ciudad": "Santiago",
        "sector": "General"
    },
    "asientos": ["G501","G502","G503"]
},
{
    "_id": 10,
    "cliente": "Matías Vargas",
    "email": "matias.vargas@gmail.com",
    "evento": "Creamfields Chile",
    "cantidad": 2,
    "precio": 85000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Club Hípico",
        "ciudad": "Santiago",
        "sector": "VIP"
    },
    "asientos": ["VIP80","VIP81"]
},

{
    "_id": 11,
    "cliente": "Daniela Silva",
    "email": "daniela.silva@gmail.com",
    "evento": "Jorge Alís Stand Up",
    "cantidad": 2,
    "precio": 35000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Teatro Caupolicán",
        "ciudad": "Santiago",
        "sector": "Platea"
    },
    "asientos": ["PL101","PL102"]
},
{
    "_id": 12,
    "cliente": "Nicolás Araya",
    "email": "nicolas.araya@gmail.com",
    "evento": "Stefan Kramer",
    "cantidad": 4,
    "precio": 30000,
    "estado": "Pendiente",
    "UBICACION": {
        "recinto": "Teatro Nescafé",
        "ciudad": "Santiago",
        "sector": "Primer Piso"
    },
    "asientos": ["PP11","PP12","PP13","PP14"]
},
{
    "_id": 13,
    "cliente": "Javiera Torres",
    "email": "javiera.torres@gmail.com",
    "evento": "Disney On Ice",
    "cantidad": 3,
    "precio": 68000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Movistar Arena",
        "ciudad": "Santiago",
        "sector": "Cancha"
    },
    "asientos": ["C55","C56","C57"]
},
{
    "_id": 14,
    "cliente": "Benjamín Díaz",
    "email": "benjamin.diaz@gmail.com",
    "evento": "Harlem Globetrotters",
    "cantidad": 2,
    "precio": 47000,
    "estado": "Cancelado",
    "UBICACION": {
        "recinto": "Movistar Arena",
        "ciudad": "Santiago",
        "sector": "VIP"
    },
    "asientos": ["VIP21","VIP22"]
},
{
    "_id": 15,
    "cliente": "Antonia Reyes",
    "email": "antonia.reyes@gmail.com",
    "evento": "Monster Jam",
    "cantidad": 5,
    "precio": 52000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Estadio Nacional",
        "ciudad": "Santiago",
        "sector": "Pacífico"
    },
    "asientos": ["P301","P302","P303","P304","P305"]
},
{
    "_id": 16,
    "cliente": "Cristóbal López",
    "email": "cristobal.lopez@gmail.com",
    "evento": "Red Bull Batalla Chile",
    "cantidad": 2,
    "precio": 26000,
    "estado": "Pendiente",
    "UBICACION": {
        "recinto": "Teatro Caupolicán",
        "ciudad": "Santiago",
        "sector": "General"
    },
    "asientos": ["G150","G151"]
},
{
    "_id": 17,
    "cliente": "Catalina Espinoza",
    "email": "catalina.espinoza@gmail.com",
    "evento": "Los Jaivas",
    "cantidad": 2,
    "precio": 58000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Teatro Municipal",
        "ciudad": "Santiago",
        "sector": "Palco"
    },
    "asientos": ["PA41","PA42"]
},
{
    "_id": 18,
    "cliente": "Vicente Ramírez",
    "email": "vicente.ramirez@gmail.com",
    "evento": "Andrés Calamaro",
    "cantidad": 1,
    "precio": 72000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Movistar Arena",
        "ciudad": "Santiago",
        "sector": "Platea Baja"
    },
    "asientos": ["PB210"]
},
{
    "_id": 19,
    "cliente": "Josefa Contreras",
    "email": "josefa.contreras@gmail.com",
    "evento": "Luis Miguel Tour",
    "cantidad": 2,
    "precio": 135000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Movistar Arena",
        "ciudad": "Santiago",
        "sector": "VIP"
    },
    "asientos": ["VIP5","VIP6"]
},
{
    "_id": 20,
    "cliente": "Tomás Navarro",
    "email": "tomas.navarro@gmail.com",
    "evento": "Ricardo Arjona",
    "cantidad": 3,
    "precio": 69000,
    "estado": "Pendiente",
    "UBICACION": {
        "recinto": "Movistar Arena",
        "ciudad": "Santiago",
        "sector": "Platea Alta"
    },
    "asientos": ["PA81","PA82","PA83"]
},

{
    "_id": 21,
    "cliente": "Martina Vega",
    "email": "martina.vega@gmail.com",
    "evento": "Imagine Dragons",
    "cantidad": 2,
    "precio": 98000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Estadio Nacional",
        "ciudad": "Santiago",
        "sector": "Cancha"
    },
    "asientos": ["C401","C402"]
},
{
    "_id": 22,
    "cliente": "Sebastián Paredes",
    "email": "sebastian.paredes@gmail.com",
    "evento": "Dua Lipa",
    "cantidad": 3,
    "precio": 115000,
    "estado": "Pendiente",
    "UBICACION": {
        "recinto": "Estadio Nacional",
        "ciudad": "Santiago",
        "sector": "Pacífico"
    },
    "asientos": ["P401","P402","P403"]
},
{
    "_id": 23,
    "cliente": "Emilia Salinas",
    "email": "emilia.salinas@gmail.com",
    "evento": "Iron Maiden",
    "cantidad": 2,
    "precio": 89000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Estadio Nacional",
        "ciudad": "Santiago",
        "sector": "Andes"
    },
    "asientos": ["A301","A302"]
},
{
    "_id": 24,
    "cliente": "Gabriel Morales",
    "email": "gabriel.morales@gmail.com",
    "evento": "Metallica",
    "cantidad": 4,
    "precio": 125000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Club Hípico",
        "ciudad": "Santiago",
        "sector": "VIP"
    },
    "asientos": ["VIP31","VIP32","VIP33","VIP34"]
},
{
    "_id": 25,
    "cliente": "Isidora Flores",
    "email": "isidora.flores@gmail.com",
    "evento": "Coldplay",
    "cantidad": 2,
    "precio": 135000,
    "estado": "Cancelado",
    "UBICACION": {
        "recinto": "Estadio Nacional",
        "ciudad": "Santiago",
        "sector": "Océano"
    },
    "asientos": ["O201","O202"]
},
{
    "_id": 26,
    "cliente": "Renato Campos",
    "email": "renato.campos@gmail.com",
    "evento": "Karol G",
    "cantidad": 2,
    "precio": 99000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Estadio Nacional",
        "ciudad": "Santiago",
        "sector": "Cancha"
    },
    "asientos": ["C220","C221"]
},
{
    "_id": 27,
    "cliente": "Amanda Peña",
    "email": "amanda.pena@gmail.com",
    "evento": "Bad Bunny",
    "cantidad": 5,
    "precio": 150000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Estadio Nacional",
        "ciudad": "Santiago",
        "sector": "VIP"
    },
    "asientos": ["VIP101","VIP102","VIP103","VIP104","VIP105"]
},
{
    "_id": 28,
    "cliente": "Maximiliano Cortés",
    "email": "maximiliano.cortes@gmail.com",
    "evento": "Shakira",
    "cantidad": 2,
    "precio": 118000,
    "estado": "Pendiente",
    "UBICACION": {
        "recinto": "Estadio Nacional",
        "ciudad": "Santiago",
        "sector": "Platea Baja"
    },
    "asientos": ["PB401","PB402"]
},
{
    "_id": 29,
    "cliente": "Francisca Bravo",
    "email": "francisca.bravo@gmail.com",
    "evento": "Romeo Santos",
    "cantidad": 3,
    "precio": 85000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Movistar Arena",
        "ciudad": "Santiago",
        "sector": "Platea Alta"
    },
    "asientos": ["PA301","PA302","PA303"]
},
{
    "_id": 30,
    "cliente": "Vicente Godoy",
    "email": "vicente.godoy@gmail.com",
    "evento": "Green Day",
    "cantidad": 2,
    "precio": 95000,
    "estado": "Pagado",
    "UBICACION": {
        "recinto": "Parque Estadio Nacional",
        "ciudad": "Santiago",
        "sector": "General"
    },
    "asientos": ["G601","G602"]
}
  ]);

// 2.- Modificar el valor atributo simple //
db.entradas.updateOne(
    { _id: 3 },
    { $set: { estado: "Pagado" } }
)
// Verificar la modificación
db.entradas.find({ _id: 3 })

// 3.- Modificar el valor de un subatributo //

db.entradas.updateMany(
{
    evento:"Metallica",
    estado:"Pagado"
},
{
    $set:{
        "UBICACION.sector":"Cancha VIP"
    }
})

// Verificar cambios
db.entradas.find({
    evento:"Metallica",
    estado:"Pagado"
})

// 4.- Renombrar un atributo simple //

db.entradas.updateMany(
{
    estado:"Cancelado",
    cantidad:2
},
{
    $rename:{
        "cliente":"nombre_cliente"
    }
})

// Verificar cambios
db.entradas.find({
    estado:"Cancelado",
    cantidad:2
})

// 5.- Renombrar un atributo de una subestructura //

db.entradas.updateMany(
{
    evento:"Imagine Dragons",
    estado:"Pagado"
},
{
    $rename:{
        "UBICACION.recinto":"UBICACION.lugar"
    }
})

// Verificar cambios
db.entradas.find({
    evento:"Imagine Dragons",
    estado:"Pagado"
})

// 6.- Eliminar un atributo simple //

db.entradas.updateMany(
{
    estado:"Pendiente",
    cantidad:3
},
{
    $unset:{
        email:""
    }
})

// Verificar cambios
db.entradas.find({
    estado:"Pendiente",
    cantidad:3
})

// 7.- Eliminar un atributo de una subestructura //

db.entradas.updateMany(
{
    evento:"Coldplay",
    estado:"Cancelado"
},
{
    $unset:{
        "UBICACION.sector":""
    }
})

// Verificar cambios
db.entradas.find({
    evento:"Coldplay",
    estado:"Cancelado"
})

// 8.- Eliminar documentos //

db.entradas.deleteMany(
{
    estado:"Cancelado",
    cantidad:2
})

// Verificar cambios
db.entradas.find({
    estado:"Cancelado"
})

// 9.- Agregar elemento al array //

db.entradas.updateMany(
{
    evento:"Bad Bunny",
    estado:"Pagado"
},
{
    $push:{
        asientos:"VIP106"
    }
})

// Verificar cambios
db.entradas.find({
    evento:"Bad Bunny",
    estado:"Pagado"
})

// 10.- Quitar elemento del array //

db.entradas.updateMany(
{
    evento:"Bad Bunny",
    estado:"Pagado"
},
{
    $pull:{
        asientos:"VIP101"
    }
})

// Verificar cambios
db.entradas.find({
    evento:"Bad Bunny",
    estado:"Pagado"
})

// 11.- CONSULTAS //
// a) Consulta utilizando $regex
db.entradas.find({
    evento: { $regex: "^M", $options: "i" }
})

// b) Consulta utilizando $sum
db.entradas.aggregate([
    { 
        $group: { 
            _id: null, 
            TotalVentas: { $sum: "$precio" } 
        } 
    }
])

// c) Consulta utilizando $avg
db.entradas.aggregate([
    { 
        $group: { 
            _id: null, 
            PromedioPrecio: { $avg: "$precio" } 
        } 
    }
])

// d) Consulta utilizando $round
db.entradas.aggregate([
    { 
        $project: { 
            cliente: 1, 
            precioRedondeado: { $round: ["$precio", -3] } 
        } 
    }
])

// e) Consulta utilizando $concat
db.entradas.aggregate([
    { 
        $project: { 
            Cliente_Evento: { $concat: ["$cliente", " - ", "$evento"] } 
        } 
    }
])

// f) Agrupar datos utilizando $sum:1
db.entradas.aggregate([
    { 
        $group: { 
            _id: "$estado", 
            CantidadEntradas: { $sum: 1 } 
        } 
    }
])

// g) Consulta utilizando foreach()
db.entradas.find().forEach(function(doc) {
    print(doc.cliente + " compró entradas para " + doc.evento)
})

// h) Consulta utilizando $in
db.entradas.find({
    estado: { $in: ["Pagado", "Pendiente"] }
})

// i) Consulta utilizando $all
db.entradas.find({
    asientos: { $all: ["VIP101", "VIP102"] }
})

// j) Consulta utilizando $slice
db.entradas.find(
    {}, 
    { cliente: 1, evento: 1, asientos: { $slice: 2 } }
)

// k) Consulta utilizando $unwind
db.entradas.aggregate([
    { $unwind: "$asientos" },
    { 
        $project: { 
            cliente: 1, 
            evento: 1, 
            asiento: "$asientos" 
        } 
    }
])
