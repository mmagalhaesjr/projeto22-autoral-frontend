import dayjs from "dayjs";
import { StyledCalendario } from "./styled";


export default function Calendario({listarHorarios}) {

    return (

        <StyledCalendario
            locale="pt-BR"
            formatDay={(_, date) => dayjs(date).format("DD")}
            onClickDay={((date) => listarHorarios(dayjs(date).format('YYYY-MM-DD')))} 
            minDate={new Date()}
            />
    )
}