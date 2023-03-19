import Navbar from './Navbar'
import Hero from './Hero'
import Cards from './Cards'
import Data from './Data' 
export default function App() {

  const cardsData = Data.map (item => {
    return <Cards
    key={item.id}
    img={item.coverImg} 
    rating={item.stats.rating} 
    review={item.stats.reviewCount} 
    location={item.location} 
    title={item.title} 
    price={item.price}
    openSpots={item.openSpots}
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