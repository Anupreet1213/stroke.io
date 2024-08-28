"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useEffect } from "react";
import Features from "./_components/Features";
import Footer from "./_components/Footer";

export default function Home() {
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log("--> ", user);
  }, [user]);
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
