import { highlights } from "../data";

export default function Highlights() {
  return (
    <section>
      {highlights.map((highlight) => {
        return (
          <>
            <p>{highlight.title}</p>
            <p>{highlight.description}</p>
          </>
        );
      })}
    </section>
  );
}
