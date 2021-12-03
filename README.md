# swiftJsonConverter

This project has been made to help in my job, in which I'm always converting these data stuctures.


1 - How to start the API?

  After running the "npm install", run the command below to start the server:
    "./node_modules/.bin/ts-node-dev server.ts"

2 - How to call the API?
    
    In order to call the API, a plain text request containing the swift dictionary string should be sent to the URL: "http://localhost:3000/convert".
    
    Plain text example:
    - 1 : "name: Optional(\"Julio\")"
    - 2 : "age: Optional(\"25\")"
    - 3 : "person.location.state: Optional(\"NY\")"
    - 4 : "person.location.country: Optional(\"US\")"
    - 5 : "comment: Optional(\"Nice guy\")"

    Response example:
    {
      "name": "Julio",
      "age": "25",
      "person": {
        "location": {
          "state": "NY",
          "country": "US"
         }
       },
       "comment": "Nice guy"
    }
