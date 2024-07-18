import mongoose from "mongoose";

const url_bd = "mongodb://localhost:27017/sat";

mongoose
  .connect(url_bd, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch((error) => {
    console.log("Error en la conexión a la base de datos:", error);
  });

const tramiteSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
  rfc: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  estatus: {
    type: String,
    required: true,
  },
});

const Tramite = mongoose.model("Tramite", tramiteSchema);

Tramite.create({
  tipo: "Declaración Anual",
  rfc: "ABC123456789",
  nombre: "Carlos López",
  estatus: "En proceso",
})
  .then(() => {
    console.log("Trámite creado exitosamente");
  })
  .catch((error) => {
    console.log("Error al crear el trámite: ", error);
  });
