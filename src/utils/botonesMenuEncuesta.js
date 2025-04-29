const botonesMenuEncuesta = [
  { 
    buttons: [
      { body: '📋 Menú' },
      { body: '📝 Encuesta' }
    ],
    capture: true
  },
  async (ctx, { gotoFlow }) => {
    const mensaje = ctx.body.toLowerCase();

    if (mensaje.includes('menú') || mensaje.includes('menu')) {
      const { menuFlow } = await import('../templates/menuFlow.js');
      return gotoFlow(menuFlow);
    }

    if (mensaje.includes('encuesta')) {
      const { flowEncuesta } = await import('../utils/flowEncuesta.js');
      return gotoFlow(flowEncuesta);
    }
  }
];

export { botonesMenuEncuesta };