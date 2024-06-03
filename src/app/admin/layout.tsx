import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/admin/header";
import Sidebar from "@/components/admin/side-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duality Agency",
  description: "Booking systems for the Duality Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="w-full">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
