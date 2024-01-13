import React, { useState } from "react";

function App() {
  const [pizzaToppings, setPizzaToppings] = useState(["cheese"]);
  const [pepperoniChecked, setPepperoniChecked] = useState(pizzaToppings.includes("pepperoni"));

  function handleCheckBox(event) {
    const value = event.target.name;
    const isChecked = event.target.checked;

    setPepperoniChecked(isChecked);

    if (pizzaToppings.includes(value)) {
      setPizzaToppings(pizzaToppings.filter((topping) => topping !== value));
    } else {
      setPizzaToppings([...pizzaToppings, value]);
    }
  }

  return (
    <div>
      <h1>Select Pizza Topping</h1>
      <input
        type="checkbox"
        id="pepperoni"
        name="pepperoni"
        checked={pepperoniChecked}
        onChange={handleCheckBox}
      />
      <label htmlFor="pepperoni">{pepperoniChecked ? "Take off Pepperoni" : "Add Pepperoni"}</label>
      <ul>
        {pizzaToppings.map((topping) => {
          return <li key={topping}>{topping}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
