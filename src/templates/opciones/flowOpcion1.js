import { addKeyword } from '@builderbot/bot'
import { EVENTS } from '@builderbot/bot'
import { botonesMenuEncuesta } from '../../utils/botonesMenuEncuesta.js'

 
const flowOpcion1 = addKeyword (EVENTS.ACTION)
.addAnswer ( `Ejemeplo de la opcion 1`,
      ...botonesMenuEncuesta
    
  )
 
export { flowOpcion1 }