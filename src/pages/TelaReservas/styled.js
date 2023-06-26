import styled from 'styled-components';


export const StyledContainer = styled.div`
position: absolute;
top: 17%;
height: 80%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
h1{
    color: rgba(0, 0, 0, 0.8);
    font-size: 25px;    
    margin-bottom: 20px;
}
`

export const StyledReservas = styled.div`

height: 80%;
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
overflow: scroll;
background-color: rgba(0, 0, 0, 0.6);

&::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
    opacity: 0; /* Inicialmente, torna a barra de rolagem invisível */
    transition: opacity 0.3s; /* Adiciona uma transição suave */
    opacity: 100;
  }

  /* Estiliza o trilho da barra de rolagem */


  /* Estiliza o polegar da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do polegar */
  }

  /* Estiliza o polegar da barra de rolagem quando o mouse está sobre ele */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor do polegar em hover */
  }


`

