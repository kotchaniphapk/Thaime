import type { Metadata } from "next";
import { Thasadith } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";

const thasadith = Thasadith({
  variable: "--font-thasadith",
  subsets: ["latin", "thai"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Somtum",
  description: "Somtum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${thasadith.variable} font-sans antialiased`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
