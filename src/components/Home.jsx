export default function Home() {
  return (
    <section className="flex items-start justify-between gap-8 mb-16 py-16">
      <div className="flex-1">
        <p className="font-mono text-xs text-green-700 uppercase tracking-widest mb-4">
          Software Engineer · San Diego, CA · Open to Work
        </p>
        <h1 className="text-4xl font-serif font-light text-gray-900 leading-tight mb-4">
          I don't just write code. <br />I build things that{" "}
          <em className="italic text-yellow-600">change lives.</em>
        </h1>
        <p className="text-sm text-gray-500 leading-relaxed max-w-md mb-6">
          Growing up, I watched my immigrant parents work tirelessly with
          limited opportunities — that drove me to become the first in my family
          to attend college. I found my calling in code, and what started with
          building robots in middle school has grown into a career shipping real
          products that real people depend on. From expanding clean energy
          access for underserved communities to building AI-powered platforms, I
          bring more than just technical skills — I bring purpose. I build
          because I believe technology, done right, can change lives.
        </p>

        <div className="flex gap-3">
          <a
            href="#projects"
            className="text-sm font-medium bg-gray-900 text-white px-5 py-2 rounded-md hover:opacity-80 transition-opacity"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-500 border border-gray-200 px-5 py-2 rounded-md hover:border-gray-400 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* <div className="flex-shrink-0">
        <img
          src="/images/tiffany.jpg"
          alt="Tiffany Do"
          className="w-36 h-36 rounded-full object-cover border-2 border-gray-100"
        />
      </div> */}
      <div className="w-36 h-36 rounded-full bg-green-50 border-2 border-gray-100 flex items-center justify-center flex-shrink-0">
        <span className="font-serif text-3xl italic text-green-700">TD</span>
      </div>
    </section>
  );
}
