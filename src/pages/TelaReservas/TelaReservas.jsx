import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Reserva from '../../components/Reserva/Reserva';
import Corpo from '../../components/Corpo/Corpo'
import { StyledReservas, StyledContainer } from './styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function TelaReservas() {

    const [reservas, setReservas] = useState([])
    const { token } = useContext(UserContext)
    const navigate = useNavigate()


    useEffect(listarReservas, [])

    function listarReservas() {


        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const url = `${import.meta.env.VITE_API_BASE_URL}/reservation`;
        const promise = axios.get(url, config);
        promise.then((res) => {
            setReservas(res.data)
        });
        promise.catch(err => {

            if (err.response.data === "session not found") {
                navigate("/login"),
                    alert("Necessário realizar login!");

            }
        });
    }

    return (
        <>
            <Corpo />
            <StyledContainer>
                <h1>Reservas</h1>
                <StyledReservas>

                    {reservas.length === 0
                        ?
                        <h2>Você não possui reserva!</h2>
                        :
                        reservas.map((r) =>
                            <Reserva key={r.id} reserva={r} listarReservas={listarReservas} />
                        )
                    }

                    { }
                </StyledReservas>
            </StyledContainer>
        </>

    )
}