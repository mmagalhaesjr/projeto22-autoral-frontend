import styled from 'styled-components';

export const StyledHorarios = styled.div`
 display:flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
 width: 650px;
 height: 300px;

 h2{
    font-size: 25px;
    background-color:  rgb(255,255,255, 0.5);
    border-radius: 5px;
    padding: 5px;
    width: 50%;
    text-align: center;
 }
 
`

export const StyledHora = styled.button`
width: 200px;
height: 40px;
display:flex;
align-items: center;
justify-content: center;
margin-left: 5px;
border: 1px solid #000000;
border-radius: 5px;
background-color: ${props => props.disponivel === true ? "#2A2A2A" : "rgb(255, 22, 22, 0.3)" };
background-color: ${props => props.id === props.horarioSelecionado && "rgb(255, 229, 0, 0.5)"};
color:#ffffff;


&:hover{
    border: 2px solid #FFF509;

}
`