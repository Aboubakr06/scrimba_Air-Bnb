import Navbar from './Navbar'
import Hero from './Hero'
import Cards from './Cards'
import Data from './Data' 
export default function App() {

  const cardsData = Data.map (item => {
    return <Cards
    key={item.id}
    item={item}
    />    
  })    
  return (
    <>
    <Navbar />
    <Hero />
    <section className='cards-list'>
      {cardsData}
    </section>
    </>
  )
    
}