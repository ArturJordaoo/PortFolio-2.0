import '../css/skills.css';

interface SkillsProps {
  onSelectHabilidade: (habilidade: string) => void;
}

export function Skills({ onSelectHabilidade }: SkillsProps) {
  return (
    <div>
      <h2 id="skills">Skills</h2>
      <p>possuo diversas habilidades, mas porque não mostrá-las em projetos</p>
      <p>
        apenas clicar em uma delas que elas filtram os projetos em que são
        aplicadas
      </p>

      {/* Exemplo de habilidades com cliques */}
      <button onClick={() => onSelectHabilidade('HTML')}>HTML</button>
      <br />
      <button onClick={() => onSelectHabilidade('CSS')}>CSS</button>
      <br />
      <button onClick={() => onSelectHabilidade('JavaScript')}>
        JavaScript
      </button>
    </div>
  );
}
