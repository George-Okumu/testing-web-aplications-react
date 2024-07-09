import { useEffect, useState } from "react";
import Login from "./Login";
import List from "./List";

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    let userLoggedIn = localStorage.getItem('user');
    if (userLoggedIn) {
      setUser(JSON.parse(userLoggedIn));
    }
  }, [])

  function handleLogin(loggedInUser) {

    setUser(loggedInUser);

  }

  return (
    <div>
      {
        user ? (
          <div>
            <p>Welcome, {user.name}</p>
            <List title="To Do List" />
          </div>
        ) : (
          <div>
            <Login onLogin={handleLogin} />

          </div>
        )
      }
    </div>
  );
}

export default App;
