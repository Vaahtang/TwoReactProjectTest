import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem =(p)=>{
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + p.id}> {p.name}</NavLink>
        </div>
    )
}
export default DialogItem;