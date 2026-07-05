import { skillGroups } from "../data/projects";

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className="section__title">
          Tech <span className="accent">Stack</span>
        </h2>
        <p className="section__subtitle">
          Tools and technologies I work with regularly
        </p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group card">
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="skill-badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
