import axios from 'axios';
import { BASE_URL } from '../../util/request';
import icon from '../../assets/img/notification-icon.svg';
import './style.css';

type Props = {
    saleId: number;
}

function handleClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("SUCESSO");
        });
}

function NotificationButton({saleId} : Props) {
    return (
        <>
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton;
