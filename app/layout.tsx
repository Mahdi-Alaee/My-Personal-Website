import "./globals.css";
import LayoutClient from "@/components/LayoutClient/LayoutClient";
import Providers from "./providers";
import { poppins } from "./fonts";

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
      <body className="relative dark:bg-darkColor dark:text-white min-h-screen">
        <Providers>
          <LayoutClient />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
