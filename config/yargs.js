const colors = require("colors");
const argv = require("yargs")
            .option('b',
            {
                alias : "base",
                //demandOption : true,
                type : "number",
                describe : "Es la base de la tabla a multiplicar"
            })
            .option('l',
            {
                alias : "listar",
                default : false,
                type : "boolean",
                describe : "Lista los elementos de tabla"
            })
            .option("h",
            {
                alias: "hasta",
                type : "number",
                default : 12,
                describe: "Hasta que numero se va a multiplicar la base"
            })
            .check( (argv,options) =>
            {                
                if(isNaN(argv.b))
                {
                    throw new Error("La base tiene que ser un numero".red)
                }
                else
                {
                    return true;
                }
            })
            .argv;

module.exports = argv;            