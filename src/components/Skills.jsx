import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-4">
        Skills
        <span className="flex-1 h-px bg-gray-200"></span>
      </h2>

      <div className="flex flex-col gap-4">
        {skills.map((skill) => {
          return (
            <>
              <h4 className="text-sm font-medium text-gray-900 mb-2">
                {skill.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span className="text-xs font-mono bg-gray-100 text-gray-600 px-3 py-1 rounded-full border border-gray-200">
                    {item}
                  </span>
                ))}
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
