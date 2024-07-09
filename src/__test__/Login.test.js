import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Login from "../components/Login";

describe('check for authenticated user', () => {

    it('Renders name when authenticated', () => {
        const username = { name: "George" };

        const handleLogin = jest.fn((user) => {
            localStorage.setItem('user', JSON.stringify(user));
        })

        render(<Login onLogin={handleLogin}/>);

        // Mimic change of event
        fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'George' } });
        fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'gokumu12@gmail.com' } });
        fireEvent.click(screen.getByText('Login'));

        expect(handleLogin).toHaveBeenCalledWith(username);

    })


    it('Checked if logged in username displays successfully', () => {
        render(<App/>)

        const greetingElement = screen.getByText(`Welcome, George`);
        expect(greetingElement).toBeInTheDocument();
    })
})