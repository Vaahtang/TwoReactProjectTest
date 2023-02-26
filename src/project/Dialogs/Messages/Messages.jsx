import s from "../Dialogs.module.css";


const Messages =(p)=> {
    return(
        <div className={s.message}>
            {p.message}
        </div>
    )
}
export default Messages;