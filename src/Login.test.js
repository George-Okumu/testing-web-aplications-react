import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { json } from "react-router";


describe('check for authenticated user', () => { 

    it('Check if handleLogin behaves well', () => {
        const username = { name: "George"};

        const handleLogin = jest.fn((user) => {
            localStorage.setItem('user', JSON.stringify(user));
        })

        expect(handleLogin).toHaveBeenCalledWith(username);

    })
})