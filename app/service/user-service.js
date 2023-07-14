import { validate } from "../middleware/validate.js";
import { registerUserValidation } from "../middleware/validation.js";
import { prisma } from "../utils/prismaClient.js";
import { ResponseError } from "../utils/responseError.js";
import bycript from "bcrypt";

const register = async (request) => {
   const user = validate(registerUserValidation, request);

   const countUser = await prisma.user.count({
      where: {
         username: user.username,
      },
   });

   // check if username already exists
   if (countUser > 0) {
      throw new ResponseError(400, "Username already exists");
   }

   // hash password
   user.password = await bycript.hash(user.password, 10);

   // if username doesn't exist, create new user
   const result = await prisma.user.create({
      data: user,
      select: {
         username: true,
         email: true,
      },
   });

   return result;
};

export { register };
