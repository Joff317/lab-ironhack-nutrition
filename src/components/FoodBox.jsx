export default function FoodBox(props) {
  // console.log(props);

  const style = {
    container: {
      border: "1px solid",
      width: "700px",
      height: "auto",
    },
    img: {
      width: "180px",
      height: "180px",
    },
  };

  return (
    <div style={style.container}>
      <p>{props.data.name}</p>

      <img style={style.img} src={props.data.image} />

      <p>Calories: {props.data.calories}</p>
      <p>Servings {props.data.servings}</p>

      <p>
        <b>Total Calories: {props.data.servings * props.data.calories} </b> kcal
      </p>

      <button onClick={() => props.handleDelete(props.data.id)}>Delete</button>
    </div>
  );
}
