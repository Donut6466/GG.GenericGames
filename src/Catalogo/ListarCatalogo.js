import Mycard from '../card/Card';
import { useEffect, useState } from 'react';
import { listarCatalogo } from '../API/api';
import { format } from 'date-fns';

export default function NovosJogos() {
    const [catalogo, setCatalogo] = useState([]);
  
    useEffect(() => {
      listarCatalogo().then((dados) => {
        setCatalogo(dados);
      });
    }, []);
  
    return (
      <div className="jogo">
        {catalogo.map((jogo, i) => {
          return (
            <Mycard
              capa={jogo.urlCapaPaisagem}
              titulo={jogo.nome}
              lancamento={format(jogo.dataLancamento, 'yyyy')}
              avaliacao={jogo.avaliacao}
            />
          );
        })}
      </div>
    );
  }