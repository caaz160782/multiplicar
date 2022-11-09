const { crearArchivo } = require('./helpers/multiplicar');
const argv= require('./config/yargs')

console.clear()
// console.log(process.argv)
// const [, , arg3 = "base=1"] = process.argv
// const [,base]= arg3.split("=") 

//yargs
 // console.log(argv)
 // console.log('base argv:' ,argv.base)

// tabla de multiplicar  
// const number = 7;
crearArchivo(argv.base,argv.l,argv.h)
 .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
 .catch(err=>console.log(err))
