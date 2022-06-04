import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const Banner = ({banner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <h1 className='beats-solo'>{banner.smallText}</h1>
        <h1>{banner.midText}</h1>
        <h1>{banner.largeText1}</h1>
        <img src={urlFor(banner.image)} alt='bag' className='hero-banner-image'></img>
        <div>
          <Link href={"/product/${banner.product}"}>
            <button type='button'>Buy Now</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Banner