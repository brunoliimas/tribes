import styled from 'styled-components';


export const FotoPerfil = styled.img`
  max-width: ${props => props.maxw};
  border-radius: 50%;
  border: solid 10px #81C565;
`;

export const Next = styled.button`
  padding: 10px;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  border: none;
  background-color: #E57728;
  color: #FFFFFF;
`;

export const Texto = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;
`;
export const Button = styled.button`
  cursor: pointer;
  width: ${props => props.w};
  padding: 20px 15px;
  margin: ${props => props.m};
  border: none;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF;

  `;

export const Link = styled.a`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  text-decoration: underline;
  text-align: center;

  color: #84BF67;
`;

export const Div = styled.div`
  width: ${props => props.w}%;
  padding: ${props => props.p};
  margin: ${props => props.m};
  display: ${props => props.display};
  flex-direction: ${props => props.direction};
  align-items: ${props => props.align}; 
  justify-content: ${props => props.justify};
`;

export const TitleInput = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  /* margin: 0 0 10px; */
  /* identical to box height */

  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;
`;
export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const Input = styled.input`
  width: 100%;
  height: auto;
  margin: ${props => props.m};
  padding: 15px 20px;
  border: none;
  border-bottom: 3px solid #E57728;
  border-radius: 5px;
  background-color:#47484c;
  color: #ffffff;
  font-size: 1rem;

`;
export const Logo = styled.img`
  width: ${props => props.w};
  height: auto;
`;
export const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  /* identical to box height */
  text-align: center;
  color: #FFFFFF;
  width: ${props => props.width}vw;
  margin: ${props => props.m};
`;
export const Subtitle = styled.h2`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #FFFFFF;
`;





export const Screen = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  /* background-color: #f2f36f; */
  background-image: url(${props => props.url});
  background-color: ${props => props.bg};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Header = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* position: absolute; */
  width: 100vw;
  height: 70px;
  left: 0px;
  top: 0px;

  background: linear-gradient(118.74deg, #E57728 -8.84%, #E5A858 49.4%, #84C167 106.44%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

