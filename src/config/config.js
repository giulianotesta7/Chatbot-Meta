import dotenv from 'dotenv'
dotenv.config()

export const config = {
    PORT: process.env.PORT || 3008,
    JWT_TOKEN: process.env.JWT_TOKEN,
    NUMBER_ID: process.env.NUMBER_ID,
    VERIFY_TOKEN: process.env.VERIFY_TOKEN,
    PATH_MEDIA: process.env.PATH_MEDIA,
    META_VER : process.env.META_VER,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY
}