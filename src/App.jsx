import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomList from './CustomList'

function App() {
  const [allLists, setAllLists] = useState([
    {
      title: "Not yet invited",
      type: "ul",
      list: ["Sergio", "Jhonny"],
      inputValue: ''
    },
    {
      title: "Confirmed",
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
      title: "Maybe",
      type: "ol",
      list: ["Tizio", "Caio", "Sempronio"],
      inputValue: ''
    }
  ])

  return (
    <section id='app-container'>

      {allLists.map((elem, objIndex) => {
        const { title, type, list, inputValue } = elem

        return (
          <figure key={`list${objIndex}`}>
            <div >
              <h2>{title}</h2>
              <div>
                <input // list input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    const newAllLists = [...allLists];
                    newAllLists[objIndex].inputValue = e.target.value;
                    setAllLists(newAllLists)
                  }}
                />
                <button  // list button - Add guest to the list          
                  onClick={() => {
                    const newAllLists = [...allLists];  // refactoring?
                    const obj = newAllLists[objIndex];  // refactoring?
                    obj.list = [obj.inputValue, ...obj.list];
                    obj.inputValue = '';
                    setAllLists(newAllLists)
                  }}
                >Add to list</button>
              </div>
              <CustomList
                type={type}
                list={list}
                buttons={['Delete', 'Edit']}
                deleteGuest={(guestIndex) => {
                  // const newAllLists = [...allLists];  // refactoring?
                  // const obj = newAllLists[objIndex];  // refactoring?
                  elem.list = list.filter((guest, i) => i !== guestIndex);
                  setAllLists([...allLists])
                }}
                editGuest={(guestIndex) => {
                  const newAllLists = [...allLists];  // refactoring?
                  const obj = newAllLists[objIndex];  // refactoring?
                  obj.list = obj.list.map((guest, i) => {
                    if (i === guestIndex){
                      guest = obj.inputValue
                    }
                  });
                  obj.inputValue = '';
                  setAllLists(newAllLists)
                }}
              />
            </div>
          </figure>)
      })}

    </section>)
}

export default App



// const addGuest = (objIndex) => {
//   const newAllLists = [...allLists];
//   for (let ix = 0; ix < newAllLists.length; ix++) {
//     const obj = newAllLists[ix]
//     if (objIndex === ix) {
//       obj.list = [obj.inputValue, ...obj.list];
//       obj.inputValue = ''
//       break;
//     }
//   }
//   setAllLists(newAllLists)
// }