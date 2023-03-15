import { useState, useEffect } from "react"
import List from "../components/List"
import Card from "../components/Card"

const todoList = [
  {
    text: 'Registrarse',
    id: 'todoList-task-1'
  },
  {
    text: 'Iniciar Sesión',
    id: 'todoList-task-2'
  }
]

const inProgressList = [
  {
    text: 'Añadir otras actividades',
    id: 'inProgressList-task-1'
  }
]

const doneList = [
  {
    text: 'Realizar drag and drop',
    id: 'doneList-task-1'
  }
]

export default function Board() {

  const [dragged, setDragged] = useState(null)

  const [listOfLists, setListOfLists] = useState({
    todoList,
    inProgressList,
    doneList
  })  

  function handleDrop(event) {
    event.preventDefault()
    const list = event.currentTarget.dataset.list
    const listOfListsClone = structuredClone(listOfLists)
    const newList = listOfListsClone[dragged.list].filter(item => item.id !== dragged.data.id)
    listOfListsClone[dragged.list] = newList
    listOfListsClone[list].push(dragged.data)
    setListOfLists(listOfListsClone)
    console.log(event)
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        Development
      </h1>  

      <main className="flex justify-between gap-4">
        <List
          name="TODO"
          handleDrop={ handleDrop }
          id="todoList"
        >
          {
            listOfLists.todoList.map((item, index) => (
              <Card setDragged={ setDragged } { ...item } key={item.id} />
            ))
          }        
        </List>

        <List
          name="In Progress"
          handleDrop={ handleDrop }
          id="inProgressList"
        >
          {
            listOfLists.inProgressList.map((item, index) => (
              <Card setDragged={ setDragged } { ...item } key={item.id} />
            ))
          }        
        </List>

        <List
          name="Done"
          handleDrop={ handleDrop }
          id="doneList"
        >
          {
            listOfLists.doneList.map((item, index) => (
              <Card setDragged={ setDragged } { ...item } key={item.id} />
            ))
          }        
        </List>
      </main>

      
    </div>
  )
}
