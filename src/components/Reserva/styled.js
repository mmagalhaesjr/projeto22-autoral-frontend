import { styled } from "styled-components";


export const StyledReserva = styled.div`
            background-color: rgba(255, 255, 255, 0.6);
            width: 90%;
            min-height: 70px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            margin-top: 20px;
            `

export const StyledButton = styled.div`
            display:flex;
            justify-content: center;

            button{
                background-color: #2A2A2A;
                color: #ffffff;
                width: 100px;
                height: 40px;
                font-size: 15px;
                cursor: pointer;
                border-radius: 10px;
                margin-top: 10px;
                margin-left: 10px;
            }
            button:hover{
                border: 2px solid #FFF509;
            }

`