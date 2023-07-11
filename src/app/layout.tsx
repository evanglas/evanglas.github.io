import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evan Glas",
  description:
    "Hi! I’m an incoming MS in Electrical & Computer Engineering (ECE) student and recent ECE, CS graduate at Duke University. I enjoy solving difficult problems and building creative technical solutions. Please feel free to explore some of my past projects!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
