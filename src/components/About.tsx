export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading" className="section__title">
          About <span className="accent">Me</span>
        </h2>
        <div className="about__card card">
          <div className="about__content">
            <p>
              I'm a developer focused on building real full-stack applications — not
              just UI demos, but systems with actual user flows and data persistence.
            </p>
            <p>
              My everyday stack includes <strong>React</strong>,{" "}
              <strong>TypeScript</strong>, <strong>Node.js</strong>,{" "}
              <strong>Express</strong>, and <strong>MongoDB</strong>, along with
              patterns like REST APIs, JWT authentication, Stripe payments, file
              uploads, and CI/CD deployment to Vercel and Render.
            </p>
            <p>
              I gravitate toward projects with real user flows: login flows, dashboards,
              orders, bookings, payments, and admin panels — the kind of work that
              requires thinking across the full stack simultaneously.
            </p>
            <p>
              My current portfolio includes two deployed, production-style projects that
              demonstrate these skills end to end. I'm actively looking for a junior
              frontend or full-stack role where I can keep growing with a strong team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
