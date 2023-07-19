import supertest from "supertest";
import { app } from "../app.js";
import { prisma } from "../src/lib/database.js";

describe("POST /api/users", function () {
   afterEach(async () => {
      await prisma.user.deleteMany({
         where: {
            username: "user1",
         },
      });
   });

   // success case
   it("should can register new user", async () => {
      const result = await supertest(app).post("/api/users").send({
         username: "user1",
         email: "user1@gmail.com",
         password: "user12345",
      });
      expect(result.status).toBe(200);
      expect(result.body.data.username).toBe("user1");
      expect(result.body.data.email).toBe("user1@gmail.com");
      expect(result.body.data.password).toBeUndefined();
   });
});
