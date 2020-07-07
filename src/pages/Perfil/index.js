import React from 'react';

import Header from '../../components/Header'
import * as S from '../../styles'

import './styles.scss'

import foto from '../../images/perfil.jpg'
// import icon from '../../images/logo2.svg'

const interesses = [{
   interesse: "Surfe",
   ico: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Info_icon-72a7cf.svg/1200px-Info_icon-72a7cf.svg.png"
},{
   interesse: "Hip Hop",
   ico: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Info_icon-72a7cf.svg/1200px-Info_icon-72a7cf.svg.png" 
},{
   interesse: "Rap",
   ico: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Info_icon-72a7cf.svg/1200px-Info_icon-72a7cf.svg.png"
},{
   interesse: "Funk",
   ico: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Info_icon-72a7cf.svg/1200px-Info_icon-72a7cf.svg.png"
},{
   interesse: "Forró",
   ico: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Info_icon-72a7cf.svg/1200px-Info_icon-72a7cf.svg.png"
}]

class Perfil extends React.Component {
   render() {
      return (
         <S.Screen bg="#303134" id="Perfil">
            <Header />
            <div className="perfil">
               <div className="imagemPerfil">
                  <img src={foto} alt="" />
               </div>
               <div className="changePic">
                  <i className="fas fa-camera"></i>
               </div>
            </div>
            <h1 className="title">Prioridades de Tópicos</h1>
            <div className="selecao">
               {interesses.map (i =>(
               <div className="cardSelecao">
                  <i className="fas fa-grip-lines"></i>
                  <div className="itens">
                     <img src={i.ico} alt="" />
                     <h2>{i.interesse}</h2>
                  </div>
               </div>
               ))}
            </div>
         </S.Screen>
      );
   }
}


export default Perfil;