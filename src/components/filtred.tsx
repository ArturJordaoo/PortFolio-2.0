import { useState } from 'react';
import { Skills } from './skills';
import { Projetos } from './Projetos';

export function Filtred() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSelectHabilidade = (habilidades: string[]) => {
    setSelectedSkills(habilidades);
  };

  return (
    <div>
      <Skills onSelectHabilidade={handleSelectHabilidade} />
      <Projetos habilidades={selectedSkills} />
    </div>
  );
}
