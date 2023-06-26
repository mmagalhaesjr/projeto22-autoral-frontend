import styled from 'styled-components';

export const StyledInicial = styled.form`

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

img{
    width: 100%;
}

button{    
    border: 1px solid #000000;
    background-color: #2A2A2A;
    

    width:40%;
    padding: 15px;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 10px;

    top: 100%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;

}
button:hover{
    border: 3px solid #FFF509;
    transition:100ms;
}
`


