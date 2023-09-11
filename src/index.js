import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "Rp. 40000",
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: "Rp. 35000",
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "Rp. 60000",
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "Rp. 60000",
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "Rp. 50000",
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "Rp. 50000",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Prinz</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to schoose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working out on our menu, please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);
  const HH_MM_SS = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  React.useEffect(function () {
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", HH_MM_SS).replace(/AM|PM/, "")
      );
    }, 1000);
  });
  return (
    <footer className="footer">
      {isOpen ? (
        <OpenOrder closeHour={closeHour} time={time} />
      ) : (
        <CloseOrder time={time} openHour={openHour} />
      )}
    </footer>
  );
}

function OpenOrder({ time, closeHour }) {
  return (
    <div className="order">
      <p>
        {time} We are making pizza! until {closeHour}:00 ⏰
      </p>
      <button className="btn">
        <a href="https://github.com/PrinzEugen39" target="_blank" rel="noreferrer">Order</a>
      </button>
    </div>
  );
}

function CloseOrder({ time, openHour }) {
  return (
    <div className="order">
      <p>
        {time} We are closed, open at {openHour}:00 ⏰
      </p>
      <button className="btn-close">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
