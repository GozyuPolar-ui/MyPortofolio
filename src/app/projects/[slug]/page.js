import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="pt-24 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-3 mb-8 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </span>
          Back to projects
        </Link>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5 mb-10 border border-gray-200 dark:border-gray-800">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_260px] gap-12">
          <div>
            <div className="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mb-2 font-[family-name:var(--font-orbitron)]">
              {project.period}
            </div>
            <h1 className="text-4xl font-bold mb-6 font-[family-name:var(--font-orbitron)]">
              {project.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              {project.longDescription}
            </p>

            {project.features?.length > 0 && (
              <div className="mb-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-[family-name:var(--font-orbitron)]">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-300">
                      <span className="text-cyan-500 dark:text-cyan-400 mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.gallery?.length > 0 && (
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-[family-name:var(--font-orbitron)]">
                  Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-gray-800"
                    >
                      {img.endsWith(".gif") ? (
                        <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                      ) : (
                        <Image src={img} alt={`${project.title} ${i + 1}`} fill className="object-cover" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="sm:sticky sm:top-24 h-fit">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4 font-[family-name:var(--font-orbitron)]">
                Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}