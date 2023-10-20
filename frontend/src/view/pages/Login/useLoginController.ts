import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { authService } from "../../../app/services/authService";
import { SignInParams } from "../../../app/services/authService/signin";
import toast from "react-hot-toast";

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

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignInParams) => {
      return await authService.SignIn(data)
    },
  })

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      toast.error('Credenciais inválidas!')
    }
  })


  return {
    handleSubmit,
    register,
    errors,
    isPending
  }
}
