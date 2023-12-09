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
      list: ["Jan", "Toby", "Karen", "David"],
      inputValue: ''
    },
    {
      title: "Confirmed",
      type: "ol",
      list: ["Angela", "Dwight", "Michael", "Meredith"],
      inputValue: ''
    },
    {
      title: "Blacklist",
      type: "ul",
      list: ["Cathy", "Jan", "Creed", "Ryan"],
      inputValue: ''
    },
    {
      title: "Maybe",
      type: "ol",
      list: ["Stanley", "Oscar", "Roy", "Hank"],
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
                <input                                      // list input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    const newAllLists = [...allLists];
                    newAllLists[objIndex].inputValue = e.target.value;
                    setAllLists(newAllLists)
                  }}
                />
                <button                                     // ADD BUTTON          
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
                  const newAllLists = [...allLists];   // refactoring?
                  const obj = newAllLists[objIndex];   // refactoring? 
                  obj.list = list.filter((guest, i) => i !== guestIndex);
                  setAllLists(newAllLists)
                }}
                editGuest={(guestIndex) => {
                  const newAllLists = [...allLists];   // refactoring?
                  const obj = newAllLists[objIndex];   // refactoring?
                  obj.list[guestIndex] = inputValue
                  setAllLists(newAllLists)
                  obj.inputValue = '';
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