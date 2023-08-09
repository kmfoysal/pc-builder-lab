import RootLayout from "@/components/Layouts/RootLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <RootLayout>
        <div className="min-h-[100vh]">{getLayout(<Component {...pageProps} />)}</div>
      </RootLayout>
    </Provider>
  );
}
