import { Schema, model } from "mongoose";

const asignaturaEsquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    creditos: {
      type:Number,
      require: true,
    },

    horas: {
      type: Number,
      require: true,
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

export default model("Asignatura", asignaturaEsquema);
