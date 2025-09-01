import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";

export const metadata = {
  title: "I Have Something to Say... Siya",
  description:
    "This isn’t just a website. It’s something truly special, built with love — just for you. Open it and feel it unfold.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
