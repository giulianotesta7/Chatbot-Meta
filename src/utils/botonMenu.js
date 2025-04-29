const botonMenu = [
    { 
      buttons: [
        { body: '📋 Menú' }
      ],
      capture: true
    },
    async (ctx, { gotoFlow }) => {
      const mensaje = ctx.body.toLowerCase();
  
      if (mensaje.includes('menú') || mensaje.includes('menu')) {
        const { menuFlow } = await import('../templates/SD/flowMenuSd.js');
        return gotoFlow(menuFlow);
      }
      
      const { welcomeFlow } = await import('../templates/welcomeFlow.js');
      return gotoFlow(welcomeFlow);
    }
  ];
  
  export { botonMenu };