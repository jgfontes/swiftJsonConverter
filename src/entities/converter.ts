var beautify = require("json-beautify");

class Converter {
    swiftStringToArray(swiftStr: string){   
            const allKeysArray = [];
            const allValuesArray = [];
        
            //Convert raw data to array
            const rawDataArray = swiftStr.split("\n");
            for (let singleLine of rawDataArray ) {
        
                const firstSplitArray = singleLine.split(":");
                //Store dictionary key into var
                const singleLineKeyArray = firstSplitArray[1].split(".");
                singleLineKeyArray[0] = singleLineKeyArray[0].slice(2, );
        
                //Store dictionary values into var
                const beginString = firstSplitArray[2].indexOf("(");
                const singleLineValue =  firstSplitArray[2].slice(beginString + 3, -4)
        
                //Store single line keys and values into their arrays
                allKeysArray.push(singleLineKeyArray);
                allValuesArray.push(singleLineValue);
            }

            return ([allKeysArray, allValuesArray]); 
    }

    arrayToJson(keysArray: string[][], valuesArray: string[]) {    
        //Variable below used to the close brackets logic
        let prevLineStartingElem = 0;
        //Start json string
        let finalJson = `{` ;

        //Write First element
        finalJson = this.printJsonSingleLine(0, 0, keysArray, valuesArray, finalJson);
        
        //Write other elements
        for(var counter = 1; counter < keysArray.length; counter++) {

            //Print new line
            for(var singleKey in keysArray[counter]) {

                if(keysArray[counter][singleKey] != keysArray[counter-1][singleKey]) {
                    //Close Curly Brackets of previous line
                    if(keysArray[counter-1].length > keysArray[counter].length) {
                        for(let i = 0; i < (keysArray[counter-1].length - keysArray[counter].length); i++) {
                                finalJson += `},`;
                        }
                    } else {
                        finalJson += `,`;
                    }
    
                    //print line elements
                    finalJson = this.printJsonSingleLine(parseInt(singleKey), counter, keysArray, valuesArray, finalJson);
                    prevLineStartingElem = parseInt(singleKey);
                    break;
                }
            }
        }
    
        finalJson += `}`;
        let objJson = JSON.parse(finalJson);
        return JSON.parse(finalJson);
    }
    
    printJsonSingleLine(firstElem: number, lineNumber: number, keysArray: string[][], valuesArray: string[], finalJson: string) 
    {
        //Write keys elements
        for(var i = firstElem; i < keysArray[lineNumber].length; i++) {
            finalJson = finalJson + `"${keysArray[lineNumber][i]}"` + `:`;
            if ( (i+1) < keysArray[lineNumber].length) { 
                finalJson += `{`;
            }
        }
        //Write new value
        finalJson += ` "${valuesArray[lineNumber]}"`;

        return finalJson;
    }
}

export { Converter }