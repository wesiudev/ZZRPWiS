import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Cardo } from "next/font/google";
import Author from "@/components/Author";
import Toast from "@/components/Toast";
const cardo = Cardo({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cardo",
});
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`overflow-x-hidden bg-gradient-to-r from-green-800 via-green-500 to-green-800 ${inter.className} ${cardo.variable} ${gotham.variable} font-gotham font-light`}
      >
        {children}
        <Author />
      </body>
    </html>
  );
}
const gotham = localFont({
  src: [
    {
      path: "../../public/fonts/Gotham.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/fonts/Gotham-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/GothamBold.ttf",
      weight: "500",
      style: "bold",
    },
  ],
  variable: "--font-gotham",
});
