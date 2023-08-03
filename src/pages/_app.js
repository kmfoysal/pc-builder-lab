import RootLayout from "@/components/Layouts/RootLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  
  const getLayout = Component.getLayout || ((page) => page);

  return <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>;
}
