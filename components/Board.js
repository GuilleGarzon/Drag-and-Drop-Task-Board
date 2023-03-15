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
  const [listOfLists, setListOfLists] = useState({
    todoList,
    inProgressList,
    doneList
  })

  useEffect(() => {
    setTimeout(() => {
      const listOfListsClone = structuredClone(listOfLists)
      listOfListsClone.inProgressList.push({
        text: 'ola k ase',
        id: crypto.randomUUID()
      })
      setListOfLists(listOfListsClone)
    }, 5000)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        Development
      </h1>  

      <main className="flex justify-between gap-4">
        <List
          name="TODO"
        >
          {
            listOfLists.todoList.map((item, index) => (
              <Card { ...item } key={item.id} />
            ))
          }        
        </List>

        <List
          name="In Progress"
        >
          {
            listOfLists.inProgressList.map((item, index) => (
              <Card { ...item } key={item.id} />
            ))
          }        
        </List>

        <List
          name="Done"
        >
          {
            listOfLists.doneList.map((item, index) => (
              <Card { ...item } key={item.id} />
            ))
          }        
        </List>
      </main>

      
    </div>
  )
}
