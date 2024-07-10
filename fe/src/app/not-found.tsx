import { Button } from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white dark:bg-dark-gray :text-white h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-dark  md:text-4xl dark:text-white">
            Algo deu errado...
          </p>
          <Button className="m-auto">
            <Link href="/">Volte para Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
