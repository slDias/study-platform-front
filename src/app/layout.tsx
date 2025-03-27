import type { Metadata } from "next";
import "./globals.css";
import { FaBookOpen } from "react-icons/fa6";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Studies",
  description: "A personal studies tracking platform",
};

type RootLayoutProps = Readonly<{ children: React.ReactNode; }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col gap-8">
        <div className="border-b-1 p-4 flex bg-white justify-center">
          <div className="flex basis-10/12 justify-between">
            <div className="flex items-center gap-2">
              <FaBookOpen />
              <span className="font-medium">Ultimate study tracker</span>
            </div>
            <NavBar />
          </div>
        </div>
        <div className="grow">
          {children}
        </div>
        <div></div>
      </body>
    </html>
  );
}
