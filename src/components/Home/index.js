import {useState} from 'react'
import './index.css'

const Home = () =>{
    const [username , setUsername] = useState("")
    const [comment , setComment] = useState("")

    const onFormSubmit = (event) =>{
        event.preventDefalut()
    }



    const onChangeUsername = (event) =>setUsername(
        event.target.value
    )

    const onChangePassword = (event) =>setComment(
        event.target.value
    )

    return(
        <div className="bg-container">
            <h1>Welcome To React Hooks</h1>
            <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="Username" className="input-field" value={username} onChange={onChangeUsername}/>
            <input type="text" placeholder='Comment' className='input-field' value={comment} onChange={onChangePassword} />
            <button type='submit'>Comment</button>
            </form>
        </div>
    )
}

export default Home