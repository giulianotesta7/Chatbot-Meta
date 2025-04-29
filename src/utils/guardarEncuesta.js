import fs from 'fs';
import path from 'path';

const guardarEncuestaCompleta = async (numeroUsuario, respuestas) => {
  const fecha = new Date().toISOString().slice(0, 10);
  const rutaCarpeta = path.join(process.cwd(), 'encuestas');
  const rutaArchivo = path.join(rutaCarpeta, `${fecha}.json`);

  if (!fs.existsSync(rutaCarpeta)) {
    fs.mkdirSync(rutaCarpeta);
  }

  let datos = [];

  if (fs.existsSync(rutaArchivo)) {
    const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
    datos = JSON.parse(contenido);
  }

  datos.push({
    numero: numeroUsuario,
    respuestas, 
    timestamp: new Date().toISOString()
  });

  fs.writeFileSync(rutaArchivo, JSON.stringify(datos, null, 2), 'utf-8');
};

export { guardarEncuestaCompleta };
