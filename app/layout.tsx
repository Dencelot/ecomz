import type { Metadata } from "next";
import { Inter,Montserrat,Manrope, Ubuntu } from "next/font/google";
import "./globals.scss";
import Header from "./components/Layout/Header";
import localFont from "next/font/local"
import ProviderClient from "./components/Providers/ProviderClient";
import { Contacts } from "./components/Contacts/Contacts";
import { DemoModal } from "./components/DemoModal/DemoModal";
const inter = Inter({ subsets: ["latin"],variable: "--font5", });
const montserrat = Montserrat({ subsets: ["latin"],variable: "--second-family", });
const manrope = Manrope({ subsets: ["latin"],variable: "--font3", });
const ubuntu = Ubuntu({ subsets: ["latin"],weight:['400','500','700'],variable: "--font6", });


export const metadata: Metadata = {
  title: "Ecomz",
  description: "Готовое мобильное приложение для вашего бизнеса",
};
const rising = localFont({
	variable: "--font-family",
	src: [
		{
			path: "./fonts/rising/RisingSun-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./fonts/rising/RisingSun-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/rising/RisingSun-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/rising/RisingSun-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},

		{
			path: "./fonts/rising/RisingSun-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.variable} ${manrope.variable} ${rising.variable} ${inter.variable} ${montserrat.variable}`}>
			<ProviderClient>
				<Header/>
				{children}
				<DemoModal/>
				<Contacts/>
			</ProviderClient>
      </body>
    </html>
  );
}
