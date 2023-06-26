import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, projects } from "./Projects.constants";
import { LinkIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export const Projects: FC = () => (
  <div id="projects" className="py-14 container mx-auto md:px-8 px-4">
    <h1 className="text-center font-bold text-3xl pb-14">Projects</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <div key={project.name} className="card shadow-xl">
          <figure>
            <Image
              width={384}
              height={384}
              alt={project.name}
              src={`/img/projects/${project.imgName}.png`}
            />
          </figure>
          <div className="card-body px-6 py-4 flex flex-row justify-between">
            <h2 className="card-title flex-col items-start">
              <span className={`badge badge-sm badge-primary font-normal`}>
                {categories[project.category].text}
              </span>
              {project.name}
            </h2>
            <div className="card-actions flex flex-col justify-end">
              <Link href={project.url} className="btn btn-outline btn-primary btn-sm" target="_blank">
                <LinkIcon className="w-5 h-5" />
              </Link>
              {/* <button className="btn btn-outline btn-primary btn-sm">
                <CodeBracketIcon className="w-5 h-5" />
              </button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
