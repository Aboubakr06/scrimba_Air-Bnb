import star from '../public/assets/Star 1.png'

export default function Cards(card) {
  let badgeText
    if (card.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (card.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
      <>
      <div className='card'>
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className='card-image' src={`assets/${card.item.coverImg}`} alt="images" />
      <div className='card-stats'>
        <img className='stats-star' src={star} alt="" />
        <span>{card.item.stats.rating}</span>
        <span className='gray'>({card.item.stats.reviewCount}) •</span>        
        <span className='gray'>{card.item.location}</span>
      </div>
      <p className='card-title'>{card.item.title}</p>
        <p className='card-price'><span className='bold'>From ${card.item.price}</span> / person</p>
      </div>         
      </>
    )
      
  }