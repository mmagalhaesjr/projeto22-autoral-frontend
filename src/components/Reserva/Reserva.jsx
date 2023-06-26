import axios from "axios";
import { StyledButton, StyledReserva } from "./styled"
import dayjs from 'dayjs';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Reserva({ reserva, listarReservas }){
    const hora = dayjs(reserva.agenda.data.split('T')[0]).format('DD-MM-YYYY')
    const { token } = useContext(UserContext)

function cancelarReserva(id){

    const url = `${import.meta.env.VITE_API_BASE_URL}/reservation/${id}`;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.delete(url, config);

    promise.then((res) => {
        alert("Reserva cancelada!")
        listarReservas()
    });

    promise.catch(err => {
        console.log(err.response?.data?.message);

    });

}

    return (

        <StyledReserva>

            <div><h2>{reserva.usuario.nome}</h2></div>

            <div><h2>{hora}</h2></div>

            <div><h2>{new Date(reserva.agenda.data).getUTCHours().toString().padStart(2, '0') + ':' +
                new Date(reserva.agenda.data).getUTCMinutes().toString().padStart(2, '0')}</h2></div>

            <div><h2>R${reserva.agenda.valor},00</h2></div>

            <StyledButton>
                <button onClick={() => cancelarReserva(reserva.id)}>Cancelar</button>
            </StyledButton>
        </StyledReserva>


    )
}