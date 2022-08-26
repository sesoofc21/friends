import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  if (pathname === "/accounts") {
    return <Component {...pageProps} />;
  }

  return (
    <div className="container mx-auto antialiased">
      <Head>
        <title>Copyright Help Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b flex justify-center">
        <Image src={"/loading.gif"} width={295} height={160}/>
      </header>

      <main className="mx-auto flex py-16 justify-center">
        <Component {...pageProps} />
      </main>

      <footer className="flex justify-center items-center pt-6">
        <a
          href="https://about.facebook.com/meta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center space-x-2">
            <h1 className="font-semibold mb-2">Powered by</h1>
            <span>
              <Image src="/meta.png" alt="Meta Logo" width={72} height={45} />
            </span>
          </div>
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
