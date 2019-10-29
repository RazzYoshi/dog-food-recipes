import React, { Component } from "react";
import "./Ingredients.css";

export class Ingredients extends Component {
  
  render() {
    const { ingredients } = this.props;
    return (
      <div className="Ingredient">
        {ingredients.map((curr, i) => (
          <div className="ingredient" id={i+1}>
            <span className="ingredient-name">{curr.name}:</span>
            <span className="ingredient-info"> {curr.info}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Ingredients;