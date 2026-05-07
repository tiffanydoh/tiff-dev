import { skills } from "../data";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>

      {skills.map((skill) => {
        return (
          <>
            <h4>{skill.category}</h4>
            <p>{skill.items}</p>
          </>
        );
      })}
    </section>
  );
}
