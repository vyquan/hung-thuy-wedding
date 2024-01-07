import type { Metadata } from "next";
import { Dancing_Script, Questrial } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Hưng ❤️ Thuỳ",
  description: "Chúng mình thành đôi",
};

const parfumerieScriptPro = localFont({
  weight: "400",
  src: "../../public/fonts/ParfumerieScriptPro.ttf",
  variable: "--font-parfumerieScriptPro",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${questrial.variable} ${parfumerieScriptPro.variable} ${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
