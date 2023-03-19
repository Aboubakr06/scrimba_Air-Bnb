import star from '../public/assets/Star 1.png'

export default function Cards(card) {
    return (
      <>
      <div className='card'>
      <img className='card-image' src={`assets/${card.img}`} alt="images" />
      <div className='card-stats'>
        <img className='stats-star' src={star} alt="" />
        <span>{card.rating}</span>
        <span className='gray'>({card.review}) •</span>        
        <span className='gray'>{card.location}</span>
      </div>
      <p className='card-title'>{card.title}</p>
        <p className='card-price'><span className='bold'>From ${card.price}</span> / person</p>
      </div>         
      </>
    )
      
  }