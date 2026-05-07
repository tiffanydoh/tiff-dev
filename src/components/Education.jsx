import { education } from "../data";

export default function Education() {
  return (
    <section>
      <h2>Education</h2>

      {education.map((edu) => {
        return (
          <>
            <p>{edu.institution}</p>
            <p>{edu.degree}</p>
            <p>{edu.description}</p>
          </>
        );
      })}
    </section>
  );
}
