import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "./components/Layout/Header";
import localFont from "next/font/local"
import ProviderClient from "./components/Providers/ProviderClient";
import { Contacts } from "./components/Contacts/Contacts";
import { DemoModal } from "./components/DemoModal/DemoModal";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${rising.variable}`}>
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
