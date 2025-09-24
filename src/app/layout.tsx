import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"]
});

export const metadata: Metadata = {
  title: "Giane Mayumi 👋",
  description: "Hi, I'm Giane Mayumi and this is my personal website. Currently, I am pursuing a Master's degree in Computer Science at McGill University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
