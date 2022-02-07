import { Link } from 'react-router-dom'

// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {

  if (recipes.length === 0) {
    return <div className='error'>No recipes were found...</div>
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>Takes {recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0,100)}...</div>
          <Link to={`/recipe/${recipe.id}`} id={recipe.id}>Cook this</Link>
        </div>
      ))}
    </div>
  );
}
