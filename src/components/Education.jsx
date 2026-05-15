import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="mb-16">
      <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-4">
        Education
        <span className="flex-1 h-px bg-gray-200"></span>
      </h2>

      <div className="flex flex-col divide-y divide-gray-100">
        {education.map((edu) => (
          <div className="py-6">
            <div className="flex justify-between items-start mb-1">
              <p className="font-medium text-gray-900">{edu.institution}</p>
              <span className="font-mono text-xs text-gray-400">
                {edu.date}
              </span>
            </div>
            <p className="text-sm text-green-700 mb-2">{edu.degree}</p>
            <ul className="flex flex-col gap-1">
              {edu.description.map((item) => (
                <li className="text-sm text-gray-500 leading-relaxed flex gap-2">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
