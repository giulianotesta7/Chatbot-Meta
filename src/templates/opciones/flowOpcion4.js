import { addKeyword } from '@builderbot/bot'
import { EVENTS } from '@builderbot/bot'
import { botonesMenuEncuesta } from '../../utils/botonesMenuEncuesta.js'

 
const flowOpcion4 = addKeyword (EVENTS.ACTION)
.addAnswer ( `Ejemeplo de la opcion 4`,
      ...botonesMenuEncuesta
    
  )
 
export { flowOpcion4 }