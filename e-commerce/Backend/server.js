import app from "./src/app.js";
import connect from "./src/db/db.js";

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`server is running on port no : ${PORT}`);
    connect()
})