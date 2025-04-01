import { useState } from "react";
import "./MatrixGame.css";

export default function MatrixGame() {
  const [matrix, setMatrix] = useState(Array(9).fill("white"));
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] !== "white") return; // Prevent multiple clicks on the same box
    
    const newMatrix = [...matrix];
    newMatrix[index] = "green";
    setMatrix(newMatrix);
    setClickOrder([...clickOrder, index]);

    if (clickOrder.length === 8) {
      changeToOrange([...clickOrder, index]);
    }
  };

  const changeToOrange = (order) => {
    order.forEach((idx, i) => {
      setTimeout(() => {
        setMatrix((prevMatrix) => {
          const updatedMatrix = [...prevMatrix];
          updatedMatrix[idx] = "orange";
          return updatedMatrix;
        });
      }, i * 500); // Delay each change for visualization
    });
  };

  return (
    <div className="matrix-container">
      {matrix.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="matrix-box"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
