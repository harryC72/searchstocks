import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cabin } from "next/font/google";
import { Arvo } from "next/font/google";
import styles from "../styles/App.module.css";

const cabin = Cabin({
	subsets: ["latin"],
});

const arvo = Arvo({
	weight: "400",
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={cabin.className}>
			<div className={`${arvo.className} ${styles.logo}`}>Harry's Finance</div>
			<Component {...pageProps} />
		</div>
	);
}
