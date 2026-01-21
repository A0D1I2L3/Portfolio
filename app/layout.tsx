import type { Metadata } from "next";
import { Poppins, Quicksand, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const quicksand = Quicksand({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adil Haneef",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${quicksand.variable} ${roboto.variable}`}
    >
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
