import { configDotenv } from 'dotenv'
configDotenv()

const _config = {
    PORT : process.env.PORT,
    MONGODB_URI : process.env.MONGODB_URI,
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY
}


const config = Object.freeze(_config)
export default config