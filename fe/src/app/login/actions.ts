'use client'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/services/authService';

import { SigninParams } from '@/services/authService/signin';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import { useAuth } from '@/hooks/useAuth';

const schema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Informe um e-mail válido').min(1),
  password: z.string().nonempty('Senha é obrigatória').min(8, 'Senha deve conter pelo menos 8 caracteres'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const { signin } = useAuth();
  const router = useRouter();

  const { register, handleSubmit: hookFormSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const firstLogin = localStorage.getItem('firstLogin');
      if (!firstLogin) {
        const defaultProducts = [
          {
            id: 1,
            name: "Papel Sulfite A4",
            description: "Papel sulfite branco A4 75g",
            price: 20.5,
            quantity: 100,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
          {
            id: 2,
            name: "Envelope Carta",
            description: "Envelope carta branco 90g",
            price: 15.75,
            quantity: 200,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
          {
            id: 3,
            name: "Bloco de Notas",
            description: "Bloco de notas adesivas 76x76mm",
            price: 12.0,
            quantity: 50,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
          {
            id: 4,
            name: "Caneta Esferográfica",
            description: "Caneta esferográfica azul",
            price: 3.5,
            quantity: 150,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
          {
            id: 5,
            name: "Lápis HB",
            description: "Lápis grafite HB",
            price: 1.25,
            quantity: 300,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
          {
            id: 6,
            name: "Caderno Espiral",
            description: "Caderno espiral 200 folhas",
            price: 25.0,
            quantity: 80,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
          {
            id: 7,
            name: "Agenda 2024",
            description: "Agenda diária 2024",
            price: 35.0,
            quantity: 60,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
          {
            id: 8,
            name: "Pasta Plástica",
            description: "Pasta plástica com elástico",
            price: 10.0,
            quantity: 120,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
          {
            id: 9,
            name: "Grampeador",
            description: "Grampeador de metal",
            price: 18.5,
            quantity: 75,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
          {
            id: 10,
            name: "Clips de Papel",
            description: "Clips de papel 100 unidades",
            price: 5.0,
            quantity: 200,
            image:
              "https://media.licdn.com/dms/image/D4D0BAQG5ENi5rvq-iw/company-logo_200_200/0/1698854771993/guapi_papeis_logo?e=2147483647&v=beta&t=rHQVmuPmE_dAzEtGceGiyTk9LdWeKjUXgrFYNTg1D6I",
            registrationDate: new Date().toISOString(),
          },
        ];
        localStorage.setItem('products', JSON.stringify(defaultProducts));
        localStorage.setItem('firstLogin', 'true');
      }

      if (firstLogin) {
        localStorage.setItem('firstLogin', 'false');
      }
    }
  }, []);

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      signin(accessToken);
      Cookie.set('guapiPapeis-accessToken', accessToken, { expires: 1 });
      toast.success('Login realizado com sucesso!');

      router.push('/dashboard')
    } catch {
      toast.error('Credenciais inválidas')
    }
  })

  return { handleSubmit, register, errors, isPending };
}
