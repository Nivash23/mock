import React, { useState } from 'react'

function App() {
  const [drinksid, setDrinksid] = useState([]);
  const drinks = async () => {
    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?f=b')
    const data = await response.json();
    setDrinksid(data.drinks)
    console.log(data)
    drinksid.forEach(drink => {
      console.log(drink.idDrink)
    })
  }
  drinks();
  return (
    <div >
      <ul>
        {
          drinksid.map(drink => 
            <li>{ drink.idDrink}</li>
        )
        }
      </ul>
    </div>
  )
}

export default App
