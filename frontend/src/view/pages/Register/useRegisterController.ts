import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authService } from "../../../app/services/authService";
import { useMutation } from "@tanstack/react-query";
import { SignUpParams } from "../../../app/services/authService/signup";
import toast from "react-hot-toast";
import { useAuth } from "../../../app/hooks/useAuth";

const schema = z.object({
  name: z.
  string()
  .min(1, 'Nome é obrigatório'),
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

export function useRegisterController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignUpParams) => {
      return await authService.SignUp(data)
    },
  })

  const { signIn } = useAuth();

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signIn(accessToken);
    } catch (error) {
      toast.error('Ocorreu um erro ao criar a sua conta!')
    }
  })

  return {
    handleSubmit,
    register,
    errors,
    isPending
  }
}
