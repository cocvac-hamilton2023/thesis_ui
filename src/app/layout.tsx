import "./globals.css";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "COCVAC Reports",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
