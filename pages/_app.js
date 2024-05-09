import GlobalStyle from "../src/themes/GlobalStyle";
import { Provider } from "@skynexui/components";

function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <GlobalStyle />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp;
