import { addKeyword, EVENTS } from "@builderbot/bot";
import { botonesMenuEncuesta } from "../utils/botonesMenuEncuesta.js";


const welcomeFlow = addKeyword(EVENTS.WELCOME)
.addAnswer('Hola! 😊 Soy tu chatbot!🤖',
...botonesMenuEncuesta
)


export {welcomeFlow}

