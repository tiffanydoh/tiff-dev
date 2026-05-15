import resume from "../assets/documents/Tiffany_Do_Resume_Software_Engineer_v2.pdf";

export default function Contact() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-4">
        Let's Talk
        <span className="flex-1 h-px bg-gray-300"></span>
      </h2>

      <div className="border border-gray-200 rounded-xl p-8">
        <h3 className="font-serif text-3xl font-light text-gray-900 mb-2">
          Let's work <em className="italic text-yellow-600">together.</em>
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md">
          I'm currently open to new opportunities. Whether you have a role in
          mind, a project to collaborate on, or just want to connect — feel free
          to reach out.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:tiffanydoh@gmail.com"
            className="text-xs font-mono text-gray-500 border border-gray-200 rounded-md px-4 py-2 hover:border-green-700 hover:text-green-700 transition-colors"
          >
            ✉ tiffanydoh@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/tiffanydoh"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-gray-500 border border-gray-200 rounded-md px-4 py-2 hover:border-green-700 hover:text-green-700 transition-colors"
          >
            in LinkedIn
          </a>

          <a
            href="https://github.com/tiffanydoh"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-gray-500 border border-gray-200 rounded-md px-4 py-2 hover:border-green-700 hover:text-green-700 transition-colors"
          >
            ⬡ GitHub
          </a>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-gray-500 border border-gray-200 rounded-md px-4 py-2 hover:border-green-700 hover:text-green-700 transition-colors"
          >
            ↓ Resume
          </a>
        </div>
      </div>
    </section>
  );
}
