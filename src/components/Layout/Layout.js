// components/Layout/Layout.js
"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden max-w-full">
      <Navbar />
      <main className="overflow-x-hidden max-w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
