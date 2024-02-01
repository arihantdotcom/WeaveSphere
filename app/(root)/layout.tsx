import Topbar from "@/components/shared/Topbar";
import "../globals.css";
import type { Metadata } from "next";

import Leftsidebar from "@/components/shared/Leftsidebar";
import Rightsidebar from "@/components/shared/Rightsidebar";
import BottomBar from "@/components/shared/BottomBar";
import React from "react";

import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeaveSphere",
  description: "Generated by create next app",
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
      >
        <html lang='en'>
          <body className={inter.className}>
            <Topbar />
  
            <main className='flex flex-row'>
              <Leftsidebar />
              <section className='main-container'>
                <div className='w-full max-w-4xl'>{children}</div>
              </section>
              {/* @ts-ignore */}
              <Rightsidebar />
            </main>
  
            <BottomBar />
          </body>
        </html>
      </ClerkProvider>
    );
  }