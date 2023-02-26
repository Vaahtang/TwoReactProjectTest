import MyPosts from "./MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.css'

const Profile =(p)=>{


    return (
        <div className={s.profile}>
                <ProfileInfo/>
                <MyPosts state={p.state}/>
        </div>
    )
}
export default Profile;