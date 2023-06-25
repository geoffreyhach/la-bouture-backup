import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";
import "../components/Menu/datepicker.css";
import axios from "axios";

export default function App({ Component, pageProps }: AppProps) {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (url) =>
          axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data),
      }}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}
