import { useNavigate } from "react-router-dom"

export const About = () => {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('../home')
    }

    return(
        <div>
            <h2>INI HALAMAN ABOUT</h2>
            <button onClick={handleClick}>Menuju Halaman Home</button>
        </div>
    )
}