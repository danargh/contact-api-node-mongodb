import Joi from "joi";
import { ResponseError } from "../error/response-error.js";

const registerUserValidation = Joi.object({
   username: Joi.string().max(100).required(),
   email: Joi.string().email().max(100).required(),
   password: Joi.string().min(6).max(100).required(),
   token: Joi.string().max(100),
});

const validate = (schema, request) => {
   const result = schema.validate(request);
   if (result.error) {
      throw new ResponseError(400, result.error.message);
   } else {
      return result.value;
   }
};

export { validate, registerUserValidation };
