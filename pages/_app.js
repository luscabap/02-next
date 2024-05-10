import Header from "../src/components/Header";
import GlobalStyle from "../src/themes/GlobalStyle";
import { Provider } from "@skynexui/components";

function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp;
