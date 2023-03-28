import Asignatura from "../models/Asignatura";


export const renderAsignatura = async (req, res) => {
  const asignatura = await Asignatura.find().lean();

  res.render("index", { asignatura: asignatura });
};
export const createAsignatura = async (req, res) => {
  try {
    const asignatura = Asignatura(req.body);
    await asignatura.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
export const renderEditAsignatura = async (req, res) => {
  try {
    //esta linea es para encontrar en la bd el id
    const asignatura = await Asignatura.findById(req.params.id).lean();
    res.render("editar/editarAsignatura", { asignatura });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateAsignatura = async (req, res) => {
  const { id } = req.params;
  await Asignatura.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteAsignatura = async (req, res) => {
  const { id } = req.params;
  await Asignatura.findByIdAndDelete(id);

  res.redirect("/");
};
export const statusAsignatura = async (req, res) => {
  const { id } = req.params;
  const asignatura = await Asignatura.findById(id);
  //mando a traer mi propiedad opcion que esta en el modelo
  asignatura.opcion = !asignatura.opcion;
  await asignatura.save();
  res.redirect("/");
};
