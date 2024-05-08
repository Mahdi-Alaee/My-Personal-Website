import Menu from "@/components/Menu/Menu";
import "./globals.css";
import MenuButton from "@/components/MenuButton/MenuButton";
import LayoutClient from "@/components/LayoutClient/LayoutClient";
import Providers from "./providers";
import { poppins } from "./fonts";
import HomeShape from "@/components/HomeShape/HomeShape";

export const metadata = {
  title: "Mahdi Alaee",
  description: "Mahdi alaee personal website | وبسایت شخصی مهدی علایی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body className="relative dark:bg-darkColor dark:text-white min-h-screen overflow-hidden">
        <Providers>
          <LayoutClient />
          <main className="relative z-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
