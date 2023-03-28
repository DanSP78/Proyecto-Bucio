import express from "express";
import indexRoutes from "./routes/indexRoutes";
import exphbs from "express-handlebars";
import path from "path"; // modulo de node
import morgan from "morgan";

const app = express();
//__dirname es una constante que ofrece node
//Obtiene toda la ruta de cualquier carpeta
app.set("views", path.join(__dirname, "views"));
app.engine(
  //funcion que sirve para reconocer el motor de platilla
  ".hbs", //nombre que reconoce express que utilizamos handlebars
  exphbs({
    //aqui se genera la rutapara llegar a la carpeta views y layouts
    //se debe de crear una carpeta dentro de views con el nombre layouts.
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main", //nombre del archivo con terminacion .hbs se crea en layouts
    extname: ".hbs", //extencion de handlebars
  })
);

app.set("view engine", ".hbs");

//Middleware
//intermedirario entre cliente y servidor
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//rutas
app.use(indexRoutes);
//Archivos estaticos
//puede almacenar estilos o imagenes que no queremos que se muevan
app.use(express.static(path.join(__dirname, "frontend"))); //**** se define la carpeta que se quiere volver publica en este caso frontend */

export default app; // sirve para exportar el objeto app
