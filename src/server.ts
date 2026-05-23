import config from "./config";
import { initDB } from "./dataBase";
import app from "./app"

const main = async () => {
     try {
        await initDB();
        app.listen(config.PORT, ()=>{
            console.log(
              `DevPulse app listening on port ${config.PORT}`,
            );
        })
     } catch (error) {
        console.error(error)
        
     }
};

main();
