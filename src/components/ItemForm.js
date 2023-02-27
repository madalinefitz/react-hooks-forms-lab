import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName]=useState('')
  const [itemCategory, setItemCategory]=useState("Produce")

  const addName=(e)=>{
    setItemName(e.target.value)
  }

  const chooseCategory=(e)=>{
    setItemCategory(e.target.value)
  }

  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={addName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={chooseCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
