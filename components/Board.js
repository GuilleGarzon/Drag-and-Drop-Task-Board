import List from "../components/List"
import Card from "../components/Card"

const cardList = [
  {
    text: 'Implementar inicio de sesión'
  }
]

export default function Board() {
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
            cardList.map((item, index) => (
              <Card { ...item } key={index} />
            ))
          }        
        </List>

        <List
          name="TODO"
        >
          {
            cardList.map((item, index) => (
              <Card { ...item } key={index} />
            ))
          }        
        </List>

        <List
          name="TODO"
        >
          {
            cardList.map((item, index) => (
              <Card { ...item } key={index} />
            ))
          }        
        </List>
      </main>

      
    </div>
  )
}
