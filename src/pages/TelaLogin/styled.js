import styled from 'styled-components';


export const StyledLogin = styled.div`
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: rgba(0, 0, 0, 0.6);
            padding: 15px;
            border-radius: 15px;
            width: 80vh;
            height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;

        form{
            width:100%;
            height: 80%;    
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            }

        input{
            margin-bottom: 30px;
        }
        .inputBox{
            position: relative;
            width: 80%;
        }

        .inputUser{
            background: none;
            border: none;
            border-bottom: 1px solid white;
            outline: none;
            color: white;
            font-size: 20px;
            width: 100%;
            letter-spacing: 2px;

            
        }
        .labelInput{
            position: absolute;
            top: 0px;
            left: 0px;
            pointer-events: none;
            transition: .5s;

            
        }
        .inputUser:focus ~ .labelInput,
        .inputUser:valid ~ .labelInput{
            top: -20px;
            font-size: 12px;
            color: yellow;
        }
      
        #submit{
            background-color: #2A2A2A;
            width: 50%;
            border: none;
            padding: 15px;
            color: white;
            font-size: 15px;
            cursor: pointer;
            border-radius: 10px;
        }
        #submit:hover{
           border: 2px solid #FFF509;
        }

        a{
            color: #ffffff;
        }
        a:hover{
            color:#FFF509;
        }
`
