import groupImage from './assets/Group 77.png'

export default function Hero() {
    return (
      <>
      <section className='hero'>
      <img className='group-images' src={groupImage} alt="Images" />
      <h1 className='header'>Online Experiences</h1>
      <p className='text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </section>         
      </>
    )
      
  }