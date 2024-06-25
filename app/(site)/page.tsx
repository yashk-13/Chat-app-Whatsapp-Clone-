import ClientOnly from "@/components/ClientOnly";
import Image from "next/image";
import AuthForm from "./components/AuthForm";

// Login Page or Initail Site.
export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg-px-8 bg-gray-100 dark:bg-gray-900">
      <ClientOnly>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            alt=""
            height="58"
            width="58"
            className="mx-auto w-auto"
            src="https://icon2.cleanpng.com/20240205/zze/transparent-whatsapp-logo-green-circle-with-white-arrow-and-whatsapp-1710885812944.webp"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Sign in to your Account
          </h2>
        </div>
        <AuthForm />
      </ClientOnly>
    </div>
  );
}
