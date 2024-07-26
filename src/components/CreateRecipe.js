import React, { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";



export const CreateRecipe = () => {
  const userID = useGetUserID();
  const [cookies, _] = useCookies(["access_token"]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:3001/recipes",
        { ...recipe },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-recipe">
      <h1>|| Create Your Favourite Recipe ||</h1>
      <form onSubmit={handleSubmit}>

      <div>
      <div>
      <label htmlFor="name">Name :</label>
      </div>
      <div>
      <input
          className="inputs"
          type="text"
          id="name"
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />
      </div>
      </div>

      <div>
        <div>
        <label htmlFor="instructions">Instructions :</label>
        </div>
        <div>
        <textarea
          className="inputs"
          id="instructions"
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          rows="6" cols="50"
        ></textarea>
        </div>
        </div>
        
        <div>
        <div>
        <label htmlFor="imageUrl">Image URL :</label>
        </div>
        <div>
        <input
          className="inputs"
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={recipe.imageUrl}
          onChange={handleChange}
        />
        </div>
        
        </div>
        <div>
        <div>
        <label htmlFor="cookingTime">Cooking Time (minutes) :</label>
        </div>
        <div>
        <input
          className="inputsTime"
          type="number"
          id="cookingTime"
          name="cookingTime"
          value={recipe.cookingTime}
          onChange={handleChange}
        />
        </div>
        
        </div>
        
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};