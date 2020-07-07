import React from 'react';

import * as S from '../../styles'
import logo from '../../images/logo.svg'


class Cadastro extends React.Component {
   render() {
      return (
         <S.Container >
            <S.Logo w="150px" src={logo} />
            <S.Div w="100" m="10px">
               <S.TitleInput>Nome</S.TitleInput>
               <S.Input m="5px 0 0" type="name" placeholder="Digite seu nome"></S.Input>
            </S.Div>
            <S.Div w="100" m="10px">
               <S.TitleInput>Sobrenome</S.TitleInput>
               <S.Input m="5px 0 0" type="name" placeholder="Digite seu sobreome"></S.Input>
            </S.Div>
            <S.Div w="100" m="10px">
               <S.TitleInput>Usuário</S.TitleInput>
               <S.Input m="5px 0 0" type="name" placeholder="Digite seu usuário"></S.Input>
            </S.Div>
            <S.Div w="100" m="10px">
               <S.TitleInput>E-mail</S.TitleInput>
               <S.Input m="5px 0 0" type="email" placeholder="Digite seu e-mail"></S.Input>
            </S.Div>
            <S.Div w="100" m="10px">
               <S.TitleInput>Senha</S.TitleInput>
               <S.Input m="5px 0 0" type="password" placeholder="Digite sua senha"></S.Input>
            </S.Div>
            <S.Div w="100" m="10px">
               <S.TitleInput>Digite a Senha novamente</S.TitleInput>
               <S.Input m="5px 0 0" type="password" placeholder="Confirme sua senha"></S.Input>
            </S.Div>
            <S.Div w="100" p="20px 10px" m="0 0 40px 0" display="flex" justify="space-around">
               <S.Button m="10px" bgColor="#E57728">Cadastrar</S.Button>
               <S.Button m="10px" bgColor="#3A5998">Facebook</S.Button>
            </S.Div>
            <S.Div w="100">
               <S.Texto>Já possui uma conta ?
                  <S.Link>Faça login</S.Link>
               </S.Texto>
            </S.Div>
         </S.Container>
      );
   }
}


export default Cadastro;