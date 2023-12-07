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
      type: "ol",
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
      type: "ol",
      list: ["Tizio", "Caio", "Sempronio"],
      inputValue: ''
    }
  ])
  
  const updateInputValues = (objIndex, value) => {
    const newAllLists = [...allLists];
    for (let ix = 0; ix < newAllLists.length; ix++) {
      const obj = newAllLists[ix]
      if (objIndex === ix) {
        obj.inputValue = value
        break;
      }
    }
    setAllLists(newAllLists)
  }
  const addGuest = (objIndex) => {
    const newAllLists = [...allLists];
    for (let ix = 0; ix < newAllLists.length; ix++) {
      const obj = newAllLists[ix]
      if (objIndex === ix) {
        obj.list = [obj.inputValue, ...obj.list];
        obj.inputValue = ''
        break;
      }
    }
    setAllLists(newAllLists)
  }
  const deleteGuest = (objIndex, stringIndex)=>{
    const newAllLists = [...allLists];
    for (let ix = 0; ix < newAllLists.length; ix++) {
      const obj = newAllLists[ix]
      if (objIndex === ix) {
        obj.list = obj.list.filter((guest, i)=> i!== stringIndex)
        break;
      }
    }
    setAllLists(newAllLists) 
  }
  return (<section id='app-container'>

    {allLists.map((elem, objIndex) => {
      const { title, type, list, inputValue } = elem
      return (<figure key={`list${objIndex}`}>

        <div >
          <h2>{title}</h2>
          <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => updateInputValues(objIndex, e.target.value)}
          />
          <button
          onClick={()=>{
            addGuest(objIndex)
          }}
          >Aggiungi</button>
        </div>
          <CustomList 
          type={type} 
          list={list} 
          buttons={['Elimina', 'Modifica']} 
          deleteGuest = {deleteGuest}
          objIndex = {objIndex}
          />
        </div>
      </figure>)
    })}

  </section>)
}

export default App

