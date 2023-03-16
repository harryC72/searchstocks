import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cabin } from "next/font/google";
import { Arvo } from "next/font/google";
import styles from "../styles/App.module.css";
import { AppContext } from "./../context/AppContext";
import { useState } from "react";

const cabin = Cabin({
	subsets: ["latin"],
});

const arvo = Arvo({
	weight: "400",
	subsets: ["latin"],
});

const logoString = "Harry's Finance";

export default function App({ Component, pageProps }: AppProps) {
	const [savedStocks, setSavedStocks] = useState([]);
	const value = { savedStocks, setSavedStocks };
	return (
		<AppContext.Provider value={value}>
			<div className={cabin.className}>
				<div className={`${arvo.className} ${styles.logo}`}>{logoString}</div>
				<Component {...pageProps} />
			</div>
		</AppContext.Provider>
	);
}
