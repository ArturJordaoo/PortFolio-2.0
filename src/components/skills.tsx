import '../css/skills.css';

// 🔹 Imports de ícones
import IconBootstrap from '../images/bootstrap.png';
import IconJs from '../images/js.png';
import IconNestJs from '../images/nestjs.png';
import IconNextJs from '../images/nextjs.png';
import IconNode from '../images/nodejs.png';
import IconReact from '../images/physics.png';
import IconPostgre from '../images/postgre.png';
import IconPython from '../images/python.png';

export function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <section className="skill-section">
        <h3>Front-end</h3>
        <div className="skills-group">
          <button className="skills-img">
            <img src={IconReact} alt="React" className="sk-img" />
            <span>React</span>
          </button>
          <button className="skills-img">
            <img src={IconJs} alt="JavaScript" className="sk-img" />
            <span>JavaScript</span>
          </button>
          <button className="skills-img">
            <img src={IconNextJs} alt="Next.js" className="sk-img" />
            <span>Next.js</span>
          </button>
          <button className="skills-img">
            <img src={IconBootstrap} alt="Bootstrap" className="sk-img" />
            <span>Bootstrap</span>
          </button>
        </div>
      </section>

      <section className="skill-section">
        <h3>Back-end</h3>
        <div className="skills-group">
          <button className="skills-img">
            <img src={IconNode} alt="Node.js" className="sk-img" />
            <span>Node.js</span>
          </button>
          <button className="skills-img">
            <img src={IconNestJs} alt="NestJS" className="sk-img" />
            <span>NestJS</span>
          </button>
          <button className="skills-img">
            <img src={IconPostgre} alt="PostgreSQL" className="sk-img" />
            <span>PostgreSQL</span>
          </button>
        </div>
      </section>

      <section className="skill-section">
        <h3>Outras</h3>
        <div className="skills-group">
          <button className="skills-img">
            <img src={IconPython} alt="Python" className="sk-img" />
            <span>Python</span>
          </button>
        </div>
      </section>
    </section>
  );
}
