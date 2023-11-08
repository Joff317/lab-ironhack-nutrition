import { useRef } from "react";

export default function AddFoodForm(props) {
  console.log(props);

  return (
    <>
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <div>
          <label htmlFor="name">Name</label>
          <input ref={props.name} id="name" type="text" />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="text"
            ref={props.image}
            alt="Submit"
            width="48"
            height="48"
          ></input>
        </div>

        <div>
          <label htmlFor="calories">Calories</label>
          <input ref={props.calories} id="calories" type="number" />
        </div>

        <div>
          <label htmlFor="servings">servings</label>
          <input ref={props.servings} id="servings" type="number" />
        </div>
        <button>Create</button>
      </form>
    </>
  );
}
