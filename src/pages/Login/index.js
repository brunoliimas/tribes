import React from 'react';

import * as S from '../../styles'
import logo from '../../images/logo.svg'


class Login extends React.Component {
   render() {
      return (
         <S.Container >
            <S.Logo w="200px" src={logo}></S.Logo>
            <S.Div w="100">
               <S.Div w="100" m="10px 0">
                  <S.TitleInput>E-mail</S.TitleInput>
                  <S.Input m="5px 0 0" type="email" placeholder="Digite seu e-mail"></S.Input>
               </S.Div>
               <S.Div w="100" m="10px 0">
                  <S.TitleInput>Senha</S.TitleInput>
                  <S.Input m="5px 0 0" type="password" placeholder="Digite sua senha"></S.Input>
               </S.Div>
               <S.Div w="100" p="20px 0" display="flex" justify="space-around">
                  <S.Button w="100%" bgColor="#E57728">Login</S.Button>
               </S.Div>
            </S.Div>
            <S.Div w="100">
               <S.Texto>Ainda não possui uma conta?
                  <S.Link>Cadastre-se</S.Link>
               </S.Texto>
            </S.Div>
         </S.Container>
      );
   }
}


export default Login;