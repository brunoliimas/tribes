import React from 'react';

import * as S from '../../styles'
import logo from '../../images/logo2.svg'


class Intro extends React.Component {
   render() {
      return (
         <S.Container >
            <S.Logo w="150px" src={logo}></S.Logo>
            <S.Div w="100">
               <S.Title m="30px 0 15px">Qual Sua Tribo?</S.Title>
               <S.Texto>Para começar a usar seu perfil, primeiro nos informe sobre o que você curte.</S.Texto>
            </S.Div>
            <S.Div w="100" display="flex" justify="flex-end">
               <S.Next><i className="fas fa-arrow-right fa-2x"></i></S.Next>
            </S.Div>
         </S.Container>
      );
   }
}


export default Intro;