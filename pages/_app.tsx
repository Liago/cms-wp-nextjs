import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<NextUIProvider>
			<Component {...pageProps} />
		</NextUIProvider>
	);
}

export default MyApp;
