import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(x=>{
    return(
      <Card key={x.title} {...x}/>
    )
  })
  return (
    <div className="main">
      <Nav/>
      <section className="card-list">
        {cards}
      </section>
    </div>
  )
}

export default App
