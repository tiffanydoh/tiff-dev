import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-4">
        Experience
        <span className="flex-1 h-px bg-gray-100"></span>
      </h2>
      <div className="flex flex-col divide-y divide-gray-100">
        {experience.map((exp) => {
          return (
            <div className="grid grid-cols-[120px_1fr] gap-6 py-6">
              <span className="font-mono text-xs text-gray-400 pt-1">
                {exp.date}
              </span>

              <div>
                <p className="font-medium text-gray-900">{exp.role}</p>
                <p className="text-sm text-green-700 mb-2">{exp.company}</p>
                <ul className="flex flex-col gap-1">
                  {exp.description.map((item) => (
                    <li className="text-sm text-gray-500 leading-relaxed flex gap-2">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
