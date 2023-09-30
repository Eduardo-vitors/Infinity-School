const express = require("express")
const app = express()
const cors = require("cors");
const controladores = require("./controller")
app.use(cors());

app.use(express.json());

app.listen(80, () => console.log('Rodando na porta 80'))
app.get("/api/consultas", controladores.getEspecialidades)
app.get("/api/consultas/:id", controladores.getEspecialidade)
app.get("/api/marcadas", controladores.getConsultasMarcadas)
app.get("/api/consultas/marcadas/:id", controladores.getConsultaMarcada)
app.post("/api/consultas/", controladores.marcarNovaConsulta)
app.put("/api/consultas/marcadas/:id", controladores.atualizarConsulta)
app.delete("/api/consultas/:id", controladores.desmarcarConsulta)