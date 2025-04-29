import { addKeyword } from '@builderbot/bot'
import path from 'path';
import { EVENTS } from '@builderbot/bot'
import { config } from '../../config/config.js';
import { botonesMenuEncuesta } from '../../utils/botonesMenuEncuesta.js'

const basePath = config.PATH_MEDIA; 

const flowOpcion2 = addKeyword (EVENTS.ACTION)
.addAnswer ( `Ejemeplo de la opcion 2`
  )
.addAnswer('Foto de ejemplo',{
    media: path.join(basePath, 'fotoBot.jpg')
  })
.addAnswer ( `Volver`,
    ...botonesMenuEncuesta
  )
 
export { flowOpcion2 }