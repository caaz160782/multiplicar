const fs = require('fs');
const colors = require('colors');
//promises
// const crearArchivo = (number) => {
// console.log("=======================================================");
// console.log(`             Tabla del ${number}                    `);
// console.log("=======================================================");  
// let salida = "";
// return new Promise((resolve,reject) => {  
// for (let i = 1; i <= 10; i++){
//   salida += `${number} * ${i} = ${i * number} \n`;
// }
// console.log(salida)
// fs.writeFileSync(`tabla-${number}.txt`, salida);
  
//   resolve(`tabla del ${number}`)
  
//  }) 
// }

//asyn/await
const crearArchivo = async (number,listar,hasta) => {
 try {
      let salida = "";
      let consola = "";
      for (let i = 1; i <= hasta; i++){
        salida += `${number} * ${i} = ${number * i} \n`;
        consola+= `${number} ${'*'.blue} ${i} ${'='.america} ${number * i} \n`;
      }
      
        if (listar) {
        console.log("=======================================================".rainbow);
        console.log(`             Tabla del ${number}                    `.green);
        console.log("=======================================================".rainbow);  
        console.log(consola)
       }       
        
      fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);
          return(`tabla del ${number}`)               
 } catch (error) {
   throw (error)
 }  
}

module.exports = {crearArchivo} 