import { Schema, model } from "mongoose";

const alumnoEsquema = Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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
    sexo: {
      type: String,
      required: true,
    },
    celular: {
      type: Number,
      required: true,
    },
    direccion: {
      type: String,
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

export default model("Alumno", alumnoEsquema);
