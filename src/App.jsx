import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomList from './CustomList'

function App() {
  const [allLists, setAllLists] = useState([
    {
      title: "Non ancora invitati",
      type: "ul",
      list: ["Sergio", "Jhonny"],
      inputValue: ''
    },
    {
      title: "Confermati",
      type: "ul",
      list: ["Gianni", "Fausto", "Gigi"],
      inputValue: ''
    },
    {
      title: "Blacklist",
      type: "ul",
      list: ["Dwight", "Miles", "Bobby"],
      inputValue: ''
    },
    {
      title: "In forse",
      type: "ul",
      list: ["Tizio", "Caio", "Sempronio"],
      inputValue: ''
    }
  ])

  const handleInputValues = (currentIndex, value) => {
    const newListArray = [...allLists];
    for (let ix = 0; ix < newListArray.length; ix++) {
      const obj = newListArray[ix]
      if (currentIndex === ix) {
        obj.inputValue = value
        break;
      }
    }
    setAllLists(newListArray)
  }
  const handleAddToList = (currentIndex)=>{
    const newListArray = [...allLists];
    for (let ix = 0; ix < newListArray.length; ix++) {
      const obj = newListArray[ix]
      if (currentIndex === ix) {
        obj.list = [obj.inputValue, ...obj.list]
        break;
      }
    }
    setAllLists(newListArray)
  }
  return (<section id='app'>

    {allLists.map((elem, i) => {
      const { title, type, list, inputValue } = elem
      return (<figure key={`list${i}`}>

        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInputValues(i, e.target.value)}
          />
          <button
          onClick={()=>{
            handleAddToList(i)
          }}
          >Aggiungi</button>
        </div>
        <div >
          <h2>{title}</h2>
          <CustomList type={type} list={list} />
        </div>
      </figure>)
    })}

  </section>)
}

export default App

