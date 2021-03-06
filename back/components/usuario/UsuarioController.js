const UsuariosCtrl= {}
const Usuario = require('./UsuarioModels')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')

UsuariosCtrl.crearUsuario=async(req,res)=>{
  
    const{nombre,apellido,correo,username,contrasena}= req.body
    
    const NuevoUsuario = new Usuario({
        nombre,
        apellido,
        correo,
        username,
        contrasena,
    })
 const correoUsuario = await Usuario.findOne({correo:correo})
 if(correoUsuario)
 {
     res.json({
         mensaje: 'El correo ya existe'
     })
 }

 else {

    NuevoUsuario.contrasena = await bcrypt.hash(contrasena,10)
    const token = jwt.sign({_id:NuevoUsuario._id},"Secreto")
    await NuevoUsuario.save()

    res.json({
        mensaje: 'Bienvenido',
        id: NuevoUsuario._id,
        username: NuevoUsuario.username,
        transportista: NuevoUsuario.transportista,
        token
    })

  
 }

}

UsuariosCtrl.login= async(req,res)=>{

    const {correo,contrasena}= req.body
    const usuario = await Usuario.findOne({correo:correo})
    if(!usuario){
        return res.json({
            mensaje: 'Correo incorrecto'
        })

    }

    const match = await bcrypt.compare(contrasena,usuario.contrasena)
    if(match){

        const token = jwt.sign({_id: usuario._id},'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id:usuario._id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.correo,
            username: usuario.username,
            contrasena: usuario.contrasena,
            token
        })

    }

    else {

        res.json({
            mensaje: 'Contraseña incorrecta'
        })


    }




}
UsuariosCtrl.listarId= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Usuario.findById({_id: id})
    res.json(respuesta)
}
UsuariosCtrl.actualizar= async (req,res)=>{
    const id = req.params.id
    await Usuario.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: 'Usuario actualizado'
    })
}

module.exports= UsuariosCtrl