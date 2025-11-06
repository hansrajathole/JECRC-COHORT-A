import app from "./src/app.js";
import connect from "./src/db/db.js";
import config from "./src/config/config.js";


const PORT = config.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`server is running on port no : ${PORT}`);
    connect()
})