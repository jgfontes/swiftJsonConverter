import express from "express"
import { ConverterController } from "./src/controllers/converterController";
var bodyParser = require('body-parser')

const app = express();

// app.use(express.raw());
app.use(bodyParser.text({
    inflate: true,
    limit: '100kb',
    type: '*/*'
}));

//http://localhost:3000
app.listen(3000, () => {
    console.log("Server is running ")
})

// Convert Method
app.post('/convert',  (req, res) => {
    const converterController = new ConverterController();
    converterController.handle(req, res);
})
