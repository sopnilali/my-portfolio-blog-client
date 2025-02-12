import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexaBlog",
  description:
    "Welcome to NexaBlog – where innovation meets imagination in the dynamic realm of technology, offering a thrilling journey through the latest trends and groundbreaking discoveries in the world of tech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html suppressContentEditableWarning lang="en">
      <body className={roboto.className}>
        <div className="min-h-screen">{children}</div>
        {/* <Footer/> */}
      </body>
    </html>
    </Providers>
  );
}
