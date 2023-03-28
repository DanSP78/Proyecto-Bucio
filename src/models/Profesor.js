import { Schema, model } from "mongoose";

const profesorEsquema = new Schema(
  {
    rfc: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    paterno: {
      type: String,
      required: true,
    },
    materno: {
      type: String,
      required: true,
    },
    fechaNac: {
      type: Date,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    celular: {
      type: Number,
      required: true,
    },
    profesion: {
      type: String,
      required: true,
    },
    numEmpleado: {
      type: Number,
      required: true,
    },
    opcion: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Profesor", profesorEsquema);
