import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "天明 - AI实践者的个人主页",
  description: "天明,3年+技术开发经验,AI编程与智能体开发专家,AI实践者",
  keywords: ["AI编程", "智能体开发", "大模型应用", "Python", "C++"],
  authors: [{ name: "天明" }],
  openGraph: {
    title: "天明 - AI实践者的个人主页",
    description: "天明,3年+技术开发经验,AI编程与智能体开发专家",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
