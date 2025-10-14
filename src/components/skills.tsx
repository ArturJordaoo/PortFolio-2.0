import '../css/skills.css';

import IconBootstrap from '../images/bootstrap.png';
import IconJs from '../images/js.png';
import IconNestJs from '../images/nestjs.png';
import IconNextJs from '../images/nextjs.png';
import IconNode from '../images/nodejs.png';
import IconReact from '../images/physics.png';
import { default as IconPostgre } from '../images/postgre.png';
import IconPython from '../images/python.png';

export function Skills() {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <section className="skill-section">
        <h3>Front-end skills</h3>
        <button className="skills-img">
          <img className="sk-img" src={IconReact} alt="program" />
          <span className="">React</span>
        </button>
        <button className="skills-img">
          <img className="sk-img" src={IconJs} alt="program" />
          <span>JS</span>
        </button>
      </section>

      <section className="skill-section">
        <h3>Outras</h3>
        <button className="skills-img">
          <img src={IconPostgre} alt="" className="sk-img" />
          <span>PostgreSql</span>
        </button>
        <button className="skills-img">
          <img className="sk-img" src={IconNextJs} alt="program" />
          <span>NextJs</span>
        </button>
        <button className="skills-img">
          <img className="sk-img" src={IconBootstrap} alt="program" />
          <span>Bootstrap</span>
        </button>
      </section>

      <section className="skill-section">
        <h3>Backend</h3>
        <button className="skills-img">
          <img src={IconNode} alt="Node" className="sk-img bg-light rounded" />
          <span>Node</span>
        </button>
        <button className="skills-img">
          <img src={IconPython} alt="" className="sk-img" />
          <span>Python</span>
        </button>
        <button className="skills-img">
          <img src={IconNestJs} alt="" className="sk-img" />
          <span>NestJs</span>
        </button>
      </section>
    </div>
  );
}
