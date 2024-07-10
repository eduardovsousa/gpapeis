import { useAuth } from "@/hooks/useAuth";
import toast from "react-hot-toast";
import Cookie from 'js-cookie';
import { useRouter } from "next/navigation";

export default function useDashboardController() {
  const { signout } = useAuth();

  const router = useRouter();

  const handleSubmit = (async () => {

    try {
      signout();
      Cookie.remove('guapiPapeis-accessToken');

      router.push('/');

      toast.success('Você será redirecionado...');
    } catch {
      toast.error('Ops, algo deu de errado.')
    }
  })

  return { handleSubmit };
}