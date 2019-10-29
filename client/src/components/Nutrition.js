import React, { Component } from "react";
import "./Nutrition.css";

export class Nutrition extends Component {
  render() {
    const { nutrition: {protein, fat, carbs} } = this.props;
    return (
      <div className="Nutrition">
        <table className="nutrition-table">
          <tr>
            <th></th>
            <td>Grams*</td> 
            <td>% of calories</td> 
          </tr>
          <tr className="nutrition-row">
              <th>Protein</th>
              <td className="nutrition-cell protein">{protein.grams}</td>
              <td className="nutrition-cell">{protein.percent}%</td>
          </tr>
          <tr className="nutrition-row">
              <th>Fat</th>
              <td className="nutrition-cell fat">{fat.grams}</td>
              <td className="nutrition-cell">{fat.percent}%</td>
          </tr>
          <tr className="nutrition-row">
              <th>Carbs</th>
              <td className="nutrition-cell carbs">{carbs.grams}</td>
              <td className="nutrition-cell">{carbs.percent}%</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Nutrition;
