import { highlights } from "../data";

export default function Highlights() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-3 gap-4 mb-16">
        {highlights.map((highlight) => {
          return (
            <div className="bg-white border border-gray-300 rounded-xl p-6">
              <h3 className="font-medium text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
