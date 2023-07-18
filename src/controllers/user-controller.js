import { registerService } from "../service/user-service.js";

const registerController = async (req, res, next) => {
   try {
      const result = await registerService(req.body);
      res.status(200).json({ data: result });
   } catch (error) {
      next(error);
   }
};

export { registerController };
