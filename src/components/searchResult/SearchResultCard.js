import React from 'react'
import {PiWhatsappLogoLight, PiArrowsClockwiseLight, PiArrowLeft, PiArrowRight, PiHeartLight, PiBedLight, PiBathtubLight, PiMapPinLight, PiPhoneLight} from 'react-icons/pi'
import image from '../../static/images/testImage.jpg'
const SearchResultCard = () => {

  return (
    <div className='flex flex-col gap-[1rem] bg-white w-full h-[400px] max-w-[320px]'>
        <div className='relative w-full h-3/5 overflow-hidden bg-red-200'>
            <img src={image} className='object-cover h-full w-full'></img>
            <span className='absolute top-0 right-0 p-4 text-h3 text-bodyColor z-20'><PiHeartLight /></span>
            <div className='flex items-center gap-1 absolute top-0 left-0 p-4 z-10 flex-wrap'>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem]'>Featured</span>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem]'>Reduced Price</span>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem]'>For Rent</span>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem]'>Top Seller</span>
                <span className='uppercase font-poppinsLight text-tiny bg-[#f3e1d9] px-[0.125rem]'>New Listing</span>
            </div>
            <div className='absolute top-1/2 px-4 w-full'>
                <div className='flex justify-between items-center w-full'>
                    <span className='p-2 bg-white text-titleColor rounded-full'><PiArrowLeft /></span>
                    <span className='p-2 bg-white text-titleColor rounded-full'><PiArrowRight /></span>
                </div>

            </div>
            <div className='absolute bottom-0 left-0 pl-4 pb-2'>
                <span className='font-poppinsSemibold text-bodyColor'>KES 700,000</span>
            </div>
        </div>
        <div className='w-full h-2/5 px-4'>
            <h3 className='truncate font-poppinsSemibold mb-[0.125rem] text-titleColor'>Villa Beach Mombasa Next to Beach</h3>
            <div className='flex items-center space-x-1 '>
                <span className='text-h3'><PiMapPinLight /></span>
                <p className='truncate font-poppinsLight text-smaller sm:text-small md:text-small lg:text-small xl:text-small'>Nyali Beach, Nyali, Mombasa County, Kenya</p>
            </div>
            <div className='flex items-center gap-3 mt-[2rem]'>
                <div className='flex flex-col gap-[1px] items-center'>
                    <div className='flex items-center gap-[4px]'>
                        <span className='font-poppinsSemibold'>1</span>
                        <span className='text-default'><PiBedLight /></span>
                    </div>
                    <span className='text-tiny font-poppinsRegular sm:text-smaller md:text-smaller lg:text-smaller xl:text-smaller'>Bedrooms</span>
                </div>
                <div className='flex flex-col gap-[1px] items-center'>
                    <div className='flex items-center gap-[4px]'>
                        <span className='font-poppinsSemibold'>2</span>
                        <span className='text-default'><PiBathtubLight /></span>
                    </div>
                    <span className='text-tiny font-poppinsRegular sm:text-smaller md:text-smaller lg:text-smaller xl:text-smaller'>Bathrooms</span>
                </div>
            </div>
            <div className='flex justify-between items-center mt-[2rem]'>
                <span className='font-poppinsLight text-textColor text-smaller sm:text-small md:text-small lg:text-small xl:text-small'>View Property</span>
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

export default SearchResultCard