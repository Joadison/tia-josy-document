import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aprenda com - Tia Josi",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className="antialiased suppresshydrationwarning data-lt-installed"
      >
        {children}
      </body>
    </html>
  );
}
