const {crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();


crearArchivo(argv.b,argv.l,argv.h)
    .then( nombreArchivo => console.log("Archivo "+nombreArchivo+" creado"))
    .catch(error => console.log(colors.red(error)) );

