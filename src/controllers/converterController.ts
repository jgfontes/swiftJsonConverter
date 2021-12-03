import {Request, Response} from "express"
import { Converter } from "../entities/converter";


class ConverterController {
    async handle(request: Request, response: Response) {
        const converterObj = new Converter();
        let keysValuesArray = converterObj.swiftStringToArray(request.body);
        let jsonObj = converterObj.arrayToJson(keysValuesArray[0], keysValuesArray[1]);

        return response.json(jsonObj);
    }
  
}

export { ConverterController }
