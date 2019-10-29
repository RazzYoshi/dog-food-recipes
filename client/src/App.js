import React, { Component } from "react";
import { Recipe } from "./components/Recipe";
import "./App.css";

class App extends Component {
  state = {
    recipes: []
  };

  componentDidMount = () => {
    this.getRecipes()
      .then(resp => {
        this.setState({ recipes: resp.recipes });
      })
      .catch(err => console.error(err));
  };

  getRecipes = async () => {
    const response = await fetch("/api/recipes");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    const { recipes = [] } = this.state;
    return (
      <div className="App">
        <div className="gutter"/>
        {recipes.map((curr, i) => (
          <div className="recipe" id={i+1}>
            <Recipe {...{...curr}}/>
          </div>
        ))}
        <div className="gutter"/>
      </div>
    );
  }
}

export default App;
