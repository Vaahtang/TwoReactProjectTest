import s from './Post.module.css'

const Post =(p)=>{
    return (
        <div className={s.post}>
            <div className={s.postAva}>
            <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmMuRo09pWQN5rY3bsfn_6E0hT171CBpfaQ&usqp=CAU' />
                {p.name}
            </div>
            <div>
                {p.message}
            </div>
        </div>
    )
}

export default Post;