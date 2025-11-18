import React, { useState } from 'react'
import { EMICalculator } from '../emi-calculator/emi-calculator';
import { CarouselDemo } from '../carousel/carousel-domo';

const ConditionDemo = () => {
    const [view,setView] = useState(null);

    function handleEmi(){
        setView(<EMICalculator/>)
    }
    function handleCarousel(){
        setView(<CarouselDemo/>);
    }
  return (
    <div className='container-fluid'>
      <h2>Hime</h2>
      <button onClick={handleEmi} className='btn btn-primary'>EMI Calculator</button>
      <button onClick={handleCarousel} className='btn btn-warning mx-2'>Carousel</button>
      <hr />
      <div>
        {view}
      </div>
    </div>
  )
}

export default ConditionDemo
