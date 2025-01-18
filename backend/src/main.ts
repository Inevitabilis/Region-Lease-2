import express from "express";
import { allowCrossOrigin} from "./middlewares";
import { Route } from "./rounting";

const app = express();
app.use(express.json());
app.use(allowCrossOrigin);

Route(app);

const port = 3000;
console.log(`starting server on http://localhost:${port}`);
app.listen(port, () => console.log("server started"));
