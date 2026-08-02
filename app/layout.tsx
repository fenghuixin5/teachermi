import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小米的班主任工作台",
  description: "七年级三班的学生、考勤、成绩、班级事务与家校沟通工作台。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "小米的班主任工作台",
    description: "学生 · 考勤 · 成绩 · 家校沟通",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "小米的班主任工作台",
    description: "学生 · 考勤 · 成绩 · 家校沟通",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
