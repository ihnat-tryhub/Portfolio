import { demonstrations } from "../data/projects";

export default function WhatIDemo() {
  return (
    <section
      id="experience"
      className="section what-i-demo"
      aria-labelledby="demo-heading"
    >
      <div className="container">
        <h2 id="demo-heading" className="section__title">
          What These Projects <span className="accent">Demonstrate</span>
        </h2>
        <p className="section__subtitle">
          Skills and engineering practices applied across both projects
        </p>

        <ul className="demo__grid" aria-label="Demonstrated skills">
          {demonstrations.map((item) => (
            <li key={item.text} className="demo__card card">
              <span className="demo__icon" aria-hidden="true">
                {item.icon}
              </span>
              <p className="demo__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
