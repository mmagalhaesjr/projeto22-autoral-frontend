import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const StyledContainer = styled.div`
position: absolute;
top: 17%;
height: 80%;
width: 100%;
display: flex;
align-items: center;
justify-content:space-evenly;
flex-wrap: wrap;


`

export const StyledQuadra = styled(Link)`
background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    width: 270px;
    height: 270px;
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

div{
    height: 90%;
    width: 95%;
    border-radius: 15px;
    display:flex ;
    flex-direction: column;
    align-items:center;
}

img{
    height: 80%;
    width: 100%;
    border-radius: 15px;
    cursor: pointer;
}

a{
    margin-top:7px;
    font-size: 20px;
    color:#ffffff;
    margin-top: 20px;
}
a:hover{
    color: #000000;
}
`