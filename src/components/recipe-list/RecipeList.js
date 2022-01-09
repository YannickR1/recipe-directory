// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <h2 key={recipe.id}>{recipe.title}</h2>
      ))}
    </div>
  );
}
