export default class FeriadoModel {
    nombre: String;
    comentarios: String;
    fecha: Date;
    irrenunciable: Boolean;
    tipo: String;
    ley: String;

    constructor(
        nombre: String,
        comentarios: String,
        fecha: Date,
        irrenunciable: Boolean,
        tipo: String,
        ley: String
    ) {
        this.nombre = nombre;
        this.comentarios = comentarios;
        this.fecha = fecha;
        this.irrenunciable = irrenunciable;
        this.tipo = tipo;
        this.ley = ley;
    }

}