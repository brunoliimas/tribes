import React from 'react';

import NavBar from '../Menu'
import * as S from './../../styles'


class Header extends React.Component {
   render() {
      return (
         <S.Header>
            <S.Div>
               <NavBar />
            </S.Div>
            <S.Title width="80">HEADER AQUI</S.Title>
         </S.Header>
      );
   }
}


export default Header;