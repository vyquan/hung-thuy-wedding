import type { Metadata } from "next";
import { Dancing_Script, Imperial_Script, Questrial } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Hưng ❤️ Thuỳ",
  description: "Chúng mình thành đôi",
  icons: {
    icon: "/favicon.ico",
  },
};

const parfumerieScriptPro = localFont({
  weight: "400",
  src: "../../public/fonts/ParfumerieScriptPro.ttf",
  variable: "--font-imperialScript",
});

const questrial = Questrial({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-questrial",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancingScript",
  weight: ["400", "500", "600", "700"],
});

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-imperialScript",
  weight: "400",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/images/hungthuy/ht-banner-min.jpg" />
      <meta property="og:title" content="Hưng ❤️ Thuỳ" />
      <meta property="og:description" content="Chúng mình thành đôi" />
      <body
        className={`${questrial.variable} ${parfumerieScriptPro.variable} ${dancingScript.variable} ${imperialScript.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
