import axios from 'axios'
import Corpo from '../../components/Corpo/Corpo'
import { StyledContainer, StyledQuadra } from "./styled"
import { useEffect, useState } from 'react'

export default function TelaQuadras() {
    const [quadras, setQuadras] = useState([])


    useEffect(listarQuadras, [])

    function listarQuadras() {

        const url = `${import.meta.env.VITE_API_BASE_URL}/field`;
        const promise = axios.get(url);
        promise.then((res) => {
            setQuadras(res.data)
        });
        promise.catch(err => {
            alert(err.response.data);
        });
    }

    return (
        <>
            <Corpo />

            <StyledContainer>
                {quadras.map(e =>
                    <StyledQuadra key={e.id} to={`/reservar/${e.id}`}>
                        <div>
                            <img className="logo" src={e.foto_principal} alt='logo' />
                            <a>{e.nome}</a>
                        </div>
                    </StyledQuadra>)}
            </StyledContainer>
        </>
    )
}