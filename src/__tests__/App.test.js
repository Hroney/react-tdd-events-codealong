import { logRoles, render, screen } from "@testing-library/react";
import App from "../App";

import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

// Code tests here

test("pizza checkbox is initially unchecked", () => {
    render(<App />);

    const addPepperoni = screen.getByRole("checkbox", {
        value: /add pepperoni/i
    })

    expect(addPepperoni).not.toBeChecked();
})
test("toppings list initially contains only cheese", () => {
    render(<App />);

    expect(screen.getByText(/cheese/i)).toBeInTheDocument();
})
test("checkbox appears as checked when user clicks it", () => {
    render(<App />);

    const addPepperoni = screen.getByRole("checkbox", { name: /pepperoni/i })

    userEvent.click(addPepperoni)
    expect(addPepperoni).toBeChecked();
})
test("topping appears in toppings list when checked", () => {
    render(<App />)

    const addPepperoni = screen.getByRole("checkbox", { name: /pepperoni/i })

    userEvent.click(addPepperoni)

    expect(addPepperoni).toBeChecked();
    expect(screen.getByText("cheese")).toBeInTheDocument();
    expect(screen.getByText("pepperoni")).toBeInTheDocument();

    userEvent.click(addPepperoni)

    expect(addPepperoni).not.toBeChecked();
    expect(screen.getByText("cheese")).toBeInTheDocument();
    expect(screen.queryByText("pepperoni")).not.toBeInTheDocument();
})
