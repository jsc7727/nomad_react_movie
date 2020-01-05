import React from "react";
import PropTypes from "prop-types";

function Food({ foodList, picture, rating }) {
  const styles = { height: "100px" };
  React.createElement(picture, { style: styles });
  return (
    <div>
      <h3> I like {foodList}</h3>
      <h4>{rating}/5 </h4>
      <img src={picture} alt={foodList} />
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  reating: PropTypes.number
};

const foodILike = [
  {
    id: 1,
    name: "landscape1",
    image: "./imageLandscape/1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "landscape2",
    image: "./imageLandscape/2.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "landscape3",
    image: "./imageLandscape/3.jpg",
    rating: 4.5
  },
  {
    id: 4,
    name: "landscape4",
    image: "./imageLandscape/4.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "landscape5",
    image: "./imageLandscape/5.jpg",
    rating: 4.2
  }
];
function renderFood(dish) {
  console.log(dish);
  //Food.createElement("img", { style: `height: "100px"` });
  return (
    <Food
      key={dish.id}
      foodList={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
