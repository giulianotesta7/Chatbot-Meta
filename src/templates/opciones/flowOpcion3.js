import { addKeyword } from '@builderbot/bot'
import { EVENTS } from '@builderbot/bot'
import { botonesMenuEncuesta } from '../../utils/botonesMenuEncuesta.js'

 
const flowOpcion3 = addKeyword (EVENTS.ACTION)
.addAnswer ( `Ejemeplo de la opcion 3`,
      ...botonesMenuEncuesta
    
  )
 
export { flowOpcion3 }