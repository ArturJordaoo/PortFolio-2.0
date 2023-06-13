import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../css/skills.css';

interface SkillsProps {
  onSelectHabilidade: (habilidade: string) => void;
}

export function Skills({ onSelectHabilidade }: SkillsProps) {
  const [selectedSkills, setSelectedSkills] = useState([]);

  return (
    <div id="skills">
      <h2>Skills</h2>
      <p>possuo diversas habilidades, mas porque não mostrá-las em projetos</p>
      <p>
        apenas clicar em uma delas que elas filtram os projetos em que são aplicadas
      </p>
      <h3>Front-end skills</h3>
      <button
        className={`skills-img ${selectedSkill === 'React' ? 'selected' : ''}`}
        type="button"
        onClick={() => {
    if (selectedSkills.includes('React')) {
      setSelectedSkills(selectedSkills.filter(skill => skill !== 'React'));
    } else {
      setSelectedSkills([...selectedSkills, 'React']);
    }
    onSelectHabilidade('React');
      >
        {selectedSkill === 'React' && (
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        )}
        <img
          className="sk-img"
          src="../../public/images/physics.png"
          alt="program"
        />
        <br />
        <span className="">React</span>
      </button>
      <button
        className={`skills-img ${selectedSkill === 'CSS' ? 'selected' : ''}`}
        type="button"
        onClick={() => {
          onSelectHabilidade('CSS');
          setSelectedSkill('CSS');
        }}
      >
        {selectedSkill === 'CSS' && (
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        )}
        <img
          className="sk-img"
          src="../../public/images/css-3.png"
          alt="program"
        />
        <br />
        CSS
      </button>
      <button
        className={`skills-img ${selectedSkill === 'JS' ? 'selected' : ''}`}
        type="button"
        onClick={() => {
          onSelectHabilidade('JS');
          setSelectedSkill('JS');
        }}
      >
        {selectedSkill === 'JS' && (
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        )}
        <img
          className="sk-img"
          src="../../public/images/js.png"
          alt="program"
        />
        <br />
        JS
      </button>
      <button
        className={`skills-img ${selectedSkill === 'HTML' ? 'selected' : ''}`}
        type="button"
        onClick={() => {
          onSelectHabilidade('HTML');
          setSelectedSkill('HTML');
        }}
      >
        {selectedSkill === 'HTML' && (
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        )}
        <img
          className="sk-img"
          src="../../public/images/html.png"
          alt="program"
        />
        <br />
        HTML
      </button>
      <h3>Outras</h3>
      <button
        className={`skills-img ${selectedSkill === 'Git' ? 'selected' : ''}`}
        type="button"
        onClick={() => {
          onSelectHabilidade('Git');
          setSelectedSkill('Git');
        }}
      >
        {selectedSkill === 'Git' && (
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        )}
        <img
          src="../../public/images/git.png"
          alt=""
          className="sk-img"
        />
        <br />
        Git
      </button>
      <button
        className={`skills-img ${selectedSkill === 'PostgreSql' ? 'selected' : ''}`}
        type="button"
        onClick={() => {
          onSelectHabilidade('PostgreSql');
          setSelectedSkill('PostgreSql');
        }}
      >
        {selectedSkill === 'PostgreSql' && (
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        )}
        <img
          src="../../public/images/postgre.png"
          alt=""
          className="sk-img"
        />
        <br />
        PostgreSql
      </button>
      <button
        className={`skills-img ${selectedSkill === 'Bootstrap' ? 'selected' : ''}`}
        type="button"
        onClick={() => {
          onSelectHabilidade('Bootstrap');
          setSelectedSkill('Bootstrap');
        }}
      >
        {selectedSkill === 'Bootstrap' && (
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        )}
        <img
          className="sk-img"
          src="../../public/images/bootstrap.png"
          alt="program"
        />
        <br />
        Bootstrap
      </button>
      <h3>backend</h3>
      <button
        className={`skills-img ${selectedSkill === 'Node' ? 'selected' : ''}`}
        type="button"
        onClick={() => {
          onSelectHabilidade('Node');
          setSelectedSkill('Node');
        }}
      >
        {selectedSkill === 'Node' && (
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        )}
        <img
          src="../../public/images/nodejs.png"
          alt=""
          className="sk-img bg-light rounded"
        />
        <br />
        Node
      </button>
      <button
        className={`skills-img ${selectedSkill === 'Python' ? 'selected' : ''}`}
        type="button"
        onClick={() => {
          onSelectHabilidade('Python');
          setSelectedSkill('Python');
        }}
      >
        {selectedSkill === 'Python' && (
          <FontAwesomeIcon icon={faCheck} className="check-icon" />
        )}
        <img
          src="../../public/images/python.png"
          alt=""
          className="sk-img"
        />
        <br />
        Python
      </button>
    </div>
  );
}
