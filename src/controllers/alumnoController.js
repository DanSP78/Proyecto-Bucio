import Alumno from "../models/Alumno";

export const renderAlumno = async (req, res) => {
  const alumno = await Alumno.find().lean();
  //editarAlumno hace referencia a la view de editarAlumno.hbs
  res.render("alumno", { alumno: alumno });
};

export const createAlumno = async (req, res) => {
  try {
    const alumno = Alumno(req.body);
    await alumno.save();
    res.redirect("/estudiante");
  } catch (error) {
    console.log(error);
  }
};

export const renderEditAlumno = async (req, res) => {
  try {
    //el try catch busca en la bd el id
    const alumno = await Alumno.findById(req.params.id).lean();
    res.render("editar/editarAlumno", { alumno });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAlumno = async (req, res) => {
  const { id } = req.params;
  await Alumno.findByIdAndUpdate(id, req.body);
  res.redirect("/estudiante");
};

export const deleteAlumno = async (req, res) => {
  const { id } = req.params;
  await Alumno.findByIdAndDelete(id);
  res.redirect("/estudiante");
};
export const statusAlumno = async (req, res) => {
  const { id } = req.params;
  const alumno = await Alumno.findById(id);
  //mando a traer mi propiedad opcion que esta en el modelo
  alumno.opcion = !alumno.opcion;
  await alumno.save();
  res.redirect("/estudiante");
};
