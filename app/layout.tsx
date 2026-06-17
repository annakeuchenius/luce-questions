import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "Lung Cancer Europe Chatbot — Share Your Questions",
  description:
    "Help Lung Cancer Europe build an AI assistant for patients and caregivers by sharing the questions that matter to you.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
