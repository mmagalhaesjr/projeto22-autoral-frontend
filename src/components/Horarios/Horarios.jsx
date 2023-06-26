import { StyledHora, StyledHorarios } from "./styled";

export default function Horarios({ agenda, setHorarioSelecionado, horarioSelecionado }) {


    return (
        <StyledHorarios>
            {agenda.length === 0
                ?
                <h2>Nenhum horário disponível para a data selecionada!</h2>
                :

                agenda.map(a => (

                    <StyledHora key={a.id} disabled={!a.disponivel} disponivel={a.disponivel} id={a.id} horarioSelecionado={horarioSelecionado} onClick={() => {setHorarioSelecionado(a.id)}}>
                        {new Date(a.data).getUTCHours().toString().padStart(2, '0') + ':' +
                            new Date(a.data).getUTCMinutes().toString().padStart(2, '0')}
                    </StyledHora>
                ))

            }

        </StyledHorarios>
    )
}