import { useState } from "react";

import "./App.css";
import { Card } from "./Card";
import { Body } from "./Body";

const cardItems = [
  { id: 1, type: "Mammal", name: "Lion" },
  { id: 2, type: "Bird", name: "Eagle" },
  { id: 3, type: "Reptile", name: "Komodo Dragon" },
  { id: 4, type: "Mammal", name: "Elephant" },
  { id: 5, type: "Marine Mammal", name: "Dolphin" },
  { id: 6, type: "Bird", name: "Penguin" },
  { id: 7, type: "Marsupial", name: "Kangaroo" },
  { id: 8, type: "Amphibian", name: "Poison Dart Frog" },
];
function App() {
  const [count, setCount] = useState(0);
  const [record, setRecord] = useState(0);
  const [clicked, setClicked] = useState(new Set());

  const handleClick = (id) => {
    if (clicked.has(id)) {
      if (count > record) {
        setRecord(count);
      }
      setClicked(new Set());
      setCount(0);
    }
    setClicked((prevClicked) => {
      const newClicked = new Set(prevClicked);
      newClicked.add(id);
      return newClicked;
    });
    setCount(count + 1);
  };

  return (
    <>
      <Nav states={(count, record)} />
      <Body>
        {cardItems.map((item) => {
          return (
            <Card
              key={item.id}
              item={item}
              onClick={() => handleClick(item.id)}
            />
          );
        })}
      </Body>
    </>
  );
}

function Nav({ states }) {
  return (
    <nav>
      <h1>Count: {states.count}</h1>
      <h1>Record: {states.record}</h1>
    </nav>
  );
}

export default App;
