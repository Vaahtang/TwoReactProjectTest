import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const SelectedLink = () => {
    return (

        navData => navData.isActive ? s.active : s
    )
}
const Navbar = () => {
    return (<div className={s.nav} >
        <div className={s.item}>
<NavLink to='/profile' className={SelectedLink()}>Profile </NavLink>
        </div>
        <div className={s.item}>
<NavLink to='/dialogs' className={SelectedLink()}>Dialogs</NavLink>
        </div>
        <div className={s.item}>
Mysiks
        </div>
        <div className={s.item}>
Piles
        </div>
    </div>)
}

export default Navbar;