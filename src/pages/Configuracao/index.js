import React from 'react';

import Header from '../../components/Header'
import * as S from '../../styles'

import './styles.scss'

// import foto from '../../images/perfil.jpg'
// import icon from '../../images/logo2.svg'

// INCOMPLETO

class Configuracao extends React.Component {
   render() {
      return (
         <S.Screen bg="#303134" id="Configuracao">
            <Header />
            <S.Container id="Config">
               <div className="notificacoes">
                  <h2>Notificações</h2>
                  <div className="escolha">
                     <label htmlFor="btn1">Novas mensagens</label>
                     <input type="checkbox" id="btn1" />
                  </div>
                  <div className="escolha">
                     <label htmlFor="btn1">Novas amizades</label>
                     <input type="checkbox" id="btn1" />
                  </div>
                  <div className="escolha">
                     <label htmlFor="btn1">Respostas de tópicos</label>
                     <input type="checkbox" id="btn1" />
                  </div>
               </div>
               <div className="personalizar">
                  <h2>Personalizar</h2>
                  <div className="escolha">
                     <label htmlFor="btn1">Respostas de tópicos</label>
                     <input type="checkbox" id="btn1" />
                  </div>
                  <div className="escolha">
                     <label htmlFor="btn1">Respostas de tópicos</label>
                     <input type="checkbox" id="btn1" />
                  </div>
               </div>
               <div className="meuCadastro">
                  <h2>Meu Cadastro</h2>
                  <S.Input></S.Input>
                  <S.Input></S.Input>
                  <S.Input></S.Input>
                  <S.Input></S.Input>
               </div>
            </S.Container>

         </S.Screen>
      );
   }
}


export default Configuracao;