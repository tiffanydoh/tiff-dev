import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-4">
        Projects
        <span className="flex-1 h-px bg-gray-100"></span>
      </h2>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div className="border border-gray-100 rounded-xl p-6 hover:border-gray-300 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <p className="text-sm text-green-700">{project.company}</p>
              </div>
              <span className="text-xs font-mono bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                {project.type}
              </span>
            </div>

            <ul className="flex flex-col gap-1">
              {project.description.map((item) => (
                <li className="text-sm text-gray-500 leading-relaxed mb-4">
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span className="text-xs font-mono bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
