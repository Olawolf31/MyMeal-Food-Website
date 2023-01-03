import React from 'react'
import hero from './Images/hero.jpg'
import './Hero.css'

const Body = () => {
  return (
    <div className='hero'>
        <img className= 'hero-image' src={hero} alt="Delicious Meal" />
        <div className='hero-description'>
            <div className='hero-title'>Delicious Food, Delivered To You</div>
            <div className='hero-summary'>Choose your favorite MealI hope this post has helped you 
                understand and solve your problems with responsive images. </div>
                
                <div className='hero-summary'>If you want to learn more about web development, 
                feel free to check out my Youtube channel.</div>
                
        </div>
        <div className='hero-space'></div>
    </div>
  )
}

export default Body