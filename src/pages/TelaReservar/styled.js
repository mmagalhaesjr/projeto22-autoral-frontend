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
background-color: rgba(0, 0, 0, 0.6);


h1{
    color: rgba(255, 255, 255, 0.8);
    font-size: 25px;    
    margin-bottom: 20px;
}

`

export const StyledReservar = styled.div`
height: 80%;
width: 80%;
display: flex;
align-items: center;
justify-content:space-between;
border-radius: 5px;

`
export const StyledButton = styled.button`
    border: 1px solid #000000;
    background-color: #2A2A2A;
    width:10%;
    padding: 5px;
    color: white;
    font-size: 15px;
    margin-bottom: 3;
    cursor: pointer;
    border-radius: 10px;

`
