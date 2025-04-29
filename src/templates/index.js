import { createFlow } from "@builderbot/bot";
import { welcomeFlow } from "./welcomeFlow.js";
import { menuFlow } from "./menuFlow.js";
import { flowOpcion1 } from "./opciones/flowOpcion1.js";
import { flowOpcion2 } from "./opciones/flowOpcion2.js";
import { flowOpcion3 } from "./opciones/flowOpcion3.js";
import { flowOpcion4 } from "./opciones/flowOpcion4.js";
import { flowEncuesta } from "../utils/flowEncuesta.js";



export default createFlow([ 
    welcomeFlow,
    menuFlow,
    flowOpcion1,
    flowOpcion2,
    flowOpcion3,
    flowOpcion4,
    flowEncuesta
])
