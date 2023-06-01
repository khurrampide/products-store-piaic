import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
  return (
    // CARD START
    <Link href="/productdetail">
    <div>
        <Image src="/products/flex-push-button-bomber.png" width={250} height={266} alt='Products' />
        <p className='text-base mt-2 font-semibold leading-6 tracking-[.03em] text-[#212121]'>Flex Push Button Bomber</p>
        <p className='text-[15px] mt-2 font-semibold leading-[15px] text-[#888]'>Jackets</p>
        <p className='text-xl mt-4 font-semibold leading-6 tracking-[.03em] text-[#212121]'>$ 225</p>
    </div>
    </Link>
    // CARD END
  )
}

export default ProductCard