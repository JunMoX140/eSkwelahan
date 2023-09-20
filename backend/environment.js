import { z } from "zod";

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  JWT_SECRET: z.string().min(1),
});

const environment = environmentSchema.parse(process.env);

export { environment };