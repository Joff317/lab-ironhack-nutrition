import { useCallback, useRef, useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [datas, setDatas] = useState(foodsJson);
  const [newDatas, setNewDatas] = useState();

  const name = useRef();
  const image = useRef();
  const calories = useRef();
  const servings = useRef();

  const handleDelete = (id) => {
    const filtered = datas.filter((data) => id !== data.id);
    setDatas(filtered);
  };

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const newCard = {
      name: name.current?.value,
      image: image.current?.value,
      calories: calories.current?.value,
      servings: servings.current?.value,
    };
    console.log(newCard);
    setDatas([...datas, newCard]);
  }, []);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm
        handleSubmit={(event) => handleSubmit(event)}
        name={name}
        image={image}
        calories={calories}
        servings={servings}
      />
      {datas.map((data) => (
        <FoodBox key={data.id} data={data} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
