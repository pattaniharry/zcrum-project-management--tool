import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { shadesOfPurple } from "@clerk/themes";
export const metadata = {
  title: "zcrum",
  description: "Project management application for offices",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "!text-white ",
          card: "bg-white",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} dotted-background`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer>
              <p className="bg-gray-900 py-12 text-center">
                made with love by harry
              </p>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
