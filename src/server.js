import { app } from "./app"

const PORT = 8000;

app.listen(process.env.PORT || PORT , () => console.log("server is running!"));