import config from "./config/dbConnect.js";

async function prueba() {
    await config.authenticate();
    console.log('BD conectada');

    await config.close();
    console.log('Bd desconectada');  

}