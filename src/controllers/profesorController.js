import Profesor from "../models/Profesor";

export const renderProfesor = async (req, res) => {
  const profesor = await Profesor.find().lean();
  //editarAlumno hace referencia a la view de editarProfesor.hbs
  res.render("profesor", { profesor: profesor });
};

export const createProfesor = async (req, res) => {
  try {
    const profesor = Profesor(req.body);
    await profesor.save();

    res.redirect("/profesor");
  } catch (error) {
    console.log(error);
  }
};

export const renderEditProfesor = async (req, res) => {
  try {
    //el try catch busca en la bd el id
    const profesor = await Profesor.findById(req.params.id).lean();
    res.render("editar/editarProfesor", { profesor });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProfesor = async (req, res) => {
  const { id } = req.params;
  await Profesor.findByIdAndUpdate(id, req.body);
  res.redirect("/profesor");
};

export const deleteProfesor = async (req, res) => {
  const { id } = req.params;
  await Profesor.findByIdAndDelete(id);
  res.redirect("/profesor");
};

export const statusProfesor = async (req, res) => {
  const { id } = req.params;
  const profesor = await Profesor.findById(id);
  //mando a traer mi propiedad opcion que esta en el modelo
  profesor.opcion = !profesor.opcion;
  await profesor.save();
  res.redirect("/profesor");
};
