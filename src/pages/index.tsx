import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
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
			<main>
				<Search search={searchStocks} />
			</main>
		</>
	);
}
