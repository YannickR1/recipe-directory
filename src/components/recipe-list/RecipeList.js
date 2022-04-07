import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme';
import Trashcan from '../../assets/trashcan.svg'
import { projectFirestore } from '../../firebase/config';

// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const { mode } = useTheme()

  if (recipes.length === 0) {
    return <div className='error'>No recipes were found...</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  } 

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>Takes {recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0,100)}...</div>
          <Link to={`/recipe/${recipe.id}`} id={recipe.id}>Cook this</Link>
          <img className='delete' src={Trashcan} onClick={() => handleClick(recipe.id)}/>
        </div>
      ))}
    </div>
  );
}
