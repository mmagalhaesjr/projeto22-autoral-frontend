import Corpo from '../../components/Corpo/Corpo'
import { StyledInicial } from "./styled"
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';



export default function TelaInicial() {
    const navigar = useNavigate();

    function quadras(e) {
        e.preventDefault()
        navigar("/quadras")

    }

    return (

        <>
            <Corpo />

            <StyledInicial onSubmit={quadras}>
                <img className="logo" src={logo} alt='logo' />
                <button type="submit">RESERVAR</button>
            </StyledInicial>
        </>
    )
}