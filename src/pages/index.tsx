import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Search from "../components/Search/Search";
import { searchStocks } from "./../services/searchStocks";

const key = process.env.NEXT_PUBLIC_ALPHA_API_KEY;

export default function Home() {
	return (
		<>
			<Head>
				<title>Search stocks</title>
				<meta name="description" content="search for stock quotes" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.home_container}>
				<h2>Search for Stock</h2>
				<p>Search for stock based on either name of the stock or its symbol</p>
				<Search search={searchStocks} />
			</main>
		</>
	);
}
