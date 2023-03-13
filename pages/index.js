import List from "../components/List"
import Card from "../components/Card"

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>  

      <List />
      <Card />
    </div>
  )
}
