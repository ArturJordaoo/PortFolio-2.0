import React, { useState } from 'react';
import { Projetos } from './Projetos';
import { Skills } from './skills';

function ComponentePai() {
  const [habilidadesSelecionadas, setHabilidadesSelecionadas] = useState<string[]>([]);

  const handleSelectHabilidade = (habilidade: string) => {
    if (habilidadesSelecionadas.includes(habilidade)) {
      setHabilidadesSelecionadas(habilidadesSelecionadas.filter(h => h !== habilidade));
    } else {
      setHabilidadesSelecionadas([...habilidadesSelecionadas, habilidade]);
    }
  };

  return (
    <div>
      <Skills onSelectHabilidade={handleSelectHabilidade} />
      <Projetos habilidades={habilidadesSelecionadas} />
    </div>
  );
}

export default ComponentePai;
