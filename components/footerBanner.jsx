import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({ footerbanner : {discount, largeText1, saleTime, smallText, midText, product, buttonText, image, desc }}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <h3>{discount}</h3>
          <h3>{largeText1}</h3>
          <h3>{saleTime}</h3>
        </div>
        <div className='right'>
          <h3>{smallText}</h3>
          <h3>{midText}</h3>
          <Link href={`/product/${product}`}>
            <button type= "button">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner