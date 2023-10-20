import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
  .string()
  .min(1, 'E-mail é obrigatório')
  .email('Insira um e-mail válido'),
  password: z
  .string()
  .min(1, 'Senha é obrigatória')
  .min(8, 'A senha deve conter no mínimo 8 caracteres')
})

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log('api: ', data)
  })

  return {
    handleSubmit,
    register,
    errors
  }
}
