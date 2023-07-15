import { registerService } from "../service/user-service.js";

const register = async (req, res, next) => {
   try {
      const result = await registerService(req.body);
      res.status(200).json({ data: result });
   } catch (error) {
      next(e);
   }
};

export default register;
