import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Hero: FC = () => (
  <div className="hero min-h-screen bg-gradient-to-r from-neutral to-base-300">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <Image
        width={500}
        height={500}
        alt="Eduardo Chavez photo"
        src="/img/eduardo_hero.jpg"
        className="rounded-lg shadow-sm"
      />
      <div className="pt-5 lg:pt-0 text-center lg:text-left">
        <h1 className="text-5xl font-bold text-primary leading-tight">
          Eduardo Chavez, <span className="text-base-200 bg-primary">Frontend Engineer.</span>
        </h1>
        <p className="py-10 text-md">
          Currently, I am a Frontend Engineer at Grupo Bursatil Mexicano (GBM+) in Mexico City,
          Mexico. I am specialized in React, Next.js, and TypeScript. I have 3 years of experience
          in the fintech industry. I participated in the 24th Mexican Olympiad in Informatics.
        </p>
        <div className="btn-group">
          <button className="btn btn-primary">Contact</button>
          <Link href="#projects" className="btn btn-primary btn-outline">
            Projects
          </Link>
        </div>
      </div>
    </div>
  </div>
);
