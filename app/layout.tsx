import Menu from "@/components/Menu/Menu";
import "./globals.css";
import MenuButton from "@/components/MenuButton/MenuButton";

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
    <html lang="en">
      <body className="relative dark:bg-darkColor dark:text-white min-h-screen overflow-hidden">
        <Menu />
        <MenuButton />
        <main>{children}</main>
      </body>
    </html>
  );
}
