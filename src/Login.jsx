import { useState } from "react"

export default function Login({onLogin}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    function handleLogin(){
        if(name === "George" && email === "gokumu12@gmail.com"){
            const user = { name };
            localStorage.setItem('user', JSON.stringify(user));
            onLogin(user);
        }
    }

    return(<>
    <form>
        <input type="text" placeholder="Enter name"/>
        <input type="text" placeholder="Enter email" />

        <button onClick={handleLogin}>Login</button>
    </form>
    
    </>)
}