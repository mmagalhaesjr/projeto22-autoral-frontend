
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import Calendario from '../../components/Calendario/Calendario';
import Corpo from '../../components/Corpo/Corpo'
import Horarios from '../../components/Horarios/Horarios';

import { useNavigate, useParams } from 'react-router-dom';
import { StyledReservar, StyledContainer, StyledButton } from './styled';

import 'react-calendar/dist/Calendar.css'
import axios from 'axios';
import dayjs from 'dayjs';


export default function TelaReservas() {
    const { id } = useParams();
    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    const dataAtual = dayjs().format('YYYY-MM-DD')
    const [agenda, setAgenda] = useState([])
    const [horarioSelecionado, setHorarioSelecionado] = useState("batata")


    function listarHorarios(data) {

        const url = `${import.meta.env.VITE_API_BASE_URL}/schedule/${id}/${data}`;
        const promise = axios.get(url);

        promise.then((res) => {
            setAgenda(res.data)
        });

        promise.catch(err => {
            console.log(err.response?.data?.message);
            setAgenda([])
        });
    }

    useEffect(() => listarHorarios(dataAtual), [])

    function realizarReserva(horarioSelecionado) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const body = {id: horarioSelecionado}

        const url = `${import.meta.env.VITE_API_BASE_URL}/reservation`;
        const promise = axios.post(url, body, config);

        promise.then(() => {
            alert("Reserva realizada com sucesso")
            navigate("/reservas")
        });

        promise.catch(err => {
            console.log(err.response.data);
            if(err.response.data === "session not found") navigate("/login")
        });

    }

    return (
        <>
            <Corpo />
            <StyledContainer>
                <h1>Reservar</h1>
                <StyledReservar>
                    <Calendario listarHorarios={listarHorarios} />
                    <Horarios agenda={agenda} setHorarioSelecionado={setHorarioSelecionado} horarioSelecionado={horarioSelecionado} />
                </StyledReservar>
                <StyledButton onClick={() => realizarReserva(horarioSelecionado)}>RESERVAR</StyledButton>
            </StyledContainer>

        </>

    )
}