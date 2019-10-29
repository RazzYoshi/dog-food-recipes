import React, { Component } from "react";
import "./Recipe.css";
import { Ingredients } from "./Ingredients";
import { Video } from "./Video";
import { Nutrition } from "./Nutrition";

// would normally store this in a .env
const assetsUrl = "https://rc-nomnom-assets.s3.us-east-2.amazonaws.com/"

export class Recipe extends Component {
  render() {
    const { title, ingredientsImg, chowImg, tagline, ingredients, video, nutrition } = this.props;
    return (
      <div className="Recipe">
        <div className="title">{title}</div>
        <div className="images">
        <img className="image-ingredients" src={assetsUrl + ingredientsImg}/>
        <img className="image-chow" src={assetsUrl + chowImg}/>
        </div>
        <div className="tagline">{tagline}</div>
        <Ingredients ingredients={ingredients} />
        <Video video={video}/>
        <Nutrition nutrition={nutrition}/>
      </div>
    );
  }
}

export default Recipe;
