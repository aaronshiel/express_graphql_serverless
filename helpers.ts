const Ajv = require("ajv")
const ajv = new Ajv();
require('dotenv').config()


const queryPayloadSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
        query:{
            type:"string",
            maxLength:2000
        },
        variables:{
            type:"null"
        }
    }
  }

export function verifyQueryPayload(req:any, res:any){
    validateJson(req, res, queryPayloadSchema)
}

export function validateJson(req:any, res:any, schema: any){
    const body = req.body
    if(!body){
      return res.status(400).send({ "error": "Expected Body" });
    }
    const validate = ajv.compile(schema)
    const valid = validate(body)
    if(!valid){
        console.log(validate.errors)
        throw new Error(`invalid request`)
    }
  }