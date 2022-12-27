import { type AppType } from "next/dist/shared/lib/utils";
import { AppState } from "../context/cartContext";

import "../styles/globals.scss";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AppState>
      <Component {...pageProps} />;
    </AppState>
  );
};

export default MyApp;
