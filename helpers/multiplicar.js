
const fs = require("fs");
const colors = require("colors");

//crear un archivo usando el metodo WriteFileSync
//y retornando una promesa
const crearArchivo = (base,listar,hasta) => 
{
    return new Promise( (resolve,reject) => 
    {
        try
        {
            let salida = "";//para el txt
            let consola = "";//para la consola
            let x = "x".blue;
            let igual = "=".red;
            for(let i=1;i<=hasta;i++)
            {
                salida += `${base}X${i}=${base*i}\n`;
                consola += `${base}${x}${i}${igual}${base*i}\n`;
            }
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            console.log("Archivo txt creado".america.bold);
            if(listar)
            {
                console.log("=================".yellow);
                console.log("Tabla del "+colors.blue(base));
                console.log("=================".yellow);
                console.log(consola);
            }
            resolve(`tabla-${base}`)
        }
        catch(error)
        {
            reject(error);
        }
    })
}

module.exports =
{
    crearArchivo : crearArchivo
}

//crear un archivo usando el método writeFileSync
//y volviendo a la función Async para que sea una promesa
/*
const crearArchivo = async (base) => 
{
    try
    {
        console.log("==================");
        console.log(`Tabla del ${base}`);
        console.log("==================");
        let salida = "";
        for(let i=1;i<=12;i++)
        {
            salida += `${base}X${i}=${base*i}\n`;
        }
        fs.writeFileSync(`tabla-${base}.txt`,salida);
        console.log(salida);
        console.log("Archivo txt creado");
        return `tabla-${base}`//este return es como el resolve
    }
    catch(error)
    {
        throw error;
    }
}
*/


/*
//crear un archivo usando el metodo writeFile
const crearArchivo = (base) => 
{
    console.log("=================");
    console.log(`Tabla del ${base}`);
    console.log("=================");
    let salida = "";
    for(let i=1;i<=12;i++)
    {
        salida += `${base}X${i}=${base*i}\n`;
    }
    fs.writeFile(`tabla-${base}.txt`,salida, (error) => 
    {
        if(error)
        {
            throw error;
        }
    })
    console.log(salida);
    console.log("Archivo txt creado");
}
*/



