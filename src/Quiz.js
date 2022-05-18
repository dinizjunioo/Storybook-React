import React, { useEffect, useState } from 'react';

import './Quiz.css';

export function Button2(){
  return (
    <button> Teste2 </button>
  )
}

let Quiz = (props) => {

  const [resposta,setResposta] = useState("");

  let Options = [
    {title: 'React',data: 'Texto 1'},
    {title: 'Vue',data: 'Texto 2'},
    {title: 'Angular',data: 'Texto 3'},
    {title: 'Svelte',data: 'Texto 4'}
  ]

  // Gerando Lista de Botões percorrenda a lista de opções
  let listaDeBotoes = [];

  Options.forEach(option => {
    listaDeBotoes.push(<button onClick={() => setResposta(option.data)}>{option.title}</button>)
  });

  return(
    <div className="questionPanel">
      <h1>TESTE!</h1>
      {listaDeBotoes}
      <hr/>
      <textarea value={resposta} onInput={(campo) => setResposta(campo.target.value) }></textarea>
      <hr/>
      <button className="submitBtn">Reinicia</button>
    </div>
  )

}
export default Quiz;

// npx sb init <--- storybook