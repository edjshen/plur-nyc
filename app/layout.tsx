import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLUR NYC",
  description: "Peace. Love. Unity. Respect. — NYC underground events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
