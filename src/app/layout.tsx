import type { Metadata } from "next";
import { Dancing_Script, Imperial_Script, Questrial } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Hưng ❤️ Thuỳ",
  description: "Thiệp Mời Hôn Lễ Ngọc Hưng & Hoàng Thuỳ (12/01/2024)",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Thiệp Mời Hôn Lễ Ngọc Hưng &amp; Hoàng Thuỳ (12/01/2024)</title>
        <meta
          name="description"
          content="Trân trọng kính mời Quý khách tới tham dự Hôn Lễ của chúng tôi vào ngày 12/01/2024 (02/12 Âm Lịch). Sự hiện diện của Quý khách là niềm vinh hạnh của chúng tôi! Rất hân hạnh được đón tiếp."
        />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Thiệp Mời Hôn Lễ Ngọc Hưng &amp; Hoàng Thuỳ (12/01/2024)" />
        <meta
          property="og:description"
          content="Trân trọng kính mời Quý khách tới tham dự Hôn Lễ của chúng tôi vào ngày 12/01/2024 (02/12 Âm Lịch). Sự hiện diện của Quý khách là niềm vinh hạnh của chúng tôi! Rất hân hạnh được đón tiếp."
        />
        <meta property="og:url" content="https://hung-thuy-wedding.vercel.app/" />
        <meta property="og:site_name" content="Thiệp Cưới Online" />
        <meta
          property="og:image"
          content="https://hung-thuy-wedding.vercel.app/images/hungthuy/ht-banner-crop_optimized.jpg"
        />
        <meta property="og:image:width" content="950" />
        <meta property="og:image:height" content="633" />
        <meta property="og:image:type" content="image/jpeg" />
      </head>
      <body
        className={`${questrial.variable} ${parfumerieScriptPro.variable} ${dancingScript.variable} ${imperialScript.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
