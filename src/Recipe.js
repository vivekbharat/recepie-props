import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';


class Recipe extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      }


    render(){
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ingr, i) => (
            <li key={i}>{ingr}</li> 
        )); 
        return(
            
            <div className="recipe-card">
                <div className="recipe-card-image">
                    <img src={img} alt="Image" />
                </div>
                <div className = "recipe-card-content">
                    <h3 className = "recipe-card-title">{title}</h3>
                    <h4>
                        <ul>{ingredients}</ul>
                    </h4>
                    <h4>
                        <p>{instructions}</p>
                    </h4>
                </div>
            </div>
        );
    }
}

export default Recipe;