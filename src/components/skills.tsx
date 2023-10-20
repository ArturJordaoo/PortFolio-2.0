import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../css/skills.css';

interface SkillsProps {
  onSelectHabilidade: (habilidades: string[]) => void;
}

export function Skills({ onSelectHabilidade }: SkillsProps) {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSkillClick = (skill: string) => {
    let updatedSkills: string[];

    if (selectedSkills.includes(skill)) {
      updatedSkills = selectedSkills.filter((selected) => selected !== skill);
    } else {
      updatedSkills = [...selectedSkills, skill];
    }

    setSelectedSkills(updatedSkills);

    onSelectHabilidade(updatedSkills);
  };

  const isSkillSelected = (skill: string) => selectedSkills.includes(skill);

  return (
    <div id="skills">
      <h2>Skills</h2>
      <p>possuo diversas habilidades, mas porque não mostrá-las em projetos</p>
      <p>
        apenas clicar em uma delas que elas filtram os projetos em que são aplicadas
      </p>

      <section className="skill-section">
        <h3>Front-end skills</h3>
        <button
          className={`skills-img ${isSkillSelected('React') ? 'selected' : ''}`}
          type="button"
          onClick={() => handleSkillClick('React')}
        >
          {isSkillSelected('React') && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          <img className="sk-img" src="../../public/images/physics.png" alt="program" />
          <span className="">React</span>
        </button>
        <button
          className={`skills-img ${isSkillSelected('CSS') ? 'selected' : ''}`}
          type="button"
          onClick={() => handleSkillClick('CSS')}
        >
          {isSkillSelected('CSS') && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          <img className="sk-img" src="../../public/images/css-3.png" alt="program" />
          <span>CSS</span>
        </button>
        <button
          className={`skills-img ${isSkillSelected('JS') ? 'selected' : ''}`}
          type="button"
          onClick={() => handleSkillClick('JS')}
        >
          {isSkillSelected('JS') && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          <img className="sk-img" src="../../public/images/js.png" alt="program" />
          <span>JS</span>
        </button>
        <button
          className={`skills-img ${isSkillSelected('HTML') ? 'selected' : ''}`}
          type="button"
          onClick={() => handleSkillClick('HTML')}
        >
          {isSkillSelected('HTML') && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          <img className="sk-img" src="../../public/images/html.png" alt="program" />
          <span>HTML</span>
        </button>
        {/* Add other front-end skills buttons here */}
      </section>

      <section className="skill-section">
        <h3>Outras</h3>
        <button
          className={`skills-img ${isSkillSelected('Git') ? 'selected' : ''}`}
          type="button"
          onClick={() => handleSkillClick('Git')}
        >
          {isSkillSelected('Git') && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          <img src="../../public/images/git.png" alt="" className="sk-img" />
          <span>Git</span>
        </button>
        <button
          className={`skills-img ${isSkillSelected('PostgreSql') ? 'selected' : ''}`}
          type="button"
          onClick={() => handleSkillClick('PostgreSql')}
        >
          {isSkillSelected('PostgreSql') && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          <img src="../../public/images/postgre.png" alt="" className="sk-img" />
          <span>PostgreSql</span>
        </button>
        <button
          className={`skills-img ${isSkillSelected('Bootstrap') ? 'selected' : ''}`}
          type="button"
          onClick={() => handleSkillClick('Bootstrap')}
        >
          {isSkillSelected('Bootstrap') && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          <img className="sk-img" src="../../public/images/bootstrap.png" alt="program" />
          <span>Bootstrap</span>
        </button>
        {/* Add other "Outras" skills buttons here */}
      </section>

      <section className="skill-section">
        <h3>Backend</h3>
        <button
          className={`skills-img ${isSkillSelected('Node') ? 'selected' : ''}`}
          type="button"
          onClick={() => handleSkillClick('Node')}
        >
          {isSkillSelected('Node') && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          <img src="../../public/images/nodejs.png" alt="Node" className="sk-img bg-light rounded" />
          <span>Node</span>
        </button>
        <button
          className={`skills-img ${isSkillSelected('Python') ? 'selected' : ''}`}
          type="button"
          onClick={() => handleSkillClick('Python')}
        >
          {isSkillSelected('Python') && <FontAwesomeIcon icon={faCheck} className="check-icon" />}
          <img src="../../public/images/python.png" alt="" className="sk-img" />
          <span>Python</span>
        </button>
        {/* Add other backend skills buttons here */}
      </section>
    </div>
  );
}
