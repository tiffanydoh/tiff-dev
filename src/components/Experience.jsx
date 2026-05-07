import { experience } from "../data";

export default function Experience() {
  return (
    <section>
      <h2>Experience</h2>

      {experience.map((exp) => {
        return (
          <>
            <p>{exp.date}</p>
            <p>{exp.role}</p>
            <p>{exp.company}</p>
            <p>{exp.description}</p>
          </>
        );
      })}
    </section>
  );
}
