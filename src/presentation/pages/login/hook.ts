import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { ISchema } from "./interface";
import { zodResolver } from "@hookform/resolvers/zod";

export const useLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISchema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: ISchema) => {
    console.log(data);
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
  };
};
