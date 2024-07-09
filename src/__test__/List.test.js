import { render, screen } from "@testing-library/react";
import List from "../components/List";

describe('List tests', () => {
    it('Check if prop is being passed successfully', () => {
        render(<List title="To Do List"/>);

        expect(screen.getByText(/To Do List/i)).toBeInTheDocument();
    })



    it('Check if List is shown', () => {
        render(<List title="To Do List"/>);

        expect(screen.getByText(/true/i)).toBeInTheDocument();
    })

})