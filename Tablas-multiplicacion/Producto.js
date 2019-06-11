const fs = require('fs');

let listar = (base, limite) => {
    for (let i = 0; i < limite + 1; i++) {

        console.log(i * base);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es numerica`);
            return;
        }

        let data = '';

        for (let i = 0; i < limite + 1; i++) {
            data += `${i}*${base}=${i*base}\n`;
        }

        fs.writeFile(`Tablas-multiplicacion/tabla-multiplicacion${base}-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-multiplicacion${base}`);
            }
        });
    });
};

module.exports = {
    crearArchivo,
    listar
}