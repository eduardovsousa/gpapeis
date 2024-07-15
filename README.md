# Guapi Papeis

Projeto feito para a Guapi Papeis, que utiliza Next.js no frontend, React Native no mobile e Nest.js no backend, com TypeScript.

## Pré-requisitos

Certifique-se de ter o Node.js e npm instalados em sua máquina.

## Passos para iniciar o projeto

### Backend (Nest.js)

1.  **Baixar o projeto:**

    ```bash
    $ git clone https://github.com/eduardovsousa/guapipapeis.git
    cd guapipapeis/api
    ```

2.  **Instalar as dependências:**

    ```bash
    $ npm install
    ```

3.  **Configurando as variáveis de ambiente:**
    Copie o arquivo .env.example e crie um token para a varíavel JWT, exemplo:
    > `JWT_SECRET=abUkvFLLhEdEitB2D3B5Yw`
4.  **Executar o servidor de desenvolvimento:**
    Obs: Inicie o servidor da API antes de rodar o servidor do front

    ```bash
    $ npm run start:dev
    ```

    O backend será executado na porta `3000`.

### Frontend (Next.js)

1.  **Baixar o projeto (caso não tenha baixado o respositório completo):**

    ```bash
    $ git clone https://github.com/eduardovsousa/guapipapeis.git
    cd guapipapeis/fe
    ```

2.  **Instalar as dependências:**

    ```bash
    $ npm install
    ```

3.  **Configurando as variáveis de ambiente:**
    Copie o arquivo .env.example e coloque a URL da API, exemplo:
    >`NEXT_PUBLIC_API_URL=http://localhost:3000`
4.  **Executar o servidor de desenvolvimento:**
    Após o servidor com a API funcionando, rode o servidor do front:

    ```bash
    $ npm run dev
    ```

    O frontend será executado na porta `3001`.

5.  **Fazer login:**

    - Email: `guapipapeis@mail.com`
    - Senha: `123123123`

6.  **Modo responsivo:**

    - Após iniciar o servidor, é necessário fechar a notificação do DevExpress para visualizar corretamente o modo responsivo (banner laranja, ele oculta o botão de adicionar um item).
      ![enter image description here](https://docs.devexpress.com/GeneralInformation/images/devexpress-trial-version-bar.png)

### Mobile (React Native)

1.  **Baixar o projeto (caso não tenha baixado o respositório completo):**
    ```bash
    $ git clone https://github.com/eduardovsousa/guapipapeis.git
    cd guapipapeis/mobile
    ```
2.  **Instalar as dependências:**

    ```bash
    $ npm install
    ```

3.  **Executar o servidor de desenvolvimento:**

    Usando Expo Go
    ```bash
    $ npm expo start
    ```

    Para web
    ```bash
    $ npm run web
    ```

    Para iOS
    ```bash
    $ npm run ios
    ```

    Para Android
    ```bash
    $ npm run android
    ```

## Tecnologias utilizadas

- **Frontend:**

  - Next.js
  - TypeScript
  - TailwindCSS
  - @headlessui/react
  - @hookform/resolvers
  - @radix-ui/react-icons
  - @tanstack/react-query
  - axios
  - clsx
  - DevExpress DataGrid
  - framer-motion
  - js-cookie
  - next-themes
  - react-hook-form
  - react-hot-toast
  - tailwind-merge
  - zod

- **Mobile:**
  - AsyncStorage
  - Expo
  - Image Picker
  - SVG

- **Backend:**

  - Nest.js
  - TypeScript
  - JWT
  - Class-transformer e class-validator
  - dotenv
