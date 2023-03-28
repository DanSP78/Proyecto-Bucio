import { Router } from "express";
import Asignatura from "../models/Asignatura";
import Profesor from "../models/Profesor";
import Alumno from "../models/Alumno";
import {
  createAsignatura,
  deleteAsignatura,
  renderAsignatura,
  renderEditAsignatura,
  statusAsignatura,
  updateAsignatura,
} from "../controllers/asignaturaController";
import {
  createAlumno,
  deleteAlumno,
  renderAlumno,
  renderEditAlumno,
  statusAlumno,
  updateAlumno,
} from "../controllers/alumnoController";
import {
  createProfesor,
  deleteProfesor,
  renderEditProfesor,
  renderProfesor,
  statusProfesor,
  updateProfesor,
} from "../controllers/profesorController";

const router = Router();

router.get("/", renderAsignatura);
//se le asigna un nombre a el objeto
router.get("/estudiante", renderAlumno);
//se le asigna un nombre a el objeto
router.get("/profesor", renderProfesor);
//********* se hace referencia a ObjetoController.js */
router.post("/alumno/agregar", createAlumno);
router.post("/asignatura/agregar", createAsignatura);
router.post("/profesor/agregar", createProfesor);

//******************************Asignatura */
router.get("/asignatura/:id/update", renderEditAsignatura);

router.post("/asignatura/:id/update", updateAsignatura);

router.get("/asignatura/:id/delete", deleteAsignatura);

router.get("/asignatura/:id/status", statusAsignatura);

//******************************Alumno */
router.get("/alumno/:id/update", renderEditAlumno);
router.post("/alumno/:id/update", updateAlumno);

router.get("/alumno/:id/delete", deleteAlumno);
router.get("/alumno/:id/status", statusAlumno);

//******************************Profesor*/
router.get("/profesor/:id/update", renderEditProfesor);
router.post("/profesor/:id/update", updateProfesor);

router.get("/profesor/:id/delete", deleteProfesor);
router.get("/profesor/:id/status", statusProfesor);

export default router;
