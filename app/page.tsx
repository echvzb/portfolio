import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Eduardo Chavez',
  description: 'Eduardo Chávez Barreto&apos;s portfolio. Full Stack Web Developer.',
  twitter: {
    card: "summary",
  },
  openGraph: {
    type: "website",
    siteName: "Eduardo Chavez",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
