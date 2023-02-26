import Messages from "./Messages/Messages";
import DialogItem from "./Dialog/DialogItem";
import s from './Dialogs.module.css'

const Dialogs =(p)=>{
    let dialogElement = p.state.dialog.map( dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messageElement= p.state.message.map(message => <Messages id={message.id} message={message.message}/>)
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;