import { addKeyword } from '@builderbot/bot';
import { guardarEncuestaCompleta } from './guardarEncuesta.js';
import { botonMenu } from './botonMenu.js';

const respuestasParciales = new Map(); // para mantener las respuestas por sesión

const flowEncuesta = addKeyword('encuesta')
  .addAnswer('📋 Vamos a comenzar una pequeña encuesta.')
  .addAnswer('1️⃣ ¿Cuál es tu nombre?', { capture: true }, async (ctx) => {
    const data = respuestasParciales.get(ctx.from) || {};
    data.nombre = ctx.body;
    respuestasParciales.set(ctx.from, data);
  })
  .addAnswer('2️⃣ Del 1 al 5, donde 1 es "Muy mala" y 5 es "Excelente"\n' + '✨¿Cómo calificarías la atención que recibiste?', { capture: true }, async (ctx) => {
    const data = respuestasParciales.get(ctx.from) || {};
    data.calificacion = ctx.body;
    respuestasParciales.set(ctx.from, data);
  })
  .addAnswer('3️⃣ Danos tu opinion sobre el Bot\n' + '💬 Queremos saber qué pensás, tu opinión nos ayuda a mejorar.', { capture: true }, async (ctx, ctxFn) => {
    const data = respuestasParciales.get(ctx.from) || {};
    data.comentario = ctx.body;
    await guardarEncuestaCompleta(ctx.from, data);
    respuestasParciales.delete(ctx.from); 

    await ctxFn.flowDynamic('¡Gracias por completar la encuesta! 🙌',
      ...botonMenu
    );

  });

export { flowEncuesta };
