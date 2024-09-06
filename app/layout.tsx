import "./globals.css";
import LayoutClient from "@/components/LayoutClient/LayoutClient";
import Providers from "./providers";
import { poppins } from "./fonts";
import { Metadata } from "next";
import Loading from "./loading";

export const metadata: Metadata = {
  title: {
    default: "Mahdi Alaee",
    template: "Mahdi Alaee | %s",
  },
  description: "Mahdi Alaee personal website | وبسایت شخصی مهدی علایی",
  authors: [{ name: "Mahdi Alaee" }, { name: "مهدی علایی" }],
  keywords: [
    "Mahdi Alaee",
    "front end",
    "developer",
    "مهدی علایی",
    "توسعه دهنده وبسایت",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body className="relative dark:bg-darkColor dark:text-white min-h-screen">
        <Providers>
          <LayoutClient />
          <main>{children}</main>
        </Providers>
        <Loading isFakeLoading={true} />
      </body>
    </html>
  );
}
