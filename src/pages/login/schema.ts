import { z } from "zod";

export const schema = z.object({
  email: z.string().refine((value) => value.trim() !== "", {
    message: "Campo obrigatório",
    path: ["email"], // opcional: especifica o caminho do campo
  }),
  password: z.string().refine((value) => value.trim() !== "", {
    message: "Campo obrigatório",
    path: ["password"], // opcional: especifica o caminho do campo
  }),
});
