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
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />

        <button onClick={handleLogin}>Login</button>
    
    </>)
}