const file = require('fs')

const createFile = (base,limit) => {
    return new Promise( ( resolve,reject) => {
        if( !Number(base) || !Number(limit) ){
            reject(`Ingrese solamente parametros numericos`)
        }
       
        let res = '';
        for (let i = 1; i <= limit; i++) {
            res += `${base} * ${i} \t = ${base*i}\n`;
        }

        file.writeFile(`./tablas/tabla-${base}-lim-${limit}.txt`,res,err => {
            if(err)
                return reject(err)
            resolve(`archivo tabla-${base}-lim-${limit}.txt created successfully...`)
        });
    });
}

const readFile =  (base,limit) => {

    return new Promise((resolve,reject)=>{
        if( !Number(base) || !Number(limit) ){
            reject(`Ingrese solamente parametros numericos`)
        }

        file.readFile(`./tablas/tabla-${base}-lim-${limit}`, (err, data) => {
            if (err) return reject(err);
            let resp = `\n\n== Tabla del ${base} == \n\n${data.toString()}`;
            resolve(resp)
          });
    });
}


const list = ( base, limit ) => {

    return new Promise((resolve,reject)=>{

        if( !Number(base) || !Number(limit) ){
            reject(`Ingrese solamente parametros numericos`)
        }
        
        let res = `\n\n== Tabla del ${base} ==\n\n`;
        for (let i = 1; i <= limit; i++) {
            res += `${base} * ${i} \t = ${base*i}\n`;
        }
        resolve(res)
    });
}


module.exports = {
    createFile,
    list,
    readFile
}
