import { Inter } from "next/font/google";
import "./globals.css";
import { Cardo } from "next/font/google";
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
        className={`bg-gradient-to-r from-green-800 via-green-500 to-green-800 ${inter.className} ${cardo.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
