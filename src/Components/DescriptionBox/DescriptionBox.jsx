import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='Descriptionbox'>
       <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
       </div>
       <div className="descriptionbox-description">
        <p>eCommerce websites have become an integral part of any business’ success. The increase in online sales during the pandemic saw business owners moving from physical storefronts to digital solutions to sell online, helping to expand their reach and increase revenue.</p>
        <p>
        Whether you’re a beginner or already have a physical store, building an eCommerce site requires careful attention to design, aesthetics, navigation, and accessibility. These elements are vital for leaving a lasting impression and delivering a smooth shopping experience.
        </p>
       </div>
    </div>
  )
}

export default DescriptionBox