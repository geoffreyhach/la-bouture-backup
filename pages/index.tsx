import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import { Typography } from "@mui/material";
import Hero from "@/components/home/Hero";
import About from "@/components/About/About";
import Menu from "@/components/Menu/Menu";
import Partners from "@/components/Partners/Partners";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>La Bouture - Strasbourg | Le comptoire végétal</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Hero />
                <About />
                <Menu />
                <Partners />
            </main>
        </>
    );
}
