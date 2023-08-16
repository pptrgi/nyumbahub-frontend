import React from 'react'
import image from '../../static/images/testImage.jpg'
import {PiX, PiArrowLeft, PiArrowRight, PiBedLight, PiBathtubLight, PiArrowsClockwiseLight, PiPhoneLight, PiWhatsappLogoLight} from 'react-icons/pi'

const WishlistCard = () => {
  return (
    <div className='flex flex-col gap-[1rem] bg-white w-full h-[400px] max-w-[320px]'>
        <div className='relative w-full h-3/5 overflow-hidden bg-red-200'>
            <img src={image} className='object-cover h-full w-full'></img>
            <span className='absolute top-0 right-0 p-4 text-h3 text-bodyColor z-20'><PiX /></span>

            <div className='flex items-center gap-1 absolute bottom-0 left-0 p-4 z-10 flex-wrap'>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem] py-0'>Featured</span>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem] py-0'>Reduced Price</span>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem] py-0'>For Rent</span>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem] py-0'>Top Seller</span>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem] py-0'>New Listing</span>
            </div>
            
        </div>
        <div className='w-full h-2/5 px-4'>
            <h3 className='font-poppinsSemibold text-titleColor mb-[1rem]'>KES 700,000</h3>
            <h3 className='truncate font-poppinsSemibold mb-[0.125rem] text-titleColor'>Villa Beach Mombasa Next to Beach</h3>
            <p className='truncate font-poppinsLight text-smaller sm:text-small md:text-small lg:text-small xl:text-small'>Nyali Beach, Nyali, Mombasa County, Kenya</p>
            
            <div className='flex justify-between items-center mt-[2rem]'>
                <div className='flex items-center space-x-[0.75rem]'>
                    <div className='flex items-center gap-[4px]'>
                        <span className='font-poppinsSemibold'>2</span>
                        <span className='text-h3'><PiBedLight /></span>  
                    </div>
                    <div className='flex items-center gap-[4px]'>
                        <span className='font-poppinsSemibold'>2</span>
                        <span className='text-h3'><PiBathtubLight /></span>
                    </div>
                </div>
                <div className='flex items-center space-x-3 text-h3'>
                    <span><PiArrowsClockwiseLight /></span>
                    <span><PiPhoneLight /></span>
                    <span><PiWhatsappLogoLight /></span>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default WishlistCard