import { useState, useEffect } from "react"
import List from "../components/List"
import Card from "../components/Card"

const todoList = [
  {
    text: 'tarea 1 Implementar inicio de sesión',
    id: 'todoList-task-1'
  },
  {
    text: 'tarea 2 Implementar inicio de sesión',
    id: 'todoList-task-2'
  }
]

const inProgressList = [
  {
    text: 'inprogress Implementar inicio de sesión',
    id: 'inProgressList-task-1'
  }
]

const doneList = [
  {
    text: 'done Implementar inicio de sesión',
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
    listOfListsClone[list].push(dragged)
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
