import type { Metadata } from "next";
import { Outfit  } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import { ScrollToTop } from "@/components/ScrollToTop";



const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ThaiMe",
  description: "Thai food on wheels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${outfit.variable} ${outfit.className} font-sans antialiased`}
      >
        <I18nProvider>
          {children}
          <ScrollToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
