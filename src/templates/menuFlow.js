import { addKeyword } from "@builderbot/bot";
import { flowOpcion1 } from "./opciones/flowOpcion1.js";
import { flowOpcion2 } from "./opciones/flowOpcion2.js";
import { flowOpcion3 } from "./opciones/flowOpcion3.js";
import { flowOpcion4 } from "./opciones/flowOpcion4.js";



const menuFlow = addKeyword(['Menu', 'menu', 'Menú', 'menú'])
  .addAction(
    async (ctx, { provider }) => {
      const list = {
        header: {
          type: "text",
          text: "Menu",
        },
        body: {
          text: "📋 Elegí alguna de estas opciones",
        },
        footer: {
          text: "",
        },
        action: {
          button: "Ver opciones",
          sections: [
            {
              title: "Opciones",
              rows: [
                {
                  id: "opcion1",
                  title: "Opcion 1",
                  description: "Muestra la opcion 1",
                },
                {
                  id: "opcion2",
                  title: "Opcion 2",
                  description: "Muestra la opcion 2",
                },
                {
                  id: "opcion3",
                  title: "Opcion 3",
                  description: "Muestra la opcion 3",
                },
                {
                  id: "opcion4",
                  title: "Opcion 4",
                  description: "Muestra la opcion 4",
                },
              ],
            },
          ],
        },
      };

      await provider.sendList(ctx.from, list);
    }
  )
  .addAction(
    { capture: true },
    async (ctx, { gotoFlow }) => {
      if (ctx.body === "opcion1") {
        return gotoFlow(flowOpcion1);
      } else if (ctx.body === "opcion2") {
        return gotoFlow(flowOpcion2);
      } else if (ctx.body === "opcion3") {
        return gotoFlow(flowOpcion3);
      } else if (ctx.body === "opcion4") {
        return gotoFlow(flowOpcion4)
      }
      

      
  
    }
  );

export { menuFlow };