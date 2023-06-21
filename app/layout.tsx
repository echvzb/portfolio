import { Metadata } from 'next';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const bodyClassName = `${inter.className} bg-base-100 tracking-wide`;

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bodyClassName}>{children}</body>
    </html>
  );
}
