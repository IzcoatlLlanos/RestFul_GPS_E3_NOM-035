import * as mongoose from 'mongoose';

const usuariosSchema = new mongoose.Schema({
    IdUsuarioOK: { type : String },
    IdUsuarioBK: { type : String },
    Nombres: { type : String} ,
    Apellidos: { type : String} ,
    Hotel: { type : String} ,
    Rol: { type : String} ,
    Clave: { type : String} ,
    CorreoEle: { type : String} ,
    Celular: { type : String} ,
    Generated: { type: Boolean, default: false},
    Activo: { type: Boolean, default: true},
    detail_row: {
        _id: false,
        Activo: { type : String, default : 'S' },
        Borrado: { type : String, default : 'N' },
        detail_row_reg: [
            {
                _id: false,
                FechaReg: { type : Date, default: Date.now },
                UsuarioReg: { type : String }
            }
        ]
    }
});

export default mongoose.model(
    'cat_usuarios',
    usuariosSchema,
    'cat_usuarios'
  );