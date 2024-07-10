import { useLoginController } from "./actions";
import ThemeSwitch from "@/components/ThemeSwitch";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function LoginForm() {
  const { handleSubmit, register, errors, isPending } = useLoginController();

  return (
    <div className="max-w-screen-sm m-auto h-screen flex items-center justify-center flex-col gap-4 px-10 lg:px-20">
      <header className="flex flex-col items-center gap-4 text-center w-full">
        <ThemeSwitch />
        <h1 className="text-2xl font-bold tracking-[-1px]">
          Entre em sua conta
        </h1>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <Input
          type="email"
          placeholder="E-mail"
          error={errors.email?.message}
          {...register("email")}
          disabled={isPending}
        />

        <Input
          type="password"
          placeholder="Senha"
          error={errors.password?.message}
          {...register("password")}
          disabled={isPending}
        />
        <Button type="submit" className="mt-2" isLoading={isPending}>
          Entrar
        </Button>
      </form>
    </div>
  );
}
